function t(t,e,n,r){return new(n||(n=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}c((r=r.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var e,n=(e=import.meta.url,async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n,r,i=t;i.ready=new Promise(((t,e)=>{n=t,r=e}));var a,o,s,c=Object.assign({},i),_="object"==typeof window,u="function"==typeof importScripts,A="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,f="";if(A){const{createRequire:t}=await Promise.resolve().then((()=>E));var h=t(import.meta.url),l=h("fs"),R=h("path");f=u?R.dirname(f)+"/":h("url").fileURLToPath(new URL("./",import.meta.url)),a=(t,e)=>(t=F(t)?new URL(t):R.normalize(t),l.readFileSync(t,e?void 0:"utf8")),s=t=>{var e=a(t,!0);return e.buffer||(e=new Uint8Array(e)),e},o=function(t,e,n){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];t=F(t)?new URL(t):R.normalize(t),l.readFile(t,r?void 0:"utf8",((t,i)=>{t?n(t):e(r?i.buffer:i)}))},!i.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),i.inspect=()=>"[Emscripten Module object]"}else(_||u)&&(u?f=self.location.href:"undefined"!=typeof document&&document.currentScript&&(f=document.currentScript.src),e&&(f=e),f=0!==f.indexOf("blob:")?f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1):"",a=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},u&&(s=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),o=(t,e,n)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?e(r.response):n()},r.onerror=n,r.send(null)});var d,m,p,B=i.print||console.log.bind(console),y=i.printErr||console.error.bind(console);Object.assign(i,c),c=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(d=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&P("no native wasm support detected");var g,I,v=!1;function Z(){var t=m.buffer;i.HEAP8=new Int8Array(t),i.HEAP16=new Int16Array(t),i.HEAP32=new Int32Array(t),i.HEAPU8=g=new Uint8Array(t),i.HEAPU16=new Uint16Array(t),i.HEAPU32=I=new Uint32Array(t),i.HEAPF32=new Float32Array(t),i.HEAPF64=new Float64Array(t)}var b=[],C=[],S=[],N=0,w=null;function P(t){i.onAbort&&i.onAbort(t),y(t="Aborted("+t+")"),v=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw r(e),e}var T,O;function D(t){return t.startsWith("data:application/octet-stream;base64,")}function F(t){return t.startsWith("file://")}function U(t){if(t==T&&d)return new Uint8Array(d);if(s)return s(t);throw"both async and sync fetching of the wasm failed"}function G(t,e,n){return function(t){if(!d&&(_||u)){if("function"==typeof fetch&&!F(t))return fetch(t,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((()=>U(t)));if(o)return new Promise(((e,n)=>{o(t,(t=>e(new Uint8Array(t))),n)}))}return Promise.resolve().then((()=>U(t)))}(t).then((t=>WebAssembly.instantiate(t,e))).then((t=>t)).then(n,(t=>{y("failed to asynchronously prepare wasm: "+t),P(t)}))}i.locateFile?D(T="zbar.wasm")||(O=T,T=i.locateFile?i.locateFile(O,f):f+O):T=new URL("zbar.wasm",import.meta.url).href;var H,L=t=>{for(;t.length>0;)t.shift()(i)},M=t=>{var e=t-m.buffer.byteLength+65535>>>16;try{return m.grow(e),Z(),1}catch(t){}},x="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,W=[null,[],[]],k=(t,e)=>{var n=W[t];0===e||10===e?((1===t?B:y)(((t,e,n)=>{for(var r=e+void 0,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.buffer&&x)return x.decode(t.subarray(e,i));for(var a="";e<i;){var o=t[e++];if(128&o){var s=63&t[e++];if(192!=(224&o)){var c=63&t[e++];if((o=224==(240&o)?(15&o)<<12|s<<6|c:(7&o)<<18|s<<12|c<<6|63&t[e++])<65536)a+=String.fromCharCode(o);else{var _=o-65536;a+=String.fromCharCode(55296|_>>10,56320|1023&_)}}else a+=String.fromCharCode((31&o)<<6|s)}else a+=String.fromCharCode(o)}return a})(n,0)),n.length=0):n.push(e)},Y={d:()=>!0,e:function(){return Date.now()},c:t=>{var e=g.length,n=2147483648;if((t>>>=0)>n)return!1;for(var r,i=1;i<=4;i*=2){var a=e*(1+.2/i);a=Math.min(a,t+100663296);var o=Math.min(n,(r=Math.max(t,a))+(65536-r%65536)%65536);if(M(o))return!0}return!1},f:t=>52,b:function(t,e,n,r,i){return 70},a:(t,e,n,r)=>{for(var i=0,a=0;a<n;a++){var o=I[e>>2],s=I[e+4>>2];e+=8;for(var c=0;c<s;c++)k(t,g[o+c]);i+=s}return I[r>>2]=i,0}};function j(){function t(){H||(H=!0,i.calledRun=!0,v||(L(C),n(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),S.unshift(t);var t;L(S)}()))}N>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),b.unshift(t);var t;L(b)}(),N>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(function(){var t,e,n,a,o={a:Y};function s(t,e){var n,r=t.exports;return m=(p=r).g,Z(),p.s,n=p.h,C.unshift(n),function(t){if(N--,i.monitorRunDependencies&&i.monitorRunDependencies(N),0==N&&w){var e=w;w=null,e()}}(),r}if(N++,i.monitorRunDependencies&&i.monitorRunDependencies(N),i.instantiateWasm)try{return i.instantiateWasm(o,s)}catch(t){y("Module.instantiateWasm callback failed with error: "+t),r(t)}(t=d,e=T,n=o,a=function(t){s(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||D(e)||F(e)||A||"function"!=typeof fetch?G(e,n,a):fetch(e,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,n).then(a,(function(t){return y("wasm streaming compile failed: "+t),y("falling back to ArrayBuffer instantiation"),G(e,n,a)}))))).catch(r)}(),i._ImageScanner_create=()=>(i._ImageScanner_create=p.i)(),i._ImageScanner_destory=t=>(i._ImageScanner_destory=p.j)(t),i._ImageScanner_set_config=(t,e,n,r)=>(i._ImageScanner_set_config=p.k)(t,e,n,r),i._ImageScanner_enable_cache=(t,e)=>(i._ImageScanner_enable_cache=p.l)(t,e),i._ImageScanner_recycle_image=(t,e)=>(i._ImageScanner_recycle_image=p.m)(t,e),i._ImageScanner_get_results=t=>(i._ImageScanner_get_results=p.n)(t),i._ImageScanner_scan=(t,e)=>(i._ImageScanner_scan=p.o)(t,e),i._Image_create=(t,e,n,r,a,o)=>(i._Image_create=p.p)(t,e,n,r,a,o),i._Image_destory=t=>(i._Image_destory=p.q)(t),i._Image_get_symbols=t=>(i._Image_get_symbols=p.r)(t),i._free=t=>(i._free=p.t)(t),i._malloc=t=>(i._malloc=p.u)(t),w=function t(){H||j(),H||(w=t)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return j(),t.ready});let r;const i=t(void 0,void 0,void 0,(function*(){if(r=yield n(),!r)throw Error("WASM was not loaded");return r})),a=()=>t(void 0,void 0,void 0,(function*(){return yield i}));var o,s,c;!function(t){t[t.ZBAR_NONE=0]="ZBAR_NONE",t[t.ZBAR_PARTIAL=1]="ZBAR_PARTIAL",t[t.ZBAR_EAN2=2]="ZBAR_EAN2",t[t.ZBAR_EAN5=5]="ZBAR_EAN5",t[t.ZBAR_EAN8=8]="ZBAR_EAN8",t[t.ZBAR_UPCE=9]="ZBAR_UPCE",t[t.ZBAR_ISBN10=10]="ZBAR_ISBN10",t[t.ZBAR_UPCA=12]="ZBAR_UPCA",t[t.ZBAR_EAN13=13]="ZBAR_EAN13",t[t.ZBAR_ISBN13=14]="ZBAR_ISBN13",t[t.ZBAR_COMPOSITE=15]="ZBAR_COMPOSITE",t[t.ZBAR_I25=25]="ZBAR_I25",t[t.ZBAR_DATABAR=34]="ZBAR_DATABAR",t[t.ZBAR_DATABAR_EXP=35]="ZBAR_DATABAR_EXP",t[t.ZBAR_CODABAR=38]="ZBAR_CODABAR",t[t.ZBAR_CODE39=39]="ZBAR_CODE39",t[t.ZBAR_PDF417=57]="ZBAR_PDF417",t[t.ZBAR_QRCODE=64]="ZBAR_QRCODE",t[t.ZBAR_SQCODE=80]="ZBAR_SQCODE",t[t.ZBAR_CODE93=93]="ZBAR_CODE93",t[t.ZBAR_CODE128=128]="ZBAR_CODE128",t[t.ZBAR_SYMBOL=255]="ZBAR_SYMBOL",t[t.ZBAR_ADDON2=512]="ZBAR_ADDON2",t[t.ZBAR_ADDON5=1280]="ZBAR_ADDON5",t[t.ZBAR_ADDON=1792]="ZBAR_ADDON"}(o||(o={})),function(t){t[t.ZBAR_CFG_ENABLE=0]="ZBAR_CFG_ENABLE",t[t.ZBAR_CFG_ADD_CHECK=1]="ZBAR_CFG_ADD_CHECK",t[t.ZBAR_CFG_EMIT_CHECK=2]="ZBAR_CFG_EMIT_CHECK",t[t.ZBAR_CFG_ASCII=3]="ZBAR_CFG_ASCII",t[t.ZBAR_CFG_BINARY=4]="ZBAR_CFG_BINARY",t[t.ZBAR_CFG_NUM=5]="ZBAR_CFG_NUM",t[t.ZBAR_CFG_MIN_LEN=32]="ZBAR_CFG_MIN_LEN",t[t.ZBAR_CFG_MAX_LEN=33]="ZBAR_CFG_MAX_LEN",t[t.ZBAR_CFG_UNCERTAINTY=64]="ZBAR_CFG_UNCERTAINTY",t[t.ZBAR_CFG_POSITION=128]="ZBAR_CFG_POSITION",t[t.ZBAR_CFG_TEST_INVERTED=129]="ZBAR_CFG_TEST_INVERTED",t[t.ZBAR_CFG_X_DENSITY=256]="ZBAR_CFG_X_DENSITY",t[t.ZBAR_CFG_Y_DENSITY=257]="ZBAR_CFG_Y_DENSITY"}(s||(s={})),function(t){t[t.ZBAR_ORIENT_UNKNOWN=-1]="ZBAR_ORIENT_UNKNOWN",t[t.ZBAR_ORIENT_UP=0]="ZBAR_ORIENT_UP",t[t.ZBAR_ORIENT_RIGHT=1]="ZBAR_ORIENT_RIGHT",t[t.ZBAR_ORIENT_DOWN=2]="ZBAR_ORIENT_DOWN",t[t.ZBAR_ORIENT_LEFT=3]="ZBAR_ORIENT_LEFT"}(c||(c={}));class _{constructor(t,e){this.ptr=t,this.inst=e}checkAlive(){if(!this.ptr)throw Error("Call after destroyed")}getPointer(){return this.checkAlive(),this.ptr}}class u{constructor(t,e){this.ptr=t,this.ptr32=t>>2,this.buf=e,this.HEAP8=new Int8Array(e),this.HEAPU32=new Uint32Array(e),this.HEAP32=new Int32Array(e)}}class A extends u{get type(){return this.HEAPU32[this.ptr32]}get data(){const t=this.HEAPU32[this.ptr32+4],e=this.HEAPU32[this.ptr32+5];return Int8Array.from(this.HEAP8.subarray(e,e+t))}get points(){const t=this.HEAPU32[this.ptr32+7],e=this.HEAPU32[this.ptr32+8]>>2,n=[];for(let r=0;r<t;++r){const t=this.HEAP32[e+2*r],i=this.HEAP32[e+2*r+1];n.push({x:t,y:i})}return n}get orientation(){return this.HEAP32[this.ptr32+9]}get next(){const t=this.HEAPU32[this.ptr32+11];return t?new A(t,this.buf):null}get time(){return this.HEAPU32[this.ptr32+13]}get cacheCount(){return this.HEAP32[this.ptr32+14]}get quality(){return this.HEAP32[this.ptr32+15]}}class f extends u{get head(){const t=this.HEAPU32[this.ptr32+2];return t?new A(t,this.buf):null}}class h{constructor(t){this.type=t.type,this.typeName=o[this.type],this.data=t.data,this.points=t.points,this.orientation=t.orientation,this.time=t.time,this.cacheCount=t.cacheCount,this.quality=t.quality}static createSymbolsFromPtr(t,e){if(0==t)return[];let n=new f(t,e).head;const r=[];for(;null!==n;)r.push(new h(n)),n=n.next;return r}decode(t){return new TextDecoder(t).decode(this.data)}}class l extends _{static createFromGrayBuffer(e,n,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t(this,void 0,void 0,(function*(){const t=yield a(),o=new Uint8Array(r),s=e*n;if(s!==o.byteLength)throw Error("data length (".concat(o.byteLength," bytes) does not match width and height (").concat(s," bytes)"));const c=t._malloc(s);return t.HEAPU8.set(o,c),new this(t._Image_create(e,n,808466521,c,s,i),t)}))}static createFromRGBABuffer(e,n,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t(this,void 0,void 0,(function*(){const t=yield a(),o=new Uint8Array(r),s=e*n;if(4*s!==o.byteLength)throw Error("data length (".concat(o.byteLength," bytes) does not match width and height (").concat(4*s," bytes)"));const c=t._malloc(s),_=c+s,u=t.HEAPU8;for(let e=c,n=0;e<_;e++,n+=4)u[e]=19595*o[n]+38469*o[n+1]+7472*o[n+2]>>16;return new this(t._Image_create(e,n,808466521,c,s,i),t)}))}destroy(){this.checkAlive(),this.inst._Image_destory(this.ptr),this.ptr=0}getSymbols(){this.checkAlive();const t=this.inst._Image_get_symbols(this.ptr);return h.createSymbolsFromPtr(t,this.inst.HEAPU8.buffer)}}class R extends _{static create(){return t(this,void 0,void 0,(function*(){const t=yield a();return new this(t._ImageScanner_create(),t)}))}destroy(){this.checkAlive(),this.inst._ImageScanner_destory(this.ptr),this.ptr=0}setConfig(t,e,n){return this.checkAlive(),this.inst._ImageScanner_set_config(this.ptr,t,e,n)}enableCache(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.checkAlive(),this.inst._ImageScanner_enable_cache(this.ptr,t)}recycleImage(t){this.checkAlive(),this.inst._ImageScanner_recycle_image(this.ptr,t.getPointer())}getResults(){this.checkAlive();const t=this.inst._ImageScanner_get_results(this.ptr);return h.createSymbolsFromPtr(t,this.inst.HEAPU8.buffer)}scan(t){return this.checkAlive(),this.inst._ImageScanner_scan(this.ptr,t.getPointer())}}const d=()=>t(void 0,void 0,void 0,(function*(){const t=yield R.create();return t.setConfig(o.ZBAR_NONE,s.ZBAR_CFG_BINARY,1),t}));let m;const p=(e,n)=>t(void 0,void 0,void 0,(function*(){void 0===n&&(n=m||(yield d()),m=n);const t=n.scan(e);if(t<0)throw Error("Scan Failed");return 0===t?[]:e.getSymbols()})),B=(e,n,r,i)=>t(void 0,void 0,void 0,(function*(){const t=yield l.createFromGrayBuffer(n,r,e),a=yield p(t,i);return t.destroy(),a})),y=(e,n,r,i)=>t(void 0,void 0,void 0,(function*(){const t=yield l.createFromRGBABuffer(n,r,e),a=yield p(t,i);return t.destroy(),a})),g=(e,n)=>t(void 0,void 0,void 0,(function*(){return yield y(e.data.buffer,e.width,e.height,n)})),E=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{s as ZBarConfigType,l as ZBarImage,c as ZBarOrientation,R as ZBarScanner,h as ZBarSymbol,o as ZBarSymbolType,d as getDefaultScanner,a as getInstance,B as scanGrayBuffer,g as scanImageData,y as scanRGBABuffer};