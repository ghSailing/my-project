webpackJsonp([76],{"0ciw":function(e,a,t){"use strict";function l(e){t("XUK8")}Object.defineProperty(a,"__esModule",{value:!0});var i=t("hDQj"),n=t.n(i),s=[{key:"1",display_name:"平价商品"},{key:"2",display_name:"积分换购"},{key:"3",display_name:"易物置换"},{key:"4",display_name:"任务商品"}],d=[{key:"1",display_name:"品类1"},{key:"2",display_name:"品类2"}],r=[{key:"1",display_name:"供应商1"},{key:"2",display_name:"供应商2"}],o={data:function(){return{a4:n.a,gy:r,ordertype:d,calendarTypeOptions:s,orderInfo:[{key:"ordertype",name:"商品品类",val:""},{key:"gy",name:"供货商",val:""},{key:"orderName",name:"商品名称",val:""},{key:"payMethod",name:"商品条码",val:""},{key:"memberAccount",name:"商品规格",val:""},{key:"orderprice",name:"商品进价",val:""}],saleInfo:[{key:"saleStatus",name:"销售类型",val:"平价商品"},{key:"gy",name:"销售单价",val:""},{key:"gy",name:"销售单价",val:""},{key:"orderAmount",name:"积分奖励",val:""},{key:"ordertype",name:"返还储值",val:""},{key:"payMethod",name:"任务奖励",val:""}],ruleForm:{taskid:"",userphone:"",starttime:"",zhorderid:"",status:"",taskamount:"",iffinish:"",rewardamount:""}}},created:function(){},methods:{}},c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"addAndUpdate_container",staticStyle:{"padding-top":"40px"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"110px"}},[t("div",{staticClass:"addAndUpdate_title height_add_b"},[t("span",[e._v("基本信息")])]),e._v(" "),t("div",{staticClass:"addAndUpdate_content"},e._l(e.orderInfo,function(a){return t("div",["ordertype"==a.key?t("div",[t("el-form-item",{staticClass:"label_inital",attrs:{label:a.name+"："}},[t("el-select",{staticClass:"filter-item",staticStyle:{"max-width":"250px",width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"item.value"}},e._l(e.ordertype,function(e){return t("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1)],1):"gy"==a.key?t("div",[t("el-form-item",{staticClass:"label_inital",attrs:{label:a.name+"："}},[t("el-select",{staticClass:"filter-item",staticStyle:{"max-width":"250px",width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"item.value"}},e._l(e.gy,function(e){return t("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1)],1):t("div",[t("el-form-item",{staticClass:"label_inital",attrs:{label:a.name+"："}},[t("el-input",{model:{value:a.val,callback:function(t){e.$set(a,"val",t)},expression:"item.val"}})],1)],1)])})),e._v(" "),t("div",{staticClass:"addAndUpdate_title height_add_b"},[t("span",[e._v("商品销售")])]),e._v(" "),t("div",{staticClass:"addAndUpdate_content"},e._l(e.saleInfo,function(a){return t("div",["saleStatus"==a.key?t("div",[t("el-form-item",{staticClass:"label_inital",attrs:{label:a.name+"："}},[t("el-select",{staticClass:"filter-item",staticStyle:{"max-width":"250px",width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"sale.value"}},e._l(e.calendarTypeOptions,function(e){return t("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1)],1):t("div",[t("el-form-item",{staticClass:"label_inital",attrs:{label:a.name+"："}},[t("el-input",{model:{value:a.val,callback:function(t){e.$set(a,"val",t)},expression:"sale.val"}})],1)],1)])})),e._v(" "),t("div",{staticClass:"addAndUpdate_title height_add_b"},[t("span",[e._v("商品图片")])]),e._v(" "),t("div",{staticClass:"addAndUpdate_content",staticStyle:{"padding-left":"70px"}},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[t("img",{attrs:{src:e.a4,alt:"",width:"240"}})])],1)],1),e._v(" "),t("div",{staticClass:"addAndUpdate_title"},[t("span",[e._v("执行操作")])]),e._v(" "),t("div",{staticClass:"addAndUpdate_footer",staticStyle:{"padding-left":"70px"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.submitForm("ruleForm")}}},[e._v("新增")])],1)])],1)])},m=[],p={render:c,staticRenderFns:m},v=p,y=t("VU/8"),u=l,_=y(o,v,!1,u,"data-v-3229bcbc",null);a.default=_.exports},OlIB:function(e,a,t){a=e.exports=t("FZ+f")(!1),a.push([e.i,".height_add_b[data-v-3229bcbc]{margin:10px 0}.label_inital .el-form-item__label[data-v-3229bcbc]{width:100px!important}.label_inital .el-form-item__content[data-v-3229bcbc]{margin-left:100px!important}.addAndUpdate_content .el-input[data-v-3229bcbc]{width:100%;max-width:250px;float:left}.el-select[data-v-3229bcbc]{display:inherit}",""])},XUK8:function(e,a,t){var l=t("OlIB");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);t("rjj0")("448ffb34",l,!0)}});