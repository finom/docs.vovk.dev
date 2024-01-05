"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9671],{7876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(5893),o=n(1151);const l={sidebar_position:0},s="Getting Started",a={id:"intro",title:"Getting Started",description:"Quick install",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Service and Controler",permalink:"/docs/service-controller"}},i={},c=[{value:"Quick install",id:"quick-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"1. Create Next.js project with App Router and install Vovk.ts",id:"1-create-nextjs-project-with-app-router-and-install-vovkts",level:3},{value:"2. Enable decorators",id:"2-enable-decorators",level:3},{value:"3. Set up Next.js wildcard route handler",id:"3-set-up-nextjs-wildcard-route-handler",level:3},{value:"4. Create first service and controller",id:"4-create-first-service-and-controller",level:3},{value:"5. Add the controller to the controllers array",id:"5-add-the-controller-to-the-controllers-array",level:3},{value:"6. Set up application state and clientize the controller",id:"6-set-up-application-state-and-clientize-the-controller",level:3},{value:"7. Make the first request from page.tsx",id:"7-make-the-first-request-from-pagetsx",level:3},{value:"8. Optional: create metadata.ts for easier import",id:"8-optional-create-metadatats-for-easier-import",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.h2,{id:"quick-install",children:"Quick install"}),"\n",(0,r.jsxs)(t.p,{children:["Setup Vovk.ts with ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/create-next-app",children:"create-next-app"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npx create-next-app -e https://github.com/finom/vovk-hello-world\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Inside the project folder run ",(0,r.jsx)(t.code,{children:"npm run dev"})," and open ",(0,r.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,r.jsx)(t.h3,{id:"1-create-nextjs-project-with-app-router-and-install-vovkts",children:"1. Create Next.js project with App Router and install Vovk.ts"}),"\n",(0,r.jsxs)(t.p,{children:["Follow ",(0,r.jsx)(t.a,{href:"https://nextjs.org/docs/getting-started/installation",children:"this instruction"})," to install Next.js. Use TypeScript, App Router and ",(0,r.jsx)(t.code,{children:"src/"})," directory. If you're using ",(0,r.jsx)(t.strong,{children:"create-next-app"}),' you can simply answer to all questions "Yes".']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npx create-next-app\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://github.com/finom/vovk/assets/1082083/b9e600da-a43a-4e30-a089-43e5e4b147ef",alt:""})}),"\n",(0,r.jsx)(t.p,{children:"At the newly created folder run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm i vovk\n"})}),"\n",(0,r.jsx)(t.h3,{id:"2-enable-decorators",children:"2. Enable decorators"}),"\n",(0,r.jsxs)(t.p,{children:["In your ",(0,r.jsx)(t.strong,{children:"tsconfig.json"})," set ",(0,r.jsx)(t.code,{children:'"experimentalDecorators"'})," to ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "compilerOptions": {\n        "experimentalDecorators": true,\n        // ...\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-set-up-nextjs-wildcard-route-handler",children:"3. Set up Next.js wildcard route handler"}),"\n",(0,r.jsxs)(t.p,{children:["Create file ",(0,r.jsx)(t.strong,{children:"/src/app/api/[[...]]/route.ts"})," where ",(0,r.jsx)(t.strong,{children:"[[...]]"})," is a real folder name indicating an empty slug. This is the core entry point for all ",(0,r.jsx)(t.strong,{children:"Vovk.ts"})," routes."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/app/api/[[...]]/route.ts\nimport { initVovk } from 'vovk';\n\nexport const { GET, POST, PUT, DELETE } = initVovk({\n  controllers: [],\n  async onMetadata(metadata, write) {\n    if (process.env.NODE_ENV === 'development') {\n      const [fs, path] = await Promise.all([import('fs/promises'), import('path')]);\n      const metadataPath = path.join(\n        __dirname.replace('.next/server/app', 'src/vovk'),\n        '../../vovk-metadata.json'\n      );\n\n      await write(metadataPath, metadata, { fs, path });\n    }\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For now the ",(0,r.jsx)(t.code,{children:"controllers"})," array is empty. Notice the ",(0,r.jsx)(t.code,{children:"onMetadata"})," option. It's called whenever the Next.js route is initialised. The function provides two arguments: ",(0,r.jsx)(t.code,{children:"metadata"})," - the metadata of controllers and workers, and ",(0,r.jsx)(t.code,{children:"write"})," - a function created to shorten the code that checks if metadata is changed and updates the metadata file. Let's breakit down."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"process.env.NODE_ENV === 'development'"})," checks if mode is development. In other words, the code inside isn't called in production and ",(0,r.jsx)(t.strong,{children:"vovk-metadata.json"})," is created on the local machine."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"const [fs, path] = await Promise.all([import('fs/promises'), import('path')]);"})," imports required Node.js modules. Next.js doesn't throw compilation error because of the ",(0,r.jsx)(t.code,{children:"NODE_ENV"})," check."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"const metadataPath = path.join(...)"})," builds path to the metadata file. ",(0,r.jsx)(t.code,{children:'".next/server/app"'})," is the folder path where Next.js compiles files. At this case ",(0,r.jsx)(t.code,{children:"metadataPath"})," is ",(0,r.jsx)(t.strong,{children:"/src/vovk/vovk-metadata.json"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"await write(metadataPath, metadata, { fs, path });"})," writes metadata file. It accepts 3 arguments: the path to the metadata, the metadata object and reference to standard Node.js libraries (",(0,r.jsx)(t.code,{children:"'fs/promises'"})," and ",(0,r.jsx)(t.code,{children:"'path'"}),"). The last one makes internal Vovk.ts code to not import these modules by itself and prevents compilation errors."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"initVovk"})," returns an object that includes all handlers for any potential HTTP method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export const { GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD } = initVovk(/* ... */)\n"})}),"\n",(0,r.jsx)(t.p,{children:"The resulting JSON is going to contain information about controllers and workers and would look like that:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "HelloController": {\n    "controllerName": "HelloController",\n    "_prefix": "hello",\n    "_handlers": {\n      "getHello": {\n        "path": "get-hello",\n        "httpMethod": "GET"\n      },\n      "postHello": {\n        "path": "post-hello",\n        "httpMethod": "POST"\n      }\n    }\n  },\n  "UserController":  {\n    "controllerName": "UserController",\n    "_prefix": "user",\n    "_handlers": {\n      "getHello": {\n        "path": "update-user",\n        "httpMethod": "PUT"\n      }\n    }\n  },\n  "workers": {\n    "HelloWorkerService": {\n      "workerName": "HelloWorkerService",\n      "_handlers": {\n        "calculatePi": {\n          "isGenerator": true\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"4-create-first-service-and-controller",children:"4. Create first service and controller"}),"\n",(0,r.jsxs)(t.p,{children:["Create two files ",(0,r.jsx)(t.code,{children:"HelloService.ts"})," and ",(0,r.jsx)(t.code,{children:"HelloController.ts"})," at ",(0,r.jsx)(t.strong,{children:"/src/vovk/hello/"}),". The first one is a back-end service that should perform DB calls or invoke third-party APIs, the second one is a controller that handles incoming HTTP requests and calls service methods."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/hello/HelloService.ts\nexport default class HelloService {\n  static async getHello() {\n    return { greeting: 'Hello world!' };\n  }\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/hello/HelloController.ts\nimport { get, prefix } from \"vovk\";\nimport HelloService from \"./HelloService\"\n\n@prefix('hello')\nexport default class HelloController {\n    static controllerName = 'HelloController';\n    \n    private static helloService = HelloService;\n\n    /**\n     * Return a greeting from the HelloService\n     */\n    @get('greeting')\n    static async getHello() {\n        return this.helloService.getHello();\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@prefix"})," and ",(0,r.jsx)(t.code,{children:"@get"})," build API endpoint ",(0,r.jsx)(t.code,{children:"/api/hello/greeting"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"controllerName"})," is required to build ",(0,r.jsx)(t.strong,{children:"vovk-metadata.json"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"HelloService"})," is assigned as a ",(0,r.jsx)(t.code,{children:"private static"})," and called at the route handler ",(0,r.jsx)(t.code,{children:"getHello"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"5-add-the-controller-to-the-controllers-array",children:"5. Add the controller to the controllers array"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/app/api/[[...]]/route.ts\nimport { initVovk } from 'vovk';\nimport HelloController from '../../../HelloController'\n\nexport const { GET, POST, PUT, DELETE } = initVovk({\n  controllers: [HelloController],\n  // ...\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To trigger metadata creation manually, open ",(0,r.jsx)(t.a,{href:"http://localhost:3000/api",children:"http://localhost:3000/api"})," in your browser (it's OK to see 404 error since the root endpoint isn't defined)."]}),"\n",(0,r.jsx)(t.h3,{id:"6-set-up-application-state-and-clientize-the-controller",children:"6. Set up application state and clientize the controller"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Vovk.ts"})," archirecture assumes that a developer is going to be free to choose any app state management library (Redux/Toolkit, Mobx, Recoil, custom context, etc)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'// /src/vovk/hello/HelloState.ts\nimport { clientizeController } from "vovk/client";\nimport type HelloWorkerService from "./HelloWorkerService";\nimport type HelloController from "./HelloController";\nimport metadata from \'../vovk-metadata.json\' assert { type: "json" };\n\nconst controller = clientizeController<typeof HelloController>(metadata.HelloController);\n\nexport function getHello() {\n  return controller.getHello();\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"7-make-the-first-request-from-pagetsx",children:"7. Make the first request from page.tsx"}),"\n",(0,r.jsxs)(t.p,{children:["Call ",(0,r.jsx)(t.code,{children:"getHello()"})," inside the ",(0,r.jsx)(t.code,{children:"useEffect"})," hook to make tha HTTP request to receive data from the Back-end Service."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// /src/app/page.tsx\n\"use client\";\nimport { useEffect, useState } from 'react';\nimport { getHello } from '../vovk/hello/HelloState';\n\nexport default function Home() {\n  const [serverResponse, setServerResponse] = useState<{ greeting: string } | null>(null);\n\n  useEffect(() => {\n    getHello().then(setServerResponse);\n  }, []);\n\n  return (\n    <div>{serverResponse?.greeting ?? 'Loading...'}</div>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"8-optional-create-metadatats-for-easier-import",children:"8. Optional: create metadata.ts for easier import"}),"\n",(0,r.jsxs)(t.p,{children:["It's hard to type ",(0,r.jsx)(t.code,{children:"import metadata from '../vovk-metadata.json'"})," every time since TypeScript doesn't know what you're going to name this variable. For easier import you can create another file called ",(0,r.jsx)(t.strong,{children:"metadata.ts"}),"\nthat re-exports the Vovk metadata."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/metadata.ts\nimport metadata from './vovk-metadata.json' assert { type: \"json\" };\n\nexport default metadata;\n"})}),"\n",(0,r.jsx)(t.p,{children:'Now when you type "metad..." word your code editor is going to propose you to import the created variable.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\n// ...\nimport metadata from '../metadata';\n\nconst controller = clientizeController<typeof HelloController>(metadata.HelloController);\n\n// ...\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(7294);const o={},l=r.createContext(o);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);