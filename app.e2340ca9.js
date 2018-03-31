!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}({"./node_modules/uuid/index.js":function(e,t,n){var r=n("./node_modules/uuid/v1.js"),o=n("./node_modules/uuid/v4.js"),i=o;i.v1=r,i.v4=o,e.exports=i},"./node_modules/uuid/lib/bytesToUuid.js":function(e,t){function n(e,t){var n=t||0,o=r;return o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+"-"+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]+o[e[n++]]}for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);e.exports=n},"./node_modules/uuid/lib/rng-browser.js":function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},"./node_modules/uuid/v1.js":function(e,t,n){function r(e,t,n){var r=t&&n||0,l=t||[];e=e||{};var f=e.node||o,d=void 0!==e.clockseq?e.clockseq:i;if(null==f||null==d){var p=a();null==f&&(f=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=i=16383&(p[6]<<8|p[7]))}var h=void 0!==e.msecs?e.msecs:(new Date).getTime(),y=void 0!==e.nsecs?e.nsecs:c+1,b=h-u+(y-c)/1e4;if(b<0&&void 0===e.clockseq&&(d=d+1&16383),(b<0||h>u)&&void 0===e.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=h,c=y,i=d,h+=122192928e5;var m=(1e4*(268435455&h)+y)%4294967296;l[r++]=m>>>24&255,l[r++]=m>>>16&255,l[r++]=m>>>8&255,l[r++]=255&m;var v=h/4294967296*1e4&268435455;l[r++]=v>>>8&255,l[r++]=255&v,l[r++]=v>>>24&15|16,l[r++]=v>>>16&255,l[r++]=d>>>8|128,l[r++]=255&d;for(var j=0;j<6;++j)l[r+j]=f[j];return t||s(l)}var o,i,a=n("./node_modules/uuid/lib/rng-browser.js"),s=n("./node_modules/uuid/lib/bytesToUuid.js"),u=0,c=0;e.exports=r},"./node_modules/uuid/v4.js":function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[r+s]=a[s];return t||i(a)}var o=n("./node_modules/uuid/lib/rng-browser.js"),i=n("./node_modules/uuid/lib/bytesToUuid.js");e.exports=r},"./node_modules/whatwg-fetch/fetch.js":function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return m.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=a(t);return t.readAsArrayBuffer(e),n}function u(e){var t=new FileReader,n=a(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(m.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(m.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(m.arrayBuffer&&m.blob&&j(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function p(e,t){t=t||{};var n=t.body;if(e instanceof p){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=d(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function b(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var m={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],j=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&v.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];this.map[e]=o?o+","+r:r},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=n(r)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},f.call(p.prototype),f.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];b.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=p,e.Response=b,e.fetch=function(e,t){return new Promise(function(n,r){var o=new p(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;n(new b(t,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},"./src/app.js":function(e,t,n){"use strict";function r(){return i.a.createElement("div",{className:"App"},i.a.createElement(s.a,null))}t.a=r;var o=n(1),i=n.n(o),a=(n(10),n("./src/style/index.styl")),s=(n.n(a),n("./src/page/index.js"))},"./src/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),i=n(9),a=n.n(i),s=n("./src/routes.js");a.a.render(o.a.createElement(s.a,null),document.getElementById("root"))},"./src/layout/master.js":function(e,t,n){"use strict";function r(e){return i.a.createElement("div",{className:"page-container"},e.children)}t.a=r;var o=n(1),i=n.n(o),a=n(6),s=n.n(a);r.propTypes={children:s.a.object.isRequired}},"./src/middleware/index.js":function(e,t,n){"use strict";var r=[];t.a=r},"./src/page/action/lane-action.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return f});var r=n("./src/store/data-action.js"),o=n("./node_modules/uuid/index.js"),i=n.n(o),a="laneList",s=function(e){var t=i.a.v4();return n.i(r.a)({_path:a+"."+t,_value:{id:t,name:e,notes:[]}})},u=function(e,t){return n.i(r.a)({_path:a+"."+e+".name",_value:t})},c=function(e,t){return n.i(r.b)({_path:a+"."+e+".notes",_value:t})},l=function(e,t){return n.i(r.c)({_path:a+"."+e+".notes",_value:t})},f=function(e){return n.i(r.c)({_path:a,_value:e})}},"./src/page/action/note-action.js":function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return c});var r=n("./src/store/data-action.js"),o=n("./node_modules/uuid/index.js"),i=n.n(o),a="noteList",s=function(e,t){return n.i(r.a)({_path:a+"."+e+".task",_value:t})},u=function(e){var t=i.a.v4();return n.i(r.b)({_path:a+"."+t,_value:{id:t,task:e}})},c=function(e){return n.i(r.c)({_path:a,_value:e})}},"./src/page/components/editable.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n.n(a),u=n("./src/page/components/input-text.js"),c=n(8),l=n.n(c),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){var e,n,i,a;r(this,t);for(var c=arguments.length,f=Array(c),d=0;d<c;d++)f[d]=arguments[d];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),i.renderEditing=function(e){return s.a.createElement(u.a,{text:e.value,onSave:e.onSave})},i.renderView=function(e){return s.a.createElement("div",{onDoubleClick:function(){return e.onEdit()},className:"note-task",title:"Double click to edit"},e.value)},i.renderComponent=function(e){var t=l()(e.className,{editable:!0});return s.a.createElement("div",{className:t},e.editing?i.renderEditing(e):i.renderView(e))},a=n,o(i,a)}return i(t,e),f(t,[{key:"render",value:function(){return this.renderComponent(this.props,this.state)}}]),t}(a.Component);t.a=d},"./src/page/components/input-text.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n.n(a),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(){var e,n,i,a;r(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={text:i.props.text||""},i.handleOnChange=function(e){i.setState({text:e.target.value})},i.handleBlur=function(e){i.props.onSave(e.target.value.trim())},i.handleSubmit=function(e){var t=e.target.value.trim();13===e.which&&i.props.onSave(t)},i.renderComponent=function(e,t){return s.a.createElement("div",{className:"input-text"},s.a.createElement("input",{type:"text",autoFocus:!0,onChange:i.handleOnChange,onBlur:i.handleBlur,onKeyDown:i.handleSubmit,value:t.text}))},a=n,o(i,a)}return i(t,e),u(t,[{key:"render",value:function(){return this.renderComponent(this.props,this.state)}}]),t}(a.Component);t.a=c},"./src/page/components/lane-item.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n.n(a),u=n(3),c=n(2),l=n("./src/page/components/note-list.js"),f=n("./src/page/selectors/selectors.js"),d=n("./src/page/components/editable.js"),p=n("./src/page/action/lane-action.js"),h=n("./src/page/action/note-action.js"),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(){var e,n,i,a;r(this,t);for(var u=arguments.length,c=Array(u),f=0;f<u;f++)c[f]=arguments[f];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={editing:!1},i.handleOnEdit=function(){i.setState({editing:!0})},i.handleSave=function(e){if(!e.length)return null;var t=i.props.lane;i.props.updateLane(t.id,e),i.setState({editing:!1})},i.addNote=function(e){var t=e.addNote("New Task");e.attachNoteToLane(e.lane.id,t.payload.id)},i.handleDeleteNote=function(e,t){var n=t.lane;t.deleteNote(e),t.detachFromLane(n.id,e)},i.deleteLane=function(e){var t=e.lane;e.onDeleteLane(t.id),t.notes.forEach(function(t){return e.deleteNote([t])})},i.renderComponent=function(e,t){var n=e.lane,r=e.noteListByLane;return n?s.a.createElement("div",{className:"lane-item"},s.a.createElement("div",{className:"lane-header"},s.a.createElement("button",{className:"add-note lane-header-item",onClick:function(){return i.addNote(e)}},"+"),s.a.createElement(d.a,{value:n.name,editing:t.editing,onEdit:i.handleOnEdit,className:"lane-header-item lane-editable",onSave:function(e){return i.handleSave(e)}}),s.a.createElement("button",{className:"delete-note lane-header-item",onClick:function(){return i.deleteLane(e)}},"x")),s.a.createElement(l.a,{noteList:r,className:"notes-list lane-header-item",onDeleteNote:function(t){return i.handleDeleteNote(t,e)}})):null},a=n,o(i,a)}return i(t,e),y(t,[{key:"render",value:function(){return this.renderComponent(this.props,this.state)}}]),t}(a.Component);t.a=n.i(u.connect)(function(e,t){return{noteListByLane:n.i(f.b)(e,t)}},function(e){return n.i(c.bindActionCreators)({updateLane:p.c,addNote:h.a,deleteNote:h.b,attachNoteToLane:p.d,detachFromLane:p.e},e)})(b)},"./src/page/components/lane-list.js":function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n("./src/page/components/lane-item.js");t.a=function(e){var t=e.laneList,n=e.className,r=e.onDeleteLane;return t?o.a.createElement("ul",{className:n},t.map(function(e){return o.a.createElement(i.a,{key:e.id,lane:e,onDeleteLane:r})})):null}},"./src/page/components/note-item.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(1),s=n.n(a),u=n("./src/page/components/editable.js"),c=n(3),l=n(2),f=n("./src/page/action/note-action.js"),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){var e,n,i,a;r(this,t);for(var c=arguments.length,l=Array(c),f=0;f<c;f++)l[f]=arguments[f];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.state={editing:!1},i.handleOnEdit=function(){i.setState({editing:!0})},i.handleSave=function(e){e.length||i.props.onDeleteNote([i.props.note.id]),i.props.updateNote(i.props.note.id,e),i.setState({editing:!1})},i.renderComponent=function(e,t){var n=e.note;return n?s.a.createElement("div",{className:"note-item"},s.a.createElement(u.a,{value:n.task,editing:t.editing,onEdit:i.handleOnEdit,onSave:function(e){return i.handleSave(e)}}),s.a.createElement("button",{className:"delete-note",onClick:function(){return e.onDeleteNote([n.id])}},"x")):null},a=n,o(i,a)}return i(t,e),d(t,[{key:"render",value:function(){return this.renderComponent(this.props,this.state)}}]),t}(a.Component);t.a=n.i(c.connect)(function(e,t){return{}},function(e){return n.i(l.bindActionCreators)({updateNote:f.c},e)})(p)},"./src/page/components/note-list.js":function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n("./src/page/components/note-item.js");t.a=function(e){var t=e.className,n=e.noteList,r=e.onDeleteNote;return o.a.createElement("div",{className:t},n.map(function(e){return o.a.createElement(i.a,{note:e,key:e.id,onDeleteNote:r})}))}},"./src/page/index.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./src/page/selectors/selectors.js"),s=n(3),u=n(2),c=n(1),l=n.n(c),f=n("./src/page/components/lane-list.js"),d=n("./src/page/action/lane-action.js"),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleAddLane=function(){i.props.addLane("New Lane")},i.handleDeleteLane=function(e){i.props.deleteLane([e])},i.renderComponent=function(e){var t=e.laneList;return l.a.createElement("div",{className:"kanban-app"},l.a.createElement("button",{className:"add-lane",onClick:i.handleAddLane},"+"),l.a.createElement(f.a,{className:"lane-list",laneList:t,onDeleteLane:function(e){return i.handleDeleteLane(e)}}))},a=n,o(i,a)}return i(t,e),p(t,[{key:"render",value:function(){return this.renderComponent(this.props,this.state)}}]),t}(c.Component);t.a=n.i(s.connect)(function(e,t){return{laneList:n.i(a.a)(e,t)}},function(e){return n.i(u.bindActionCreators)({addLane:d.a,deleteLane:d.b},e)})(h)},"./src/page/selectors/selectors.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});var r=n(12),o=(n.n(r),function(e){return Object.values(e.laneList)}),i=function(e){return Object.values(e.noteList)},a=function(e,t){return t.lane.notes},s=n.i(r.createSelector)(i,a,function(e,t){return t.map(function(t){return e.find(function(e){return e.id===t})}).filter(Boolean)})},"./src/routes.js":function(e,t,n){"use strict";function r(){var e=l()(),t=n.i(f.a)({history:e});return i.a.createElement(a.Provider,{store:t},i.a.createElement(u.ConnectedRouter,{history:e},i.a.createElement(d.a,null,i.a.createElement(s.Switch,null,i.a.createElement(s.Route,{exact:!0,path:"",component:p.a}),i.a.createElement(s.Route,{component:function(){return i.a.createElement("div",null,"404 Not found")}})))))}t.a=r;var o=n(1),i=n.n(o),a=n(3),s=n(7),u=n(4),c=n(13),l=n.n(c),f=n("./src/store/configure-store.js"),d=n("./src/layout/master.js"),p=n("./src/app.js")},"./src/store/configure-store.js":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){var t=e.history,o=n.i(i.default)(),d=n.i(a.routerMiddleware)(t),p=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,s.compose),h=n.i(s.createStore)(c.a,f.a,p(s.applyMiddleware.apply(void 0,r(u.a).concat([d,o]))));return o.run(l.a),h}t.a=o;var i=n(11),a=n(4),s=n(2),u=n("./src/middleware/index.js"),c=n("./src/store/root-reducer.js"),l=n("./src/store/root-saga.js"),f=n("./src/store/default-state.js")},"./src/store/data-action.js":function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"c",function(){return f}),n.d(t,"b",function(){return d});var r=n("./src/utils/create-action.js"),o=n("./src/utils/invariant.js"),i=n("./src/utils/is.js"),a=function(e){return e._value},s=function(e){return n.i(o.a)(!n.i(i.a)(e._path),"_path is required"),{_path:e._path}},u=function(e){return n.i(r.a)(e,a,s)},c={SET_DATA:"SET_DATA",GET_DATA:"GET_DATA",REMOVE_DATA:"REMOVE_DATA",MERGE_DATA:"MERGE_DATA",TOGGLE_DATA:"TOGGLE_DATA"},l=u(c.SET_DATA),f=u(c.REMOVE_DATA),d=(u(c.GET_DATA),u(c.MERGE_DATA));u(c.TOGGLE_DATA)},"./src/store/data-reducer.js":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.a,t=arguments[1];if(Object.keys(a.d).includes(t.type)){var n=t.type.replace("_DATA","").toLowerCase();return o[n](e,t.meta._path,t.payload)}return e}t.a=r;var o=n("./src/utils/immutable.js"),i=n("./src/store/default-state.js"),a=n("./src/store/data-action.js")},"./src/store/default-state.js":function(e,t,n){"use strict";t.a={noteList:{0:{id:"0",task:"Learn React"},1:{id:"1",task:"Writing"},2:{id:2,task:"test"}},laneList:{0:{id:"0",notes:["0",2],name:"To do"},1:{id:"1",notes:["1"],name:"In Progress"}}}},"./src/store/root-reducer.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(2),i=n(4),a=n("./src/utils/store.js"),s=n("./src/store/data-reducer.js"),u=n("./src/store/default-state.js"),c={router:i.routerReducer},l=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},f=n.i(o.combineReducers)(Object.keys(u.a).reduce(function(e,t){return Object.assign({},e,r({},t,c[t]?c[t]:l))},c)),d=n.i(a.a)(f,s.a);t.a=d},"./src/store/root-saga.js":function(e,t,n){"use strict";function r(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(o.takeEvery)("TEST_SAGA",function(){return console.warn(123)});case 2:case"end":return e.stop()}},i,this)}t.a=r;var o=n(14),i=regeneratorRuntime.mark(r)},"./src/style/index.styl":function(e,t){},"./src/utils/create-action.js":function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},r=arguments[2];n.i(o.a)(n.i(i.b)(t)||n.i(i.c)(t),"Expected payloadCreator to be a function or undefined"),n.i(o.a)(n.i(i.b)(r)||n.i(i.d)(r)||n.i(i.c)(r),"Expected metaCreator to be a function or object or undefined");var a=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e instanceof Error?e:t.apply(void 0,[e].concat(r))};return function(){var t=a.apply(void 0,arguments),o={type:e};return t instanceof Error&&(o.error=!0),n.i(i.c)(t)||(o.payload=t),r&&(o.meta=n.i(i.b)(r)?r.apply(void 0,arguments):r),o}}t.a=r;var o=n("./src/utils/invariant.js"),i=n("./src/utils/is.js")},"./src/utils/immutable.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return n.i(l.e)(e)?e:n.i(l.a)(e)?[]:e.replace(/\\\./g,"@").replace(/\./g,"*").replace(/@/g,".").split("*")}function i(e){return n.i(f.a)(n.i(l.f)(e),"Array index '"+e+"' has to be an integer"),e}function a(e,t,r){n.i(f.a)(!n.i(l.a)(t),"path is required for setting data");var a=o(t);return function e(t,o,a){if(!o.length)return n.i(l.b)(r)?a(t,o[0]):a;var s=n.i(l.e)(t),u=s?t.slice():Object.assign({},t),c=s?i(o[0]):o[0];return u[c]=e(n.i(l.c)(t[c])?{}:t[c],o.slice(1),a),u}(e,a,r)}function s(e,t){var n=o(t);return 0===n.length?e:n.reduce(function(t,n){return t?t[n]:e[n]},null)}function u(e,t,o){return n.i(f.a)(arguments.length>=3,"src, path and _ids are required"),n.i(f.a)(n.i(l.e)(o),"Expected _ids to be an array but got "+(void 0===o?"undefined":h(o))),n.i(l.a)(t)?n.i(l.e)(e)?e.filter(function(e,t){return!o.includes(e)}):n.i(l.d)(e)?n.i(d.a)(e,o):e:n.i(l.c)(s(e,t))?e:a(e,t,function(e){if(n.i(l.e)(e))return e.filter(function(e,t){return!o.includes(e)});if(n.i(l.d)(e)){var t=o.map(String);return Object.keys(e).reduce(function(n,o){return t.includes(o)?n:p({},n,r({},o,e[o]))},{})}return e})}function c(e,t,r){return a(e,t,function(t){return null===t||n.i(l.c)(t)?r:n.i(l.e)(t)?t.concat(r):n.i(l.d)(t)?Object.assign({},t,r):e})}Object.defineProperty(t,"__esModule",{value:!0}),t.set=a,t.get=s,t.remove=u,t.merge=c;var l=n("./src/utils/is.js"),f=n("./src/utils/invariant.js"),d=n("./src/utils/object.js"),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},"./src/utils/invariant.js":function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,s){if(!e){var u=void 0;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],l=0;u=new Error(t.replace(/%s/g,function(){return c[l++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}};t.a=r},"./src/utils/is.js":function(e,t,n){"use strict";function r(e){return/^\d+$/.test(e)}function o(e){return"function"==typeof e}function i(e){return void 0===e}function a(e){return Array.isArray(e)}function s(e){return!a(e)&&e===Object(e)}function u(e){return!e||(!(!a(e)||0!==e.length)||!!s(e)&&!Object.keys(e).length)}n.d(t,"f",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return i})},"./src/utils/object.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return Object.keys(e).reduce(function(n,o){return t.includes(o)?n:i({},n,r({},o,e[o]))},{})}n.d(t,"a",function(){return o});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},"./src/utils/store.js":function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){return t.reduce(function(e,t){return t(e,n)},e)}}n.d(t,"a",function(){return r})},0:function(e,t){e.exports=vendor_dll},1:function(e,t,n){e.exports=n(0)(16)},10:function(e,t,n){e.exports=n(0)(256)},11:function(e,t,n){e.exports=n(0)(258)},12:function(e,t,n){e.exports=n(0)(259)},13:function(e,t,n){e.exports=n(0)(473)},14:function(e,t,n){e.exports=n(0)(588)},15:function(e,t,n){n(5),n("./node_modules/whatwg-fetch/fetch.js"),e.exports=n("./src/index.js")},2:function(e,t,n){e.exports=n(0)(158)},3:function(e,t,n){e.exports=n(0)(255)},4:function(e,t,n){e.exports=n(0)(257)},5:function(e,t,n){e.exports=n(0)(252)},6:function(e,t,n){e.exports=n(0)(15)},7:function(e,t,n){e.exports=n(0)(157)},8:function(e,t,n){e.exports=n(0)(253)},9:function(e,t,n){e.exports=n(0)(254)}});