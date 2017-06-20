/*!
* Vue Material v0.7.2
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=467)})({0:function(t,e){t.exports=function(t,e,n,r,i){var o,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var a;if(i?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=a):n&&(a=n),a){var l=c.functional,f=l?c.render:c.beforeCreate;l?c.render=function(t,e){return a.call(e),f(t,e)}:c.beforeCreate=f?[].concat(f,a):[a]}return{esModule:o,exports:s,options:c}}},1:function(t,e,n){"use strict";function r(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||r(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return r(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=r,t.exports=e.default},101:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-select",s.default),t.component("md-option",c.default),t.material.styles.push(l.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(346),s=r(o),u=n(345),c=r(u),a=n(283),l=r(a);t.exports=e.default},11:function(t,e,n){var r=n(9),i=n(17);t.exports=n(3)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},13:function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},14:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},16:function(t,e,n){var r=n(2),i=n(4),o=n(28),s=n(11),u=function(t,e,n){var c,a,l,f=t&u.F,p=t&u.G,d=t&u.S,h=t&u.P,m=t&u.B,v=t&u.W,x=p?i:i[e]||(i[e]={}),_=x.prototype,y=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(a=!f&&y&&void 0!==y[c])&&c in x||(l=a?y[c]:n[c],x[c]=p&&"function"!=typeof y[c]?n[c]:m&&a?o(l,r):v&&y[c]==l?(function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((x.virtual||(x.virtual={}))[c]=l,t&u.R&&_&&!_[c]&&s(_,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},17:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},176:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),i=(function(t){return t&&t.__esModule?t:{default:t}})(r);e.default={name:"md-option",props:{value:[String,Boolean,Number,Object]},data:function(){return{parentSelect:{},check:!1,index:0}},computed:{isSelected:function(){if(this.value&&this.parentSelect.value){var t=this.value.toString();return this.parentSelect.multiple?this.parentSelect.value.indexOf(t)>=0:this.value&&this.parentSelect.value&&t===this.parentSelect.value.toString()}return!1},classes:function(){return{"md-selected":this.isSelected,"md-checked":this.check}}},methods:{isMultiple:function(){return this.parentSelect.multiple},setParentOption:function(){this.isMultiple()?this.check=!this.check:this.parentSelect.selectOption(this.value,this.$refs.item.textContent,this.$el)},selectOption:function(t){this.disabled||(this.setParentOption(),this.$emit("selected",t))}},watch:{isSelected:function(t){this.isMultiple()&&(this.check=t)},check:function(t){t?this.parentSelect.selectMultiple(this.index,this.value,this.$refs.item.textContent):this.parentSelect.selectMultiple(this.index)}},mounted:function(){if(this.parentSelect=(0,i.default)(this.$parent,"md-select"),this.parentContent=(0,i.default)(this.$parent,"md-menu-content"),!this.parentSelect)throw new Error("You must wrap the md-option in a md-select");this.parentSelect.optionsAmount++,this.index=this.parentSelect.optionsAmount,this.parentSelect.multipleOptions[this.index]={},this.parentSelect.options[this.index]=this,(this.isMultiple()&&this.parentSelect.value.indexOf(this.value)>=0||this.parentSelect.value===this.value)&&this.setParentOption()},beforeDestroy:function(){this.parentSelect&&(delete this.parentSelect.options[this.index],delete this.parentSelect.multipleOptions[this.index])}},t.exports=e.default},177:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),o=r(i),s=n(1),u=r(s),c=n(10),a=r(c),l=n(66),f=r(l);e.default={name:"md-select",props:{name:String,id:String,required:Boolean,multiple:Boolean,value:[String,Number,Array],disabled:Boolean,placeholder:String,mdMenuClass:String,mdMenuOptions:Object},mixins:[u.default],data:function(){return{lastSelected:null,selectedValue:null,selectedText:null,multipleOptions:{},options:{},optionsAmount:0}},computed:{classes:function(){return{"md-disabled":this.disabled,"md-select-icon":this.hasIcon}},contentClasses:function(){return this.multiple?"md-multiple "+this.mdMenuClass:this.mdMenuClass},hasIcon:function(){return this.$slots.icon},valueStyle:function(){return this.hasIcon?{display:"none"}:{}}},watch:{value:function(t){this.setTextAndValue(t),this.multiple&&this.selectOptions(t)},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()}},methods:{onOpen:function(){this.lastSelected&&this.lastSelected.scrollIntoViewIfNeeded(!0),this.$emit("opened")},setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},selectOptions:function(t){var e=this,n=(0,o.default)(this.options).map((function(t){return e.options[t]}));n&&n.length&&n.filter((function(e){return-1!==t.indexOf(e.value)})).forEach((function(t){t.check=!0}))},getSingleValue:function(t){var e=this,n={};return(0,o.default)(this.options).forEach((function(r){var i=e.options[r];i.value===t&&(n.value=t,n.text=i.$refs.item.textContent,n.el=i.$refs.item)})),n},getMultipleValue:function(t){var e=this;if((0,f.default)(this.value)){var n=[];return t.forEach((function(t){(0,o.default)(e.options).forEach((function(r){var i=e.options[r];if(i.value===t){var o=i.$refs.item.textContent;e.multipleOptions[r]={value:t,text:o},n.push(o)}}))})),{value:t,text:n.join(", ")}}return{}},setTextAndValue:function(t){var e=this.multiple?this.getMultipleValue(t):this.getSingleValue(t);this.selectedValue=e.value,this.selectedText=e.text,this.lastSelected=e.el,this.parentContainer&&this.parentContainer.setValue(this.selectedText)},changeValue:function(t){this.$emit("input",t),this.$emit("change",t),this.$emit("selected",t)},selectMultiple:function(t,e,n){var r=[];this.multipleOptions[t]={value:e,text:n};for(var i in this.multipleOptions)this.multipleOptions.hasOwnProperty(i)&&this.multipleOptions[i].value&&r.push(this.multipleOptions[i].value);this.changeValue(r)},selectOption:function(t,e,n){this.lastSelected=n,this.selectedText=e,this.setTextAndValue(t),this.changeValue(t)}},mounted:function(){this.parentContainer=(0,a.default)(this.$parent,"md-input-container"),this.parentContainer&&(this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.parentContainer.hasSelect=!0),this.setTextAndValue(this.value)},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.setValue(""),this.parentContainer.hasSelect=!1)}},t.exports=e.default},18:function(t,e,n){var r=n(31),i=n(21);t.exports=Object.keys||function(t){return r(t,i)}},19:function(t,e,n){var r=n(22)("keys"),i=n(20);t.exports=function(t){return r[t]||(r[t]=i(t))}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},21:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},22:function(t,e,n){var r=n(2),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},23:function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e,n){var r=n(6),i=n(2).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},258:function(t,e){},26:function(t,e,n){var r=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},27:function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},28:function(t,e,n){var r=n(33);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},283:function(t,e){t.exports=".THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-select-content .md-menu-item.md-selected,.THEME_NAME.md-select-content .md-menu-item.md-checked{color:PRIMARY-COLOR}\n"},29:function(t,e,n){var r=n(15),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},3:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,e,n){t.exports=!n(3)&&!n(5)((function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a}))},31:function(t,e,n){var r=n(8),i=n(7),o=n(34)(!1),s=n(19)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),c=0,a=[];for(n in u)n!=s&&r(u,n)&&a.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~o(a,n)||a.push(n));return a}},33:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},34:function(t,e,n){var r=n(7),i=n(29),o=n(35);t.exports=function(t){return function(e,n,s){var u,c=r(e),a=i(c.length),l=o(s,a);if(t&&n!=n){for(;a>l;)if((u=c[l++])!=u)return!0}else for(;a>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},345:function(t,e,n){var r=n(0)(n(176),n(422),null,null,null);t.exports=r.exports},346:function(t,e,n){function r(t){n(258)}var i=n(0)(n(177),n(436),r,null,null);t.exports=i.exports},35:function(t,e,n){var r=n(15),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},38:function(t,e,n){t.exports={default:n(43),__esModule:!0}},4:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},422:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-menu-item",{staticClass:"md-option",class:t.classes,attrs:{tabindex:"-1"},nativeOn:{click:function(e){t.selectOption(e)}}},[t.parentSelect.multiple?n("md-checkbox",{staticClass:"md-primary",model:{value:t.check,callback:function(e){t.check=e},expression:"check"}},[n("span",{ref:"item"},[t._t("default")],2)]):n("span",{ref:"item"},[t._t("default")],2)],1)},staticRenderFns:[]}},43:function(t,e,n){n(48),t.exports=n(4).Object.keys},436:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-select",class:[t.themeClass,t.classes]},[n("md-menu",t._b({attrs:{"md-close-on-select":!t.multiple},on:{opened:function(e){t.$emit("open")},closed:function(e){t.$emit("close")}}},"md-menu",t.mdMenuOptions),[t._t("icon"),t._v(" "),n("span",{ref:"value",staticClass:"md-select-value",style:t.valueStyle,attrs:{"md-menu-trigger":""}},[t._v(t._s(t.selectedText||t.placeholder))]),t._v(" "),n("md-menu-content",{staticClass:"md-select-content",class:[t.themeClass,t.contentClasses]},[t._t("default")],2)],2),t._v(" "),n("select",{attrs:{name:t.name,id:t.id,required:t.required,disabled:t.disabled,tabindex:"-1"}},[t.multiple?t._e():n("option",{attrs:{selected:"true"},domProps:{value:t.selectedValue}},[t._v(t._s(t.selectedText))]),t._v(" "),t._l(t.multipleOptions,(function(e){return e.value?n("option",{attrs:{selected:"true"},domProps:{value:e.value}},[t._v(t._s(e.text))]):t._e()}))],2)],1)},staticRenderFns:[]}},46:function(t,e,n){var r=n(16),i=n(4),o=n(5);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*o((function(){n(1)})),"Object",s)}},467:function(t,e,n){t.exports=n(101)},48:function(t,e,n){var r=n(23),i=n(18);n(46)("keys",(function(){return function(t){return i(r(t))}}))},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},6:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},66:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.constructor===Array};e.default=r,t.exports=e.default},7:function(t,e,n){var r=n(26),i=n(14);t.exports=function(t){return r(i(t))}},8:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},9:function(t,e,n){var r=n(13),i=n(30),o=n(27),s=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}}})}));