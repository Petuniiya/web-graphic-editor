(function(e){function t(t){for(var c,o,s=t[0],i=t[1],l=t[2],u=0,b=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var c={},n={app:0},r=[];function o(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=c,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(a,c,function(t){return e[t]}.bind(null,c));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/web-graphic-editor/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3a19":function(e,t,a){e.exports=a.p+"img/profile.57e0f850.jpg"},4294:function(e,t,a){"use strict";a("974b")},"4eba":function(e,t,a){e.exports=a.p+"img/jacaranda-blooms.728f2790.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function n(e,t,a,n,r,o){var s=Object(c["resolveComponent"])("GraphicEditor");return Object(c["openBlock"])(),Object(c["createBlock"])(s)}var r=a("4eba"),o=a.n(r),s=a("3a19"),i=a.n(s),l=Object(c["withScopeId"])("data-v-caa65e84");Object(c["pushScopeId"])("data-v-caa65e84");var d={class:"container"},u=Object(c["createVNode"])("div",{class:"row justify-content-center"},[Object(c["createVNode"])("div",{class:"col-10 bg-purple text-white p-4"},[Object(c["createVNode"])("h5",{class:"font-weight-bold"},"Brightness and Contrast Developer Test"),Object(c["createVNode"])("h6",null,"18 Nov, 2020 - 19 Nov, 2020")])],-1),b=Object(c["createVNode"])("div",{class:"row mb-4 justify-content-center"},[Object(c["createVNode"])("div",{class:"col-10 d-flex justify-content-center no-padding"},[Object(c["createVNode"])("img",{src:o.a,alt:"",class:"img-fluid"}),Object(c["createVNode"])("span",{class:"position-absolute align-bottom"},[Object(c["createVNode"])("img",{src:i.a,alt:"avatar",class:"rounded-circle border",style:{width:"7em"}})])])],-1),p={class:"row my-2 justify-content-center"},f={class:"col-10"},v={class:"card m-2"},g={class:"card-body"},h=Object(c["createVNode"])("h5",{class:"text-green"},"Brightness",-1),m={class:"green"},j=Object(c["createVNode"])("p",{class:"text-small"},"Slide to adjust image brightness 🌞",-1),O={class:"row my-2 justify-content-center"},V={class:"col-10"},N={class:"card m-2"},x={class:"card-body"},y=Object(c["createVNode"])("h5",{class:"text-blue"},"Contrast",-1),w={class:"blue"},C=Object(c["createVNode"])("p",{class:"text-small"},"Slide to adjust image contrast 🌓",-1),I={class:"row my-2 justify-content-center"},k={class:"col-10"},S={class:"card m-2 mb-4"},B={class:"px-4 pt-4 pb-1"},D={class:"row"},P={class:"col-12"},_={ref:"canvas",class:"img-fluid"},T={class:"col-12 d-flex align-items-center justify-content-between text-uppercase font-weight-bold mt-3"},M={class:"input-group mr-4"},U=Object(c["createVNode"])("div",{class:"input-group-prepend"},[Object(c["createVNode"])("span",{class:"input-group-text",id:"basic-addon1"},"Name")],-1),A=Object(c["createVNode"])("label",{for:"file",class:"d-flex "},[Object(c["createVNode"])("span",{class:"fa fa-caret-up mr-2"}),Object(c["createTextVNode"])("Upload")],-1);Object(c["popScopeId"])();var E=l((function(e,t,a,n,r,o){var s=Object(c["resolveComponent"])("vue-slider");return Object(c["openBlock"])(),Object(c["createBlock"])("div",d,[u,b,Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("div",v,[Object(c["createVNode"])("div",g,[h,Object(c["createVNode"])("div",m,[Object(c["createVNode"])(s,Object(c["mergeProps"])({modelValue:r.valueBrightness,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.valueBrightness=e}),onChange:t[2]||(t[2]=function(e){return o.emitChange(r.valueBrightness,"brightness")})},r.options),null,16,["modelValue"])]),j])])])]),Object(c["createVNode"])("div",O,[Object(c["createVNode"])("div",V,[Object(c["createVNode"])("div",N,[Object(c["createVNode"])("div",x,[y,Object(c["createVNode"])("div",w,[Object(c["createVNode"])(s,Object(c["mergeProps"])({modelValue:r.valueContrast,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.valueContrast=e}),onChange:t[4]||(t[4]=function(e){return o.emitChange(r.valueContrast,"contrast")})},r.options),null,16,["modelValue"])]),C])])])]),Object(c["createVNode"])("div",I,[Object(c["createVNode"])("div",k,[Object(c["createVNode"])("div",S,[Object(c["createVNode"])("div",B,[Object(c["createVNode"])("div",D,[Object(c["createVNode"])("div",P,[Object(c["createVNode"])("canvas",_,null,512)]),Object(c["createVNode"])("div",T,[Object(c["createVNode"])("div",M,[U,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control text-uppercase font-weight-bold text-green d-block text-truncate",placeholder:"File name","aria-label":"file-name","aria-describedby":"basic-addon1","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.fileName=e}),disabled:""},null,512),[[c["vModelText"],r.fileName]])]),Object(c["createVNode"])("input",{type:"file",id:"file",onChange:t[6]||(t[6]=function(){return o.loadImage.apply(o,arguments)})},null,32),A])])])])])])])})),G=(a("b0c0"),a("4971")),F=a.n(G),J=(a("24df"),{name:"GraphicEditor",props:{},components:{VueSlider:F.a},data:function(){return{imageData:"",fileName:"",valueBrightness:0,valueContrast:0,options:{min:-100,max:100,interval:1,show:!0,speed:1,disabled:!0},cnv:null,ctx:null}},methods:{getCanvas:function(){this.cnv=this.$refs.canvas,this.ctx=this.cnv.getContext("2d")},loadImage:function(e){var t=this,a=e.target;if(a.files&&a.files[0]){var c=new FileReader;c.onload=function(e){t.imageData=e.target.result,t.fileName=a.files[0].name,t.imgToCanvas(t.imageData),t.options.disabled=!1},c.readAsDataURL(a.files[0])}},imgToCanvas:function(e){var t=this,a=new Image;a.src=e,a.onload=function(){t.ctx.drawImage(a,0,0,t.cnv.width,t.cnv.height)}},emitChange:function(e,t){switch(t){case"brightness":this.brightnessImage(e);break;case"contrast":this.contrastImage(e);break;default:break}},contrastImage:function(e){for(var t=this.ctx.getImageData(0,0,this.cnv.width,this.cnv.height),a=t.data,c=259*(e+255)/(255*(259-e)),n=0;n<a.length;n+=4)a[n]=c*(a[n]-128)+128,a[n+1]=c*(a[n+1]-128)+128,a[n+2]=c*(a[n+2]-128)+128;this.ctx.putImageData(t,0,0)},brightnessImage:function(e){for(var t=this.ctx.getImageData(0,0,this.cnv.width,this.cnv.height),a=t.data,c=0;c<a.length;c+=4)a[c]+=e/100*255,a[c+1]+=e/100*255,a[c+2]+=e/100*255;this.ctx.putImageData(t,0,0)}},mounted:function(){this.getCanvas()}});a("4294");J.render=E,J.__scopeId="data-v-caa65e84";var R=J,L={name:"App",components:{GraphicEditor:R}};a("64be");L.render=n;var $=L;a("4989"),a("ab8b");Object(c["createApp"])($).mount("#app")},"64be":function(e,t,a){"use strict";a("c894")},"974b":function(e,t,a){},c894:function(e,t,a){}});
//# sourceMappingURL=app.8dbd7593.js.map