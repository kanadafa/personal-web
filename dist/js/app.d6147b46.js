(function(){"use strict";var t={9132:function(t,e,r){var n=r(6369),a=r(6882);r(7024);n["default"].use(a.ZPm);var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("router-view")],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"info"}},[e("b-navbar-brand",{attrs:{href:"/"}},[t._v(" 姜昱呈的個人網站 ")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}})],1),e("ul",{staticClass:"nav bg-light justify-content-center border nav-tabs"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link flex-sm-fill text-sm-center",attrs:{to:t.links.phaser}},[t._v("Phaser作品")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link flex-sm-fill text-sm-center",attrs:{to:t.links.web}},[t._v("Web/APP作品")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link flex-sm-fill text-sm-center",attrs:{to:t.links.unity}},[t._v("Unity作品")])],1)])],1)},u=[],c={data(){return{links:{phaser:"/phaser",web:"/web",unity:"/unity"}}}},l=c,v=r(1001),f=(0,v.Z)(l,o,u,!1,null,"40ffd44d",null),p=f.exports,_={components:{Navbar:p}},b=_,m=(0,v.Z)(b,s,i,!1,null,null,null),d=m.exports,h=r(2631),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("個人自傳")]),t._m(0),e("h2",[t._v("學校參與:寰宇文化領航員計畫")]),t._m(1),e("CarouselComp",{attrs:{images:t.carouselData1}}),e("h2",[t._v("學校參與:桌球隊")]),t._m(2),e("CarouselComp",{attrs:{images:t.carouselData2}}),e("h4",[t._v("歡迎到上方項目點選觀看在學期間的作品")]),e("h1",[t._v("非常感謝撥冗時間觀看!!")])],1)},y=[function(){var t=this,e=t._self._c;return e("p",[t._v("您好，我是姜昱呈，在家中排行老二，目前就讀元智大學資訊傳播學系科技組三年級，爸爸是在內科工作的上班族 "),e("br"),t._v(" ，媽媽曾經創業加盟小吃店，在一個上班族與創業族的家庭中長大，同時看到了上班族與創業族不同的辛苦 "),e("br"),t._v(" ，媽媽是工作上對員工和善的老闆，對我卻無比的嚴厲，但我知道，這是要讓我不靠關係，培養工作能力，使我成為更好的人，爸爸是個冷面的主管 "),e("br"),t._v(" ，對我卻溫柔無比完全沒架子，在這樣的家庭中成長，使我個性在工作上，沉穩、抗壓性高、行動力強，私下個性活潑開朗。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("大學求學時期參加了學校寰宇文化的活動，此活動是邀請本校的台灣籍及外國籍學生合作，至國小授課 "),e("br"),t._v(" ，外籍生擔任老師用全英文溝通及授課，台灣籍擔任助教，過程中即時翻譯讓國小生理解內容 "),e("br"),t._v(" ，是我最大的成就及挑戰，此認識許多外國學生，一起交流文化互相學習，開拓我的視野，充實我的大學生涯，從中也深深體會團隊合作的重要性。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("在高中下課要去補習的路上，同班同學遇到我，說了一句:來打桌球，成為了我喜愛桌球的契機 "),e("br"),t._v(" 雖然高中開始學習真的比起國小練習過的其他人還要難學許多，但我抱著對桌球濃厚的興趣才得以加入學校的桌球隊 "),e("br")])}],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"carousel"},[e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},t._l(t.dataImages,(function(t){return e("div",{key:t.src},[e("b-carousel-slide",{attrs:{caption:t.caption,"img-src":t.src}})],1)})),0)],1)},C=[],x={name:"CarouselComp",data(){return{dataImages:this.images}},props:{images:{type:Array}}},j=x,k=(0,v.Z)(j,w,C,!1,null,"21bda6f4",null),O=k.exports,P=r.p+"img/01.48acfd6d.jpg",Z=r.p+"img/02.377a3ca1.jpg",D=r.p+"img/03.ad9c2bcc.jpg",S=r.p+"img/04.804f9f51.jpg",T=r.p+"img/05.a577d3c5.jpg",M=r.p+"img/06.1d62f21e.jpg",z=r.p+"img/07.e6b4328f.jpg",E={name:"HomeView",data(){return{carouselData1:[{caption:"我和另外一組外籍老師一起配合教課的合照",src:P},{caption:"外籍老師和學生們的合照",src:Z},{caption:"第一次參加活動和外籍老師的合照",src:D},{caption:"我和全體學生的合照",src:S}],carouselData2:[{caption:"110年度新生杯",src:T},{caption:"淡大杯",src:M},{caption:"111年度新生盃",src:z}]}},components:{CarouselComp:O}},G=E,I=(0,v.Z)(G,g,y,!1,null,null,null),A=I.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("Phaser小遊戲")]),t._m(0),e("div",{staticClass:"iframe-wrapper"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",scrolling:"no",src:"https://kanadafa.github.io/phaser-game/"}})],1)])},F=[function(){var t=this,e=t._self._c;return e("p",[t._v("這個網頁遊戲的玩法非常簡單，就是中間的塔不可以被四周隨機生成的魔物攻擊到，總共有三個關卡 "),e("br"),t._v(" 後續的關卡魔物攻擊力會變得更高，在地圖上也更不好看清楚，塔的血量也會變少，就是一款簡單而快速的遊戲 "),e("br"),e("strong",[t._v("可以直接在下方遊玩!!")]),e("strong",[t._v("請注意:此小遊戲只支援網頁瀏覽器(Google,Edge等等)，手機及平板不支援")])])}],H={},N=(0,v.Z)(H,B,F,!1,null,"edeb80d0",null),U=N.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("Web作品介紹")]),t._m(0),e("h2",[t._v("以下是此網站的介紹影片")]),e("div",{staticClass:"video-wrapper"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/fDdUa-0hfRw"}})],1),e("h3",[t._v("如果覺得影片介紹太長，可以看下面的文字說明")]),t._m(1),e("h4",[t._v("製作感想")]),t._m(2)])},R=[function(){var t=this,e=t._self._c;return e("p",[t._v(" 此作品為小組一起共同開發，主要目的為讓屋主(客戶)以及清潔員(工作者)可以互相媒合的一個網站 "),e("br"),t._v(" 此網站的發想契機像外送平台或是共乘平台可以讓擁有資源或是短期需要此資源的人可以在互換報酬的原則下互惠 "),e("br")])},function(){var t=this,e=t._self._c;return e("p",[t._v("此網頁的基底為使用node.js去進行傳寫，在此網站裡面可以先選擇兩個身分組(清潔員和屋主)，然後先各自創立自己的帳號 "),e("br"),t._v(" 讓完帳號後會要求輸入等等的個人資料，創建完後就會到個人的身分組帳號首頁，如果下面有歷史訂單就會顯示在最下方， "),e("br"),t._v(" 此影片的角度為屋主，當屋主想要請人來進行清潔服務時可以在個人首頁上找到新增需求的按鈕，就可以開始填寫想要清潔的項目和清潔地點等等的資訊 "),e("br"),t._v(" 請注意:裡面有複數個清潔服務項目，在創建清潔員帳號時就會需要先行選擇自己可以提供哪項服務，只有這項自行選的項目清潔員才看的到要求 "),e("br"),t._v(" 在屋主成立完後，按下確認，有可以提供此清潔項目服務的清潔員帳號就可以立即的看到最新的屋主需求列表"),e("br"),t._v(" 清潔員會先看屋主的詳細需求，當清潔員認為可以接下就會在詳細需求的下面開始進行第二階段， "),e("br"),t._v(" 第二階段就是清潔員去屋主家進行清潔服務，當清潔員按下清潔按鈕時就會跳到第三階段，此時清潔員就會開始進行打掃 "),e("br"),t._v(" 第三階段就是當清潔員完成後讓屋主檢查後續最後清潔員按下完成，此時兩個身分組的帳號就會跳回到個人的首頁 "),e("br"),t._v(" 並且在下方的歷史訂單就會被新增在最新的列表，這樣整體的流程就完成了。 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("這是我第一次使用node去製作網站，對我來說是一個很大的挑戰，感謝組員可以一起完成這項作品，並且在中間教了我許多不懂的邏輯 "),e("br"),t._v(" 後端連接資料庫的部分，雖然老師當初是希望我們連接到MondoDB，但是我們在製作的時候還沒有教到那裡，因此我們這後端是連到xampp的資料庫 "),e("br"),t._v(" 來收發資訊，最後做完的成就感真的很大，也讓我對這個程式感到更多的興趣而不是放棄。 ")])}],V={},Y=(0,v.Z)(V,W,R,!1,null,"795727ff",null),$=Y.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("此為介紹unity作品")]),e("p",[t._v("學校總共分為兩學期專門教如何製作unity，因此我把兩次學期的小組專題展示出來")]),e("h2",[t._v("第一個作品:imposter")]),t._m(0),e("div",{staticClass:"videounity"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/g8zIvafYGdE"}}),e("p",[t._v("製作感想:雖然這主題我碰程式碼的部分不多，但是去尋找素材，劇情和建置場地等等的工作也是蠻辛苦的")])],1),e("h2",[t._v("第二個作品:zombie")]),t._m(1),e("div",{staticClass:"videounity"},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/y6G4FB5aHz0"}})],1),t._m(2)])},J=[function(){var t=this,e=t._self._c;return e("p",[t._v("此遊戲的劇情故事就是主角在殭屍爆發的生活環境下，他必須要一個人想辦法在這個城市裡面生存下去 "),e("br"),t._v(" 主軸為劇情走向，主角要去探索所有在此座城市裡面的所有地區或是物件，然後往最後的故事結尾走， "),e("br"),t._v(" 最後就是看主角的劇情路線怎麼離開這個可怕的地方或是繼續生存下去或是..... ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("這個遊戲就比較沒有那麼多的劇情，就只是雙人玩家可以一起去遊玩在同一個裝置上的小遊戲，構思有點像是旋風快打這類的雙人競技遊戲 "),e("br"),t._v(" 玩家分為兩方，進攻方(殭屍)要想辦法在限定時間內去破壞防守方(人類)唯一可以生存下去的水晶核心，玩法就是這麼簡單 ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("製作感想:這次我每個方面都有碰到一點，版面的設計製作等等和一些簡單的程式邏輯，我覺得畫面切割剛開始就是一個不簡單的挑戰 "),e("br"),t._v(" 但最後透過老師上課的教導都有做出來，感覺很棒! ")])}],K={},L=(0,v.Z)(K,q,J,!1,null,"da3e7e08",null),Q=L.exports;n["default"].use(h.ZP);const X=[{path:"/",name:"home",component:A},{path:"/phaser",name:"phaserDemo",component:U},{path:"/web",name:"webDemo",component:$},{path:"/unity",name:"unityDemo",component:Q}],tt=new h.ZP({mode:"hash",base:"/personal-web/dist/",routes:X});var et=tt,rt=r(3822);n["default"].use(rt.ZP);var nt=new rt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:et,store:nt,render:t=>t(d)}).$mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,s){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],s=t[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(o=!1,s<i&&(i=s));if(o){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,a,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/personal-web/dist/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,s,i=n[0],o=n[1],u=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(u)var l=u(r)}for(e&&e(n);c<i.length;c++)s=i[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(l)},n=self["webpackChunkpersonal_web"]=self["webpackChunkpersonal_web"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9132)}));n=r.O(n)})();
//# sourceMappingURL=app.d6147b46.js.map