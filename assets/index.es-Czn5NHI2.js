import{u as w,P as E}from"./IconWrapper-C2dqgbd5.js";import{k as b}from"./useAccountAtoLazyQuery-CrQUV3Wu.js";import{r as e}from"./chunk-6CSD65Y2-BTg7uAhj.js";import{e as s,a as f}from"./index.es-BiqubXcG.js";import"./index-CWgKvBVE.js";var c={cx:50,cy:50,r:45},a=Math.PI*2*45,x=f`
  0%,
  15% {
    stroke-dashoffset: ${a*.9999};
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: ${a*.2};
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: ${a*.9999};
    transform: rotate(360deg);
  }
`,C=f`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`,$=f`
  0%,
  75% {
    stroke-dashoffset: 90%;
  }

  100% {
    stroke-dashoffset: 90%;
    transform: rotate(360deg);
  }
`,I=s.circle({transformOrigin:"center",opacity:.25}),T=s.circle(({show:r,isSafari:o})=>({transformOrigin:"center",animation:o?"none":`1.5s ease-in-out infinite both ${C}`,strokeDasharray:a,opacity:r?1:0})),A=s.svg(({isSafari:r})=>({height:"100%",width:"100%",display:"block",animation:r?`1s infinite linear ${$}`:`4.25s linear infinite both ${x}`})),K=e.forwardRef(({size:r,color:o="currentColor",title:i,as:d,display:u,decorative:l,delay:t=250,element:h="SPINNER"},g)=>{let m=`spinner-${w()}`,{borderWidths:{borderWidth40:p}}=b(),[S,k]=e.useState(t===0);if(!l&&i==null)throw new Error("[Spinner]: Missing a title for non-decorative icon.");e.useEffect(()=>{if(t===0)return;let v=setTimeout(()=>k(!0),t);return()=>clearTimeout(v)},[t]);let[n,y]=e.useState(null);return e.useEffect(()=>{y(navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"))},[]),n==null?null:e.createElement(E,{as:d,element:h,display:u,size:r,color:o,"aria-hidden":l,ref:g},e.createElement(A,{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":m,isSafari:n},i?e.createElement("title",{id:m},i):null,e.createElement("g",{strokeWidth:p,stroke:"currentColor",strokeLinecap:"round",fill:"transparent"},e.createElement(I,{...c}),e.createElement(T,{show:S,...c,isSafari:n}))))});K.displayName="Spinner";export{K as Spinner};
