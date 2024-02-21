"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4131],{9408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(5893),o=n(1151);const s={sidebar_position:3},i="Custom Decorators",a={id:"decorators",title:"Custom Decorators",description:"Overview",source:"@site/docs/decorators.md",sourceDirName:".",slug:"/decorators",permalink:"/docs/decorators",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/decorators.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Worker Service",permalink:"/docs/worker"},next:{title:"Project Structure",permalink:"/docs/project-structure"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Authorisation decorator example",id:"authorisation-decorator-example",level:2},{value:"Request Input Validation",id:"request-input-validation",level:2},{value:"vovk-zod",id:"vovk-zod",level:3},{value:"Creating a custom validation library",id:"creating-a-custom-validation-library",level:3},{value:"Disable client validation",id:"disable-client-validation",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"custom-decorators",children:"Custom Decorators"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"createDecorator"})," is a higher-order function that produces a decorator factory (a function that returns a decorator). It accepts a middleware function with the following parameters:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"request"}),", which extends ",(0,r.jsx)(t.code,{children:"NextRequest"})," as well as ",(0,r.jsx)(t.code,{children:"VovkRequest"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"next"}),", a function that should be invoked and its result returned to call subsequent decorators or the route handler."]}),"\n",(0,r.jsx)(t.li,{children:"Additional arguments are passed through to the decorator factory."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Second argument is an optional init handler. It's called every time when decorator is initialised and it's used to populate ",(0,r.jsx)(t.strong,{children:".vovk.json"})," with information on client-side validation explained below."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { createDecorator, get, HttpException, HttpStatus } from 'vovk';\n\nconst myDecorator = createDecorator((req, next, a: string, b: number) => {\n  console.log(a, b); // Outputs: \"foo\", 1\n\n  if(isSomething) { \n    // override route method behavior and return { hello: 'world' } from the endpoint\n    return { hello: 'world' };\n  }\n\n  if(isSomethingElse) {\n    // throw HTTP error if needed\n    throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong');\n  }\n\n  return next();\n}, (a: string, b: number) => {\n    console.info('Decorator is initialised with', a, b);\n});\n\nclass MyController {\n  static controllerName = 'MyController';\n  @get.auto()\n  @myDecorator('foo', 1) // Passes 'foo' as 'a', and 1 as 'b'\n  static doSomething() {\n    // ...\n  }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"authorisation-decorator-example",children:"Authorisation decorator example"}),"\n",(0,r.jsxs)(t.p,{children:["There is an example code that defines ",(0,r.jsx)(t.code,{children:"authGuard"})," decorator that does two things:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Checks if a user is authorised and returns an Unauthorised status if not."}),"\n",(0,r.jsxs)(t.li,{children:["Adds ",(0,r.jsx)(t.code,{children:"currentUser"})," to the request object."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To extend ",(0,r.jsx)(t.code,{children:"req"})," object you can define your custom interface that extends ",(0,r.jsx)(t.code,{children:"VovkRequest"}),". Let's imagine that Prisma ORM is used at the project."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/types.ts\nimport type { VovkRequest } from 'vovk'\nimport type { User } from '@prisma/client';\n\nexport interface GuardedRequest<BODY = undefined, QUERY extends Record<string, string> | undefined = undefined>\n  extends VovkRequest<BODY, QUERY> {\n  currentUser: User;\n}\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then define the ",(0,r.jsx)(t.code,{children:"authGuard"})," decorator itself."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/decorators/authGuard.ts\nimport { HttpException, HttpStatus, createDecorator } from 'vovk';\nimport type { GuardedRequest } from '../types';\n\nconst authGuard = createDecorator(async (req: GuardedRequest, next) => {\n  // ... define userId and isAuthorised\n  // parse access token for example\n\n  if (!isAuthorised) {\n    throw new HttpException(HttpStatus.UNAUTHORIZED, 'Unauthorized');\n  }\n\n  const currentUser = await prisma.user.findUnique({ where: { id: userId } });\n\n  req.currentUser = currentUser;\n\n  return next();\n});\n\nexport default authGuard;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And finally use the decorator and define request object with your newly created ",(0,r.jsx)(t.code,{children:"GuardedRequest"})," type."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// ...\nexport default class UserController {\n  // ...\n  @get('current-user')\n  @authGuard()\n  static async getCurrentUser(req: GuardedRequest</* ... */>) {\n    return req.currentUser;\n  }\n\n  // ...\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"request-input-validation",children:"Request Input Validation"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Vovk.ts"})," offers API that allows to validate request body and query string on back-end and, thanks to the metadata mechanism, performs zero-cost validation on client-side before request to the server is even made."]}),"\n",(0,r.jsx)(t.h3,{id:"vovk-zod",children:"vovk-zod"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"vovk-zod"})," is the library that implements ",(0,r.jsx)(t.a,{href:"https://zod.dev/",children:"Zod"})," validation. It performs validation on the Controller side with ",(0,r.jsx)(t.code,{children:"ZodModel.parse"}),", ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/zod-to-json-schema",children:"converts the Zod object to a JSON Schema"})," that's stored at ",(0,r.jsx)(t.strong,{children:".vovk.json"})," file, and runs validation on client before the HTTP request is made with ",(0,r.jsx)(t.a,{href:"https://ajv.js.org/",children:"Ajv"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/modules/user/UserController.ts\nimport { z } from 'zod';\n// ... other imports ...\n\nconst UpdateUserModel = z.object({ name: z.string(), email: z.email() }).strict();\nconst UpdateUserQueryModel = z.object({ id: z.uuid() }).strict();\n\nexport default class UserController {\n    private static userService = UserService;\n\n    @put.auto()\n    @vovkZod(UpdateUserModel, UpdateUserQueryModel)\n    static updateUser(\n        req: VovkRequest<z.infer<typeof UpdateUserModel>, z.infer<typeof UpdateUserQueryModel>>\n    ) {\n        const { name, email } = await req.json();\n        const id = req.nextUrl.searchParams.get('id');\n\n        return this.userService.updateUser(id, { name, email });\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"creating-a-custom-validation-library",children:"Creating a custom validation library"}),"\n",(0,r.jsxs)(t.p,{children:["If you need to create your custom validation library, check ",(0,r.jsx)(t.a,{href:"./customization",children:"cusromization documentation"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"disable-client-validation",children:"Disable client validation"}),"\n",(0,r.jsxs)(t.p,{children:["You can set ",(0,r.jsx)(t.code,{children:"disableClientValidation"})," option mentioned above to ",(0,r.jsx)(t.code,{children:"true"})," to disable client validation for debugging purposes."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const result = await HelloController.validatedRequest({\n    body: { foo: 42 },\n    query: { bar: 'hello' },\n    disableClientValidation: true,\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you want to disable it completely and remove it from ",(0,r.jsx)(t.strong,{children:".vovk.json"})," file (in case if you want to hide server-side validation implementation) you can use ",(0,r.jsx)(t.code,{children:"exposeValidation"})," option set to ",(0,r.jsx)(t.code,{children:"false"})," at the Next.js wildcard router level."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// /src/api/[[...vovk]]/route.ts\n// ...\nexport const { GET, POST, PATCH, PUT } = initVovk({\n    controllers,\n    workers,\n    exposeValidation: false // don't populate metadata file with validation information\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);