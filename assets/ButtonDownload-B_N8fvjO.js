import{r as c,j as n,T as m}from"./index-GNYMS_-z.js";import{t as p}from"./index-Cnhg7C0r.js";const w=s=>{const a=s.refDiv.current,[l,o]=c.useState(""),[i,r]=c.useState(!1),u=()=>{r(t=>!t),setTimeout(()=>{r(t=>!t)},2e3)},d=()=>{if(a===null){o("Download Error!");return}p(a,{cacheBust:!1}).then(async t=>{const e=document.createElement("a");e.download=s.name+".png",e.href=t,e.click(),o("Downloaded!")}).catch(t=>{o("Download Error!"),console.log(t)}),u()};return n.jsx("div",{className:"flex relative w-auto items-center z-50 my-4",children:n.jsxs("button",{type:"button",onClick:d,className:"py-1 px-2 button-base",children:[n.jsx(m,{msg:l,active:i}),"Download"]})})};export{w as default};