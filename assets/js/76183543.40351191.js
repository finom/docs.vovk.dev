"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8727],{6291:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(5893),o=s(1151);const i={sidebar_position:8},r="How it Works",a={id:"how-it-works",title:"How it Works",description:"1. vovk dev finds the closest available port to run Next.js server by itself. This is an important step that allows Vovk Metadata Server to know the process.env.PORT and Next.js dev server to know  process.env.VOVK_PORT. This is the only purpose of this wrapper.",source:"@site/docs/how-it-works.md",sourceDirName:".",slug:"/how-it-works",permalink:"/docs/how-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/finom/vovk/tree/main/docs/docs/how-it-works.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Customization & Configuration",permalink:"/docs/customization"},next:{title:"Roadmap & Changelog",permalink:"/docs/roadmap"}},d={},c=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-it-works",children:"How it Works"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"vovk dev"})," finds the closest available port to run Next.js server by itself. This is an important step that allows Vovk Metadata Server to know the ",(0,n.jsx)(t.code,{children:"process.env.PORT"})," and Next.js dev server to know  ",(0,n.jsx)(t.code,{children:"process.env.VOVK_PORT"}),". This is the only purpose of this wrapper."]}),"\n",(0,n.jsxs)(t.li,{children:["When available port is found Vovk runs two processes (similar to ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/concurrently",children:"concurrently"}),") in parallel: Vovk Metadata Server and the regular ",(0,n.jsx)(t.code,{children:"next dev"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Each time when an endpoint is requested, ",(0,n.jsx)(t.code,{children:"initVovk"})," POSTs data about controllers and worker services to the Vovk Metadata Server. Previous major version of Vovk.ts used ",(0,n.jsx)(t.code,{children:"fs"})," Node.js module to write metadata file but this approach didn't work in Edge Runtime since most of the standard Node.js capabilities can't be used this environment. Instead of ",(0,n.jsx)(t.code,{children:"fs"})," Vovk.ts starts its own server that accepts information about Controller Classess and Worker Service Classess via POST request made by ",(0,n.jsx)(t.code,{children:"initVovk"})," function."]}),"\n",(0,n.jsxs)(t.li,{children:["The Metadata Server accepts this data and if a change is detected it updates ",(0,n.jsx)(t.strong,{children:".vovk.json"})," and ",(0,n.jsx)(t.strong,{children:"node_modules/.vovk"})," (it contains the generated client) automatically. By Next.js design endpoints handled by ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments",children:"Optional Catch-all Segment"})," execute its code each time when the endpoint is requested."]}),"\n",(0,n.jsxs)(t.li,{children:["To make development process seamless and to trigger file creation without calling any endpoint manually, Vovk Metadata Server constrantly pings ",(0,n.jsx)(t.code,{children:"GET /api/__ping"})," every 3 seconds to make the client regenerated automatically."]}),"\n",(0,n.jsxs)(t.li,{children:["If metadata is changed, the Metadata Server regenerates ",(0,n.jsx)(t.strong,{children:".vovk.json"})," and files ay ",(0,n.jsx)(t.strong,{children:"node_modules/.vovk"})," that contains ",(0,n.jsx)(t.strong,{children:".js"})," and ",(0,n.jsx)(t.strong,{children:".d.ts"})," files for the client. Vovk.ts doesn't watch files and doesn't use AST to build the client making client generating to perform instantly considering short ping delay."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(7294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);