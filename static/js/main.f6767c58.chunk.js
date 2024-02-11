(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{39:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(10),s=n.n(a),o=(n(57),n(21)),r=(n(58),{name:"Eliott Nibley",title:"Software Engineer and Web Developer",about:{},experience:[{companyName:"Freelance",jobTitle:"Full Stack Developer",description:"Build responsive websites front to back for a large variety of clients.",responsibilities:["Listen to clients ideas about styling and functionality of website","Negotiate terms of website development with client","Build front-end of site using latest technologies","Build an associated api for website to pull data from","Setup and fill out database for clients future use","Host website and transfer all credentials to client","Tools used: React, Javascript, HTML, CSS // Node.js, PostgreSQL"],startYear:"2020",startMonth:"July",current:!0,endYear:"",endMonth:"",city:"Salt Lake City",state:"UT"},{companyName:"Freelance",jobTitle:"Full Stack Developer",description:"Build responsive websites front to back for a large variety of clients.",responsibilities:["Listen to clients ideas about styling and functionality of website","Negotiate terms of website development with client","Build front-end of site using latest technologies","Build an associated api for website to pull data from","Setup and fill out database for clients future use","Host website and transfer all credentials to client","Tools used: React, Javascript, HTML, CSS // Node.js, PostgreSQL"],startYear:"2020",startMonth:"July",current:!0,endYear:"",endMonth:"",city:"Salt Lake City",state:"UT"},{companyName:"",jobTitle:"",description:"",responsibilities:[],startYear:"",startMonth:"",current:!1,endYear:"",endMonth:"",city:"",state:""}],projects:[{name:"DataSpeaks.us",description:"This site features interactive maps and charts with information pertaining to systematic racism.",frontend:["React","Javascript","HTML5","CSS3"],backend:["NodeJS","PostgreSQL"],otherTech:["npm","DigitalOcean","MaterialUI","Heroku"],image:"dataSpeaks.png",siteLink:"https://dataspeaks.us",gitLink:"https://github.com/Stories-with-Data/dataspeaks"},{name:"DataSpeaks.us",description:"This site features interactive maps and charts with information pertaining to systematic racism.",frontend:["React","Javascript","HTML5","CSS3"],backend:["NodeJS","PostgreSQL"],otherTech:["npm","DigitalOcean","MaterialUI","Heroku"],image:"dataSpeaks.png",siteLink:"https://dataspeaks.us",gitLink:"https://github.com/Stories-with-Data/dataspeaks"},{name:"DataSpeaks.us",description:"This site features interactive maps and charts with information pertaining to systematic racism.",frontend:["React","Javascript","HTML5","CSS3"],backend:["NodeJS","PostgreSQL"],otherTech:["npm","DigitalOcean","MaterialUI","Heroku"],image:"dataSpeaks.png",siteLink:"",gitLink:""},{name:"DataSpeaks.us",description:"This site features interactive maps and charts with information pertaining to systematic racism.",frontend:["React","Javascript","HTML5","CSS3"],backend:["NodeJS","PostgreSQL"],otherTech:["npm","DigitalOcean","MaterialUI","Heroku"],image:"dataSpeaks.png",siteLink:"",gitLink:""}],skills:{frontEnd:["HTML5","CSS3","Javascript","Typescript"],backEnd:["PostgreSQL","NodeJS","MySQL"],libraries:["React","Ionic","MaterialUI"],other:["DigitalOcean","GitHub","Heroku","Java","npm"]},education:[{companyName:"B.S. Computer Science",jobTitle:"University of Utah",description:"Computer Science major with a background in Mechanical Engineering and Mathematics",responsibilities:["Extended knowledge in data science and big data, software practices, computer networks, databases and information systems","Further emphasis in control systems with knowledge in applied mathematics and statistics"],endYear:"2024",endMonth:"May",city:"Salt Lake City",state:"UT"},{companyName:"Completion Certificate",jobTitle:"DevMountain",description:"Completed 13-week full stack web development program",responsibilities:["Immersive web development program including frontend development, server development, and database management"],endYear:"2020",endMonth:"July",city:"Lehi",state:"UT"},{companyName:"SolidWorks CAD System",jobTitle:"DevMountain",description:"Completed 13-week full stack web development program",responsibilities:["Immersive web development program including frontend development, server development, and database management"],endYear:"2020",endMonth:"July",city:"Lehi",state:"UT"}],contact:{}}),l=n(93),d=n(46),j=n.n(d),b=(n(59),n(90)),m=n(1),h=function(e){var t=Object(i.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1];window.addEventListener("scroll",(function(){var e=s();e!=c&&a(e)}));var s=function(){var e=document.getElementById("about-container"),t=document.getElementById("experience-container"),n=document.getElementById("projects-container"),i=document.getElementById("skills-container"),c=document.getElementById("education-container");return document.getElementById("contact-container").getBoundingClientRect().y<window.innerHeight/3?"contact":c.getBoundingClientRect().y<window.innerHeight/3?"education":i.getBoundingClientRect().y<window.innerHeight/3?"skills":n.getBoundingClientRect().y<window.innerHeight/3?"projects":t.getBoundingClientRect().y<window.innerHeight/3?"experience":e.getBoundingClientRect().y<window.innerHeight/3?"about":""},l=e.sections.map((function(t){var n=c==t?"1000":"500",i=c==t?"20px":"0px",a=c==t?"#0B556320":"#FFFFFF";return Object(m.jsx)(b.a,{className:"nav-button",fullWidth:!0,size:"large",style:{justifyContent:"start",paddingLeft:"20px",color:"#0B5563",fontWeight:n,transition:"250ms",marginLeft:i,backgroundColor:a},onClick:function(){e.updateScroll(t)},children:t},t)}));return Object(m.jsxs)("div",{id:"navigation-container",children:[Object(m.jsxs)("div",{className:"name-and-title",onClick:function(){e.updateScroll("name")},children:[Object(m.jsx)("h1",{children:r.name}),Object(m.jsx)("h2",{children:r.title})]}),Object(m.jsx)("div",{className:"nav-options",children:l})]})},p=(n(65),function(e){var t=e.expData,n=t.responsibilities.map((function(e,t){return Object(m.jsx)("li",{children:e},t)}));return Object(m.jsxs)("div",{className:"experience-card-container",children:[Object(m.jsxs)("div",{className:"job-header",children:[Object(m.jsx)("div",{className:"company-name",children:t.companyName}),Object(m.jsx)("div",{className:"job-title",children:t.jobTitle})]}),Object(m.jsx)("div",{className:"mobile-job-title",children:t.jobTitle}),Object(m.jsx)("div",{className:"job-description",children:t.description}),Object(m.jsx)("ul",{className:"job-responsibilities",children:n}),Object(m.jsx)("div",{className:"job-footer",children:"".concat(t.startMonth," ").concat(t.startYear," - ").concat(t.current?"Current":t.endMonth+" "+t.endYear," | ").concat(t.city,", ").concat(t.state)})]})}),u=(n(66),function(e){var t=e.eduData,n=t.responsibilities.map((function(e,t){return Object(m.jsx)("li",{children:e},t)}));return Object(m.jsxs)("div",{className:"education-card-container",children:[Object(m.jsxs)("div",{className:"job-header",children:[Object(m.jsx)("div",{className:"company-name",children:t.companyName}),Object(m.jsx)("div",{className:"job-title",children:t.jobTitle})]}),Object(m.jsx)("div",{className:"mobile-job-title",children:t.jobTitle}),Object(m.jsx)("div",{className:"job-description",children:t.description}),Object(m.jsx)("ul",{className:"job-responsibilities",children:n}),Object(m.jsx)("div",{className:"job-footer",children:"".concat(t.endMonth," ").concat(t.endYear," | ").concat(t.city,", ").concat(t.state)})]})}),x=n(42),O=n.n(x),g=n(43),f=n.n(g),v=n(44),k=n.n(v),y=n(45),w=n.n(y),S=n(94),N=n(92),C=(n(67),function(e){var t=e.prjData,n=Object(i.useState)(!1),c=Object(o.a)(n,2),a=c[0],s=c[1],r=t.frontend.map((function(e,t){return Object(m.jsx)(S.a,{title:e,placement:"bottom",TransitionComponent:N.a,arrow:!0,children:Object(m.jsx)("img",{src:"./assets/".concat(e,".png")})},t)})),d=t.backend.map((function(e,t){return Object(m.jsx)(S.a,{title:e,placement:"bottom",TransitionComponent:N.a,arrow:!0,children:Object(m.jsx)("img",{src:"./assets/".concat(e,".png")})},t)})),j=t.otherTech.map((function(e,t){return Object(m.jsx)(S.a,{title:e,placement:"bottom",TransitionComponent:N.a,arrow:!0,children:Object(m.jsx)("img",{src:"./assets/".concat(e,".png")})},t)}));return Object(m.jsxs)("div",{className:"project-card-container",children:[Object(m.jsxs)("div",{className:"project-front",style:{height:a?"0px":"100%"},children:[Object(m.jsx)("div",{className:"project-image-container",style:{backgroundImage:"url(./assets/".concat(t.image,")")}}),Object(m.jsxs)("span",{children:[Object(m.jsx)("div",{children:t.name}),Object(m.jsx)(l.a,{onClick:function(){return s(!a)},style:{color:"#0B5563"},children:Object(m.jsx)(O.a,{})})]}),Object(m.jsx)("p",{children:t.description})]}),Object(m.jsxs)("div",{className:"project-more",style:{height:a?"100%":"0px"},children:[Object(m.jsxs)("div",{className:"more-header",children:[Object(m.jsx)("div",{children:"TECH USED"}),Object(m.jsx)(l.a,{onClick:function(){return s(!a)},style:{color:"#0B5563"},children:Object(m.jsx)(f.a,{})})]}),Object(m.jsx)("h4",{children:"Front-end"}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("h4",{children:"Back-end"}),Object(m.jsx)("span",{children:d}),Object(m.jsx)("h4",{children:"Other"}),Object(m.jsx)("span",{children:j}),Object(m.jsx)("h4",{children:"Links"}),Object(m.jsxs)("div",{className:"site-links",children:[Object(m.jsx)(S.a,{title:"View Site",placement:"bottom",TransitionComponent:N.a,arrow:!0,children:Object(m.jsx)("a",{href:t.siteLink,target:"_blank",children:Object(m.jsx)(l.a,{style:{color:"#0b5563"},children:Object(m.jsx)(k.a,{})})})}),Object(m.jsx)(S.a,{title:"View Source",placement:"bottom",TransitionComponent:N.a,arrow:!0,children:Object(m.jsx)("a",{href:t.gitLink,target:"_blank",children:Object(m.jsx)(l.a,{style:{color:"#0b5563"},children:Object(m.jsx)(w.a,{})})})})]})]})]})}),T=(n(39),function(e){var t=e.tech;return Object(m.jsxs)("div",{className:"skill-container",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{src:"./assets/".concat(t,".png")})}),Object(m.jsx)("div",{className:"tech-name",children:t})]})}),L=function(e){var t=e.data,n=e.section,i=t.map((function(e,t){return Object(m.jsx)(T,{tech:e},t)}));return Object(m.jsxs)("div",{className:"skills-card-container",children:[Object(m.jsx)("h4",{children:n}),Object(m.jsx)("div",{className:"skills",children:i}),Object(m.jsx)("div",{className:"skills-splice",children:i.slice(0,3)}),Object(m.jsx)("div",{className:"skills-splice",children:i.slice(3)})]})};var B=function(){var e=["about","experience","projects","skills","education","contact","resume"],t=Object(i.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],s=function(e){"resume"!==e&&("name"!==e?window.scrollTo(0,(window.innerWidth<=800?-59:0)+window.scrollY+document.getElementById("".concat(e,"-container")).getBoundingClientRect().y):window.scrollTo(0,0))},d=r.experience.map((function(e,t){return Object(m.jsx)(p,{expData:e},t)})),x=r.projects.map((function(e,t){return Object(m.jsx)(C,{prjData:e},t)})),O=r.education.map((function(e,t){return Object(m.jsx)(u,{eduData:e},t)})),g=e.map((function(e){return Object(m.jsx)(b.a,{className:"mobile-nav-button",fullWidth:!0,size:"large",style:{justifyContent:"start",paddingLeft:"20px",color:"#0B5563"},onClick:function(){s(e),a(!1)},children:e},e)}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{id:"mobile-header",children:[Object(m.jsx)("div",{id:"mobile-menu-button",children:Object(m.jsx)(l.a,{onClick:function(){return a(!c)},style:{color:"#0B5563"},children:Object(m.jsx)(j.a,{})})}),Object(m.jsx)("h1",{children:r.name}),Object(m.jsx)("h2",{children:r.title})]}),Object(m.jsx)("div",{id:"mobile-nav-container-".concat(c),children:g}),Object(m.jsx)(h,{sections:e,updateScroll:s}),Object(m.jsxs)("div",{id:"contents-container",children:[Object(m.jsx)("section",{id:"photo-container"}),Object(m.jsxs)("section",{id:"about-container",children:[Object(m.jsx)("h3",{className:"section-header",children:"About"}),Object(m.jsx)("div",{id:"about-content"})]}),Object(m.jsxs)("section",{id:"experience-container",children:[Object(m.jsx)("h3",{className:"section-header",children:"Experience"}),Object(m.jsx)("div",{id:"exerience-content",children:d})]}),Object(m.jsxs)("section",{id:"projects-container",children:[Object(m.jsx)("h3",{className:"section-header",children:"Projects"}),Object(m.jsx)("div",{id:"projects-content",children:x})]}),Object(m.jsxs)("section",{id:"skills-container",children:[Object(m.jsx)("h3",{className:"section-header",children:"Skills"}),Object(m.jsxs)("div",{id:"skills-content",children:[Object(m.jsx)(L,{section:"Front-End",data:r.skills.frontEnd}),Object(m.jsx)(L,{section:"Back-End",data:r.skills.backEnd}),Object(m.jsx)(L,{section:"Libraries/Frameworks",data:r.skills.libraries}),Object(m.jsx)(L,{section:"Other",data:r.skills.other})]})]}),Object(m.jsxs)("section",{id:"education-container",children:[Object(m.jsx)("h3",{className:"section-header",children:"Education"}),Object(m.jsx)("div",{id:"education-content",children:O})]}),Object(m.jsxs)("section",{id:"contact-container",style:{minHeight:"100vh",width:"100%"},children:[Object(m.jsx)("h3",{className:"section-header",children:"Contact"}),Object(m.jsx)("div",{id:"contact-content"})]})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),M()}},[[70,1,2]]]);
//# sourceMappingURL=main.f6767c58.chunk.js.map