(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{220:function(e,a,t){e.exports=t.p+"static/media/contactBg.2ee0a010.jpg"},221:function(e,a,t){e.exports=t.p+"static/media/linkedIn.28c4a847.png"},222:function(e,a,t){e.exports=t.p+"static/media/facebook.cbd142ce.png"},223:function(e,a,t){e.exports=t.p+"static/media/instagram.fd463737.png"},224:function(e,a,t){e.exports=t.p+"static/media/twetter.5544d4b1.png"},231:function(e,a,t){e.exports=t(493)},469:function(e,a,t){},470:function(e,a,t){},491:function(e,a,t){},492:function(e,a,t){},493:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"formatStateData",(function(){return v})),t.d(n,"getHomeData",(function(){return h})),t.d(n,"getAboutDetails",(function(){return y})),t.d(n,"getGalleryImage",(function(){return O})),t.d(n,"getContactData",(function(){return N}));var r=t(0),l=t.n(r),c=(t(143),t(241),t(281),t(45)),o=t.n(c),i=(t(469),t(54)),s=t(55),m=t(57),d=t(56),u=(t(470),t(38)),g=t(21),p=t(26),f=t(58),b=t(87),E=t.n(b),v=function(e,a){return{type:e,payload:a}},h=function(){return function(e){return E.a.get("https://spreadsheets.google.com/feeds/list/1_YLaCC87yfVXCkyCLGRCNmHQ9XZBdQtGzZvjUbJ7bIs/1/public/values?alt=json").then((function(a){for(var t=a.data.feed.entry,n={},r=0;r<t.length;r++){var l;l=Object(f.a)({},t[r].gsx$key.$t,t[r].gsx$value.$t),Object.assign(n,l)}e(v("FETCH_HOME_DETAILS",n))})).catch()}},y=function(){return function(e){return E.a.get("https://spreadsheets.google.com/feeds/list/1_YLaCC87yfVXCkyCLGRCNmHQ9XZBdQtGzZvjUbJ7bIs/2/public/values?alt=json").then((function(a){for(var t=a.data.feed.entry,n={},r=0;r<t.length;r++){var l=void 0;if("userAward"===t[r].gsx$key.$t||"skillsRating"===t[r].gsx$key.$t){var c=JSON.parse(t[r].gsx$value.$t);l=Object(f.a)({},t[r].gsx$key.$t,c)}else l=Object(f.a)({},t[r].gsx$key.$t,t[r].gsx$value.$t);Object.assign(n,l)}e(v("FETCH_ABOUT_DETAILS",n))})).catch()}},O=function(){return function(e){return E.a.get("https://spreadsheets.google.com/feeds/list/1_YLaCC87yfVXCkyCLGRCNmHQ9XZBdQtGzZvjUbJ7bIs/3/public/values?alt=json").then((function(a){for(var t=a.data.feed.entry,n=[],r=[],l={},c=0;c<t.length;c++){var o={folderName:t[c].gsx$groupname.$t,imgLink:t[c].gsx$imglink.$t};r.push(o.folderName),n.push(o)}for(var i=Array.from(new Set(r)),s=0;s<i.length;s++){for(var m=[],d=0;d<n.length;d++)i[s]===n[d].folderName&&m.push(n[d].imgLink);l=Object.assign(Object(p.a)({},l),Object(f.a)({},i[s],m))}e(v("FETCH_GALLERY_IMAGE",l))})).catch()}},N=function(){return function(e){return E.a.get("https://spreadsheets.google.com/feeds/list/1_YLaCC87yfVXCkyCLGRCNmHQ9XZBdQtGzZvjUbJ7bIs/4/public/values?alt=json").then((function(a){for(var t=a.data.feed.entry,n={},r=0;r<t.length;r++){var l;l=Object(f.a)({},t[r].gsx$key.$t,t[r].gsx$value.$t),Object.assign(n,l)}e(v("FETCH_CONTACT_DETAILS",n))})).catch()}},j=(t(491),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.action.getHomeData()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo"},this.props.homeDetails.logoName),l.a.createElement("div",{id:"mainListDiv",className:"main_list"},l.a.createElement("ul",{className:"navlinks"},l.a.createElement("li",null,l.a.createElement("a",{href:"#sectionHome"}," Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#sectionAbout"}," About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#sectionGallery"}," Gallery")),l.a.createElement("li",null,l.a.createElement("a",{href:"#sectionContact"}," Contact")))),l.a.createElement("span",{className:"navTrigger"},l.a.createElement("i",null),l.a.createElement("i",null),l.a.createElement("i",null)))),l.a.createElement("section",{id:"sectionHome",className:"imageHome"}))}}]),t}(r.Component)),k=Object(u.b)((function(e){return{homeDetails:e.appReducer.homeDetails}}),(function(e){return{action:Object(g.b)(n,e)}}))(j),w=t(64);var C=Object(u.b)((function(e){return{aboutDetails:e.appReducer.aboutDetails,loadingFlag:e.appReducer.loadingFlag}}),(function(e){return{action:Object(g.b)(n,e)}}))((function(e){var a=e.action.getAboutDetails,t=Object(r.useState)(!1),n=Object(w.a)(t,2),c=n[0],o=n[1],i=e.aboutDetails,s=i.userName,m=i.userDescribtion,d=(i.userMobNo,i.userPhoto),u=i.userEmail,g=i.userDateOfBirth,p=i.userLocation,f=i.programmingLang,b=i.uiTech,E=i.userLanguage,v=i.userHiEducation,h=i.skillsRating,y=i.userAward;return Object(r.useEffect)((function(){a(),o(e.loadingFlag)}),[e.loadingFlag]),l.a.createElement("div",{className:"container",id:"sectionAbout"},c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{paddingTop:"20px"}},l.a.createElement("h1",null,"About Me")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-sm-12"},l.a.createElement("img",{src:d,draggable:!1,alt:"user pix",style:{border:"1px solid #ddd",borderRadius:"4px",padding:"5px",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}})),l.a.createElement("div",{className:"col-md-9 col-sm-12"},l.a.createElement("div",{className:"typewriter",style:{backgroundColor:"rgb(197, 195, 195)",textAlign:"center",height:"3.2rem",fontFamily:"cursive"}},l.a.createElement("h2",{style:{color:"#191818"}},s)),l.a.createElement("div",{className:"mt-2",style:{minHeight:"83%",borderRadius:"5px",fontSize:"large",padding:"5px"}},l.a.createElement("div",{className:"row"},h.map((function(e,a){return l.a.createElement("div",{key:a,className:"col-md-3 col-sm-6 col-6"},l.a.createElement("div",null,e.label,l.a.createElement("div",null,function(e){for(var a=Number(e),t=Math.floor(a),n=[],r=1;r<=t;r++)n.push(l.a.createElement("span",{key:r,className:"fa fa-star"}));return Math.floor(e)!==a&&n.push(l.a.createElement("span",{key:r+1,className:"fa fa-star-half-full"})),n}(e.rating))))})))))),l.a.createElement("div",{className:"row m-1"},l.a.createElement("div",{className:"col-md-12",style:{border:"1px solid #cccbcb",padding:"5px",borderRadius:"5px"}},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}))),l.a.createElement("div",{className:"row m-1"},l.a.createElement("div",{className:"col-md-12",style:{border:"1px solid #cccbcb",padding:"5px",borderRadius:"5px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"Name :")," ",s),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"Hi.Edu")," ",v),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"Email :")," ",u),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"DOB :")," ",g)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"Location :"),p),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"Programming :"),f),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"UI Tech :"),b),l.a.createElement("div",{className:"col-md-3 col-sm-6"},l.a.createElement("label",{style:{fontWeight:"bold"}},"Language :")," ",E)))),l.a.createElement("div",{className:"row m-1"},l.a.createElement("div",{className:"col-md-12",style:{border:"1px solid #cccbcb",padding:"5px",borderRadius:"5px"}},l.a.createElement("span",{style:{display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"#c5c3c3",borderRadius:"5px",color:"black",fontWeight:"bold"}},"Award"),l.a.createElement("div",{className:"row"},y.map((function(e,a){return l.a.createElement("div",{key:a+1,className:"col-md-6 col-sm-6"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))}))))),l.a.createElement("hr",null)):l.a.createElement("div",null,"Loading...."))})),x=t(220),A=t.n(x),_=t(221),D=t.n(_),L=t(222),T=t.n(L),I=t(223),H=t.n(I),S=t(224),F=t.n(S),R=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.action.getContactData()}},{key:"render",value:function(){var e=this.props.conatctDetails;return l.a.createElement("div",{id:"sectionContact",style:{backgroundImage:"URL(".concat(A.a,")"),backgroundSize:"100%",paddingBottom:"1%",minHeight:"700px"}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Contacts"),l.a.createElement("div",{className:"container",style:{paddingTop:"20px",paddingBottom:"20px",backgroundColor:"#060a0c8c",marginTop:"5%",marginBottom:"10%"}},l.a.createElement("h4",{style:{color:"white",textAlign:"center"}},e.email_id),l.a.createElement("hr",{style:{textAlign:"center",margin:"3%",backgroundColor:"white",padding:"1px"}}),l.a.createElement("div",{className:"row",style:{margin:"8%"}},l.a.createElement("div",{className:"col-md-3 col-sm-3 col-6 socailImage"},l.a.createElement("a",{href:e.linkedInLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:D.a,draggable:!1,className:"img-fluid contactSocailNetwork",alt:"linkedInIcon"}))),l.a.createElement("div",{className:"col-md-3 col-sm-3 col-6 socailImage"},l.a.createElement("a",{href:e.facebookLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:T.a,draggable:!1,className:"img-fluid contactSocailNetwork",alt:"facebookIcon"}))),l.a.createElement("div",{className:"col-md-3 col-sm-3 col-6 socailImage"},l.a.createElement("a",{href:e.instaLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:H.a,draggable:!1,className:"img-fluid contactSocailNetwork",alt:"InstaIcon"}))),l.a.createElement("div",{className:"col-md-3 col-sm-3 col-6 socailImage"},l.a.createElement("a",{href:e.twitterLink,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:F.a,draggable:!1,className:"img-fluid contactSocailNetwork",rel:"noopener noreferrer",alt:"twitterIcon"})))),l.a.createElement("hr",{style:{textAlign:"center",margin:"3%",backgroundColor:"white",padding:"1px"}}),l.a.createElement("h3",{style:{color:"white",textAlign:"center"}},e.footerMessage))))}}]),t}(r.Component),$=Object(u.b)((function(e){return{conatctDetails:e.appReducer.conatctDetails}}),(function(e){return{action:Object(g.b)(n,e)}}))(R),G=t(89),M=t(88),W=t.n(M),B=t(496);t(492);var U=function(e){var a=Object(r.useState)(e.viewFlag),t=Object(w.a)(a,2),n=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,{size:"lg",show:n,onHide:function(){c(!1),e.changeFlag()},dialogClassName:"modal-m3","aria-labelledby":"example-modal-sizes-title-lg"},l.a.createElement(B.a.Header,{closeButton:!0},l.a.createElement(B.a.Title,{id:"example-modal-sizes-title-lg"},e.modalTitle.replace(/_/g," "))),l.a.createElement(B.a.Body,null,e.imageArray.map((function(e){return l.a.createElement("img",{src:e,draggable:!1,alt:"clickedImage",className:"responsive",style:{padding:"10px"}})})))))},X=function(e){var a=Object(r.useState)(!1),t=Object(w.a)(a,2),n=t[0],c=t[1],o=Object(r.useState)([W.a,W.a,W.a,W.a]),i=Object(w.a)(o,2),s=i[0],m=i[1];function d(){c(!n)}return Object(r.useEffect)((function(){var a=function(){var a,t=e.imageArray.length;if(t<=4)a=s.splice.apply(s,[0,t].concat(Object(G.a)(e.imageArray)));else{var n=Object(G.a)(e.imageArray),r=n[0],l=n[1],c=n[2],o=n[3];a=s.splice(0,4,r,l,c,o)}return a}();m([].concat(Object(G.a)(s),Object(G.a)(a)))}),[m]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"imageGalleryDiv",onClick:d},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("img",{src:s[0],draggable:!1,alt:"img1",className:"imageFolder"})),l.a.createElement("span",null,l.a.createElement("img",{src:s[1],draggable:!1,alt:"img2",className:"imageFolder"}))),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("img",{src:s[2],draggable:!1,alt:"img3",className:"imageFolder"})),l.a.createElement("span",null,l.a.createElement("img",{src:s[3],draggable:!1,alt:"img4",className:"imageFolder"}))),l.a.createElement("span",{className:"imageFolderTitle"},e.folderName.replace(/_/g," "))),n?l.a.createElement(U,{viewFlag:n,changeFlag:d,modalTitle:e.folderName,imageArray:e.imageArray}):"")},z=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.action.getGalleryImage()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"sectionGallery",className:"container",style:{minHeight:"650px"}},l.a.createElement("div",{style:{marginTop:"50px",paddingTop:"15px"}}," "),l.a.createElement("h1",null,"Gallery"),Object.keys(this.props.imageArray).map((function(a,t){return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement(X,{folderName:a,imageArray:e.props.imageArray[a]}))})))}}]),t}(r.Component),P=Object(u.b)((function(e){return{imageArray:e.appReducer.imageArray}}),(function(e){return{action:Object(g.b)(n,e)}}))(z);var Q=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement(C,null),l.a.createElement(P,null),l.a.createElement($,null)),l.a.createElement("div",{className:"container-fluid pl-0 pr-0"}))}}]),t}(l.a.Component),Z=Object(u.b)((function(e){return{appLoader:e.appReducer.appLoader}}),(function(e){return{action:Object(g.b)(n,e)}}))(Q),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Y=t(229),q={homeData:[]};var K={imageArray:[],aboutDetails:{},homeDetails:{},conatctDetails:{},appLoader:!0};var ee=Object(g.c)({homeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_HOME_DATA":return Object(p.a)(Object(p.a)({},e),{},{homeData:a.payload.home_data});default:return e}},appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_GALLERY_IMAGE":return Object(p.a)(Object(p.a)({},e),{},{imageArray:a.payload});case"FETCH_ABOUT_DETAILS":return Object(p.a)(Object(p.a)({},e),{},{aboutDetails:a.payload,loadingFlag:!0});case"FETCH_HOME_DETAILS":return Object(p.a)(Object(p.a)({},e),{},{homeDetails:a.payload});case"FETCH_CONTACT_DETAILS":return Object(p.a)(Object(p.a)({},e),{},{conatctDetails:a.payload,appLoader:!1});case"LOADER_APP":return console.log(a.payload),Object(p.a)(Object(p.a)({},e),{},{appLoader:a.payload});default:return e}}}),ae=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):g.d)(Object(g.a)(Y.a)),te=Object(g.e)(ee,ae);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u.a,{store:te},l.a.createElement(Z,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");J?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(a,e)}))}}()},88:function(e,a,t){e.exports=t.p+"static/media/defaultGallery.3531ddaf.jpg"}},[[231,1,2]]]);
//# sourceMappingURL=main.57950a57.chunk.js.map