(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["quoteSignage"],{"12f2":function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"get-quote"},[o("Breadcrumb"),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-6 col-md-6"},[o("label",{attrs:{for:"pr-p"}},[t._v("Step 1: Select A Print Product")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.product,expression:"product"}],staticClass:"form-control print-product",attrs:{id:"pr-p"},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.product=a.target.multiple?s:s[0]},t.changeRoute]}},t._l(t.products,(function(a){return o("option",{key:a,domProps:{value:a.toLocaleLowerCase().replace(" ","-")}},[t._v(t._s(a))])})),0)])]),t._m(0),o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[o("b-input-group",[o("b-input-group-prepend",[o("span",{staticClass:"input-group-text"},[o("img",{attrs:{src:s("408f"),alt:"User Icon"}})])]),o("b-form-input",{staticClass:"LoginInput",attrs:{placeholder:"Full Name*"}})],1)],1),o("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[o("b-input-group",[o("b-input-group-prepend",[o("span",{staticClass:"input-group-text"},[o("img",{attrs:{src:s("b022"),alt:"Email Icon"}})])]),o("b-form-input",{staticClass:"LoginInput",attrs:{placeholder:"Email*"}})],1)],1),o("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[o("b-input-group",[o("b-input-group-prepend",[o("span",{staticClass:"input-group-text"},[o("img",{attrs:{src:s("9fd7"),alt:"Company Icon"}})])]),o("b-form-input",{staticClass:"LoginInput",attrs:{placeholder:"Company Name"}})],1)],1),o("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[o("b-input-group",[o("b-input-group-prepend",[o("span",{staticClass:"input-group-text"},[o("img",{attrs:{src:s("01a6"),alt:"Phone Icon"}})])]),o("b-form-input",{staticClass:"LoginInput",attrs:{placeholder:"Phone"}})],1)],1),o("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[o("b-input-group",[o("b-input-group-prepend",[o("span",{staticClass:"input-group-text"},[o("img",{attrs:{src:s("ee41"),alt:"Deliver Icon"}})])]),o("b-form-input",{staticClass:"LoginInput",attrs:{placeholder:"Deliver To"}})],1)],1),t._m(1)]),t._m(2),t._m(3),o("div",{staticClass:"row bg-white mt-5"},[o("div",{staticClass:"col-xl-2 col-12 col-md-2 center-xs"},[o("div",{staticClass:"img-cont text-center"},[o("img",{ref:"preview",staticClass:"img-fluid uplaod-img",attrs:{src:s("894f"),alt:"asd"},on:{click:function(a){return t.$refs.file.click()}}}),o("p",{staticClass:"mt-3 text-center"},[t._v("Upload Your Image")])]),o("input",{ref:"file",staticClass:"d-none",attrs:{type:"file",accept:"image/*"},on:{change:function(a){return t.handleFileUpload()}}})]),t._m(4)]),t._m(5)])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row pt-5"},[s("div",{staticClass:"col-xl-12"},[s("p",{staticClass:"mb-1"},[s("label",{attrs:{for:""}},[t._v("How Can We Reach You")]),t._v(" ( Your Contact Information Will Only Be Used For This Quote )")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-0"},[s("b",[t._v("How May We Contact You")])]),s("div",{staticClass:"group d-flex"},[s("div",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",checked:"",name:"contact-type",id:"phone"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"phone"}},[t._v("Phone")])]),s("div",{staticClass:"custom-control custom-checkbox ml-2"},[s("input",{staticClass:"custom-control-input",attrs:{type:"radio",name:"contact-type",id:"email"}}),s("label",{staticClass:"custom-control-label",attrs:{for:"email"}},[t._v("Email")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-xl-12 mb-3"},[s("label",{attrs:{for:""}},[t._v("Step 2: Select Product Options")])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Material Type")]),s("select",{staticClass:"form-control print-product",attrs:{id:"finishing"}},[s("option",{attrs:{value:""}},[t._v("Type1")]),s("option",{attrs:{value:""}},[t._v("Type2")]),s("option",{attrs:{value:""}},[t._v("Type3")]),s("option",{attrs:{value:""}},[t._v("Type4")])])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Shape")]),s("select",{staticClass:"form-control print-product",attrs:{id:"quantity"}},[s("option",{attrs:{value:""}},[t._v("Shape1")]),s("option",{attrs:{value:""}},[t._v("Shape2")]),s("option",{attrs:{value:""}},[t._v("Shape3")]),s("option",{attrs:{value:""}},[t._v("Shape4")])])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Print Side*")]),s("select",{staticClass:"form-control print-product",attrs:{id:"stock"}},[s("option",{attrs:{value:"0"}},[t._v("Side1")]),s("option",{attrs:{value:"0"}},[t._v("Side2")]),s("option",{attrs:{value:"0"}},[t._v("Side3")]),s("option",{attrs:{value:"0"}},[t._v("Side4")])])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Thickness")]),s("select",{staticClass:"form-control print-product",attrs:{id:"colors"}},[s("option",{attrs:{value:""}},[t._v("2")]),s("option",{attrs:{value:""}},[t._v("4")]),s("option",{attrs:{value:""}},[t._v("6")]),s("option",{attrs:{value:""}},[t._v("8")])])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Size*")]),s("select",{staticClass:"form-control print-product",attrs:{id:"size"}},[s("option",{attrs:{value:""}},[t._v("1300*100")]),s("option",{attrs:{value:""}},[t._v("1300*1300")]),s("option",{attrs:{value:""}},[t._v("1600*1600")]),s("option",{attrs:{value:""}},[t._v("2100*1700")])])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Finishing")]),s("select",{staticClass:"form-control print-product",attrs:{id:"duration"}},[s("option",{attrs:{value:""}},[t._v("100")]),s("option",{attrs:{value:""}},[t._v("1000")]),s("option",{attrs:{value:""}},[t._v("10000")]),s("option",{attrs:{value:""}},[t._v("100000")])])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Quantity")]),s("select",{staticClass:"form-control print-product",attrs:{id:"duration"}},[s("option",{attrs:{value:""}},[t._v("100")]),s("option",{attrs:{value:""}},[t._v("1000")]),s("option",{attrs:{value:""}},[t._v("10000")]),s("option",{attrs:{value:""}},[t._v("100000")])])]),s("div",{staticClass:"col-xl-6 col-md-6 mb-3"},[s("p",{staticClass:"mb-1"},[t._v("Production Time")]),s("div",{staticClass:"radio-toolbar"},[s("input",{attrs:{type:"radio",id:"radioApple",name:"radioFruit",value:"apple",checked:""}}),s("label",{attrs:{for:"radioApple"}},[t._v(" Regular "),s("br"),s("small",[t._v("4-6 Business Days")])]),s("input",{attrs:{type:"radio",id:"radioBanana",name:"radioFruit",value:"banana"}}),s("label",{staticClass:"text-center ml-1",attrs:{for:"radioBanana"}},[t._v(" Rush "),s("br"),s("small",[t._v("Not Available")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-xl-5 col-md-5 col-9"},[s("p",[s("label",{staticClass:"sub",attrs:{for:""}},[t._v("Subtotal (excludes shipping): ")])])]),s("div",{staticClass:"col-xl-3 col-md-3 col-3"},[s("p",{staticClass:"sub"},[s("b",[t._v("$150")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-xl-10 col-12 col-md-10 center-xs"},[s("p",[t._v("Accepted File Format")]),s("div",{staticClass:"detail-box pl-3"},[s("p",[t._v("Bleed: 0.125")]),s("p",[t._v("Resolution: 300 dpi")]),s("p",[t._v("Color Mode: CMYK")]),s("p",[t._v("File Type: PDF, EPS, TIFF & All(created outline)")]),s("p",[t._v("Maxiumum Upload Size: 10 MB")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row bg-white mt-3"},[s("div",{staticClass:"col-xl-12 text-center"},[s("button",{staticClass:"submit filled btn"},[t._v("Submit")])])])}],e=(s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("2fbc")),l=s("9a29"),c={name:"GetQuoteSignage",components:{Breadcrumb:e["a"]},data:function(){return{title:"Get Quote",products:l["signage"],product:"",image:""}},created:function(){this.changeProduct(this.$route.params.product)},methods:{changeProduct:function(t){this.product=t},changeRoute:function(){this.$router.push("/banners/get-quote/".concat(this.product))},handleFileUpload:function(){this.image=this.$refs.file.files[0],this.$refs.preview.setAttribute("src",URL.createObjectURL(this.image))}},watch:{$route:function(t,a){this.changeProduct(this.$route.params.product)}}},r=c,n=(s("3a0f"),s("2877")),p=Object(n["a"])(r,o,i,!1,null,"b0c9566e",null);a["default"]=p.exports},"3a0f":function(t,a,s){"use strict";var o=s("68ff"),i=s.n(o);i.a},"68ff":function(t,a,s){}}]);
//# sourceMappingURL=quoteSignage.e5061495.js.map