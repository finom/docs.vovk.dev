"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1207],{8594:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=o(5893),r=o(1151);const s={sidebar_position:5},l="API",i={id:"api",title:"API",description:"Full list of available imports for quick reference:",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/docs/api",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Project Structure",permalink:"/docs/project-structure"},next:{title:"CLI",permalink:"/docs/cli"}},c={},d=[{value:"Core",id:"core",level:2},{value:"<code>initVovk</code>",id:"initvovk",level:3},{value:"<code>createDecorator</code>",id:"createdecorator",level:3},{value:"Controller Decorators",id:"controller-decorators",level:2},{value:"<code>@prefix</code> decorator",id:"prefix-decorator",level:3},{value:"<code>@get</code>, <code>@post</code>, <code>@put</code>, <code>@patch</code>, <code>@del</code>, <code>@head</code>, <code>@options</code>",id:"get-post-put-patch-del-head-options",level:3},{value:"<code>@get.auto</code>, <code>@post.auto</code>, <code>@put.auto</code>...",id:"getauto-postauto-putauto",level:3},{value:"<code>worker</code> decorator",id:"worker-decorator",level:2},{value:"Enums",id:"enums",level:3},{value:"<code>HttpMethod</code> enum",id:"httpmethod-enum",level:4},{value:"<code>HttpStatus</code> enum",id:"httpstatus-enum",level:4},{value:"Classes",id:"classes",level:2},{value:"<code>HttpException</code> class",id:"httpexception-class",level:3},{value:"StreamResponse",id:"streamresponse",level:3},{value:"Core types",id:"core-types",level:2},{value:"<code>VovkClientFetcher</code> and <code>VovkDefaultFetcherOptions</code> types",id:"vovkclientfetcher-and-vovkdefaultfetcheroptions-types",level:3},{value:"<code>VovkConfig</code> type",id:"vovkconfig-type",level:3},{value:"<code>VovkEnv</code> type",id:"vovkenv-type",level:3},{value:"<code>VovkMetadata</code> type",id:"vovkmetadata-type",level:3},{value:"<code>VovkErrorResponse</code> type",id:"vovkerrorresponse-type",level:3},{value:"Controller Types",id:"controller-types",level:2},{value:"<code>VovkRequest</code> type",id:"vovkrequest-type",level:3},{value:"<code>VovkBody</code> type",id:"vovkbody-type",level:3},{value:"<code>VovkQuery</code> type",id:"vovkquery-type",level:3},{value:"<code>VovkParams</code> type",id:"vovkparams-type",level:3},{value:"<code>VovkReturnType</code> type",id:"vovkreturntype-type",level:3},{value:"<code>VovkYieldtype</code> type",id:"vovkyieldtype-type",level:3},{value:"Types for the Client",id:"types-for-the-client",level:2},{value:"<code>VovkClientBody</code> type",id:"vovkclientbody-type",level:3},{value:"<code>VovkClientQuery</code> type",id:"vovkclientquery-type",level:3},{value:"<code>VovkClientParams</code> type",id:"vovkclientparams-type",level:3},{value:"<code>VovkClientReturnType</code> type",id:"vovkclientreturntype-type",level:3},{value:"<code>VovkClientYieldType</code> type",id:"vovkclientyieldtype-type",level:3},{value:"<code>VovkClientOptions</code> type",id:"vovkclientoptions-type",level:3},{value:"Misc",id:"misc",level:2},{value:"<code>generateStaticAPI(controllers: Record&lt;string, Function&gt;, slug?: string)</code>",id:"generatestaticapicontrollers-recordstring-function-slug-string",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.p,{children:"Full list of available imports for quick reference:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  // core\n  initVovk,\n  createDecorator,\n  // controller method decorators\n  get, \n  post, \n  put, \n  patch, \n  del, \n  head, \n  options, \n  // controller class decorator\n  prefix, \n  // worker service class decorator \n  worker,\n  // core types\n  type VovkClientFetcher,\n  type VovkDefaultFetcherOptions,\n  type VovkConfig,\n  type VovkEnv,\n  type VovkMetadata,\n  type VovkErrorResponse,\n  // types used by controllers\n  type VovkRequest,\n  type VovkBody,\n  type VovkQuery,\n  type VovkParams,\n  type VovkReturnType,\n  type VovkYieldType,\n  // types used by client\n  type VovkClientBody,\n  type VovkClientQuery,\n  type VovkClientParams,\n  type VovkClientReturnType,\n  type VovkClientYieldType,\n  type VovkClientOptions,\n  // classes\n  StreamResponse,\n  HttpException,\n  // enums\n  HttpStatus,\n  HttpMethod,\n  // misc\n  generateStaticAPI,\n} from 'vovk';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"core",children:"Core"}),"\n",(0,t.jsx)(n.h3,{id:"initvovk",children:(0,t.jsx)(n.code,{children:"initVovk"})}),"\n",(0,t.jsxs)(n.p,{children:["Creates the standard Next.js App Route handlers used by the main ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments",children:"Optional Catch-all Segment"}),". The function accepts the following options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"controllers: Record<string, Function>"})," - the list of Controllers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"workers?: Record<string, Function>"})," - the list of Worker Services"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"exposeValidation?: boolean"})," - set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to hide validation logic from the client-side code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onError?: (err: Error) => void | Promise<void>"})," - called on Controller exceptions, can be used to log errors by a third-party service"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/app/api/[[...vovk]]/route.ts\nimport { initVovk } from 'vovk';\nimport HelloController from '../../../modules/hello/HelloController';\nimport UserController from '../../../modules/user/UserController';\nimport HelloWorker from '../../../modules/hello/HelloWorker';\nimport UserWorker from '../../../modules/user/UserWorker';\n\nconst controllers = { HelloController, UserController };\nconst workers = { HelloWorker, UserWorker };\n\nexport type Controllers = typeof controllers;\nexport type Workers = typeof workers;\n\nexport const { GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS } = initVovk({\n  controllers,\n  workers,\n  exposeValidation: false,\n  onError(e) {\n    console.log('Error', e);\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"createdecorator",children:(0,t.jsx)(n.code,{children:"createDecorator"})}),"\n",(0,t.jsx)(n.p,{children:"Defines a custom decorator to extend default behavoir of API endpoints. Accepts 2 arguments: middleware function and init function. The first one defines what the decorator is going to do, the second one is called once per initialisation and intended to pass extra data to the metadata file (for now it's client validation, if exposed)."}),"\n",(0,t.jsxs)(n.p,{children:["The middleware accepts at least 2 arguments: ",(0,t.jsx)(n.code,{children:"VovkRequest"}),", ",(0,t.jsx)(n.code,{children:"next"})," function that needs to be called and its awaited result needs to be returned after you perform required actions and ",(0,t.jsx)(n.code,{children:"...rest"})," - the arguments that are going to be used by the created decorator fabric."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createDecorator, get, HttpException, HttpStatus } from 'vovk';\n\nconst myDecorator = createDecorator((req, next, a: string, b: number) => {\n  console.log(a, b); // Outputs: \"foo\", 1\n\n  if(isSomething) { \n    // override route method behavior and return { hello: 'world' } from the endpoint\n    return { hello: 'world' };\n  }\n\n  if(isSomethingElse) {\n    // throw HTTP error if needed\n    throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong');\n  }\n\n  return next();\n}, (a: string, b: number) => {\n    console.info('Decorator is initialised with', a, b);\n});\n\nclass MyController {\n  static controllerName = 'MyController';\n\n  @get.auto()\n  @myDecorator('foo', 1) // Passes 'foo' as 'a', and 1 as 'b'\n  static getSomething() {\n    // ...\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"controller-decorators",children:"Controller Decorators"}),"\n",(0,t.jsxs)(n.h3,{id:"prefix-decorator",children:[(0,t.jsx)(n.code,{children:"@prefix"})," decorator"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@prefix(p: string)"})," decorator used to prepend a sub-path to the endpoint. It's usage is optional."]}),"\n",(0,t.jsxs)(n.h3,{id:"get-post-put-patch-del-head-options",children:[(0,t.jsx)(n.code,{children:"@get"}),", ",(0,t.jsx)(n.code,{children:"@post"}),", ",(0,t.jsx)(n.code,{children:"@put"}),", ",(0,t.jsx)(n.code,{children:"@patch"}),", ",(0,t.jsx)(n.code,{children:"@del"}),", ",(0,t.jsx)(n.code,{children:"@head"}),", ",(0,t.jsx)(n.code,{children:"@options"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@HTTP_METHOD(p: string, opts?: { cors?: boolean, headers?: Record<string, string> })"})," decorator define an HTTP method and an endpoint that's handled by the Controller method."]}),"\n",(0,t.jsxs)(n.h3,{id:"getauto-postauto-putauto",children:[(0,t.jsx)(n.code,{children:"@get.auto"}),", ",(0,t.jsx)(n.code,{children:"@post.auto"}),", ",(0,t.jsx)(n.code,{children:"@put.auto"}),"..."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@HTTP_METHOD.auto(opts?: { cors?: boolean, headers?: Record<string, string> })"})," define HTTP method and generate endpoint string automatically from controller and method name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { prefix, get, post, put, patch, del, head, options } from 'vovk';\n\n@prefix('hello')\nexport default class HelloController {\n    @get('world', { cors: true })\n    static getHelloWorld() {\n        return { hello: 'world' };\n    }\n\n    @post.auto({ headers: { 'x-hello': 'world' }})\n    static postData(/* req: VovkRequest */) {\n        return { success: true };\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"worker-decorator",children:[(0,t.jsx)(n.code,{children:"worker"})," decorator"]}),"\n",(0,t.jsxs)(n.p,{children:["Defines required ",(0,t.jsx)(n.code,{children:"onmessage"})," handler for a ",(0,t.jsx)(n.a,{href:"./worker",children:"Worker Service Class"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/modules/hello/HelloWorkerService.ts\nimport { worker } from 'vovk';\n\n@worker()\nexport default class HelloWorkerService {\n    static heavyCalculation() {\n        // ...\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"enums",children:"Enums"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { HttpMethod, HttpStatus, HttpException } from 'vovk';\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"httpmethod-enum",children:[(0,t.jsx)(n.code,{children:"HttpMethod"})," enum"]}),"\n",(0,t.jsxs)(n.p,{children:["Can be used with your code to create a ",(0,t.jsx)(n.a,{href:"./customization",children:"custom fetcher"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export enum HttpMethod {\n  GET = 'GET',\n  POST = 'POST',\n  PUT = 'PUT',\n  PATCH = 'PATCH',\n  DELETE = 'DELETE',\n  HEAD = 'HEAD',\n  OPTIONS = 'OPTIONS',\n}\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"httpstatus-enum",children:[(0,t.jsx)(n.code,{children:"HttpStatus"})," enum"]}),"\n",(0,t.jsxs)(n.p,{children:["Used to throw and catch errors thrown by the server. Notice ",(0,t.jsx)(n.code,{children:"NULL"})," member. It can be used to simulate HTTP errors on client validation errors (this approach is used at ",(0,t.jsx)(n.a,{href:"https://github.com/finom/vovk-zod",children:"vovk-zod"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export enum HttpStatus {\n  NULL = 0,\n  CONTINUE = 100,\n  SWITCHING_PROTOCOLS = 101,\n  PROCESSING = 102,\n  EARLYHINTS = 103,\n  OK = 200,\n  CREATED = 201,\n  ACCEPTED = 202,\n  NON_AUTHORITATIVE_INFORMATION = 203,\n  NO_CONTENT = 204,\n  RESET_CONTENT = 205,\n  PARTIAL_CONTENT = 206,\n  AMBIGUOUS = 300,\n  MOVED_PERMANENTLY = 301,\n  FOUND = 302,\n  SEE_OTHER = 303,\n  NOT_MODIFIED = 304,\n  TEMPORARY_REDIRECT = 307,\n  PERMANENT_REDIRECT = 308,\n  BAD_REQUEST = 400,\n  UNAUTHORIZED = 401,\n  PAYMENT_REQUIRED = 402,\n  FORBIDDEN = 403,\n  NOT_FOUND = 404,\n  METHOD_NOT_ALLOWED = 405,\n  NOT_ACCEPTABLE = 406,\n  PROXY_AUTHENTICATION_REQUIRED = 407,\n  REQUEST_TIMEOUT = 408,\n  CONFLICT = 409,\n  GONE = 410,\n  LENGTH_REQUIRED = 411,\n  PRECONDITION_FAILED = 412,\n  PAYLOAD_TOO_LARGE = 413,\n  URI_TOO_LONG = 414,\n  UNSUPPORTED_MEDIA_TYPE = 415,\n  REQUESTED_RANGE_NOT_SATISFIABLE = 416,\n  EXPECTATION_FAILED = 417,\n  I_AM_A_TEAPOT = 418,\n  MISDIRECTED = 421,\n  UNPROCESSABLE_ENTITY = 422,\n  FAILED_DEPENDENCY = 424,\n  PRECONDITION_REQUIRED = 428,\n  TOO_MANY_REQUESTS = 429,\n  INTERNAL_SERVER_ERROR = 500,\n  NOT_IMPLEMENTED = 501,\n  BAD_GATEWAY = 502,\n  SERVICE_UNAVAILABLE = 503,\n  GATEWAY_TIMEOUT = 504,\n  HTTP_VERSION_NOT_SUPPORTED = 505,\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(n.h3,{id:"httpexception-class",children:[(0,t.jsx)(n.code,{children:"HttpException"})," class"]}),"\n",(0,t.jsxs)(n.p,{children:["Used to throw HTTP errors on server-side and re-throw, simulate and handle HTTP errors on client-side. The instance provides 2 properties: ",(0,t.jsx)(n.code,{children:"statusCode"})," and ",(0,t.jsx)(n.code,{children:"message"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Server-side:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/modules/hello/HelloController.tsx\n// ...\nexport default class HelloController {\n    @get()\n    static getHello() {\n        if(/* ... */) {\n            throw new HttpException(HttpStatus.BAD_REQUEST, 'Something went wrong'); \n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Client-side:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/modules/hello/HelloState.ts\nimport { HelloController } from 'vovk-client';\n\nexport async function getHello() {\n    try {\n        return await HelloController.getHello();\n    } catch (e) {\n        console.log(e instanceof HttpException);\n        const err = e as HttpException;\n        console.log(err.statusCode, err.message);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"streamresponse",children:"StreamResponse"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"StreamResponse<T>(init?: ResponseInit)"})," class can be used as an alternative to generators to implement response streaming. Instances of this class provide the following methods:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"send(data: T)"})," - sends portion of data"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"close()"})," - close the connection"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"throw(error: any)"})," - throws an error on client-side and closes the connection"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { prefix, get, StreamResponse, type VovkRequest } from 'vovk';\n\ntype Token = { message: string };\n\n@prefix('stream')\nexport default class StreamController {\n  @get('tokens')\n  static async streamTokens() {\n    const resp = new StreamResponse<Token>();\n\n    void (async () => {\n      const tokens: Token[] = [\n        { message: 'Hello,' },\n        { message: ' World' },\n        { message: '!' },\n      ];\n\n      for (const token of tokens) {\n        await new Promise((resolve) => setTimeout(resolve, 300));\n        if(somethingWentWrong) {\n          resp.throw(new Error('Somethiing went wrong'));\n        }\n        resp.send(token);\n      }\n\n      resp.close();\n    });\n\n    return resp;\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The class also provides static property ",(0,t.jsx)(n.code,{children:"defaultHeaders"})," that contains the standard headers for the keep-alive connections. Since ",(0,t.jsx)(n.code,{children:"StreamResponse"})," accepts standard ",(0,t.jsx)(n.code,{children:"ResponseInit"})," as options argument you can override default headers and optionally use ",(0,t.jsx)(n.code,{children:"StreamResponse.defaultHeaders"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const resp = new StreamResponse<Token>({\n  headers: {\n    ...StreamResponse.defaultHeaders,\n    'x-hello': 'world',\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"core-types",children:"Core types"}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientfetcher-and-vovkdefaultfetcheroptions-types",children:[(0,t.jsx)(n.code,{children:"VovkClientFetcher"})," and ",(0,t.jsx)(n.code,{children:"VovkDefaultFetcherOptions"})," types"]}),"\n",(0,t.jsxs)(n.p,{children:["Used to redefine the default fetcher. See ",(0,t.jsx)(n.a,{href:"./customization",children:"customization docs"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"vovkconfig-type",children:[(0,t.jsx)(n.code,{children:"VovkConfig"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Defines config types."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /vovk.config.js\n/** @type {import('vovk').VovkConfig} */\nconst vovkConfig = {\n  // ...\n}\n\nmodule.exports = vovkConfig;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more info check ",(0,t.jsx)(n.a,{href:"./customization",children:"customization docs"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"vovkenv-type",children:[(0,t.jsx)(n.code,{children:"VovkEnv"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Defines Vovk.ts env variable types."}),"\n",(0,t.jsxs)(n.p,{children:["For more info check ",(0,t.jsx)(n.a,{href:"./customization",children:"customization docs"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"vovkmetadata-type",children:[(0,t.jsx)(n.code,{children:"VovkMetadata"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["Defines format for ",(0,t.jsx)(n.strong,{children:".vovk.json"})]}),"\n",(0,t.jsxs)(n.h3,{id:"vovkerrorresponse-type",children:[(0,t.jsx)(n.code,{children:"VovkErrorResponse"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Original shape of an object returned from the server when an error is thrown."}),"\n",(0,t.jsx)(n.h2,{id:"controller-types",children:"Controller Types"}),"\n",(0,t.jsxs)(n.h3,{id:"vovkrequest-type",children:[(0,t.jsx)(n.code,{children:"VovkRequest"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["The type is used to define types for ",(0,t.jsx)(n.code,{children:"req.json"})," and ",(0,t.jsx)(n.code,{children:"req.nextUrl.searchParams.get"})," and allow to infer types in other environments."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/modules/hello/HelloController.ts \nimport { get, type VovkRequest } from 'vovk';\n\nexport class HelloController {\n    @get(':someParam')\n    static doSomething(\n        req: VovkRequest<{ body: true }, { q: string }>, \n        { someParam }: { someParam: string }\n    ) {\n        const body = await req.body(); // { body: true }\n        const q = req.nextUrl.searchParams.get('q'); // string\n        const nope = req.nextUrl.searchParams.get('nope'); // never\n        // ...\n        return { success: true };\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"vovkbody-type",children:[(0,t.jsx)(n.code,{children:"VovkBody"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts request body type from a controller method."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkquery-type",children:[(0,t.jsx)(n.code,{children:"VovkQuery"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts query (search params) type from a controller method."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkparams-type",children:[(0,t.jsx)(n.code,{children:"VovkParams"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts params type from a controller method."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkreturntype-type",children:[(0,t.jsx)(n.code,{children:"VovkReturnType"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts return type from a controller method and unwraps the promise."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkyieldtype-type",children:[(0,t.jsx)(n.code,{children:"VovkYieldtype"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts yield type from a controller method implemented as a generator."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/modules/hello/HelloState.ts\nimport {\n  get,\n  type VovkBody, \n  type VovkQuery, \n  type VovkParams, \n  type VovkReturnType, \n  type VovkYieldtype \n} from 'vovk';\n\nexport class HelloController {\n    @get(':someParam')\n    static doSomething(/* ... */) {\n        // ...\n    }\n\n    static *generator(/* ... */)\n}\n\ntype DoSomethingBody = VovkBody<typeof HelloController.doSomething>;\ntype DoSomethingQuery = VovkQuery<typeof HelloController.doSomething>;\ntype DoSomethingParams = VovkParams<typeof HelloController.doSomething>;\ntype DoSomethingReturnType = VovkReturnType<typeof HelloController.doSomething>;\ntype GeneratorYieldtype = VovkYieldType<typeof HelloController.generator>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"types-for-the-client",children:"Types for the Client"}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientbody-type",children:[(0,t.jsx)(n.code,{children:"VovkClientBody"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts request body type from a clientized controller method."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientquery-type",children:[(0,t.jsx)(n.code,{children:"VovkClientQuery"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts query (search params) type from a clientized controller method."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientparams-type",children:[(0,t.jsx)(n.code,{children:"VovkClientParams"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts params type from a clientized controller method."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientreturntype-type",children:[(0,t.jsx)(n.code,{children:"VovkClientReturnType"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts return type from a clientized controller method and unwraps the promise."}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientyieldtype-type",children:[(0,t.jsx)(n.code,{children:"VovkClientYieldType"})," type"]}),"\n",(0,t.jsx)(n.p,{children:"Extracts yield type from a clientized generator controller method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { HelloController } from 'vovk-client';\n\ntype DoSomethingBody = VovkClientBody<typeof HelloController.doSomething>;\ntype DoSomethingQuery = VovkClientQuery<typeof HelloController.doSomething>;\ntype DoSomethingParams = VovkClientParams<typeof HelloController.doSomething>;\ntype DoSomethingReturnType = VovkClientReturnType<typeof HelloController.doSomething>;\ntype GeneratorYieldtype = VovkClientYieldType<typeof HelloController.generator>;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"vovkclientoptions-type",children:[(0,t.jsx)(n.code,{children:"VovkClientOptions"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["Type that used internally and exposed to customize the client. See ",(0,t.jsx)(n.a,{href:"./decorators",children:"decorators documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,t.jsx)(n.h3,{id:"generatestaticapicontrollers-recordstring-function-slug-string",children:(0,t.jsx)(n.code,{children:"generateStaticAPI(controllers: Record<string, Function>, slug?: string)"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"generateStaticAPI"})," is used to generate static endpoints with ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/generate-static-params",children:"generateStaticParams"})," at build time instead of on-demand at request time. It can be used in a ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/deploying/static-exports",children:"Static Export mode"})," with the ",(0,t.jsx)(n.code,{children:"output: 'export'"})," Next.js config setting:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// next.config.js\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  output: 'export',\n};\n\nmodule.exports = nextConfig;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To utilise this feature return ",(0,t.jsx)(n.code,{children:"generateStaticAPI"})," results from ",(0,t.jsx)(n.code,{children:"generateStaticParams"})," function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// /src/app/api/[[...vovk]]/route.ts\n// ...\nexport type Controllers = typeof controllers;\nexport type Workers = typeof workers;\n\nexport function generateStaticParams() {\n  return generateStaticAPI(controllers);\n}\n\nexport const { GET } = initVovk({ controllers, workers });\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to make it work on a static website hosting like Github Pages, you may need to define ",(0,t.jsx)(n.code,{children:".json"})," extension in your endpoint definition to make it return proper HTTP headers."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { get, prefix } from 'vovk';\n\n@prefix('hello')\nexport default class HelloController {\n  @get('greeting.json')\n  static async getHello() {\n    return { greeting: 'Hello world!' };\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As result you're going to get an endpoint that looks like that: ",(0,t.jsx)(n.a,{href:"https://vovk.dev/api/hello/greeting.json",children:"https://vovk.dev/api/hello/greeting.json"}),". ",(0,t.jsx)(n.a,{href:"https://vovk.dev",children:"vovk.dev"})," website is served from Github Pages and uses this endpoint for one of the examples."]}),"\n",(0,t.jsxs)(n.p,{children:["In case if you use custom slug (e.g. ",(0,t.jsx)(n.code,{children:"/src/app/api/[[...custom]]/route.ts"}),") instead of ",(0,t.jsx)(n.strong,{children:"vovk"})," you can provide it as second argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export function generateStaticParams() {\n  return generateStaticAPI(controllers, 'custom');\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>l});var t=o(7294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);