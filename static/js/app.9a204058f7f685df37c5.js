webpackJsonp([0],{"/W+A":function(t,a){},"0kHK":function(t,a){},"2rny":function(t,a){},"3/6p":function(t,a){},"6+FR":function(t,a){},"8AuJ":function(t,a){},AEIy:function(t,a){},AgZl:function(t,a){},EhbM:function(t,a){},"N+zL":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},i=s("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},n,!1,null,null,null);a.default=i.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my_tab_bar"},[s("router-link",{staticClass:"tabbar_item",attrs:{to:"/",exact:""}},[s("i",{staticClass:"iconfont icon-weibiaoti1"}),t._v(" "),s("p",{staticClass:"tabbar__label"},[t._v("首页 ")])]),t._v(" "),s("router-link",{staticClass:"tabbar_item",attrs:{to:"/pages/product"}},[s("i",{staticClass:"iconfont icon-msnui-product"}),t._v(" "),s("p",{staticClass:"tabbar__label"},[t._v("产品 ")])]),t._v(" "),s("router-link",{staticClass:"tabbar_item",attrs:{to:"/pages/user"}},[s("i",{staticClass:"iconfont icon-wodemian2"}),t._v(" "),s("p",{staticClass:"tabbar__label"},[t._v("我的 ")])])],1)},staticRenderFns:[]};var e={name:"App",data:function(){return{}},components:{tabbar:s("VU/8")({name:"tabbar",data:function(){return{tab_list:[{title:"首页",path:"/",class:"shouye",class1:"weibiaoti1",Img:"http://cdn.shangrongfintech.com/static/images/icon_nav_button.png?v=2"},{title:"产品",class:"wodechanpin",class1:"msnui-product",path:"/pages/product",Img:"http://cdn.shangrongfintech.com/static/images/icon_nav_pro_off.png?v=3"},{title:"我的",class:"wode1",class1:"wodemian2",path:"/pages/user",Img:"http://cdn.shangrongfintech.com/static/images/icon_nav_cell.png?v=3"}]}}},i,!1,function(t){s("/W+A")},null,null).exports}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),this._v(" "),a("tabbar")],1)},staticRenderFns:[]};var c=s("VU/8")(e,o,!1,function(t){s("0kHK")},null,null).exports,r=s("/ocq"),l=s("F3EI"),d=s.n(l),p=(s("v2ns"),{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[a("swiper",{ref:"mySwiper",attrs:{options:this.swiperOption}},[this._l(this.test,function(t,s){return a("swiper-slide",{key:s},[a("img",{staticStyle:{height:"100%"},attrs:{src:t.room_src}})])}),this._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]});var _=s("VU/8")({props:[],data:function(){var t=this;return{test:[{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15260254195af54ccbd3915.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15259440195af40ed32fda8.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15260254195af54ccbd3915.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15228266965ac47dc81eb6a.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15232406015acace9914514.png"},{room_src:"http://admin.shangrongfintech.com/upload/banner/5a2f9624e68fb.png"}],swiperOption:{notNextTick:!0,autoplay:3e3,pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30,onSlideChangeEnd:function(a){t.page=a.realIndex+1,t.index=a.realIndex}}}}},p,!1,function(t){s("bUvd")},null,null).exports,u={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"info_box"},[a("div",{staticClass:"head "},[this._t("head_slot"),this._v(" "),this._t("head_right")],2),this._v(" "),a("div",{staticClass:"body"},[this._t("body_slot")],2)])},staticRenderFns:[]};var v=s("VU/8")({name:"Infobox",data:function(){return{}}},u,!1,function(t){s("NMm+")},null,null).exports,h={name:"index",data:function(){return{notices:[{ok:!1,data:"3845",name:"累计交易金额（万）"},{ok:!0,data:"3685人",name:"用户数"}],goods:[{url:"/#1",img:"http://cdn.shangrongfintech.com/static/index/images/on_sale_product.png",title:"在售产品"},{url:"/#2",img:"http://cdn.shangrongfintech.com/static/index/images/client_information.png",title:"资讯"},{url:"/#3",img:"http://cdn.shangrongfintech.com/static/images/mortgage.png?v=2",title:"邀请客户"}],marquees:[{nickname:"吴用",tel:"18665**7783",count:"1580.00"},{nickname:"李逵",tel:"13476**8489",count:"150700.00"},{nickname:"鲁达",tel:"13478**4842",count:"17000.00"},{nickname:"宋江",tel:"13478**4845",count:"11300.00"}],loans:[{company:"网投合伙人",ImgUrl:"http://admin.shangrongfintech.com/static/logo/upload/15239538405ad5b0b048c60.png",classify:"国营系",name:" 光汇云油安全运营",time:"5381",data1:"13.05%",data2:"年化收益率",data3:"180天",data4:"1500"},{company:"光汇云油",ImgUrl:"http://admin.shangrongfintech.com/static/logo/upload/15245388875ade9e07c6628.png",classify:"上市系",name:" 光汇云油安全运营",time:"1381",data1:"19.85%",data3:"90天",data4:"10000"}],safe:[{url:"http://shangrongfintech.com/productdetail/detail?id=56",img:"http://admin.shangrongfintech.com/static/logo/upload/15244721875add997b5b66a.png",p1:"加裕智倍保",p2:"危疾保障",content:"癌症最高三次赔付、性价比高 国内三甲医院全认证、无忧理赔"},{url:"http://shangrongfintech.com/productdetail/detail?id=58",img:"http://admin.shangrongfintech.com/static/logo/upload/15244722795add99d798d19.png",p1:"充裕未来3",p2:"储蓄分红",content:"灵活提取现金价值 未雨绸缪  明智积累家族财富"}],safe1:[{url:"http://baidu.com",img:"http://admin.shangrongfintech.com/upload/product/598fe986a6bf6.jpg",p1:"信用证书服务...",content:"所需成本费用低 安全有保证"},{url:"http://baidu.com",img:"http://admin.shangrongfintech.com/upload/product/5a0bdc311590f.jpg",p1:"美国OTC上市业...",content:"灵活提取现金价值 未雨绸缪 明智积累家族财富"}],news:[{url:"http://baidu.com",message:"免密支付存漏洞 上海市消保委约谈滴滴；首款安卓人脸识别手机发布 联美控股3D科技业务落地",date:" 2018-06-01 08:25:47",count:" 273",pic:"http://admin.shangrongfintech.com/static/logo/upload/15278127275b109277abdb1.jpeg"},{url:"http://baidu.com",message:"免密支付存漏洞 上海市消保委约谈滴滴；首款安卓人脸识别手机发布 联美控股3D科技业务落地",date:" 2018-06-01 08:25:47",count:" 273",pic:"http://admin.shangrongfintech.com/static/logo/upload/15278127275b109277abdb1.jpeg"}]}},components:{Slider2:_,Infobox:v}},g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Slider2"),t._v(" "),s("div",{staticClass:"notice"},t._l(t.notices,function(a){return s("div",{key:a.id,staticClass:"notice_data"},[s("h2",{class:{blue:a.ok}},[t._v(" "+t._s(a.data)+" ")]),t._v(" "),s("p",[t._v(" "+t._s(a.name)+" ")])])})),t._v(" "),s("div",{staticClass:"goods"},t._l(t.goods,function(a){return s("div",{key:a.id,staticClass:"goods_wrap"},[s("router-link",{attrs:{to:a.url}},[s("div",{staticClass:"goods_icon"},[s("img",{attrs:{src:a.img,alt:""}})]),t._v(" "),s("p",[t._v(" "+t._s(a.title)+" ")])])],1)})),t._v(" "),s("div",{staticClass:"marquee"},[t._m(0),t._v(" "),s("div",{staticClass:"marquee_content"},[s("marquee",{attrs:{behavior:"scroll",width:"260px",direction:"left",scrollamount:"2"}},t._l(t.marquees,function(a){return s("i",{key:a.id,staticClass:"content"},[t._v(" 用户 "+t._s(a.nickname)+"\n           "),s("span",[t._v(t._s(a.tel)+" ")]),t._v("投资\n           "),s("span",[t._v(t._s(a.count)+" ")]),t._v("元 、   ")])}))],1)]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_left blc_red",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       网贷：安全合规\n     ")]),t._v(" "),s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("ul",{staticClass:"loan",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.loans,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"top"},[s("div",{staticClass:"loan_icon"},[s("img",{attrs:{src:a.ImgUrl,alt:""}}),t._v(" "),s("span",{staticClass:"company"},[t._v(" "+t._s(a.company)+" ")]),t._v(" "),s("span",{staticClass:"classify"},[t._v("\n                 "+t._s(a.classify)+"\n               ")])]),t._v(" "),s("div",{staticClass:"time"},[t._v("\n               "+t._s(a.name)+"\n               "),s("b",[t._v(t._s(a.time))]),t._v("天")])]),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"loan_data"},[s("strong",[t._v(t._s(a.data1))]),t._v(" "),s("p",[t._v("年化收益率")])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("p",[t._v("期限:\n                 "),s("span",[t._v(" "+t._s(a.data3))])]),t._v(" "),s("p",[t._v("起投:\n                 "),s("span",[t._v(" "+t._s(a.data4))])])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("div",{staticClass:"loan_button"},[t._v("\n                 起投\n               ")])])])])])}))]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_left blc_green",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       保险：未雨筹谋、人生保障\n     ")]),t._v(" "),s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("ul",{staticClass:"safe mb_10",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.safe,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:a.url}},[s("img",{attrs:{src:a.img,alt:""}}),t._v(" "),s("p",{staticClass:"p1"},[s("b",[t._v(" "+t._s(a.p1)+" ")]),t._v(" "),s("span",[t._v(" "+t._s(a.p2)+" ")])]),t._v(" "),s("p",{staticClass:"p2 main_font_Color"},[t._v("\n             "+t._s(a.content)+"\n           ")])])])}))]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_left blc_red",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       企业金融：企业上市、企业融资\n     ")]),t._v(" "),s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("ul",{staticClass:"safe mb_10",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.safe1,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:a.url}},[s("img",{attrs:{src:a.img,alt:""}}),t._v(" "),s("p",{staticClass:"p1"},[s("b",[t._v(t._s(a.p1))])]),t._v(" "),s("p",{staticClass:"p2 main_font_Color"},[t._v(t._s(a.content))])])])}))]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("aside",{staticClass:"head_left blc_yellow",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       尚融精选：聊投资\n     ")]),t._v(" "),s("ul",{staticClass:"news",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.news,function(a){return s("li",{key:a.id},[s("a",{staticClass:"news_item",attrs:{href:a.url}},[s("div",{staticClass:"message"},[s("p",[t._v(t._s(a.message)+"\n               ")]),s("div",{staticClass:"message_bottom"},[s("div",{staticClass:"message_date"},[t._v("\n                   "+t._s(a.date)+"\n                 ")]),t._v(" "),s("div",{staticClass:"message_look"},[s("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/index/images/browse.png",alt:""}}),t._v(" "),s("span",{staticClass:"count"},[t._v("\n                     "+t._s(a.count)+"\n\n                   ")])])])]),t._v(" "),s("div",{staticClass:"pic"},[s("img",{attrs:{src:a.pic,alt:""}})])])])}))]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"marquee_icon"},[a("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/images/laba.png",alt:""}})])}]};var m=s("VU/8")(h,g,!1,function(t){s("l1ds")},"data-v-247fc52c",null).exports,f={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"product_top_tab"},[s("ul",[s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/home"}},[t._v("国内产品  ")])],1),t._v(" "),s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/hongkong"}},[t._v("香港保险")])],1),t._v(" "),s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/international"}},[t._v("国际产品")])],1),t._v(" "),s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/business"}},[t._v("企业金融")])],1)])]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var b=s("VU/8")({name:"Product",data:function(){return{}}},f,!1,function(t){s("djai")},null,null).exports,C={name:"Home",data:function(){return{code:200,msg:"ok",data:[{id:"77",name:"铜板街...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15281914625b1659e6c5cbb.jpeg",description:"让钱变得更有价值",proage:"90天",earnings:"11.00",company_id:"25",price:"10000",type_id:"6",leixin:"民营系",category_name:"互联网金融"},{id:"25",name:"中展资产·深圳石...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239529825ad5ad564df41.jpeg",description:"政府主导项目 经济测算清晰  盈利能力强 ",proage:"12个月",earnings:"11",company_id:"17",price:"100万",type_id:"5",leixin:"民营系",category_name:"固定回报"},{id:"66",name:"重信合伙人三月标...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239538675ad5b0cbe7028.png",description:"实力雄厚 银行存管",proage:"90天",earnings:"14",company_id:"21",price:"10000",type_id:"6",leixin:"民营系",category_name:"互联网金融"},{id:"70",name:"光汇云油...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15245388875ade9e07c6628.png",description:"大众储油  藏油于民",proage:"90天",earnings:"13.00",company_id:"22",price:"10000",type_id:"6",leixin:"上市系",category_name:"互联网金融"},{id:"67",name:"网投合伙人...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239538405ad5b0b048c60.png",description:"坚守合规 稳健发展 值得信赖",proage:"90天",earnings:"10.20",company_id:"20",price:"10000",type_id:"6",leixin:"国营系",category_name:"互联网金融"},{id:"53",name:"东方金钰供应链融...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239530745ad5adb241d2e.png",description:"期限短  招商局旗下 强信用 低质押率",proage:"3个月",earnings:"8",company_id:"19",price:"100万",type_id:"5",leixin:"民营系",category_name:"固定回报"},{id:"24",name:"乐享计划理财师自...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239528345ad5acc253383.jpeg",description:"首家央媒入股平台|《经济》杂志",proage:"30天-90天",earnings:"8.3",company_id:"15",price:"1-20万",type_id:"6",leixin:"国营系",category_name:"互联网金融"}]}},components:{Infobox:v}},y={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"product_content"},[s("Infobox",[s("ul",{staticClass:"loan",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.data,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"top"},[s("div",{staticClass:"loan_icon"},[s("img",{attrs:{src:a.logo,alt:""}}),t._v(" "),s("span",{staticClass:"company"},[t._v(" "+t._s(a.name)+" ")]),t._v(" "),s("span",{staticClass:"classify"},[t._v("\n                  "+t._s(a.leixin)+"\n                ")]),t._v(" "),s("span",{staticClass:"classify classify1"},[t._v("\n                  "+t._s(a.category_name)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"loan_data"},[s("strong",[t._v(t._s(a.earnings))]),t._v(" "),s("p",[t._v("年化收益率")])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("span",[t._v(" "+t._s(a.proage))]),t._v(" "),s("p",[t._v("期限\n\n                ")])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("div",{staticClass:"loan_button"},[t._v("\n                  投资\n                ")])])])])])}))])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stop"},[a("span",{staticClass:"line"},[this._v("我是有底线的")])])}]};var w=s("VU/8")(C,y,!1,function(t){s("2rny")},null,null).exports,x={name:"Subtab",data:function(){return{}},props:{sublist:{type:Array,default:[{title:"加载中..",path:"../../pages/test"},{title:"加载中..",path:"../../pages/test"},{title:"加载中..",path:"../../pages/test"}]}}},k={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"pro_sub_tab"},[s("ol",t._l(t.sublist,function(a){return s("router-link",{key:a.id,attrs:{tag:"li",to:a.path}},[s("span",[t._v(" "+t._s(a.title)+" ")])])}))])])},staticRenderFns:[]};var $=s("VU/8")(x,k,!1,function(t){s("8AuJ")},null,null).exports,E={name:"hongkong",data:function(){return{sublist:[{title:"危机保障",path:"../../pages/test"},{title:"储蓄分红",path:"../../pages/test"},{title:"人寿保险",path:"../../pages/test"}]}},components:{Subtab:$}},S={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Subtab",{attrs:{sublist:this.sublist}})],1)},staticRenderFns:[]};var U=s("VU/8")(E,S,!1,function(t){s("6+FR")},null,null).exports,I={name:"Business",data:function(){return{sublist:[{title:"企业上市",path:"../../pages/test"},{title:"企业融资",path:"../../pages/test"}]}},components:{Subtab:$}},F={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Subtab",{attrs:{sublist:this.sublist}})],1)},staticRenderFns:[]};var R=s("VU/8")(I,F,!1,function(t){s("AEIy")},null,null).exports,A={name:"International",data:function(){return{sublist:[{title:"海外移民",path:"../../pages/test"},{title:"海外房产",path:"../../pages/test"},{title:"海外投资",path:"../../pages/test"}]}},components:{Subtab:$}},V={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Subtab",{attrs:{sublist:this.sublist}})],1)},staticRenderFns:[]};var j=s("VU/8")(A,V,!1,function(t){s("AgZl")},null,null).exports,T={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"user_top_bar"},[s("div",{staticClass:"user_bar_bg"},[s("div",{staticClass:"container clearfix"},[s("div",{staticClass:"user_info pl_3"},[s("a",{attrs:{href:"http://shangrongfintech.com/user/person"}},[s("img",{staticClass:"user_pic",attrs:{src:"http://thirdwx.qlogo.cn/mmopen/iaaDjDDRGuZ8WzplG9BiaZkAyQxcaQOqD77WgyeTyvmTenJCaoHPwakUEaSkAKa9HBHpgbdmZvhwk19CeSE9Ah18ibE88Iye2qp/132",alt:""}})]),t._v(" "),s("span",{staticClass:"user_name pl_2"},[s("p",{staticClass:"name"},[t._v(" 小明")]),t._v(" "),s("p",{staticClass:"rank"},[t._v(" 客户 ")])]),t._v(" "),s("i",{staticClass:"icon_right pr_3",attrs:{onclick:"history.back() "}},[s("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/img/user/bai.png",alt:""}})])])])])]),t._v(" "),s("div",{staticClass:"amount"},[s("div",{staticClass:"bg_bar"},[s("div",{staticClass:"mum"},[s("p",[t._v("0")]),t._v(" "),s("p",[t._v("累计订单金额(元)")])])]),t._v(" "),s("div",{staticClass:"icon_right"},[s("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/img/user/bai2.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"accout_box "},[s("h3",{staticClass:"account_head circle_green"},[t._v("\n      我的资产\n    ")]),t._v(" "),s("div",{staticClass:"accout_body"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon kehujl"}),t._v("\n              我的客户经理\n            ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon yuyuejl"}),t._v("\n              预约记录\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              共\n              "),s("span",[t._v(" 3 ")]),t._v("次\n            ")])])])])])]),t._v(" "),s("div",{staticClass:"accout_box "},[s("h3",{staticClass:"account_head circle_green"},[t._v("\n      记录中心\n    ")]),t._v(" "),s("div",{staticClass:"accout_body"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon changpin"}),t._v("\n              产品\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              浏览\n              "),s("span",[t._v(" 3 ")]),t._v("次\n\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              转发\n              "),s("span",[t._v(" 3 ")]),t._v("次\n\n            ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon zixun"}),t._v("\n              资讯\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              浏览\n              "),s("span",[t._v(" 300 ")]),t._v("次\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              转发\n              "),s("span",[t._v(" 31 ")]),t._v("次\n            ")])])])])])]),t._v(" "),s("div",{staticClass:"accout_box "},[s("h3",{staticClass:"account_head circle_green"},[t._v("\n      账号管理\n    ")]),t._v(" "),s("div",{staticClass:"accout_body"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon zhanghao"}),t._v("\n              账号设置\n            ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon xinxipl"}),t._v("\n              信息披露\n            ")])])])])])]),t._v(" "),s("div",{staticClass:"stop"},[s("span",{staticClass:"line"},[t._v("我是有底线的")])])])}]};var q=s("VU/8")({name:"User",data:function(){return{}}},T,!1,function(t){s("3/6p")},null,null).exports,N={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("p",[this._v("页面开发中。。。")]),this._v(" "),a("div",{on:{click:this.goback}},[this._v("点击返回上级")])])},staticRenderFns:[]};var H=s("VU/8")({name:"test",data:function(){return{}},methods:{goback:function(){this.$router.go(-1)}}},N,!1,function(t){s("EhbM")},"data-v-7ce86b64",null).exports;n.a.use(r.a);var O=new r.a({linkActiveClass:"active",linkExactActiveClass:"exact",routes:[{path:"/",name:"index",component:m},{path:"/pages/product",name:"product",redirect:"/pages/product/home",component:b,children:[{path:"home",name:"home",component:w},{path:"hongkong",name:"Hongkong",component:U},{path:"international",name:"international",component:j},{path:"business",name:"Business",component:R}]},{path:"/pages/user",name:"user",component:q},{path:"/pages/test",name:"test",component:H}]});n.a.use(d.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:O,components:{App:c},template:"<App/>"})},"NMm+":function(t,a){},bUvd:function(t,a){},djai:function(t,a){},l1ds:function(t,a){},pYmz:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=s("m0SV"));var i={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,a=function(){if(!t.swiper&&n){delete t.options.notNextTick;var a=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(a=!0,t.defaultSwiperClasses[s]=t.options[s]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};a?t.$nextTick(i):i()}}(this.options.notNextTick||this.notNextTick)?a():this.$nextTick(a)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},o=s("VU/8")(i,e,!1,null,null,null);a.default=o.exports},v2ns:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.9a204058f7f685df37c5.js.map