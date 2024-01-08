"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4557],{1503:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=o(5893),n=o(1151);const s={sidebar_position:6},i="Vovk Architecture",c={id:"vovk-architecture",title:"Vovk Architecture",description:'Vovk.ts combines back-end and front-end code into one code base. The logical parts of the app are split into folders called "modules" (or "virtual modules") given them corresponding name such as user, post, comment, app settings, auth features etc. Besically a module can belong to 2 categories:',source:"@site/docs/vovk-architecture.md",sourceDirName:".",slug:"/vovk-architecture",permalink:"/docs/vovk-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/vovk-architecture.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Worker Service",permalink:"/docs/worker"},next:{title:"API Reference",permalink:"/docs/api"}},a={},l=[{value:"Controller",id:"controller",level:2},{value:"Back-end Service",id:"back-end-service",level:2},{value:"Isomorphic Service",id:"isomorphic-service",level:2},{value:"Worker Service",id:"worker-service",level:2},{value:"State",id:"state",level:2},{value:"Other ideas",id:"other-ideas",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"vovk-architecture",children:"Vovk Architecture"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Vovk.ts"}),' combines back-end and front-end code into one code base. The logical parts of the app are split into folders called "modules" (or "virtual modules") given them corresponding name such as user, post, comment, app settings, auth features etc. Besically a module can belong to 2 categories:']}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:'An entity (a model) like "user" ("post", "comment" etc) requires to put all or most of the user code into "user" folder.'}),"\n",(0,r.jsx)(t.li,{children:"Anything what doesn't belong to some specific entity: app settings, auth, AI stuff... The typical structure of the app would look like that:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/src/vovk\n    /vovk-metadata.json\n    /app\n        /AppState.ts\n        /AppWorkerService.ts\n    /auth\n        /AuthState.ts\n        /AuthService.ts\n        /AuthController.ts\n    /hello\n        /HelloState.ts\n        /HelloService.ts\n        /HelloIsomorphicService.ts\n        /HelloWorkerService.ts\n        /HelloState.ts\n    /user\n        /UserState.ts\n        /UserService.ts\n        /UserController.ts\n        /UserIsomorphicService.ts\n    /post\n        /PostState.ts\n        /PostService.ts\n        /PostIsomorphicService.ts\n        /PostController.ts\n    /comment\n        /CommentState.ts\n        /CommentService.ts\n        /CommentController.ts\n"})}),"\n",(0,r.jsx)(t.p,{children:"Every item (service, controller, state etc) in a module folder is optional. Some parts of your app would require to have state only, but no controller. In other case you can have a state and controller, but database request in your controller is too simple to move it to a Service."}),"\n",(0,r.jsxs)(t.p,{children:["The image below illustrates how different components of the application import each other: thru regular ",(0,r.jsx)(t.code,{children:"import"})," or ",(0,r.jsx)(t.code,{children:"import type"})," + ",(0,r.jsx)(t.code,{children:"import metadata"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Vovk Architecture",src:o(5221).Z+"",width:"2193",height:"641"})}),"\n",(0,r.jsx)(t.h2,{id:"controller",children:"Controller"}),"\n",(0,r.jsx)(t.p,{children:"Controller is a static class that defines API endpoints. It can use Back-end Services and Isomorphic Services explained below. Controller is a static class that can be decorated with Vovk decorators that indicate their behaviour."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/post/PostController.ts\nimport { prefix, get } from 'vovk';\nimport PostService from './PostService';\n\n@prefix('post')\nexport default class PostController {\n    private static postService = PostService;\n    \n    @get()\n    static getPosts() {\n        return this.postService.getPosts();\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Decorators created with ",(0,r.jsx)(t.code,{children:"createDecorator"})," make possible to validate request, throw errors, redirect, or return something different."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/post/PostController.ts\nimport { prefix, get, type VovkRequest } from 'vovk';\nimport vovkZod from 'vovk-zod';\nimport { z } from 'zod';\nimport { authGuard } from '../../decorators';\nimport PostService from './PostService';\n\n@prefix('post')\nexport default class PostController {\n    private static postService = PostService;\n    \n    @put(':postId')\n    @authGuard()\n    @vovkZod(\n        z.object({\n            title: z.string()\n            content: z.string(),\n        }).strict(),\n        z.object({\n            moderationType: z.string(),\n        }).strict()\n    )\n    static updatePost(\n        req: VovkRequest<{ title: string; content: string; }, { moderationType: string }>, \n        { postId }: { postId: string }\n    ) {\n        const { title, content } = req.json();\n        const moderationType = req.nextUrl.searchParams.get('moderationType');\n        return this.postService.updatePost(postId, title, content, moderationType);\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Let's break down the example above that implements PUT endpoint that looks like that: ",(0,r.jsx)(t.code,{children:"/api/post/69?moderationType=nice"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"authGuard"})," is a custom decorator that may be created by you based on your authorisation environment."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"vovkZod"})," that's imported from ",(0,r.jsx)(t.a,{href:"https://github.com/finom/vovk-zod",children:"vovk-zod"})," performs Zod validation of body and query both on server-side and client-side."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"VovkRequest"})," generic partially re-defines ",(0,r.jsx)(t.code,{children:"NextRequest"})," type and makes ",(0,r.jsx)(t.code,{children:"req.json"})," as well as ",(0,r.jsx)(t.code,{children:"req.nextUrl.searchParams.get"})," return proper types."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"this.postService.updatePost"})," is invoked with properly-typed arguments after authorisation check, body validation and query validation."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:['Controllers can be "clientized" on the client-side to make it look like you call Controller methods directly. Requests first validated on the client-side using a validation library like ',(0,r.jsx)(t.strong,{children:"vovk-zod"})," used above."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/post/PostState.ts\nimport { clientizeController } from 'vovk/client';\nimport { zodValidateOnClient } from 'vovk-zod';\nimport type HelloController from './HelloController';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\nconst controller = clientizeController<typeof HelloController>(metadata.HelloController, {\n    validateOnClient: zodValidateOnClient,\n});\n\n// ...\nawait controller.updatePost({\n    body: { title: 'Hello', content: 'World' },\n    query: { moderationType: 'strict' }\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"back-end-service",children:"Back-end Service"}),"\n",(0,r.jsx)(t.p,{children:'Back-end Service (or just "Service") is a static class that implements third-party API calls or performs requests do the project database. By the pattern design Back-end Service does not validate incoming data. It doesn\'t require any decorators to be used and plays the role of a back-end library for your module.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/comment/CommentService.ts\nimport PostIsomorphicService from '../post/PostIsomorphicService';\nimport UserService from '../user/UserService';\n\nexport default class CommentService {\n    private static postIsomorphicServiceService = PostIsomorphicService;\n\n    private static userService = UserService;\n\n    static getAllUserComments(userId: User['id']) {\n        const user = await this.userService.getUserById(userId);\n        // ... perform database request\n        return // ...\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Services can be injected to a controller or other services using ",(0,r.jsx)(t.code,{children:"private static"})," prefix. The ",(0,r.jsx)(t.code,{children:"private"})," keyword is useful with ESLint and/or VSCode: they're going to indicate if no method uses the service."]}),"\n",(0,r.jsx)(t.h2,{id:"isomorphic-service",children:"Isomorphic Service"}),"\n",(0,r.jsxs)(t.p,{children:["Isomorphic Service is very similar to a Back-end Service but can be used both by front-end (State, Components, Worker Service, hooks, other Isomorphic Services ...) and back-end (Back-end Service, Controller, CLI scripts). The only difference is that its methods need to be pure functions (besides using ",(0,r.jsx)(t.code,{children:"console"})," object). It means that it shouldn't perform DB calls nor access application state but can use other Isomorphic Services."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/comment/CommentIsomorphicService.ts\nimport PostIsomorphicService from '../post/PostIsomorphicService';\n\nexport default class CommentIsomorphicService {\n    private static postIsomorphicService = PostIsomorphicService;\n\n    // pure function\n    static filterCommentsByPostId(comments: Comment[], posts: Post, postId: Post['id']) {\n        // also pure function\n        const post = this.postIsomorphicService.getPostById(posts, postId);\n        if(post.isDeleted) return [];\n        return comments.filter((comment) => comment.postId === postId);\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"worker-service",children:"Worker Service"}),"\n",(0,r.jsxs)(t.p,{children:["Every isomorphic service can be turned into a Worker Service by applying ",(0,r.jsx)(t.code,{children:"@worker()"})," decorator to its class. The decorator defines required ",(0,r.jsx)(t.code,{children:"onmessage"})," listeners if it's imported in a Web Worker environment. In other cases ",(0,r.jsx)(t.code,{children:"@worker()"})," decorator does nothing and still can be used as an Isomorphic Service."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/hello/HelloWorkerService.ts\nimport { worker } from 'vovk/worker';\n\n@worker()\nexport default class HelloWorkerService {\n    static workerName = 'HelloWorkerService';\n\n    static performHeavyCalculations() {\n        // ...\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"The worker can be promisified on the client-side."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/app/page.tsx\nimport type HelloWorkerService from '../vovk/hello/HelloWorkerService';\nimport metadata from '../vovk/vovk-metadata.json';\n\n// ...\nconst onClick = useCallback(async () => {\n    const worker = promisifyWorker<typeof HelloWorkerService>(\n        new Worker(new URL('../vovk/hello/HelloWorkerService.ts', import.meta.url)),\n        metadata.workers.HelloWorkerService,\n    );\n\n    const result = await worker.performHeavyCalculations();\n\n    console.log('result', result);\n}, []);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Workers can use other Isomorphic Services, Worker Services (using ",(0,r.jsx)(t.code,{children:"promisifyWorker"}),") and Back-end controllers using ",(0,r.jsx)(t.code,{children:"clientizeController"}),". Please check documentation of ",(0,r.jsx)(t.a,{href:"./worker",children:"Worker Serices"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"state",children:"State"}),"\n",(0,r.jsxs)(t.p,{children:["State file contains application state code corresponding to the module. It can use Isomorphic Services, promisified Worker Services and clientized controllers. State can be implemented with any application state library: Recoil, Redux, Redux Toolkit, MobX, custom context, or anything else because ",(0,r.jsx)(t.strong,{children:"Vovk.ts"})," does not cover state management topic."]}),"\n",(0,r.jsxs)(t.p,{children:["If a promisified worker is initialised outside of ",(0,r.jsx)(t.code,{children:"useEffect"})," or ",(0,r.jsx)(t.code,{children:"useCallback"})," it's recommended to check if ",(0,r.jsx)(t.code,{children:"Worker"})," exists in the current context and make the variable to equal ",(0,r.jsx)(t.code,{children:"null"})," in SSR environment."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/post/PostState.ts\nimport { clientizeController } from 'vovk/client';\nimport { promisifyWorker } from 'vovk/worker';\nimport type PostController from './PostController';\nimport type PostWorkerService from './PostWorkerService';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\nconst controller = clientizeController<typeof PostController>(metadata.PostController);\n\nconst worker = typeof Worker === 'undefined' ? null :\n    promisifyWorker<typeof PostWorker>(\n        new Worker(new URL('./PostWorkerService.ts', import.meta.url)),\n        metadata.workers.PostWorker\n    );\n\nexport function updatePost() {\n    return controller.updatePost(/* ... */);\n}\n\nexport function computeSomething() {\n    return this.worker?.calculateSomeNumber() ?? 0;\n}\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"other-ideas",children:"Other ideas"}),"\n",(0,r.jsx)(t.p,{children:"Vovk Architecture isn't limited by the things described above. I can imagine that you may want to add more files into your module folder."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"More Isomorphic Services to simplify the code."}),"\n",(0,r.jsx)(t.li,{children:"More Worker Services."}),"\n",(0,r.jsx)(t.li,{children:"Tests."}),"\n",(0,r.jsxs)(t.li,{children:["Some React Components that you want to categorise (",(0,r.jsx)(t.code,{children:"vovk/hello/HelloComponents/MyComponent.tsx"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Some types (",(0,r.jsx)(t.code,{children:"vovk/hello/HelloTypes.ts"}),")."]}),"\n",(0,r.jsx)(t.li,{children:"Anything else you can imagine."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5221:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/vovk-pattern-225a37c420c467bca646fb2ca4cc91ff.svg"},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>i});var r=o(7294);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);