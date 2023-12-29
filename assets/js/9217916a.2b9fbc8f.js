"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9570],{9156:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(5893),t=o(1151);const i={sidebar_position:5},s="Worker Service",a={id:"worker",title:"Worker Service",description:"vovk/worker module is intended to popularise Web Worker usage in your every day work. The standard Web Workers are awesome but they require to write additional code by using onmessage handler on both sides (main thread and Woker thread) and exchange data using postMessage. Vovk Worker Service applies the same principle that is used at clientizeController and builds main-thread client-side library using metadata and worker type. It uses built-in browser API aush as addEventListener and postMessage and does not call eval or Function constructor.",source:"@site/docs/worker.md",sourceDirName:".",slug:"/worker",permalink:"/docs/worker",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/worker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Streaming",permalink:"/docs/streaming"},next:{title:"The Vovk Pattern",permalink:"/docs/vovk-pattern"}},l={},c=[{value:"Promisify Worker Service",id:"promisify-worker-service",level:2},{value:"Worker termination",id:"worker-termination",level:2},{value:"Async generators",id:"async-generators",level:2},{value:"Clientize Controller inside a Worker Service",id:"clientize-controller-inside-a-worker-service",level:2},{value:"Using promisified Worker Service inside another Worker Service",id:"using-promisified-worker-service-inside-another-worker-service",level:2},{value:"Forking the Worker",id:"forking-the-worker",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"worker-service",children:"Worker Service"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"vovk/worker"})," module is intended to popularise Web Worker usage in your every day work. The standard Web Workers are awesome but they require to write additional code by using ",(0,n.jsx)(r.code,{children:"onmessage"})," handler on both sides (main thread and Woker thread) and exchange data using ",(0,n.jsx)(r.code,{children:"postMessage"}),". Vovk Worker Service applies the same principle that is used at ",(0,n.jsx)(r.code,{children:"clientizeController"})," and builds main-thread client-side library using metadata and worker type. It uses built-in browser API aush as ",(0,n.jsx)(r.code,{children:"addEventListener"})," and ",(0,n.jsx)(r.code,{children:"postMessage"})," and does not call ",(0,n.jsx)(r.code,{children:"eval"})," or ",(0,n.jsx)(r.code,{children:"Function"})," constructor."]}),"\n",(0,n.jsx)(r.p,{children:"Worker Service can be easily created from an Isomorphic Service. Reminder: Isomorphic Service is a static class that provides code that is shared between front-end and back-end. It should implement functions as static methods that don't have access to neither application state nor server-side capabilities such as database access."}),"\n",(0,n.jsxs)(r.p,{children:["To define required ",(0,n.jsx)(r.code,{children:"onmessage"})," handlers use ",(0,n.jsx)(r.code,{children:"@worker()"})," decorator and static ",(0,n.jsx)(r.code,{children:"workerName"})," property."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/vovk/hello/HelloWorkerService.ts\nimport { worker } from 'vovk/worker';\n\n@worker()\nexport default class HelloWorkerService {\n    static workerName = 'HelloWorkerService';\n\n    static heavyCalculation(iterations: number) {\n        let result: number;\n        // ... heavy calculations\n\n        return result;\n    }\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["In a non-worker environment ",(0,n.jsx)(r.code,{children:"@worker()"})," does nothing. You can import the Isomorphic Service class safely in other modules as before (on back-end, for example)."]}),"\n",(0,n.jsxs)(r.p,{children:["To make workers information available on the main thread using ",(0,n.jsx)(r.strong,{children:"vovk-metadata.json"})," file, you need to pass them to\n",(0,n.jsx)(r.code,{children:"initVovk"})," as ",(0,n.jsx)(r.code,{children:"workers"})," option."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/app/api/[[...]]/route.ts\nimport { initVovk } from 'vovk';\nimport HelloController from '../../../hello/HelloController';\nimport HelloWorker from '../../../hello/HelloWorker';\nimport ByeWorker from '../../../bye/ByeWorker';\n\nexport const { GET, POST, PUT, DELETE } = initVovk({\n  controllers: [HelloController],\n  workers: [HelloWorker, ByeWorker]\n  // ...\n});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["To trigger metadata creation manually, open ",(0,n.jsx)(r.a,{href:"http://localhost:3000/api",children:"http://localhost:3000/api"})," in your browser (it's OK to see 404 error since the root endpoint isn't defined)."]}),"\n",(0,n.jsx)(r.h2,{id:"promisify-worker-service",children:"Promisify Worker Service"}),"\n",(0,n.jsxs)(r.p,{children:["To create the main-thread library that utilises the Worker Service in a separate thread use ",(0,n.jsx)(r.code,{children:"promisifyWorker"}),". Thanks to Next.js you can create a Web Worker from at .ts file with no need to set up custom Webpack loaders."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\nimport type HelloWorkerService from './HelloWorkerService';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\n// ...\nconst worker = promisifyWorker<typeof HelloWorkerService>(\n    new Worker(new URL('./HelloWorkerService.ts', import.meta.url)),\n    metadata.workers.HelloWorkerService\n);\n\n// result is casted as number\nconst result = await worker.heavyCalculation(100_000_000);\n// ...\n"})}),"\n",(0,n.jsxs)(r.p,{children:["As you can see ",(0,n.jsx)(r.code,{children:"heavyCalculation"})," returns ",(0,n.jsx)(r.code,{children:"Promise"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["If you use ",(0,n.jsx)(r.code,{children:"Worker"})," constructor outside of ",(0,n.jsx)(r.code,{children:"useEffect"})," it's recommended to check if ",(0,n.jsx)(r.code,{children:"Worker"})," is ",(0,n.jsx)(r.code,{children:"undefined"})," and make the variable to be nullish to avoid SSR errors."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\nimport { promisifyWorker } from 'vovk/worker';\nimport type HelloWorkerService from './HelloWorkerService';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\nconst worker = typeof Worker !== 'undefined' ?\n    promisifyWorker<typeof HelloWorkerService>(\n        new Worker(new URL('./HelloWorkerService.ts', import.meta.url)),\n        metadata.workers.HelloWorkerService\n    ) : null;\n\nexport async function performHeavyCalculation (iterations: number) {\n    /* worker?.heavyCalculation is casted as \n        null | (iterations: number) => Promise<number>\n    */\n    const result = await worker?.heavyCalculation(100_000_000) ?? 0;\n\n    // result is casted as number\n    return result;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"worker-termination",children:"Worker termination"}),"\n",(0,n.jsxs)(r.p,{children:["A worker can be terminated with built-in ",(0,n.jsx)(r.code,{children:"terminate"})," method."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"worker?.terminate();\n"})}),"\n",(0,n.jsx)(r.h2,{id:"async-generators",children:"Async generators"}),"\n",(0,n.jsx)(r.p,{children:"Worker Service supports generators and async generators to implement continious event streaming."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/vovk/hello/HelloWorkerService.ts\nimport { worker } from 'vovk/worker';\n\n@worker()\nexport default class HelloWorkerService {\n    static workerName = 'HelloWorkerService';\n\n    static *generator() {\n        for (let i = 0; i < 10; i++) {\n            yield i;\n        }\n    }\n\n    static async *asyncGenerator() {\n        for (let i = 0; i < 10; i++) {\n            await new Promise((resolve) => setTimeout(resolve, 100));\n            yield i;\n        }\n    }\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"When promisified they both turn into an async generator."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const worker = promisifyWorker<typeof HelloWorkerService>(/* ... */);\n\nfor await (const number of worker.generator()) {\n    console.log(number); // 0 ... 9\n}\n\nfor await (const number of worker.asyncGenerator()) {\n    console.log(number); // 0 ... 9\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"clientize-controller-inside-a-worker-service",children:"Clientize Controller inside a Worker Service"}),"\n",(0,n.jsx)(r.p,{children:"Since Web Workers are run in a browser (but in another thread) it's capable to fetch server-side data."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/vovk/hello/HelloController.ts\nimport { get } from 'vovk';\n\nexport class HelloController {\n    static controllerName = 'HelloController';\n\n    @get.auto()\n    static getIterations() {\n        return { iterations: 100_000_000 };\n    }\n}\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/vovk/hello/HelloWorkerService.ts\nimport { clientizeController } from 'vovk/client';\nimport type HelloController from './HelloController';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\ntype HelloControllerType = typeof HelloController;\n\n@worker()\nexport default class HelloWorkerService {\n    static workerName = 'HelloWorkerService';\n\n    private static controller = clientizeController<HelloControllerType>(metadata.HelloController);\n\n    static async heavyCalculation() {\n        const { iterations } = await this.controller.getIterations();\n        let result: number;\n\n        // ...\n\n        return result;\n    }\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"Then call the Worker Service method as expected."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\n// ...\nconst worker = // ...\n\nexport async function heavyCalculation (iterations: number) {\n    const result = await worker?.heavyCalculation() ?? 0;\n    return result;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"using-promisified-worker-service-inside-another-worker-service",children:"Using promisified Worker Service inside another Worker Service"}),"\n",(0,n.jsxs)(r.p,{children:["It is possible to use ",(0,n.jsx)(r.code,{children:"promisifyWorker"})," inside other workers. The syntax remains the same and you don't need to check ",(0,n.jsx)(r.code,{children:"Worker"})," existence."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import type HelloAnotherWorkerService from './HelloAnotherWorkerService';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\nexport default class WorkerService {\n    static workerName = 'WorkerService';\n\n    private static anotherWorker = promisifyWorker<typeof HelloAnotherWorkerService>(\n        new Worker(new URL('./HelloAnotherWorkerService.ts', import.meta.url)),\n        metadata.workers.HelloAnotherWorkerService\n    );\n\n    heavyCalculation() {\n        const anotherWorkerResult = await this.anotherWorker.doSomethingHeavy();\n        // ...\n    }\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"forking-the-worker",children:"Forking the Worker"}),"\n",(0,n.jsxs)(r.p,{children:["To fork the worker you can simply call ",(0,n.jsx)(r.code,{children:"promisifyWorker"})," multiple times. The methods of the forks are going to be run in parallel."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const fork = () => {\n    const worker = typeof Worker !== 'undefined' ?\n        promisifyWorker<typeof HelloWorkerService>(\n            new Worker(new URL('./HelloWorkerService.ts', import.meta.url)),\n            metadata.workers.HelloWorkerService\n        ) : null;\n\n    return worker;\n}\n\nconst worker1 = fork();\nconst worker2 = fork();\nconst worker3 = fork();\n\nconst [result1, result2, result3] = await Promise.all([\n    worker1?.heavyCalculation(),\n    worker2?.heavyCalculation(),\n    worker3?.heavyCalculation(),\n]);\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,o)=>{o.d(r,{Z:()=>a,a:()=>s});var n=o(7294);const t={},i=n.createContext(t);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);