"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7232],{8944:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(4848),r=n(8453);const o={title:"Criptograf\xeda | Encriptando cosas",authors:"yago",tags:["cryptography"]},i=void 0,c={permalink:"/2024/07/26/encriptando-cosas",source:"@site/blog/2024-07-26-encriptando-cosas/index.md",title:"Criptograf\xeda | Encriptando cosas",description:"Intro a criptograf\xeda, con algunos de los algoritmos m\xe1s famosos y algo de pr\xe1ctica para que te lleves tarea :/",date:"2024-07-26T00:00:00.000Z",tags:[{inline:!0,label:"cryptography",permalink:"/tags/cryptography"}],readingTime:5.34,hasTruncateMarker:!0,authors:[{name:"Yago Pajari\xf1o",title:"CS Student, Developer, and Tech Enthusiast",url:"https://github.com/yagopajarino",imageURL:"/img/ape.png",key:"yago"}],frontMatter:{title:"Criptograf\xeda | Encriptando cosas",authors:"yago",tags:["cryptography"]},unlisted:!1,nextItem:{title:"Criptograf\xeda | Hello Cryptography",permalink:"/2024/07/19/hello-crypto"}},t={authorsImageUrls:[void 0]},l=[{value:"Introducci\xf3n a criptograf\xeda",id:"introducci\xf3n-a-criptograf\xeda",level:2},{value:"El problema del eavesdropper",id:"el-problema-del-eavesdropper",level:2},{value:"Encriptado: the basics",id:"encriptado-the-basics",level:2},{value:"Caesar Cipher",id:"caesar-cipher",level:3},{value:"Encriptado sim\xe9trico vs asim\xe9trico",id:"encriptado-sim\xe9trico-vs-asim\xe9trico",level:3},{value:"Algoritmos de clave p\xfablica - clave privada",id:"algoritmos-de-clave-p\xfablica---clave-privada",level:3}];function d(e){const a={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Intro a criptograf\xeda, con algunos de los algoritmos m\xe1s famosos y algo de pr\xe1ctica para que te lleves tarea :/"}),"\n",(0,s.jsx)(a.h2,{id:"introducci\xf3n-a-criptograf\xeda",children:"Introducci\xf3n a criptograf\xeda"}),"\n",(0,s.jsx)(a.p,{children:"Semana uno del core program. Estuvimos viendo una banda de conceptos critogr\xe1ficos, poca pr\xe1ctica, mucha teor\xeda. Bien como para arrancar."}),"\n",(0,s.jsx)(a.p,{children:"No se bien como organizar este post porque hay un mont\xf3n de temas para meter, igual voy a hacer una selecci\xf3n de los temas que m\xe1s me llamaron la atenci\xf3n."}),"\n",(0,s.jsx)(a.h2,{id:"el-problema-del-eavesdropper",children:"El problema del eavesdropper"}),"\n",(0,s.jsx)(a.p,{children:"Desde basicamente siempre el ser humano tuvo la necesidad de comunicarse con los otros de forma privada. En su momento, mandabas una carta y esperabas que solo el destinatario sea quien la reciba y lea el contenido, sin embargo en el medio pasaba por un mont\xf3n de manos."}),"\n",(0,s.jsx)(a.p,{children:"\xbfQu\xe9 pasaba si alguna de esas manos abr\xeda la carta, la le\xeda y la volv\xeda a ensobrar? Nada, probablemente ni vos ni el destinatario sabr\xedan que alguien ley\xf3 el mensaje que estaban intercambiando."}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["Ese acto de ",(0,s.jsx)(a.em,{children:"escuchar secretamente"})," se conoce como ",(0,s.jsx)(a.strong,{children:"eavesdropping"})]})}),"\n",(0,s.jsx)(a.p,{children:"Ahora bien, que pasar\xeda si vos sos el cartero curioso que quiere leer una carta que no es para \xe9l, pero al abrir el sobre te encontr\xe1s con un texto como este:"}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:'Szwl dt pdeld wpjpyoz pdez dzd nclnv azc slmpc pynzyecloz wl vpj. Slnpxpwz dlmpc cpdazyotpyoz l pdep ehppe nzy wl alwlmcl "tyepcgpyetzy" e.wj/IeDj6'})}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Parece un mensaje escrito en un idioma rar\xedsimo que probablemente no conozcas, o ni siquiera exista. Probablemente se trate de un mensaje encriptado."}),"\n",(0,s.jsxs)(a.p,{children:["Qu\xe9 hacer si abris el sobre y te encontr\xe1s eso? Depende. Si simplemente estabas revisando la correspondencia de un ",(0,s.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Non-player_character",children:"NPC"})," lo volv\xe9s a ensobrar y te olvid\xe1s, pero si te interesa podr\xedas intentar descifrar en mensaje oculto en el texto."]}),"\n",(0,s.jsx)(a.p,{children:"Lo siguiente que deber\xedas conocer es el algoritmo de encriptado que se us\xf3 y poder desencriptar el mensaje. Suerte con eso."}),"\n",(0,s.jsx)(a.h2,{id:"encriptado-the-basics",children:"Encriptado: the basics"}),"\n",(0,s.jsxs)(a.p,{children:["Ahora s\xed tenemos la motivaci\xf3n para introducir algunos temas particulares del mundo criptogr\xe1fico. En todos los casos existe un ",(0,s.jsx)(a.strong,{children:"mensaje"})," que queremos encriptar para que solo el destinatario sea quien pueda desencriptarlo y leerlo."]}),"\n",(0,s.jsxs)(a.p,{children:["Entonces, como en cualquier comunicaci\xf3n, existen dos personas: un ",(0,s.jsx)(a.strong,{children:"emiso"})," y un ",(0,s.jsx)(a.strong,{children:"receptor"})," del mensaje. Hasta ac\xe1 nada nuevo."]}),"\n",(0,s.jsxs)(a.p,{children:["Lo siguiente es definir alg\xfan mecanismo que permita al emisor ",(0,s.jsx)(a.em,{children:"encriptar"})," el mensaje y enviar al rececptor un ",(0,s.jsx)(a.strong,{children:"mensaje cifrado"})," (ciphertext en ingl\xe9s)."]}),"\n",(0,s.jsx)(a.h3,{id:"caesar-cipher",children:"Caesar Cipher"}),"\n",(0,s.jsxs)(a.p,{children:["Uno de los algoritmos m\xe1s conocidos por su simplicidad es el ",(0,s.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Caesar_cipher",children:"Caesar Cipher"})," en honor a Julio Cesar, se dice que lo usaba en sus comunicaciones militares."]}),"\n",(0,s.jsxs)(a.p,{children:["C\xf3mo funciona? Simplemente se ",(0,s.jsx)(a.em,{children:"shiftea"})," el abecedario, se reemplaza cada letra por la que se encuentra ",(0,s.jsx)(a.em,{children:"n"})," veces despu\xe9s en el abecedario. Con un ",(0,s.jsxs)(a.span,{className:"katex",children:[(0,s.jsx)(a.span,{className:"katex-mathml",children:(0,s.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(a.semantics,{children:[(0,s.jsxs)(a.mrow,{children:[(0,s.jsx)(a.mi,{children:"n"}),(0,s.jsx)(a.mo,{children:"="}),(0,s.jsx)(a.mn,{children:"3"})]}),(0,s.jsx)(a.annotation,{encoding:"application/x-tex",children:"n=3"})]})})}),(0,s.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(a.span,{className:"mrel",children:"="}),(0,s.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(a.span,{className:"base",children:[(0,s.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(a.span,{className:"mord",children:"3"})]})]})]})," el nuevo abecedario quedar\xeda asi"]}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"original"}),(0,s.jsx)("td",{children:"a"}),(0,s.jsx)("td",{children:"b"}),(0,s.jsx)("td",{children:"c"}),(0,s.jsx)("td",{children:"d"}),(0,s.jsx)("td",{children:"e"}),(0,s.jsx)("td",{children:"f"}),(0,s.jsx)("td",{children:"g"}),(0,s.jsx)("td",{children:"h"}),(0,s.jsx)("td",{children:"i"}),(0,s.jsx)("td",{children:"j"}),(0,s.jsx)("td",{children:"l"}),(0,s.jsx)("td",{children:"m"}),(0,s.jsx)("td",{children:"n"}),(0,s.jsx)("td",{children:"o"}),(0,s.jsx)("td",{children:"p"}),(0,s.jsx)("td",{children:"q"}),(0,s.jsx)("td",{children:"r"}),(0,s.jsx)("td",{children:"s"}),(0,s.jsx)("td",{children:"t"}),(0,s.jsx)("td",{children:"u"}),(0,s.jsx)("td",{children:"v"}),(0,s.jsx)("td",{children:"w"}),(0,s.jsx)("td",{children:"x"}),(0,s.jsx)("td",{children:"y"}),(0,s.jsx)("td",{children:"z"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"nueva"}),(0,s.jsx)("td",{children:"d"}),(0,s.jsx)("td",{children:"e"}),(0,s.jsx)("td",{children:"f"}),(0,s.jsx)("td",{children:"g"}),(0,s.jsx)("td",{children:"h"}),(0,s.jsx)("td",{children:"i"}),(0,s.jsx)("td",{children:"j"}),(0,s.jsx)("td",{children:"k"}),(0,s.jsx)("td",{children:"l"}),(0,s.jsx)("td",{children:"m"}),(0,s.jsx)("td",{children:"o"}),(0,s.jsx)("td",{children:"p"}),(0,s.jsx)("td",{children:"q"}),(0,s.jsx)("td",{children:"r"}),(0,s.jsx)("td",{children:"s"}),(0,s.jsx)("td",{children:"t"}),(0,s.jsx)("td",{children:"u"}),(0,s.jsx)("td",{children:"v"}),(0,s.jsx)("td",{children:"w"}),(0,s.jsx)("td",{children:"x"}),(0,s.jsx)("td",{children:"y"}),(0,s.jsx)("td",{children:"z"}),(0,s.jsx)("td",{children:"a"}),(0,s.jsx)("td",{children:"b"}),(0,s.jsx)("td",{children:"c"})]})]})}),"\n",(0,s.jsx)(a.p,{children:"Y con esta tabla se cambia cada letra del mensaje"}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsx)(a.p,{children:"Podr\xedas probar desencriptar el mensaje de arriba sabiendo esto \ud83d\udc40"})}),"\n",(0,s.jsx)(a.h3,{id:"encriptado-sim\xe9trico-vs-asim\xe9trico",children:"Encriptado sim\xe9trico vs asim\xe9trico"}),"\n",(0,s.jsxs)(a.p,{children:["Si probaste desencriptar el mensaje original usando el ceaser cipher, seguro hayas tenido que encontrar el ",(0,s.jsx)(a.em,{children:"n"})," que transforma el mensaje encriptado en el original."]}),"\n",(0,s.jsxs)(a.p,{children:["Es que para que un cifrado como el del cesar funcione, se necesita que ambas partes est\xe9n de acuerdo en ese ",(0,s.jsx)(a.em,{children:"n"})," que van a usar, el emisor para encriptar el mensaje y el receptor para desencriptarlo."]}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["Se dice que Cesar siempre usaba un ",(0,s.jsx)(a.em,{children:"n"})," igual a 3 para encriptar sus mensajes."]})}),"\n",(0,s.jsxs)(a.p,{children:["Este tipo de algoritmos se conocen como ",(0,s.jsx)(a.strong,{children:"sim\xe9tricos"}),": ambas partes deben ponerse de acuerdo en un secreto com\xfan, una ",(0,s.jsx)(a.strong,{children:"key"}),", que les permita operar con el algoritmo."]}),"\n",(0,s.jsxs)(a.p,{children:["\xbfC\xf3mo funcionar\xeda en la realidad? Supongamos que somos un general a punto de partir a la guerra y necesitamos definir una ",(0,s.jsx)(a.em,{children:"key"})," para intercambiar mensajes con nuestros oficiales, simplemente nos juntamos todos, definimos una ",(0,s.jsx)(a.em,{children:"key"})," secreta, y cada uno parte conociento el secreto."]}),"\n",(0,s.jsxs)(a.p,{children:["En cambio, loa algoritmos de encriptado ",(0,s.jsx)(a.strong,{children:"asim\xe9tricos"})," eliminan esta necesidad de compartir un secreto com\xfan con la otra parte. Seguro hayas escuchado los t\xe9rminos ",(0,s.jsx)(a.strong,{children:"clave p\xfablica"})," y ",(0,s.jsx)(a.strong,{children:"clave privada"}),", veamos como funcionan."]}),"\n",(0,s.jsx)(a.h3,{id:"algoritmos-de-clave-p\xfablica---clave-privada",children:"Algoritmos de clave p\xfablica - clave privada"}),"\n",(0,s.jsx)(a.p,{children:"En este caso, cada persona que quiere participar en un intercambio de mensajes genera dos claves, una clave p\xfablica, que va a compartir con todo el mundo y una clave privada que no se comparte con nadie."}),"\n",(0,s.jsxs)(a.p,{children:["El algoritmo m\xe1s famoso de esta clase es, me pongo de pie, ",(0,s.jsx)(a.a,{href:"https://es.wikipedia.org/wiki/RSA",children:"RSA"}),". Creado por Rivest, Shamir y Adleman, el algoritmo funciona algo as\xed:"]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsx)(a.li,{children:"Bob quiere recibir mensajes encriptados, para ello genera un conjunto de claves: su clave p\xfablica la comparte por internet a todo el mundo, su clave privada la mantiene secreta."}),"\n",(0,s.jsx)(a.li,{children:"Mary quiere enviar el mensaje 'hola' a Bob. Para ello encripta el mensaje usando una funci\xf3n que toma el mensaje 'hola' m\xe1s la clave p\xfablica de Bob y genera un texto encriptado."}),"\n",(0,s.jsx)(a.li,{children:"Bob recibe el texto encriptado y usando su clave privada que \xe9l solo sabe, puede descifrar el mensaje que mary le envi\xf3."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Parece simple, de hecho lo es ya que se basa en algunos conceptos de m\xf3dulos y n\xfameros primos muy sencillos. Vi unos cuantos videos que explicaban como funciona el algoritmo, te dejo el que me pareci\xf3 m\xe1s claro."}),"\n",(0,s.jsx)("iframe",{width:"700",height:"400",src:"https://www.youtube.com/embed/4zahvcJ9glg?si=_CCbdx7WbidFJSS3",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsx)(a.p,{children:"Btw, acabo de descubrir que puedo insertar videos en los posts \ud83d\ude4c\ud83c\udffc"}),"\n",(0,s.jsx)(a.p,{children:"Entonces, en este caso ya no es necesario que las partes se pongan de acuerdo en un secreto para poder encriptar y desencriptar un mensaje, mucho m\xe1s pr\xe1ctico y eficiente. De hecho hoy en d\xeda RSA sigue siendo el estandar a la hora de encriptar mensajes, seguramente tu navegador lo este usando ahora mismo."}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsx)(a.p,{children:"Para m\xed lo mejor de RSA es que usa conceptos muy simples como n\xfameros primos, modulos y operaciones sencillas para lograr un algoritmo casi inquebrantable"})}),"\n",(0,s.jsxs)(a.p,{children:["El siguiente algoritmo de este estilo que vale la pena estudiar se llama AES (Advanced Encription System), te dej\xf3 este video de ",(0,s.jsx)(a.a,{href:"https://www.youtube.com/@Computerphile",children:"Computerfile"})," si no est\xe1s subscripto te lo recomiendo junto a su primo ",(0,s.jsx)(a.a,{href:"https://www.youtube.com/@numberphile",children:"Numberphile"})]}),"\n",(0,s.jsx)("iframe",{width:"700",height:"400",src:"https://www.youtube.com/embed/O4xNJsjtN6E?si=-UBzpQDa-J-NQ0so",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,s.jsx)(a.p,{children:"Creo que con estos temas alcanza para tener una buena base de algoritmos de encriptado, sobre todo entender la necesidad y c\xf3mo funcionan los algoritmos m\xe1s famosos: ceasar, RSA, AES."}),"\n",(0,s.jsxs)(a.p,{children:["Antes de terminar, te dejo link a ",(0,s.jsx)(a.a,{href:"https://www.codewars.com/kata/530e15517bc88ac656000716",children:"Rot13 | Codewars"})," por si quer\xe9s poner en pr\xe1ctica algo de lo aprendido."]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>c});var s=n(6540);const r={},o=s.createContext(r);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);