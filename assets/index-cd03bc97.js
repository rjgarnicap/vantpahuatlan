(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m="modulepreload",h=function(u,n){return new URL(u,n).href},f={},a=function(n,s,i){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=h(e,i),e in f)return;f[e]=!0;const r=e.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!i)for(let l=t.length-1;l>=0;l--){const c=t[l];if(c.href===e&&(!r||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":m,r||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),r)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())};a(()=>import("./needle-asap-06cd3753.js"),["./needle-asap-06cd3753.js","./three.module-19edce0d.js"],import.meta.url);a(()=>import("./needle-engine-1681d23b.js"),["./needle-engine-1681d23b.js","./three.module-19edce0d.js"],import.meta.url);export{a as _};
