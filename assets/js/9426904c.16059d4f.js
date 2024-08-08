"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1516],{9313:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(4848),r=n(8453);const i={title:"\ud83d\ude8d Linea 152",authors:"yago",tags:["transport","data analysis","optimization"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2023/03/23/bondis-152",source:"@site/blog/2023-03-23-bondis-152/index.md",title:"\ud83d\ude8d Linea 152",description:"Data Analysis de la mejor linea de colectivos de Buenos Aires.",date:"2023-03-23T00:00:00.000Z",tags:[{inline:!0,label:"transport",permalink:"/tags/transport"},{inline:!0,label:"data analysis",permalink:"/tags/data-analysis"},{inline:!0,label:"optimization",permalink:"/tags/optimization"}],readingTime:5.79,hasTruncateMarker:!0,authors:[{name:"Yago Pajari\xf1o",title:"Blogger",url:"https://github.com/yagopajarino",imageURL:"/img/ape.png",key:"yago"}],frontMatter:{title:"\ud83d\ude8d Linea 152",authors:"yago",tags:["transport","data analysis","optimization"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"La Conjetura de Thor \ud83d\udc36",permalink:"/2023/04/02/conjetura-thor"},nextItem:{title:"El Funny C\xf3digo Neerlandes",permalink:"/2023/03/15/codigo-neerlandes"}},t={authorsImageUrls:[void 0]},d=[{value:"La mejor l\xednea de bondis CABA",id:"la-mejor-l\xednea-de-bondis-caba",level:2},{value:"Una tarde sin bater\xeda",id:"una-tarde-sin-bater\xeda",level:2},{value:"Fabricando la respuesta \ud83d\udd27",id:"fabricando-la-respuesta-",level:2},{value:"Respuesta 1: naive",id:"respuesta-1-naive",level:3},{value:"Respuesta 2: reutilizando colectivos",id:"respuesta-2-reutilizando-colectivos",level:3},{value:"Cronometrando el recorrido",id:"cronometrando-el-recorrido",level:4},{value:"Bot the data \ud83e\udd16",id:"bot-the-data-",level:4},{value:"Gimme the data",id:"gimme-the-data",level:4},{value:"Clusterizando horarios",id:"clusterizando-horarios",level:4},{value:"Calculando colectivos",id:"calculando-colectivos",level:4},{value:"Conclusiones",id:"conclusiones",level:3}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["Data Analysis de la ",(0,o.jsx)(a.strong,{children:"mejor"})," linea de colectivos de Buenos Aires."]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"image",src:n(1733).A+"",width:"640",height:"426"})}),"\n",(0,o.jsx)(a.h2,{id:"la-mejor-l\xednea-de-bondis-caba",children:"La mejor l\xednea de bondis CABA"}),"\n",(0,o.jsxs)(a.p,{children:["Si alguna vez llegaste a conocer la ",(0,o.jsx)(a.a,{href:"https://es.wikipedia.org/wiki/Avenida_Santa_Fe",children:"Avenida Santa Fe"})," de Buenos Aires, o su continuaci\xf3n en Cabildo-Maip\xfa, seguro te cruzaste con uno (o muchos) colectivos de la l\xednea 152 como los de la foto."]}),"\n",(0,o.jsx)(a.p,{children:"Recorrido super simple: Olivos - La Boca todo derecho por Paseo Col\xf3n - Leandro N. Alem - Santa Fe - Cabildo - Maip\xfa"}),"\n",(0,o.jsxs)(a.p,{children:["Y seguramente tambi\xe9n habr\xe1s notado que es m\xe1s probable cruzarte tres colectivos uno atr\xe1s del otro que encontrar uno solo. ",(0,o.jsx)(a.strong,{children:"La frecuencia es 10/10"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"una-tarde-sin-bater\xeda",children:"Una tarde sin bater\xeda"}),"\n",(0,o.jsxs)(a.p,{children:["Una tarde sin bater\xeda en el tel\xe9fono, volviendo de Vicente L\xf3pez, me tomo el 152 y como no ten\xeda el tel\xe9fono para scrollear alguna app, me puse a ",(0,o.jsx)(a.em,{children:"divagar"})," (super recomendable de vez en cuando) y en una de esas encontr\xe9 este cartel pegado en una pared del bondi:"]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"image",src:n(185).A+"",width:"1280",height:"960"})}),"\n",(0,o.jsx)(a.p,{children:"Yo sab\xeda que la frecuencia era buen\xedsima y medio este cartel lo confirmaba. Entre las 8 y las 19 sale un bondi cada tres minutos, una locura \ud83e\udd2f"}),"\n",(0,o.jsx)(a.p,{children:"As\xed que me pregunt\xe9,"}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"\ud83e\udd14 \xbfCu\xe1ntos bondis ser\xe1n necesarios para poder cubrir todo el cronograma de frecuencias?"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Le saqu\xe9 una foto al cartel y me llev\xe9 la tarea de intentar responder la pregunta."}),"\n",(0,o.jsx)(a.h2,{id:"fabricando-la-respuesta-",children:"Fabricando la respuesta \ud83d\udd27"}),"\n",(0,o.jsx)(a.p,{children:"Creo que esa misma noche empec\xe9 a imaginar una respuesta a la pregunta, o al menos, a hacer otras preguntas que me permitan responder la original, como:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"\xbfD\xf3nde est\xe1n las cabeceras del recorrido?"}),"\n",(0,o.jsx)(a.li,{children:"\xbfCu\xe1nto tarda un colectivo en hacer el recorrido entre cabeceras?"}),"\n",(0,o.jsx)(a.li,{children:"\xbfC\xf3mo influye el tr\xe1fico en la duraci\xf3n del recorrido?"}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Tambi\xe9n me puse a pensar que bien pudo haber sido la misma pregunta que el/los due\xf1os de la empresa se tuvieron que hacer luego de definir el cronograma de frecuencias y por lo tanto, determinar la cantidad ",(0,o.jsx)(a.strong,{children:"m\xednima"})," de colectivos que pudieran cumplir con el cronograma era lo mejor para el negocio."]}),"\n",(0,o.jsxs)(a.p,{children:["Entonces no es solo encotrar una respuesta que sea v\xe1lida, sino que hay una idea de ",(0,o.jsx)(a.em,{children:"optimizaci\xf3n"}),", buscar la m\xednima cantidad de colectivos que cumplen lo pedido."]}),"\n",(0,o.jsx)(a.h3,{id:"respuesta-1-naive",children:"Respuesta 1: naive"}),"\n",(0,o.jsxs)(a.p,{children:["La primer respuesta, la llamo ",(0,o.jsx)(a.em,{children:"naive"})," (ingenua) es tener un colectivo para cada horario de salida, de esa forma me aseguro tener un colectivo disponible para cada salida en el cronograma."]}),"\n",(0,o.jsx)(a.p,{children:"Luego, contando la cantidad de salidas del cronograma, se necesitar\xedan 302 colectivos de ida y 302 colectivos de vuelta, 604 colectivos en total."}),"\n",(0,o.jsx)(a.p,{children:"Le pregunt\xe9 a chat GPT cuanto espacio ocupan 604 colectivos, pensando en que en alg\xfan lugar se tendr\xedan que estacionar:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"image",src:n(4479).A+"",width:"835",height:"666"})}),"\n",(0,o.jsx)(a.p,{children:"Se necesitar\xedan m\xe1s de tres canchas de futbol para estacionar 604 colectivos, un mont\xf3n. Inviable desde el espacio, adem\xe1s parece l\xf3gico pensar que los colectivos se pueden reutilizar."}),"\n",(0,o.jsx)(a.h3,{id:"respuesta-2-reutilizando-colectivos",children:"Respuesta 2: reutilizando colectivos"}),"\n",(0,o.jsx)(a.p,{children:"Esta es la idea m\xe1s l\xf3gica, tengo un colectivo que hace el recorrido de punta a punta y cuando llega al final arranca en sentido contrario."}),"\n",(0,o.jsx)(a.p,{children:"Ahora s\xed, para poder usar esta estrategia hay que conocer cu\xe1nto se tarda en hacer el recorrido de punta a punta."}),"\n",(0,o.jsx)(a.h4,{id:"cronometrando-el-recorrido",children:"Cronometrando el recorrido"}),"\n",(0,o.jsx)(a.p,{children:"Para poder saber cu\xe1nto tarda un colectivo en hacer el recorrido, bien podr\xeda haberme tomado uno (o varios) colectivos desde la terminal y cronometrar cu\xe1nto tarda en llegar al final del recorrido."}),"\n",(0,o.jsx)(a.p,{children:"Es muy f\xe1cil ver que es un m\xe9todo bastante ineficiente, debe haber algo mejor."}),"\n",(0,o.jsxs)(a.p,{children:["Hace un tiempo, por otro tema, encontre las ",(0,o.jsx)(a.a,{href:"https://buenosaires.gob.ar/desarrollourbano/transporte/apitransporte",children:"API publicas del GCBA"})," que en particular permiten ",(0,o.jsx)(a.strong,{children:"ver la posici\xf3n en tiempo real"})," de los colectivos circulando por la capital/GBA."]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"\ud83d\udca1 Si tengo la posici\xf3n geogr\xe1fica de los colectivos, puedo calcular cuanto tardan en relizar el recorrido de punta a punta."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"La API toma una l\xednea de colectivos y devuelve la posici\xf3n gps (latitud, longitud) de todos los colectivos de esa l\xednea en tiempo real."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"Mapa de colectivos l\xednea 152 del 23/01/2023 a las 20:15hs",src:n(8126).A+"",width:"1300",height:"1302"})}),"\n",(0,o.jsx)(a.p,{children:"Mapa de colectivos l\xednea 152 del 23/01/2023 a las 20:15hs"}),"\n",(0,o.jsx)(a.p,{children:"En el mapa se ven los colectivos:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Rojo hacia Olivos"}),"\n",(0,o.jsx)(a.li,{children:"Azul hacia La Boca"}),"\n",(0,o.jsx)(a.li,{children:"Verde en terminal"}),"\n"]}),"\n",(0,o.jsx)(a.h4,{id:"bot-the-data-",children:"Bot the data \ud83e\udd16"}),"\n",(0,o.jsx)(a.p,{children:"Esa noche (23/01/2023) me qued\xe9 programando un bot que hiciera lo siguiente:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"Llame a la API del GCBA"}),"\n",(0,o.jsx)(a.li,{children:"Tome la respuesta y extraiga las posiciones de los colectivos"}),"\n",(0,o.jsx)(a.li,{children:"Guarde las posiciones en un csv"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"El bot qued\xf3 corriendo el 24/01/2023 entre las 8 y las 10 y entre las 15 y las 20 horas cada 30 segundos."}),"\n",(0,o.jsx)(a.h4,{id:"gimme-the-data",children:"Gimme the data"}),"\n",(0,o.jsxs)(a.p,{children:["Una vez obtenida toda la informaci\xf3n, en bruto, quedaba analizarla y sacar conclusiones, hab\xeda que responder la pregunta: ",(0,o.jsx)(a.strong,{children:"\xbfCu\xe1nto tarda un colectivo en realizar el recorrido de punta a punta?"})]}),"\n",(0,o.jsx)(a.p,{children:"Empiezo a analizar los datos y me encuentro lo siguiente:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"image",src:n(5101).A+"",width:"377",height:"262"})}),"\n",(0,o.jsx)(a.p,{children:"Ok como esperaba, tengo datos entre las 8 y las 9 y pico; y luego entre las 15 y las 20 horas."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"image",src:n(9353).A+"",width:"402",height:"279"})}),"\n",(0,o.jsx)(a.p,{children:"Este gr\xe1fico era m\xe1s interesante, me mostraba la distancia en desvios est\xe1ndar a la media de duraci\xf3n del recorrido para cada viaje, seg\xfan el horario de salida (start_datetime)."}),"\n",(0,o.jsx)(a.p,{children:"Permit\xeda identificar dos grupos de datos bien claros, los viajes de la ma\xf1ana con duraci\xf3n bastante menor a la media y los de la tarde con duraci\xf3n por encima de la media. Es decir, los colectivos de la ma\xf1ana tardaban menos, influenciado seguramente por el tr\xe1nsito."}),"\n",(0,o.jsx)(a.h4,{id:"clusterizando-horarios",children:"Clusterizando horarios"}),"\n",(0,o.jsx)(a.p,{children:"Para no complicarme mucho, divid\xed el horario del recorrido en 3 intervalos:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"poco tr\xe1fico: entre las 22 y las 10"}),"\n",(0,o.jsx)(a.li,{children:"medio tr\xe1fico: entre las 10 y las 16"}),"\n",(0,o.jsx)(a.li,{children:"mucho tr\xe1fico: entre las 16 y las 22"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Luego para el 1er y 3er intervalo pod\xeda usar los datos reales, calcular la media de cada grupo."}),"\n",(0,o.jsx)(a.p,{children:"Quedaba conseguir la duraci\xf3n media para la franja entre las 10 y las 16. Para calcularlo arm\xe9 un regresor lineal simple con los datos, obteniendo:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"image",src:n(2175).A+"",width:"402",height:"277"})}),"\n",(0,o.jsx)(a.p,{children:"En rojo: regresi\xf3n lineal simple aplicada a los datos. La recta roja es la que mejor se ajusta a los datos."}),"\n",(0,o.jsx)(a.p,{children:"Y usando el resultado llegue a determinar el tiempo medio de la 2da franja"}),"\n",(0,o.jsx)(a.p,{children:"As\xed, los datos de duraci\xf3n media del recorrido quedaron:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsx)(a.li,{children:"22hs - 10hs: 1.64hs"}),"\n",(0,o.jsx)(a.li,{children:"10hs - 16hs: 4.02hs"}),"\n",(0,o.jsx)(a.li,{children:"16hs-22hs: 4.57hs"}),"\n"]}),"\n",(0,o.jsx)(a.h4,{id:"calculando-colectivos",children:"Calculando colectivos"}),"\n",(0,o.jsx)(a.p,{children:"Ahora quedaba lo m\xe1s f\xe1cil, sabiendo los horarios de partida y la duraci\xf3n del recorrido para cada horario, contar la cantidad de colectivos necesarios."}),"\n",(0,o.jsx)(a.p,{children:"Lo simul\xe9 en python:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-python",children:"# Simulaci\xf3n de un d\xeda de l\xednea 152\nminuto = 0\nnecesarios = 0\nen_terminal = 0\nen_recorrido = set()\nsalidas = get_salidas()\nwhile minuto < 1440:\n    if hay_llegada(minuto, en_recorrido):\n        en_recorrido.remove(minuto)\n        en_terminal += 1\n    if hay_salida(minuto, salidas):\n        if en_terminal == 0:\n            necesarios += 1\n            en_terminal += 1\n        agregar_llegada(en_recorrido, tiempo_llegada(minuto))\n        en_terminal -= 1\n    minuto += 1\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Luego, ",(0,o.jsx)(a.strong,{children:"hacen falta 81 colectivos, por recorrido, para cumplir con el cronograma de salidas del 152."})]}),"\n",(0,o.jsx)(a.h3,{id:"conclusiones",children:"Conclusiones"}),"\n",(0,o.jsx)(a.p,{children:"Con la segunda estrategia, se logra bajar la cantidad de colectivos de 604 a 162, bastante mejor :)"})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1733:(e,a,n)=>{n.d(a,{A:()=>o});const o=n.p+"assets/images/152-ea854227cc11d882176b9a9b1828ca8f.png"},4479:(e,a,n)=>{n.d(a,{A:()=>o});const o=n.p+"assets/images/chat-3018ddb543b36874e3cb7291091aaa18.png"},185:(e,a,n)=>{n.d(a,{A:()=>o});const o=n.p+"assets/images/cronograma-b2c0742579b9e3f9b62c182e3b26aa80.png"},9353:(e,a,n)=>{n.d(a,{A:()=>o});const o=n.p+"assets/images/dist-81bf056a3c0862d452f1dbbf2d7a25ea.png"},5101:(e,a,n)=>{n.d(a,{A:()=>o});const o=n.p+"assets/images/hist-7e4da28ba91a623aa84900c4370c380c.png"},8126:(e,a,n)=>{n.d(a,{A:()=>o});const o=n.p+"assets/images/mapa-996dd4331828bc3d1582b902c5ec884f.png"},2175:(e,a,n)=>{n.d(a,{A:()=>o});const o=n.p+"assets/images/trafico-7f46480ad09179c94cfe3b257d3e94b5.png"},8453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>l});var o=n(6540);const r={},i=o.createContext(r);function s(e){const a=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);