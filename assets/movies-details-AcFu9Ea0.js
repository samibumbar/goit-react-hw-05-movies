import{u as o,r as a,j as e,L as n,O as c}from"./index-DU7slLjG.js";import{a as d}from"./api-BlrVyx5J.js";const j=()=>{const{movieId:i}=o(),[s,r]=a.useState(null);return a.useEffect(()=>{(async()=>{if(i){const l=await d(i);r(l)}})()},[i]),s?e.jsx("div",{children:e.jsxs("div",{className:"details-container",children:[e.jsxs("button",{onClick:()=>window.history.back(),children:[" ",e.jsx("i",{className:"fa-solid fa-left-long"}),"Go back"]}),e.jsxs("h2",{children:[s.title," (",new Date().getFullYear(),")"]}),e.jsxs("div",{className:"details-item",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:`https://image.tmdb.org/t/p/w300${s.poster_path}`,alt:s.title})}),e.jsxs("div",{className:"information-container",children:[e.jsxs("p",{children:["User Score: ",Math.round(s.vote_average*10),"%"]}),e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:s.overview}),e.jsx("h3",{children:"Genres"}),e.jsx("p",{children:s.genres.map(t=>t.name).join(", ")})]})]}),e.jsx("h3",{children:"Additional information"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{to:"cast",children:"Cast"})}),e.jsx("li",{children:e.jsx(n,{to:"reviews",children:"Reviews"})})]}),e.jsx(c,{})]})}):e.jsx("div",{children:"Loading..."})};export{j as default};
