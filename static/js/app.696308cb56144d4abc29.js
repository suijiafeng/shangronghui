webpackJsonp([1],{"+d8n":function(t,a){},"/IcD":function(t,a){},"1POi":function(t,a){},"1Wwa":function(t,a){},"1xGT":function(t,a){},"2R+C":function(t,a){},"4j6F":function(t,a){},"98Sk":function(t,a){},"N+zL":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},e=s("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},n,!1,null,null,null);a.default=e.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s("7+uW"),e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my_tab_bar"},[s("router-link",{staticClass:"tabbar_item",attrs:{to:"/",exact:""}},[s("i",{staticClass:"iconfont icon-weibiaoti1"}),t._v(" "),s("p",{staticClass:"tabbar__label"},[t._v("首页 ")])]),t._v(" "),s("router-link",{staticClass:"tabbar_item",attrs:{to:"/pages/product"}},[s("i",{staticClass:"iconfont icon-msnui-product"}),t._v(" "),s("p",{staticClass:"tabbar__label"},[t._v("产品 ")])]),t._v(" "),s("router-link",{staticClass:"tabbar_item",attrs:{to:"/pages/user"}},[s("i",{staticClass:"iconfont icon-wodemian2"}),t._v(" "),s("p",{staticClass:"tabbar__label"},[t._v("我的 ")])])],1)},staticRenderFns:[]};var i=s("VU/8")({name:"tabbar",data:function(){return{tab_list:[{title:"首页",path:"/",class:"shouye",class1:"weibiaoti1",Img:"http://cdn.shangrongfintech.com/static/images/icon_nav_button.png?v=2"},{title:"产品",class:"wodechanpin",class1:"msnui-product",path:"/pages/product",Img:"http://cdn.shangrongfintech.com/static/images/icon_nav_pro_off.png?v=3"},{title:"我的",class:"wode1",class1:"wodemian2",path:"/pages/user",Img:"http://cdn.shangrongfintech.com/static/images/icon_nav_cell.png?v=3"}]}}},e,!1,function(t){s("2R+C")},null,null).exports,o={name:"Dialog",data:function(){return{iShow:!1,send_code:"",sent:!1,timer:null,erro:!1,notice:"",userInfo:{name:"",tel:"",code:""}}},mounted:function(){var t=this;setTimeout(function(){t.iShow=!0},1e3)},methods:{closeMe:function(){this.iShow=!1},submit:function(){var t=this.userInfo.name.trim(),a=(t=this.userInfo.name.trim(),this.userInfo.tel.trim());if(""!==t)if(""!==a&&null!==a){/^1[2|3|4|5|6|7|8|9]\d{9}$/.test(a)||this.$toast("手机号格式不正确")}else this.$toast("请输入电话");else this.$toast("请输入姓名")},sendCode:function(){var t=this;this.timer=60;var a=this.userInfo.tel.trim(),s=/^1[2|3|4|5|6|7|8|9]\d{9}$/.test(a);if(console.log(s),s){t.sent=!0;var n=setInterval(function(){t.timer--,0===t.timer&&(clearInterval(n),t.sent=!1,t.timer="")},1e3)}else this.$toast("手机号格式不正确")}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.iShow,expression:"iShow"}],staticClass:"modal",on:{touchmove:function(t){t.preventDefault()}}},[s("transition",{attrs:{name:"mod"}},[t.iShow?s("div",{staticClass:"modal_content"},[s("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/images/tanchuangbg1.png",alt:""}}),t._v(" "),s("span",{staticClass:"close",on:{click:t.closeMe}},[t._v("×")]),t._v(" "),s("form",[s("div",{staticClass:"input-bank"},[s("label",{attrs:{for:"user"}},[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.name,expression:"userInfo.name"}],attrs:{id:"user",type:"text",maxlength:"16",placeholder:"请输入姓名"},domProps:{value:t.userInfo.name},on:{input:function(a){a.target.composing||t.$set(t.userInfo,"name",a.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-bank"},[s("label",{attrs:{for:"tel"}},[t._v("手机")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.tel,expression:"userInfo.tel"}],class:{erro:t.erro},attrs:{id:"tel",type:"text",maxlength:"11",placeholder:"请输入电话"},domProps:{value:t.userInfo.tel},on:{input:function(a){a.target.composing||t.$set(t.userInfo,"tel",a.target.value)}}}),t._v(" "),s("span",{staticClass:"send_code",on:{click:t.sendCode}},[t.sent?s("span",{on:{click:function(t){t.stopPropagation()}}},[t._v("重新发送 "+t._s(t.timer))]):s("span",[t._v("发送验证码")])])]),t._v(" "),s("div",{staticClass:"input-bank"},[s("label",{attrs:{for:"code"}},[t._v("验证码")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.code,expression:"userInfo.code"}],attrs:{id:"code",type:"text",maxlength:"6",placeholder:"请输入验证码"},domProps:{value:t.userInfo.code},on:{input:function(a){a.target.composing||t.$set(t.userInfo,"code",a.target.value)}}})]),t._v(" "),s("a",{staticClass:"button",on:{click:t.submit}},[t._v("提交")])])]):t._e()]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.iShow,expression:"iShow"}],staticClass:"modal_dialog"})],1)},staticRenderFns:[]};var r=s("VU/8")(o,c,!1,function(t){s("1Wwa")},null,null).exports,l={name:"Notice",data:function(){return{message_show:!1}},mounted:function(){},props:{message:{type:String,default:"加载中..."}}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal_message"},[this.$store.state.message_show?a("span",{staticClass:"modal_message_content"},[this._v(" "+this._s(this.$store.state.message))]):this._e()])},staticRenderFns:[]};var p={name:"App",data:function(){return{}},components:{tabbar:i,Dialog:r,Notice:s("VU/8")(l,d,!1,function(t){s("1xGT")},null,null).exports}},_={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),this._v(" "),a("tabbar"),this._v(" "),a("Dialog")],1)},staticRenderFns:[]};var u=s("VU/8")(p,_,!1,function(t){s("/IcD")},null,null).exports,h=s("/ocq"),g=s("F3EI"),v=s.n(g),m=(s("v2ns"),{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[a("swiper",{ref:"mySwiper",attrs:{options:this.swiperOption}},[this._l(this.test,function(t,s){return a("swiper-slide",{key:s},[a("img",{staticStyle:{height:"100%"},attrs:{src:t.room_src}})])}),this._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]});var f=s("VU/8")({props:[],data:function(){var t=this;return{test:[{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15260254195af54ccbd3915.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15259440195af40ed32fda8.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15260254195af54ccbd3915.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15228266965ac47dc81eb6a.png"},{room_src:"http://admin.shangrongfintech.com/static/logo/upload/15232406015acace9914514.png"},{room_src:"http://admin.shangrongfintech.com/upload/banner/5a2f9624e68fb.png"}],swiperOption:{notNextTick:!0,autoplay:3e3,pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30,onSlideChangeEnd:function(a){t.page=a.realIndex+1,t.index=a.realIndex}}}}},m,!1,function(t){s("hbp1")},null,null).exports,b={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"info_box"},[a("div",{staticClass:"head "},[this._t("head_slot"),this._v(" "),this._t("head_right")],2),this._v(" "),a("div",{staticClass:"body"},[this._t("body_slot")],2)])},staticRenderFns:[]};var C=s("VU/8")({name:"Infobox",data:function(){return{}}},b,!1,function(t){s("98Sk")},null,null).exports,y={name:"index",data:function(){return{notices:[{ok:!1,data:"3845",name:"累计交易金额（万）"},{ok:!0,data:"3685人",name:"用户数"}],goods:[{url:"/#1",img:"http://cdn.shangrongfintech.com/static/index/images/on_sale_product.png",title:"在售产品"},{url:"/#2",img:"http://cdn.shangrongfintech.com/static/index/images/client_information.png",title:"资讯"},{url:"/#3",img:"http://cdn.shangrongfintech.com/static/images/mortgage.png?v=2",title:"邀请客户"}],marquees:[{nickname:"吴用",tel:"18665**7783",count:"1580.00"},{nickname:"李逵",tel:"13476**8489",count:"150700.00"},{nickname:"鲁达",tel:"13478**4842",count:"17000.00"},{nickname:"宋江",tel:"13478**4845",count:"11300.00"}],loans:[{company:"网投合伙人",ImgUrl:"http://admin.shangrongfintech.com/static/logo/upload/15239538405ad5b0b048c60.png",classify:"国营系",name:" 光汇云油安全运营",time:"5381",data1:"13.05%",data2:"年化收益率",data3:"180天",data4:"1500"},{company:"光汇云油",ImgUrl:"http://admin.shangrongfintech.com/static/logo/upload/15245388875ade9e07c6628.png",classify:"上市系",name:" 光汇云油安全运营",time:"1381",data1:"19.85%",data3:"90天",data4:"10000"}],safe:[{url:"http://shangrongfintech.com/productdetail/detail?id=56",img:"http://admin.shangrongfintech.com/static/logo/upload/15244721875add997b5b66a.png",p1:"加裕智倍保",p2:"危疾保障",content:"癌症最高三次赔付、性价比高 国内三甲医院全认证、无忧理赔"},{url:"http://shangrongfintech.com/productdetail/detail?id=58",img:"http://admin.shangrongfintech.com/static/logo/upload/15244722795add99d798d19.png",p1:"充裕未来3",p2:"储蓄分红",content:"灵活提取现金价值 未雨绸缪  明智积累家族财富"}],safe1:[{url:"http://baidu.com",img:"http://admin.shangrongfintech.com/upload/product/598fe986a6bf6.jpg",p1:"信用证书服务...",content:"所需成本费用低 安全有保证"},{url:"http://baidu.com",img:"http://admin.shangrongfintech.com/upload/product/5a0bdc311590f.jpg",p1:"美国OTC上市业...",content:"灵活提取现金价值 未雨绸缪 明智积累家族财富"}],news:[{url:"http://baidu.com",message:"免密支付存漏洞 上海市消保委约谈滴滴；首款安卓人脸识别手机发布 联美控股3D科技业务落地",date:" 2018-06-01 08:25:47",count:" 273",pic:"http://admin.shangrongfintech.com/static/logo/upload/15278127275b109277abdb1.jpeg"},{url:"http://baidu.com",message:"免密支付存漏洞 上海市消保委约谈滴滴；首款安卓人脸识别手机发布 联美控股3D科技业务落地",date:" 2018-06-01 08:25:47",count:" 273",pic:"http://admin.shangrongfintech.com/static/logo/upload/15278127275b109277abdb1.jpeg"}]}},components:{Slider2:f,Infobox:C}},w={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Slider2"),t._v(" "),s("div",{staticClass:"notice"},t._l(t.notices,function(a){return s("div",{key:a.id,staticClass:"notice_data"},[s("h2",{class:{blue:a.ok}},[t._v(" "+t._s(a.data)+" ")]),t._v(" "),s("p",[t._v(" "+t._s(a.name)+" ")])])})),t._v(" "),s("div",{staticClass:"goods"},t._l(t.goods,function(a){return s("div",{key:a.id,staticClass:"goods_wrap"},[s("router-link",{attrs:{to:a.url}},[s("div",{staticClass:"goods_icon"},[s("img",{attrs:{src:a.img,alt:""}})]),t._v(" "),s("p",[t._v(" "+t._s(a.title)+" ")])])],1)})),t._v(" "),s("div",{staticClass:"marquee"},[t._m(0),t._v(" "),s("div",{staticClass:"marquee_content"},[s("marquee",{attrs:{behavior:"scroll",width:"260px",direction:"left",scrollamount:"2"}},t._l(t.marquees,function(a){return s("i",{key:a.id,staticClass:"content"},[t._v(" 用户 "+t._s(a.nickname)+"\n           "),s("span",[t._v(t._s(a.tel)+" ")]),t._v("投资\n           "),s("span",[t._v(t._s(a.count)+" ")]),t._v("元 、   ")])}))],1)]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_left blc_red",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       网贷：安全合规\n     ")]),t._v(" "),s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("ul",{staticClass:"loan",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.loans,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"top"},[s("div",{staticClass:"loan_icon"},[s("img",{attrs:{src:a.ImgUrl,alt:""}}),t._v(" "),s("span",{staticClass:"company"},[t._v(" "+t._s(a.company)+" ")]),t._v(" "),s("span",{staticClass:"classify"},[t._v("\n                 "+t._s(a.classify)+"\n               ")])]),t._v(" "),s("div",{staticClass:"time"},[t._v("\n               "+t._s(a.name)+"\n               "),s("b",[t._v(t._s(a.time))]),t._v("天")])]),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"loan_data"},[s("strong",[t._v(t._s(a.data1))]),t._v(" "),s("p",[t._v("年化收益率")])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("p",[t._v("期限:\n                 "),s("span",[t._v(" "+t._s(a.data3))])]),t._v(" "),s("p",[t._v("起投:\n                 "),s("span",[t._v(" "+t._s(a.data4))])])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("div",{staticClass:"loan_button"},[t._v("\n                 起投\n               ")])])])])])}))]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_left blc_green",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       保险：未雨筹谋、人生保障\n     ")]),t._v(" "),s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("ul",{staticClass:"safe mb_10",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.safe,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:a.url}},[s("img",{attrs:{src:a.img,alt:""}}),t._v(" "),s("p",{staticClass:"p1"},[s("b",[t._v(" "+t._s(a.p1)+" ")]),t._v(" "),s("span",[t._v(" "+t._s(a.p2)+" ")])]),t._v(" "),s("p",{staticClass:"p2 main_font_Color"},[t._v("\n             "+t._s(a.content)+"\n           ")])])])}))]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_left blc_red",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       企业金融：企业上市、企业融资\n     ")]),t._v(" "),s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("ul",{staticClass:"safe mb_10",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.safe1,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:a.url}},[s("img",{attrs:{src:a.img,alt:""}}),t._v(" "),s("p",{staticClass:"p1"},[s("b",[t._v(t._s(a.p1))])]),t._v(" "),s("p",{staticClass:"p2 main_font_Color"},[t._v(t._s(a.content))])])])}))]),t._v(" "),s("Infobox",[s("aside",{staticClass:"head_right",attrs:{slot:"head_right"},slot:"head_right"},[s("a",{attrs:{href:"#"}},[t._v("\n               查看更多 >\n           ")])]),t._v(" "),s("aside",{staticClass:"head_left blc_yellow",attrs:{slot:"head_slot"},slot:"head_slot"},[t._v("\n       尚融精选：聊投资\n     ")]),t._v(" "),s("ul",{staticClass:"news",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.news,function(a){return s("li",{key:a.id},[s("a",{staticClass:"news_item",attrs:{href:a.url}},[s("div",{staticClass:"message"},[s("p",[t._v(t._s(a.message)+"\n               ")]),s("div",{staticClass:"message_bottom"},[s("div",{staticClass:"message_date"},[t._v("\n                   "+t._s(a.date)+"\n                 ")]),t._v(" "),s("div",{staticClass:"message_look"},[s("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/index/images/browse.png",alt:""}}),t._v(" "),s("span",{staticClass:"count"},[t._v("\n                     "+t._s(a.count)+"\n\n                   ")])])])]),t._v(" "),s("div",{staticClass:"pic"},[s("img",{attrs:{src:a.pic,alt:""}})])])])}))]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"marquee_icon"},[a("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/images/laba.png",alt:""}})])}]};var x=s("VU/8")(y,w,!1,function(t){s("+d8n")},"data-v-247fc52c",null).exports,k={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"product_top_tab"},[s("ul",[s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/home"}},[t._v("国内产品  ")])],1),t._v(" "),s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/hongkong"}},[t._v("香港保险")])],1),t._v(" "),s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/international"}},[t._v("国际产品")])],1),t._v(" "),s("li",[s("router-link",{attrs:{tag:"span",to:"/pages/product/business"}},[t._v("企业金融")])],1)])]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var $=s("VU/8")({name:"Product",data:function(){return{}}},k,!1,function(t){s("ZUN5")},null,null).exports,I={name:"Home",data:function(){return{code:200,msg:"ok",data:[{id:"54",name:"保信龙马健康城P...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239530745ad5adb241d2e.png",description:"政府财政兜底 央企信用 还款来源稳定",proage:"12个月",earnings:"8",company_id:"19",price:"100万",type_id:"5",leixin:"民营系",category_name:"固定回报"},{id:"23",name:"乐享计划理财师自...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239528345ad5acc253383.jpeg",description:"首家央媒入股平台|《经济》杂志",proage:"30天-90天",earnings:"8.3",company_id:"15",price:"1-20万",type_id:"6",leixin:"国营系",category_name:"互联网金融"},{id:"77",name:"铜板街...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15281914625b1659e6c5cbb.jpeg",description:"让钱变得更有价值",proage:"90天",earnings:"11.00",company_id:"25",price:"10000",type_id:"6",leixin:"民营系",category_name:"互联网金融"},{id:"25",name:"中展资产·深圳石...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239529825ad5ad564df41.jpeg",description:"政府主导项目 经济测算清晰  盈利能力强 ",proage:"12个月",earnings:"11",company_id:"17",price:"100万",type_id:"5",leixin:"民营系",category_name:"固定回报"},{id:"66",name:"重信合伙人三月标...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239538675ad5b0cbe7028.png",description:"实力雄厚 银行存管",proage:"90天",earnings:"14",company_id:"21",price:"10000",type_id:"6",leixin:"民营系",category_name:"互联网金融"},{id:"70",name:"光汇云油...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15245388875ade9e07c6628.png",description:"大众储油  藏油于民",proage:"90天",earnings:"13.00",company_id:"22",price:"10000",type_id:"6",leixin:"上市系",category_name:"互联网金融"},{id:"67",name:"网投合伙人...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239538405ad5b0b048c60.png",description:"坚守合规 稳健发展 值得信赖",proage:"90天",earnings:"10.20",company_id:"20",price:"10000",type_id:"6",leixin:"国营系",category_name:"互联网金融"},{id:"53",name:"东方金钰供应链融...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239530745ad5adb241d2e.png",description:"期限短  招商局旗下 强信用 低质押率",proage:"3个月",earnings:"8",company_id:"19",price:"100万",type_id:"5",leixin:"民营系",category_name:"固定回报"},{id:"24",name:"乐享计划理财师自...",logo:"http://admin.shangrongfintech.com/static/logo/upload/15239528345ad5acc253383.jpeg",description:"首家央媒入股平台|《经济》杂志",proage:"30天-90天",earnings:"8.3",company_id:"15",price:"1-20万",type_id:"6",leixin:"国营系",category_name:"互联网金融"}]}},components:{Infobox:C}},S={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"product_content"},[s("Infobox",[s("ul",{staticClass:"loan",attrs:{slot:"body_slot"},slot:"body_slot"},t._l(t.data,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"top"},[s("div",{staticClass:"loan_icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.logo,expression:"loan.logo"}],attrs:{alt:""}}),t._v(" "),s("span",{staticClass:"company"},[t._v(" "+t._s(a.name)+" ")]),t._v(" "),s("span",{staticClass:"classify"},[t._v("\n                  "+t._s(a.leixin)+"\n                ")]),t._v(" "),s("span",{staticClass:"classify classify1"},[t._v("\n                  "+t._s(a.category_name)+"\n                ")])])]),t._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"loan_data"},[s("strong",[t._v(t._s(a.earnings))]),t._v(" "),s("p",[t._v("年化收益率")])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("span",[t._v(" "+t._s(a.proage))]),t._v(" "),s("p",[t._v("期限\n\n                ")])]),t._v(" "),s("div",{staticClass:"loan_data"},[s("div",{staticClass:"loan_button"},[t._v("\n                  投资\n                ")])])])])])}))])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"stop"},[a("span",{staticClass:"line"},[this._v("我是有底线的")])])}]};var E=s("VU/8")(I,S,!1,function(t){s("aS5e")},null,null).exports,U={name:"Subtab",data:function(){return{}},props:{sublist:{type:Array,default:[{title:"加载中..",path:"../../pages/test"},{title:"加载中..",path:"../../pages/test"},{title:"加载中..",path:"../../pages/test"}]}}},j={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pro_sub_tab"},[s("ol",t._l(t.sublist,function(a){return s("router-link",{key:a.id,attrs:{tag:"li",to:a.path}},[s("span",[t._v(" "+t._s(a.title)+" ")])])}))])},staticRenderFns:[]};var R=s("VU/8")(U,j,!1,function(t){s("1POi")},null,null).exports,F={name:"hongkong",data:function(){return{sublist:[{title:"危机保障",path:"../../pages/test"},{title:"储蓄分红",path:"../../pages/test"},{title:"人寿保险",path:"../../pages/test"}]}},components:{Subtab:R}},N={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pro_main"},[a("Subtab",{attrs:{sublist:this.sublist}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pro_con"},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/product/img/youbang.png",alt:""}})])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/product/img/england_Bc.png",alt:""}})])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/product/img/china_life.png",alt:""}})])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/product/img/fuwei.png",alt:""}})])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"http://admin.shangrongfintech.com/static/logo/upload/15256822235af0102f3e403.jpeg",alt:""}})])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"http://admin.shangrongfintech.com/static/logo/upload/15256822795af01067706a7.jpeg",alt:""}})])])])])}]};var V=s("VU/8")(F,N,!1,function(t){s("4j6F")},null,null).exports,P={name:"Business",data:function(){return{sublist:[{title:"企业上市",path:"../../pages/test"},{title:"企业融资",path:"../../pages/test"}]}},components:{Subtab:R}},T={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Subtab",{attrs:{sublist:this.sublist}})],1)},staticRenderFns:[]};var D=s("VU/8")(P,T,!1,function(t){s("acK7")},null,null).exports,O={name:"International",data:function(){return{sublist:[{title:"海外移民",path:"../../pages/test"},{title:"海外房产",path:"../../pages/test"},{title:"海外投资",path:"../../pages/test"}],contentlist:{code:200,msg:"OK",data:[{id:"22",type_id:"环球移民",logo:"http://shangrongfintech.com\\doc/pics\\e9936a1f2e11420a9ca441230dd1bb1b.png",name:"加拿大移民",price:"10000",proage:"10"},{id:"55",type_id:"环球移民",logo:"http://admin.shangrongfintech.com/upload/product/5a5c712559848.png",name:"菲律宾移民",price:"1500",proage:"19"},{id:"31",type_id:"环球移民",logo:"http://admin.shangrongfintech.com/upload/product/598ab55aabd1e.jpg",name:"圣基茨移民",price:"10000.00",proage:"100"},{id:"30",type_id:"香港移民",logo:"http://admin.shangrongfintech.com/upload/product/5a1cfb8e72967.jpg",name:"香港专才移民",price:"10000.00",proage:"100"},{id:"51",type_id:"环球移民",logo:"http://admin.shangrongfintech.com/upload/product/5a2a4c79710d7.png",name:" 英国企业家移民计划",price:"30000",proage:"25"}]}}},components:{Subtab:R}},q={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Subtab",{attrs:{sublist:t.sublist}}),t._v(" "),s("div",{staticClass:"in_content"},[s("ul",t._l(t.contentlist.data,function(a){return s("li",{key:a.id},[s("img",{attrs:{src:a.logo,alt:""}}),t._v(" "),s("div",{staticClass:"info"},[s("p",[t._v(" "+t._s(a.name)+" ")]),t._v(" "),s("p",{staticClass:"time"},[s("span",[t._v(" 期限："+t._s(a.proage)+"  ")]),t._v("  \n            "),s("span",[t._v("起投资金 "+t._s(a.price)+" ")])]),t._v(" "),s("div",{staticClass:"classify"},[t._v("\n            "+t._s(a.type_id)+"\n          ")])])])}))])],1)},staticRenderFns:[]};var A=s("VU/8")(O,q,!1,function(t){s("l9Ml")},null,null).exports,M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"user_top_bar"},[s("div",{staticClass:"user_bar_bg"},[s("div",{staticClass:"container clearfix"},[s("div",{staticClass:"user_info pl_3"},[s("a",{attrs:{href:"http://shangrongfintech.com/user/person"}},[s("img",{staticClass:"user_pic",attrs:{src:"http://thirdwx.qlogo.cn/mmopen/iaaDjDDRGuZ8WzplG9BiaZkAyQxcaQOqD77WgyeTyvmTenJCaoHPwakUEaSkAKa9HBHpgbdmZvhwk19CeSE9Ah18ibE88Iye2qp/132",alt:""}})]),t._v(" "),s("span",{staticClass:"user_name pl_2"},[s("p",{staticClass:"name"},[t._v(" 小明")]),t._v(" "),s("p",{staticClass:"rank"},[t._v(" 客户 ")])]),t._v(" "),s("i",{staticClass:"icon_right pr_3",attrs:{onclick:"history.back() "}},[s("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/img/user/bai.png",alt:""}})])])])])]),t._v(" "),s("div",{staticClass:"amount"},[s("div",{staticClass:"bg_bar"},[s("div",{staticClass:"mum"},[s("p",[t._v("0")]),t._v(" "),s("p",[t._v("累计订单金额(元)")])])]),t._v(" "),s("div",{staticClass:"icon_right"},[s("img",{attrs:{src:"http://cdn.shangrongfintech.com/static/img/user/bai2.png",alt:""}})])]),t._v(" "),s("div",{staticClass:"accout_box "},[s("h3",{staticClass:"account_head circle_green"},[t._v("\n      我的资产\n    ")]),t._v(" "),s("div",{staticClass:"accout_body"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon kehujl"}),t._v("\n              我的客户经理\n            ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon yuyuejl"}),t._v("\n              预约记录\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              共\n              "),s("span",[t._v(" 3 ")]),t._v("次\n            ")])])])])])]),t._v(" "),s("div",{staticClass:"accout_box "},[s("h3",{staticClass:"account_head circle_green"},[t._v("\n      记录中心\n    ")]),t._v(" "),s("div",{staticClass:"accout_body"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon changpin"}),t._v("\n              产品\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              浏览\n              "),s("span",[t._v(" 3 ")]),t._v("次\n\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              转发\n              "),s("span",[t._v(" 3 ")]),t._v("次\n\n            ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon zixun"}),t._v("\n              资讯\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              浏览\n              "),s("span",[t._v(" 300 ")]),t._v("次\n            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n              转发\n              "),s("span",[t._v(" 31 ")]),t._v("次\n            ")])])])])])]),t._v(" "),s("div",{staticClass:"accout_box "},[s("h3",{staticClass:"account_head circle_green"},[t._v("\n      账号管理\n    ")]),t._v(" "),s("div",{staticClass:"accout_body"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon zhanghao"}),t._v("\n              账号设置\n            ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"accout_main"},[s("span",{staticClass:"accout_icon xinxipl"}),t._v("\n              信息披露\n            ")])])])])])]),t._v(" "),s("div",{staticClass:"stop"},[s("span",{staticClass:"line"},[t._v("我是有底线的")])])])}]};var z=s("VU/8")({name:"User",data:function(){return{}}},M,!1,function(t){s("d4o1")},null,null).exports;n.default.use(h.a);var B=new h.a({linkActiveClass:"active",linkExactActiveClass:"exact",routes:[{path:"/",name:"index",component:x},{path:"/pages/product",name:"product",redirect:"/pages/product/home",component:$,children:[{path:"home",name:"home",component:E},{path:"hongkong",name:"Hongkong",component:V},{path:"international",name:"international",component:A},{path:"business",name:"Business",component:D}]},{path:"/pages/user",name:"user",component:z}]}),H=s("NYxO");n.default.use(H.a);var W=new H.a.Store({state:{show:!1,message:"大帅哥",message_show:!1}}),Z=s("mtWM"),G=s.n(Z),K=s("Au9i"),L=s.n(K);n.default.use(L.a),n.default.prototype.$http=G.a,G.a.defaults.baseURL="http://localhost:3000/",n.default.use(v.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:B,store:W,components:{App:u},template:"<App/>"})},ZUN5:function(t,a){},aS5e:function(t,a){},acK7:function(t,a){},d4o1:function(t,a){},hbp1:function(t,a){},l9Ml:function(t,a){},pYmz:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=s("m0SV"));var e={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,a=function(){if(!t.swiper&&n){delete t.options.notNextTick;var a=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(a=!0,t.defaultSwiperClasses[s]=t.options[s]);var e=function(){t.swiper=new Swiper(t.$el,t.options)};a?t.$nextTick(e):e()}}(this.options.notNextTick||this.notNextTick)?a():this.$nextTick(a)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},o=s("VU/8")(e,i,!1,null,null,null);a.default=o.exports},v2ns:function(t,a){}},["NHnr"]);