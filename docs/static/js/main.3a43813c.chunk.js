(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),s=a(10),i=a.n(s),c=a(2),r=a(3),o=a(5),j=a(4),d=(a(16),a.p+"static/media/tarjetas-molonas.faf66332.svg"),h=(a(17),a(0)),b=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("a",{href:"./index.html#body",className:"header__link",children:Object(h.jsx)("img",{className:this.props.logoClass,src:d,alt:"logo de awesome profile cards",title:"ir a p\xe1gina principal"})}),Object(h.jsx)("h1",{className:"header__title",children:"Awesome profile-cards"})]})}}]),a}(n.a.Component),p=(a(9),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("button",{className:"preview__reset js-btn-reset",children:[Object(h.jsx)("i",{className:"far fa-trash-alt"}),Object(h.jsx)("span",{children:"Reset"})]})}}]),a}(n.a.Component)),m=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("article",{className:"preview__card js-card palette01",children:[Object(h.jsxs)("div",{className:"card__name color--side",children:[Object(h.jsx)("h2",{className:"card__name--fullname js-fullnamePreview color--fullname",children:"Nombre Apellidos"}),Object(h.jsx)("p",{className:"card__name--ocupation js-positionPreview",children:"Front-end developer"})]}),Object(h.jsx)("div",{className:"js__profile-image card__photo"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"card__icons",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"",className:"js-phonePreview",children:Object(h.jsx)("i",{className:"card__icons--icon color--icon fas fa-mobile-alt"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"",className:"js-emailPreview",children:Object(h.jsx)("i",{className:"card__icons--icon color--icon far fa-envelope"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"",className:"js-linkedinPreview",target:"_blank",children:Object(h.jsx)("i",{className:"card__icons--icon color--icon fab fa-linkedin-in"})})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"",className:"js-githubPreview",target:"_blank",children:Object(h.jsx)("i",{className:"card__icons--icon color--icon fab fa-github-alt"})})})]})})]})}}]),a}(n.a.Component),u=(a(8),a(6)),O=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={isOpen:!1},l.handleClick=l.handleClick.bind(Object(u.a)(l)),l}return Object(r.a)(a,[{key:"handleClick",value:function(){console.log("holi"),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.isOpen?"collapsable--on":"";return Object(h.jsxs)("fieldset",{className:this.props.fieldsetClass+" collapsable "+e,children:[Object(h.jsxs)("legend",{className:"legend "+this.props.jsLegend,title:"click aqu\xed para abrir/cerrar",onClick:this.handleClick,children:[Object(h.jsx)("i",{className:"legend__icon--main "+this.props.faClass}),Object(h.jsx)("h3",{className:"legend__title",children:this.props.title}),Object(h.jsx)("i",{className:"legend__icon--arrow collapsable--close fas fa-angle-down"})]}),this.props.children]})}}]),a}(n.a.Component),f=(a(19),function(){return Object(h.jsx)("div",{className:"collapsable--hide",children:Object(h.jsxs)("div",{className:"design__radio",children:[Object(h.jsx)("h3",{className:"design__radio--title",children:"Colores"}),Object(h.jsx)("input",{name:"palette",className:"design__radio--input js-palette",type:"radio",id:"paletteOne",value:"01",defaultChecked:!0}),Object(h.jsx)("label",{className:"design__radio--label label__palette label__palette--One",htmlFor:"paletteOne",children:"Palette One"}),Object(h.jsx)("input",{name:"palette",className:"design__radio--input js-palette",type:"radio",id:"paletteTwo",value:"02"}),Object(h.jsx)("label",{className:"design__radio--label label__palette label__palette--Two",htmlFor:"paletteTwo",children:"Palette Two"}),Object(h.jsx)("input",{name:"palette",className:"design__radio--input js-palette",type:"radio",id:"paletteThree",value:"03"}),Object(h.jsx)("label",{className:"design__radio--label label__palette label__palette--Three",htmlFor:"paletteThree",children:"Palette Three"})]})})}),x=a(11),g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).handleInput=l.handleInput.bind(Object(u.a)(l)),l}return Object(r.a)(a,[{key:"handleInput",value:function(e){this.props.handler(e)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"field",children:[Object(h.jsxs)("label",{className:"field__label",htmlFor:this.props.forId,children:[this.props.text,Object(h.jsxs)("span",{children:[" ",this.props.asterisk]})]}),Object(h.jsx)("input",{className:"field__input js-fullname js-input-text",placeholder:this.props.placeText,id:this.props.forId,type:this.props.type,name:this.props.name,onChange:this.handleInput,value:this.props.value})]})}}]),a}(n.a.Component);g.defaultProps={asterisk:"*",type:"text",required:!0};var N=g,v=function(){return Object(h.jsxs)("div",{className:"field",children:[Object(h.jsxs)("label",{className:"field__label",htmlFor:"profile-image",children:["Imagen de perfil",Object(h.jsx)("span",{children:" *"})]}),Object(h.jsxs)("div",{className:"rellena-image",children:[Object(h.jsx)("input",{type:"file",className:"js__profile-upload-btn rellena-image__hidden"}),Object(h.jsx)("input",{className:"rellena-image__add js__profile-trigger",id:"profile-image",type:"button",value:"A\xf1adir imagen",name:"photo",title:"sube aqu\xed tu foto, preferentemente cuadrada y bonita"}),Object(h.jsx)("div",{className:"rellena-image__square js__profile-preview"})]})]})},I=(a(20),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={name:"",job:"",email:"",phone:"",linkedin:"",github:""},l.handleInputChange=l.handleInputChange.bind(Object(u.a)(l)),l}return Object(r.a)(a,[{key:"handleInputChange",value:function(e){console.log(e.target.value),console.log(e.target.name);var t=e.target.value,a=e.target.name;this.setState(Object(x.a)({},a,t))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"collapsable--hide",children:[Object(h.jsx)(N,{forId:"completeName",text:"Nombre completo",placeText:"Ej: Sally Jill",name:"name",handler:this.handleInputChange,value:this.state.name}),Object(h.jsx)(N,{forId:"position",text:"Puesto",placeText:"Ej: Front-end unicorn",name:"job",handler:this.handleInputChange,value:this.state.job}),Object(h.jsx)(v,{}),Object(h.jsx)(N,{forId:"emailAddress",text:"Email",placeText:"Ej: sally.hill@gmail.com",type:"email",name:"email",handler:this.handleInputChange,value:this.state.email}),Object(h.jsx)(N,{forId:"telephone",text:"Tel\xe9fono",placeText:"Ej: 555-55-55-55",type:"tel",name:"phone",asterisk:"",required:!1,handler:this.handleInputChange,value:this.state.phone}),Object(h.jsx)(N,{forId:"linkedin",text:"Linkedin",placeText:"Ej: linkedin.com/in/sally-hill",name:"linkedin",handler:this.handleInputChange,value:this.state.linkedin}),Object(h.jsx)(N,{forId:"github",text:"Github",placeText:"Ej: @sally-hill",name:"github",handler:this.handleInputChange,value:this.state.github})]})}}]),a}(n.a.Component)),C=(n.a.Component,a(21),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"collapsable--hide",children:[Object(h.jsx)("div",{className:"comparte__nav",children:Object(h.jsxs)("button",{type:"button",className:"comparte__nav--button comparte__nav--buttongrey js-create-btn",title:"comprueba tus datos antes de pulsar",children:[Object(h.jsx)("i",{className:"far fa-address-card"}),"crear tarjeta"]})}),Object(h.jsxs)("div",{className:"comparte__nav2 js-hidden-div comparte__nav2--hidden",children:[Object(h.jsx)("h3",{className:"comparte__nav2--text",children:"La tarjeta ha sido creada:"}),Object(h.jsx)("a",{className:"comparte__nav2--link js-card-result",href:"",target:"_blank",title:"ir a tarjeta"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("a",{className:"comparte__nav2--link2 twitter-share-button js-twitter",href:"",target:"_blank",children:[Object(h.jsx)("i",{className:"fab fa-twitter"}),Object(h.jsx)("span",{className:"comparte__nav2--span",children:"compartir en twitter"})]})})]})]})}}]),a}(n.a.Component)),_=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("form",{action:"",className:"main__form--generate",method:"POST",children:[Object(h.jsx)(O,{fieldsetClass:"design",title:"Dise\xf1a",faClass:"far fa-object-ungroup",children:Object(h.jsx)(f,{})}),Object(h.jsx)(O,{fieldsetClass:"rellena",title:"Rellena",faClass:"far fa-keyboard",children:Object(h.jsx)(I,{})}),Object(h.jsx)(O,{fieldsetClass:"comparte",title:"Comparte",faClass:"fas fa-share-alt",children:Object(h.jsx)(C,{})})]})}}]),a}(n.a.Component),A=(a(22),function(){return Object(h.jsxs)("footer",{className:"footer",children:[Object(h.jsx)("small",{className:"footer__small",children:"Awesome profile-cards @2021"}),Object(h.jsx)("a",{className:"footer__link",href:"https://adalab.es/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAABQCAYAAAAEEqmpAAAABGdBTUEAALGPC/xhBQAADQlJREFUeAHtXUtsY1cZPsdx4ggJyWWBhIRUR0iUFXjYUolElVqyYqrOMGkokkeobFjMRBULVok3CITKZCRY0SquhKYzzIwmLNCMZhNXwIYNhg1qhRqzQKJigVF52Intw/9f+0+uj8+5D9+nnf9K0bnn/Z/vnO9+53GvIwRfjEAMCFSPj8r4F0NRF7KIwoVsNTc6fgS6xao4WT6uvv+bvfgLX/wSmYiL38dpthAUUe5W3//tcfWD39XSrHje62IiznsP5tP+ilDqgAkZvHOYiMGx4pThEWBCBsSMiRgQKE4WCQEmpA98TEQfgDg6VgSYkBY4mYgWYDg4UQSYkBq8TEQNEPamigATcgw3EzHVcceVWRC48IRkIlpGBgdngsCFJSQTMZPxxpX6IHDhCMlE9BkRHJ0pAheGkEzETMcZVx4QgYUnJBMx4EjgZLlAYGEJyUTMxfhiI0IisHCEZCKGHAGcPFcILAwhmYi5GldszIwIzD0hmYgz9jxnyyUCc0tIJmIuxxMbFRGBuSMkEzFij3P2MQKr/ZYQqg6+To4wmRtCyhyBxqYsAALOD0idFG/CT2bcgObAT2fk6moLKeutz3+lkSurwBgmYt56ZEHsYUKG60gmYji8OHVIBJiQwQBjIgbDiVNFRIAJ6Q0gE9EbH46NGQEmpBlQJqIZFw5NGAEm5CTATMRJPNiXMgJMyBHgmRNxa2urcvfu3XaU/r+y9dp6kPwP7v6iGSRd2DSXL9fKh4eNSOdniENfFCt63UnZrNcTtR8Qg+Jqv6qXa/IXRb+t9/lFJ2SmRMTOWyqd/GHQW7kUZSBfubatTB1uCWvBoc2vimLY0AeDJb1v8CvXtg8KUrx3/+6dhm9iS4IrW9t7QoldPfrBvTuJ95HzIFOD3Qf33t3Q6w/qH5UxPAqaHtK1lFL1h79899CdxyFkb7kGfYTnkBV3XA7uEzuHzPTNmuLqyU0YZRV0UwS5igO+rwrHV669egsfBlHqRiWBNtSGBhJFKTfVvEBCOFJeDzqziMm2qpTyET7E3OW11jY6rS88v9967vk1OHy/DnFtd3zG94m9qZMZER0CKOepB29GiRtRCTFbB8mbqMhXr24HmlKZ6jhVBUfF8IFydWu7ZkqT57AR+eS6Y6NDyHStxYeYMxswVItvwOSVkKrbPfjcw7ePK2+/WTOYHjooMyKOVZDUCNYXqariGVBIIFUQR7OQkdSQCptLVZwgX+qqOILO50GcJ0KqXk/8+4MPRef3LdH/Z6eilDh49q03IxMyEyJOqCGNYp/OoGQJuWUkY1hVJjUkm+ZNFSfUkBoxQUwKTNwtF0unNb9asiSkm4CnH/1DNzUyITMhoqaG1Kh4VVGKOm504F+/t/KMkIUNmAPvQ2UdqlBzYTD0HmlhVq+uhpRwrlTRSLq4VVHuONgj/vAnpbhOWLldJdSX3H6v+zQJ6UNA3cwzQn7t4Gc1PdLLnzoRjWpIFiakirgji8cAsCu4A6RcA+U6pCon3eCDUFdDKmdeVNGohtQII0EpMqQrZcvBHvGHP9xZVoYNGClUJWTJIklChiSgbnrlz4PuwQuNnx5Xfv7jdT3S5C+aApMMc9RQWT+PIVXcS8qG8THJy7hbB6SpTdUzGoTNqXBXAKphXxnyjtOMVbHhypK/W6edgIDxGj2QYjnDVMNbsDvtmoXIMlRZmapWyvemwgIGICEhacP5L8VK4eZZBf5mupCA//nr34Rh+hm6vL/0exWYBRw9+9ZPmlIN6u3Xv9e0FZKqInqqIVmYkCpS8eTC2eWO6cmM2/hINEpncm1qSGlheOd6B9VTDakR8aliFTE9/xPgn77UULWmQ8OFRFHIiAroY6haVyNCHtkUMlUiWtaGeiNIFfXwWP2ojHAIXzcVejqUxsGCaW1rQ72cXK8VA5Es+DRdb/ss/sFJqTlLPlOeMIRMloC6dXZCpkbEQGpIdqekiqfdlUOq0u3Kgp2IfmpI5eRVFV/5xquXR+pElnq4gQjrkT9EVLF0chQieaCkXoRMl4C6udOETI2IAdWQLE5NFanCIK6HGnZM+XOpilLeMtlqDktVFau2g32zbcFD3YRU/+u26RwwjnVgcCtMKc8JmQoRvdTQtp2Nb9v4rdVMTUsyzKqGUtyGo5GmXnfeVBHf/EGbdDtxrWzvB3z9LdLVGmGD+DgYgd9yJTgTevz4ceWHH3781R/9fVD5zmlJVJaWLUakHgzYq3dSIaJdDRVtZzcMzS9bB74h8SxBzgMiYEYvNex3V/aFXKqbisqTKtpswbWy7VgBp7GjzR1T6wKEycIOvkx+/nfnUlEO1yCniZDl5dWTywFKDZwECfjkyZMDKQvH0JYaZvziJ8ri+595Tnz3U5/NkpAdqUT9mRe+fKn97TcaiRPRSw1p8C7LoXEQSzheSFIVbZ1u2sGzPhRADemcMs+q6KWG9NWIbfNKxLxWxK9egIwvm9gEX2QEPtg35acwEwEpjtyMCOkQUC4V1tqvv7GHL7mjPYkT0UsN6ZwKOwamRw0CyO1aCeBONMM9PiBsCrFcmNxK91VDqj/Hqmhrq5t8iaki4eNyx5+gmVSx6koW+jYIAfVCUyLkBAHb13ccApItiRIxiBqSIWmrInx1cQsUt0L1n7uqqX+naH0YjNWQ8o4eLPlbKwZRQ2qDFBLWu4YrZlUc11DRa4L6JwaoHm/zz0JAvayECOlJQLIhUSLa1BDVj9SQDElLFfHhcPXa9iOc9lLdE66mavhVhiVtx1kbTmQGj5afom2KRPFJura63WpI9fd7yw24N5Ah4lqRKhi740/GylqwUFL8UQ/z8sdBQL38mAgZiIBUd2KvuI3U8OQGVeR2beqH4fDBbs2dFu+RCDA9rOtKpafz8jsbDmrwdSFOavAgmBoAo7zKeR/SXY4qKNjuBwv0S1NDisYHDLzS1YQ86xSGLpTgvG1D6zF3nNd9kC19KLttKxcHPHyqU9HrAAzaDwy/KIDrXajzNuxa7+p5xmvF5lR4iACc5vdFAW2aLh/KMa3PTcUjAeHDYihD1kzxcYQhIfHvT//tiF//6yPRHpwGKRYJeFsUC/v69NMrc2JEdNTQ8E4pDADrT1Qg0eAd0AYMrJpu9Hh6eF0Pt/qho+EnNM47Ww0hKZRsvzpFqSbKH5F3uG7IYlZDSoiqqKbzjZWpQckCuZYB684LXy40wd9wh9E91mlqtUkNKQ8qPRyw40NUe2CNVFGfzVA+o6uGR9APZ1Hwjq71gqi2/tMZeuI0CKjXGZCQMxGQ6kpkauq1NrSpIRlki4fBlOQOakcOxcaU4trWRRY1pDbkZa0YZm1ItqPrvBgPbXSHnd3bMDlLEOFGqR1b7iSmoLa6bOGWKWuoKait7ESI6LU2nBrsmmUYj6qpBTte66aJKXHwMIeE9+/fabmzeLwY7a2GVEgO1oph1oZkNrnj9W+H/OduvGtFKhf73KSGeSAg2UjumJCdb37y03U6hggzDaVy3G7sRIyihmRYWqqInY/fJ+okdOywPfl91JDakLUqzqqGZH+6qqj2H967M7EsyCMBx9h0YH1bL5VW1n5w7Vt7UQlIeMdOxChqSEYlqYq4DoEtgX18uwM73xlwVPHYjayGVF6GqhhFDcn8pFURlhuH+NU+frBNdT59+rSqvwlDcRm7ZwTc3Hxpb2NjdBAfl02xb9bIgThUS4WmbuCgW5yY+unxuh+/F4QfrH1HD4fOm76gM6cDp0NMP2w7nUoITNeXxaky5WDYMRHXVAaGOTuoW69NlwNxOHNwl4W/swp1NjFf2AvtcufBsqXsX3eH0f192NWlez8X7YPjmw3oz7KeFjFyh/Whf6G/ptrqTuO+x/Tu9oMCrku5tDscqnWfTTV3MWncIwFvr66u7MdNPrfx0u3he0YgbQSIgDBLWU+7bp/6UiEg2cBEJCTYTRUBJuAk3EzESTzYlzACOSYgtFw1SqXSTpJTUBu8TEQbMhweKwJAQHgTZukgh1NQaKdq4P/h2NzcbMfa6BCFMRFDgMVJwyMwImCyr6KFt4pyZE9AsoSJSEiwGysCTMBwcDIRw+HFqX0QYAL6AGSJZiJagOHgcAgcHR2Ve70efqlSC5czjdT5mYLaWhv7gb6tIg5fbAS63S78v8NCLV+tzD8BCS8mIiHB7gIhMD8EJNCZiIQEuwuAwPwRkEBnIhIS7M4xAvNLQAKdiUhIsDuHCMw/AQl0JiIhwe4cIbA4BCTQmYiEBLtzgMDiEZBAZyISEuzmGIHFJSCBzkQkJNjNIQKyWSiInRdffCnUR+U5bIivSUxEX4g4QfoIyKaCf3UNX0M00687mxqZiNngzrUaEbh4BCQYmIiEBLsZInBxCUigMxEJCXYzQIAJSKAzEQkJdlNEgAmog81E1BFhf4IIMAFt4DIRbchweIwIMAH9wGQi+iHE8REQYAIGBY+JGBQpThcCASZgCLCcpP8HY6u482HbREEAAAAASUVORK5CYII=",alt:"Logo de Adalab",title:"Ir a Adalab",className:"footer__link--logo"})})]})}),k=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"form centralColumn",children:[Object(h.jsx)(b,{logoClass:"header__generator--img"}),Object(h.jsxs)("main",{className:"main__form",children:[Object(h.jsxs)("section",{className:"preview",children:[Object(h.jsx)(p,{}),Object(h.jsx)(m,{})]}),Object(h.jsx)("section",{children:Object(h.jsx)(_,{})})]}),Object(h.jsx)(A,{})]})}}]),a}(n.a.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),l(e),n(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),w()}],[[23,1,2]]]);
//# sourceMappingURL=main.3a43813c.chunk.js.map