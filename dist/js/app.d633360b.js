(function(){"use strict";var t={3809:function(t,e,r){var n=r(6369),a=r(6882);r(7024);n["default"].use(a.ZPm);var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("router-view")],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"info"}},[e("b-navbar-brand",{attrs:{href:"/personal-web/dist"}},[t._v(" 姜昱呈的個人網站 ")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}})],1),e("ul",{staticClass:"nav bg-light justify-content-center border nav-tabs"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link flex-sm-fill text-sm-center",attrs:{to:t.links.phaser}},[t._v("Phaser作品")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link flex-sm-fill text-sm-center",attrs:{to:t.links.web}},[t._v("Web/APP作品")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link flex-sm-fill text-sm-center",attrs:{to:t.links.unity}},[t._v("Unity作品")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link flex-sm-fill text-sm-center",attrs:{to:t.links.unityMMD}},[t._v("UnityMMD作品")])],1)])],1)},u=[],c={data(){return{links:{phaser:"/phaser",web:"/web",unity:"/unity",unityMMD:"/mmd"}}}},l=c,p=r(1001),f=(0,p.Z)(l,o,u,!1,null,"7ed5b87e",null),v=f.exports,m={components:{Navbar:v}},b=m,_=(0,p.Z)(b,s,i,!1,null,null,null),d=_.exports,h=r(2631),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("個人自傳")]),t._m(0),e("h2",[t._v("學校參與:寰宇文化領航員計畫")]),t._m(1),e("CarouselComp",{attrs:{images:t.carouselData1}}),e("h2",[t._v("學校參與:桌球校隊")]),t._m(2),e("CarouselComp",{attrs:{images:t.carouselData2}}),e("h4",[t._v("歡迎到上方項目點選觀看在學期間的作品")]),e("h1",[t._v("非常感謝撥冗時間觀看!!")])],1)},y=[function(){var t=this,e=t._self._c;return e("p",[t._v("您好，我是姜昱呈，在家中排行老二，就讀元智大學資訊傳播學系科技組，爸爸是在內科工作的上班族 "),e("br"),t._v(" ，媽媽曾經創業加盟小吃店，在一個上班族與創業族的家庭中長大，同時看到了上班族與創業族不同的辛苦 "),e("br"),t._v(" ，媽媽是工作上對員工和善的老闆，對我卻無比的嚴厲，但我知道，這是要讓我不靠關係，培養工作能力，使我成為更好的人，爸爸是個冷面的主管 "),e("br"),t._v(" ，對我卻溫柔無比完全沒架子，在這樣的家庭中成長，使我個性在工作上，沉穩、抗壓性高、行動力強，私下個性活潑開朗。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("大學求學時期參加了學校寰宇文化的活動，此活動是邀請本校的台灣籍及外國籍學生合作，至國小授課 "),e("br"),t._v(" ，外籍生擔任老師用全英文溝通及授課，台灣籍擔任助教，過程中即時翻譯讓國小生理解內容 "),e("br"),t._v(" ，是我最大的成就及挑戰，此認識許多外國學生，一起交流文化互相學習，開拓我的視野，充實我的大學生涯，從中也深深體會團隊合作的重要性。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("在高中下課要去補習的路上，同班同學遇到我，說了一句:來打桌球，成為了我喜愛桌球的契機 "),e("br"),t._v(" 雖然高中開始學習真的比起國小練習過的其他人還要難學許多，但我抱著對桌球濃厚的興趣才得以加入學校的桌球隊 "),e("br")])}],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"carousel"},[e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},t._l(t.dataImages,(function(t){return e("div",{key:t.src},[e("b-carousel-slide",{attrs:{caption:t.caption,"img-src":t.src}})],1)})),0)],1)},C=[],x={name:"CarouselComp",data(){return{dataImages:this.images}},props:{images:{type:Array}}},k=x,M=(0,p.Z)(k,w,C,!1,null,"21bda6f4",null),j=M.exports,D=r.p+"img/01.48acfd6d.jpg",O=r.p+"img/02.377a3ca1.jpg",P=r.p+"img/03.ad9c2bcc.jpg",Z=r.p+"img/04.804f9f51.jpg",S=r.p+"img/05.a577d3c5.jpg",U=r.p+"img/06.1d62f21e.jpg",A=r.p+"img/07.e6b4328f.jpg",T={name:"HomeView",data(){return{carouselData1:[{caption:"我和另外一組外籍老師一起配合教課的合照",src:D},{caption:"外籍老師和學生們的合照",src:O},{caption:"第一次參加活動和外籍老師的合照",src:P},{caption:"我和全體學生的合照",src:Z}],carouselData2:[{caption:"110年度新生杯",src:S},{caption:"淡大杯",src:U},{caption:"111年度新生盃",src:A}]}},components:{CarouselComp:j}},I=T,V=(0,p.Z)(I,g,y,!1,null,null,null),z=V.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("Phaser小遊戲")]),t._m(0),e("p",[t._v("個人部分:遊戲部分素材底圖尋找、音效素材設置、遊戲機制、角色移動以及揮舞動作、怪物隨機生成、血量機制")]),e("div",{staticClass:"iframe-wrapper"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",scrolling:"no",src:"https://kanadafa.github.io/phaser-game/"}})],1)])},G=[function(){var t=this,e=t._self._c;return e("p",[t._v("這個網頁遊戲的玩法非常簡單，就是中間的塔不可以被四周隨機生成的魔物攻擊到，總共有三個關卡 "),e("br"),t._v(" 後續的關卡魔物攻擊力會變得更高，在地圖上也更不好看清楚，塔的血量也會變少，就是一款簡單而快速的遊戲 "),e("br"),e("strong",[t._v("可以直接在下方遊玩!!")]),e("strong",[t._v("請注意:此小遊戲只支援網頁瀏覽器(Google,Edge等等)，手機及平板不支援")])])}],R={},B=(0,p.Z)(R,E,G,!1,null,"7724c082",null),F=B.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("Web作品介紹")]),t._m(0),e("p",[t._v("個人部分:製作外部的網頁連接，例如About us 等等的外部網頁製作，影片製作")]),e("h2",[t._v("以下是此網站的介紹影片")]),e("div",{staticClass:"video-wrapper"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/fDdUa-0hfRw"}})],1)])},N=[function(){var t=this,e=t._self._c;return e("p",[t._v(" 此作品為小組共同開發，主要目的為讓屋主(客戶)以及清潔員(工作者)可以互相媒合的一個網站 "),e("br"),t._v(" 此網站的發想契機像外送平台或是共乘平台可以讓擁有資源或是短期需要此資源的人可以在互換報酬的原則下互惠 "),e("br")])}],W={},q=(0,p.Z)(W,H,N,!1,null,"25c4e62b",null),Y=q.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("此為介紹unity作品")]),e("p",[t._v("學校總共分為兩學期專門教如何製作unity，因此我把兩次學期的小組專題展示出來")]),e("h2",[t._v("第一個作品:imposter")]),t._m(0),e("div",{staticClass:"videounity"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/g8zIvafYGdE"}}),e("p",[t._v("個人部分:尋找場地素材，音效素材以及後期影片製作")])],1),e("h2",[t._v("第二個作品:zombie")]),t._m(1),e("div",{staticClass:"videounity"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/y6G4FB5aHz0"}})],1),e("p",[t._v("個人部分:製作遊戲介面的UI以及按鈕操控，後製的音效以及影片製作")])])},J=[function(){var t=this,e=t._self._c;return e("p",[t._v("此遊戲的劇情故事就是主角在殭屍爆發的生活環境下，他必須要一個人想辦法在這個城市裡面生存下去 "),e("br"),t._v(" 主軸為劇情走向，主角要去探索所有在此座城市裡面的所有地區或是物件，然後往最後的故事結尾走， "),e("br"),t._v(" 最後就是看主角的劇情路線怎麼離開這個可怕的地方或是繼續生存下去或是..... ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("這個遊戲就比較沒有那麼多的劇情，就只是雙人玩家可以一起去遊玩在同一個裝置上的小遊戲，構思有點像是旋風快打這類的雙人競技遊戲 "),e("br"),t._v(" 玩家分為兩方，進攻方(殭屍)要想辦法在限定時間內去破壞防守方(人類)唯一可以生存下去的水晶核心，玩法就是這麼簡單 ")])}],K={},L=(0,p.Z)(K,$,J,!1,null,"7f83de7a",null),Q=L.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("Unity 使用 Vuforia 套用 MMD")]),t._m(0),e("p",[t._v("個人部分:研究MMD4mecanim套件如何套入模型後再套進Vuforia來進行AR的互動，後期影片字幕")]),e("h2",[t._v("以下是實際操作影片")]),e("div",{staticClass:"video-wrapper"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/197epBfO1qc"}})],1)])},tt=[function(){var t=this,e=t._self._c;return e("p",[t._v(" 此作品為小組一起共同製作，主要是使用Unity套用MMD4mecanim套件來進行MMD的來使用後透過Vuforia來進行AR投影 "),e("br"),t._v(" 角色模型可以在對應的卡紙上面出現，然後再用音樂圖片來進行相對應的音樂播放與模型動作舞蹈 ")])}],et={},rt=(0,p.Z)(et,X,tt,!1,null,"2fb4ff18",null),nt=rt.exports;n["default"].use(h.ZP);const at=[{path:"/",name:"home",component:z},{path:"/phaser",name:"phaserDemo",component:F},{path:"/web",name:"webDemo",component:Y},{path:"/unity",name:"unityDemo",component:Q},{path:"/mmd",name:"unityMMD",component:nt}],st=new h.ZP({mode:"hash",base:"/personal-web/dist/",routes:at});var it=st,ot=r(3822);n["default"].use(ot.ZP);var ut=new ot.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:it,store:ut,render:t=>t(d)}).$mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,s){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],s=t[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(o=!1,s<i&&(i=s));if(o){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,a,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/personal-web/dist/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,i=n[0],o=n[1],u=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(u)var l=u(r)}for(e&&e(n);c<i.length;c++)s=i[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(l)},n=self["webpackChunkpersonal_web"]=self["webpackChunkpersonal_web"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3809)}));n=r.O(n)})();
//# sourceMappingURL=app.d633360b.js.map