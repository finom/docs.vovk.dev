"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1207],{8594:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=o(5893),r=o(1151);const s={sidebar_position:7},l="API Reference",i={id:"api",title:"API Reference",description:"Full list of available exports:",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/docs/api",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"The Vovk Architecture",permalink:"/docs/vovk-architecture"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},c={},d=[{value:"&quot;vovk&quot; module",id:"vovk-module",level:2},{value:"Core",id:"core",level:3},{value:"<code>initVovk</code>",id:"initvovk",level:4},{value:"<code>createDecorator</code>",id:"createdecorator",level:4},{value:"Controller Decorators",id:"controller-decorators",level:3},{value:"<code>@prefix</code> decorator",id:"prefix-decorator",level:4},{value:"<code>@get</code>, <code>@post</code>, <code>@put</code>, <code>@patch</code>, <code>@del</code>, <code>@head</code>, <code>@options</code>",id:"get-post-put-patch-del-head-options",level:4},{value:"<code>@get.auto</code>, <code>@post.auto</code>, <code>@put.auto</code>...",id:"getauto-postauto-putauto",level:4},{value:"Enums and classes",id:"enums-and-classes",level:3},{value:"<code>HttpMethod</code> enum",id:"httpmethod-enum",level:4},{value:"<code>HttpStatus</code> enum",id:"httpstatus-enum",level:4},{value:"<code>HttpException</code> class",id:"httpexception-class",level:3},{value:"Types",id:"types",level:3},{value:"<code>VovkRequest</code> type",id:"vovkrequest-type",level:4},{value:"<code>VovkBody</code> type",id:"vovkbody-type",level:4},{value:"<code>VovkQuery</code> type",id:"vovkquery-type",level:4},{value:"<code>VovkParams</code> type",id:"vovkparams-type",level:4},{value:"<code>VovkReturnType</code> type",id:"vovkreturntype-type",level:4},{value:"&quot;vovk/client&quot; module",id:"vovkclient-module",level:2},{value:"<code>clientizeController</code> function",id:"clientizecontroller-function",level:3},{value:"<code>VovkClientOptions</code> type",id:"vovkclientoptions-type",level:3},{value:"<code>VovkClientFetcher</code> type",id:"vovkclientfetcher-type",level:3},{value:"&quot;vovk/worker&quot; module",id:"vovkworker-module",level:2},{value:"<code>@worker</code> decorator",id:"worker-decorator",level:3},{value:"<code>promisifyWorker</code> function",id:"promisifyworker-function",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsx)(n.p,{children:"Full list of available exports:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  // core\n  initVovk,\n  createDecorator,\n  // decorators\n  get, \n  post, \n  put, \n  patch, \n  del, \n  head, \n  options, \n  prefix, \n  // class\n  HttpException,\n  // enums\n  HttpStatus,\n  HttpMethod,\n  // types\n  type VovkRequest,\n  type VovkBody,\n  type VovkQuery,\n  type VovkParams,\n  type VovkReturnType,\n} from 'vovk';\n\nimport { \n  // function\n  clientizeController, \n  // types\n  type VovkClientFetcher, \n  type VovkClientOptions \n} from 'vovk/client';\n\nimport { \n  // decorator\n  worker, \n  // function\n  promisifyWorker \n} from 'vovk/worker';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vovk-module",children:'"vovk" module'}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:'"vovk"'})," module exports initialisation function, server-side API and server-side types that can be used by other environments to retrieve request body types to client-side, ",(0,t.jsx)(n.code,{children:"HttpException"})," to throw server-side errors or simulate HTTP errors on client-side."]}),"\n",(0,t.jsx)(n.h3,{id:"core",children:"Core"}),"\n",(0,t.jsx)(n.h4,{id:"initvovk",children:(0,t.jsx)(n.code,{children:"initVovk"})}),"\n",(0,t.jsx)(n.p,{children:"Generates standard Nest.js App Route handlers. Accepts the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"controllers: Function[]"})," - the list of Controllers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"workers?: Function[]"})," - the list of Worker Services"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"exposeValidation?: boolean"})," - set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to hide validation logic from the client-side code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onError?: (err: Error) => void | Promise<void>"})," - called on Controller exceptions, can be used to log errors by a third-party service"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onMetadata?: (metadata: Metadata, write: WriteFunction) => void | Promise<void>;"})," - invoked on every API request to create ",(0,t.jsx)(n.strong,{children:"/src/vovk/vovk-metadata.json"}),". Accepts 2 arguments: metadata object and ",(0,t.jsx)(n.code,{children:"write"})," function that writes metadata to the file if data is changed. The ",(0,t.jsx)(n.code,{children:"write"})," function by itself accepts 3 arguments: metadata path, metadata object and Node.js libraries passed to avoid compilation errors in Next.js runtime."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/app/api/[[...]]/route.ts\nimport { initVovk } from 'vovk';\nimport HelloController from '../../../vovk/hello/HelloController';\nimport UserController from '../../../vovk/user/UserController';\nimport HelloWorker from '../../../vovk/hello/HelloWorker';\nimport UserWorker from '../../../vovk/user/UserWorker';\n\nexport const { GET, POST, PUT, DELETE } = initVovk({\n  controllers: [HelloController, UserController],\n  workers: [HelloWorker, UserWorker],\n  exposeValidation: false,\n  onError(e) {\n    console.log('Error', e);\n  }\n  async onMetadata(metadata, write) {\n    if (process.env.NODE_ENV === 'development') {\n      const [fs, path] = await Promise.all([import('fs/promises'), import('path')]);\n      const metadataPath = path.join(/* ... */);\n\n      await write(metadataPath, metadata, { fs, path });\n    }\n  },\n});\n"})}),"\n",(0,t.jsx)(n.h4,{id:"createdecorator",children:(0,t.jsx)(n.code,{children:"createDecorator"})}),"\n",(0,t.jsx)(n.p,{children:"Defines a custom decorator to extend default behavoir of endpoints. Accepts 2 arguments: middleware function and init function. The first one defines what the decorator is going to do, the second one is called once per initialisation and intended to pass extra data to the metadata file (for now it's client validation, if exposed)."}),"\n",(0,t.jsxs)(n.p,{children:["The middleware accepts at least 2 arguments: ",(0,t.jsx)(n.code,{children:"VovkRequest"}),", ",(0,t.jsx)(n.code,{children:"next"})," function that needs to be called and its awaited result needs to be returned after you perform required actions and ",(0,t.jsx)(n.code,{children:"...rest"})," - the arguments that are going to be used by the created decorator fabric."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createDecorator, get, HttpException, HttpStatus } from 'vovk';\n\nconst myDecorator = createDecorator((req, next, a: string, b: number) => {\n  console.log(a, b); // Outputs: \"foo\", 1\n\n  if(isSomething) { \n    // override route method behavior and return { hello: 'world' } from the endpoint\n    return { hello: 'world' };\n  }\n\n  if(isSomethingElse) {\n    // throw HTTP error if needed\n    throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong');\n  }\n\n  return next();\n}, (a: string, b: number) => {\n    console.info('Decorator is initialised with', a, b);\n});\n\nclass MyController {\n  static controllerName = 'MyController';\n\n  @get.auto()\n  @myDecorator('foo', 1) // Passes 'foo' as 'a', and 1 as 'b'\n  static getSomething() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"controller-decorators",children:"Controller Decorators"}),"\n",(0,t.jsxs)(n.h4,{id:"prefix-decorator",children:[(0,t.jsx)(n.code,{children:"@prefix"})," decorator"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@prefix(p: string)"})," decorator used to prepend a sub-path to the endpoint."]}),"\n",(0,t.jsxs)(n.h4,{id:"get-post-put-patch-del-head-options",children:[(0,t.jsx)(n.code,{children:"@get"}),", ",(0,t.jsx)(n.code,{children:"@post"}),", ",(0,t.jsx)(n.code,{children:"@put"}),", ",(0,t.jsx)(n.code,{children:"@patch"}),", ",(0,t.jsx)(n.code,{children:"@del"}),", ",(0,t.jsx)(n.code,{children:"@head"}),", ",(0,t.jsx)(n.code,{children:"@options"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@HTTP_METHOD(p: string)"})," decorator define an HTTP method and an endpoint that's handled by the Controller method."]}),"\n",(0,t.jsxs)(n.h4,{id:"getauto-postauto-putauto",children:[(0,t.jsx)(n.code,{children:"@get.auto"}),", ",(0,t.jsx)(n.code,{children:"@post.auto"}),", ",(0,t.jsx)(n.code,{children:"@put.auto"}),"..."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@HTTP_METHOD(p: string)"})," define HTTP method and generate endpoint string automatically from controller and method name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { prefix, get, post, put, patch, del, head, options } from 'vovk';\n\n@prefix('hello')\nexport default class HelloController {\n    static controllerName = 'HelloController';\n\n    @get('world')\n    static getHelloWorld() {\n        return { hello: 'world' };\n    }\n\n    @post.auto()\n    static postData(/* req: VovkRequest */) {\n        return { success: true };\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"enums-and-classes",children:"Enums and classes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { HttpMethod, HttpStatus, HttpException } from 'vovk';\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"httpmethod-enum",children:[(0,t.jsx)(n.code,{children:"HttpMethod"})," enum"]}),"\n",(0,t.jsx)(n.p,{children:"The enum has no specific purpose. It is used internally and can be used with your code to create custom fetcher."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export enum HttpMethod {\n  GET = 'GET',\n  POST = 'POST',\n  PUT = 'PUT',\n  PATCH = 'PATCH',\n  DELETE = 'DELETE',\n  HEAD = 'HEAD',\n  OPTIONS = 'OPTIONS',\n}\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"httpstatus-enum",children:[(0,t.jsx)(n.code,{children:"HttpStatus"})," enum"]}),"\n",(0,t.jsxs)(n.p,{children:["Used to throw and catch errors thrown by the server. Notice ",(0,t.jsx)(n.code,{children:"NULL"})," member. It can be used to simulate HTTP errors on client validation errors (this approach is used at ",(0,t.jsx)(n.a,{href:"https://github.com/finom/vovk-zod",children:"vovk-zod"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export enum HttpStatus {\n  NULL = 0,\n  CONTINUE = 100,\n  SWITCHING_PROTOCOLS = 101,\n  PROCESSING = 102,\n  EARLYHINTS = 103,\n  OK = 200,\n  CREATED = 201,\n  ACCEPTED = 202,\n  NON_AUTHORITATIVE_INFORMATION = 203,\n  NO_CONTENT = 204,\n  RESET_CONTENT = 205,\n  PARTIAL_CONTENT = 206,\n  AMBIGUOUS = 300,\n  MOVED_PERMANENTLY = 301,\n  FOUND = 302,\n  SEE_OTHER = 303,\n  NOT_MODIFIED = 304,\n  TEMPORARY_REDIRECT = 307,\n  PERMANENT_REDIRECT = 308,\n  BAD_REQUEST = 400,\n  UNAUTHORIZED = 401,\n  PAYMENT_REQUIRED = 402,\n  FORBIDDEN = 403,\n  NOT_FOUND = 404,\n  METHOD_NOT_ALLOWED = 405,\n  NOT_ACCEPTABLE = 406,\n  PROXY_AUTHENTICATION_REQUIRED = 407,\n  REQUEST_TIMEOUT = 408,\n  CONFLICT = 409,\n  GONE = 410,\n  LENGTH_REQUIRED = 411,\n  PRECONDITION_FAILED = 412,\n  PAYLOAD_TOO_LARGE = 413,\n  URI_TOO_LONG = 414,\n  UNSUPPORTED_MEDIA_TYPE = 415,\n  REQUESTED_RANGE_NOT_SATISFIABLE = 416,\n  EXPECTATION_FAILED = 417,\n  I_AM_A_TEAPOT = 418,\n  MISDIRECTED = 421,\n  UNPROCESSABLE_ENTITY = 422,\n  FAILED_DEPENDENCY = 424,\n  PRECONDITION_REQUIRED = 428,\n  TOO_MANY_REQUESTS = 429,\n  INTERNAL_SERVER_ERROR = 500,\n  NOT_IMPLEMENTED = 501,\n  BAD_GATEWAY = 502,\n  SERVICE_UNAVAILABLE = 503,\n  GATEWAY_TIMEOUT = 504,\n  HTTP_VERSION_NOT_SUPPORTED = 505,\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"httpexception-class",children:[(0,t.jsx)(n.code,{children:"HttpException"})," class"]}),"\n",(0,t.jsxs)(n.p,{children:["Used to throw HTTP errors on server-side and re-throw, simulate or handle HTTP errors on client-side. The instance provides 2 properties: ",(0,t.jsx)(n.code,{children:"statusCode"})," and ",(0,t.jsx)(n.code,{children:"message"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Server-side:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloController.tsx\n// ...\nexport default class HelloController {\n    @get()\n    static getHello() {\n        if(/* ... */) {\n            throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong'); \n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Client-side:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\nimport { clientizeController } from 'vovk/client';\nimport type HelloController from './HelloController';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\nconst controller = clientizeController<typeof HelloController>(metadata.HelloController);\n\nexport async function getHello() {\n    try {\n        return await controller.getHello();\n    } catch (e) {\n        console.log(e instanceof HttpException);\n        const err = e as HttpException;\n        console.log(err.statusCode, err.message);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,t.jsxs)(n.h4,{id:"vovkrequest-type",children:[(0,t.jsx)(n.code,{children:"VovkRequest"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["The type is used to define types for ",(0,t.jsx)(n.code,{children:"req.json"})," and ",(0,t.jsx)(n.code,{children:"req.nextUrl.searchParams.get"})," and allow to infer types in other environments."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloController.ts \nimport { get, type VovkRequest } from 'vovk';\n\nexport class HelloController {\n    static controllerName = 'HelloController';\n\n    @get(':someParam')\n    static doSomething(\n        req: VovkRequest<{ body: true }, { q: string }>, \n        { someParam }: { someParam: string }\n    ) {\n        const body = await req.body(); // { body: true }\n        const q = req.nextUrl.searchParams.get('q'); // string\n        const nope = req.nextUrl.searchParams.get('nope'); // never\n        // ...\n        return { success: true };\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"vovkbody-type",children:[(0,t.jsx)(n.code,{children:"VovkBody"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts request body type fom the controller method."}),"\n",(0,t.jsxs)(n.h4,{id:"vovkquery-type",children:[(0,t.jsx)(n.code,{children:"VovkQuery"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts query (search params) type fom the controller method."}),"\n",(0,t.jsxs)(n.h4,{id:"vovkparams-type",children:[(0,t.jsx)(n.code,{children:"VovkParams"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts params type fom the controller method."}),"\n",(0,t.jsxs)(n.h4,{id:"vovkreturntype-type",children:[(0,t.jsx)(n.code,{children:"VovkReturnType"})," type"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\nimport type { VovkBody, VovkQuery, VovkParams, VovkReturnType } from 'vovk';\nimport type HelloController from './HelloController';\n\ntype HelloControllerType = typeof HelloController;\n\n// { body: true }\ntype DoSomethingBody = VovkBody<HelloControllerType['doSomething']>;\n// { query: string }\ntype DoSomethingQuery = VovkQuery<HelloControllerType['doSomething']>;\n// { someParam: string }\ntype DoSomethingParams = VovkParams<HelloControllerType['doSomething']>;\n// { success: boolean }\ntype DoSomethingReturnType = VovkReturnType<HelloControllerType['doSomething']>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vovkclient-module",children:'"vovk/client" module'}),"\n",(0,t.jsxs)(n.h3,{id:"clientizecontroller-function",children:[(0,t.jsx)(n.code,{children:"clientizeController"})," function"]}),"\n",(0,t.jsx)(n.p,{children:"Turns Controller types and metadata into client-side fetching library. Types of body, query and params are inferred from the controller method signature."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"clientizeController<T, OPTS>(controllerMetadata: object, options?: VovkClientOptions<OPTS>)"})," accepts controller type as first generic parameter, optional custom fetcher options as second generic parameter, metadata object as the first argument and optional clientize settings object as the second argument."]}),"\n",(0,t.jsxs)(n.p,{children:["Please check ",(0,t.jsx)(n.a,{href:"./client",children:"Client Documentation"})," for more info."]}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientoptions-type",children:[(0,t.jsx)(n.code,{children:"VovkClientOptions"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"VovkClientOptions<OPTS>"})," type includes the following members:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"disableClientValidation?: boolean"})," disables client-side validation for debugging purposes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fetcher?: _VovkClientFetcher<OPTS>"})," overrides default fetcher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"streamFetcher?: _VovkClientFetcher<OPTS>"})," overrides default stream fetcher."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"validateOnClient?: ( input: { body?: unknown; query?: unknown }, validators: { body?: unknown; query?: unknown }) => unknown;"})," defines client-side validation function."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defaultOptions?: Partial<OPTS>"})," allows to set default options for the client-side fetching library."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const controller = clientizeController<typeof HelloController, CustomApiOptions>(metadata.HelloController, {\n  disableClientValidation: true,\n  fetcher: myCustomFetcher\n  streamFetcher: myCustomStreamFetcher\n  validateOnClient: zodValidateOnClient\n  defaultOptions: {\n    successMessage: 'Success!'\n  }\n} satisfies VovkClientOptions<CustomApiOptions>);\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientfetcher-type",children:[(0,t.jsx)(n.code,{children:"VovkClientFetcher"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["Custom fetchers need to satisfy ",(0,t.jsx)(n.code,{children:"VovkClientFetcher<OPTS>"})," type. The ",(0,t.jsx)(n.code,{children:"OPTS"})," parameter defines what extra options are going to be used by clientized controller methods or by ",(0,t.jsx)(n.code,{children:"defaultOptions"})," described above."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/lib/myClient\ntype ApiOptions = {\n    successMesage: string;\n};\n\nconst myCustomFetcher: VovkClientFetcher<ApiOptions> = (\n  { httpMethod, getPath, validate },\n  { params, query, body, ...options }\n) => {\n  const { successMessage } = options;\n  const endpoint = getPath(params, query);\n\n  // ...\n};\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\nimport { myCustomFetcher } from '../lib/myClient';\n// ... rest imports\n\nconst controller = clientizeController<HelloControllerType>(metadata.HelloController, {\n    fetcher: myCustomFetcher,\n});\n\n// ...\nawait controller.doSomething({ successMessage: 'Success!' });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vovkworker-module",children:'"vovk/worker" module'}),"\n",(0,t.jsx)(n.p,{children:"The module provides API to define and handle Worker Services."}),"\n",(0,t.jsxs)(n.h3,{id:"worker-decorator",children:[(0,t.jsx)(n.code,{children:"@worker"})," decorator"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@worker()"})," adds required ",(0,t.jsx)(n.code,{children:"onmessage"})," event listener in Worker thread and does nothing in ther environments. The listener establishes communication channel to other threads used by the client-side code."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloWorkerService.ts\nimport { worker } from 'vovk/worker';\n\n@worker()\nexport default class HelloWorkerService {\n    static workerName = 'HelloWorkerService';\n\n    static heavyCalculation(iterations: number) {\n        let result: number;\n        // ... heavy calculations\n\n        return result;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"promisifyworker-function",children:[(0,t.jsx)(n.code,{children:"promisifyWorker"})," function"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"promisifyWorker<T>(worker: Worker, workerMetadata: object)"})," creates promisified library using Worker Service type as generic parameter, Web Worker as the first argument and metadata as the second argument."]}),"\n",(0,t.jsxs)(n.p,{children:["For more info check ",(0,t.jsx)(n.a,{href:"./worker",children:"Worker Documentation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/vovk/hello/HelloState.ts\nimport type HelloWorkerService from './HelloWorkerService';\nimport metadata from '../vovk-metadata.json' assert { type: 'json' };\n\n// ...\nconst worker = promisifyWorker<typeof HelloWorkerService>(\n    new Worker(new URL('./HelloWorkerService.ts', import.meta.url)),\n    metadata.workers.HelloWorkerService\n);\n\n// result is casted as number\nconst result = await worker.heavyCalculation(100_000_000);\n// ...\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>l});var t=o(7294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);