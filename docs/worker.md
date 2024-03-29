---
sidebar_position: 2
---

# Worker Service Class

Web Worker features provided by Vovk.ts is intended to popularise threading in browser. The standard Web Workers are awesome but they require to write additional logic by using `onmessage` handler on both sides (main thread and the Woker thread) and exchange data using `postMessage`. Vovk.ts applies the same principle that is used at controllers and builds main-thread client-side library using the auto-generated **.vovk.json**. It uses built-in browser API aush as `addEventListener` and `postMessage` and does not utilise `eval` function or `Function` constructor.

Worker Service Class (don't confuse with [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)) is created from an [Isomorphic Service Class](./project-structure) by applying `@worker()` class decorator that defines `onmessage` handler in the Web Worker scope. Isomorphic Service Class is a static class that provides code that is shared between front-end and back-end. It should implement [pure functions](https://en.wikipedia.org/wiki/Pure_function) that don't have access to neither application state nor server-side capabilities such as access to the database.

```ts
// /src/modules/hello/HelloWorkerService.ts
import { worker } from 'vovk';

@worker()
export default class HelloWorkerService {
    static heavyCalculation(iterations: number) {
        let result: number;
        // ... heavy calculations

        return result;
    }
}
```

In a non-worker scope `@worker()` does nothing. You can import the class safely in other modules, including back-end code where it's going to be behave as a normal collection of pure functions. 

To compile the worker interface, you need to pass them to `initVovk` as `workers` object option and export the type of this object as `Workers`.


```ts
// /src/app/api/[[...vovk]]/route.ts
import { initVovk } from 'vovk';
import HelloController from '../../../hello/HelloController';
import HelloWorker from '../../../hello/HelloWorker';
import ByeWorker from '../../../bye/ByeWorker';

const controllers = { HelloController };
const workers = { HelloWorker, ByeWorker };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
```


Once this is done, **vovk-client** is going to export the worker library that provides interface to invoke heavy calculations but doesn't initialise Web Worker itself. To initialise the Web Worker at the main-thread interface it needs to be initialised and passed as an argument of `use` static method.

```ts
import { HelloWorker } from 'vovk-client';

HelloWorker.use(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));
```

This bulky syntax is required to invoke the Webpack 5+ loader used by Next.js internally. After it's done the static methods of the mapped class type return `Promise` to delegate heavy calculations to the parallel thread.

```ts
const result = await HelloWorker.heavyCalculation(1e9);
```

Note that `Worker` class does not exist in Next.js SSR environment and in case if the code is exposed to non-client-side environment (for example outside of `useEffect`) it's recommended to check `Worker` for existence.

```ts
import { HelloWorker } from 'vovk-client';

if(typeof Worker !== 'undefined') {
    HelloWorker.use(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));
}
```

`use` method returns the worker interface itself so as a nicer solution you can use ternary operator to make the Worker library to be nullish.

```ts
import { HelloWorker } from 'vovk-client';

const MyWorker = typeof Worker === 'undefined' 
    ? null 
    : HelloWorker.use(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));

await MyWorker?.heavyCalculation(1e9);
```

## Worker termination

A worker can be terminated with built-in `terminate` method.

```ts
worker.terminate();
```

## Async generators

Worker Service supports generators and async generators to implement continious event streaming. 

```ts
// /src/modules/hello/HelloWorker.ts
import { worker } from 'vovk';

@worker()
export default class HelloWorkerService {
    static *generator() {
        for (let i = 0; i < 10; i++) {
            yield i;
        }
    }

    static async *asyncGenerator() {
        for (let i = 0; i < 10; i++) {
            await new Promise((resolve) => setTimeout(resolve, 100));
            yield i;
        }
    }
}
```

Vovk.ts turns them both into an async generators when they're imported from **vovk-client**.

```ts
import { HelloWorker } from 'vovk-client';

// ... plug in the Web Worker with "use" method ...

for await (const number of HelloWorker.generator()) {
    console.log(number); // 0 ... 9
}

for await (const number of HelloWorker.asyncGenerator()) {
    console.log(number); // 0 ... 9
}
```

## Making HTTP requests inside a Worker Service Class

Since Web Workers are run in a browser (but just in another thread) it's capable to fetch server-side data as expected.

```ts
// /src/modules/hello/HelloController.ts
import { get } from 'vovk';

export class HelloController {
    @get.auto()
    static getIterations() {
        return { iterations: 100_000_000 };
    }
}
```

```ts
// /src/modules/hello/HelloWorker.ts
import { HelloController } from 'vovk-client';

@worker()
export default class HelloWorker {
    static private helloController = HelloController;

    static async heavyCalculation() {
        const { iterations } = await this.helloController.getIterations();
        let result: number;

        // ...

        return result;
    }
}
```

## Using Worker Service Class inside another Worker Service Class

Workers can use other workers. The syntax remains the same and you don't need to check for `Worker` variable to exist.

```ts
import { AnotherWorker } from 'vovk-client';

export default class WorkerService {
    private static anotherWorker = AnotherWorker;

    heavyCalculation() {
        const anotherWorkerResult = await this.anotherWorker.doSomethingHeavy();
        // ...
    }
}
```

## Forking the Worker

To fork the worker and create as many parallel processes as needed you can use `fork` method instead of `use`.

```ts
import { HelloWorker } from 'vovk-client';

function getFork() {
    return HelloWorker.fork(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));
}

const HelloWorker1 = getFork();
const HelloWorker2 = getFork();
const HelloWorker3 = getFork();

const [result1, result2, result3] = await Promise.all([
    HelloWorker1.heavyCalculation(),
    HelloWorker2.heavyCalculation(),
    HelloWorker3.heavyCalculation(),
]);
```


