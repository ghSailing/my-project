webpackJsonp([48],{Ba63:function(e,t,r){"use strict";function a(e){r("GvVs")}Object.defineProperty(t,"__esModule",{value:!0});var l=[{key:"CN",display_name:"预发布"},{key:"US",display_name:"已发布"},{key:"JP",display_name:"已过期"}],s={props:["data"],data:function(){return{releaseStatus:l,ruleForm:{platform:"",releaseStatus:"",url:"",versioncode:"",versionnum:"",bigcode:"",smallcode:"",content:"",menu:"",ctime:"",gtime:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},created:function(){this.ruleForm={platform:this.data.platform,releaseStatus:this.data.status,url:this.data.url,versioncode:this.data.versioncode,versionnum:this.data.versionnum,bigcode:this.data.bigcode,smallcode:this.data.smallcode,content:"",menu:"",ctime:this.data.ctime,gtime:this.data.gtime}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},backPrevPage:function(){this.$emit("releaseUpdate",!1)}}},o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"title-show-info"},[r("el-button",{attrs:{icon:"el-icon-arrow-left"},on:{click:function(t){e.backPrevPage()}}}),e._v(" "),"add"===e.data.r_status?r("span",[e._v("新增版本")]):r("span",[e._v("编辑版本")])],1),e._v(" "),r("div",{staticClass:"addAndUpdate_container"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[r("div",{staticClass:"addAndUpdate_title"},[r("span",[e._v("基本信息")])]),e._v(" "),r("div",{staticClass:"addAndUpdate_content"},[r("el-form-item",{attrs:{label:"平台："}},[r("el-radio-group",{staticStyle:{"padding-top":"12px"},model:{value:e.ruleForm.platform,callback:function(t){e.$set(e.ruleForm,"platform",t)},expression:"ruleForm.platform"}},[r("el-radio",{attrs:{label:"android",value:"android"}}),e._v(" "),r("el-radio",{attrs:{label:"ios",value:"ios"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"发布状态："}},[r("el-select",{staticClass:"filter-item",staticStyle:{"max-width":"250px",width:"100%"},attrs:{clearable:"",placeholder:"请选择",disabled:"edit"===this.data.r_status},model:{value:e.ruleForm.releaseStatus,callback:function(t){e.$set(e.ruleForm,"releaseStatus",t)},expression:"ruleForm.releaseStatus"}},e._l(e.releaseStatus,function(e){return r("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"URL："}},[r("el-input",{model:{value:e.ruleForm.url,callback:function(t){e.$set(e.ruleForm,"url",t)},expression:"ruleForm.url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"版本代号："}},[r("el-input",{model:{value:e.ruleForm.versioncode,callback:function(t){e.$set(e.ruleForm,"versioncode",t)},expression:"ruleForm.versioncode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"版本标识号："}},[r("el-input",{model:{value:e.ruleForm.versionnum,callback:function(t){e.$set(e.ruleForm,"versionnum",t)},expression:"ruleForm.versionnum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最大版本号："}},[r("el-input",{model:{value:e.ruleForm.bigcode,callback:function(t){e.$set(e.ruleForm,"bigcode",t)},expression:"ruleForm.bigcode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"最小版本号："}},[r("el-input",{model:{value:e.ruleForm.smallcode,callback:function(t){e.$set(e.ruleForm,"smallcode",t)},expression:"ruleForm.smallcode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"更新内容："}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注："}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.menu,callback:function(t){e.$set(e.ruleForm,"menu",t)},expression:"ruleForm.menu"}})],1),e._v(" "),"edit"===e.data.r_status?r("el-form-item",{attrs:{label:"创建时间："}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.ctime,callback:function(t){e.$set(e.ruleForm,"ctime",t)},expression:"ruleForm.ctime"}})],1):e._e(),e._v(" "),"edit"===e.data.r_status?r("el-form-item",{attrs:{label:"更新时间："}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.gtime,callback:function(t){e.$set(e.ruleForm,"gtime",t)},expression:"ruleForm.gtime"}})],1):e._e()],1),e._v(" "),r("div",{staticClass:"addAndUpdate_title"},[r("span",[e._v("执行操作")])]),e._v(" "),r("div",{staticClass:"addAndUpdate_footer"},[r("el-form-item",["add"===e.data.r_status?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("新增")]):r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存修改")])],1)],1)])],1)])},i=[],n={render:o,staticRenderFns:i},u=n,m=r("VU/8"),d=a,c=m(s,u,!1,d,"data-v-6e11356c",null);t.default=c.exports},GvVs:function(e,t,r){var a=r("eIMm");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("760e3eec",a,!0)},eIMm:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".addAndUpdate_content[data-v-6e11356c],.addAndUpdate_footer[data-v-6e11356c]{padding:10px 50px}",""])}});