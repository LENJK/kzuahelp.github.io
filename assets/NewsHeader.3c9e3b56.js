import{j as u,d,l as m,m as p,o as n,e as a,p as l,n as t,t as i,g as y,q as f}from"./main.f8dfc0da.js";const h="aU-az",v="u9Z-1",$="x8IAl",g="_3lu75",k="UxOzL",z="xAkXY",B="_0HEn5";var C={limiter:h,header:v,info:$,title:g,description:k,picture:z,time:B};const D=["src","alt"],L=d({props:{title:null,description:null,picture:null,date:null},setup(s){const c=s,{t:A,locale:o}=m({inheritLocale:!0}),r=p(()=>new Date(c.date).toLocaleDateString(o.value));return(e,E)=>(n(),a("div",{class:t(e.$style.limiter)},[l("header",{class:t(e.$style.header)},[l("div",{class:t(e.$style.info)},[l("h1",{class:t(e.$style.title)},i(s.title),3),l("div",{class:t(e.$style.description)},i(s.description),3),l("div",{class:t(e.$style.time)},i(y(r)),3)],2),s.picture?(n(),a("div",{key:0,class:t(e.$style.picture)},[l("img",{src:s.picture,alt:s.title},null,8,D)],2)):f("",!0)],2)],2))}}),S={$style:C};var M=u(L,[["__cssModules",S]]);export{M as _};
