(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),i=(t(13),t(1)),m=t(2),s=t(4),o=t(3),u=t(5),d=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",null,l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#intro"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact"))))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=e.name,t=e.role,n=e.linkedin,r=e.instagram;return l.a.createElement("section",{id:"intro"},l.a.createElement("div",{className:"intro-overlay"}),l.a.createElement("div",{className:"intro-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"Hello, World"),l.a.createElement("h1",null,"I'm ",a),l.a.createElement("p",{className:"intro-position"},l.a.createElement("span",null,t))))),l.a.createElement("ul",{className:"intro-social"},l.a.createElement("li",null,l.a.createElement("a",{href:n},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:r},l.a.createElement("i",{className:"fa fa-instagram"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=e.lead,t=e.skills,n=t.pls,r=t.tools,c=t.data;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row section-intro"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"About"),l.a.createElement("h1",null,"Let me introduce myself"),l.a.createElement("div",{className:"intro-info"},l.a.createElement("img",{src:"https://media.licdn.com/dms/image/C4D03AQG6AVbvkBfLTQ/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=fwmkh2_WHgXF2VKx_p10mASY0Q_XXwWaL_m9s_ocZUQ",alt:"Profile"}),l.a.createElement("p",{className:"lead"},a)))),l.a.createElement("div",{className:"row about-content"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h3",null,"Skills"),l.a.createElement("h4",null,"Programming Languages"),l.a.createElement("ul",{className:"skills","max-width":"768px"},n.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("strong",null,e))})),l.a.createElement("h4",null,"Tools"),l.a.createElement("ul",{className:"skills","max-width":"768px"},r.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("strong",null,e))})),l.a.createElement("h4",null,"Data"),l.a.createElement("ul",{className:"skills","max-width":"768px"},c.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("strong",null,e))})))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=e.more,t=e.work,n=e.education;return l.a.createElement("section",{id:"resume",className:"grey-section"},l.a.createElement("div",{className:"row section-intro"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"Resume"),l.a.createElement("h1",null,"My credentials"),l.a.createElement("p",{className:"lead"},a))),l.a.createElement("div",{className:"row resume-timeline"},l.a.createElement("div",{className:"col-twelve resume-header"},l.a.createElement("h2",null,"Work Experience")),l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{className:"timeline-wrap"},t.map(function(e,a){return l.a.createElement("div",{className:"timeline-block",key:a},l.a.createElement("div",{className:"timeline-ico"},l.a.createElement("i",{className:"fa fa-briefcase"})),l.a.createElement("div",{className:"timeline-header"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.time)),l.a.createElement("div",{className:"timeline-content"},l.a.createElement("h4",null,e.com),l.a.createElement("p",null,e.desc)))})))),l.a.createElement("div",{className:"row resume-timeline"},l.a.createElement("div",{className:"col-twelve resume-header"},l.a.createElement("h2",null,"Education")),l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{className:"timeline-wrap"},n.map(function(e,a){return l.a.createElement("div",{className:"timeline-block",key:a},l.a.createElement("div",{className:"timeline-ico"},l.a.createElement("i",{className:"fa fa-graduation-cap"})),l.a.createElement("div",{className:"timeline-header"},l.a.createElement("h3",null,e.degree),l.a.createElement("p",null,e.time)),l.a.createElement("div",{className:"timeline-content"},l.a.createElement("h4",null,e.school),l.a.createElement("p",null,e.desc)))})))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData.email;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-intro"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h5",null,"Contact"),l.a.createElement("h1",null,"I'd Love To Hear From You"),l.a.createElement("p",{className:"lead"}))),l.a.createElement("div",{className:"row contact-info"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"icon-mail"})),l.a.createElement("h5",null,"Email Me At"),l.a.createElement("p",null,e))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resumeData,a=e.linkedin,t=e.instagram;return l.a.createElement("div",null,l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-six tab-full pull-right social"},l.a.createElement("ul",{className:"footer-social"},l.a.createElement("li",null,l.a.createElement("a",{href:a},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:t},l.a.createElement("i",{className:"fa fa-instagram"}))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#intro"},l.a.createElement("i",{className:"fa fa-long-arrow-up"}))))),l.a.createElement("div",{id:"preloader"},l.a.createElement("div",{id:"loader"})))}}]),a}(n.Component),g=(t(15),{imageurl:"https://media.licdn.com/dms/image/C4D03AQG6AVbvkBfLTQ/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=fwmkh2_WHgXF2VKx_p10mASY0Q_XXwWaL_m9s_ocZUQ",name:"Samir Verma",email:"smrvrm01@gmail.com",role:"Software Engineer",linkedin:"https://www.linkedin.com/in/sam-verma/",instagram:"https://www.instagram.com/samhamwich9/",lead:"Driven engineer passionate about building great software. Collaborative coder with experience working with small and large teams",more:"Lifelong learner and builder",skills:{pls:["JavaScript","TypeScript","Java","Python","SQL","Gosu","HTML","CSS"],tools:["JIRA","Splunk","Postman","CircleCI","Docker","SSH","AWS"],data:["PostgreSQL","Oracle","MongoDB","Redis"]},work:[{title:"Software Engineer III",time:"October 2017-August 2018",com:"GEICO",desc:"Developed implementation of new commercial auto line of business for web application that allowed in-house adjusters to intake and process commercial claims.\n      Oversaw addition of new coverages, sub-coverages, exposures and reserve lines."},{title:"Software Engineer II",time:"November 2016-October 2017",com:"GEICO",desc:"Developed Digital Disbursement project that led to a reduction in time required to process payments from several days to within 24 hours.\n      Finalist for Corporate Quality Green Award. Worked on Automated Bill Payment project that enabled payments on qualified claims to be triggered automatically."},{title:"Full Stack Developer",time:"June 2016-October 2016",com:"Greymatter Media",desc:"Full stack Javascript developer at a creative agency. Designed, developed, and supported web applications."},{title:"Software Engineer",time:"December 2015-June 2016",com:"Shaman, NSF I-Corps",desc:"One of two software engineers on team that successfully garnered funding in the NSF-funded I-Corps incubator for startups.\n      Developed MVP using RFID tags, Raspberry Pi, Python, and RapidMiner."},{title:"Teaching Assistant",time:"August 2014-December 2015",com:"UCF College of Engineering and Computer Science",desc:"Held weekly office hours and graded assignments for Intro To Programming and Object Oriented Programming over four semesters. Graded 40+ assignments a week for Intro To Programming and 15+ for Object Oriented Programming. Proctored four exams a semester."}],education:[{degree:"MS Computer Science",time:"January 2019-May 2021",school:"Georgia Institute of Technology",desc:""},{degree:"BS Computer Science",time:"January 2014-May 2016",school:"University of Central Florida",desc:""}]}),b=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(E,{resumeData:g}),l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(v,{resumeData:g}),l.a.createElement(f,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.abf03e76.chunk.js.map