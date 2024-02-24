"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1516],{3665:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=s(5893),r=s(1151);const n={sidebar_position:4},i="Project Structure",c={id:"project-structure",title:"Project Structure",description:"This page explains how you could structure an application introducing a framework that you can optionally apply to a large project that uses Vovk.ts.",source:"@site/docs/project-structure.md",sourceDirName:".",slug:"/project-structure",permalink:"/docs/project-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/project-structure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Decorators for Controller Methods",permalink:"/docs/decorators"},next:{title:"API",permalink:"/docs/api"}},a={},l=[{value:"Controller Class",id:"controller-class",level:2},{value:"Back-end Service Class",id:"back-end-service-class",level:2},{value:"Isomorphic Service Class",id:"isomorphic-service-class",level:2},{value:"Worker Service Class",id:"worker-service-class",level:2},{value:"State",id:"state",level:2},{value:"Other ideas",id:"other-ideas",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"project-structure",children:"Project Structure"}),"\n",(0,o.jsx)(t.p,{children:"This page explains how you could structure an application introducing a framework that you can optionally apply to a large project that uses Vovk.ts."}),"\n",(0,o.jsx)(t.p,{children:'The framework combines back-end and front-end code into one code base. The logical parts of the app are split into folders called "modules" given them corresponding name such as user, post, comment, app settings, auth features etc. Besically, a module can belong to 2 categories:'}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'An entity (a model) like "user" ("post", "comment" etc) requires to put all or most of the user code into "user" folder.'}),"\n",(0,o.jsx)(t.li,{children:"Anything what doesn't belong to some specific entity: app settings, auth, AI stuff..."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The typical structure of files and folders in a Vovk.ts app would look like that:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"/src/modules\n    /app\n        /AppState.ts\n        /AppWorkerService.ts\n    /auth\n        /AuthState.ts\n        /AuthService.ts\n        /AuthController.ts\n    /hello\n        /HelloState.ts\n        /HelloService.ts\n        /HelloIsomorphicService.ts\n        /HelloWorkerService.ts\n        /HelloState.ts\n    /user\n        /UserState.ts\n        /UserService.ts\n        /UserController.ts\n        /UserIsomorphicService.ts\n    /post\n        /PostState.ts\n        /PostService.ts\n        /PostIsomorphicService.ts\n        /PostController.ts\n    /comment\n        /CommentState.ts\n        /CommentService.ts\n        /CommentController.ts\n"})}),"\n",(0,o.jsx)(t.p,{children:"Every item in a module folder (Service Class, Controller Class, state etc) is optional. Some parts of your app would require to have state only, but no controller. In another case you can have a state and a controller, but database request in your controller is too simple to move it to a service..."}),"\n",(0,o.jsx)(t.p,{children:"The image below illustrates how different components of the application can be related to each other."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Vovk Framework",src:s(4364).Z+"",width:"2093",height:"601"})}),"\n",(0,o.jsx)(t.h2,{id:"controller-class",children:"Controller Class"}),"\n",(0,o.jsx)(t.p,{children:"Controller Class is a static class that defines API endpoints. It can use Back-End Service Classes and Isomorphic Service Classes explained below."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/post/PostController.ts\nimport { prefix, get } from 'vovk';\nimport PostService from './PostService';\n\n@prefix('post')\nexport default class PostController {\n    private static postService = PostService;\n    \n    @get()\n    static getPosts() {\n        return this.postService.getPosts();\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Decorators created with ",(0,o.jsx)(t.code,{children:"createDecorator"})," make possible to validate request, throw errors, redirect, or return something different to the client."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/post/PostController.ts\nimport { prefix, get, type VovkRequest } from 'vovk';\nimport vovkZod from 'vovk-zod';\nimport { z } from 'zod';\nimport { authGuard } from '../../decorators';\nimport PostService from './PostService';\n\n@prefix('post')\nexport default class PostController {\n    private static postService = PostService;\n    \n    @put(':postId')\n    @authGuard()\n    @vovkZod(\n        z.object({\n            title: z.string()\n            content: z.string(),\n        }).strict(),\n        z.object({\n            moderationType: z.string(),\n        }).strict()\n    )\n    static updatePost(\n        req: VovkRequest<{ title: string; content: string; }, { moderationType: 'nice' | 'strict' }>, \n        { postId }: { postId: string }\n    ) {\n        const { title, content } = req.json();\n        const moderationType = req.nextUrl.searchParams.get('moderationType');\n        return this.postService.updatePost(postId, title, content, moderationType);\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's break down the example above that implements PUT endpoint that looks like that: ",(0,o.jsx)(t.code,{children:"/api/post/69?moderationType=nice"}),"."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"authGuard"})," is a custom decorator that may be created by you based on your authorisation environment."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"vovkZod"})," that's imported from ",(0,o.jsx)(t.a,{href:"https://github.com/finom/vovk-zod",children:"vovk-zod"})," performs Zod validation of body and query both on server-side and client-side."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"VovkRequest"})," generic partially re-defines ",(0,o.jsx)(t.code,{children:"NextRequest"})," type and makes ",(0,o.jsx)(t.code,{children:"req.json"})," as well as ",(0,o.jsx)(t.code,{children:"req.nextUrl.searchParams.get"})," return proper types."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"this.postService.updatePost"})," is invoked with properly-typed arguments after authorisation check, body and query validation."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"back-end-service-class",children:"Back-end Service Class"}),"\n",(0,o.jsx)(t.p,{children:'Back-end Service Class (or just "Service") is a static class that implements third-party API calls or performs requests do the project database. By design Services don\'t validate incoming data and play the role of back-end library.'}),"\n",(0,o.jsxs)(t.p,{children:["Services can be injected to controllers as well as to other services using ",(0,o.jsx)(t.code,{children:"private static"})," prefix."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/comment/CommentService.ts\nimport PostIsomorphicService from '../post/PostIsomorphicService';\nimport UserService from '../user/UserService';\n\nexport default class CommentService {\n    private static postIsomorphicServiceService = PostIsomorphicService;\n\n    private static userService = UserService;\n\n    static getAllUserComments(userId: User['id']) {\n        const user = await this.userService.getUserById(userId);\n        // ... perform database request\n        return // ...\n    }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"isomorphic-service-class",children:"Isomorphic Service Class"}),"\n",(0,o.jsxs)(t.p,{children:["Isomorphic Service is very similar to a Back-end Service but can be used both by front-end (state, components, Worker Service Classes, hooks, other Isomorphic Service Classes, ...) and back-end (Back-End Services, Controllers, CLI scripts, ...). The only difference is that its methods need to be implemented as ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Pure_function",children:"pure functions"}),". It means that it shouldn't perform DB calls nor access application state but can use other Isomorphic Service Classes."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/comment/CommentIsomorphicService.ts\nimport PostIsomorphicService from '../post/PostIsomorphicService';\n\nexport default class CommentIsomorphicService {\n    private static postIsomorphicService = PostIsomorphicService;\n\n    // a pure function\n    static filterCommentsByPostId(comments: Comment[], posts: Post, postId: Post['id']) {\n        // findPostById is also a pure function\n        const post = this.postIsomorphicService.findPostById(posts, postId);\n        if(post.isDeleted) return [];\n        return comments.filter((comment) => comment.postId === postId);\n    }\n\n    // ...\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"worker-service-class",children:"Worker Service Class"}),"\n",(0,o.jsxs)(t.p,{children:["Every Isomorphic Service Class can be turned into a Worker Service by applying ",(0,o.jsx)(t.code,{children:"@worker()"})," decorator. The decorator defines required ",(0,o.jsx)(t.code,{children:"onmessage"})," listeners if it's imported in a Web Worker environment. In other cases ",(0,o.jsx)(t.code,{children:"@worker()"})," decorator does nothing and still can be used as an Isomorphic Service."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/hello/HelloWorkerService.ts\nimport { worker } from 'vovk';\n\n@worker()\nexport default class HelloWorkerService {\n    static performHeavyCalculations() {\n        // ...\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The compiled interface can be imported from ",(0,o.jsx)(t.strong,{children:"vovk-client"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/app/page.tsx\nimport { HelloWorkerService } from 'vovk-client';\n\n// ...\nconst onClick = useCallback(async () => {\n    HelloWorker.use(new Worker(new URL('../modules/hello/HelloWorkerService.ts', import.meta.url)));\n\n    const result = await worker.performHeavyCalculations();\n\n    console.log('result', result);\n}, []);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Worker Service Clases can use other Worker Services Classes, Isomorphic Service Classes and Back-End Controllers imported from ",(0,o.jsx)(t.strong,{children:"vovk-client"}),". For more info check documentation of ",(0,o.jsx)(t.a,{href:"./worker",children:"Worker Service Classes"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"state",children:"State"}),"\n",(0,o.jsxs)(t.p,{children:["State file contains application state code that is going to be imported by React Components and other state files. It can use Isomorphic Services, Worker Services and Controllers imported from ",(0,o.jsx)(t.strong,{children:"vovk-client"}),". State can be implemented with any application state library: Recoil, Redux, Redux Toolkit, MobX, custom context, or anything else since the framework does not cover state management topic."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"// /src/modules/post/PostState.ts\nimport { PostController, PostWorkerService } from 'vovk-client';\n\n// ... init app state for posts\n"})}),"\n",(0,o.jsx)(t.h2,{id:"other-ideas",children:"Other ideas"}),"\n",(0,o.jsx)(t.p,{children:"The framework isn't limited by the elements described above and you may want to add more files into your module folder."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"More Back-end Service Classes."}),"\n",(0,o.jsx)(t.li,{children:"More Isomorphic Service Classes."}),"\n",(0,o.jsx)(t.li,{children:"More Worker Service Classes."}),"\n",(0,o.jsx)(t.li,{children:"Tests."}),"\n",(0,o.jsxs)(t.li,{children:["React Components that you want to categorise (",(0,o.jsx)(t.code,{children:"modules/hello/components/MyComponent.tsx"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:["Types (",(0,o.jsx)(t.code,{children:"modules/hello/HelloTypes.ts"}),")."]}),"\n",(0,o.jsx)(t.li,{children:"Anything else you can imagine."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4364:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/vovk-framework-23e4a4ae568807da39baadbab8a46c1d.svg"},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var o=s(7294);const r={},n=o.createContext(r);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);