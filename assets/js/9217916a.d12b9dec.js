"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9570],{9156:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(5893),t=n(1151);const s={sidebar_position:2},i="Worker Service",a={id:"worker",title:"Worker Service",description:"Web Worker feature provided by Vovk.ts is intended to popularise Web Worker usage in your every day coding. The standard Web Workers are awesome but they require to write additional logic by using onmessage handler on both sides (main thread and Woker thread) and exchange data using postMessage. Vovk.ts applies the same principle that is used at controllers and builds main-thread client-side library using the auto-generated .vovk.json. It uses built-in browser API aush as addEventListener and postMessage and does not utilise eval or Function constructor.",source:"@site/docs/worker.md",sourceDirName:".",slug:"/worker",permalink:"/docs/worker",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/worker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Controller",permalink:"/docs/controller"},next:{title:"Custom Decorators",permalink:"/docs/decorators"}},l={},c=[{value:"Worker termination",id:"worker-termination",level:2},{value:"Async generators",id:"async-generators",level:2},{value:"Making HTTP requests inside a Worker Service",id:"making-http-requests-inside-a-worker-service",level:2},{value:"Using Worker Service inside another Worker Service",id:"using-worker-service-inside-another-worker-service",level:2},{value:"Fork the Worker",id:"fork-the-worker",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"worker-service",children:"Worker Service"}),"\n",(0,o.jsxs)(r.p,{children:["Web Worker feature provided by Vovk.ts is intended to popularise Web Worker usage in your every day coding. The standard Web Workers are awesome but they require to write additional logic by using ",(0,o.jsx)(r.code,{children:"onmessage"})," handler on both sides (main thread and Woker thread) and exchange data using ",(0,o.jsx)(r.code,{children:"postMessage"}),". Vovk.ts applies the same principle that is used at controllers and builds main-thread client-side library using the auto-generated ",(0,o.jsx)(r.strong,{children:".vovk.json"}),". It uses built-in browser API aush as ",(0,o.jsx)(r.code,{children:"addEventListener"})," and ",(0,o.jsx)(r.code,{children:"postMessage"})," and does not utilise ",(0,o.jsx)(r.code,{children:"eval"})," or ",(0,o.jsx)(r.code,{children:"Function"})," constructor."]}),"\n",(0,o.jsx)(r.p,{children:"Worker Service can be easily created from an Isomorphic Service. Reminder: Isomorphic Service is a static class that provides code that is shared between front-end and back-end. It should implement functions as static methods that don't have access to neither application state nor server-side capabilities such as database access. More information about Isomorphic Services can be found at !!!!! architecture docs."}),"\n",(0,o.jsxs)(r.p,{children:["To define required ",(0,o.jsx)(r.code,{children:"onmessage"})," handlers use ",(0,o.jsx)(r.code,{children:"@worker()"})," decorator."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// /src/modules/hello/HelloWorkerService.ts\nimport { worker } from 'vovk';\n\n@worker()\nexport default class HelloWorkerService {\n    static heavyCalculation(iterations: number) {\n        let result: number;\n        // ... heavy calculations\n\n        return result;\n    }\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In a non-worker environment ",(0,o.jsx)(r.code,{children:"@worker()"})," does nothing. You can import the Isomorphic Service class safely in other modules as usually (on back-end, for example)."]}),"\n",(0,o.jsxs)(r.p,{children:["To make workers information available on the main thread, you need to pass them to\n",(0,o.jsx)(r.code,{children:"initVovk"})," as ",(0,o.jsx)(r.code,{children:"workers"})," option."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// /src/app/api/[[...vovk]]/route.ts\nimport { initVovk } from 'vovk';\nimport HelloController from '../../../hello/HelloController';\nimport HelloWorker from '../../../hello/HelloWorker';\nimport ByeWorker from '../../../bye/ByeWorker';\n\nconst controllers = { HelloController };\nconst workers = { HelloWorker, ByeWorker };\n\nexport type Controllers = typeof controllers;\nexport type Workers = typeof workers;\n\nexport const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Once this is done, ",(0,o.jsx)(r.strong,{children:"vovk-client"})," exports the main-thread Worker Service library that provides interface to invoke heavy calculations but doesn't initialise Web Worker itself. To plug-in the worker to the main-thread worker interface it needs to be initialised and passed as an argument of ",(0,o.jsx)(r.code,{children:"use"})," static method."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { HelloWorker } from 'vovk-client';\n\nHelloWorker.use(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Unfortunately this bulky syntax in unavoidable and required to invoke internal Webpack loaders provided by Next.js. After it's done the Worker static methods return ",(0,o.jsx)(r.code,{children:"Promise"})," to delegate heavy calculations to the parallel thread."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"const result = await HelloWorker.heavyCalculation(1e9);\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Note that ",(0,o.jsx)(r.code,{children:"Worker"})," class does not exist in Next.js SSR environment and in case if the code is exposed to non-client-side environment (for example outside of ",(0,o.jsx)(r.code,{children:"useEffect"}),") it's recommended to check ",(0,o.jsx)(r.code,{children:"Worker"})," for existence."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { HelloWorker } from 'vovk-client';\n\nif(typeof Worker !== 'undefined') {\n    HelloWorker.use(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"use"})," method returns the worker interface itself so as a nicer solution you can use ternary operator to make the Worker library nullish."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { HelloWorker } from 'vovk-client';\n\nconst MyWorker = typeof Worker === 'undefined' \n    ? null \n    : HelloWorker.use(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));\n\nawait MyWorker?.heavyCalculation(1e9);\n"})}),"\n",(0,o.jsx)(r.h2,{id:"worker-termination",children:"Worker termination"}),"\n",(0,o.jsxs)(r.p,{children:["A worker can be terminated with built-in ",(0,o.jsx)(r.code,{children:"terminate"})," method."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"worker.terminate();\n"})}),"\n",(0,o.jsx)(r.h2,{id:"async-generators",children:"Async generators"}),"\n",(0,o.jsx)(r.p,{children:"Worker Service supports generators and async generators to implement continious event streaming."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// /src/modules/hello/HelloWorker.ts\nimport { worker } from 'vovk';\n\n@worker()\nexport default class HelloWorkerService {\n    static *generator() {\n        for (let i = 0; i < 10; i++) {\n            yield i;\n        }\n    }\n\n    static async *asyncGenerator() {\n        for (let i = 0; i < 10; i++) {\n            await new Promise((resolve) => setTimeout(resolve, 100));\n            yield i;\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:"Vovk.ts turns them both into an async generator."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { HelloWorker } from 'vovk-client';\n\n// ... plug in the Web Worker with \"use\" method ...\n\nfor await (const number of HelloWorker.generator()) {\n    console.log(number); // 0 ... 9\n}\n\nfor await (const number of HelloWorker.asyncGenerator()) {\n    console.log(number); // 0 ... 9\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"making-http-requests-inside-a-worker-service",children:"Making HTTP requests inside a Worker Service"}),"\n",(0,o.jsx)(r.p,{children:"Since Web Workers are run in a browser (but just in another thread) it's capable to fetch server-side data as usually."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// /src/modules/hello/HelloController.ts\nimport { get } from 'vovk';\n\nexport class HelloController {\n    @get.auto()\n    static getIterations() {\n        return { iterations: 100_000_000 };\n    }\n}\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// /src/modules/hello/HelloWorker.ts\nimport { HelloController } from 'vovk-client';\n\n@worker()\nexport default class HelloWorker {\n    static private helloController = HelloController;\n\n    static async heavyCalculation() {\n        const { iterations } = await this.helloController.getIterations();\n        let result: number;\n\n        // ...\n\n        return result;\n    }\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"using-worker-service-inside-another-worker-service",children:"Using Worker Service inside another Worker Service"}),"\n",(0,o.jsxs)(r.p,{children:["Workers can use other workers. The syntax remains the same and you don't need to check ",(0,o.jsx)(r.code,{children:"Worker"})," existence."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { AnotherWorker } from 'vovk-client';\n\nexport default class WorkerService {\n    private static anotherWorker = AnotherWorker;\n\n    heavyCalculation() {\n        const anotherWorkerResult = await this.anotherWorker.doSomethingHeavy();\n        // ...\n    }\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"fork-the-worker",children:"Fork the Worker"}),"\n",(0,o.jsxs)(r.p,{children:["To fork the worker and create as many parallel processes as needed you can use ",(0,o.jsx)(r.code,{children:"fork"})," method instead of ",(0,o.jsx)(r.code,{children:"use"}),"."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { HelloWorker } from 'vovk-client';\n\nfunction getFork() {\n    return HelloWorker.fork(new Worker(new URL('./path/to/HelloWorker.ts', import.meta.url)));\n}\n\nconst HelloWorker1 = getFork();\nconst HelloWorker2 = getFork();\nconst HelloWorker3 = getFork();\n\nconst [result1, result2, result3] = await Promise.all([\n    HelloWorker1.heavyCalculation(),\n    HelloWorker2.heavyCalculation(),\n    HelloWorker3.heavyCalculation(),\n]);\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>i});var o=n(7294);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);