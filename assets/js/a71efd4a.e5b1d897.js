"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4954],{68446:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(74848),n=s(28453);const r={},l="Update Message",o={type:"api",id:"update-message",title:"Update Message",description:"",slug:"/update-message",frontMatter:{},api:{tags:["Monitor"],operationId:"update_message_api_v1_monitor_messages__message_id__put",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"message_id",in:"path",required:!0,schema:{type:"string",format:"uuid",title:"Message Id"}}],requestBody:{required:!0,content:{"application/json":{schema:{properties:{text:{anyOf:[{type:"string"},{type:"null"}],title:"Text"},sender:{anyOf:[{type:"string"},{type:"null"}],title:"Sender"},sender_name:{anyOf:[{type:"string"},{type:"null"}],title:"Sender Name"},session_id:{anyOf:[{type:"string"},{type:"null"}],title:"Session Id"},files:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Files"},edit:{anyOf:[{type:"boolean"},{type:"null"}],title:"Edit"},error:{anyOf:[{type:"boolean"},{type:"null"}],title:"Error"}},type:"object",title:"MessageUpdate"}}}},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{timestamp:{type:"string",format:"date-time",title:"Timestamp"},sender:{type:"string",title:"Sender"},sender_name:{type:"string",title:"Sender Name"},session_id:{type:"string",title:"Session Id"},text:{type:"string",title:"Text"},files:{items:{type:"string"},type:"array",title:"Files"},error:{type:"boolean",title:"Error",default:!1},edit:{type:"boolean",title:"Edit",default:!1},properties:{properties:{text_color:{anyOf:[{type:"string"},{type:"null"}],title:"Text Color"},background_color:{anyOf:[{type:"string"},{type:"null"}],title:"Background Color"},edited:{type:"boolean",title:"Edited",default:!1},source:{properties:{id:{anyOf:[{type:"string"},{type:"null"}],title:"Id",description:"The id of the source component."},display_name:{anyOf:[{type:"string"},{type:"null"}],title:"Display Name",description:"The display name of the source component."},source:{anyOf:[{type:"string"},{type:"null"}],title:"Source",description:"The source of the message. Normally used to display the model name (e.g. 'gpt-4o')"}},type:"object",title:"Source"},icon:{anyOf:[{type:"string"},{type:"null"}],title:"Icon"},allow_markdown:{type:"boolean",title:"Allow Markdown",default:!1},state:{type:"string",enum:["partial","complete"],title:"State",default:"complete"},targets:{items:{},type:"array",title:"Targets",default:[]}},type:"object",title:"Properties"},category:{type:"string",title:"Category",default:"message"},content_blocks:{items:{properties:{title:{type:"string",title:"Title"},contents:{items:{type:"object"},type:"array",title:"Contents"},allow_markdown:{type:"boolean",title:"Allow Markdown",default:!0},media_url:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Media Url"}},type:"object",required:["title","contents"],title:"ContentBlock",description:"A block of content that can contain different types of content."},type:"array",title:"Content Blocks"},id:{type:"string",format:"uuid",title:"Id"},flow_id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Flow Id"}},type:"object",required:["sender","sender_name","session_id","text","id","flow_id"],title:"MessageRead"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Update Message",method:"put",path:"/api/v1/monitor/messages/{message_id}",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Update Message",description:{type:"text/plain"},url:{path:["api","v1","monitor","messages",":message_id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"message_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'{\n    "text": "<string>",\n    "sender": "<string>",\n    "sender_name": "<string>",\n    "session_id": "<string>",\n    "files": [\n        "<string>",\n        "<string>"\n    ],\n    "edit": "<boolean>",\n    "error": "<boolean>"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/update-message",previous:{title:"Delete Messages",permalink:"/api/delete-messages"},next:{title:"Update Session Id",permalink:"/api/update-session-id"}},d=[];function a(e){const t={code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"update-message",children:"Update Message"})}),"\n",(0,i.jsx)(t.p,{children:"Update Message"}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"message_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Request Body "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"text"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Text"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender Name"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"session_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Session Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"files"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Files"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"edit"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Edit"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"error"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"timestamp"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" date-time"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sender_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sender Name"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"session_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Session Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"text"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Text"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"files"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" string[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"error"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"edit"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Edit"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"properties"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"text_color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Text Color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"background_color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Background Color"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"edited"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Edited"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"source"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(t.p,{children:"The id of the source component."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"display_name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Display Name"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(t.p,{children:"The display name of the source component."})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"source"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Source"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)(t.p,{children:"The source of the message. Normally used to display the model name (e.g. 'gpt-4o')"})})]})})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"icon"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Icon"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"allow_markdown"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Allow Markdown"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"state"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" State"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Possible values:"})," [",(0,i.jsx)(t.code,{children:"partial"}),", ",(0,i.jsx)(t.code,{children:"complete"}),"]"]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"targets"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"category"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Category"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"content_blocks"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"title"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Title"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"contents"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"allow_markdown"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Allow Markdown"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"media_url"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Media Url"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"flow_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Flow Id"})]})})]})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"422"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Validation Error"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"detail"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"loc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"msg"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"type"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);