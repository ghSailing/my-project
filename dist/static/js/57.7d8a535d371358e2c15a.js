webpackJsonp([57],{"0Sek":function(e,r,t){r=e.exports=t("FZ+f")(!1),r.push([e.i,".addAndUpdate_content[data-v-cc53b40e],.addAndUpdate_footer[data-v-cc53b40e]{padding:10px 50px}.el-radio-group[data-v-cc53b40e]{padding-top:12px}.upload-demo[data-v-cc53b40e]{padding-top:5px}",""])},Av7b:function(e,r,t){var a=t("0Sek");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("42934fd4",a,!0)},SEGS:function(e,r,t){"use strict";function a(e){t("Av7b")}Object.defineProperty(r,"__esModule",{value:!0});var o={props:["data"],data:function(){return{fileList:[],ruleForm:{radio:"单件入库",exchange:"",num:"",book:"",id:"",gy:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(e,r){console.log(e,r)},handlePreview:function(e){console.log(e)},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},backPrevPage:function(){this.$emit("sl_add",!1)}}},l=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"title-show-info"},[t("el-button",{attrs:{icon:"el-icon-arrow-left"},on:{click:function(r){e.backPrevPage()}}}),e._v(" "),t("span",[e._v("新增入库")])],1),e._v(" "),t("div",{staticClass:"addAndUpdate_container"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[t("div",{staticClass:"addAndUpdate_title"},[t("span",[e._v("基本信息")])]),e._v(" "),t("div",{staticClass:"addAndUpdate_content"},[t("el-form-item",{attrs:{label:"操作方式："}},[t("el-radio-group",{model:{value:e.ruleForm.radio,callback:function(r){e.$set(e.ruleForm,"radio",r)},expression:"ruleForm.radio"}},[t("el-radio",{attrs:{label:"单件入库"}}),e._v(" "),t("el-radio",{attrs:{label:"批量入库"}})],1)],1),e._v(" "),"单件入库"==e.ruleForm.radio?t("div",[t("el-form-item",{attrs:{label:"门店端口号："}},[t("el-input",{model:{value:e.ruleForm.exchange,callback:function(r){e.$set(e.ruleForm,"exchange",r)},expression:"ruleForm.exchange"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"商品条码："}},[t("el-input",{model:{value:e.ruleForm.num,callback:function(r){e.$set(e.ruleForm,"num",r)},expression:"ruleForm.num"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"入库数量："}},[t("el-input",{model:{value:e.ruleForm.book,callback:function(r){e.$set(e.ruleForm,"book",r)},expression:"ruleForm.book"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"入库单号："}},[t("el-input",{model:{value:e.ruleForm.id,callback:function(r){e.$set(e.ruleForm,"id",r)},expression:"ruleForm.id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"供应商："}},[t("el-input",{model:{value:e.ruleForm.gy,callback:function(r){e.$set(e.ruleForm,"gy",r)},expression:"ruleForm.gy"}})],1)],1):e._e(),e._v(" "),"批量入库"==e.ruleForm.radio?t("div",[t("el-form-item",{attrs:{label:"商品数据："}},[t("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"auto-upload":!1,limit:1}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"success"},slot:"trigger"},[e._v("选择文件")]),e._v(" "),t("el-button",{attrs:{size:"small",type:"success"}},[e._v("下载模板")])],1)],1)],1):e._e()],1),e._v(" "),t("div",{staticClass:"addAndUpdate_title"},[t("span",[e._v("执行操作")])]),e._v(" "),t("div",{staticClass:"addAndUpdate_footer"},[t("el-form-item",["单件入库"==e.ruleForm.radio?t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("新增")]):"批量入库"==e.ruleForm.radio?t("el-button",{attrs:{type:"primary"},on:{click:e.submitUpload}},[e._v("新增")]):e._e()],1)],1)])],1)])},i=[],s={render:l,staticRenderFns:i},n=s,d=t("VU/8"),u=a,c=d(o,n,!1,u,"data-v-cc53b40e",null);r.default=c.exports}});