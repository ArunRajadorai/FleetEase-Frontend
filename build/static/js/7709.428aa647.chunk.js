"use strict";(self.webpackChunkcar_dealer=self.webpackChunkcar_dealer||[]).push([[7709],{1523:(e,i,s)=>{s.d(i,{A:()=>r});var a=s(7565),l=s(7929);const t=e=>(0,l.jsx)("iframe",{title:"Google Map",className:e.className,src:e.location,width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"});t.defaultProps={location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.017231421863!2d-79.43780268425046!3d36.09306798010035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bae09664ccb%3A0xaa6b8f98d3fb8135!2s220+E+Front+St%2C+Burlington%2C+NC+27215%2C+USA!5e0!3m2!1sen!2sin!4v1475045272926"};const r=(0,a.memo)(t)},2781:(e,i,s)=>{s.d(i,{A:()=>t});s(7565);var a=s(477),l=s(7929);const t=function(e){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"pgs-list-wrapper",children:(0,l.jsx)("ul",{className:"pgs-list ".concat(e.className||""),children:e.data.map(((i,s)=>(0,l.jsxs)("li",{className:"d-flex",children:[(null===e||void 0===e?void 0:e.icon)&&(0,l.jsx)("i",{className:e.icon}),e.link?(0,l.jsxs)(a.N_,{to:i.url,children:[i.item,(0,l.jsx)("span",{children:i.number})]}):(0,l.jsx)("span",{children:i.item})]},s)))})})})}},5494:(e,i,s)=>{s.d(i,{A:()=>r});s(7565);var a=s(6600),l=s(6796),t=s(7929);const r=function(e){return(0,t.jsx)("div",{className:"tabs-main tabs-default",children:(0,t.jsxs)(l.A.Container,{id:"tabs-default",defaultActiveKey:"".concat(e.tabActive||0),children:[(0,t.jsx)(a.A,{className:"nav-tab flex-row ".concat(e.extraClass||""),children:e.tabsTitle.map(((e,i)=>(0,t.jsx)(a.A.Item,{children:(0,t.jsxs)(a.A.Link,{eventKey:i,children:[(null===e||void 0===e?void 0:e.icon)&&(0,t.jsx)("i",{className:e.icon}),e.title]})},i)))}),(0,t.jsx)(l.A.Content,{children:e.tabsContent.map(((e,i)=>(0,t.jsx)(l.A.Pane,{eventKey:i,children:e.content},i)))})]})})}},2326:(e,i,s)=>{s.d(i,{A:()=>d});s(7565);var a=s(5166),l=s(6636),t=s(3934),r=s(5540),n=(s(6187),s(7929));const c={Username:"",Email:"",Message:""};const d=function(e){const{values:i,errors:s,touched:d,handleBlur:o,handleChange:m,handleSubmit:u,isSubmitting:p}=(0,a.Wx)({initialValues:c,validationSchema:l.fy,onSubmit:(e,i)=>{console.log(e),i.resetForm()}});return console.log(s),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"enquiry-form ".concat(e.className||""),children:[(null===e||void 0===e?void 0:e.formtitle)&&(0,n.jsx)("h5",{className:"enquiry-form-title ".concat(e.formtitleclass||""),children:e.formtitle}),(null===e||void 0===e?void 0:e.formdescription)&&(0,n.jsx)("p",{children:e.formdescription}),(0,n.jsx)("form",{className:"pgs-form",onSubmit:u,children:(0,n.jsxs)(t.A,{className:"row-gap",children:[(0,n.jsx)(r.A,{lg:12,children:(0,n.jsxs)("div",{className:"input-control",children:[(0,n.jsx)("label",{children:"Name*"}),(0,n.jsx)("input",{type:"name",autoComplete:"off",name:"Username",id:"name",value:i.Username,onChange:m,onBlur:o,placeholder:"Name"}),s.Username&&d.Username?(0,n.jsx)("p",{className:"error",children:s.Username}):null]})}),(0,n.jsx)(r.A,{lg:12,children:(0,n.jsxs)("div",{className:"input-control",children:[(0,n.jsx)("label",{children:"Email address*"}),(0,n.jsx)("input",{type:"email",name:"Email",value:i.Email,onChange:m,onBlur:o,placeholder:"Email"}),s.Email&&d.Email?(0,n.jsx)("p",{className:"error",children:s.Email}):null]})}),(0,n.jsx)(r.A,{lg:12,children:(0,n.jsxs)("div",{className:"input-control",children:[(0,n.jsx)("label",{children:"Message*"}),(0,n.jsx)("textarea",{rows:5,name:"Message",value:i.Message,onChange:m,onBlur:o,placeholder:"Message"}),s.Message&&d.Message?(0,n.jsx)("p",{className:"error",children:s.Message}):null]})}),(0,n.jsx)(r.A,{lg:12,children:(0,n.jsx)("div",{className:"input-control",children:(0,n.jsx)("button",{className:"button red",disabled:p,type:"submit",children:"Submit"})})})]})})]})})}},1284:(e,i,s)=>{s.d(i,{A:()=>c});s(7565);var a=s(477),l=s(6597),t=s(3934);const r=s.p+"static/media/page-header-bg2.a447a36264aa8b7dcc72.webp";var n=s(7929);const c=function(e){return(0,n.jsxs)("div",{className:"page-header ".concat(e.bgImageHide?"bg-hide":""," theme-").concat(e.theme),style:e.bgImageHide?null:{backgroundImage:"url(".concat(e.PagaHeaderBg||r,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center",backgroundAttachment:"inherit"},children:[e.bgImageHide?null:(0,n.jsx)("div",{className:"page-header-overlay",style:e.overlay?{backgroundColor:e.overlay}:null}),(0,n.jsx)("div",{className:"page-header-wrapper",children:(0,n.jsx)(l.A,{children:(0,n.jsx)(t.A,{className:"d-flex justify-content-center",children:(0,n.jsx)("div",{className:e.colSize||"col-md-12",children:(0,n.jsxs)("div",{className:"page-header-inner",children:[(0,n.jsxs)("div",{className:"page-header-title",children:[(0,n.jsx)("h2",{className:"header-title",children:e.title}),(null===e||void 0===e?void 0:e.description)&&(0,n.jsx)("p",{children:e.description})]}),(null===e||void 0===e?void 0:e.breadCrumbItems)&&(0,n.jsx)("ul",{className:"page-breadcrumbs",children:e.breadCrumbItems.map(((e,i)=>e.active?(0,n.jsx)("li",{className:"breadcrumb-item active",children:e.label},i):(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(a.N_,{to:e.path,children:e.label})},i)))})]})})})})})]})}},9362:(e,i,s)=>{s.r(i),s.d(i,{default:()=>A});var a=s(7565),l=s(1030),t=s(477),r=s(6597),n=s(3934),c=s(5540),d=s(5e3),o=s(907),m=s(923),u=s(1284),p=(s(7850),s(2781)),h=s(3448),x=s(5494),j=s(1523),g=s(3281),b=s(152),v=s(9496),N=s(2072),w=s(2326),f=(s(3404),s(5428),s(3546),s(7929));const A=function(){let{id:e}=(0,l.g)();const i=N.Ay.find((i=>i.id===parseInt(e))),[s]=(0,a.useState)(g.A),[A]=(0,a.useState)(b.A),[q]=(0,a.useState)(v.A),[y,C]=(0,a.useState)(null),S=()=>{C(null)},[P,k]=(0,a.useState)(null);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"site-content",children:[(0,f.jsx)(u.A,{title:i.carName,breadCrumbItems:[{label:"Home",path:"/"},{label:"Pages",path:"#"},{label:"Car Details 02",path:"#",active:!0}]}),(0,f.jsx)("div",{className:"content-wrapper",children:(0,f.jsx)("section",{className:"car-details car-details-two section-ptb",children:(0,f.jsxs)(r.A,{children:[(0,f.jsxs)(n.A,{children:[(0,f.jsx)(c.A,{lg:8,md:7,children:(0,f.jsxs)("div",{className:"car-title",children:[(0,f.jsx)("h3",{children:i.carName}),(0,f.jsx)("p",{className:"car-description",children:i.description})]})}),(0,f.jsxs)(c.A,{lg:4,md:5,className:"text-lg-end",children:[(0,f.jsxs)("div",{className:"car-price",children:[(0,f.jsxs)("span",{className:"old-price",children:[(0,f.jsx)("i",{className:"fa-solid fa-dollar-sign"}),i.carPrice]}),(0,f.jsxs)("span",{className:"new-price",children:[(0,f.jsx)("i",{className:"fa-solid fa-dollar-sign"}),i.carNewPrice]})]}),(0,f.jsx)("span",{children:"Plus Taxes & Licensing"})]})]}),(0,f.jsx)(n.A,{children:(0,f.jsx)(c.A,{md:12,children:(0,f.jsxs)("div",{className:"details-nav",children:[(0,f.jsxs)("ul",{className:"list-unstyled",children:[i.leadForm&&i.leadForm.map(((e,i)=>(0,f.jsx)("li",{children:(0,f.jsxs)(t.N_,{onClick:()=>{return i=e.id,void C(i);var i},children:[(0,f.jsx)("i",{className:e.icon}),e.title]},e.id)},i))),(0,f.jsx)("li",{children:(0,f.jsxs)(t.N_,{to:"#",onClick:()=>window.print(),children:[(0,f.jsx)("i",{className:"fa-solid fa-print"}),"Print this page"]})})]}),i.leadForm&&i.leadForm.map(((e,i)=>(0,f.jsxs)(d.A,{size:e.size,className:"car-details-model",show:y===e.id,onHide:S,children:[(0,f.jsx)(d.A.Header,{closeButton:!0,children:(0,f.jsx)(d.A.Title,{children:e.title})}),(0,f.jsx)(d.A.Body,{children:e.form})]},i)))]})})}),(0,f.jsxs)(n.A,{children:[(0,f.jsx)(c.A,{lg:6,children:(0,f.jsx)("div",{className:"car-img-slider",children:i.gallery?(0,f.jsxs)("div",{className:"thumbnail-image-slider",children:[(0,f.jsx)(m.RC,{spaceBetween:0,slidesPerView:1,loop:!0,navigation:!0,modules:[o.Jq,o.U1,o.Vx,o.WO],thumbs:{swiper:P},children:i.gallery.map(((e,i)=>i<5?(0,f.jsx)(m.qr,{children:(0,f.jsx)("img",{className:"w-100",src:e.image,alt:""})},i):null))}),(0,f.jsx)(m.RC,{onSwiper:k,loop:!0,spaceBetween:0,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[o.U1,o.Vx,o.WO],className:"mySwiper",children:i.gallery.map(((e,i)=>i<5?(0,f.jsx)(m.qr,{children:(0,f.jsx)("img",{className:"w-100",src:e.image,alt:""})},i):null))})]}):(0,f.jsx)("img",{className:" w-100",src:i.imgSrc,alt:""})})}),(0,f.jsx)(c.A,{lg:6,children:(0,f.jsx)("div",{className:"car-details-sidebar",children:(0,f.jsxs)("div",{className:"details-block details-weight",children:[(0,f.jsx)("h5",{className:"weight-title",children:"Description"}),(0,f.jsx)("ul",{className:"car-details-list",children:i.attributes.map(((e,i)=>(0,f.jsxs)("li",{children:[(0,f.jsx)("i",{className:e.icon}),(0,f.jsx)("span",{children:e.title}),(0,f.jsx)("strong",{className:"text-end",children:e.specification})]},i)))})]})})})]}),(0,f.jsxs)(n.A,{children:[(0,f.jsxs)(c.A,{lg:8,md:12,children:[(0,f.jsx)("div",{className:"car-detail-tab",children:(0,f.jsx)(x.A,{extraClass:"",tabActive:"0",tabsTitle:[{id:1,title:"General Information"},{id:2,title:"Features & Options"},{id:3,title:"Vehicle Overview"}],tabsContent:[{id:31,content:s},{id:32,content:A},{id:33,content:q}]})}),(0,f.jsxs)("div",{className:"extra-feature",children:[(0,f.jsx)("h6",{children:"extra feature"}),(0,f.jsx)(p.A,{icon:"fas fa-check",data:N.pd})]})]}),(0,f.jsx)(c.A,{lg:4,md:12,children:(0,f.jsxs)("div",{className:"car-details-sidebar",children:[(0,f.jsxs)("div",{className:"details-form details-weight",children:[(0,f.jsx)("h5",{className:"weight-title",children:"Send Enquiry"}),(0,f.jsx)(w.A,{})]}),(0,f.jsxs)("div",{className:"details-location details-weight",children:[(0,f.jsx)("h5",{className:"weight-title",children:"Location"}),(0,f.jsx)("div",{className:"location-map",children:(0,f.jsx)(j.A,{})})]})]})})]}),(0,f.jsx)(n.A,{children:(0,f.jsx)(c.A,{lg:12,children:(0,f.jsxs)("div",{className:"feature-car",children:[(0,f.jsx)("h6",{children:"Recently Vehicle"}),(0,f.jsx)(m.RC,{modules:[o.Vx,o.Jq],navigation:!0,spaceBetween:30,slidesPerView:4,loop:!0,breakpoints:{0:{slidesPerView:1},400:{slidesPerView:1},570:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}},children:N.Ay.map(((e,i)=>(0,f.jsx)(m.qr,{children:(0,f.jsx)(h.Ay,{className:"bg-light",imgSrc:e.imgSrc,carName:e.carName,carPrice:e.carPrice,carNewPrice:e.carNewPrice,registrationDate:e.registrationDate,transmission:e.transmission,mileage:e.mileage,list:e.review,id:e.id,attri:e.attributes,lightboxImages:e.gallery},i)},i)))})]})})})]})})})]})})}},152:(e,i,s)=>{s.d(i,{A:()=>r});var a=s(7794),l=s(7929);const t=[{title:"Air conditioning",owner:"Mark"},{title:"Alloy Wheels",owner:"Jacob"},{title:"Anti-Lock Brakes (ABS)",owner:"Larry"},{title:"Anti-Theft",owner:"Larry"},{title:"Anti-Starter",owner:"Larry"},{title:"Alloy Wheels",owner:"Larry"}];const r=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"car-generalinfo",children:[(0,l.jsx)("h6",{children:"consectetur adipisicing elit"}),(0,l.jsx)(a.A,{responsive:!0,children:(0,l.jsx)("tbody",{children:t.map(((e,i)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"info-title",children:e.title}),(0,l.jsx)("td",{className:"info-owner",children:e.owner})]},i)))})})]})})}},3281:(e,i,s)=>{s.d(i,{A:()=>l});var a=s(7929);const l=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"car-generalinfo",children:[(0,a.jsx)("h6",{children:"consectetur adipisicing elit"}),(0,a.jsx)("p",{children:"Temporibus possimus quasi beatae, consectetur adipisicing elit. Obcaecati unde molestias sunt officiis aliquid sapiente, numquam, porro perspiciatis neque voluptatem sint hic quam eveniet ad adipisci laudantium corporis ipsam ea!"}),(0,a.jsx)("p",{children:"Consectetur adipisicing elit. Dicta, amet quia ad debitis fugiat voluptatem neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis atque saepe! veritatis."}),(0,a.jsx)("p",{children:"Adipisicing consectetur elit. Dicta, amet quia ad debitis fugiat voluptatem neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, doloribus, earum modi consectetur molestias asperiores."}),(0,a.jsx)("p",{children:"Voluptatem adipisicing elit. Dicta, amet quia ad debitis fugiat neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, You will begin to realize why, consectetur adipisicing elit. Laudantium nisi eaque maxime totam, iusto accusantium esse placeat rem at temporibus minus architecto ipsum eveniet. Delectus cum sunt, ea cumque quas! doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis atque saepe! veritatis."})]})})}},9496:(e,i,s)=>{s.d(i,{A:()=>l});var a=s(7929);const l=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"car-generalinfo",children:[(0,a.jsx)("h6",{children:"consectetur adipisicing elit"}),(0,a.jsx)("p",{children:"Temporibus possimus quasi beatae, consectetur adipisicing elit. Obcaecati unde molestias sunt officiis aliquid sapiente, numquam, porro perspiciatis neque voluptatem sint hic quam eveniet ad adipisci laudantium corporis ipsam ea!"}),(0,a.jsx)("p",{children:"Consectetur adipisicing elit. Dicta, amet quia ad debitis fugiat voluptatem neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis atque saepe! veritatis."}),(0,a.jsx)("p",{children:"Adipisicing consectetur elit. Dicta, amet quia ad debitis fugiat voluptatem neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, doloribus, earum modi consectetur molestias asperiores."}),(0,a.jsx)("p",{children:"Voluptatem adipisicing elit. Dicta, amet quia ad debitis fugiat neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, You will begin to realize why, consectetur adipisicing elit. Laudantium nisi eaque maxime totam, iusto accusantium esse placeat rem at temporibus minus architecto ipsum eveniet. Delectus cum sunt, ea cumque quas! doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis atque saepe! veritatis."})]})})}}}]);
//# sourceMappingURL=7709.428aa647.chunk.js.map