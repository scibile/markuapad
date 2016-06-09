!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(368);n(387);var a=n(2),s=function(){},l=[{filename:"my-first-markuapad-book/book.txt",content:"chapter1.txt\nchapter2.txt"},{filename:"my-first-markuapad-book/manifest_files/chapter1.txt",in_sample:!1,content:"# Chapter 1\n\nHere is the first chapter"},{filename:"my-first-markuapad-book/manifest_files/chapter2.txt",in_sample:!1,content:"# Chapter 2\n\nHere is the second chapter"},{filename:"my-first-markuapad-book/manifest_code/sample.js",content:"function() {\n  console.log('Hello, World!');\n}\n"}],c=[{filename:"my-first-markuapad-book/manifest_files",files:[{filename:"chapter1.txt"},{filename:"chapter2.txt"}]},{filename:"my-first-markuapad-book/manifest_code",files:[{filename:"sample.js"}]},{filename:"my-first-markuapad-book/manifest_images",files:[]}];if(!o.getCached("my-first-markuapad-book/manifest_files")){var u=!0,d=!1,p=void 0;try{for(var h,f=l[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var m=h.value,g=m.filename;m.filename=m.filename.substr(m.filename.lastIndexOf("/")+1),o.setCached(g,m)}}catch(v){d=!0,p=v}finally{try{!u&&f["return"]&&f["return"]()}finally{if(d)throw p}}var y=!0,b=!1,k=void 0;try{for(var w,x=c[Symbol.iterator]();!(y=(w=x.next()).done);y=!0){var m=w.value;o.setCached(m.filename,m.files)}}catch(v){b=!0,k=v}finally{try{!y&&x["return"]&&x["return"]()}finally{if(b)throw k}}}var E=function(){function e(t){r(this,e),this.projectRoot=t,this.onAddCallbacks=[],this.onDeleteCallbacks=[],this.onManuscriptChangeCallbacks=[],this.onProgressStartedCallbacks=[],this.onProgressCallbacks=[],this.onMergeConflictCallback=null,this.manifestFilesKey=this.projectRoot+"/manifest_files",this.manifestCodeKey=this.projectRoot+"/manifest_code",this.manifestImagesKey=this.projectRoot+"/manifest_images",this.supportsImageUploads=!0}return i(e,[{key:"getFilePrefix",value:function(e){return"manuscript"===e?this.manifestFilesKey:"code"===e?this.manifestCodeKey:"image"===e?this.manifestImagesKey:this.projectRoot}},{key:"get",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?s:arguments[1],n=arguments.length<=2||void 0===arguments[2]?"manuscript":arguments[2],r=o.getCached(this.getFilePrefix(n)+"/"+e);t(null,r&&r.content)}},{key:"getSync",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?"manuscript":arguments[1],n=o.getCached(this.getFilePrefix(t)+"/"+e);return n&&n.content}},{key:"listFiles",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=a.map(o.getCached(this.manifestFilesKey),function(e){return a.extend(e,{type:"manuscript"})});e(null,t)}},{key:"listImages",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=a.map(o.getCached(this.manifestImagesKey),function(e){return a.extend(e,{type:"image"})});e(null,t?a.map(t,function(e){return a.omit(e,"content")}):[])}},{key:"listCode",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=a.map(o.getCached(this.manifestCodeKey),function(e){return a.extend(e,{type:"code"})});e(null,t?a.map(t,function(e){return a.omit(e,"content")}):[])}},{key:"save",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?"manuscript":arguments[1],n=arguments.length<=2||void 0===arguments[2]?"":arguments[2],r=arguments.length<=3||void 0===arguments[3]?s:arguments[3],i=this.getFilePrefix(t)+"/"+e,a=o.getCached(i);a.content=n,o.setCached(i,a),r(null)}},{key:"saveManuscript",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?s:arguments[1];o.setCached(this.manifestFilesKey,e),o.setCached(this.projectRoot+"/book.txt",{filename:"book.txt",content:a.map(e,function(e){return e.filename}).join("\n")});var n=!0,r=!1,i=void 0;try{for(var l,c=this.onManuscriptChangeCallbacks[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var u=l.value;u(null)}}catch(d){r=!0,i=d}finally{try{!n&&c["return"]&&c["return"]()}finally{if(r)throw i}}t(null)}},{key:"newImage",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?s:arguments[1];t("Images uploads don't work on markuapad.com")}},{key:"new",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?"manuscript":arguments[1],n=arguments.length<=2||void 0===arguments[2]?"":arguments[2],r=arguments.length<=3||void 0===arguments[3]?s:arguments[3],i={filename:e,content:n,type:t},l=this.getFilePrefix(t)+"/"+e,c="manuscript"===t?this.manifestFilesKey:this.manifestCodeKey,u=o.getCached(c).concat([a.omit(i,"content")]);o.setCached(l,i),o.setCached(c,u),"manuscript"===t&&o.setCached(this.projectRoot+"/book.txt",{filename:"book.txt",content:a.map(u,function(e){return e.filename}).join("\n")}),r(null,i);var d=!0,p=!1,h=void 0;try{for(var f,m=this.onAddCallbacks[Symbol.iterator]();!(d=(f=m.next()).done);d=!0){var g=f.value;g(i)}}catch(v){p=!0,h=v}finally{try{!d&&m["return"]&&m["return"]()}finally{if(p)throw h}}}},{key:"delete",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?"manuscript":arguments[1],n=arguments.length<=2||void 0===arguments[2]?s:arguments[2],r=void 0;r="manuscript"===t?this.manifestFilesKey:"image"===t?this.manifestImagesKey:this.manifestCodeKey;var i=o.getCached(r),l=this.getFilePrefix(t)+"/"+e;localStorage.removeItem(l),i=a.reject(i,function(t){return t.filename===e}),o.setCached(r,i),"manuscript"===t&&o.setCached(this.projectRoot+"/book.txt",{filename:"book.txt",content:a.map(i,function(e){return e.filename}).join("\n")}),n(null);var c=!0,u=!1,d=void 0;try{for(var p,h=this.onDeleteCallbacks[Symbol.iterator]();!(c=(p=h.next()).done);c=!0){var f=p.value;f(e)}}catch(m){u=!0,d=m}finally{try{!c&&h["return"]&&h["return"]()}finally{if(u)throw d}}}},{key:"setCursor",value:function(e,t){o.setCached("markuapad_cursor",{filename:e,position:t})}},{key:"onAdd",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0];this.onAddCallbacks.push(e)}},{key:"onDelete",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0];this.onDeleteCallbacks.push(e)}},{key:"onManuscriptChange",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0];this.onManuscriptChangeCallbacks.push(e)}},{key:"onProgress",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0];this.onProgressCallbacks.push(e)}},{key:"onProgressStarted",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0];this.onProgressStartedCallbacks.push(e)}},{key:"onMergeConflicts",value:function(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0];this.onMergeConflictCallback=e}}]),e}();window.ExampleFileAccessor=E},2:function(e,t,n){var r,i;(function(){function n(e){function t(t,n,r,i,o,a){for(;o>=0&&a>o;o+=e){var s=i?i[o]:o;r=n(r,t[s],s,t)}return r}return function(n,r,i,o){r=E(r,o,4);var a=!D(n)&&x.keys(n),s=(a||n).length,l=e>0?0:s-1;return arguments.length<3&&(i=n[a?a[l]:l],l+=e),t(n,r,i,a,l,s)}}function o(e){return function(t,n,r){n=_(n,r);for(var i=F(t),o=e>0?0:i-1;o>=0&&i>o;o+=e)if(n(t[o],o,t))return o;return-1}}function a(e,t,n){return function(r,i,o){var a=0,s=F(r);if("number"==typeof o)e>0?a=o>=0?o:Math.max(o+s,a):s=o>=0?Math.min(o+1,s):o+s+1;else if(n&&o&&s)return o=n(r,i),r[o]===i?o:-1;if(i!==i)return o=t(f.call(r,a,s),x.isNaN),o>=0?o+a:-1;for(o=e>0?a:s-1;o>=0&&s>o;o+=e)if(r[o]===i)return o;return-1}}function s(e,t){var n=M.length,r=e.constructor,i=x.isFunction(r)&&r.prototype||d,o="constructor";for(x.has(e,o)&&!x.contains(t,o)&&t.push(o);n--;)o=M[n],o in e&&e[o]!==i[o]&&!x.contains(t,o)&&t.push(o)}var l=this,c=l._,u=Array.prototype,d=Object.prototype,p=Function.prototype,h=u.push,f=u.slice,m=d.toString,g=d.hasOwnProperty,v=Array.isArray,y=Object.keys,b=p.bind,k=Object.create,w=function(){},x=function(e){return e instanceof x?e:this instanceof x?void(this._wrapped=e):new x(e)};"undefined"!=typeof e&&e.exports&&(t=e.exports=x),t._=x,x.VERSION="1.8.3";var E=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,o){return e.call(t,n,r,i,o)}}return function(){return e.apply(t,arguments)}},_=function(e,t,n){return null==e?x.identity:x.isFunction(e)?E(e,t,n):x.isObject(e)?x.matcher(e):x.property(e)};x.iteratee=function(e,t){return _(e,t,1/0)};var C=function(e,t){return function(n){var r=arguments.length;if(2>r||null==n)return n;for(var i=1;r>i;i++)for(var o=arguments[i],a=e(o),s=a.length,l=0;s>l;l++){var c=a[l];t&&void 0!==n[c]||(n[c]=o[c])}return n}},T=function(e){if(!x.isObject(e))return{};if(k)return k(e);w.prototype=e;var t=new w;return w.prototype=null,t},S=function(e){return function(t){return null==t?void 0:t[e]}},A=Math.pow(2,53)-1,F=S("length"),D=function(e){var t=F(e);return"number"==typeof t&&t>=0&&A>=t};x.each=x.forEach=function(e,t,n){t=E(t,n);var r,i;if(D(e))for(r=0,i=e.length;i>r;r++)t(e[r],r,e);else{var o=x.keys(e);for(r=0,i=o.length;i>r;r++)t(e[o[r]],o[r],e)}return e},x.map=x.collect=function(e,t,n){t=_(t,n);for(var r=!D(e)&&x.keys(e),i=(r||e).length,o=Array(i),a=0;i>a;a++){var s=r?r[a]:a;o[a]=t(e[s],s,e)}return o},x.reduce=x.foldl=x.inject=n(1),x.reduceRight=x.foldr=n(-1),x.find=x.detect=function(e,t,n){var r;return r=D(e)?x.findIndex(e,t,n):x.findKey(e,t,n),void 0!==r&&-1!==r?e[r]:void 0},x.filter=x.select=function(e,t,n){var r=[];return t=_(t,n),x.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},x.reject=function(e,t,n){return x.filter(e,x.negate(_(t)),n)},x.every=x.all=function(e,t,n){t=_(t,n);for(var r=!D(e)&&x.keys(e),i=(r||e).length,o=0;i>o;o++){var a=r?r[o]:o;if(!t(e[a],a,e))return!1}return!0},x.some=x.any=function(e,t,n){t=_(t,n);for(var r=!D(e)&&x.keys(e),i=(r||e).length,o=0;i>o;o++){var a=r?r[o]:o;if(t(e[a],a,e))return!0}return!1},x.contains=x.includes=x.include=function(e,t,n,r){return D(e)||(e=x.values(e)),("number"!=typeof n||r)&&(n=0),x.indexOf(e,t,n)>=0},x.invoke=function(e,t){var n=f.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){var i=r?t:e[t];return null==i?i:i.apply(e,n)})},x.pluck=function(e,t){return x.map(e,x.property(t))},x.where=function(e,t){return x.filter(e,x.matcher(t))},x.findWhere=function(e,t){return x.find(e,x.matcher(t))},x.max=function(e,t,n){var r,i,o=-(1/0),a=-(1/0);if(null==t&&null!=e){e=D(e)?e:x.values(e);for(var s=0,l=e.length;l>s;s++)r=e[s],r>o&&(o=r)}else t=_(t,n),x.each(e,function(e,n,r){i=t(e,n,r),(i>a||i===-(1/0)&&o===-(1/0))&&(o=e,a=i)});return o},x.min=function(e,t,n){var r,i,o=1/0,a=1/0;if(null==t&&null!=e){e=D(e)?e:x.values(e);for(var s=0,l=e.length;l>s;s++)r=e[s],o>r&&(o=r)}else t=_(t,n),x.each(e,function(e,n,r){i=t(e,n,r),(a>i||i===1/0&&o===1/0)&&(o=e,a=i)});return o},x.shuffle=function(e){for(var t,n=D(e)?e:x.values(e),r=n.length,i=Array(r),o=0;r>o;o++)t=x.random(0,o),t!==o&&(i[o]=i[t]),i[t]=n[o];return i},x.sample=function(e,t,n){return null==t||n?(D(e)||(e=x.values(e)),e[x.random(e.length-1)]):x.shuffle(e).slice(0,Math.max(0,t))},x.sortBy=function(e,t,n){return t=_(t,n),x.pluck(x.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};var R=function(e){return function(t,n,r){var i={};return n=_(n,r),x.each(t,function(r,o){var a=n(r,o,t);e(i,r,a)}),i}};x.groupBy=R(function(e,t,n){x.has(e,n)?e[n].push(t):e[n]=[t]}),x.indexBy=R(function(e,t,n){e[n]=t}),x.countBy=R(function(e,t,n){x.has(e,n)?e[n]++:e[n]=1}),x.toArray=function(e){return e?x.isArray(e)?f.call(e):D(e)?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return null==e?0:D(e)?e.length:x.keys(e).length},x.partition=function(e,t,n){t=_(t,n);var r=[],i=[];return x.each(e,function(e,n,o){(t(e,n,o)?r:i).push(e)}),[r,i]},x.first=x.head=x.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:x.initial(e,e.length-t)},x.initial=function(e,t,n){return f.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},x.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:x.rest(e,Math.max(0,e.length-t))},x.rest=x.tail=x.drop=function(e,t,n){return f.call(e,null==t||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var L=function(e,t,n,r){for(var i=[],o=0,a=r||0,s=F(e);s>a;a++){var l=e[a];if(D(l)&&(x.isArray(l)||x.isArguments(l))){t||(l=L(l,t,n));var c=0,u=l.length;for(i.length+=u;u>c;)i[o++]=l[c++]}else n||(i[o++]=l)}return i};x.flatten=function(e,t){return L(e,t,!1)},x.without=function(e){return x.difference(e,f.call(arguments,1))},x.uniq=x.unique=function(e,t,n,r){x.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=_(n,r));for(var i=[],o=[],a=0,s=F(e);s>a;a++){var l=e[a],c=n?n(l,a,e):l;t?(a&&o===c||i.push(l),o=c):n?x.contains(o,c)||(o.push(c),i.push(l)):x.contains(i,l)||i.push(l)}return i},x.union=function(){return x.uniq(L(arguments,!0,!0))},x.intersection=function(e){for(var t=[],n=arguments.length,r=0,i=F(e);i>r;r++){var o=e[r];if(!x.contains(t,o)){for(var a=1;n>a&&x.contains(arguments[a],o);a++);a===n&&t.push(o)}}return t},x.difference=function(e){var t=L(arguments,!0,!0,1);return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){return x.unzip(arguments)},x.unzip=function(e){for(var t=e&&x.max(e,F).length||0,n=Array(t),r=0;t>r;r++)n[r]=x.pluck(e,r);return n},x.object=function(e,t){for(var n={},r=0,i=F(e);i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.findIndex=o(1),x.findLastIndex=o(-1),x.sortedIndex=function(e,t,n,r){n=_(n,r,1);for(var i=n(t),o=0,a=F(e);a>o;){var s=Math.floor((o+a)/2);n(e[s])<i?o=s+1:a=s}return o},x.indexOf=a(1,x.findIndex,x.sortedIndex),x.lastIndexOf=a(-1,x.findLastIndex),x.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),o=0;r>o;o++,e+=n)i[o]=e;return i};var O=function(e,t,n,r,i){if(!(r instanceof t))return e.apply(n,i);var o=T(e.prototype),a=e.apply(o,i);return x.isObject(a)?a:o};x.bind=function(e,t){if(b&&e.bind===b)return b.apply(e,f.call(arguments,1));if(!x.isFunction(e))throw new TypeError("Bind must be called on a function");var n=f.call(arguments,2),r=function(){return O(e,r,t,this,n.concat(f.call(arguments)))};return r},x.partial=function(e){var t=f.call(arguments,1),n=function(){for(var r=0,i=t.length,o=Array(i),a=0;i>a;a++)o[a]=t[a]===x?arguments[r++]:t[a];for(;r<arguments.length;)o.push(arguments[r++]);return O(e,n,this,this,o)};return n},x.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=x.bind(e[n],e);return e},x.memoize=function(e,t){var n=function(r){var i=n.cache,o=""+(t?t.apply(this,arguments):r);return x.has(i,o)||(i[o]=e.apply(this,arguments)),i[o]};return n.cache={},n},x.delay=function(e,t){var n=f.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=x.partial(x.delay,x,1),x.throttle=function(e,t,n){var r,i,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:x.now(),a=null,o=e.apply(r,i),a||(r=i=null)};return function(){var c=x.now();s||n.leading!==!1||(s=c);var u=t-(c-s);return r=this,i=arguments,0>=u||u>t?(a&&(clearTimeout(a),a=null),s=c,o=e.apply(r,i),a||(r=i=null)):a||n.trailing===!1||(a=setTimeout(l,u)),o}},x.debounce=function(e,t,n){var r,i,o,a,s,l=function(){var c=x.now()-a;t>c&&c>=0?r=setTimeout(l,t-c):(r=null,n||(s=e.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=x.now();var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(s=e.apply(o,i),o=i=null),s}},x.wrap=function(e,t){return x.partial(t,e)},x.negate=function(e){return function(){return!e.apply(this,arguments)}},x.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},x.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},x.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}},x.once=x.partial(x.before,2);var N=!{toString:null}.propertyIsEnumerable("toString"),M=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];x.keys=function(e){if(!x.isObject(e))return[];if(y)return y(e);var t=[];for(var n in e)x.has(e,n)&&t.push(n);return N&&s(e,t),t},x.allKeys=function(e){if(!x.isObject(e))return[];var t=[];for(var n in e)t.push(n);return N&&s(e,t),t},x.values=function(e){for(var t=x.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},x.mapObject=function(e,t,n){t=_(t,n);for(var r,i=x.keys(e),o=i.length,a={},s=0;o>s;s++)r=i[s],a[r]=t(e[r],r,e);return a},x.pairs=function(e){for(var t=x.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},x.invert=function(e){for(var t={},n=x.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=C(x.allKeys),x.extendOwn=x.assign=C(x.keys),x.findKey=function(e,t,n){t=_(t,n);for(var r,i=x.keys(e),o=0,a=i.length;a>o;o++)if(r=i[o],t(e[r],r,e))return r},x.pick=function(e,t,n){var r,i,o={},a=e;if(null==a)return o;x.isFunction(t)?(i=x.allKeys(a),r=E(t,n)):(i=L(arguments,!1,!1,1),r=function(e,t,n){return t in n},a=Object(a));for(var s=0,l=i.length;l>s;s++){var c=i[s],u=a[c];r(u,c,a)&&(o[c]=u)}return o},x.omit=function(e,t,n){if(x.isFunction(t))t=x.negate(t);else{var r=x.map(L(arguments,!1,!1,1),String);t=function(e,t){return!x.contains(r,t)}}return x.pick(e,t,n)},x.defaults=C(x.allKeys,!0),x.create=function(e,t){var n=T(e);return t&&x.extendOwn(n,t),n},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e},x.isMatch=function(e,t){var n=x.keys(t),r=n.length;if(null==e)return!r;for(var i=Object(e),o=0;r>o;o++){var a=n[o];if(t[a]!==i[a]||!(a in i))return!1}return!0};var I=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var i=m.call(e);if(i!==m.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}var o="[object Array]"===i;if(!o){if("object"!=typeof e||"object"!=typeof t)return!1;var a=e.constructor,s=t.constructor;if(a!==s&&!(x.isFunction(a)&&a instanceof a&&x.isFunction(s)&&s instanceof s)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var l=n.length;l--;)if(n[l]===e)return r[l]===t;if(n.push(e),r.push(t),o){if(l=e.length,l!==t.length)return!1;for(;l--;)if(!I(e[l],t[l],n,r))return!1}else{var c,u=x.keys(e);if(l=u.length,x.keys(t).length!==l)return!1;for(;l--;)if(c=u[l],!x.has(t,c)||!I(e[c],t[c],n,r))return!1}return n.pop(),r.pop(),!0};x.isEqual=function(e,t){return I(e,t)},x.isEmpty=function(e){return null==e?!0:D(e)&&(x.isArray(e)||x.isString(e)||x.isArguments(e))?0===e.length:0===x.keys(e).length},x.isElement=function(e){return!(!e||1!==e.nodeType)},x.isArray=v||function(e){return"[object Array]"===m.call(e)},x.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},x.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){x["is"+e]=function(t){return m.call(t)==="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return x.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(x.isFunction=function(e){return"function"==typeof e||!1}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!==+e},x.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===m.call(e)},x.isNull=function(e){return null===e},x.isUndefined=function(e){return void 0===e},x.has=function(e,t){return null!=e&&g.call(e,t)},x.noConflict=function(){return l._=c,this},x.identity=function(e){return e},x.constant=function(e){return function(){return e}},x.noop=function(){},x.property=S,x.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},x.matcher=x.matches=function(e){return e=x.extendOwn({},e),function(t){return x.isMatch(t,e)}},x.times=function(e,t,n){var r=Array(Math.max(0,e));t=E(t,n,1);for(var i=0;e>i;i++)r[i]=t(i);return r},x.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},x.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=x.invert(B),j=function(e){var t=function(t){return e[t]},n="(?:"+x.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}};x.escape=j(B),x.unescape=j(P),x.result=function(e,t,n){var r=null==e?void 0:e[t];return void 0===r&&(r=n),x.isFunction(r)?r.call(e):r};var $=0;x.uniqueId=function(e){var t=++$+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,W={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},U=/\\|'|\r|\n|\u2028|\u2029/g,V=function(e){return"\\"+W[e]};x.template=function(e,t,n){!t&&n&&(t=n),t=x.defaults({},t,x.templateSettings);var r=RegExp([(t.escape||z).source,(t.interpolate||z).source,(t.evaluate||z).source].join("|")+"|$","g"),i=0,o="__p+='";e.replace(r,function(t,n,r,a,s){return o+=e.slice(i,s).replace(U,V),i=s+t.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(t.variable||"obj","_",o)}catch(s){throw s.source=o,s}var l=function(e){return a.call(this,e,x)},c=t.variable||"obj";return l.source="function("+c+"){\n"+o+"}",l},x.chain=function(e){var t=x(e);return t._chain=!0,t};var H=function(e,t){return e._chain?x(t).chain():t};x.mixin=function(e){x.each(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return h.apply(e,arguments),H(this,n.apply(x,e))}})},x.mixin(x),x.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=u[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],H(this,n)}}),x.each(["concat","join","slice"],function(e){var t=u[e];x.prototype[e]=function(){return H(this,t.apply(this._wrapped,arguments))}}),x.prototype.value=function(){return this._wrapped},x.prototype.valueOf=x.prototype.toJSON=x.prototype.value,x.prototype.toString=function(){return""+this._wrapped},r=[],i=function(){return x}.apply(t,r),!(void 0!==i&&(e.exports=i))}).call(this)},238:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){n(this,e),this.fileAccessorDelegate=null}return r(e,[{key:"get",value:function(){var e;(e=this.fileAccessorDelegate).get.apply(e,arguments)}},{key:"getSync",value:function(){var e;return(e=this.fileAccessorDelegate).getSync.apply(e,arguments)}},{key:"listFiles",value:function(){var e;(e=this.fileAccessorDelegate).listFiles.apply(e,arguments)}},{key:"listImages",value:function(){var e;(e=this.fileAccessorDelegate).listImages.apply(e,arguments)}},{key:"listCode",value:function(){var e;(e=this.fileAccessorDelegate).listCode.apply(e,arguments)}},{key:"save",value:function(){var e;(e=this.fileAccessorDelegate).save.apply(e,arguments)}},{key:"saveManuscript",value:function(){var e;(e=this.fileAccessorDelegate).saveManuscript.apply(e,arguments)}},{key:"newImage",value:function(){var e;(e=this.fileAccessorDelegate).newImage.apply(e,arguments)}},{key:"new",value:function(){var e;(e=this.fileAccessorDelegate)["new"].apply(e,arguments)}},{key:"delete",value:function(){var e;(e=this.fileAccessorDelegate)["delete"].apply(e,arguments)}},{key:"isSetup",value:function(){null!==this.fileAccessorDelegate}},{key:"setup",value:function(e,t){this.fileAccessorDelegate=new e(t)}},{key:"setCursor",value:function(){var e;(e=this.fileAccessorDelegate).setCursor.apply(e,arguments)}},{key:"onDelete",value:function(){var e;(e=this.fileAccessorDelegate).onDelete.apply(e,arguments)}},{key:"onManuscriptChange",value:function(){var e;(e=this.fileAccessorDelegate).onManuscriptChange.apply(e,arguments)}},{key:"onAdd",value:function(){var e;(e=this.fileAccessorDelegate).onAdd.apply(e,arguments)}},{key:"onProgress",value:function(){var e;(e=this.fileAccessorDelegate).onProgress.apply(e,arguments)}},{key:"onProgressStarted",value:function(){var e;(e=this.fileAccessorDelegate).onProgressStarted.apply(e,arguments)}},{key:"supportsImageUploads",value:function(){return this.fileAccessorDelegate.supportsImageUploads}},{key:"onMergeConflicts",value:function(){var e;return(e=this.fileAccessorDelegate).onMergeConflicts.apply(e,arguments)}}]),e}();t["default"]=new i,e.exports=t["default"]},368:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(238),o=r(i),a=/src="images\/([\w,\s-]+\.(?:(?:png)|(?:jpg)|(?:jpeg)|(?:gif)|(?:bmp)))/,s=new RegExp(a.source,"g"),l=function(e,t){var n=e.match(s),r=!0,i=!1,l=void 0;try{for(var c,u=(n||[])[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var d=c.value,p=d.substr(d.lastIndexOf("/")+1),h=o["default"].getSync(p,"image",t),f=void 0;h?(h.data?f="data:"+h.mimetype.string+";base64,"+h.data:h.url&&(f=h.url),e=e.replace(a,'src="'+f)):o["default"].get(p,t,"image")}}catch(m){i=!0,l=m}finally{try{!r&&u["return"]&&u["return"]()}finally{if(i)throw l}}return e};t.fixImagePaths=l;var c=function(e,t){var n=void 0;if(!(n=localStorage.getItem(e)))return t;try{return n=JSON.parse(n)}catch(r){return n}};t.getCached=c;var u=function(e,t){return localStorage.setItem(e,"string"==typeof t?t:JSON.stringify(t)),t};t.setCached=u},387:function(e,t){}});