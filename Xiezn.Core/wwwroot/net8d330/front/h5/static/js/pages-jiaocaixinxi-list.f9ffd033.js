(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiaocaixinxi-list"],{"1bb9":function(e,i,t){"use strict";var a=t("fed7"),n=t.n(a);n.a},"515a":function(e,i,t){"use strict";var a={"mescroll-uni":t("f05e").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(i){arguments[0]=i=e.$handleEvent(i),e.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=e.$handleEvent(i),e.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=e.$handleEvent(i),e.upCallback.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{padding:"40rpx 0",borderColor:"#21d5ae",alignItems:"flex-start",display:"block",justifyContent:"space-between",minHeight:"100vh",flexWrap:"wrap",background:"#fff",borderWidth:"0px 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[t("v-uni-view",{staticClass:"cu-bar bg-white search",staticStyle:{width:"100%"},style:[{top:e.CustomBar+"px"}]},[e.queryList.length>1?t("v-uni-picker",{staticStyle:{"padding-left":"20upx"},attrs:{mode:"selector",range:e.queryList,"range-key":"queryName",value:e.queryIndex},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.queryChange.apply(void 0,arguments)}}},[t("v-uni-view",[t("v-uni-image",{staticStyle:{width:"20upx",height:"33upx"},attrs:{src:"../../static/center/to.png"}})],1)],1):e._e(),0==e.queryIndex?t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-input",{attrs:{type:"text",placeholder:"所属学院"},model:{value:e.searchForm.xueyuan,callback:function(i){e.$set(e.searchForm,"xueyuan",i)},expression:"searchForm.xueyuan"}})],1):e._e(),1==e.queryIndex?t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-input",{attrs:{type:"text",placeholder:"所属专业"},model:{value:e.searchForm.zhuanye,callback:function(i){e.$set(e.searchForm,"zhuanye",i)},expression:"searchForm.zhuanye"}})],1):e._e(),2==e.queryIndex?t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-input",{attrs:{type:"text",placeholder:"所属年级"},model:{value:e.searchForm.nianji,callback:function(i){e.$set(e.searchForm,"nianji",i)},expression:"searchForm.nianji"}})],1):e._e(),3==e.queryIndex?t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-input",{attrs:{type:"text",placeholder:"教材标题"},model:{value:e.searchForm.jiaocaibiaoti,callback:function(i){e.$set(e.searchForm,"jiaocaibiaoti",i)},expression:"searchForm.jiaocaibiaoti"}})],1):e._e(),4==e.queryIndex?t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-input",{attrs:{type:"text",placeholder:"教材分类"},model:{value:e.searchForm.jiaocaifenlei,callback:function(i){e.$set(e.searchForm,"jiaocaifenlei",i)},expression:"searchForm.jiaocaifenlei"}})],1):e._e(),t("v-uni-view",{staticClass:"action"},[t("v-uni-button",{staticClass:"cu-btn shadow-blur round",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.search.apply(void 0,arguments)}}},[e._v("搜索")])],1)],1),t("v-uni-view",{style:{width:"100%",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}},[t("v-uni-scroll-view",{staticClass:"category-two",style:{padding:"8rpx 8rpx 0",borderColor:"#eee",margin:"20rpx 0 0",borderRadius:"0px",background:"#fff",borderWidth:"0px",width:"220rpx",borderStyle:"solid",height:"auto"},attrs:{"scroll-y":"true"}},e._l(e.categoryList,(function(i,a){return t("v-uni-view",{key:a,staticClass:"tab",class:e.categoryName===i.jiaocaifenlei?"active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.categoryClick(i.jiaocaifenlei)}}},[e._v(e._s(i.jiaocaifenlei))])})),1),t("v-uni-view",{staticClass:"list",style:{width:"calc(100% - 220rpx)",padding:"0px",margin:"0",flex:"1",height:"auto"}},e._l(e.list,(function(i,a){return t("v-uni-view",{key:a,staticClass:"listm flex flex-between",style:{border:"0px solid #f4e5e2",padding:"24rpx",margin:"0 0 40rpx",borderRadius:"24rpx",flexWrap:"wrap",background:"#fff",display:"flex",width:"100%",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onDetailTap(i)}}},[e.preHttp(i.jiaocaifengmian)?t("v-uni-image",{staticClass:"listmpic",style:{width:"100%",objectFit:"cover",display:"block",height:"400rpx"},attrs:{mode:"aspectFill",src:i.jiaocaifengmian.split(",")[0]}}):t("v-uni-image",{staticClass:"listmpic",style:{width:"100%",objectFit:"cover",display:"block",height:"400rpx"},attrs:{mode:"aspectFill",src:i.jiaocaifengmian?e.baseUrl+i.jiaocaifengmian.split(",")[0]:""}}),t("v-uni-view",{staticClass:"listmr",style:{width:"calc(100% - 0px)",padding:"0",margin:"0",height:"auto"}},[t("v-uni-view",{staticClass:"col3 f30 elip mb15",style:{padding:"0 20rpx",margin:"0",whiteSpace:"nowrap",overflow:"hidden",color:"#11999e",textAlign:"center",background:"#f6fdfd",width:"100%",lineHeight:"60rpx",fontSize:"28rpx",textOverflow:"ellipsis"}},[e._v(e._s(i.jiaocaibiaoti))]),t("v-uni-view",{staticClass:"col3 f30 elip mb15",style:{padding:"0 20rpx",margin:"0",whiteSpace:"nowrap",overflow:"hidden",color:"#11999e",textAlign:"center",background:"#f6fdfd",width:"100%",lineHeight:"60rpx",fontSize:"28rpx",textOverflow:"ellipsis"}},[e._v(e._s(i.jiaocaifenlei))])],1),t("v-uni-view",{style:{width:"100%",padding:"16rpx 20rpx",justifyContent:"space-between",display:"flex",height:"auto",order:"5"}},[e.userid&&e.isAuth("jiaocaixinxi","修改")||!e.userid&&e.isAuthFront("jiaocaixinxi","修改")?t("v-uni-view",{style:{display:"flex"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.onUpdateTap(i.id)}}},[t("v-uni-text",{staticClass:"cuIcon-edit",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#666",display:"inline-block"}}),t("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#666",display:"inline-block"}},[e._v("修改")])],1):e._e(),e.userid&&e.isAuth("jiaocaixinxi","删除")||!e.userid&&e.isAuthFront("jiaocaixinxi","删除")?t("v-uni-view",{style:{display:"flex"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.onDeleteTap(i.id)}}},[t("v-uni-text",{staticClass:"cuIcon-delete",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#666",display:"inline-block"}}),t("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#666",display:"inline-block"}},[e._v("删除")])],1):e._e()],1)],1)})),1)],1)],1),e.userid&&e.isAuth("jiaocaixinxi","新增")?t("v-uni-button",{staticClass:"add-btn",style:{border:"2rpx solid #fff",boxShadow:"0 4rpx 8rpx rgba(0,0,0,.3)",color:"#fff",bottom:"120rpx",right:"128rpx",outline:"none",borderRadius:"100%",background:"#11999E",width:"88rpx",lineHeight:"88rpx",fontSize:"28rpx",position:"fixed",height:"88rpx",zIndex:"9999"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onAddTap()}}},[e._v("新增")]):e._e(),!e.userid&&e.isAuthFront("jiaocaixinxi","新增")?t("v-uni-button",{staticClass:"add-btn",style:{border:"2rpx solid #fff",boxShadow:"0 4rpx 8rpx rgba(0,0,0,.3)",color:"#fff",bottom:"120rpx",right:"128rpx",outline:"none",borderRadius:"100%",background:"#11999E",width:"88rpx",lineHeight:"88rpx",fontSize:"28rpx",position:"fixed",height:"88rpx",zIndex:"9999"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onAddTap()}}},[e._v("新增")]):e._e()],1)],1)},r=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return a}))},"77e9":function(e,i,t){"use strict";var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("c5f6"),t("55dd"),t("96cf");var n=a(t("3b8d")),r={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"所属学院"},{queryName:"所属专业"},{queryName:"所属年级"},{queryName:"教材标题"},{queryName:"教材分类"}],queryIndex:0,list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1==uni.getStorageSync("useridTag")?(this.userid=uni.getStorageSync("useridTag"),uni.removeStorageSync("useridTag")):this.userid="",this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),i={},!this.userid){e.next=9;break}return e.next=6,this.$api.page("jiaocaifenlei",{page:1,limit:100});case 6:i=e.sent,e.next=12;break;case 9:return e.next=11,this.$api.list("jiaocaifenlei",{page:1,limit:100});case 11:i=e.sent;case 12:i.data.list.splice(0,0,{id:0,jiaocaifenlei:"全部"}),this.categoryList=i.data.list,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 16:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),onLoad:function(e){1==uni.getStorageSync("useridTag")?(this.userid=uni.getStorageSync("useridTag"),uni.removeStorageSync("useridTag")):this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{priceChange:function(e){return Number(e).toFixed(2)},preHttp:function(e){return e&&"http"==e.substr(0,4)},queryChange:function(e){this.queryIndex=e.detail.value,this.searchForm.xueyuan="",this.searchForm.zhuanye="",this.searchForm.nianji="",this.searchForm.jiaocaibiaoti="",this.searchForm.jiaocaifenlei=""},categoryClick:function(e){this.categoryName=e,this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t,a,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t={page:i.num,limit:i.size},"全部"!=this.categoryName&&(t.jiaocaifenlei="%"+this.categoryName+"%"),this.searchForm.xueyuan&&(t["xueyuan"]="%"+this.searchForm.xueyuan+"%"),this.searchForm.zhuanye&&(t["zhuanye"]="%"+this.searchForm.zhuanye+"%"),this.searchForm.nianji&&(t["nianji"]="%"+this.searchForm.nianji+"%"),this.searchForm.jiaocaibiaoti&&(t["jiaocaibiaoti"]="%"+this.searchForm.jiaocaibiaoti+"%"),this.searchForm.jiaocaifenlei&&(t["jiaocaifenlei"]="%"+this.searchForm.jiaocaifenlei+"%"),a={},!this.userid){e.next=14;break}return e.next=11,this.$api.page("jiaocaixinxi",t);case 11:a=e.sent,e.next=17;break;case 14:return e.next=16,this.$api.list("jiaocaixinxi",t);case 16:a=e.sent;case 17:for(1==i.num&&(this.list=[]),this.list=this.list.concat(a.data.list),n=Math.ceil(this.list.length/6),r=[],s=0;s<n;s++)r[s]=this.list.slice(6*s,6*(s+1));this.lists=r,0==a.data.list.length&&(this.hasNext=!1),i.endSuccess(i.size,this.hasNext);case 25:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),onDetailTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onUpdateTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e))},onAddTap:function(){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var i=this;uni.showModal({title:"提示",content:"是否确认删除",success:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=5;break}return t.next=3,i.$api.del("jiaocaixinxi",JSON.stringify([e]));case 3:i.hasNext=!0,i.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function a(e){return t.apply(this,arguments)}return a}()})},search:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t,a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.mescroll.num=1,i={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.xueyuan&&(i["xueyuan"]="%"+this.searchForm.xueyuan+"%"),this.searchForm.zhuanye&&(i["zhuanye"]="%"+this.searchForm.zhuanye+"%"),this.searchForm.nianji&&(i["nianji"]="%"+this.searchForm.nianji+"%"),this.searchForm.jiaocaibiaoti&&(i["jiaocaibiaoti"]="%"+this.searchForm.jiaocaibiaoti+"%"),this.searchForm.jiaocaifenlei&&(i["jiaocaifenlei"]="%"+this.searchForm.jiaocaifenlei+"%"),t={},!this.userid){e.next=14;break}return e.next=11,this.$api.page("jiaocaixinxi",i);case 11:t=e.sent,e.next=17;break;case 14:return e.next=16,this.$api.list("jiaocaixinxi",i);case 16:t=e.sent;case 17:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(t.data.list),a=Math.ceil(this.list.length/6),n=[],r=0;r<a;r++)n[r]=this.list.slice(6*r,6*(r+1));this.lists=n,0==t.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 25:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}()}};i.default=r},8437:function(e,i,t){"use strict";t.r(i);var a=t("515a"),n=t("9ca4");for(var r in n)"default"!==r&&function(e){t.d(i,e,(function(){return n[e]}))}(r);t("1bb9");var s,o=t("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"2d4e341a",null,!1,a["a"],s);i["default"]=c.exports},"9ca4":function(e,i,t){"use strict";t.r(i);var a=t("77e9"),n=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(i,e,(function(){return a[e]}))}(r);i["default"]=n.a},d7d7:function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2d4e341a]{min-height:calc(100vh - 44px);box-sizing:border-box}.category-one .tab[data-v-2d4e341a]{cursor:pointer;padding:0 %?20?% %?24?%;margin:0 %?8?%;color:#333;display:inline-block;font-size:%?28?%;border-color:#069ffa;line-height:%?160?%;border-radius:0;background:url(http://codegen.caihongy.cn/20221220/f084fc07fcb643b8b92acdba4752de67.png) no-repeat 0 0,url(http://codegen.caihongy.cn/20221220/1e7abd511d1147b8afeb6858d54a7aef.png) no-repeat 100% 0,url(http://codegen.caihongy.cn/20221220/d9457110e9a34ee49c5994b567d884a9.png) repeat-x;width:auto;border-width:0;border-style:solid;text-align:center;min-width:%?126?%;height:%?122?%}.category-one .tab.active[data-v-2d4e341a]{cursor:pointer;padding:0 %?20?%;margin:0 %?8?%;color:#333;font-weight:600;display:inline-block;font-size:%?28?%;border-color:#069ffa;line-height:%?160?%;border-radius:0;background:url(http://codegen.caihongy.cn/20221220/f084fc07fcb643b8b92acdba4752de67.png) no-repeat 0 0,url(http://codegen.caihongy.cn/20221220/1e7abd511d1147b8afeb6858d54a7aef.png) no-repeat 100% 0,url(http://codegen.caihongy.cn/20221220/d9457110e9a34ee49c5994b567d884a9.png) repeat-x;width:auto;border-width:0 0 0;border-style:solid;text-align:center;min-width:%?126?%;height:%?122?%}.category-two .tab[data-v-2d4e341a]{cursor:pointer;padding:0;margin:0 0 %?20?%;color:#555;display:inline-block;font-size:%?28?%;border-color:#cbf0f1;line-height:%?80?%;border-radius:0;background:#fff;width:100%;border-width:0 0 %?4?%;border-style:solid;text-align:center;height:%?84?%}.category-two .tab.active[data-v-2d4e341a]{cursor:pointer;padding:0;margin:0 0 %?20?%;color:#333;font-weight:600;display:inline-block;font-size:%?28?%;border-color:#92d5d6;line-height:%?80?%;border-radius:0;background:#ecfafb;width:100%;border-width:0 0 %?4?%;border-style:solid;text-align:center;height:%?84?%}.category-three .tab[data-v-2d4e341a]{cursor:pointer;padding:0;color:#fff;background:#deb887;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}.category-three .tab.active[data-v-2d4e341a]{cursor:pointer;padding:0;color:#fff;background:#000;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}',""]),e.exports=i},fed7:function(e,i,t){var a=t("d7d7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("e71a9e12",a,!0,{sourceMap:!1,shadowMode:!1})}}]);