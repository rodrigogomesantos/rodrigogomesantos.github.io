(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0072":function(e,t,i){},"018e":function(e,t,i){"use strict";var n=i("e45f"),a=i.n(n);a.a},"04a9":function(e,t,i){e.exports=i.p+"img/bomDesign.cf76c66b.jpg"},"0804":function(e,t,i){},1771:function(e,t,i){var n={"./MapNo.png":"2c9c","./bomDesign.jpg":"04a9","./driftMon.jpg":"f997","./driftUtf.jpg":"3f21","./favicon.svg":"df0b","./juno.png":"4553","./logo.png":"cf05","./map.png":"8b55","./perfil.png":"42c4","./scss/_variables.scss":"fb51","./scss/learnMore.scss":"0804","./scss/main.scss":"c1c3","./scss/timeline.scss":"eae4"};function a(e){var t=o(e);return i(t)}function o(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="1771"},"2c9c":function(e,t,i){e.exports=i.p+"img/MapNo.3a1722e9.png"},"3f21":function(e,t,i){e.exports=i.p+"img/driftUtf.f32307c4.jpg"},"400e":function(e,t,i){},"408d":function(e,t,i){"use strict";var n=i("ea3f"),a=i.n(n);a.a},"421d":function(e,t,i){},"42c4":function(e,t,i){e.exports=i.p+"img/perfil.399601da.png"},4553:function(e,t,i){e.exports=i.p+"img/juno.bd44b27d.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Nav"),i("div",{staticClass:"container"},[i("Introduction"),i("Phrase"),i("Recognition"),i("Experience"),i("Skills"),i("Education")],1),i("Contact")],1)},o=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{attrs:{id:"education"}},[i("h1",[e._v(e._s(e.chooseLanguage(e.titles)))]),i("ul",{staticClass:"timeline"},e._l(e.chooseLanguage(e.educations),(function(t,n){return i("li",{key:n},[i("div",{staticClass:"initial",class:e.chooseSide(n)},[i("h5",{staticClass:"time"},[e._v(e._s(t.date))]),i("h3",[e._v(e._s(t.title))]),i("p",{staticClass:"desc"},[i("span",[e._v(e._s(t.subtitle))]),i("br"),i("br"),e._v(" "+e._s(t.text)+" ")])])])})),0)])},r=[],c={methods:{chooseLanguage:function(e){return e[navigator.language.substring(0,2)]||e.en}}},l={mixins:[c],data:function(){return{titles:{pt:"Educação formal",en:"Formal Education"},educations:{pt:[{date:"mar. de 2014 - out. de 2019",title:"Bacharelado",subtitle:"Design, Universidade Tecnológica Federal do Paraná, Curitiba, BR",text:"Foi fora da sala de aula que realmente eu entendi a lógica do desgin. Participando de várias organizações como; Centro Acadêmico, Semana Acadêmica, SAE Baja e co-criação do Abrigo Haker Space."},{date:"jan. de 2011 - jun. de 2012",title:"Técnico",subtitle:"Web Design, Etec Guaracy Silveira, São Paulo, BR",text:"Foi onde eu descobri a minha paixão por design, aprendendo um pouco de programação e o que hoje conheço como UX/UI."}],en:[{date:"mar. de 2014 - oct. de 2019",title:"Bachelor",subtitle:"Design, Federal Technological University of Paraná, Curitiba, BR",text:"It was outside the classroom that I really understood the logic of design. Participating in various organizations like; Academic Center, Academic Week, SAE Baja and co-creation of Abrigo Haker Space. "},{date:"jan. de 2011 - jun. de 2012",title:"Technician",subtitle:"Web Design, Etec Guaracy Silveira, São Paulo, BR",text:"This is where I discovered my passion for design, learning a little about programming and what I now know as UX/UI."}]}}},methods:{chooseSide:function(e){var t=e%2==0?"direction-r":"direction-l";return t}}},u=l,d=(i("018e"),i("2877")),p=Object(d["a"])(u,s,r,!1,null,null,null),g=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"recognition"}},[n("h1",[e._v(e._s(e.chooseLanguage(e.title)))]),n("div",{staticClass:"rec_container"},e._l(e.chooseLanguage(e.recognitions),(function(t,a){return n("div",{key:a,staticClass:"rec_card"},[n("img",{attrs:{src:i("1771")("./"+t.image)}}),n("h4",[e._v(e._s(t.title))]),n("a",{attrs:{href:t.projectLink,target:"_blank"}},[e._v(e._s(t.project)+" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.projectLink,expression:"recognition.projectLink"}],staticClass:"fas fa-link"})]),n("br"),n("i",[e._v(e._s(t.placement))])])})),0)])},m=[],f={mixins:[c],data:function(){return{title:{pt:"Reconhecimentos",en:"Recognition"},recognitions:{pt:[{image:"driftUtf.jpg",imageAlt:"o Shi Drift Trike ao centro da imagem em uma exposição na universidade UTFPR",title:"2016 - UTFPR Faz Design",project:"Shi Drift Trike",projectLink:"https://www.behance.net/gallery/45138823/Shi-Drift-Trike",placement:"Menção Honrosa"},{image:"driftMon.jpg",imageAlt:"o Shi Drift Trike ao centro da imagem em uma exposição no Museu Oscar Nyemaier",title:"2016 - Prêmio Internacional de Design Objeto: Brasil",project:"Shi Drift Trike",projectLink:"https://www.behance.net/gallery/45138823/Shi-Drift-Trike",placement:"Bronze"},{image:"bomDesign.jpg",imageAlt:"Eu e minha equipe segurando o trofeu e recebemdo o premio em um pauco",title:"2019 - Prêmio Bom Design",project:"Retrofit torno CNC",projectLink:!1,placement:"Menção Honrosa"}],en:[{image:"driftUtf.jpg",imageAlt:"the Shi Drift Trike in the center of the image at an exhibition at UTFPR University",title:"2016 - UTFPR Makes Design",project:"Shi Drift Trike",projectLink:"https://www.behance.net/gallery/45138823/Shi-Drift-Trike",placement:"Honorable Mention"},{image:"driftMon.jpg",imageAlt:"the Shi Drift Trike in the center of the image in an exhibition at the Oscar Nyemaier Museum",title:"2016 - International Design Award Object: Brazil",project:"Shi Drift Trike",projectLink:"https://www.behance.net/gallery/45138823/Shi-Drift-Trike",placement:"Bronze"},{image:"bomDesign.jpg",imageAlt:"Me and my team holding the trophy and receiving the prize in a pauco",title:"2019 - Bom Design Award",project:"Retrofit CNC lathe",projectLink:!1,placement:"Honorable Mention"}]}}},methods:{}},b=f,v=(i("f733"),Object(d["a"])(b,h,m,!1,null,null,null)),y=v.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{attrs:{id:"experience"}},[i("h1",[e._v(e._s(e.chooseLanguage(e.titles)))]),i("ul",{staticClass:"timeline"},e._l(e.chooseLanguage(e.experiences),(function(t,n){return i("li",{key:n},[i("div",{staticClass:"initial",class:e.chooseSide(n)},[i("h5",{staticClass:"time"},[e._v(e._s(t.date))]),i("h3",[e._v(e._s(t.title))]),i("p",{staticClass:"desc"},[e._v(" "+e._s(t.subtitle)+" "),i("br"),i("br"),i("span",{domProps:{innerHTML:e._s(t.text)}})])])])})),0)])},k=[],_={name:"Experiences",mixins:[c],data:function(){return{titles:{pt:"Experiências",en:"Expiriences"},experiences:{pt:[{date:"nov. de 2018 - agora",title:"Designer de Produto",subtitle:"Orakolo Técnologia - Curitiba, PR",text:"Realização de beta testes, pesquisar tendências em tecnologia até o desenvolvimento de novos produtos. Sejam eles usando sheetmetal, injeção plástica... Partindo da ideia, desenvolvimento de mockups, protótipos ou réplicas."},{date:"mar. de 2018 - out. de 2018",title:"Estágio em Design",subtitle:"Schattdecor - São José dos Pinhais, PR",text:"Uma super experiência em uma empresa multinacional que é líder global em seu seguimento, me fez entender um pouco mais sobre tendências, tendo como desafio projetar para o futuro, desenvolvendo mobiliário e peças gráficas."},{date:"mai. de 2017 - jan. de 2018",title:"Gestor de Estrutura",subtitle:"Comissão Organizadora do N Design 2017, CONDe - Curitiba, PR",text:'Trabalhar na organização  de um evento que dura uma semana para 1200 pessoas, foi sem duvidas, incrível. <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ZNvER9v1dpSasDKHDf1PZulWuUBmgB6XqkDqN31oD3I/edit#gid=1048042397">Saiba mais<a/> '},{date:"out. de 2016 - agora",title:"Freelancer",subtitle:"Rapazes de Aluguel e outros - Curitiba, PR",text:"Fazer freela sempre foi um jeito de juntar um dinheiro extra, mas como conseguencia ganhei um apredizado encrivel, desde a parte do busines até a parte técnica.  Trabalhando como “Marido de Aluguel”, automação de um estande de tiro, construção de site, designer gráfico."},{date:"mar. de 2015 - out. de 2016",title:"Estágio em Design",subtitle:"Departamento de Extensão da UTFPR - Curitiba, PR",text:"Tive a oportunidade de trabalhar com uma ex-empresária e atual professora, me ensinou muito sobre design! Trabalhando em peças gráficas, produtos, construção de sites e edição de vídeo."}],en:[{date:"Nov 2018 - now",title:"Product Designer",subtitle:"Orakolo Técnica - Curitiba, PR",text:"Conducting beta tests, researching trends in technology until the development of new products. Whether using sheetmetal, plastic injection ... Based on the idea, development of mockups, prototypes or replicas."},{date:"Mar. 2018 - Oct. 2018",title:"Design Internship",subtitle:"Schattdecor - São José dos Pinhais, PR",text:"A super experience in a multinational company that is a global leader in its segment, made me understand a little more about trends, having the challenge to design for the future, developing furniture and graphic pieces."},{date:"May 2017 - Jan 2018",title:"Structure Manager",subtitle:"N Design 2017 Organizing Committee, CONDe - Curitiba, PR",text:'Working on organizing an event that lasts a week for 1200 people, was without a doubt, incredible. <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ZNvER9v1dpSasDKHDf1PZulWuUBmgB6XqkDqN31oD3I/edit#gid=1048042397"> Learn more <a/> '},{date:"Oct. 2016 - now",title:"Freelancer",subtitle:"Rental Guys and Others - Curitiba, PR",text:"Making freela has always been a way to save some extra money, but as a result I gained a profound learning experience, from the busines part to the technical part. Working as a Husband for Rent, automation of a shooting range, website construction, graphic designer."},{date:"Mar. 2015 - Oct. 2016",title:"Design Internship",subtitle:"UTFPR Extension Department - Curitiba, PR",text:"I had the opportunity to work with a former businesswoman and current teacher, she taught me a lot about design! Working on graphic pieces, products, website building and video editing."}]}}},methods:{chooseSide:function(e){var t=e%2==0?"direction-r":"direction-l";return t}}},S=_,j=(i("408d"),Object(d["a"])(S,x,k,!1,null,null,null)),w=j.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{attrs:{id:"skills"}},[i("h1",[e._v(e._s(e.chooseLanguage(e.titles)))]),i("div",{staticClass:"skills"},[i("ul",{staticClass:"skills-buttons"},e._l(e.chooseLanguage(e.skills),(function(t,n){return i("li",{key:n,on:{mouseover:function(i){return e.populateHighlightedItens(t)},mouseleave:function(t){e.highlightedItens=[]}}},[e._v(e._s(n))])})),0),i("ul",{staticClass:"skills-itens"},e._l(e.skillsItens,(function(t,n){return i("li",{key:n,class:{"skills-itens-highlight":e.validateHighlight(t)}},[e._v(e._s(t))])})),0)])])},D=[],P=(i("99af"),i("7db0"),i("4160"),i("caad"),i("b64b"),i("2532"),i("159b"),{mixins:[c],data:function(){return{titles:{pt:"Habilidades",en:"Skills"},skills:{pt:{"UI/UX":["Figma","Photoshop","Illustrator","CSS/SCSS","HTML"],Maker:["Impressora 3D","CAD/CAM","Marcenaria","Eltrônica","Eletrica","Serralheria","CNC","Arduino","IOT","Hidráulica"],Produto:["Fusion 360","Inventor","Autocad","Injeção Plastica","Sheet Metal","Keyshot","Prototipagem Rápida","Materiais"],"Gráfico":["Photoshop","Illustrator","After Effects","InDesign","Premiere","Figma"],Coding:["CSS/SCSS","HTML","JavaScript","VueJS","Python"]},en:{"UI/UX":["Figma","Photoshop","Illustrator","CSS / SCSS","HTML"],Maker:["3D Printer","CAD / CAM","Woodwork","Electronics","Electric","Metalwork","CNC","Arduino","IOT"],"Industrial Design":["Fusion 360","Inventor","Autocad","Plastic injection","Sheet metal","Keyshot","Rapid Prototyping","Materials"],Graph:["Photoshop","Illustrator","After Effects","InDesign","Premiere","Figma"],Coding:["CSS / SCSS","HTML","JavaScript","VueJS","Python"]}},skillsItens:[],highlightedItens:[]}},created:function(){var e=this,t=this.chooseLanguage(this.skills);Object.keys(t).forEach((function(i){t[i].forEach((function(t){e.skillsItens.includes(t)||e.skillsItens.push(t),e.shuffle(e.skillsItens)}))}))},methods:{populateHighlightedItens:function(e){this.highlightedItens=this.highlightedItens.concat(e)},validateHighlight:function(e){return console.log(!!this.highlightedItens.find((function(t){return t==e}))),!!this.highlightedItens.find((function(t){return t==e}))},chooseSide:function(e){var t=e%2==0?"direction-r":"direction-l";return t},shuffle:function(e){e.sort((function(){return Math.random()-.5}))}}}),I=P,T=(i("f736"),Object(d["a"])(I,C,D,!1,null,null,null)),O=T.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scrollactive",{staticClass:"nav scrollactive",attrs:{offset:30,"active-class":"active"}},[i("ul",{staticClass:"nav-list button"},[i("li",[i("a",{staticClass:"scrollactive-item",attrs:{href:"#intro"}},[i("i",{staticClass:"fas fa-arrow-circle-up"})])]),e._l(e.chooseLanguage(e.nav),(function(t,n){return i("li",{key:n},[i("a",{staticClass:"scrollactive-item",attrs:{href:t.link}},[i("span"),i("p",[e._v(e._s(t.title))])])])})),i("li",{staticClass:"portifolio"},[i("a",{attrs:{href:"https://www.behance.net/rodrigomes",target:"_black"}},[e._v(e._s(e.chooseLanguage(e.portifolio)))])])],2)])},M=[],R={name:"Nav",mixins:[c],data:function(){return{portifolio:{pt:"Portifólio",en:"Portifolio"},nav:{pt:[{title:"Reconhecimentos",link:"#recognition "},{title:"Experiências",link:"#experience"},{title:"Habilidades",link:"#skills"},{title:"Educação formal",link:"#education"}],en:[{title:"Recognition",link:"#recognition "},{title:"Experience",link:"#experience"},{title:"Skills",link:"#skills"},{title:"Formal Education",link:"#education"}]}}},methods:{}},A=R,L=(i("d79f"),Object(d["a"])(A,E,M,!1,null,null,null)),U=L.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"intro"}},[n("div",{staticClass:"intro"},[n("h2",[n("span",{staticClass:"typed-text"},[e._v(e._s(e.typeValue))]),n("span",{staticClass:"cursor",class:{typing:e.typeStatus}})]),n("p",{domProps:{innerHTML:e._s(String(e.chooseLanguage(e.text)))}}),e._m(0),n("img",{attrs:{src:i("1771")("./"+e.image),alt:e.imageAlt}})])])},F=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:"https://www.behance.net/gallery/95331407/Juno-Radio-Finalista-do-NASA-Space-Apps-Challenge",target:"_blank"}},[i("div",{staticClass:"info-button button"},[i("p",[i("span",[e._v("Saiba")]),e._v(" + ")]),i("p"),i("div",{staticClass:"info-button-inner"})])])}],H=i("5118"),B={mixins:[c],data:function(){return{title:{pt:["Designer Gráfico","Designer de Produto","UX & UI Designer","Maker"],en:["Graphic Designer","Product Designer","Maker","Electrician","Plumber","Bricklayer","Carpenter","Plumber","Programmer"]},text:{pt:["Olá, meu nome é <b>Rodrigo Gomes</b>! Movido por desafios, estou o tempo todo envolvido em projetos multidisciplinares do produto digital ao fisico"],en:["Hello, my name is <b> Rodrigo Gomes </b>! Driven by challenges, I am constantly involved in multidisciplinary projects from digital to physical products "]},image:"juno.png",imageAlt:"Radio Juno em perspectiva",typeValue:"",typeStatus:!1,typingSpeed:200,erasingSpeed:100,newTextDelay:2e3,typeArrayIndex:0,charIndex:0}},methods:{typeText:function(){var e=this.chooseLanguage(this.title);this.charIndex<e[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=e[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,Object(H["setTimeout"])(this.typeText,this.typingSpeed)):(this.typeStatus=!1,Object(H["setTimeout"])(this.eraseText,this.newTextDelay))},eraseText:function(){var e=this.chooseLanguage(this.title);this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=e[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,Object(H["setTimeout"])(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=e.length&&(this.typeArrayIndex=0),Object(H["setTimeout"])(this.typeText,this.typingSpeed+1e3))}},created:function(){Object(H["setTimeout"])(this.typeText,this.newTextDelay+200)}},z=B,G=(i("a743"),Object(d["a"])(z,N,F,!1,null,null,null)),q=G.exports,J=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{attrs:{id:"phrase"}},[i("h1",[i("i",[e._v(e._s(e.chooseLanguage(e.phrase)))])]),i("p",[e._v(e._s(e.chooseLanguage(e.text)))])])},W=[],$={name:"Phrase",mixins:[c],data:function(){return{phrase:{pt:'"Nem tudo o que enxergamos é obvio!"',en:'"Not everything we see is obvious!"'},text:{pt:"Trabalhar em projetos diversificados , ao lado de pessoas totalmente diferentes na personalidade ou área de atuação, me fez enchegar o mundo com outras perspectivas, me auxiliando a cada dia mais na resolução de problemas independente do seu gênero.",en:"Working on diverse projects, alongside totally different people in their personality or area of activity, made me fill the world with other perspectives, helping me more and more in solving problems regardless of their type."}}},methods:{}},X=$,V=(i("bff0"),Object(d["a"])(X,J,W,!1,null,null,null)),K=V.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"contact",attrs:{id:"contact"}},[i("p",{domProps:{innerHTML:e._s(e.chooseLanguage(e.title))}}),i("div",{staticClass:"social"},e._l(e.icons,(function(e,t){return i("a",{key:t,class:e.class,attrs:{href:e.link,target:"-blank"}})})),0)])},Q=[],Y={name:"FontAwesome",mixins:[c],data:function(){return{title:{pt:"<b>Obrigado pela visita.</b><br><span>Quer conhecer mais projetos meus?<br>Bora bater um papo!</span>",en:"<b>Thanks for coming.</b><br><span>Do you wanna know more about my projects? Let's chat.</span>"},icons:[{class:"fab fa-behance",link:"https://www.behance.net/rodrigomes"},{class:"fab fa-instagram",link:"https://www.instagram.com/obvio.design/"},{class:"far fa-envelope",link:"mailto:rodrigogomes51@gmail.com"},{class:"fab fa-whatsapp",link:"https://api.whatsapp.com/send?phone=41988756100&text=Estava%20dando%20uma%20olhada%20no%20seu%20site..."},{class:"fab fa-github",link:"https://github.com/rodrigogomesantos"},{class:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/rodrigomesantos/"}]}},methods:{}},ee=Y,te=(i("7a5a"),Object(d["a"])(ee,Z,Q,!1,null,null,null)),ie=te.exports,ne="https://rodrigogomesantos.github.io",ae={name:"app",components:{Nav:U,Education:g,Experience:w,Skills:O,Introduction:q,Phrase:K,Contact:ie,Recognition:y},data:function(){return{logo:ne+i("42c4")}},metaInfo:function(){return{meta:[{title:"Rodrigo Gomes"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:"Rodrigo Gomes"},{name:"twitter:description",content:"Um pouco mais da minha trajetória, habilidades e experiências"},{name:"twitter:image",content:this.logo},{property:"og:title",content:"Rodrigo Gomes"},{property:"og:site_name",content:"Rodrigo Gomes"},{property:"og:type",content:"website"},{property:"og:image",content:this.logo},{property:"og:description",content:"Um pouco mais da minha trajetória, habilidades e experiências"}]}}},oe=ae,se=Object(d["a"])(oe,a,o,!1,null,null,null),re=se.exports,ce=i("4c95"),le=i.n(ce),ue=i("e057"),de=i.n(ue),pe=i("58ca");i("c1c3");n["a"].use(pe["a"]),n["a"].use(de.a),n["a"].config.productionTip=!1,n["a"].use(le.a,{class:"v-scroll-reveal",duration:1200,scale:1.1,distance:"100px",mobile:!1}),new n["a"]({render:function(e){return e(re)}}).$mount("#app")},"5f9e":function(e,t,i){},"7a5a":function(e,t,i){"use strict";var n=i("ebf5"),a=i.n(n);a.a},"8b55":function(e,t,i){e.exports=i.p+"img/map.9d621807.png"},a3ee:function(e,t,i){},a743:function(e,t,i){"use strict";var n=i("5f9e"),a=i.n(n);a.a},bff0:function(e,t,i){"use strict";var n=i("421d"),a=i.n(n);a.a},c1c3:function(e,t,i){},cf05:function(e,t,i){e.exports=i.p+"img/logo.82b9c7a5.png"},d79f:function(e,t,i){"use strict";var n=i("a3ee"),a=i.n(n);a.a},df0b:function(e,t,i){e.exports=i.p+"img/favicon.39c10672.svg"},e45f:function(e,t,i){},ea3f:function(e,t,i){},eae4:function(e,t,i){},ebf5:function(e,t,i){},f733:function(e,t,i){"use strict";var n=i("400e"),a=i.n(n);a.a},f736:function(e,t,i){"use strict";var n=i("0072"),a=i.n(n);a.a},f997:function(e,t,i){e.exports=i.p+"img/driftMon.a5323c84.jpg"},fb51:function(e,t,i){}});
//# sourceMappingURL=app.ad58e991.js.map