import{_ as L}from"./CommonCta.b29dde7e.js";import{_ as I,a as A,b as P,P as E}from"./sidebar-icon-1.7c7969d3.js";import{a as v,l as u,o as c,b as d,e,f as s,w as a,F as w,r as k,c as x,h as G,t as n,j as l,i as j,k as S,m as h,p as q,q as Y}from"./entry.f8b12de2.js";import{S as T,a as C,A as U,_ as D}from"./swiper.min.80b3ab13.js";import{P as Q,E as X,T as J}from"./Trust.1aea2586.js";import{T as K,F as Z}from"./Fact.0afde8fd.js";import{_ as ee}from"./logo.980801e8.js";const te={name:"swiper-slider4",data(){return{sliders:[{id:"1",image:"/img/slider/manyara-secret.jpeg",subtitle:"Welcome to Tanzania Safari Collection",title:"Enjoy the best <br>moments of life",button:"Accommodation",url:"/about",shape1:"/img/slider/slider-shape-1.png",shape2:"/img/slider/slider-shape-2.png"},{id:"2",image:"/img/slider/private-luxury-travel-swamp.jpg",subtitle:"Welcome to Tanzania Safari Collection",title:"Enjoy a Luxury <br>Experience",button:"Safari",url:"/about",shape1:"/img/slider/slider-shape-1.png",shape2:"/img/slider/slider-shape-2.png"},{id:"3",image:"/img/slider/beach.jpg",subtitle:"Welcome to Tanzania Safari Collection",title:"The Perfect Base <br>For you",button:"Beach",url:"/about",shape1:"/img/slider/slider-shape-1.png",shape2:"/img/slider/slider-shape-2.png"}]}},components:{Swiper:T,SwiperSlide:C},setup(){return{modules:[U,Q,X]}}},se={class:"slider-area fix position-relative"},ie={class:"slider-active"},oe={class:"single-slider slider-height swiper-slidess","data-swiper-autoplay":"10000"},ae={class:"container"},le={class:"row"},ne={class:"col-lg-12"},ce={class:"kslider z-index"},re={class:"kslider--subtitle mb-25","data-animation":"fadeInUp","data-delay":"0.3s"},de=["innerHTML"],_e={class:"kslider--btn","data-animation":"fadeInUp","data-delay":"0.7s"},me={class:"slide-shape shape-1"},ue=["src"],pe={class:"slide-shape shape-2"},he=["src"],ge=e("div",{class:"slider-paginations slide-dots"},null,-1);function be(p,r,f,g,t,m){const o=j,i=u("swiper-slide"),$=u("swiper"),y=D;return c(),d("section",se,[e("div",ie,[s(y,null,{default:a(()=>[s($,{modules:g.modules,"slides-per-view":1,loop:!0,"space-between":30,effect:"fade",pagination:{el:".slider-paginations",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1}},{default:a(()=>[(c(!0),d(w,null,k(t.sliders,_=>(c(),x(i,{key:_.id},{default:a(()=>[e("div",oe,[e("div",{class:"slide-bg",style:G({backgroundImage:`url(${_.image})`})},null,4),e("div",ae,[e("div",le,[e("div",ne,[e("div",ce,[e("h5",re,n(_.subtitle),1),e("h2",{class:"kslider--title mb-40","data-animation":"fadeInUp","data-delay":"0.5s",innerHTML:_.title},null,8,de),e("div",_e,[s(o,{to:_.url,class:"theme-btn"},{default:a(()=>[l(n(_.button),1)]),_:2},1032,["to"])])])])])]),e("div",me,[e("img",{src:_.shape1,class:"img-fluid",alt:"shape-img"},null,8,ue)]),e("div",pe,[e("img",{src:_.shape2,class:"img-fluid",alt:"shape-img"},null,8,he)])])]),_:2},1024))),128)),ge]),_:1},8,["modules","pagination"])]),_:1})])])}const ve=v(te,[["render",be]]),fe={name:"swiper-slider8",data(){return{brand:[{id:"1",image:"/img/brand/brand-6.png",url:"#"},{id:"2",image:"/img/brand/brand-7.png",url:"#"},{id:"3",image:"/img/brand/brand-8.png",url:"#"},{id:"4",image:"/img/brand/brand-9.png",url:"#"},{id:"5",image:"/img/brand/brand-10.png",url:"#"},{id:"6",image:"/img/brand/brand-9a.png",url:"#"}]}},components:{Swiper:T,SwiperSlide:C},setup(){return{modules:[U]}}},we={class:"brand-area pt-100 pb-100 bg-heading"},ke={class:"container"},ye={class:"brand-active"},$e={class:"brand-wrapper swiper-slide wow fadeInUp","data-wow-delay":".3s","data-swiper-autoplay":"10000"},je=["href"],xe=["src"];function Se(p,r,f,g,t,m){const o=u("swiper-slide"),i=u("swiper"),$=D;return c(),d("div",we,[e("div",ke,[e("div",ye,[s($,null,{default:a(()=>[s(i,{modules:g.modules,"slides-per-view":1,loop:!0,"space-between":30,autoplay:{delay:3500,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:2},550:{slidesPerView:3},768:{slidesPerView:4},1200:{slidesPerView:5}}},{default:a(()=>[(c(!0),d(w,null,k(t.brand,y=>(c(),x(o,{key:y.id},{default:a(()=>[e("div",$e,[e("a",{href:y.url},[e("img",{src:y.image,class:"img-fluid",alt:"img"},null,8,xe)],8,je)])]),_:2},1024))),128))]),_:1},8,["modules"])]),_:1})])])])}const Te=v(fe,[["render",Se]]),Ce=""+globalThis.__publicAssetsURL("img/about/intro-bg.png"),Ue=""+globalThis.__publicAssetsURL("img/icon/about-icon-2.png"),De={name:"Introduction",data(){return{introimg:"/img/about/about-img-4.jpg",introSubtitle:"Trusted by <br>8800 Clients",sectionTitle:"largest business <br>experts",sectionDescription:"Lorem Ipsum is simply dummy text of the printing available in the market for free uses.",skill:[{skilltitle:"Web Design",skillparcent:"90%"},{skilltitle:"Web Development",skillparcent:"68%"}],authorImg:"/img/service/service-author.png",authorName:"Jessica Brown",sectionDescription2:"Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown was popularised."}}},Le={class:"intro-area z-index fix"},Ie=e("img",{src:Ce,class:"intro-bg img-fluid",alt:"intro-bg"},null,-1),Ae={class:"intro-space pt-120"},Pe={class:"container"},Oe={class:"row"},Be={class:"col-xl-6 col-lg-6"},We={class:"kintro-img mb-40","data-aos":"fade-right","data-aos-duration":"1000"},Me=["src"],Fe={class:"kintro-img-text"},ze=e("div",{class:"kintro-img-text-icon mr-20"},[e("img",{src:Ue,class:"img-fluid",alt:"author-img"})],-1),He=["innerHTML"],Ne={class:"col-xl-6 col-lg-6"},Ve={class:"kintro-text ml-70","data-aos":"fade-left","data-aos-duration":"1000"},Re={class:"section-title-wrapper mb-25"},Ee=e("h5",{class:"section-subtitle mb-20"},"Our introduction",-1),Ge=["innerHTML"],qe={class:"mb-45"},Ye={class:"skill__wrapper mb-20"},Qe={class:"skill--title__wrapper"},Xe={class:"skill--title"},Je=e("div",{class:"progress"},[e("div",{class:"progress-bar bg-theme wow slideInLeft","data-wow-duration":"1s","data-wow-delay":"0.5s",role:"progressbar",style:{width:"90%",visibility:"visible","animation-duration":"1s","animation-delay":"0.5s","animation-name":"slideInLeft"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})],-1),Ke={class:"kservice-author pt-40"},Ze={class:"kservice-author-img mr-30"},et=["src"],tt={class:"kservice-author-sign kservice-author-sign-2"};function st(p,r,f,g,t,m){return c(),d("section",Le,[Ie,e("div",Ae,[e("div",Pe,[e("div",Oe,[e("div",Be,[e("div",We,[e("img",{src:t.introimg,class:"img-fluid",alt:"about-img"},null,8,Me),e("div",Fe,[ze,e("h5",{innerHTML:t.introSubtitle},null,8,He)])])]),e("div",Ne,[e("div",Ve,[e("div",Re,[Ee,e("h2",{class:"section-title mb-35",innerHTML:t.sectionTitle},null,8,Ge),e("p",null,n(t.sectionDescription),1)]),e("p",qe,n(t.sectionDescription2),1),(c(!0),d(w,null,k(t.skill,o=>(c(),d("div",{class:"skill--content",key:o.title},[e("div",Ye,[e("div",Qe,[e("h5",Xe,n(o.skilltitle),1),e("span",null,n(o.skillparcent),1)]),Je])]))),128)),e("div",Ke,[e("div",Ze,[e("img",{src:t.authorImg,class:"img-fluid",alt:"author-img"},null,8,et)]),e("div",tt,[e("span",null,n(t.authorName),1)])])])])])])])])}const it=v(De,[["render",st]]),ot=""+globalThis.__publicAssetsURL("img/about/about-img-3.jpg"),at=""+globalThis.__publicAssetsURL("img/about/about-img-8.jpg"),lt=""+globalThis.__publicAssetsURL("img/about/about-img-9.jpg"),nt={name:"Fact",data(){return{sectionSubTitle:"Why we are good",sectionTitle:"you can Get the best all design solutions",sectionDescription:"There are many variations of passages of but the lipsum not free as you know majority have in some form by injected humou or words which do not look even slightly believable of but the majority have suffered."}}},ct={class:"why-we bg-grey pt-120 pb-70 position-relative fix"},rt=e("div",{class:"common-shape-wrapper wow slideInLeft animated","data-wow-delay":"0ms","data-wow-duration":"1500ms"},[e("div",{class:"common-shape-inner wow slideInleft animated","data-wow-delay":"0ms","data-wow-duration":"1500ms"})],-1),dt={class:"container z-index"},_t={class:"row justify-content-between"},mt={class:"col-xl-6"},ut={class:"why-we-left mb-40 mr-90","data-aos":"fade-up-right","data-aos-duration":"1000"},pt={class:"section-title-wrapper"},ht={class:"section-subtitle mb-20"},gt={class:"section-title mb-35"},bt=e("div",{class:"col-xl-6"},[e("div",{class:"why-we-tab mb-40","data-aos":"fade-up-left","data-aos-duration":"1000"},[e("ul",{class:"nav why-tabs mb-30",id:"myTab",role:"tablist"},[e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"Full satisfaction")]),e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"Expert Team")]),e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"},"Mission & Vissions")])]),e("div",{class:"tab-content",id:"myTabContent"},[e("div",{class:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},[e("p",{class:"mb-30"},"Discover which SVG patterns we should avoid and which patterns are the most inclusive when comparing different combinations of OSs, browsers, and screen readers."),e("div",{class:"why-tab-wrapper"},[e("div",{class:"why-tab-img"},[e("img",{src:ot,class:"img-fluid",alt:"about-img"})]),e("div",{class:"why-tab-list fix"},[e("ul",null,[e("li",null,[e("i",{class:"fal fa-check"}),l("Nsectetur cing elit")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Suspe ndisse suscipit sagittis leo")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Entum estibulum dignissim posuere")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Lorem Ipsum on the tend to repeat")])])])])]),e("div",{class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},[e("p",{class:"mb-30"},"There are many variations of passages of but the majority have in some form, by injected humou or words which don't look even slightly believable of but the majority have suffered."),e("div",{class:"why-tab-wrapper"},[e("div",{class:"why-tab-img"},[e("img",{src:at,class:"img-fluid",alt:"about-img"})]),e("div",{class:"why-tab-list fix"},[e("ul",null,[e("li",null,[e("i",{class:"fal fa-check"}),l("Entum estibulum dignissim posuere")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Lorem Ipsum on the tend to repeat")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Nsectetur cing elit")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Suspe ndisse suscipit sagittis leo")])])])])]),e("div",{class:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},[e("p",{class:"mb-30"},"Mistakes. These cruel villains do not even stop at the beautiful world of software development. But although we cannot avoid making mistakes, we can learn to undo them!"),e("div",{class:"why-tab-wrapper"},[e("div",{class:"why-tab-img"},[e("img",{src:lt,class:"img-fluid",alt:"about-img"})]),e("div",{class:"why-tab-list fix"},[e("ul",null,[e("li",null,[e("i",{class:"fal fa-check"}),l("Suspe ndisse suscipit sagittis leo")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Nsectetur cing elit")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Entum estibulum dignissim posuere")]),e("li",null,[e("i",{class:"fal fa-check"}),l("Lorem Ipsum on the tend to repeat")])])])])])])])],-1);function vt(p,r,f,g,t,m){return c(),d("section",ct,[rt,e("div",dt,[e("div",_t,[e("div",mt,[e("div",ut,[e("div",pt,[e("h5",ht,n(t.sectionSubTitle),1),e("h2",gt,n(t.sectionTitle),1),e("p",null,n(t.sectionDescription),1)])])]),bt])])])}const ft=v(nt,[["render",vt]]),wt={name:"portfolio",data(){return{projectContent:[{image:"/img/project/project-img-5.jpg",category:"Graphic",title:"Fimlor Experience",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{image:"/img/project/project-img-6.jpg",category:"Design",title:"Using SWR React",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{image:"/img/project/project-img-7.jpg",category:"Development",title:"Incremental Static",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{image:"/img/project/project-img-8.jpg",category:"Networking",title:"Developer Decisions",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{image:"/img/project/project-img-9.jpg",category:"Graphic",title:"Process of Taking",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"},{image:"/img/project/project-img-10.jpg",category:"Design",title:"Interactive Learning",titleUrl:"/projectdetails",projectLinkUrl:"/projectdetails"}]}}},kt={class:"project-2 pt-115 pb-90"},yt={class:"container"},$t=e("div",{class:"row align-items-center justify-content-center"},[e("div",{class:"col-lg-5"},[e("div",{class:"section-title-wrapper mb-50"},[e("h5",{class:"section-subtitle mb-20"},"Enjoy your experience"),e("h2",{class:"section-title"},"Tour Packages")])]),e("div",{class:"col-lg-7"},[e("div",{class:"aportfolio-menu text-start text-lg-end"},[e("nav",null,[e("div",{class:"nav",id:"nav-tab",role:"tablist"},[e("button",{class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"All"),e("button",{class:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"Branding"),e("button",{class:"nav-link",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"illustration"),e("button",{class:"nav-link",id:"nav-photography-tab","data-bs-toggle":"tab","data-bs-target":"#nav-photography",type:"button",role:"tab","aria-controls":"nav-photography","aria-selected":"false"},"Photography"),e("button",{class:"nav-link",id:"nav-web-tab","data-bs-toggle":"tab","data-bs-target":"#nav-web",type:"button",role:"tab","aria-controls":"nav-web","aria-selected":"false"},"Web Design")])])])])],-1),jt={class:"aportfolio-active"},xt={class:"tab-content",id:"nav-tabContent"},St={class:"tab-pane fade show active",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},Tt={class:"row"},Ct={class:"kproject kproject-2 mb-30"},Ut=["src"],Dt={class:"kproject-text kproject-text-2"},Lt={class:"kproject-text-content"},It={class:"kproject-text-title"},At={class:"kproject-text-icon"},Pt=e("i",{class:"fas fa-long-arrow-right"},null,-1),Ot={class:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},Bt={class:"row"},Wt={class:"kproject kproject-2 mb-30"},Mt=["src"],Ft={class:"kproject-text kproject-text-2"},zt={class:"kproject-text-content"},Ht={class:"kproject-text-title"},Nt={class:"kproject-text-icon"},Vt=e("i",{class:"fas fa-long-arrow-right"},null,-1),Rt={class:"tab-pane fade",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-contact-tab"},Et={class:"row"},Gt={class:"kproject kproject-2 mb-30"},qt=["src"],Yt={class:"kproject-text kproject-text-2"},Qt={class:"kproject-text-content"},Xt={class:"kproject-text-title"},Jt={class:"kproject-text-icon"},Kt=e("i",{class:"fas fa-long-arrow-right"},null,-1),Zt={class:"tab-pane fade",id:"nav-photography",role:"tabpanel","aria-labelledby":"nav-photography-tab"},es={class:"row"},ts={class:"kproject kproject-2 mb-30"},ss=["src"],is={class:"kproject-text kproject-text-2"},os={class:"kproject-text-content"},as={class:"kproject-text-title"},ls={class:"kproject-text-icon"},ns=e("i",{class:"fas fa-long-arrow-right"},null,-1),cs={class:"tab-pane fade",id:"nav-web",role:"tabpanel","aria-labelledby":"nav-web-tab"},rs={class:"row"},ds={class:"kproject kproject-2 mb-30"},_s=["src"],ms={class:"kproject-text kproject-text-2"},us={class:"kproject-text-content"},ps={class:"kproject-text-title"},hs={class:"kproject-text-icon"},gs=e("i",{class:"fas fa-long-arrow-right"},null,-1);function bs(p,r,f,g,t,m){const o=j;return c(),d("section",kt,[e("div",yt,[$t,e("div",jt,[e("div",xt,[e("div",St,[e("div",Tt,[(c(!0),d(w,null,k(t.projectContent,i=>(c(),d("div",{class:"col-lg-4 col-md-6 grid-item",key:i.title},[e("div",Ct,[e("img",{src:i.image,class:"img-fluid",alt:"project_img"},null,8,Ut),e("div",Dt,[e("div",Lt,[e("span",null,n(i.category),1),e("h5",It,[s(o,{to:i.titleUrl},{default:a(()=>[l(n(i.title),1)]),_:2},1032,["to"])])]),e("div",At,[s(o,{to:i.projectLinkUrl},{default:a(()=>[Pt]),_:2},1032,["to"])])])])]))),128))])]),e("div",Ot,[e("div",Bt,[(c(!0),d(w,null,k(t.projectContent.slice(2,5),i=>(c(),d("div",{class:"col-lg-4 col-md-6 grid-item",key:i.title},[e("div",Wt,[e("img",{src:i.image,class:"img-fluid",alt:"project_img"},null,8,Mt),e("div",Ft,[e("div",zt,[e("span",null,n(i.category),1),e("h5",Ht,[s(o,{to:i.titleUrl},{default:a(()=>[l(n(i.title),1)]),_:2},1032,["to"])])]),e("div",Nt,[s(o,{to:i.projectLinkUrl},{default:a(()=>[Vt]),_:2},1032,["to"])])])])]))),128))])]),e("div",Rt,[e("div",Et,[(c(!0),d(w,null,k(t.projectContent.slice(1,3),i=>(c(),d("div",{class:"col-lg-4 col-md-6 grid-item",key:i.title},[e("div",Gt,[e("img",{src:i.image,class:"img-fluid",alt:"project_img"},null,8,qt),e("div",Yt,[e("div",Qt,[e("span",null,n(i.category),1),e("h5",Xt,[s(o,{to:i.titleUrl},{default:a(()=>[l(n(i.title),1)]),_:2},1032,["to"])])]),e("div",Jt,[s(o,{to:i.projectLinkUrl},{default:a(()=>[Kt]),_:2},1032,["to"])])])])]))),128))])]),e("div",Zt,[e("div",es,[(c(!0),d(w,null,k(t.projectContent.slice(3,6),i=>(c(),d("div",{class:"col-lg-4 col-md-6 grid-item",key:i.title},[e("div",ts,[e("img",{src:i.image,class:"img-fluid",alt:"project_img"},null,8,ss),e("div",is,[e("div",os,[e("span",null,n(i.category),1),e("h5",as,[s(o,{to:i.titleUrl},{default:a(()=>[l(n(i.title),1)]),_:2},1032,["to"])])]),e("div",ls,[s(o,{to:i.projectLinkUrl},{default:a(()=>[ns]),_:2},1032,["to"])])])])]))),128))])]),e("div",cs,[e("div",rs,[(c(!0),d(w,null,k(t.projectContent.slice(1,5),i=>(c(),d("div",{class:"col-lg-4 col-md-6 grid-item",key:i.title},[e("div",ds,[e("img",{src:i.image,class:"img-fluid",alt:"project_img"},null,8,_s),e("div",ms,[e("div",us,[e("span",null,n(i.category),1),e("h5",ps,[s(o,{to:i.titleUrl},{default:a(()=>[l(n(i.title),1)]),_:2},1032,["to"])])]),e("div",hs,[s(o,{to:i.projectLinkUrl},{default:a(()=>[gs]),_:2},1032,["to"])])])])]))),128))])])])])])])}const vs=v(wt,[["render",bs]]),fs={name:"Service",data(){return{image:"/img/about/about-img-5.jpg",projectText:"3600 Projects are completed",sectionSubTitle:"our benefits",sectionTitle:"We’re here to grow your business",benefitTitle:"Outsourced digital Businesses",benefitContent:"Lorem Ipsum is simply free text available in your not dummy text of the printing and typesetting industry."}}},ws={class:"benefits-area position-relative pt-120"},ks={class:"benefit-img mb-30 wow slideInLeft","data-wow-duration":".5s"},ys=["src"],$s={class:"benefit-img-level"},js={class:"container"},xs={class:"row"},Ss={class:"col-xl-6 col-lg-8"},Ts={class:"benefit-text mb-30 wow slideInRight","data-wow-duration":".5s"},Cs={class:"section-title-wrapper mb-45"},Us={class:"section-subtitle mb-20"},Ds={class:"section-title"},Ls={class:"mb-45"},Is={class:"benefit-subtitle"},As=S('<div class="row mt-40"><div class="col-md-6"><div class="progress_circle mb-10"><div class="progress blue"><span class="progress-left"><span class="progress-bar"></span></span><span class="progress-right"><span class="progress-bar"></span></span><div class="progress-value">90%</div></div><h5 class="afford">Quality of <br>Work</h5></div></div><div class="col-md-6"><div class="progress_circle mb-10"><div class="progress yellow"><span class="progress-left"><span class="progress-bar"></span></span><span class="progress-right"><span class="progress-bar"></span></span><div class="progress-value">37.5%</div></div><h5 class="afford">Affordable <br>Cost</h5></div></div></div>',1);function Ps(p,r,f,g,t,m){return c(),d("section",ws,[e("div",ks,[e("img",{src:t.image,class:"img-fluid",alt:"benefit-img"},null,8,ys),e("div",$s,[e("span",null,n(t.projectText),1)])]),e("div",js,[e("div",xs,[e("div",Ss,[e("div",Ts,[e("div",Cs,[e("h5",Us,n(t.sectionSubTitle),1),e("h2",Ds,n(t.sectionTitle),1)]),e("div",Ls,[e("h5",Is,n(t.benefitTitle),1),e("p",null,n(t.benefitContent),1)]),As])])])])])}const Os=v(fs,[["render",Ps]]),Bs={name:"swiper-slider7",data(){return{sectionSubTitle:"recent blog posts",sectionTitle:"News & Articles",blogs:[{id:"1",image:"/img/blog/blog-img-1.jpg",imageUrl:"/blogdetails",date:"20 May",metaAdmin:"by Admin",metaAdminUrl:"/blogdetails",metaComment:"2 Comments",metaCommentUrl:"/blogdetails",title:"Our Strategy Create Business Growth",titleUrl:"/blogdetails",blogLink:"Read more",blogLinkUrl:"/blogdetails"},{id:"2",image:"/img/blog/blog-img-2.jpg",imageUrl:"/blogdetails",date:"21 May",metaAdmin:"by Admin",metaAdminUrl:"/blogdetails",metaComment:"2 Comments",metaCommentUrl:"/blogdetails",title:"We work with change oriented executives",titleUrl:"/blogdetails",blogLink:"Read more",blogLinkUrl:"/blogdetails"},{id:"3",image:"/img/blog/blog-img-3.jpg",imageUrl:"/blogdetails",date:"22 May",metaAdmin:"by Admin",metaAdminUrl:"/blogdetails",metaComment:"2 Comments",metaCommentUrl:"/blogdetails",title:"From banking and insurance to wealth",titleUrl:"/blogdetails",blogLink:"Read more",blogLinkUrl:"/blogdetails"},{id:"4",image:"/img/blog/blog-img-4.jpg",imageUrl:"/blogdetails",date:"23 May",metaAdmin:"by Admin",metaAdminUrl:"/blogdetails",metaComment:"2 Comments",metaCommentUrl:"/blogdetails",title:"Our Strategy Create Business Growth",titleUrl:"/blogdetails",blogLink:"Read more",blogLinkUrl:"/blogdetails"},{id:"5",image:"/img/blog/blog-img-5.jpg",imageUrl:"/blogdetails",date:"24 May",metaAdmin:"by Admin",metaAdminUrl:"/blogdetails",metaComment:"2 Comments",metaCommentUrl:"/blogdetails",title:"We work with change oriented executives",titleUrl:"/blogdetails",blogLink:"Read more",blogLinkUrl:"/blogdetails"}]}},components:{Swiper:T,SwiperSlide:C},setup(){return{modules:[U]}}},Ws={class:"blog-2 pt-75 pb-60"},Ms={class:"container"},Fs={class:"row"},zs={class:"col-lg-12"},Hs={class:"section-title-wrapper text-center mb-50"},Ns={class:"section-subtitle mb-20"},Vs={class:"section-title"},Rs={class:"blog-active swiper-container mb-120"},Es={class:"swiper-wrapper"},Gs={class:"kblog swiper-slide"},qs={class:"kblog-img"},Ys=["src"],Qs={class:"kblog-text"},Xs={class:"kblog-meta"},Js=e("i",{class:"far fa-user-circle"},null,-1),Ks=e("i",{class:"far fa-comments"},null,-1),Zs={class:"kblog-text-title mb-20"},ei={class:"kblog-text-link"},ti=e("i",{class:"far fa-chevron-right"},null,-1);function si(p,r,f,g,t,m){const o=j,i=u("swiper-slide"),$=u("swiper"),y=D;return c(),d("section",Ws,[e("div",Ms,[e("div",Fs,[e("div",zs,[e("div",Hs,[e("h5",Ns,n(t.sectionSubTitle),1),e("h2",Vs,n(t.sectionTitle),1)])])]),e("div",Rs,[e("div",Es,[s(y,null,{default:a(()=>[s($,{modules:g.modules,"slides-per-view":1,loop:!0,"space-between":30,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:2},1200:{slidesPerView:3},1400:{slidesPerView:3}}},{default:a(()=>[(c(!0),d(w,null,k(t.blogs,_=>(c(),x(i,{key:_.id},{default:a(()=>[e("div",Gs,[e("div",qs,[s(o,{to:_.imageUrl},{default:a(()=>[e("img",{src:_.image,class:"img-fluid",alt:"blog-img"},null,8,Ys)]),_:2},1032,["to"]),e("span",null,n(_.date),1)]),e("div",Qs,[e("div",Xs,[s(o,{to:_.metaAdminUrl},{default:a(()=>[Js,l(n(_.metaAdmin),1)]),_:2},1032,["to"]),s(o,{to:_.metaCommentUrl},{default:a(()=>[Ks,l(n(_.metaComment),1)]),_:2},1032,["to"])]),e("h3",Zs,[s(o,{to:_.titleUrl},{default:a(()=>[l(n(_.title),1)]),_:2},1032,["to"])]),e("div",ei,[s(o,{to:_.blogLinkUrl},{default:a(()=>[l(n(_.blogLink)+" ",1),ti]),_:2},1032,["to"])])])])]),_:2},1024))),128))]),_:1},8,["modules"])]),_:1})])])])])}const ii=v(Bs,[["render",si]]),oi={name:"Service",data(){return{setionSubTitle:"Services providing",setionTitle:"What we’re offering",service:[{category:"Services",title:"Website <br>Development",titleurl:"/servicedetails",image:"/img/service/service-img-1.jpg",iconclass:"flaticon-stats",icon:"/img/icon/service-icon-1.png"},{category:"Services",title:"Graphic <br>designing",titleurl:"/servicedetails",image:"/img/service/service-img-2.jpg",iconclass:"flaticon-digital-marketing",icon:"/img/icon/service-icon-2.png"},{category:"Services",title:"SEO & Content <br>writting",titleurl:"/servicedetails",image:"/img/service/service-img-3.jpg",iconclass:"flaticon-website",icon:"/img/icon/service-icon-3.png"},{category:"Services",title:"digital <br>marketing",titleurl:"/servicedetails",image:"/img/service/service-img-4.jpg",iconclass:"flaticon-idea",icon:"/img/icon/service-icon-4.png"}]}}},ai={class:"service-2 pt-75 pb-90"},li={class:"container"},ni={class:"row"},ci={class:"col-12"},ri={class:"section-title-wrapper text-center mb-45"},di={class:"section-subtitle mb-20"},_i={class:"section-title"},mi={class:"row"},ui={class:"kservice-2 mb-30 wow fadeInUp","data-wow-duration":".3s"},pi={class:"kservice-text-2"},hi={class:"kservice-title-2"},gi=["innerHTML"],bi=["src"],vi={class:"kservice-img-2"},fi=["src"];function wi(p,r,f,g,t,m){const o=j;return c(),d("section",ai,[e("div",li,[e("div",ni,[e("div",ci,[e("div",ri,[e("h5",di,n(t.setionSubTitle),1),e("h2",_i,n(t.setionTitle),1)])])]),e("div",mi,[(c(!0),d(w,null,k(t.service,i=>(c(),d("div",{class:"col-xl-3 col-lg-3 col-sm-6",key:i.title},[e("div",ui,[e("div",pi,[e("span",null,n(i.category),1),e("h4",hi,[s(o,{to:i.titleurl},{default:a(()=>[e("span",{innerHTML:i.title},null,8,gi)]),_:2},1032,["to"])]),e("div",null,[e("img",{src:i.icon,class:"img-fluid",alt:"service-img"},null,8,bi)])]),e("div",vi,[e("img",{src:i.image,class:"img-fluid",alt:"service-img"},null,8,fi)])])]))),128))])])])}const ki=v(oi,[["render",wi]]);const yi={name:"topbar",data(){return{welcomeText:"Welcome to Tanzania Safari Collection",address:"Arusha, Tanzania",gmail:"info@tanzaniasafaricollection.com",number:"+255 753 012 882",isSticky:!1,showSidebar:!1,showSearch:!1,menuOption:{menuShow:!1,homeDropdown:!1,coursesDropdown:!1,shopDropdown:!1,pagesDropDown:!1,instructorDropDown:!1,faqDropDown:!1,eventDropDown:!1,blogDropdown:!1}}},methods:{handleSticky(){window.scrollY>50?this.isSticky=!0:this.isSticky=!1},handleSidebar(){this.showSidebar=!0},handleSidebarClose(){this.showSidebar=!1},handleSearch(){this.showSearch=!0},handleSearchClose(){this.showSearch=!1}},mounted(){window.addEventListener("scroll",this.handleSticky)}},b=p=>(q("data-v-cc15a50a"),p=p(),Y(),p),$i={class:"header-top bg-heading d-none d-md-block"},ji={class:"container-fluid"},xi={class:"header-top-space"},Si={class:"row"},Ti={class:"col-lg-4 d-none d-lg-block"},Ci={class:"welcome-text"},Ui={class:"col-lg-8"},Di={class:"header-top-info"},Li=b(()=>e("img",{src:I,class:"img-fluid",alt:"icon_img"},null,-1)),Ii=b(()=>e("img",{src:A,class:"img-fluid",alt:"icon_img"},null,-1)),Ai={href:"mailto:info@tanzaniasafaricollection.com"},Pi=b(()=>e("img",{src:P,class:"img-fluid",alt:"icon_img"},null,-1)),Oi={href:"https://wa.me/+255753012882",target:"_blank"},Bi={class:"container-fluid"},Wi={class:"header-space"},Mi={class:"row align-items-center"},Fi={class:"col-xl-2 col-lg-3 col-md-3 col-8 order-1 order-xl-1"},zi={class:"header-logo"},Hi=b(()=>e("img",{src:ee,class:"img-fluid",alt:"logo-img"},null,-1)),Ni={class:"col-xl-6 col-lg-1 col-md-2 col-4 order-3 order-xl-2"},Vi={class:"main-menu main-menu-2 d-none d-xl-block"},Ri={id:"mobile-menu"},Ei={class:"menu-item-has-children"},Gi={class:"menu-item-has-children"},qi={class:"menu-item-has-children"},Yi={class:"sub-menu"},Qi={class:"menu-item-has-children"},Xi={class:"d-block d-xl-none text-end"},Ji={class:"menu-bar"},Ki=b(()=>e("i",{class:"far fa-bars"},null,-1)),Zi=[Ki],eo={class:"col-xl-4 col-lg-8 col-md-7 d-none d-md-block order-2 order-xl-3"},to={class:"header-right text-end"},so=S('<div class="header-social header-social-2" data-v-cc15a50a><a href="https://twitter.com/Face0fTanzania?t=7Xjfr4jMjCRjol5Yt9yD_g&amp;s=08" target="_blank" data-v-cc15a50a><i class="fab fa-twitter" data-v-cc15a50a></i></a><a href="https://www.instagram.com/tanzaniasafaricollection/" target="_blank" data-v-cc15a50a><i class="fab fa-instagram" data-v-cc15a50a></i></a></div>',1),io={class:"header-search header-search-2"},oo=b(()=>e("i",{class:"far fa-search"},null,-1)),ao=[oo],lo={class:"header-btn"},no={class:"fix"},co=b(()=>e("i",{class:"fas fa-times-circle"},null,-1)),ro=[co],_o={class:"side-info-content sidebar-menu mm-menu"},mo={class:"contact-infos mb-30"},uo={class:"contact-list mb-30"},po=S('<h4 data-v-cc15a50a>Contact Info</h4><div class="mobile-search" data-v-cc15a50a><form action="#" data-v-cc15a50a><input type="text" placeholder="Search here..." data-v-cc15a50a><button type="submit" data-v-cc15a50a><i class="far fa-search" data-v-cc15a50a></i></button></form></div>',2),ho=b(()=>e("img",{src:I,class:"img-fluid",alt:"icon-img"},null,-1)),go=b(()=>e("img",{src:A,class:"img-fluid",alt:"icon-img"},null,-1)),bo={href:"mailto:info@sycho24.com"},vo=b(()=>e("img",{src:P,class:"img-fluid",alt:"icon-img"},null,-1)),fo={href:"https://wa.me/+255753012882",target:"_blank"},wo=S('<div class="sidebar__menu--social" data-v-cc15a50a><a href="https://twitter.com/Face0fTanzania?t=7Xjfr4jMjCRjol5Yt9yD_g&amp;s=08" target="_blank" data-v-cc15a50a><i class="fab fa-twitter" data-v-cc15a50a></i></a><a href="https://www.instagram.com/tanzaniasafaricollection/" target="_blank" data-v-cc15a50a><i class="fab fa-instagram" data-v-cc15a50a></i></a></div>',1),ko={class:"search-inner"},yo=b(()=>e("i",{class:"fas fa-times-circle"},null,-1)),$o=[yo],jo=b(()=>e("div",{class:"search-cell"},[e("form",{method:"get"},[e("div",{class:"search-field-holder"},[e("input",{type:"search",class:"main-search-input",placeholder:"Search here..."})])])],-1));function xo(p,r,f,g,t,m){const o=j;return c(),d("header",null,[e("div",$i,[e("div",ji,[e("div",xi,[e("div",Si,[e("div",Ti,[e("div",Ci,[e("span",null,n(t.welcomeText),1)])]),e("div",Ui,[e("div",Di,[e("ul",null,[e("li",null,[Li,l(n(t.address),1)]),e("li",null,[Ii,e("a",Ai,n(t.gmail),1)]),e("li",null,[Pi,e("a",Oi,n(t.number),1)])])])])])])])]),e("div",{class:h(`${t.isSticky?"header-area transparent-header sticky-header2 white-bg sticky":"header-area transparent-header sticky-header2 white-bg"}`)},[e("div",Bi,[e("div",Wi,[e("div",Mi,[e("div",Fi,[e("div",zi,[s(o,{to:"/"},{default:a(()=>[Hi]),_:1})])]),e("div",Ni,[e("div",Vi,[e("nav",Ri,[e("ul",null,[e("li",Ei,[s(o,{to:"/"},{default:a(()=>[l("Home")]),_:1})]),e("li",Gi,[s(o,{to:"/service"},{default:a(()=>[l("Destinations")]),_:1})]),e("li",qi,[s(o,{to:"/project"},{default:a(()=>[l("Tours")]),_:1}),e("ul",Yi,[e("li",null,[s(o,{to:"/projectdetails"},{default:a(()=>[l("Tanzania Safari")]),_:1})]),e("li",null,[s(o,{to:"/projectdetails"},{default:a(()=>[l("Kilimanjaro hiking")]),_:1})]),e("li",null,[s(o,{to:"/projectdetails"},{default:a(()=>[l("Zanzibar beach")]),_:1})]),e("li",null,[s(o,{to:"/projectdetails"},{default:a(()=>[l("Serengeti Safaris")]),_:1})]),e("li",null,[s(o,{to:"/projectdetails"},{default:a(()=>[l("Luxury big 5 safari")]),_:1})])])]),e("li",Qi,[s(o,{to:"/blog"},{default:a(()=>[l("Blogs")]),_:1})]),e("li",null,[s(o,{to:"/about"},{default:a(()=>[l("About")]),_:1})]),e("li",null,[s(o,{to:"/contact"},{default:a(()=>[l("Contact")]),_:1})])])])]),e("div",Xi,[e("div",Ji,[e("button",{class:"bars",onClick:r[0]||(r[0]=(...i)=>m.handleSidebar&&m.handleSidebar(...i))},Zi)])])]),e("div",eo,[e("div",to,[so,e("div",io,[e("a",{class:"search-btn nav-search search-trigger",href:"javascript:void(0)",onClick:r[1]||(r[1]=(...i)=>m.handleSearch&&m.handleSearch(...i))},ao)]),e("div",lo,[s(o,{to:"/about",class:"theme-btn theme-btn-small theme-btn-small-border"},{default:a(()=>[l("Free Quote")]),_:1})])])])])])])],2),e("div",no,[e("div",{class:h(`${t.showSidebar?"side-mobile-menu active":"side-mobile-menu"}`)},[e("button",{class:"close-mobile-menu",onClick:r[2]||(r[2]=(...i)=>m.handleSidebarClose&&m.handleSidebarClose(...i))},ro),e("div",_o,[e("ul",null,[e("li",{class:h(["menu-item-has-children has-droupdown",[t.menuOption.homeDropdown===!0?"active":""]])},[e("a",{onClick:r[3]||(r[3]=i=>t.menuOption.homeDropdown=!t.menuOption.homeDropdown)},"Home"),e("ul",{class:h(["sub-menu",[t.menuOption.homeDropdown===!0?"active":""]])},[e("li",null,[s(o,{to:"/"},{default:a(()=>[l("Home Style 1")]),_:1})]),e("li",null,[s(o,{to:"/index-2"},{default:a(()=>[l("Home Style 2")]),_:1})])],2)],2),e("li",{class:h(["menu-item-has-children has-droupdown",[t.menuOption.coursesDropdown===!0?"active":""]])},[e("a",{onClick:r[4]||(r[4]=i=>t.menuOption.coursesDropdown=!t.menuOption.coursesDropdown)},"Services"),e("ul",{class:h(["sub-menu",[t.menuOption.coursesDropdown===!0?"active":""]])},[e("li",null,[s(o,{to:"/service"},{default:a(()=>[l("Services")]),_:1})]),e("li",null,[s(o,{to:"/servicedetails"},{default:a(()=>[l("Services Details")]),_:1})])],2)],2),e("li",{class:h(["menu-item-has-children has-droupdown",[t.menuOption.shopDropdown===!0?"active":""]])},[e("a",{onClick:r[5]||(r[5]=i=>t.menuOption.shopDropdown=!t.menuOption.shopDropdown)},"Project"),e("ul",{class:h(["sub-menu",[t.menuOption.shopDropdown===!0?"active":""]])},[e("li",null,[s(o,{to:"/project"},{default:a(()=>[l("Project")]),_:1})]),e("li",null,[s(o,{to:"/projectdetails"},{default:a(()=>[l("Project Details")]),_:1})])],2)],2),e("li",{class:h(["menu-item-has-children has-droupdown",[t.menuOption.blogDropdown===!0?"active":""]])},[e("a",{onClick:r[6]||(r[6]=i=>t.menuOption.blogDropdown=!t.menuOption.blogDropdown)},"Blog"),e("ul",{class:h(["sub-menu",[t.menuOption.blogDropdown===!0?"active":""]])},[e("li",null,[s(o,{to:"/blog"},{default:a(()=>[l("Blog")]),_:1})]),e("li",null,[s(o,{to:"/blogdetails"},{default:a(()=>[l("Blog Details")]),_:1})])],2)],2),e("li",{class:h(["has-droupdown",[t.menuOption.pagesDropDown===!0?"active":""]])},[e("a",{onClick:r[7]||(r[7]=i=>t.menuOption.pagesDropDown=!t.menuOption.pagesDropDown)},"Pages"),e("ul",{class:h(["sub-menu",[t.menuOption.pagesDropDown===!0?"active":""]])},[e("li",null,[s(o,{to:"/pricing"},{default:a(()=>[l("Pricing")]),_:1})]),e("li",null,[s(o,{to:"/faq"},{default:a(()=>[l("Faq")]),_:1})]),e("li",null,[s(o,{to:"/about"},{default:a(()=>[l("About")]),_:1})]),e("li",null,[s(o,{to:"/project"},{default:a(()=>[l("Project")]),_:1})]),e("li",null,[s(o,{to:"/projectdetails"},{default:a(()=>[l("Project Details")]),_:1})])],2)],2),e("li",null,[s(o,{to:"/about"},{default:a(()=>[l("About")]),_:1})]),e("li",null,[s(o,{to:"/contact"},{default:a(()=>[l("Contact")]),_:1})])])]),e("div",mo,[e("div",uo,[po,e("ul",null,[e("li",null,[ho,l(" "+n(t.address),1)]),e("li",null,[go,e("a",bo,n(t.gmail),1)]),e("li",null,[vo,e("a",fo,n(t.number),1)])]),wo])])],2)]),e("div",{class:h(`${t.showSidebar?"body-overlay active":"body-overlay"}`),onClick:r[8]||(r[8]=(...i)=>m.handleSidebarClose&&m.handleSidebarClose(...i))},null,2),e("div",{class:h(`${t.showSearch?"search-wrap active":"search-wrap"}`)},[e("div",ko,[e("i",{class:"search-close",id:"search-close",onClick:r[9]||(r[9]=(...i)=>m.handleSearchClose&&m.handleSearchClose(...i))},$o),jo])],2)])}const So=v(yi,[["render",xo],["__scopeId","data-v-cc15a50a"]]),To={name:"app",components:{PageFooter:E,CommonCta:L,MainSlider:ve,Brand:Te,Intro:it,Trust:J,Team:K,WhyWe:ft,ProjectTwo:vs,Fact:Z,Benefits:Os,BlogTwo:ii,ServiceTwo:ki,HeaderTwo:So}};function Co(p,r,f,g,t,m){const o=u("HeaderTwo"),i=u("MainSlider"),$=u("Brand"),y=u("Intro"),_=u("ServiceTwo"),B=u("Trust"),W=u("Team"),M=u("WhyWe"),F=u("ProjectTwo"),z=u("Fact"),H=u("Benefits"),N=u("BlogTwo"),V=L,R=u("PageFooter");return c(),d("main",null,[s(o),s(i),s($),s(y),s(_),s(B),s(W),s(M),s(F),s(z),s(H),s(N),s(V),s(R)])}const O=v(To,[["render",Co]]),Uo={name:"app",components:{HomeTwo:O}};function Do(p,r,f,g,t,m){const o=O;return c(),x(o)}const Mo=v(Uo,[["render",Do]]);export{Mo as default};
