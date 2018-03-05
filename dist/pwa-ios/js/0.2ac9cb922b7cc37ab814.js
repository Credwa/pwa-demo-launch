webpackJsonp([0],{"2NXm":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("TsE5"),o={components:{QBtn:a.b,QField:a.c,QInput:a.e,Notify:a.a},props:["customerData"],name:"Customer",data:function(){return{search:"",latitude:0,longitude:0,customer:{name:"",address:"",apartment:"",city:"",state:"",zip:"",notes:""}}},methods:{getLocation:function(){var t=this,e=this;return navigator.geolocation||this.$q.notify({color:"negative",textColor:"white",icon:"warning",message:"Geolocation not supported by your browser",position:"bottom",timeout:3e3}),navigator.geolocation.getCurrentPosition(function(t){e.latitude=t.coords.latitude,e.longitude=t.coords.longitude},function(e){console.log(e),t.$q.notify({color:"negative",textColor:"white",icon:"warning",message:"Unable to get location",position:"bottom",timeout:3e3})}),0}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer-info column items-center"},[n("q-field",{attrs:{"no-icon":""}},[n("q-input",{staticStyle:{width:"77vw","margin-bottom":"5%"},attrs:{"float-label":"Customer Name",disable:"",placeholder:"Customer Name"},model:{value:t.customerData.name,callback:function(e){t.$set(t.customerData,"name",e)},expression:"customerData.name"}})],1),t._v(" "),n("q-field",{attrs:{"no-icon":""}},[n("q-input",{staticStyle:{width:"77vw","margin-bottom":"3%"},attrs:{"float-label":"Address",disable:"",placeholder:"Address"},model:{value:t.customerData.address,callback:function(e){t.$set(t.customerData,"address",e)},expression:"customerData.address"}}),t._v(" "),n("q-input",{staticStyle:{width:"77vw","margin-bottom":"3%"},attrs:{"float-label":"Apartment/Suite",disable:"",placeholder:"Apartment #"},model:{value:t.customerData.apartment,callback:function(e){t.$set(t.customerData,"apartment",e)},expression:"customerData.apartment"}}),t._v(" "),n("div",{staticClass:"row"},[n("q-input",{staticStyle:{width:"30vw","margin-right":"1vw"},attrs:{"float-label":"City",disable:"",placeholder:"City"},model:{value:t.customerData.city,callback:function(e){t.$set(t.customerData,"city",e)},expression:"customerData.city"}}),t._v(" "),n("q-input",{staticStyle:{width:"25vw","margin-right":"1vw"},attrs:{"float-label":"State",disable:"",placeholder:"State"},model:{value:t.customerData.state,callback:function(e){t.$set(t.customerData,"state",e)},expression:"customerData.state"}}),t._v(" "),n("q-input",{staticStyle:{width:"20vw"},attrs:{"float-label":"Zip Code",disable:"",placeholder:"Zip Code"},model:{value:t.customerData.zip,callback:function(e){t.$set(t.customerData,"zip",e)},expression:"customerData.zip"}})],1)],1),t._v(" "),n("q-field",{attrs:{"no-icon":""}},[n("q-input",{staticStyle:{width:"77vw","margin-bottom":"10%","margin-top":"5%"},attrs:{"float-label":"Notes",type:"textarea",clearable:""},model:{value:t.customerData.notes,callback:function(e){t.$set(t.customerData,"notes",e)},expression:"customerData.notes"}})],1),t._v(" "),n("div",{staticClass:"row"},[n("q-btn",{staticStyle:{right:"5%"},attrs:{color:"info",icon:"edit_location"},on:{click:t.getLocation}},[t._v("Find Me")]),t._v(" "),n("q-input",{staticStyle:{width:"25vw"},attrs:{"float-label":"latitude",disable:""},model:{value:t.latitude,callback:function(e){t.latitude=e},expression:"latitude"}}),t._v(" "),n("q-input",{staticStyle:{width:"25vw",left:"5%"},attrs:{"float-label":"longitude",disable:""},model:{value:t.longitude,callback:function(e){t.longitude=e},expression:"longitude"}})],1),t._v(" "),n("q-btn",{staticStyle:{"margin-top":"5%",width:"150px"},attrs:{color:"secondary"}},[t._v("Save")])],1)},i=[];s._withStripped=!0;var r=n("XyMi"),l=!1;var c=function(t){l||n("Ss5p")},u=Object(r.a)(o,s,i,!1,c,"data-v-d26e7a24",null);u.options.__file="src\\components\\Customer.vue";var d=u.exports,m={components:{QSearch:a.r,QBtn:a.b,QField:a.c,QInput:a.e,Customer:d,QPopover:a.q,QList:a.m,QItem:a.f},name:"PageIndex",data:function(){return{search:"",showPopover:!0,customers:[{name:"Craig Edwards",address:"5512 111th st",apartment:"3D",city:"Flushing",state:"NY",zip:"11368",notes:""},{name:"App Tester",address:"54.164.87.50",apartment:"ec2",city:"aws",state:"amazon",zip:"01010",notes:"This is a test note"}],customerClicked:{}}},methods:{getCustomerData:function(){var t,e=this;t=this.customers.filter(function(t){return t.name===e.search})[0],this.customerClicked=t}},computed:{filteredCustomers:function(){var t=[];if(this.search.length>0){var e=new RegExp(""+this.search.toUpperCase());t=this.customers.filter(function(t){return!t.name.toUpperCase().search(e)})}return t}}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"column items-center",staticStyle:{top:"10vh"}},[n("div",{staticClass:"row",staticStyle:{"z-index":"10"}},[n("q-search",{staticStyle:{right:"10%",width:"60vw"},attrs:{"float-label":"Search Customer",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("q-popover",{staticStyle:{width:"60vw"}},[n("q-list",{attrs:{separator:"",link:""}},t._l(t.filteredCustomers,function(e){return n("q-item",{key:e.name+e.address,nativeOn:{click:function(n){t.search=e.name}}},[t._v("\n      "+t._s(e.name)+"\n    ")])}))],1)],1),t._v(" "),n("q-btn",{attrs:{color:"primary"},on:{click:t.getCustomerData}},[t._v("View")])],1),t._v(" "),n("customer",{attrs:{customerData:t.customerClicked}})],1)},v=[];p._withStripped=!0;var f=!1;var h=function(t){f||n("uT/2")},b=Object(r.a)(m,p,v,!1,h,"data-v-6be49aa4",null);b.options.__file="src\\pages\\index.vue";e.default=b.exports},J6Gz:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.customer-info[data-v-d26e7a24] {\n  width: 100vw;\n  background-color: #eeeeee;\n  position: relative;\n  bottom: 0;\n  min-height: 70vh;\n  margin-top: 5vh;\n  padding: 5%;\n}\n.coords[data-v-d26e7a24] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n",""])},Ss5p:function(t,e,n){var a=n("J6Gz");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("rjj0").default)("990c28b2",a,!1,{})},ZuWf:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"uT/2":function(t,e,n){var a=n("ZuWf");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("rjj0").default)("5f943846",a,!1,{})}});