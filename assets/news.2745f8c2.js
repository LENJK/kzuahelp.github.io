import{h as m,d as g,j as f,D as w,k as b,o,c as l,l as j,F as h,E as y,e as v,n as i,p as B,q as $,s as k,v as D,x as L,y as z,z as C,A as P,B as R,C as A,G as E,H as F}from"./main.e8c7f9d1.js";const M="Y5Pet",N="x-X7U",O="oOJAu",T="_8fzKZ";var U={section:M,main:N,limiter:O,group:T};const q=g({setup(G){const{t:H,locale:c,fallbackLocale:u}=f({inheritLocale:!0}),_=w();function p(a,s){return new Date(s).getTime()-new Date(a).getTime()}let r=_.getRoutes(),d=b(()=>{let a=[],s={};for(let e=0;e<r.length;e++){const t=r[e];t.meta.layout==="news"&&(s[t.meta.date]||(s[t.meta.date]=[]),s[t.meta.date].push(t))}for(const e of Object.values(s)){const t=e.find(n=>n.meta.locale===c.value);if(t){a.push(t);continue}a.push(e.find(n=>n.meta.locale===u.value))}return a=a.sort((e,t)=>p(e.meta.date,t.meta.date)),a=a.map(e=>({title:e.meta.title,description:e.meta.description,date:e.meta.date,url:e.path,picture:new URL({"/data/news/2022-03-11/picture.jpg":B,"/data/news/2022-03-28/picture.jpg":$,"/data/news/2022-03-29/picture.jpg":k,"/data/news/2022-04-10/picture.jpg":D,"/data/news/2022-04-11/picture.jpg":L,"/data/news/2022-04-12/picture.jpg":z,"/data/news/2022-04-17/picture.jpg":C,"/data/news/2022-04-19/picture.jpg":P,"/data/news/2022-04-21/picture.jpg":R,"/data/news/2022-04-26/picture.jpg":A}[`/data/news/${e.meta.date.substring(0,10)}/picture.jpg`],self.location).href})),a});return(a,s)=>{const e=F;return o(),l("main",{class:i([a.$style.main,a.$style.limiter])},[j("div",{class:i([a.$style.group,a.$style.section])},[(o(!0),l(h,null,y(v(d),t=>(o(),E(e,{title:t.title,description:t.description,picture:t.picture,date:t.date,url:t.url},null,8,["title","description","picture","date","url"]))),256))],2)],2)}}}),x={$style:U};var J=m(q,[["__cssModules",x]]);export{J as default};