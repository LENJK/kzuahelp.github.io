import{d as c,u as i,p as u,q as l,s as g,v as d,x as m,y as w,z as b,A as f,B as j,C as v,r as x,o as C,c as h,b as e,e as _,w as B,F,f as N,g as k}from"./main.fcea7c06.js";import{_ as A}from"./NewsArticle.842cc861.js";import{_ as H}from"./NewsHeader.3bb6ad5a.js";const U=c({setup(R){const t=i(),n=new URL({"/data/news/2022-03-11/picture.jpg":u,"/data/news/2022-03-28/picture.jpg":l,"/data/news/2022-03-29/picture.jpg":g,"/data/news/2022-04-10/picture.jpg":d,"/data/news/2022-04-11/picture.jpg":m,"/data/news/2022-04-12/picture.jpg":w,"/data/news/2022-04-17/picture.jpg":b,"/data/news/2022-04-19/picture.jpg":f,"/data/news/2022-04-21/picture.jpg":j,"/data/news/2022-04-26/picture.jpg":v}[`/data/news/${t.meta.date.substring(0,10)}/picture.jpg`],self.location).href;return(q,y)=>{const o=N,a=H,s=x("router-view"),p=A,r=k;return C(),h(F,null,[e(o),e(a,{title:_(t).meta.title,description:_(t).meta.description,picture:_(n),date:_(t).meta.date},null,8,["title","description","picture","date"]),e(p,null,{default:B(()=>[e(s)]),_:1}),e(r)],64)}}});export{U as default};