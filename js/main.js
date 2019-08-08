/*
 * Third party
 */
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
/*!
  LegoMushroom @legomushroom http://legomushroom.com
  MIT License 2014
 */
(function(){var e;e=function(){function e(e){this.o=null!=e?e:{},window.isAnyResizeEventInited||(this.vars(),this.redefineProto())}return e.prototype.vars=function(){return window.isAnyResizeEventInited=!0,this.allowedProtos=[HTMLDivElement,HTMLFormElement,HTMLLinkElement,HTMLBodyElement,HTMLParagraphElement,HTMLFieldSetElement,HTMLLegendElement,HTMLLabelElement,HTMLButtonElement,HTMLUListElement,HTMLOListElement,HTMLLIElement,HTMLHeadingElement,HTMLQuoteElement,HTMLPreElement,HTMLBRElement,HTMLFontElement,HTMLHRElement,HTMLModElement,HTMLParamElement,HTMLMapElement,HTMLTableElement,HTMLTableCaptionElement,HTMLImageElement,HTMLTableCellElement,HTMLSelectElement,HTMLInputElement,HTMLTextAreaElement,HTMLAnchorElement,HTMLObjectElement,HTMLTableColElement,HTMLTableSectionElement,HTMLTableRowElement],this.timerElements={img:1,textarea:1,input:1,embed:1,object:1,svg:1,canvas:1,tr:1,tbody:1,thead:1,tfoot:1,a:1,select:1,option:1,optgroup:1,dl:1,dt:1,br:1,basefont:1,font:1,col:1,iframe:1}},e.prototype.redefineProto=function(){var e,t,n,o;return t=this,o=function(){var o,i,r,a;for(r=this.allowedProtos,a=[],e=o=0,i=r.length;i>o;e=++o)n=r[e],null!=n.prototype&&a.push(function(e){var n,o;return n=e.prototype.addEventListener||e.prototype.attachEvent,function(n){var o;return o=function(){var e;return(this!==window||this!==document)&&(e="onresize"===arguments[0]&&!this.isAnyResizeEventInited,e&&t.handleResize({args:arguments,that:this})),n.apply(this,arguments)},e.prototype.addEventListener?e.prototype.addEventListener=o:e.prototype.attachEvent?e.prototype.attachEvent=o:void 0}(n),o=e.prototype.removeEventListener||e.prototype.detachEvent,function(t){var n;return n=function(){return this.isAnyResizeEventInited=!1,this.iframe&&this.removeChild(this.iframe),t.apply(this,arguments)},e.prototype.removeEventListener?e.prototype.removeEventListener=n:e.prototype.detachEvent?e.prototype.detachEvent=wrappedListener:void 0}(o)}(n));return a}.call(this)},e.prototype.handleResize=function(e){var t,n,o,i,r,a;return n=e.that,this.timerElements[n.tagName.toLowerCase()]?this.initTimer(n):(o=document.createElement("iframe"),n.appendChild(o),o.style.width="100%",o.style.height="100%",o.style.position="absolute",o.style.zIndex=-999,o.style.opacity=0,o.style.top=0,o.style.left=0,t=window.getComputedStyle?getComputedStyle(n):n.currentStyle,r="static"===t.position&&""===n.style.position,i=""===t.position&&""===n.style.position,(r||i)&&(n.style.position="relative"),null!=(a=o.contentWindow)&&(a.onresize=function(e){return function(){return e.dispatchEvent(n)}}(this)),n.iframe=o),n.isAnyResizeEventInited=!0},e.prototype.initTimer=function(e){var t,n;return n=0,t=0,this.interval=setInterval(function(o){return function(){var i,r;return r=e.offsetWidth,i=e.offsetHeight,r!==n||i!==t?(o.dispatchEvent(e),n=r,t=i):void 0}}(this),this.o.interval||200)},e.prototype.dispatchEvent=function(e){var t;return document.createEvent?(t=document.createEvent("HTMLEvents"),t.initEvent("onresize",!1,!1),e.dispatchEvent(t)):document.createEventObject?(t=document.createEventObject(),e.fireEvent("onresize",t)):!1},e.prototype.destroy=function(){var e,t,n,o,i,r,a;for(clearInterval(this.interval),this.interval=null,window.isAnyResizeEventInited=!1,t=this,r=this.allowedProtos,a=[],e=o=0,i=r.length;i>o;e=++o)n=r[e],null!=n.prototype&&a.push(function(e){var t;return t=e.prototype.addEventListener||e.prototype.attachEvent,e.prototype.addEventListener?e.prototype.addEventListener=Element.prototype.addEventListener:e.prototype.attachEvent&&(e.prototype.attachEvent=Element.prototype.attachEvent),e.prototype.removeEventListener?e.prototype.removeEventListener=Element.prototype.removeEventListener:e.prototype.detachEvent?e.prototype.detachEvent=Element.prototype.detachEvent:void 0}(n));return a},e}(),"function"==typeof define&&define.amd?define("any-resize-event",[],function(){return new e}):"object"==typeof module&&"object"==typeof module.exports?module.exports=new e:("undefined"!=typeof window&&null!==window&&(window.AnyResizeEvent=e),"undefined"!=typeof window&&null!==window&&(window.anyResizeEvent=new e))}).call(this);
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);
!function(t,o){"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=r({},o,t),this.init()}function o(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function e(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&this.opts.closeMethods.indexOf("overlay")!==-1||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),this.opts.closeMethods.indexOf("button")!==-1&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),this.opts.closeMethods.indexOf("button")!==-1&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function s(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function i(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:l.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:n.bind(this)},this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function n(t){this.opts.closeMethods.indexOf("escape")!==-1&&27===t.which&&this.isOpen()&&this.close()}function l(t){this.opts.closeMethods.indexOf("overlay")!==-1&&!d(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function d(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function a(){this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}function h(){var t,o=document.createElement("tingle-test-transition"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==o.style[t])return e[t]}var c=h();return t.prototype.init=function(){this.modal||(e.call(this),i.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter())},t.prototype.destroy=function(){null!==this.modal&&(a.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.open=function(){var t=this;"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),document.body.classList.add("tingle-enabled"),this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),c?this.modal.addEventListener(c,function o(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(c,o,!1)},!1):"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),this.checkOverflow()},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.close=function(){if("function"==typeof this.opts.beforeClose){var t=this.opts.beforeClose.call(this);if(!t)return}document.body.classList.remove("tingle-enabled"),this.modal.classList.remove("tingle-modal--visible");var o=this;c?this.modal.addEventListener(c,function t(){o.modal.removeEventListener(c,t,!1),o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this)},!1):(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this))},t.prototype.setContent=function(t){"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t))},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){s.call(this)},t.prototype.setFooterContent=function(t){this.modalBoxFooter.innerHTML=t},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),o.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight,o=this.modalBox.clientHeight;return o>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(o.call(this),this.setStickyFooter(!0)))},{modal:t}});
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll,r=o?n.forward:n.backward;for(var s in this.waypoints[i]){var l=this.waypoints[i][s],a=n.oldScroll<l.triggerPoint,h=n.newScroll>=l.triggerPoint,p=a&&h,u=!a&&!h;(p||u)&&(l.queueTrigger(r),t[l.group.id]=l.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var l in this.waypoints[r]){var a,h,p,u,c,f=this.waypoints[r][l],d=f.options.offset,y=f.triggerPoint,g=0,w=null==y;f.element!==f.element.window&&(g=f.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(f):"string"==typeof d&&(d=parseFloat(d),f.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),a=s.contextScroll-s.contextOffset,f.triggerPoint=g+a-d,h=y<s.oldScroll,p=f.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!w&&u?(f.queueTrigger(s.backward),n[f.group.id]=f.group):!w&&c?(f.queueTrigger(s.forward),n[f.group.id]=f.group):w&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),n[f.group.id]=f.group)}}return o.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var l=n[r];(l.options.continuous||r===n.length-1)&&l.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints),n=i===this.waypoints.length-1;return n?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){return t===t.window}function e(e){return t(e)?e:e.defaultView}function i(t){this.element=t,this.handlers={}}var n=window.Waypoint;i.prototype.innerHeight=function(){var e=t(this.element);return e?this.element.innerHeight:this.element.clientHeight},i.prototype.innerWidth=function(){var e=t(this.element);return e?this.element.innerWidth:this.element.clientWidth},i.prototype.off=function(t,e){function i(t,e,i){for(var n=0,o=e.length-1;o>n;n++){var r=e[n];i&&i!==r||t.removeEventListener(r)}}var n=t.split("."),o=n[0],r=n[1],s=this.element;if(r&&this.handlers[r]&&o)i(s,this.handlers[r][o],e),this.handlers[r][o]=[];else if(o)for(var l in this.handlers)i(s,this.handlers[l][o]||[],e),this.handlers[l][o]=[];else if(r&&this.handlers[r]){for(var a in this.handlers[r])i(s,this.handlers[r][a],e);this.handlers[r]={}}},i.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,i=e(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+i.pageYOffset-t.clientTop,left:n.left+i.pageXOffset-t.clientLeft}},i.prototype.on=function(t,e){var i=t.split("."),n=i[0],o=i[1]||"__default",r=this.handlers[o]=this.handlers[o]||{},s=r[n]=r[n]||[];s.push(e),this.element.addEventListener(n,e)},i.prototype.outerHeight=function(e){var i,n=this.innerHeight();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginTop,10),n+=parseInt(i.marginBottom,10)),n},i.prototype.outerWidth=function(e){var i,n=this.innerWidth();return e&&!t(this.element)&&(i=window.getComputedStyle(this.element),n+=parseInt(i.marginLeft,10),n+=parseInt(i.marginRight,10)),n},i.prototype.scrollLeft=function(){var t=e(this.element);return t?t.pageXOffset:this.element.scrollLeft},i.prototype.scrollTop=function(){var t=e(this.element);return t?t.pageYOffset:this.element.scrollTop},i.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}for(var e=Array.prototype.slice.call(arguments),i=1,n=e.length;n>i;i++)t(e[0],e[i]);return e[0]},i.inArray=function(t,e,i){return null==e?-1:e.indexOf(t,i)},i.isEmptyObject=function(t){for(var e in t)return!1;return!0},n.adapters.push({name:"noframework",Adapter:i}),n.Adapter=i}();

/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function() {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);
/*! owl.carousel2.thumbs - v0.1.8 | (c) 2016 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
!function(a,b,c,d){"use strict";var e=function(b){this.owl=b,this._thumbcontent=[],this._identifier=0,this.owl_currentitem=this.owl.options.startPosition,this.$element=this.owl.$element,this._handlers={"prepared.owl.carousel":a.proxy(function(b){if(!b.namespace||!this.owl.options.thumbs||this.owl.options.thumbImage||this.owl.options.thumbsPrerendered||this.owl.options.thumbImage){if(b.namespace&&this.owl.options.thumbs&&this.owl.options.thumbImage){var c=a(b.content).find("img");this._thumbcontent.push(c)}}else a(b.content).find("[data-thumb]").attr("data-thumb")!==d&&this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"))},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this.owl.options.thumbs&&(this.render(),this.listen(),this._identifier=this.owl.$element.data("slider-id"),this.setActive())},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this.owl.options.thumbs&&(this._identifier=this.owl.$element.data("slider-id"),this.setActive())},this)},this.owl.options=a.extend({},e.Defaults,this.owl.options),this.owl.$element.on(this._handlers)};e.Defaults={thumbs:!0,thumbImage:!1,thumbContainerClass:"owl-thumbs",thumbItemClass:"owl-thumb-item",moveThumbsInside:!1},e.prototype.listen=function(){var b=this.owl.options;b.thumbsPrerendered&&(this._thumbcontent._thumbcontainer=a("."+b.thumbContainerClass)),a(this._thumbcontent._thumbcontainer).on("click",this._thumbcontent._thumbcontainer.children(),a.proxy(function(c){this._identifier=a(c.target).closest("."+b.thumbContainerClass).data("slider-id");var d=a(c.target).parent().is(this._thumbcontent._thumbcontainer)?a(c.target).index():a(c.target).closest("."+b.thumbItemClass).index();b.thumbsPrerendered?a("[data-slider-id="+this._identifier+"]").trigger("to.owl.carousel",[d,b.dotsSpeed,!0]):this.owl.to(d,b.dotsSpeed),c.preventDefault()},this))},e.prototype.render=function(){var b=this.owl.options;b.thumbsPrerendered?(this._thumbcontent._thumbcontainer=a("."+b.thumbContainerClass),b.moveThumbsInside&&this._thumbcontent._thumbcontainer.appendTo(this.$element)):this._thumbcontent._thumbcontainer=a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);var c;if(b.thumbImage)for(c=0;c<this._thumbcontent.length;++c)this._thumbcontent._thumbcontainer.append("<button class="+b.thumbItemClass+'><img src="'+this._thumbcontent[c].attr("src")+'" alt="'+this._thumbcontent[c].attr("alt")+'" /></button>');else for(c=0;c<this._thumbcontent.length;++c)this._thumbcontent._thumbcontainer.append("<button class="+b.thumbItemClass+">"+this._thumbcontent[c]+"</button>")},e.prototype.setActive=function(){this.owl_currentitem=this.owl._current-this.owl._clones.length/2,this.owl_currentitem===this.owl._items.length&&(this.owl_currentitem=0);var b=this.owl.options,c=b.thumbsPrerendered?a("."+b.thumbContainerClass+'[data-slider-id="'+this._identifier+'"]'):this._thumbcontent._thumbcontainer;c.children().filter(".active").removeClass("active"),c.children().eq(this.owl_currentitem).addClass("active")},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this.owl.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Thumbs=e}(window.Zepto||window.jQuery,window,document);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*!
 * VERSION: 1.7.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,a="client"+s,o=document.body;return i===e||i===t||i===o?Math.max(t[n],o[n])-(e["inner"+s]||Math.max(t[a],o[a])):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.4",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,a=r-this.xPrev;this._autoKill&&(!this.skipX&&(a>7||-7>a)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();



/*
 * Custom
 */
'use strict';
var bdsm = {};
var waypointIgnor = false;
var isAnimate = false;
var currentSection = $('#hero');
var rooms = [];
$('.interiors').each(function(index){rooms.push([index, 0])});
var currentRoom = rooms[0];

function getOffset(el, pos) {
	let offset = $(el).offset();
	if (!pos) {
		return offset;
	} else if (pos == 'top') {
		return offset.top;
	} else if (pos == 'left') {
		return offset.left;
	}
}

function detectmob() {
	if (navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i) )
			return true;
		else 
			return false;
}

function scrollToPrevious() {
	console.log('scrollToPrevious');
  var prevElement = currentSection.prevAll('.section')
  if (prevElement.length > 0 && !isAnimate) gotoelement('#' + prevElement.attr('id'), 1000, 0);
}

function scrollToNext() {
	console.log('scrollToNext');
  var nextElement = currentSection.nextAll('.section')
  if (nextElement.length > 0 && !isAnimate) gotoelement('#' + nextElement.attr('id'), 1000, 0);
}



if (detectmob()) {
	$('.interiors')
		.removeClass('active')
		.removeClass('active-up')
		.removeClass('active-down')
		.removeClass('prev-up')
		.removeClass('prev-down');
} 

function gotoelement(element, speed, offset){
		isAnimate = true;
		$('html, body').animate({
			scrollTop: $(element).offset().top + offset
		}, speed, function(){
			isAnimate = false;
			currentSection = $(element);
		});
}

;
(function($, window, document, undefined) {

	/* ==================================================
	/* heroParalax Анимация hero секции при скроле
	/* ==================================================*/
	bdsm.heroParalax = function() {

		$(window).scroll(function(e) {
			e = e || window.event;
			let y = $(this).scrollTop();

			if (!detectmob() || $('#burgerBtn').css('display') !== 'block') { // if not mobile device
				$('.hero__image').css({ 'transform': 'translateY(' + y * -0.25 + 'px)' });
				$('.main-text').css({ 'transform': 'translateX(' + y * 0.2 + 'px)' });
				$('.hero__logo').css({ 'transform': 'translateY(' + y * 0.015 + 'px)' });
				$('.read-more').css({ 'transform': 'translateY(' + y * -0.4 + 'px)' });
			}
		});
	} 

	/* ==================================================
	/* waypoints
	/* ==================================================*/
	bdsm.waypoints = function() {
		if (!detectmob() || $('#burgerBtn').css('display') !== 'block') {
			var waypoint3 = new Waypoint({
				element: document.getElementById('portfolio'),
				handler: function(dir) {
					if (dir == 'down') {
						$('.page-nav__items-group').find('.page-nav__link').each(function(){
							if ($(this).attr('data-scroll-to') === '#portfolio' )
								$(this).addClass('active');
								// $('#nav').addClass('dark');
						});
						$('#portfolio').css({'background-color': '#8ba4bc'});

					}
				},
				offset: '50%'
			});
			var waypoint6 = new Waypoint({
				element: document.getElementById('portfolio'),
				handler: function(dir) {
					if (dir == 'up') {
						$('.page-nav__items-group').find('.page-nav__link').each(function(){
							if ($(this).attr('data-scroll-to') == '#portfolio' )
								$(this).addClass('active'); 
								// $('#nav').addClass('dark');
						});
						$('#portfolio').css({'background-color': '#8ba4bc'});

					}
				},
				offset: '-50%'
			});
			var waypoint4 = new Waypoint({
				element: document.getElementById('portfolio'),
				handler: function(dir) {
					if (dir == 'down') {
						$('.page-nav__items-group').find('.page-nav__link').removeClass('active');
						$('#portfolio').css({'background-color': '#1a1a1a'});
						// $('#nav').removeClass('dark');

					}
				},
				offset: '-50%'
			});
			var waypoint5 = new Waypoint({
				element: document.getElementById('portfolio'),
				handler: function(dir) {
					if (dir == 'up') {
						$('.page-nav__items-group').find('.page-nav__link').removeClass('active');
						$('#portfolio').css({'background-color': '#1a1a1a'});
						// $('#nav').removeClass('dark');
					}
				},
				offset: '0'
			});
		}
	}

	/* ==================================================
	/* scrollTo Скролинг до секции по клику
	/* ==================================================*/
	bdsm.scrollTo = function() {
		$("[data-scroll-to]").click(function() {
			if (detectmob() && $('#body').hasClass('navigation-mobile'))
				menuTogle();
			waypointIgnor = true;
			var $this = $(this),
				toElement = $this.attr('data-scroll-to'),
				$offset = +$this.attr('data-scroll-offset') || 0,
				$speed = $this.attr('data-scroll-speed') * 1 || 1000;

				gotoelement(toElement, $speed, $offset)

		});
		$(window).bind('mousewheel', function(e) {waypointIgnor = false;});
	}

	/* ==================================================
	/* mobileMenu Поведение мобильной навигации
	/* ==================================================*/
	bdsm.mobileMenu = function() {
		function menuTogle() {
			var body = document.getElementById('body');
			var mobileBodyContent = document.getElementById('mobileBodyContent');
			body.classList.toggle('navigation-mobile');
			mobileBodyContent.classList.toggle('navigation-mobile');
		}

		burgerBtn.addEventListener('click', function() {
			menuTogle();
		}, false);
	}

	/* ==================================================
	/* desctopMenu Поведение десктопной навигации
	/* ==================================================*/
	bdsm.desctopMenu = function() {

		$('.page-nav__items-group ul')
			.mouseenter(function() {
	
				if ($('.page-nav').hasClass('nav-interiors-init')) {
					
					$('.nav-interiors').css({ 'transform': 'translateX(-14%)' });
					$('.page-nav__items-group ul').css({ 'transform': 'translateX(0)' });
				}
			})
			.mouseleave(function() {
				if ($('.page-nav').hasClass('nav-interiors-init')) {
					
					$('.nav-interiors').css({ 'transform': 'translateX(0%)' });
					$('.page-nav__items-group ul').css({ 'transform': 'translateX(65%)' });
				}
			});
	}

	/* ==================================================
	/* slick Поведение слайдеров
	/* ==================================================*/
	bdsm.slick = function() {

		$('.portfolio__authors-slider').slick({
	    dots : false,
	    slidesToShow :1,
	    arrows:true,
			prevArrow: '<div class="slick-prev slick-arrow" ><i class="i i_large_chevron_left"</div>',
			nextArrow: '<div class="slick-next slick-arrow" ><i class="i i_large_chevron_right"</div>'
	  });
	  
		$('.portfolio__slider').slick({
	    dots : false,
	    slidesToShow :1,
	    arrows:true,
			prevArrow: '<div class="slick-prev slick-arrow" ><i class="i i_large_chevron_left"</div>',
			nextArrow: '<div class="slick-next slick-arrow" ><i class="i i_large_chevron_right"</div>'
	  });

		$('.gadgets-carousel').slick({
	    dots : true,
	    slidesToShow :3,
	    arrows:true,
			prevArrow: '<div class="slick-prev slick-arrow" ><i class="i i_large_chevron_left"</div>',
			nextArrow: '<div class="slick-next slick-arrow" ><i class="i i_large_chevron_right"</div>',
	    responsive: [

	      {
	        breakpoint: 1470,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	  });

		$('.interiors__slider').each(function() {
			let ths = $(this);

			ths.find('.item img').each(function(i) {
				let imgURL = $(this).attr('src');
				ths.find('.interiors__thumbs').append("<li data-slide='" + i + "' ><img src='" + imgURL + "' alt='' /></li>");
			});
		});

		$('.slick').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			autoplay: false,
			prevArrow: '<div class="slick-prev slick-arrow" ><i class="i i_large_chevron_left"</div>',
			nextArrow: '<div class="slick-next slick-arrow" ><i class="i i_large_chevron_right"</div>'
		});

		$('.interiors__thumbs li').click(function(e) {
			e.preventDefault();
			var slideno = $(this).data('slide');
			$('.slick').slick('slickGoTo', slideno);
		});

		$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var mySlideNumber = nextSlide;
			currentRoom[1] = nextSlide;

			$(this).parent().find('.interiors__thumbs li').removeClass('active');
			$(this).parent().find('.interiors__thumbs li').eq(mySlideNumber).addClass('active');
		});
	}

	/* ==================================================
	/* Высота контрола
	/* ==================================================*/
	bdsm.controlsAdaptive = function() {

		$(window).resize(function() {
			$('html, body').stop();
			gotoelement('#' + currentSection.attr('id'), 0, 0)
			var interiors = $('.interiors');
			var controls = $('.rooms__control');
			var controlsgroup = $('.rooms__control-group').not('.rooms__control-group--small');
			var controlsgroupSM = $('.rooms__control-group--small');
			var controlsHeight = $('.rooms__control-group').height();

			interiors.each(function(){
				var ths = $(this);
				var thsHeight = $(this).height();
				var descHeight = ths.find('.interiors__rooms').height();
				if (ths.hasClass('active') && window.innerHeight < 748 && window.innerHeight > 690){
					controlsgroup.removeClass('horizontal');
					controlsgroupSM.removeClass('horizontal');
					controlsgroup.css({'height': thsHeight-descHeight-130+'px', 'width': ((thsHeight-descHeight-130) / 2) - 5 + 'px'});
					controlsgroupSM.css({'top': 'auto', 'height': '56px', 'width': 56 / 2 - 5 + 'px', 'left': ((thsHeight-descHeight-130) / 2) - 5 + 'px' });
				} else if ( window.innerHeight < 690 ) {
					controlsgroup.addClass('horizontal');
					controlsgroupSM.addClass('horizontal');
					controlsgroupSM.css({'top': '0','left': '', 'height': 25+'px', 'width': 25 * 2 + 'px' });
					controlsgroup.css({'height': 25+'px', 'width': 25 * 2 + 'px'});
				}
			});

		});

		$(window).trigger('resize');

	}

	bdsm.formSubmit = function(data) {
	}

	/* ==================================================
	/* modal
	/* ==================================================*/
	bdsm.modal = function() {

    /**
    * Modal Tiny no footer
    */
   var modalContent = '';
   var modalTitle = $('.modal-form .info.h3');
   var modalSubTitle = $('.modal-form .info.h4');
   var inputRoomNumber = $('.modal-form .modal-form__room-number');
   var curentRoomNumber = 0;
   var form;
   var modalBox = $('.tingle-modal-box');
   var bgURL = '';
   var roomsPrices = '';

    var modalForm = new tingle.modal({
    		footer: true,
        onClose: function() {
        },
        onOpen: function() {
        },
        beforeOpen: function() {
           modalForm.setContent(document.querySelector('.modal-form').innerHTML);
						$('.reservation .modal-form__room-number').val(curentRoomNumber);
						$('.modal-form__img img').attr('src', bgURL);
						$('.modal-form__prices').html(roomsPrices);
						form = $('.reservation .modalform').attr('id', 'modalform');
					   $('#modalform').on('submit', function (e) {
					    e.preventDefault();
					    bdsm.formSubmit($(this).serializeArray());
						});
		   	    // close modal
				    $('.modal-form__close').click(function(e){
				    	e.preventDefault();
				    	modalForm.close();
				    });
        },
        beforeClose: function() {
        	modalForm.setContent('');
            return true;
        },
        cssClass: ['reservation']
    });

    modalForm.addFooterBtn('Забронировать номер', 'button tingle-btn--pull-right', function() {
        form.submit();
    });



    var btn = $('.js-modal');
		btn.click(function(){
			curentRoomNumber = +$(this).siblings('.rooms__number').text().substr(1);
			inputRoomNumber.val(curentRoomNumber);
			roomsPrices = $(this).siblings('.rooms__prices').html();
			modalTitle.text('Забронировать номер '+ curentRoomNumber );
			modalSubTitle.text($(this).siblings('.rooms__title').text());
			bgURL = $($(this).parents('.rooms').siblings('.interiors__slider').find('.slick .slick-list .slick-track .item')[1]).find('img').attr('src');
			modalForm.open();

    }); 

	}

})(jQuery, window, document);



$(document).ready(function() {

	bdsm.heroParalax();
	bdsm.waypoints();
	bdsm.scrollTo();
	bdsm.mobileMenu();
	bdsm.desctopMenu();
	bdsm.slick();
	bdsm.controlsAdaptive();
	bdsm.modal();

});



$(document).ready(function() {
	let scroll = true;

	var elem = document.getElementById('rooms');
	var onWheelStop = true;
	var sum = 0;
	var slidestatuswidth = 0;
	var test = false;
	var slidecounter = 0;
	let roomsContent = $('#rooms .slick');
	let roomsLength = roomsContent.length;
	let roomsControls = $('.rooms__controls');
	let stopAnimated = true;

	function roomsInited() {
		roomsControls.append("<div class='rooms__control-pagination'><ul></ul></div>");

		$('.nav-interiors li').each(function(i){
			$(this).attr('data-room-number', i);
		});

		for (let i = 1; i < roomsLength + 1; i++) {
			roomsControls.find('ul').append('<li><a data-room-number="' + (i - 1) + '">' + i + '</a></li>');
		}

		$('#rooms .interiors').each(function(i) { $(this).attr('data-room-number', i); });
		$('.nav-interiors a').each(function(i) { $(this).attr('data-room-number', i); });
	}

	function nextRoom() {
		var interiors = $('#rooms .interiors'),
			slick = $('#rooms .slick');
			slidecounter = currentRoom[0];

		if (slidecounter < slick.length - 1 && !isAnimate) {
			slidecounter++;

			slideContent(slidecounter);


		} else if (slidecounter == slick.length - 1 && !waypointIgnor && !isAnimate) {
			scrollToNext();
		}
	}

	function prevRoom() {
		var interiors = $('#rooms .interiors'),
			slick = $('.slick'),
			rooms = $('.interiors__thumbs'),
			thumbs = $('.interiors__rooms');
			slidecounter = currentRoom[0];

		if (slidecounter > 0 && !isAnimate) {
			slidecounter--;
			slideContent(slidecounter);
		} else if (!isAnimate) {
			scrollToPrevious()
		}
	}

	function onWheel(e) {
		if (!detectmob() || $('#burgerBtn').css('display') !== 'block'){
			e = e || window.event;

			var delta = e.deltaY || e.detail || e.wheelDelta;

			sum = sum + delta;
			slidestatuswidth = Math.abs(slidestatuswidth + delta);

			if (delta > 0 && stopAnimated) {
				nextRoom();
			}
			if (delta < 0 && stopAnimated) {
				prevRoom();
			}

			e.preventDefault();
	}}

	function slideContent(index) {
		stopAnimated = false;
		currentRoom = rooms[index];
		slidecounter = currentRoom[0];

		var interiors = $('#rooms .interiors');
		var prevIndex = 0;
		var slick = $('#rooms .slick'),
			roomsLength = slick.length;
		interiors.removeClass('prev-up');
		interiors.removeClass('prev-down');
		interiors.each(function() {
			var ths = $(this);

			if (ths.hasClass('active') ){ 
				prevIndex = ths.data('room-number');
				if (prevIndex > index ){
				ths.addClass('prev-up');
			} else{
				ths.addClass('prev-down');
			}
				ths.removeClass('active');
				ths.removeClass('active-up');
				ths.removeClass('active-down');
			}

		});

		$('.rooms__control').removeClass('rooms__control--disabled');
		if (index <= 0) {
			slidecounter = 0;
			index = 0;
			$('.rooms__control--left').addClass('rooms__control--disabled');
		}
		if (index >= roomsLength - 1) {
			slidecounter = roomsLength - 1;
			index = roomsLength - 1;
			$('.rooms__control--right').addClass('rooms__control--disabled');
		}

		$('.rooms__control-pagination ul li').removeClass('active');
		$('.rooms__control-pagination ul li').addClass(function(i) {
			if (i == index)
				return "active";
		});
		$('.nav-interiors li').removeClass('active');
		$('.nav-interiors li').addClass(function(i) {
			if (i == index)
				return "active";
		});




		interiors.each(function() {
			var ths = $(this);

			if (ths.data('room-number') == index){
					ths.addClass('active');
				if (prevIndex > index){
					ths.addClass('active-up');
				} else if (prevIndex !== index) {
					ths.addClass('active-down');
				}
			}

		});
	}

	$('.rooms__control--left').click(function() {
			if (slidecounter > 0){
					slidecounter--;
					slideContent(slidecounter);
			}
	});

	$('.rooms__control--right').click(function() {
		if (slidecounter < roomsLength-1){
			slidecounter++;
			slideContent(slidecounter);
		}
	});

	$('.rooms__control--top').click(function() {
		scrollToPrevious();
	});
	$('.rooms__control--bottom').click(function() {
		scrollToNext();
	});


	$('.nav-interiors a').bind('click', function(e) {
		slideContent($(this).data('room-number'));

		e.preventDefault();
	});

	function checkChangeSection(elem, dir){
		if (dir == 'up' && Math.ceil(elem.scrollTop()) == 0 ){

			return true
		}
		if (dir == 'down' && Math.ceil(elem.scrollTop()) >= elem[0].scrollHeight - window.innerHeight ){

			return true
		}
		return false
	}

	$(window).bind('mousewheel', function(e) {
	if (!detectmob() || $('#burgerBtn').css('display') !== 'block'){
			let y = $(this).scrollTop();
			var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
			if (delta > 0 && !isAnimate){
		 		if (currentSection.attr('id') !== 'rooms') {
		    	scrollToNext();
		  	}
			} else if (!isAnimate){
		 		if (currentSection.attr('id') !== 'rooms' ) {
		    	scrollToPrevious();
		  	}
			}
			if (elem.addEventListener) {
				if ('onwheel' in document) {
					// IE9+, FF17+
					elem.addEventListener("wheel", onWheel);
				} else if ('onmousewheel' in document) {
					// устаревший вариант события
					elem.addEventListener("mousewheel", onWheel);
				} else {
					// Firefox < 17
					elem.addEventListener("MozMousePixelScroll", onWheel);
				}
			} else { // IE8-
				elem.attachEvent("onmousewheel", onWheel);
			}
	}
	});

	$('.interiors__slider').on("webkitAnimationEnd oanimationend msAnimationEnd animationend", beforeAnimated );

	function beforeAnimated () {
	  stopAnimated = true;
	}



	$(window).scroll(function(e) {
		if (!detectmob() || $('#burgerBtn').css('display') !== 'block'){
		e = e || window.event;
		let y = $(this).scrollTop();
		if (y >= getOffset('#rooms', 'top') - 10) {
			$('.page-nav__items-group ul').css({ 'transform': "translateX(65%)" });
			$('.nav-interiors').css({ 'transform': "translateX(0)" });
			$('.page-nav').addClass('nav-interiors-init');
			$('.page-nav').removeClass('showHomeLink');
			$('.interiors').each(function(i){
				if (i == 0){
					$(this).addClass('active');
				}
			});
		} else {
			$('.page-nav').removeClass('nav-interiors-init');
			$('.page-nav__items-group ul').css({ 'transform': "translateX(0)" });
			$('.nav-interiors').css({ 'transform': "translateX(-100%)" });
		}

		if (y >= getOffset('#portfolio', 'top') - 10) {
			$('.page-nav').removeClass('nav-interiors-init');
			$('.page-nav__items-group ul').css({ 'transform': "translateX(0)" });
			$('.nav-interiors').css({ 'transform': "translateX(-100%)" });
			$('.page-nav').addClass('showHomeLink');
		} 
	}
	});


	roomsInited();




$(document).keydown(function (event) {
	waypointIgnor = false
 if (event.keyCode == 38) {
    event.preventDefault();
 	if (currentSection.attr('id') == 'rooms') {
    	prevRoom();
  } else {
    scrollToPrevious();
  }
 } else if (event.keyCode == 40) {
    	event.preventDefault();
 		if (currentSection.attr('id') == 'rooms') {
    	nextRoom();
  	} else {
    	scrollToNext();
  	}
 } else if (event.keyCode == 39) {
    	event.preventDefault();
    	if (currentSection.attr('id') == 'rooms') {
		 		$('.slick').each(function(i){
		 			if (i == currentRoom[0]){
		 				$(this).slick("slickNext");
		 			}
		 		});
    	}
 } else if (event.keyCode == 37) {
    	event.preventDefault();
    	if (currentSection.attr('id') == 'rooms') {
		 		$('.slick').each(function(i){
		 			if (i == currentRoom[0]){
		 				$(this).slick("slickPrev");
		 			}
		 		});
    	}
 }
});






});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXJkIHBhcnR5XHJcbiAqL1xyXG4vKiEgalF1ZXJ5IHYzLjIuMSB8IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9T2JqZWN0LmdldFByb3RvdHlwZU9mLGY9Yy5zbGljZSxnPWMuY29uY2F0LGg9Yy5wdXNoLGk9Yy5pbmRleE9mLGo9e30saz1qLnRvU3RyaW5nLGw9ai5oYXNPd25Qcm9wZXJ0eSxtPWwudG9TdHJpbmcsbj1tLmNhbGwoT2JqZWN0KSxvPXt9O2Z1bmN0aW9uIHAoYSxiKXtiPWJ8fGQ7dmFyIGM9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2MudGV4dD1hLGIuaGVhZC5hcHBlbmRDaGlsZChjKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpfXZhciBxPVwiMy4yLjFcIixyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByLmZuLmluaXQoYSxiKX0scz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csdD0vXi1tcy0vLHU9Ly0oW2Etel0pL2csdj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O3IuZm49ci5wcm90b3R5cGU9e2pxdWVyeTpxLGNvbnN0cnVjdG9yOnIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBmLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9mLmNhbGwodGhpcyk6YTwwP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPXIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiByLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoYTwwP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmM8Yj9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6aCxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LHIuZXh0ZW5kPXIuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8ci5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtoPGk7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKHIuaXNQbGFpbk9iamVjdChkKXx8KGU9QXJyYXkuaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmQXJyYXkuaXNBcnJheShjKT9jOltdKTpmPWMmJnIuaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09ci5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LHIuZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKHErTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09ci50eXBlKGEpfSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9ci50eXBlKGEpO3JldHVybihcIm51bWJlclwiPT09Ynx8XCJzdHJpbmdcIj09PWIpJiYhaXNOYU4oYS1wYXJzZUZsb2F0KGEpKX0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYixjO3JldHVybiEoIWF8fFwiW29iamVjdCBPYmplY3RdXCIhPT1rLmNhbGwoYSkpJiYoIShiPWUoYSkpfHwoYz1sLmNhbGwoYixcImNvbnN0cnVjdG9yXCIpJiZiLmNvbnN0cnVjdG9yLFwiZnVuY3Rpb25cIj09dHlwZW9mIGMmJm0uY2FsbChjKT09PW4pKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9qW2suY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7cChhKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UodCxcIm1zLVwiKS5yZXBsYWNlKHUsdil9LGVhY2g6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTA7aWYodyhhKSl7Zm9yKGM9YS5sZW5ndGg7ZDxjO2QrKylpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWt9ZWxzZSBmb3IoZCBpbiBhKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UocyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJih3KE9iamVjdChhKSk/ci5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpoLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6aS5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2Q8YztkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztmPGc7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj0wLGg9W107aWYodyhhKSlmb3IoZD1hLmxlbmd0aDtmPGQ7ZisrKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO2Vsc2UgZm9yKGYgaW4gYSllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtyZXR1cm4gZy5hcHBseShbXSxoKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gZD1mLmNhbGwoYXJndW1lbnRzLDIpLGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGQuY29uY2F0KGYuY2FsbChhcmd1bWVudHMpKSl9LGUuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxyLmd1aWQrKyxlfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpvfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoci5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksci5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtqW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiB3KGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9ci50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIiE9PWMmJiFyLmlzV2luZG93KGEpJiYoXCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhKX12YXIgeD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWhhKCksej1oYSgpLEE9aGEoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz17fS5oYXNPd25Qcm9wZXJ0eSxEPVtdLEU9RC5wb3AsRj1ELnB1c2gsRz1ELnB1c2gsSD1ELnNsaWNlLEk9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEo9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEs9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEw9XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLE09XCJcXFxcW1wiK0srXCIqKFwiK0wrXCIpKD86XCIrSytcIiooWypeJHwhfl0/PSlcIitLK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTCtcIikpfClcIitLK1wiKlxcXFxdXCIsTj1cIjooXCIrTCtcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTStcIikqKXwuKilcXFxcKXwpXCIsTz1uZXcgUmVnRXhwKEsrXCIrXCIsXCJnXCIpLFA9bmV3IFJlZ0V4cChcIl5cIitLK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitLK1wiKyRcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0srXCIqLFwiK0srXCIqXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitLK1wiKihbPit+XXxcIitLK1wiKVwiK0srXCIqXCIpLFM9bmV3IFJlZ0V4cChcIj1cIitLK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrSytcIipcXFxcXVwiLFwiZ1wiKSxUPW5ldyBSZWdFeHAoTiksVT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIkXCIpLFY9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitMK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0wrXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitMK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK00pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK04pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0srXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitLK1wiKig/OihbKy1dfClcIitLK1wiKihcXFxcZCspfCkpXCIrSytcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitKK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrSytcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrSytcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrSytcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sVz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFg9L15oXFxkJC9pLFk9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLCQ9L1srfl0vLF89bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0srXCI/fChcIitLK1wiKXwuKVwiLFwiaWdcIiksYWE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOmQ8MD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sYmE9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csY2E9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9cIlxcMFwiPT09YT9cIlxcdWZmZmRcIjphLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2EuY2hhckNvZGVBdChhLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrYX0sZGE9ZnVuY3Rpb24oKXttKCl9LGVhPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITAmJihcImZvcm1cImluIGF8fFwibGFiZWxcImluIGEpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtHLmFwcGx5KEQ9SC5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxEW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtHPXthcHBseTpELmxlbmd0aD9mdW5jdGlvbihhLGIpe0YuYXBwbHkoYSxILmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzPWImJmIub3duZXJEb2N1bWVudCx3PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09dyYmOSE9PXcmJjExIT09dylyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXcmJihsPVouZXhlYyhhKSkpaWYoZj1sWzFdKXtpZig5PT09dyl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHMmJihqPXMuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKGxbMl0pcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPWxbM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT13KXM9YixyPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShiYSxjYSk6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSksbz1nKGEpLGg9by5sZW5ndGg7d2hpbGUoaC0tKW9baF09XCIjXCIraytcIiBcIitzYShvW2hdKTtyPW8uam9pbihcIixcIikscz0kLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGJ9aWYocil0cnl7cmV0dXJuIEcuYXBwbHkoZCxzLnF1ZXJ5U2VsZWN0b3JBbGwocikpLGR9Y2F0Y2goeCl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUCxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBoYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGlhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gamEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJmEuc291cmNlSW5kZXgtYi5zb3VyY2VJbmRleDtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm5cImZvcm1cImluIGI/Yi5wYXJlbnROb2RlJiZiLmRpc2FibGVkPT09ITE/XCJsYWJlbFwiaW4gYj9cImxhYmVsXCJpbiBiLnBhcmVudE5vZGU/Yi5wYXJlbnROb2RlLmRpc2FibGVkPT09YTpiLmRpc2FibGVkPT09YTpiLmlzRGlzYWJsZWQ9PT1hfHxiLmlzRGlzYWJsZWQhPT0hYSYmZWEoYik9PT1hOmIuZGlzYWJsZWQ9PT1hOlwibGFiZWxcImluIGImJmIuZGlzYWJsZWQ9PT1hfX1mdW5jdGlvbiBwYShhKXtyZXR1cm4gaWEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaWEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1nYS5zdXBwb3J0PXt9LGY9Z2EuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiEhYiYmXCJIVE1MXCIhPT1iLm5vZGVOYW1lfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLHYhPT1uJiYoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9WS50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWphKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSk6KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjLGQsZSxmPWIuZ2V0RWxlbWVudEJ5SWQoYSk7aWYoZil7aWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl07ZT1iLmdldEVsZW1lbnRzQnlOYW1lKGEpLGQ9MDt3aGlsZShmPWVbZCsrXSlpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXX1yZXR1cm5bXX19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwKXJldHVybiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSl9LHI9W10scT1bXSwoYy5xc2E9WS50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoamEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0srXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0srXCIqKD86dmFsdWV8XCIrSitcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxqYShmdW5jdGlvbihhKXthLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitLK1wiKlsqXiR8IX5dPz1cIiksMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxvLmFwcGVuZENoaWxkKGEpLmRpc2FibGVkPSEwLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9WS50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiKlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE4pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9WS50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8WS50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0koayxhKS1JKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SShrLGEpLUkoayxiKTowO2lmKGU9PT1mKXJldHVybiBsYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/bGEoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGdhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2EoYSxudWxsLG51bGwsYil9LGdhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShTLFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZ2EoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZ2EuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxnYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmQy5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZ2EuZXNjYXBlPWZ1bmN0aW9uKGEpe3JldHVybihhK1wiXCIpLnJlcGxhY2UoYmEsY2EpfSxnYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZ2EudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWdhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9Z2Euc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aWEsbWF0Y2g6VixhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShfLGFhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKF8sYWEpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGdhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmdhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBWLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVC50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0srXCIpXCIrYStcIihcIitLK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9Z2EuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6IWJ8fChlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKE8sXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWImJihlPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9pYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SShhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDppYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUCxcIiQxXCIpKTtyZXR1cm4gZFt1XT9pYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZ2EoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczppYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoXyxhYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIFUudGVzdChhfHxcIlwiKXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOm9hKCExKSxkaXNhYmxlZDpvYSghMCksY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnBhKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpwYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6cGEoZnVuY3Rpb24oYSxiLGMpe3JldHVybltjPDA/YytiOmNdfSksZXZlbjpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpwYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2M8YjtjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW5hKGIpO2Z1bmN0aW9uIHJhKCl7fXJhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcmEsZz1nYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpe2MmJiEoZT1RLmV4ZWMoaCkpfHwoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1SLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFAsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVZbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHNhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2I8YztiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiB0YShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1iLm5leHQsZj1lfHxkLGc9YyYmXCJwYXJlbnROb2RlXCI9PT1mLGg9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxlKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpcmV0dXJuIGEoYixjLGUpO3JldHVybiExfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG09W3csaF07aWYoaSl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZykmJmEoYixjLGkpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKWlmKGw9Ylt1XXx8KGJbdV09e30pLGs9bFtiLnVuaXF1ZUlEXXx8KGxbYi51bmlxdWVJRF09e30pLGUmJmU9PT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpYj1iW2RdfHxiO2Vsc2V7aWYoKGo9a1tmXSkmJmpbMF09PT13JiZqWzFdPT09aClyZXR1cm4gbVsyXT1qWzJdO2lmKGtbZl09bSxtWzJdPWEoYixjLGkpKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB1YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB2YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB3YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtoPGk7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHhhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXhhKGQpKSxlJiYhZVt1XSYmKGU9eGEoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dmEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp3YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9d2EocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0koZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXdhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpHLmFwcGx5KGcscil9KX1mdW5jdGlvbiB5YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBJKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtpPGY7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3RhKHVhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2U8ZjtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB4YShpPjEmJnVhKG0pLGk+MSYmc2EoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShQLFwiJDFcIiksYyxpPGUmJnlhKGEuc2xpY2UoaSxlKSksZTxmJiZ5YShhPWEuc2xpY2UoZSkpLGU8ZiYmc2EoYSkpfW0ucHVzaChjKX1yZXR1cm4gdWEobSl9ZnVuY3Rpb24gemEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUUuY2FsbChpKSk7dT13YSh1KX1HLmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eWEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHphKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsaSxqLGssbCxtPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbj0hZSYmZyhhPW0uc2VsZWN0b3J8fGEpO2lmKGM9Y3x8W10sMT09PW4ubGVuZ3RoKXtpZihpPW5bMF09blswXS5zbGljZSgwKSxpLmxlbmd0aD4yJiZcIklEXCI9PT0oaj1pWzBdKS50eXBlJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtpWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksYil8fFtdKVswXSwhYilyZXR1cm4gYzttJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShpLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1mPVYubmVlZHNDb250ZXh0LnRlc3QoYSk/MDppLmxlbmd0aDt3aGlsZShmLS0pe2lmKGo9aVtmXSxkLnJlbGF0aXZlW2s9ai50eXBlXSlicmVhaztpZigobD1kLmZpbmRba10pJiYoZT1sKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLCQudGVzdChpWzBdLnR5cGUpJiZxYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGkuc3BsaWNlKGYsMSksYT1lLmxlbmd0aCYmc2EoaSksIWEpcmV0dXJuIEcuYXBwbHkoYyxlKSxjO2JyZWFrfX19cmV0dXJuKG18fGgoYSxuKSkoZSxiLCFwLGMsIWJ8fCQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8YiksY30sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtpZighYylyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtpZighYyYmXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBhLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEosZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKCFjKXJldHVybiBhW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTtyLmZpbmQ9eCxyLmV4cHI9eC5zZWxlY3RvcnMsci5leHByW1wiOlwiXT1yLmV4cHIucHNldWRvcyxyLnVuaXF1ZVNvcnQ9ci51bmlxdWU9eC51bmlxdWVTb3J0LHIudGV4dD14LmdldFRleHQsci5pc1hNTERvYz14LmlzWE1MLHIuY29udGFpbnM9eC5jb250YWlucyxyLmVzY2FwZVNlbGVjdG9yPXguZXNjYXBlO3ZhciB5PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZyKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sej1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sQT1yLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEIoYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfXZhciBDPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pLEQ9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIEUoYSxiLGMpe3JldHVybiByLmlzRnVuY3Rpb24oYik/ci5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk6Yi5ub2RlVHlwZT9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk6XCJzdHJpbmdcIiE9dHlwZW9mIGI/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09Y30pOkQudGVzdChiKT9yLmZpbHRlcihiLGEsYyk6KGI9ci5maWx0ZXIoYixhKSxyLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jJiYxPT09YS5ub2RlVHlwZX0pKX1yLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/ci5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpyLmZpbmQubWF0Y2hlcyhhLHIuZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sci5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMubGVuZ3RoLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2socihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2I8ZDtiKyspaWYoci5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihjPXRoaXMucHVzaFN0YWNrKFtdKSxiPTA7YjxkO2IrKylyLmZpbmQoYSxlW2JdLGMpO3JldHVybiBkPjE/ci51bmlxdWVTb3J0KGMpOmN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRSh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhRSh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZBLnRlc3QoYSk/cihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBGLEc9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sSD1yLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxGLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkcuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiByP2JbMF06YixyLm1lcmdlKHRoaXMsci5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSksQy50ZXN0KGVbMV0pJiZyLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYilyLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJih0aGlzWzBdPWYsdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6ci5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKHIpOnIubWFrZUFycmF5KGEsdGhpcyl9O0gucHJvdG90eXBlPXIuZm4sRj1yKGQpO3ZhciBJPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEo9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ci5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1yKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGM7YSsrKWlmKHIuY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPVwic3RyaW5nXCIhPXR5cGVvZiBhJiZyKGEpO2lmKCFBLnRlc3QoYSkpZm9yKDtkPGU7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP3IudW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aS5jYWxsKHIoYSksdGhpc1swXSk6aS5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLnVuaXF1ZVNvcnQoci5tZXJnZSh0aGlzLmdldCgpLHIoYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gSyhhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9ci5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEsoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBLKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4geigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHooYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYSxcImlmcmFtZVwiKT9hLmNvbnRlbnREb2N1bWVudDooQihhLFwidGVtcGxhdGVcIikmJihhPWEuY29udGVudHx8YSksci5tZXJnZShbXSxhLmNoaWxkTm9kZXMpKX19LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPXIubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPXIuZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihKW2FdfHxyLnVuaXF1ZVNvcnQoZSksSS50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEw9L1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO2Z1bmN0aW9uIE0oYSl7dmFyIGI9e307cmV0dXJuIHIuZWFjaChhLm1hdGNoKEwpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifXIuQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/TShhKTpyLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9ZXx8YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtyLmVhY2goYixmdW5jdGlvbihiLGMpe3IuaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PXIudHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiByLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9ci5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxjPD1oJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/ci5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGN8fGJ8fChmPWM9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan07ZnVuY3Rpb24gTihhKXtyZXR1cm4gYX1mdW5jdGlvbiBPKGEpe3Rocm93IGF9ZnVuY3Rpb24gUChhLGIsYyxkKXt2YXIgZTt0cnl7YSYmci5pc0Z1bmN0aW9uKGU9YS5wcm9taXNlKT9lLmNhbGwoYSkuZG9uZShiKS5mYWlsKGMpOmEmJnIuaXNGdW5jdGlvbihlPWEudGhlbik/ZS5jYWxsKGEsYixjKTpiLmFwcGx5KHZvaWQgMCxbYV0uc2xpY2UoZCkpfWNhdGNoKGEpe2MuYXBwbHkodm9pZCAwLFthXSl9fXIuZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihiKXt2YXIgYz1bW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLDJdLFtcInJlc29sdmVcIixcImRvbmVcIixyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwxLFwicmVqZWN0ZWRcIl1dLGQ9XCJwZW5kaW5nXCIsZT17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGYuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSxcImNhdGNoXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGUudGhlbihudWxsLGEpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiByLkRlZmVycmVkKGZ1bmN0aW9uKGIpe3IuZWFjaChjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5pc0Z1bmN0aW9uKGFbZFs0XV0pJiZhW2RbNF1dO2ZbZFsxXV0oZnVuY3Rpb24oKXt2YXIgYT1lJiZlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZyLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhiLm5vdGlmeSkuZG9uZShiLnJlc29sdmUpLmZhaWwoYi5yZWplY3QpOmJbZFswXStcIldpdGhcIl0odGhpcyxlP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24oYixkLGUpe3ZhciBmPTA7ZnVuY3Rpb24gZyhiLGMsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaD10aGlzLGk9YXJndW1lbnRzLGo9ZnVuY3Rpb24oKXt2YXIgYSxqO2lmKCEoYjxmKSl7aWYoYT1kLmFwcGx5KGgsaSksYT09PWMucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7aj1hJiYoXCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpJiZhLnRoZW4sci5pc0Z1bmN0aW9uKGopP2U/ai5jYWxsKGEsZyhmLGMsTixlKSxnKGYsYyxPLGUpKTooZisrLGouY2FsbChhLGcoZixjLE4sZSksZyhmLGMsTyxlKSxnKGYsYyxOLGMubm90aWZ5V2l0aCkpKTooZCE9PU4mJihoPXZvaWQgMCxpPVthXSksKGV8fGMucmVzb2x2ZVdpdGgpKGgsaSkpfX0saz1lP2o6ZnVuY3Rpb24oKXt0cnl7aigpfWNhdGNoKGEpe3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmci5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGEsay5zdGFja1RyYWNlKSxiKzE+PWYmJihkIT09TyYmKGg9dm9pZCAwLGk9W2FdKSxjLnJlamVjdFdpdGgoaCxpKSl9fTtiP2soKTooci5EZWZlcnJlZC5nZXRTdGFja0hvb2smJihrLnN0YWNrVHJhY2U9ci5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksYS5zZXRUaW1lb3V0KGspKX19cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYSl7Y1swXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGUpP2U6TixhLm5vdGlmeVdpdGgpKSxjWzFdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oYik/YjpOKSksY1syXVszXS5hZGQoZygwLGEsci5pc0Z1bmN0aW9uKGQpP2Q6TykpfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP3IuZXh0ZW5kKGEsZSk6ZX19LGY9e307cmV0dXJuIHIuZWFjaChjLGZ1bmN0aW9uKGEsYil7dmFyIGc9YlsyXSxoPWJbNV07ZVtiWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2Q9aH0sY1szLWFdWzJdLmRpc2FibGUsY1swXVsyXS5sb2NrKSxnLmFkZChiWzNdLmZpcmUpLGZbYlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZltiWzBdK1wiV2l0aFwiXSh0aGlzPT09Zj92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGZbYlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGUucHJvbWlzZShmKSxiJiZiLmNhbGwoZixmKSxmfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGgsYz1iLGQ9QXJyYXkoYyksZT1mLmNhbGwoYXJndW1lbnRzKSxnPXIuRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtkW2FdPXRoaXMsZVthXT1hcmd1bWVudHMubGVuZ3RoPjE/Zi5jYWxsKGFyZ3VtZW50cyk6YywtLWJ8fGcucmVzb2x2ZVdpdGgoZCxlKX19O2lmKGI8PTEmJihQKGEsZy5kb25lKGgoYykpLnJlc29sdmUsZy5yZWplY3QsIWIpLFwicGVuZGluZ1wiPT09Zy5zdGF0ZSgpfHxyLmlzRnVuY3Rpb24oZVtjXSYmZVtjXS50aGVuKSkpcmV0dXJuIGcudGhlbigpO3doaWxlKGMtLSlQKGVbY10saChjKSxnLnJlamVjdCk7cmV0dXJuIGcucHJvbWlzZSgpfX0pO3ZhciBRPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO3IuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihiLGMpe2EuY29uc29sZSYmYS5jb25zb2xlLndhcm4mJmImJlEudGVzdChiLm5hbWUpJiZhLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2IubWVzc2FnZSxiLnN0YWNrLGMpfSxyLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGIpe2Euc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGJ9KX07dmFyIFI9ci5EZWZlcnJlZCgpO3IuZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIFIudGhlbihhKVtcImNhdGNoXCJdKGZ1bmN0aW9uKGEpe3IucmVhZHlFeGNlcHRpb24oYSl9KSx0aGlzfSxyLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tci5yZWFkeVdhaXQ6ci5pc1JlYWR5KXx8KHIuaXNSZWFkeT0hMCxhIT09ITAmJi0tci5yZWFkeVdhaXQ+MHx8Ui5yZXNvbHZlV2l0aChkLFtyXSkpfX0pLHIucmVhZHkudGhlbj1SLnRoZW47ZnVuY3Rpb24gUygpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxcclxuYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLFMpLHIucmVhZHkoKX1cImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KHIucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUyksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLFMpKTt2YXIgVD1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1yLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylUKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLHIuaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChyKGEpLGMpfSkpLGIpKWZvcig7aDxpO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LFU9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBWKCl7dGhpcy5leHBhbmRvPXIuZXhwYW5kbytWLnVpZCsrfVYudWlkPTEsVi5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sVShhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtyLmNhbWVsQ2FzZShiKV09YztlbHNlIGZvcihkIGluIGIpZVtyLmNhbWVsQ2FzZShkKV09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtyLmNhbWVsQ2FzZShiKV19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jP3RoaXMuZ2V0KGEsYik6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWQpe2lmKHZvaWQgMCE9PWIpe0FycmF5LmlzQXJyYXkoYik/Yj1iLm1hcChyLmNhbWVsQ2FzZSk6KGI9ci5jYW1lbENhc2UoYiksYj1iIGluIGQ/W2JdOmIubWF0Y2goTCl8fFtdKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZFtiW2NdXX0odm9pZCAwPT09Ynx8ci5pc0VtcHR5T2JqZWN0KGQpKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgYVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT1iJiYhci5pc0VtcHR5T2JqZWN0KGIpfX07dmFyIFc9bmV3IFYsWD1uZXcgVixZPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxaPS9bQS1aXS9nO2Z1bmN0aW9uICQoYSl7cmV0dXJuXCJ0cnVlXCI9PT1hfHxcImZhbHNlXCIhPT1hJiYoXCJudWxsXCI9PT1hP251bGw6YT09PSthK1wiXCI/K2E6WS50ZXN0KGEpP0pTT04ucGFyc2UoYSk6YSl9ZnVuY3Rpb24gXyhhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFosXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz0kKGMpfWNhdGNoKGUpe31YLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31yLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gWC5oYXNEYXRhKGEpfHxXLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBYLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtYLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFcuYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtXLnJlbW92ZShhLGIpfX0pLHIuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9WC5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFXLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9ci5jYW1lbENhc2UoZC5zbGljZSg1KSksXyhmLGQsZVtkXSkpKTtXLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe1guc2V0KHRoaXMsYSl9KTpUKHRoaXMsZnVuY3Rpb24oYil7dmFyIGM7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1YLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1fKGYsYSksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe1guc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtYLnJlbW92ZSh0aGlzLGEpfSl9fSksci5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZihhKXJldHVybiBiPShifHxcImZ4XCIpK1wicXVldWVcIixkPVcuZ2V0KGEsYiksYyYmKCFkfHxBcnJheS5pc0FycmF5KGMpP2Q9Vy5hY2Nlc3MoYSxiLHIubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9ci5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1yLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe3IuZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIFcuZ2V0KGEsYyl8fFcuYWNjZXNzKGEsYyx7ZW1wdHk6ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtXLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLHIuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/ci5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1yLnF1ZXVlKHRoaXMsYSxiKTtyLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZyLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1yLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1XLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBhYT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsYmE9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrYWErXCIpKFthLXolXSopJFwiLFwiaVwiKSxjYT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sZGE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09YS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09YS5zdHlsZS5kaXNwbGF5JiZyLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKSYmXCJub25lXCI9PT1yLmNzcyhhLFwiZGlzcGxheVwiKX0sZWE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9O2Z1bmN0aW9uIGZhKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiByLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KHIuY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShyLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZiYS5leGVjKHIuY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsci5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgZ2E9e307ZnVuY3Rpb24gaGEoYSl7dmFyIGIsYz1hLm93bmVyRG9jdW1lbnQsZD1hLm5vZGVOYW1lLGU9Z2FbZF07cmV0dXJuIGU/ZTooYj1jLmJvZHkuYXBwZW5kQ2hpbGQoYy5jcmVhdGVFbGVtZW50KGQpKSxlPXIuY3NzKGIsXCJkaXNwbGF5XCIpLGIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxcIm5vbmVcIj09PWUmJihlPVwiYmxvY2tcIiksZ2FbZF09ZSxlKX1mdW5jdGlvbiBpYShhLGIpe2Zvcih2YXIgYyxkLGU9W10sZj0wLGc9YS5sZW5ndGg7ZjxnO2YrKylkPWFbZl0sZC5zdHlsZSYmKGM9ZC5zdHlsZS5kaXNwbGF5LGI/KFwibm9uZVwiPT09YyYmKGVbZl09Vy5nZXQoZCxcImRpc3BsYXlcIil8fG51bGwsZVtmXXx8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmZGEoZCkmJihlW2ZdPWhhKGQpKSk6XCJub25lXCIhPT1jJiYoZVtmXT1cIm5vbmVcIixXLnNldChkLFwiZGlzcGxheVwiLGMpKSk7Zm9yKGY9MDtmPGc7ZisrKW51bGwhPWVbZl0mJihhW2ZdLnN0eWxlLmRpc3BsYXk9ZVtmXSk7cmV0dXJuIGF9ci5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gaWEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gaWEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtkYSh0aGlzKT9yKHRoaXMpLnNob3coKTpyKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBqYT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxrYT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2ksbGE9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxtYT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O21hLm9wdGdyb3VwPW1hLm9wdGlvbixtYS50Ym9keT1tYS50Zm9vdD1tYS5jb2xncm91cD1tYS5jYXB0aW9uPW1hLnRoZWFkLG1hLnRoPW1hLnRkO2Z1bmN0aW9uIG5hKGEsYil7dmFyIGM7cmV0dXJuIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdLHZvaWQgMD09PWJ8fGImJkIoYSxiKT9yLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIG9hKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKVcuc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fFcuZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgcGE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHFhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbj0wLG89YS5sZW5ndGg7bjxvO24rKylpZihmPWFbbl0sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PXIudHlwZShmKSlyLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihwYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShrYS5leGVjKGYpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxpPW1hW2hdfHxtYS5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK3IuaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtyLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG49MDt3aGlsZShmPW1bbisrXSlpZihkJiZyLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPXIuY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9bmEobC5hcHBlbmRDaGlsZChmKSxcInNjcmlwdFwiKSxqJiZvYShnKSxjKXtrPTA7d2hpbGUoZj1nW2srK10pbGEudGVzdChmLnR5cGV8fFwiXCIpJiZjLnB1c2goZil9cmV0dXJuIGx9IWZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxvLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsby5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciByYT1kLmRvY3VtZW50RWxlbWVudCxzYT0vXmtleS8sdGE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLHVhPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gdmEoKXtyZXR1cm4hMH1mdW5jdGlvbiB3YSgpe3JldHVybiExfWZ1bmN0aW9uIHhhKCl7dHJ5e3JldHVybiBkLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1mdW5jdGlvbiB5YShhLGIsYyxkLGUsZil7dmFyIGcsaDtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihkPWR8fGMsYz12b2lkIDApO2ZvcihoIGluIGIpeWEoYSxoLGMsZCxiW2hdLGYpO3JldHVybiBhfWlmKG51bGw9PWQmJm51bGw9PWU/KGU9YyxkPWM9dm9pZCAwKTpudWxsPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGM/KGU9ZCxkPXZvaWQgMCk6KGU9ZCxkPWMsYz12b2lkIDApKSxlPT09ITEpZT13YTtlbHNlIGlmKCFlKXJldHVybiBhO3JldHVybiAxPT09ZiYmKGc9ZSxlPWZ1bmN0aW9uKGEpe3JldHVybiByKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPXIuZ3VpZCsrKSksYS5lYWNoKGZ1bmN0aW9uKCl7ci5ldmVudC5hZGQodGhpcyxiLGUsZCxjKX0pfXIuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vy5nZXQoYSk7aWYocSl7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihyYSxlKSxjLmd1aWR8fChjLmd1aWQ9ci5ndWlkKyspLChpPXEuZXZlbnRzKXx8KGk9cS5ldmVudHM9e30pLChnPXEuaGFuZGxlKXx8KGc9cS5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHImJnIuZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP3IuZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEwpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD11YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4mJihsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30sbj0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8bixsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30saz1yLmV4dGVuZCh7dHlwZTpuLG9yaWdUeXBlOnAsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZyLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOm8uam9pbihcIi5cIil9LGYpLChtPWlbbl0pfHwobT1pW25dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQsbyxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihuLGcpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksci5ldmVudC5nbG9iYWxbbl09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxuLG8scCxxPVcuaGFzRGF0YShhKSYmVy5nZXQoYSk7aWYocSYmKGk9cS5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChMKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9dWEuZXhlYyhiW2pdKXx8W10sbj1wPWhbMV0sbz0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxuKXtsPXIuZXZlbnQuc3BlY2lhbFtuXXx8e30sbj0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8bixtPWlbbl18fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK28uam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZwIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLG8scS5oYW5kbGUpIT09ITF8fHIucmVtb3ZlRXZlbnQoYSxuLHEuaGFuZGxlKSxkZWxldGUgaVtuXSl9ZWxzZSBmb3IobiBpbiBpKXIuZXZlbnQucmVtb3ZlKGEsbitiW2pdLGMsZCwhMCk7ci5pc0VtcHR5T2JqZWN0KGkpJiZXLnJlbW92ZShhLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZhciBiPXIuZXZlbnQuZml4KGEpLGMsZCxlLGYsZyxoLGk9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLGo9KFcuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdfHxbXSxrPXIuZXZlbnQuc3BlY2lhbFtiLnR5cGVdfHx7fTtmb3IoaVswXT1iLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWlbY109YXJndW1lbnRzW2NdO2lmKGIuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYikhPT0hMSl7aD1yLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxiLGopLGM9MDt3aGlsZSgoZj1oW2MrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtiLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGQ9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2QrK10pJiYhYi5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWIucm5hbWVzcGFjZSYmIWIucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGIuaGFuZGxlT2JqPWcsYi5kYXRhPWcuZGF0YSxlPSgoci5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYi5yZXN1bHQ9ZSk9PT0hMSYmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYiksYi5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGcsaD1bXSxpPWIuZGVsZWdhdGVDb3VudCxqPWEudGFyZ2V0O2lmKGkmJmoubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09YS50eXBlJiZhLmJ1dHRvbj49MSkpZm9yKDtqIT09dGhpcztqPWoucGFyZW50Tm9kZXx8dGhpcylpZigxPT09ai5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8ai5kaXNhYmxlZCE9PSEwKSl7Zm9yKGY9W10sZz17fSxjPTA7YzxpO2MrKylkPWJbY10sZT1kLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWdbZV0mJihnW2VdPWQubmVlZHNDb250ZXh0P3IoZSx0aGlzKS5pbmRleChqKT4tMTpyLmZpbmQoZSx0aGlzLG51bGwsW2pdKS5sZW5ndGgpLGdbZV0mJmYucHVzaChkKTtmLmxlbmd0aCYmaC5wdXNoKHtlbGVtOmosaGFuZGxlcnM6Zn0pfXJldHVybiBqPXRoaXMsaTxiLmxlbmd0aCYmaC5wdXNoKHtlbGVtOmosaGFuZGxlcnM6Yi5zbGljZShpKX0pLGh9LGFkZFByb3A6ZnVuY3Rpb24oYSxiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoci5FdmVudC5wcm90b3R5cGUsYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OnIuaXNGdW5jdGlvbihiKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gYih0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W2FdfSxzZXQ6ZnVuY3Rpb24oYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsYSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Yn0pfX0pfSxmaXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbci5leHBhbmRvXT9hOm5ldyByLkV2ZW50KGEpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzIT09eGEoKSYmdGhpcy5mb2N1cylyZXR1cm4gdGhpcy5mb2N1cygpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZih0aGlzPT09eGEoKSYmdGhpcy5ibHVyKXJldHVybiB0aGlzLmJsdXIoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtpZihcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJkIodGhpcyxcImlucHV0XCIpKXJldHVybiB0aGlzLmNsaWNrKCksITF9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBCKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19fSxyLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfSxyLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiByLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT92YTp3YSx0aGlzLnRhcmdldD1hLnRhcmdldCYmMz09PWEudGFyZ2V0Lm5vZGVUeXBlP2EudGFyZ2V0LnBhcmVudE5vZGU6YS50YXJnZXQsdGhpcy5jdXJyZW50VGFyZ2V0PWEuY3VycmVudFRhcmdldCx0aGlzLnJlbGF0ZWRUYXJnZXQ9YS5yZWxhdGVkVGFyZ2V0KTp0aGlzLnR5cGU9YSxiJiZyLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxyLm5vdygpLHZvaWQodGhpc1tyLmV4cGFuZG9dPSEwKSk6bmV3IHIuRXZlbnQoYSxiKX0sci5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnIuRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOndhLGlzUHJvcGFnYXRpb25TdG9wcGVkOndhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOndhLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD12YSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sci5lYWNoKHthbHRLZXk6ITAsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNoYW5nZWRUb3VjaGVzOiEwLGN0cmxLZXk6ITAsZGV0YWlsOiEwLGV2ZW50UGhhc2U6ITAsbWV0YUtleTohMCxwYWdlWDohMCxwYWdlWTohMCxzaGlmdEtleTohMCx2aWV3OiEwLFwiY2hhclwiOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGEpe3ZhciBiPWEuYnV0dG9uO3JldHVybiBudWxsPT1hLndoaWNoJiZzYS50ZXN0KGEudHlwZSk/bnVsbCE9YS5jaGFyQ29kZT9hLmNoYXJDb2RlOmEua2V5Q29kZTohYS53aGljaCYmdm9pZCAwIT09YiYmdGEudGVzdChhLnR5cGUpPzEmYj8xOjImYj8zOjQmYj8yOjA6YS53aGljaH19LHIuZXZlbnQuYWRkUHJvcCksci5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7ci5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxyLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxyLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHlhKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geWEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmoscihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPXdhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciB6YT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxBYT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxCYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLENhPS9edHJ1ZVxcLyguKikvLERhPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBFYShhLGIpe3JldHVybiBCKGEsXCJ0YWJsZVwiKSYmQigxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9yKFwiPnRib2R5XCIsYSlbMF18fGE6YX1mdW5jdGlvbiBGYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBHYShhKXt2YXIgYj1DYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gSGEoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihXLmhhc0RhdGEoYSkmJihmPVcuYWNjZXNzKGEpLGc9Vy5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2M8ZDtjKyspci5ldmVudC5hZGQoYixlLGpbZV1bY10pfVguaGFzRGF0YShhKSYmKGg9WC5hY2Nlc3MoYSksaT1yLmV4dGVuZCh7fSxoKSxYLnNldChiLGkpKX19ZnVuY3Rpb24gSWEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmamEudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6XCJpbnB1dFwiIT09YyYmXCJ0ZXh0YXJlYVwiIT09Y3x8KGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiBKYShhLGIsYyxkKXtiPWcuYXBwbHkoW10sYik7dmFyIGUsZixoLGksaixrLGw9MCxtPWEubGVuZ3RoLG49bS0xLHE9YlswXSxzPXIuaXNGdW5jdGlvbihxKTtpZihzfHxtPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBxJiYhby5jaGVja0Nsb25lJiZCYS50ZXN0KHEpKXJldHVybiBhLmVhY2goZnVuY3Rpb24oZSl7dmFyIGY9YS5lcShlKTtzJiYoYlswXT1xLmNhbGwodGhpcyxlLGYuaHRtbCgpKSksSmEoZixiLGMsZCl9KTtpZihtJiYoZT1xYShiLGFbMF0ub3duZXJEb2N1bWVudCwhMSxhLGQpLGY9ZS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1mKSxmfHxkKSl7Zm9yKGg9ci5tYXAobmEoZSxcInNjcmlwdFwiKSxGYSksaT1oLmxlbmd0aDtsPG07bCsrKWo9ZSxsIT09biYmKGo9ci5jbG9uZShqLCEwLCEwKSxpJiZyLm1lcmdlKGgsbmEoaixcInNjcmlwdFwiKSkpLGMuY2FsbChhW2xdLGosbCk7aWYoaSlmb3Ioaz1oW2gubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsci5tYXAoaCxHYSksbD0wO2w8aTtsKyspaj1oW2xdLGxhLnRlc3Qoai50eXBlfHxcIlwiKSYmIVcuYWNjZXNzKGosXCJnbG9iYWxFdmFsXCIpJiZyLmNvbnRhaW5zKGssaikmJihqLnNyYz9yLl9ldmFsVXJsJiZyLl9ldmFsVXJsKGouc3JjKTpwKGoudGV4dENvbnRlbnQucmVwbGFjZShEYSxcIlwiKSxrKSl9cmV0dXJuIGF9ZnVuY3Rpb24gS2EoYSxiLGMpe2Zvcih2YXIgZCxlPWI/ci5maWx0ZXIoYixhKTphLGY9MDtudWxsIT0oZD1lW2ZdKTtmKyspY3x8MSE9PWQubm9kZVR5cGV8fHIuY2xlYW5EYXRhKG5hKGQpKSxkLnBhcmVudE5vZGUmJihjJiZyLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmb2EobmEoZCxcInNjcmlwdFwiKSksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpKTtyZXR1cm4gYX1yLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHphLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1yLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKG8ubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fHIuaXNYTUxEb2MoYSkpKWZvcihnPW5hKGgpLGY9bmEoYSksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylJYShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxuYShhKSxnPWd8fG5hKGgpLGQ9MCxlPWYubGVuZ3RoO2Q8ZTtkKyspSGEoZltkXSxnW2RdKTtlbHNlIEhhKGEsaCk7cmV0dXJuIGc9bmEoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZvYShnLCFpJiZuYShhLFwic2NyaXB0XCIpKSxofSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlPXIuZXZlbnQuc3BlY2lhbCxmPTA7dm9pZCAwIT09KGM9YVtmXSk7ZisrKWlmKFUoYykpe2lmKGI9Y1tXLmV4cGFuZG9dKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cyllW2RdP3IuZXZlbnQucmVtb3ZlKGMsZCk6ci5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO2NbVy5leHBhbmRvXT12b2lkIDB9Y1tYLmV4cGFuZG9dJiYoY1tYLmV4cGFuZG9dPXZvaWQgMCl9fX0pLHIuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIEthKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gS2EodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP3IudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9RWEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1FYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihyLmNsZWFuRGF0YShuYShhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsIT1hJiZhLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gci5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIUFhLnRlc3QoYSkmJiFtYVsoa2EuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPXIuaHRtbFByZWZpbHRlcihhKTt0cnl7Zm9yKDtjPGQ7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihyLmNsZWFuRGF0YShuYShiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBKYSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7ci5pbkFycmF5KHRoaXMsYSk8MCYmKHIuY2xlYW5EYXRhKG5hKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksci5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPXIoYSksZj1lLmxlbmd0aC0xLGc9MDtnPD1mO2crKyljPWc9PT1mP3RoaXM6dGhpcy5jbG9uZSghMCkscihlW2ddKVtiXShjKSxoLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciBMYT0vXm1hcmdpbi8sTWE9bmV3IFJlZ0V4cChcIl4oXCIrYWErXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksTmE9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfTshZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7aWYoaSl7aS5zdHlsZS5jc3NUZXh0PVwiYm94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsaS5pbm5lckhUTUw9XCJcIixyYS5hcHBlbmRDaGlsZChoKTt2YXIgYj1hLmdldENvbXB1dGVkU3R5bGUoaSk7Yz1cIjElXCIhPT1iLnRvcCxnPVwiMnB4XCI9PT1iLm1hcmdpbkxlZnQsZT1cIjRweFwiPT09Yi53aWR0aCxpLnN0eWxlLm1hcmdpblJpZ2h0PVwiNTAlXCIsZj1cIjRweFwiPT09Yi5tYXJnaW5SaWdodCxyYS5yZW1vdmVDaGlsZChoKSxpPW51bGx9fXZhciBjLGUsZixnLGg9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGk9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuc3R5bGUmJihpLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixpLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixvLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1pLnN0eWxlLmJhY2tncm91bmRDbGlwLGguc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7cGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsaC5hcHBlbmRDaGlsZChpKSxyLmV4dGVuZChvLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxjfSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBiKCksZX0scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBiKCksZn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxnfX0pKX0oKTtmdW5jdGlvbiBPYShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fE5hKGEpLGMmJihnPWMuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXSxcIlwiIT09Z3x8ci5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPXIuc3R5bGUoYSxiKSksIW8ucGl4ZWxNYXJnaW5SaWdodCgpJiZNYS50ZXN0KGcpJiZMYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIFBhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBRYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sUmE9L14tLS8sU2E9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFRhPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sVWE9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFZhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBXYShhKXtpZihhIGluIFZhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9VWEubGVuZ3RoO3doaWxlKGMtLSlpZihhPVVhW2NdK2IsYSBpbiBWYSlyZXR1cm4gYX1mdW5jdGlvbiBYYShhKXt2YXIgYj1yLmNzc1Byb3BzW2FdO3JldHVybiBifHwoYj1yLmNzc1Byb3BzW2FdPVdhKGEpfHxhKSxifWZ1bmN0aW9uIFlhKGEsYixjKXt2YXIgZD1iYS5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gWmEoYSxiLGMsZCxlKXt2YXIgZixnPTA7Zm9yKGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjA7Zjw0O2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1yLmNzcyhhLGMrY2FbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPXIuY3NzKGEsXCJwYWRkaW5nXCIrY2FbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09ci5jc3MoYSxcImJvcmRlclwiK2NhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1yLmNzcyhhLFwicGFkZGluZ1wiK2NhW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPXIuY3NzKGEsXCJib3JkZXJcIitjYVtmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiAkYShhLGIsYyl7dmFyIGQsZT1OYShhKSxmPU9hKGEsYixlKSxnPVwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpO3JldHVybiBNYS50ZXN0KGYpP2Y6KGQ9ZyYmKG8uYm94U2l6aW5nUmVsaWFibGUoKXx8Zj09PWEuc3R5bGVbYl0pLFwiYXV0b1wiPT09ZiYmKGY9YVtcIm9mZnNldFwiK2JbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpXSksZj1wYXJzZUZsb2F0KGYpfHwwLGYrWmEoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZSkrXCJweFwiKX1yLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPU9hKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9ci5jYW1lbENhc2UoYiksaT1SYS50ZXN0KGIpLGo9YS5zdHlsZTtyZXR1cm4gaXx8KGI9WGEoaCkpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmpbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPWJhLmV4ZWMoYykpJiZlWzFdJiYoYz1mYShhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KHIuY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksby5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGpbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaT9qLnNldFByb3BlcnR5KGIsYyk6altiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPVJhLnRlc3QoYik7cmV0dXJuIGl8fChiPVhhKGgpKSxnPXIuY3NzSG9va3NbYl18fHIuY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPU9hKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gVGEmJihlPVRhW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLHIuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtpZihjKXJldHVybiFRYS50ZXN0KHIuY3NzKGEsXCJkaXNwbGF5XCIpKXx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD8kYShhLGIsZCk6ZWEoYSxTYSxmdW5jdGlvbigpe3JldHVybiAkYShhLGIsZCl9KX0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJk5hKGEpLGc9ZCYmWmEoYSxiLGQsXCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPWJhLmV4ZWMoYykpJiZcInB4XCIhPT0oZVszXXx8XCJweFwiKSYmKGEuc3R5bGVbYl09YyxjPXIuY3NzKGEsYikpLFlhKGEsYyxnKX19fSksci5jc3NIb29rcy5tYXJnaW5MZWZ0PVBhKG8ucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGEsYil7aWYoYilyZXR1cm4ocGFyc2VGbG9hdChPYShhLFwibWFyZ2luTGVmdFwiKSl8fGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1lYShhLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCJ9KSxyLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ZDw0O2QrKyllW2ErY2FbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sTGEudGVzdChhKXx8KHIuY3NzSG9va3NbYStiXS5zZXQ9WWEpfSksci5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYoQXJyYXkuaXNBcnJheShiKSl7Zm9yKGQ9TmEoYSksZT1iLmxlbmd0aDtnPGU7ZysrKWZbYltnXV09ci5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP3Iuc3R5bGUoYSxiLGMpOnIuY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfX0pO2Z1bmN0aW9uIF9hKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBfYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfXIuVHdlZW49X2EsX2EucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpfYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxyLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KHIuY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9X2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOl9hLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPV9hLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1yLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6X2EucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sX2EucHJvdG90eXBlLmluaXQucHJvdG90eXBlPV9hLnByb3RvdHlwZSxfYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1yLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7ci5meC5zdGVwW2EucHJvcF0/ci5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW3IuY3NzUHJvcHNbYS5wcm9wXV0mJiFyLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6ci5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sX2EucHJvcEhvb2tzLnNjcm9sbFRvcD1fYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxyLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sci5meD1fYS5wcm90b3R5cGUuaW5pdCxyLmZ4LnN0ZXA9e307dmFyIGFiLGJiLGNiPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxkYj0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGViKCl7YmImJihkLmhpZGRlbj09PSExJiZhLnJlcXVlc3RBbmltYXRpb25GcmFtZT9hLnJlcXVlc3RBbmltYXRpb25GcmFtZShlYik6YS5zZXRUaW1lb3V0KGViLHIuZnguaW50ZXJ2YWwpLHIuZngudGljaygpKX1mdW5jdGlvbiBmYigpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXthYj12b2lkIDB9KSxhYj1yLm5vdygpfWZ1bmN0aW9uIGdiKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDtkPDQ7ZCs9Mi1iKWM9Y2FbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gaGIoYSxiLGMpe2Zvcih2YXIgZCxlPShrYi50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChrYi50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2Y8ZztmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIGliKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9XCJ3aWR0aFwiaW4gYnx8XCJoZWlnaHRcImluIGIsbT10aGlzLG49e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmZGEoYSkscT1XLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChnPXIuX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWcudW5xdWV1ZWQmJihnLnVucXVldWVkPTAsaD1nLmVtcHR5LmZpcmUsZy5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7Zy51bnF1ZXVlZHx8aCgpfSksZy51bnF1ZXVlZCsrLG0uYWx3YXlzKGZ1bmN0aW9uKCl7bS5hbHdheXMoZnVuY3Rpb24oKXtnLnVucXVldWVkLS0sci5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxnLmVtcHR5LmZpcmUoKX0pfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLGNiLnRlc3QoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW5bZF09cSYmcVtkXXx8ci5zdHlsZShhLGQpfWlmKGk9IXIuaXNFbXB0eU9iamVjdChiKSxpfHwhci5pc0VtcHR5T2JqZWN0KG4pKXtsJiYxPT09YS5ub2RlVHlwZSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9cSYmcS5kaXNwbGF5LG51bGw9PWomJihqPVcuZ2V0KGEsXCJkaXNwbGF5XCIpKSxrPXIuY3NzKGEsXCJkaXNwbGF5XCIpLFwibm9uZVwiPT09ayYmKGo/az1qOihpYShbYV0sITApLGo9YS5zdHlsZS5kaXNwbGF5fHxqLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksaWEoW2FdKSkpLChcImlubGluZVwiPT09a3x8XCJpbmxpbmUtYmxvY2tcIj09PWsmJm51bGwhPWopJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJmbG9hdFwiKSYmKGl8fChtLmRvbmUoZnVuY3Rpb24oKXtvLmRpc3BsYXk9an0pLG51bGw9PWomJihrPW8uZGlzcGxheSxqPVwibm9uZVwiPT09az9cIlwiOmspKSxvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbS5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpLGk9ITE7Zm9yKGQgaW4gbilpfHwocT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Vy5hY2Nlc3MoYSxcImZ4c2hvd1wiLHtkaXNwbGF5Omp9KSxmJiYocS5oaWRkZW49IXApLHAmJmlhKFthXSwhMCksbS5kb25lKGZ1bmN0aW9uKCl7cHx8aWEoW2FdKSxXLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihkIGluIG4pci5zdHlsZShhLGQsbltkXSl9KSksaT1oYihwP3FbZF06MCxkLG0pLGQgaW4gcXx8KHFbZF09aS5zdGFydCxwJiYoaS5lbmQ9aS5zdGFydCxpLnN0YXJ0PTApKX19ZnVuY3Rpb24gamIoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1yLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLEFycmF5LmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPXIuY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBrYihhLGIsYyl7dmFyIGQsZSxmPTAsZz1rYi5wcmVmaWx0ZXJzLmxlbmd0aCxoPXIuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPWFifHxmYigpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtnPGk7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksZjwxJiZpP2M6KGl8fGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpyLmV4dGVuZCh7fSxiKSxvcHRzOnIuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpyLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOmFifHxmYigpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9ci5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtjPGQ7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihqYihrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtmPGc7ZisrKWlmKGQ9a2IucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIHIuaXNGdW5jdGlvbihkLnN0b3ApJiYoci5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPXIucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiByLm1hcChrLGhiLGopLHIuaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpLHIuZngudGltZXIoci5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksan1yLkFuaW1hdGlvbj1yLmV4dGVuZChrYix7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gZmEoYy5lbGVtLGEsYmEuZXhlYyhiKSxjKSxjfV19LHR3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtyLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5tYXRjaChMKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZDxlO2QrKyljPWFbZF0sa2IudHdlZW5lcnNbY109a2IudHdlZW5lcnNbY118fFtdLGtiLnR3ZWVuZXJzW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcnM6W2liXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP2tiLnByZWZpbHRlcnMudW5zaGlmdChhKTprYi5wcmVmaWx0ZXJzLnB1c2goYSl9fSksci5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/ci5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxyLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIXIuaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIHIuZngub2ZmP2QuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2YgZC5kdXJhdGlvbiYmKGQuZHVyYXRpb24gaW4gci5meC5zcGVlZHM/ZC5kdXJhdGlvbj1yLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpkLmR1cmF0aW9uPXIuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1kLnF1ZXVlJiZkLnF1ZXVlIT09ITB8fChkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7ci5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZyLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sci5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoZGEpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ci5pc0VtcHR5T2JqZWN0KGEpLGY9ci5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPWtiKHRoaXMsci5leHRlbmQoe30sYSksZik7KGV8fFcuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1yLnRpbWVycyxnPVcuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJmRiLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fHIuZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Vy5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1yLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsci5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7YjxnO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxyLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9ci5mbltiXTtyLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShnYihiLCEwKSxhLGQsZSl9fSksci5lYWNoKHtzbGlkZURvd246Z2IoXCJzaG93XCIpLHNsaWRlVXA6Z2IoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmdiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLHIudGltZXJzPVtdLHIuZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPXIudGltZXJzO2ZvcihhYj1yLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fHIuZnguc3RvcCgpLGFiPXZvaWQgMH0sci5meC50aW1lcj1mdW5jdGlvbihhKXtyLnRpbWVycy5wdXNoKGEpLHIuZnguc3RhcnQoKX0sci5meC5pbnRlcnZhbD0xMyxyLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7YmJ8fChiYj0hMCxlYigpKX0sci5meC5zdG9wPWZ1bmN0aW9uKCl7YmI9bnVsbH0sci5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sci5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPXIuZng/ci5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLG8uY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxvLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsby5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgbGIsbWI9ci5leHByLmF0dHJIYW5kbGU7ci5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHIuYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYS5nZXRBdHRyaWJ1dGU/ci5wcm9wKGEsYixjKTooMT09PWYmJnIuaXNYTUxEb2MoYSl8fChlPXIuYXR0ckhvb2tzW2IudG9Mb3dlckNhc2UoKV18fChyLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP2xiOnZvaWQgMCkpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCByLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPXIuZmluZC5hdHRyKGEsYiksXHJcbm51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighby5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZCKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MCxlPWImJmIubWF0Y2goTCk7aWYoZSYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1lW2QrK10pYS5yZW1vdmVBdHRyaWJ1dGUoYyl9fSksbGI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9yLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxyLmVhY2goci5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9bWJbYl18fHIuZmluZC5hdHRyO21iW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmLGc9Yi50b0xvd2VyQ2FzZSgpO3JldHVybiBkfHwoZj1tYltnXSxtYltnXT1lLGU9bnVsbCE9YyhhLGIsZCk/ZzpudWxsLG1iW2ddPWYpLGV9fSk7dmFyIG5iPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksb2I9L14oPzphfGFyZWEpJC9pO3IuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxyLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW3IucHJvcEZpeFthXXx8YV19KX19KSxyLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJnIuaXNYTUxEb2MoYSl8fChiPXIucHJvcEZpeFtiXXx8YixlPXIucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOm5iLnRlc3QoYS5ub2RlTmFtZSl8fG9iLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksby5vcHRTZWxlY3RlZHx8KHIucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7YiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxyLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7ci5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO2Z1bmN0aW9uIHBiKGEpe3ZhciBiPWEubWF0Y2goTCl8fFtdO3JldHVybiBiLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHFiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1yLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1wYihkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKHIuaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3IodGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixxYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChMKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1xYihjKSxkPTE9PT1jLm5vZGVUeXBlJiZcIiBcIitwYihlKStcIiBcIil7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6ci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMscWIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9cih0aGlzKSxmPWEubWF0Y2goTCl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Ugdm9pZCAwIT09YSYmXCJib29sZWFuXCIhPT1jfHwoYj1xYih0aGlzKSxiJiZXLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6Vy5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitwYihxYihjKSkrXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHJiPS9cXHIvZztyLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9ci5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLHIodGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpBcnJheS5pc0FycmF5KGUpJiYoZT1yLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9ci52YWxIb29rc1t0aGlzLnR5cGVdfHxyLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPXIudmFsSG9va3NbZS50eXBlXXx8ci52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UocmIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxyLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXIuZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOnBiKHIudGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT1hLm9wdGlvbnMsZj1hLnNlbGVjdGVkSW5kZXgsZz1cInNlbGVjdC1vbmVcIj09PWEudHlwZSxoPWc/bnVsbDpbXSxpPWc/ZisxOmUubGVuZ3RoO2ZvcihkPWY8MD9pOmc/ZjowO2Q8aTtkKyspaWYoYz1lW2RdLChjLnNlbGVjdGVkfHxkPT09ZikmJiFjLmRpc2FibGVkJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUIoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPXIoYykudmFsKCksZylyZXR1cm4gYjtoLnB1c2goYil9cmV0dXJuIGh9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1yLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9ci5pbkFycmF5KHIudmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLHIuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtyLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLmNoZWNrZWQ9ci5pbkFycmF5KHIoYSkudmFsKCksYik+LTF9fSxvLmNoZWNrT258fChyLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBzYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87ci5leHRlbmQoci5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixrLG0sbixvPVtlfHxkXSxwPWwuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixxPWwuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIXNiLnRlc3QocCtyLmV2ZW50LnRyaWdnZXJlZCkmJihwLmluZGV4T2YoXCIuXCIpPi0xJiYocT1wLnNwbGl0KFwiLlwiKSxwPXEuc2hpZnQoKSxxLnNvcnQoKSksaz1wLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitwLGI9YltyLmV4cGFuZG9dP2I6bmV3IHIuRXZlbnQocCxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9cS5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Euam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpyLm1ha2VBcnJheShjLFtiXSksbj1yLmV2ZW50LnNwZWNpYWxbcF18fHt9LGZ8fCFuLnRyaWdnZXJ8fG4udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW4ubm9CdWJibGUmJiFyLmlzV2luZG93KGUpKXtmb3Ioaj1uLmRlbGVnYXRlVHlwZXx8cCxzYi50ZXN0KGorcCl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlvLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmby5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9b1tnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6bi5iaW5kVHlwZXx8cCxtPShXLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmVy5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1rJiZoW2tdLG0mJm0uYXBwbHkmJlUoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXAsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8bi5fZGVmYXVsdCYmbi5fZGVmYXVsdC5hcHBseShvLnBvcCgpLGMpIT09ITF8fCFVKGUpfHxrJiZyLmlzRnVuY3Rpb24oZVtwXSkmJiFyLmlzV2luZG93KGUpJiYoaT1lW2tdLGkmJihlW2tdPW51bGwpLHIuZXZlbnQudHJpZ2dlcmVkPXAsZVtwXSgpLHIuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtrXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ci5leHRlbmQobmV3IHIuRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7ci5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKX19KSxyLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtpZihjKXJldHVybiByLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApfX0pLHIuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxyLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksby5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLG8uZm9jdXNpbnx8ci5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtyLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsci5ldmVudC5maXgoYSkpfTtyLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVcuYWNjZXNzKGQsYiktMTtlP1cuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksVy5yZW1vdmUoZCxiKSl9fX0pO3ZhciB0Yj1hLmxvY2F0aW9uLHViPXIubm93KCksdmI9L1xcPy87ci5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHIuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIHdiPS9cXFtcXF0kLyx4Yj0vXFxyP1xcbi9nLHliPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSx6Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gQWIoYSxiLGMsZCl7dmFyIGU7aWYoQXJyYXkuaXNBcnJheShiKSlyLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fHdiLnRlc3QoYSk/ZChhLGUpOkFiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09ci50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpQWIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1yLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7dmFyIGM9ci5pc0Z1bmN0aW9uKGIpP2IoKTpiO2RbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09Yz9cIlwiOmMpfTtpZihBcnJheS5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIXIuaXNQbGFpbk9iamVjdChhKSlyLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUFiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpfSxyLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHIucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1yLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP3IubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIXIodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJnpiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF5Yi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhamEudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1yKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6QXJyYXkuaXNBcnJheShjKT9yLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZSh4YixcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgQmI9LyUyMC9nLENiPS8jLiokLyxEYj0vKFs/Jl0pXz1bXiZdKi8sRWI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxGYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxHYj0vXig/OkdFVHxIRUFEKSQvLEhiPS9eXFwvXFwvLyxJYj17fSxKYj17fSxLYj1cIiovXCIuY29uY2F0KFwiKlwiKSxMYj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0xiLmhyZWY9dGIuaHJlZjtmdW5jdGlvbiBNYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtdO2lmKHIuaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1KYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLHIuZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE9iKGEsYil7dmFyIGMsZCxlPXIuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJnIuZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBQYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfWlmKGYpcmV0dXJuIGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXX1mdW5jdGlvbiBRYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fXIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp0Yi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOkZiLnRlc3QodGIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOktiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpyLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9PYihPYihhLHIuYWpheFNldHRpbmdzKSxiKTpPYihyLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpNYihJYiksYWpheFRyYW5zcG9ydDpNYihKYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbSxuLG89ci5hamF4U2V0dXAoe30sYykscD1vLmNvbnRleHR8fG8scT1vLmNvbnRleHQmJihwLm5vZGVUeXBlfHxwLmpxdWVyeSk/cihwKTpyLmV2ZW50LHM9ci5EZWZlcnJlZCgpLHQ9ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx1PW8uc3RhdHVzQ29kZXx8e30sdj17fSx3PXt9LHg9XCJjYW5jZWxlZFwiLHk9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZihrKXtpZighaCl7aD17fTt3aGlsZShiPUViLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaz9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09ayYmKGE9d1thLnRvTG93ZXJDYXNlKCldPXdbYS50b0xvd2VyQ2FzZSgpXXx8YSx2W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWsmJihvLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZihrKXkuYWx3YXlzKGFbeS5zdGF0dXNdKTtlbHNlIGZvcihiIGluIGEpdVtiXT1bdVtiXSxhW2JdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8eDtyZXR1cm4gZSYmZS5hYm9ydChiKSxBKDAsYiksdGhpc319O2lmKHMucHJvbWlzZSh5KSxvLnVybD0oKGJ8fG8udXJsfHx0Yi5ocmVmKStcIlwiKS5yZXBsYWNlKEhiLHRiLnByb3RvY29sK1wiLy9cIiksby50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG8ubWV0aG9kfHxvLnR5cGUsby5kYXRhVHlwZXM9KG8uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEwpfHxbXCJcIl0sbnVsbD09by5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9by51cmwsai5ocmVmPWouaHJlZixvLmNyb3NzRG9tYWluPUxiLnByb3RvY29sK1wiLy9cIitMYi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeil7by5jcm9zc0RvbWFpbj0hMH19aWYoby5kYXRhJiZvLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygby5kYXRhJiYoby5kYXRhPXIucGFyYW0oby5kYXRhLG8udHJhZGl0aW9uYWwpKSxOYihJYixvLGMseSksaylyZXR1cm4geTtsPXIuZXZlbnQmJm8uZ2xvYmFsLGwmJjA9PT1yLmFjdGl2ZSsrJiZyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksby50eXBlPW8udHlwZS50b1VwcGVyQ2FzZSgpLG8uaGFzQ29udGVudD0hR2IudGVzdChvLnR5cGUpLGY9by51cmwucmVwbGFjZShDYixcIlwiKSxvLmhhc0NvbnRlbnQ/by5kYXRhJiZvLnByb2Nlc3NEYXRhJiYwPT09KG8uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihvLmRhdGE9by5kYXRhLnJlcGxhY2UoQmIsXCIrXCIpKToobj1vLnVybC5zbGljZShmLmxlbmd0aCksby5kYXRhJiYoZis9KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK28uZGF0YSxkZWxldGUgby5kYXRhKSxvLmNhY2hlPT09ITEmJihmPWYucmVwbGFjZShEYixcIiQxXCIpLG49KHZiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIit1YisrICtuKSxvLnVybD1mK24pLG8uaWZNb2RpZmllZCYmKHIubGFzdE1vZGlmaWVkW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLHIubGFzdE1vZGlmaWVkW2ZdKSxyLmV0YWdbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixyLmV0YWdbZl0pKSwoby5kYXRhJiZvLmhhc0NvbnRlbnQmJm8uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnkuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG8uY29udGVudFR5cGUpLHkuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG8uZGF0YVR5cGVzWzBdJiZvLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dP28uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09by5kYXRhVHlwZXNbMF0/XCIsIFwiK0tiK1wiOyBxPTAuMDFcIjpcIlwiKTpvLmFjY2VwdHNbXCIqXCJdKTtmb3IobSBpbiBvLmhlYWRlcnMpeS5zZXRSZXF1ZXN0SGVhZGVyKG0sby5oZWFkZXJzW21dKTtpZihvLmJlZm9yZVNlbmQmJihvLmJlZm9yZVNlbmQuY2FsbChwLHksbyk9PT0hMXx8aykpcmV0dXJuIHkuYWJvcnQoKTtpZih4PVwiYWJvcnRcIix0LmFkZChvLmNvbXBsZXRlKSx5LmRvbmUoby5zdWNjZXNzKSx5LmZhaWwoby5lcnJvciksZT1OYihKYixvLGMseSkpe2lmKHkucmVhZHlTdGF0ZT0xLGwmJnEudHJpZ2dlcihcImFqYXhTZW5kXCIsW3ksb10pLGspcmV0dXJuIHk7by5hc3luYyYmby50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3kuYWJvcnQoXCJ0aW1lb3V0XCIpfSxvLnRpbWVvdXQpKTt0cnl7az0hMSxlLnNlbmQodixBKX1jYXRjaCh6KXtpZihrKXRocm93IHo7QSgtMSx6KX19ZWxzZSBBKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIEEoYixjLGQsaCl7dmFyIGosbSxuLHYsdyx4PWM7a3x8KGs9ITAsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHkucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiZiPDMwMHx8MzA0PT09YixkJiYodj1QYihvLHksZCkpLHY9UWIobyx2LHksaiksaj8oby5pZk1vZGlmaWVkJiYodz15LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYoci5sYXN0TW9kaWZpZWRbZl09dyksdz15LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYoci5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW8udHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09Yj94PVwibm90bW9kaWZpZWRcIjooeD12LnN0YXRlLG09di5kYXRhLG49di5lcnJvcixqPSFuKSk6KG49eCwhYiYmeHx8KHg9XCJlcnJvclwiLGI8MCYmKGI9MCkpKSx5LnN0YXR1cz1iLHkuc3RhdHVzVGV4dD0oY3x8eCkrXCJcIixqP3MucmVzb2x2ZVdpdGgocCxbbSx4LHldKTpzLnJlamVjdFdpdGgocCxbeSx4LG5dKSx5LnN0YXR1c0NvZGUodSksdT12b2lkIDAsbCYmcS50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3ksbyxqP206bl0pLHQuZmlyZVdpdGgocCxbeSx4XSksbCYmKHEudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt5LG9dKSwtLXIuYWN0aXZlfHxyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB5fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gci5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gci5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxyLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7cltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksci5hamF4KHIuZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxyLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxyLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiByLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LHIuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiB0aGlzWzBdJiYoci5pc0Z1bmN0aW9uKGEpJiYoYT1hLmNhbGwodGhpc1swXSkpLGI9cihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9cih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1yLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGFyZW50KGEpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe3IodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksci5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFyLmV4cHIucHNldWRvcy52aXNpYmxlKGEpfSxyLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiEhKGEub2Zmc2V0V2lkdGh8fGEub2Zmc2V0SGVpZ2h0fHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sci5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgUmI9ezA6MjAwLDEyMjM6MjA0fSxTYj1yLmFqYXhTZXR0aW5ncy54aHIoKTtvLmNvcnM9ISFTYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFNiLG8uYWpheD1TYj0hIVNiLHIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO2lmKG8uY29yc3x8U2ImJiFiLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihSYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX0pLHIuYWpheFByZWZpbHRlcihmdW5jdGlvbihhKXthLmNyb3NzRG9tYWluJiYoYS5jb250ZW50cy5zY3JpcHQ9ITEpfSksci5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ2xvYmFsRXZhbChhKSxhfX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLHIuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPXIoXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgVGI9W10sVWI9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztyLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1UYi5wb3AoKXx8ci5leHBhbmRvK1wiX1wiK3ViKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKFViLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZVYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtpZihofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXSlyZXR1cm4gZT1iLmpzb25wQ2FsbGJhY2s9ci5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoVWIsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0odmIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8ci5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9yKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLFRiLnB1c2goZSkpLGcmJnIuaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIn0pLG8uY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1hLmNoaWxkTm9kZXMubGVuZ3RofSgpLHIucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSk7dmFyIGUsZixnO3JldHVybiBifHwoby5jcmVhdGVIVE1MRG9jdW1lbnQ/KGI9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksZT1iLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGUuaHJlZj1kLmxvY2F0aW9uLmhyZWYsYi5oZWFkLmFwcGVuZENoaWxkKGUpKTpiPWQpLGY9Qy5leGVjKGEpLGc9IWMmJltdLGY/W2IuY3JlYXRlRWxlbWVudChmWzFdKV06KGY9cWEoW2FdLGIsZyksZyYmZy5sZW5ndGgmJnIoZykucmVtb3ZlKCksci5tZXJnZShbXSxmLmNoaWxkTm9kZXMpKX0sci5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9cGIoYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLHIuaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJnIuYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/cihcIjxkaXY+XCIpLmFwcGVuZChyLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LHIuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7ci5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLHIuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiByLmdyZXAoci50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9LHIub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9ci5jc3MoYSxcInBvc2l0aW9uXCIpLGw9cihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPXIuY3NzKGEsXCJ0b3BcIiksaT1yLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLHIuaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxyLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LHIuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtyLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkLGUsZj10aGlzWzBdO2lmKGYpcmV0dXJuIGYuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGQ9Zi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPWYub3duZXJEb2N1bWVudCxjPWIuZG9jdW1lbnRFbGVtZW50LGU9Yi5kZWZhdWx0Vmlldyx7dG9wOmQudG9wK2UucGFnZVlPZmZzZXQtYy5jbGllbnRUb3AsbGVmdDpkLmxlZnQrZS5wYWdlWE9mZnNldC1jLmNsaWVudExlZnR9KTp7dG9wOjAsbGVmdDowfX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PXIuY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksQihhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZD17dG9wOmQudG9wK3IuY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxsZWZ0OmQubGVmdCtyLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApfSkse3RvcDpiLnRvcC1kLnRvcC1yLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1yLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09ci5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fHJhfSl9fSksci5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7ci5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhhKT9mPWE6OT09PWEubm9kZVR5cGUmJihmPWEuZGVmYXVsdFZpZXcpLHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxyLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT1QYShvLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtpZihjKXJldHVybiBjPU9hKGEsYiksTWEudGVzdChjKT9yKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmN9KX0pLHIuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe3IuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtyLmZuW2RdPWZ1bmN0aW9uKGUsZil7dmFyIGc9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaD1jfHwoZT09PSEwfHxmPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gVCh0aGlzLGZ1bmN0aW9uKGIsYyxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhiKT8wPT09ZC5pbmRleE9mKFwib3V0ZXJcIik/YltcImlubmVyXCIrYV06Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZj1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxmW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZltcIm9mZnNldFwiK2FdLGZbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWU/ci5jc3MoYixjLGgpOnIuc3R5bGUoYixjLGUsaCl9LGIsZz9lOnZvaWQgMCxnKX19KX0pLHIuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSksci5ob2xkUmVhZHk9ZnVuY3Rpb24oYSl7YT9yLnJlYWR5V2FpdCsrOnIucmVhZHkoITApfSxyLmlzQXJyYXk9QXJyYXkuaXNBcnJheSxyLnBhcnNlSlNPTj1KU09OLnBhcnNlLHIubm9kZU5hbWU9QixcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTt2YXIgVmI9YS5qUXVlcnksV2I9YS4kO3JldHVybiByLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PXImJihhLiQ9V2IpLGImJmEualF1ZXJ5PT09ciYmKGEualF1ZXJ5PVZiKSxyfSxifHwoYS5qUXVlcnk9YS4kPXIpLHJ9KTtcclxuLyoqXHJcbiAqIGpRdWVyeS5icm93c2VyLm1vYmlsZSAoaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXIuY29tLylcclxuICpcclxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIHdpbGwgYmUgdHJ1ZSBpZiB0aGUgYnJvd3NlciBpcyBhIG1vYmlsZSBkZXZpY2VcclxuICpcclxuICoqL1xyXG4oZnVuY3Rpb24oYSl7KGpRdWVyeS5icm93c2VyPWpRdWVyeS5icm93c2VyfHx7fSkubW9iaWxlPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpfSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuLyohXHJcbiAgTGVnb011c2hyb29tIEBsZWdvbXVzaHJvb20gaHR0cDovL2xlZ29tdXNocm9vbS5jb21cclxuICBNSVQgTGljZW5zZSAyMDE0XHJcbiAqL1xyXG4oZnVuY3Rpb24oKXt2YXIgZTtlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLm89bnVsbCE9ZT9lOnt9LHdpbmRvdy5pc0FueVJlc2l6ZUV2ZW50SW5pdGVkfHwodGhpcy52YXJzKCksdGhpcy5yZWRlZmluZVByb3RvKCkpfXJldHVybiBlLnByb3RvdHlwZS52YXJzPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5pc0FueVJlc2l6ZUV2ZW50SW5pdGVkPSEwLHRoaXMuYWxsb3dlZFByb3Rvcz1bSFRNTERpdkVsZW1lbnQsSFRNTEZvcm1FbGVtZW50LEhUTUxMaW5rRWxlbWVudCxIVE1MQm9keUVsZW1lbnQsSFRNTFBhcmFncmFwaEVsZW1lbnQsSFRNTEZpZWxkU2V0RWxlbWVudCxIVE1MTGVnZW5kRWxlbWVudCxIVE1MTGFiZWxFbGVtZW50LEhUTUxCdXR0b25FbGVtZW50LEhUTUxVTGlzdEVsZW1lbnQsSFRNTE9MaXN0RWxlbWVudCxIVE1MTElFbGVtZW50LEhUTUxIZWFkaW5nRWxlbWVudCxIVE1MUXVvdGVFbGVtZW50LEhUTUxQcmVFbGVtZW50LEhUTUxCUkVsZW1lbnQsSFRNTEZvbnRFbGVtZW50LEhUTUxIUkVsZW1lbnQsSFRNTE1vZEVsZW1lbnQsSFRNTFBhcmFtRWxlbWVudCxIVE1MTWFwRWxlbWVudCxIVE1MVGFibGVFbGVtZW50LEhUTUxUYWJsZUNhcHRpb25FbGVtZW50LEhUTUxJbWFnZUVsZW1lbnQsSFRNTFRhYmxlQ2VsbEVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsSFRNTElucHV0RWxlbWVudCxIVE1MVGV4dEFyZWFFbGVtZW50LEhUTUxBbmNob3JFbGVtZW50LEhUTUxPYmplY3RFbGVtZW50LEhUTUxUYWJsZUNvbEVsZW1lbnQsSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQsSFRNTFRhYmxlUm93RWxlbWVudF0sdGhpcy50aW1lckVsZW1lbnRzPXtpbWc6MSx0ZXh0YXJlYToxLGlucHV0OjEsZW1iZWQ6MSxvYmplY3Q6MSxzdmc6MSxjYW52YXM6MSx0cjoxLHRib2R5OjEsdGhlYWQ6MSx0Zm9vdDoxLGE6MSxzZWxlY3Q6MSxvcHRpb246MSxvcHRncm91cDoxLGRsOjEsZHQ6MSxicjoxLGJhc2Vmb250OjEsZm9udDoxLGNvbDoxLGlmcmFtZToxfX0sZS5wcm90b3R5cGUucmVkZWZpbmVQcm90bz1mdW5jdGlvbigpe3ZhciBlLHQsbixvO3JldHVybiB0PXRoaXMsbz1mdW5jdGlvbigpe3ZhciBvLGkscixhO2ZvcihyPXRoaXMuYWxsb3dlZFByb3RvcyxhPVtdLGU9bz0wLGk9ci5sZW5ndGg7aT5vO2U9KytvKW49cltlXSxudWxsIT1uLnByb3RvdHlwZSYmYS5wdXNoKGZ1bmN0aW9uKGUpe3ZhciBuLG87cmV0dXJuIG49ZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnx8ZS5wcm90b3R5cGUuYXR0YWNoRXZlbnQsZnVuY3Rpb24obil7dmFyIG87cmV0dXJuIG89ZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4odGhpcyE9PXdpbmRvd3x8dGhpcyE9PWRvY3VtZW50KSYmKGU9XCJvbnJlc2l6ZVwiPT09YXJndW1lbnRzWzBdJiYhdGhpcy5pc0FueVJlc2l6ZUV2ZW50SW5pdGVkLGUmJnQuaGFuZGxlUmVzaXplKHthcmdzOmFyZ3VtZW50cyx0aGF0OnRoaXN9KSksbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI/ZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1vOmUucHJvdG90eXBlLmF0dGFjaEV2ZW50P2UucHJvdG90eXBlLmF0dGFjaEV2ZW50PW86dm9pZCAwfShuKSxvPWUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXJ8fGUucHJvdG90eXBlLmRldGFjaEV2ZW50LGZ1bmN0aW9uKHQpe3ZhciBuO3JldHVybiBuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNBbnlSZXNpemVFdmVudEluaXRlZD0hMSx0aGlzLmlmcmFtZSYmdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmlmcmFtZSksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1uOmUucHJvdG90eXBlLmRldGFjaEV2ZW50P2UucHJvdG90eXBlLmRldGFjaEV2ZW50PXdyYXBwZWRMaXN0ZW5lcjp2b2lkIDB9KG8pfShuKSk7cmV0dXJuIGF9LmNhbGwodGhpcyl9LGUucHJvdG90eXBlLmhhbmRsZVJlc2l6ZT1mdW5jdGlvbihlKXt2YXIgdCxuLG8saSxyLGE7cmV0dXJuIG49ZS50aGF0LHRoaXMudGltZXJFbGVtZW50c1tuLnRhZ05hbWUudG9Mb3dlckNhc2UoKV0/dGhpcy5pbml0VGltZXIobik6KG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSxuLmFwcGVuZENoaWxkKG8pLG8uc3R5bGUud2lkdGg9XCIxMDAlXCIsby5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIsby5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsby5zdHlsZS56SW5kZXg9LTk5OSxvLnN0eWxlLm9wYWNpdHk9MCxvLnN0eWxlLnRvcD0wLG8uc3R5bGUubGVmdD0wLHQ9d2luZG93LmdldENvbXB1dGVkU3R5bGU/Z2V0Q29tcHV0ZWRTdHlsZShuKTpuLmN1cnJlbnRTdHlsZSxyPVwic3RhdGljXCI9PT10LnBvc2l0aW9uJiZcIlwiPT09bi5zdHlsZS5wb3NpdGlvbixpPVwiXCI9PT10LnBvc2l0aW9uJiZcIlwiPT09bi5zdHlsZS5wb3NpdGlvbiwocnx8aSkmJihuLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksbnVsbCE9KGE9by5jb250ZW50V2luZG93KSYmKGEub25yZXNpemU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUuZGlzcGF0Y2hFdmVudChuKX19KHRoaXMpKSxuLmlmcmFtZT1vKSxuLmlzQW55UmVzaXplRXZlbnRJbml0ZWQ9ITB9LGUucHJvdG90eXBlLmluaXRUaW1lcj1mdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiBuPTAsdD0wLHRoaXMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwoZnVuY3Rpb24obyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGkscjtyZXR1cm4gcj1lLm9mZnNldFdpZHRoLGk9ZS5vZmZzZXRIZWlnaHQsciE9PW58fGkhPT10PyhvLmRpc3BhdGNoRXZlbnQoZSksbj1yLHQ9aSk6dm9pZCAwfX0odGhpcyksdGhpcy5vLmludGVydmFsfHwyMDApfSxlLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBkb2N1bWVudC5jcmVhdGVFdmVudD8odD1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIiksdC5pbml0RXZlbnQoXCJvbnJlc2l6ZVwiLCExLCExKSxlLmRpc3BhdGNoRXZlbnQodCkpOmRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0Pyh0PWRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCksZS5maXJlRXZlbnQoXCJvbnJlc2l6ZVwiLHQpKTohMX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlLHQsbixvLGkscixhO2ZvcihjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpLHRoaXMuaW50ZXJ2YWw9bnVsbCx3aW5kb3cuaXNBbnlSZXNpemVFdmVudEluaXRlZD0hMSx0PXRoaXMscj10aGlzLmFsbG93ZWRQcm90b3MsYT1bXSxlPW89MCxpPXIubGVuZ3RoO2k+bztlPSsrbyluPXJbZV0sbnVsbCE9bi5wcm90b3R5cGUmJmEucHVzaChmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdD1lLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyfHxlLnByb3RvdHlwZS5hdHRhY2hFdmVudCxlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyP2UucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9RWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjplLnByb3RvdHlwZS5hdHRhY2hFdmVudCYmKGUucHJvdG90eXBlLmF0dGFjaEV2ZW50PUVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEV2ZW50KSxlLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyP2UucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjplLnByb3RvdHlwZS5kZXRhY2hFdmVudD9lLnByb3RvdHlwZS5kZXRhY2hFdmVudD1FbGVtZW50LnByb3RvdHlwZS5kZXRhY2hFdmVudDp2b2lkIDB9KG4pKTtyZXR1cm4gYX0sZX0oKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiYW55LXJlc2l6ZS1ldmVudFwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBlfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW5ldyBlOihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZudWxsIT09d2luZG93JiYod2luZG93LkFueVJlc2l6ZUV2ZW50PWUpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm51bGwhPT13aW5kb3cmJih3aW5kb3cuYW55UmVzaXplRXZlbnQ9bmV3IGUpKX0pLmNhbGwodGhpcyk7XHJcbiFmdW5jdGlvbih0KXt2YXIgaT10KHdpbmRvdyk7dC5mbi52aXNpYmxlPWZ1bmN0aW9uKHQsZSxvKXtpZighKHRoaXMubGVuZ3RoPDEpKXt2YXIgcj10aGlzLmxlbmd0aD4xP3RoaXMuZXEoMCk6dGhpcyxuPXIuZ2V0KDApLGY9aS53aWR0aCgpLGg9aS5oZWlnaHQoKSxvPW8/bzpcImJvdGhcIixsPWU9PT0hMD9uLm9mZnNldFdpZHRoKm4ub2Zmc2V0SGVpZ2h0OiEwO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KXt2YXIgZz1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHU9Zy50b3A+PTAmJmcudG9wPGgscz1nLmJvdHRvbT4wJiZnLmJvdHRvbTw9aCxjPWcubGVmdD49MCYmZy5sZWZ0PGYsYT1nLnJpZ2h0PjAmJmcucmlnaHQ8PWYsdj10P3V8fHM6dSYmcyxiPXQ/Y3x8YTpjJiZhO2lmKFwiYm90aFwiPT09bylyZXR1cm4gbCYmdiYmYjtpZihcInZlcnRpY2FsXCI9PT1vKXJldHVybiBsJiZ2O2lmKFwiaG9yaXpvbnRhbFwiPT09bylyZXR1cm4gbCYmYn1lbHNle3ZhciBkPWkuc2Nyb2xsVG9wKCkscD1kK2gsdz1pLnNjcm9sbExlZnQoKSxtPXcrZix5PXIub2Zmc2V0KCksej15LnRvcCxCPXorci5oZWlnaHQoKSxDPXkubGVmdCxSPUMrci53aWR0aCgpLGo9dD09PSEwP0I6eixxPXQ9PT0hMD96OkIsSD10PT09ITA/UjpDLEw9dD09PSEwP0M6UjtpZihcImJvdGhcIj09PW8pcmV0dXJuISFsJiZwPj1xJiZqPj1kJiZtPj1MJiZIPj13O2lmKFwidmVydGljYWxcIj09PW8pcmV0dXJuISFsJiZwPj1xJiZqPj1kO2lmKFwiaG9yaXpvbnRhbFwiPT09bylyZXR1cm4hIWwmJm0+PUwmJkg+PXd9fX19KGpRdWVyeSk7XHJcbiFmdW5jdGlvbih0LG8pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobyk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bygpOnQudGluZ2xlPW8oKX0odGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIG89e29uQ2xvc2U6bnVsbCxvbk9wZW46bnVsbCxiZWZvcmVPcGVuOm51bGwsYmVmb3JlQ2xvc2U6bnVsbCxzdGlja3lGb290ZXI6ITEsZm9vdGVyOiExLGNzc0NsYXNzOltdLGNsb3NlTGFiZWw6XCJDbG9zZVwiLGNsb3NlTWV0aG9kczpbXCJvdmVybGF5XCIsXCJidXR0b25cIixcImVzY2FwZVwiXX07dGhpcy5vcHRzPXIoe30sbyx0KSx0aGlzLmluaXQoKX1mdW5jdGlvbiBvKCl7dGhpcy5tb2RhbEJveEZvb3RlciYmKHRoaXMubW9kYWxCb3hGb290ZXIuc3R5bGUud2lkdGg9dGhpcy5tb2RhbEJveC5jbGllbnRXaWR0aCtcInB4XCIsdGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS5sZWZ0PXRoaXMubW9kYWxCb3gub2Zmc2V0TGVmdCtcInB4XCIpfWZ1bmN0aW9uIGUoKXt0aGlzLm1vZGFsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsXCIpLDAhPT10aGlzLm9wdHMuY2xvc2VNZXRob2RzLmxlbmd0aCYmdGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwib3ZlcmxheVwiKSE9PS0xfHx0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLW5vT3ZlcmxheUNsb3NlXCIpLHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLm9wdHMuY3NzQ2xhc3MuZm9yRWFjaChmdW5jdGlvbih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHQpfSx0aGlzKSx0aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJidXR0b25cIikhPT0tMSYmKHRoaXMubW9kYWxDbG9zZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLHRoaXMubW9kYWxDbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZVwiKSx0aGlzLm1vZGFsQ2xvc2VCdG5JY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkljb24uY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbF9fY2xvc2VJY29uXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkljb24uaW5uZXJIVE1MPVwiw5dcIix0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSx0aGlzLm1vZGFsQ2xvc2VCdG5MYWJlbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsX19jbG9zZUxhYmVsXCIpLHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsLmlubmVySFRNTD10aGlzLm9wdHMuY2xvc2VMYWJlbCx0aGlzLm1vZGFsQ2xvc2VCdG4uYXBwZW5kQ2hpbGQodGhpcy5tb2RhbENsb3NlQnRuSWNvbiksdGhpcy5tb2RhbENsb3NlQnRuLmFwcGVuZENoaWxkKHRoaXMubW9kYWxDbG9zZUJ0bkxhYmVsKSksdGhpcy5tb2RhbEJveD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMubW9kYWxCb3guY2xhc3NMaXN0LmFkZChcInRpbmdsZS1tb2RhbC1ib3hcIiksdGhpcy5tb2RhbEJveENvbnRlbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Q29udGVudC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsLWJveF9fY29udGVudFwiKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hDb250ZW50KSx0aGlzLm9wdHMuY2xvc2VNZXRob2RzLmluZGV4T2YoXCJidXR0b25cIikhPT0tMSYmdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ2xvc2VCdG4pLHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbEJveCl9ZnVuY3Rpb24gcygpe3RoaXMubW9kYWxCb3hGb290ZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXJcIiksdGhpcy5tb2RhbEJveC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKX1mdW5jdGlvbiBpKCl7dGhpcy5fZXZlbnRzPXtjbGlja0Nsb3NlQnRuOnRoaXMuY2xvc2UuYmluZCh0aGlzKSxjbGlja092ZXJsYXk6bC5iaW5kKHRoaXMpLHJlc2l6ZTp0aGlzLmNoZWNrT3ZlcmZsb3cuYmluZCh0aGlzKSxrZXlib2FyZE5hdjpuLmJpbmQodGhpcyl9LHRoaXMub3B0cy5jbG9zZU1ldGhvZHMuaW5kZXhPZihcImJ1dHRvblwiKSE9PS0xJiZ0aGlzLm1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fZXZlbnRzLmNsaWNrQ2xvc2VCdG4pLHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX2V2ZW50cy5jbGlja092ZXJsYXkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fZXZlbnRzLnJlc2l6ZSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9ldmVudHMua2V5Ym9hcmROYXYpfWZ1bmN0aW9uIG4odCl7dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiZXNjYXBlXCIpIT09LTEmJjI3PT09dC53aGljaCYmdGhpcy5pc09wZW4oKSYmdGhpcy5jbG9zZSgpfWZ1bmN0aW9uIGwodCl7dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwib3ZlcmxheVwiKSE9PS0xJiYhZCh0LnRhcmdldCxcInRpbmdsZS1tb2RhbFwiKSYmdC5jbGllbnRYPHRoaXMubW9kYWwuY2xpZW50V2lkdGgmJnRoaXMuY2xvc2UoKX1mdW5jdGlvbiBkKHQsbyl7Zm9yKDsodD10LnBhcmVudEVsZW1lbnQpJiYhdC5jbGFzc0xpc3QuY29udGFpbnMobyk7KTtyZXR1cm4gdH1mdW5jdGlvbiBhKCl7dGhpcy5vcHRzLmNsb3NlTWV0aG9kcy5pbmRleE9mKFwiYnV0dG9uXCIpIT09LTEmJnRoaXMubW9kYWxDbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLl9ldmVudHMuY2xpY2tDbG9zZUJ0biksdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5fZXZlbnRzLmNsaWNrT3ZlcmxheSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl9ldmVudHMucmVzaXplKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMuX2V2ZW50cy5rZXlib2FyZE5hdil9ZnVuY3Rpb24gcigpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspZm9yKHZhciBvIGluIGFyZ3VtZW50c1t0XSlhcmd1bWVudHNbdF0uaGFzT3duUHJvcGVydHkobykmJihhcmd1bWVudHNbMF1bb109YXJndW1lbnRzW3RdW29dKTtyZXR1cm4gYXJndW1lbnRzWzBdfWZ1bmN0aW9uIGgoKXt2YXIgdCxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aW5nbGUtdGVzdC10cmFuc2l0aW9uXCIpLGU9e3RyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsV2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn07Zm9yKHQgaW4gZSlpZih2b2lkIDAhPT1vLnN0eWxlW3RdKXJldHVybiBlW3RdfXZhciBjPWgoKTtyZXR1cm4gdC5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3RoaXMubW9kYWx8fChlLmNhbGwodGhpcyksaS5jYWxsKHRoaXMpLGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHRoaXMubW9kYWwsZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSx0aGlzLm9wdHMuZm9vdGVyJiZ0aGlzLmFkZEZvb3RlcigpKX0sdC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe251bGwhPT10aGlzLm1vZGFsJiYoYS5jYWxsKHRoaXMpLHRoaXMubW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsKSx0aGlzLm1vZGFsPW51bGwpfSx0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lm9wdHMuYmVmb3JlT3BlbiYmdC5vcHRzLmJlZm9yZU9wZW4oKSx0aGlzLm1vZGFsLnN0eWxlLnJlbW92ZVByb3BlcnR5P3RoaXMubW9kYWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpOnRoaXMubW9kYWwuc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwiZGlzcGxheVwiKSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtZW5hYmxlZFwiKSx0aGlzLnNldFN0aWNreUZvb3Rlcih0aGlzLm9wdHMuc3RpY2t5Rm9vdGVyKSx0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtLXZpc2libGVcIiksYz90aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYyxmdW5jdGlvbiBvKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgdC5vcHRzLm9uT3BlbiYmdC5vcHRzLm9uT3Blbi5jYWxsKHQpLHQubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjLG8sITEpfSwhMSk6XCJmdW5jdGlvblwiPT10eXBlb2YgdC5vcHRzLm9uT3BlbiYmdC5vcHRzLm9uT3Blbi5jYWxsKHQpLHRoaXMuY2hlY2tPdmVyZmxvdygpfSx0LnByb3RvdHlwZS5pc09wZW49ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpfSx0LnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0cy5iZWZvcmVDbG9zZSl7dmFyIHQ9dGhpcy5vcHRzLmJlZm9yZUNsb3NlLmNhbGwodGhpcyk7aWYoIXQpcmV0dXJufWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1lbmFibGVkXCIpLHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC0tdmlzaWJsZVwiKTt2YXIgbz10aGlzO2M/dGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKGMsZnVuY3Rpb24gdCgpe28ubW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjLHQsITEpLG8ubW9kYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixcImZ1bmN0aW9uXCI9PXR5cGVvZiBvLm9wdHMub25DbG9zZSYmby5vcHRzLm9uQ2xvc2UuY2FsbCh0aGlzKX0sITEpOihvLm1vZGFsLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsXCJmdW5jdGlvblwiPT10eXBlb2Ygby5vcHRzLm9uQ2xvc2UmJm8ub3B0cy5vbkNsb3NlLmNhbGwodGhpcykpfSx0LnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKHQpe1wic3RyaW5nXCI9PXR5cGVvZiB0P3RoaXMubW9kYWxCb3hDb250ZW50LmlubmVySFRNTD10Oih0aGlzLm1vZGFsQm94Q29udGVudC5pbm5lckhUTUw9XCJcIix0aGlzLm1vZGFsQm94Q29udGVudC5hcHBlbmRDaGlsZCh0KSl9LHQucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RhbEJveENvbnRlbnR9LHQucHJvdG90eXBlLmFkZEZvb3Rlcj1mdW5jdGlvbigpe3MuY2FsbCh0aGlzKX0sdC5wcm90b3R5cGUuc2V0Rm9vdGVyQ29udGVudD1mdW5jdGlvbih0KXt0aGlzLm1vZGFsQm94Rm9vdGVyLmlubmVySFRNTD10fSx0LnByb3RvdHlwZS5nZXRGb290ZXJDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kYWxCb3hGb290ZXJ9LHQucHJvdG90eXBlLnNldFN0aWNreUZvb3Rlcj1mdW5jdGlvbih0KXt0aGlzLmlzT3ZlcmZsb3coKXx8KHQ9ITEpLHQ/dGhpcy5tb2RhbEJveC5jb250YWlucyh0aGlzLm1vZGFsQm94Rm9vdGVyKSYmKHRoaXMubW9kYWxCb3gucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEJveEZvb3RlciksdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJ0aW5nbGUtbW9kYWwtYm94X19mb290ZXItLXN0aWNreVwiKSxvLmNhbGwodGhpcyksdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT10aGlzLm1vZGFsQm94Rm9vdGVyLmNsaWVudEhlaWdodCsyMCtcInB4XCIpOnRoaXMubW9kYWxCb3hGb290ZXImJih0aGlzLm1vZGFsQm94LmNvbnRhaW5zKHRoaXMubW9kYWxCb3hGb290ZXIpfHwodGhpcy5tb2RhbC5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsQm94Rm9vdGVyKSx0aGlzLm1vZGFsQm94LmFwcGVuZENoaWxkKHRoaXMubW9kYWxCb3hGb290ZXIpLHRoaXMubW9kYWxCb3hGb290ZXIuc3R5bGUud2lkdGg9XCJhdXRvXCIsdGhpcy5tb2RhbEJveEZvb3Rlci5zdHlsZS5sZWZ0PVwiXCIsdGhpcy5tb2RhbEJveENvbnRlbnQuc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXT1cIlwiLHRoaXMubW9kYWxCb3hGb290ZXIuY2xhc3NMaXN0LnJlbW92ZShcInRpbmdsZS1tb2RhbC1ib3hfX2Zvb3Rlci0tc3RpY2t5XCIpKSl9LHQucHJvdG90eXBlLmFkZEZvb3RlckJ0bj1mdW5jdGlvbih0LG8sZSl7dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtyZXR1cm4gcy5pbm5lckhUTUw9dCxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGUpLFwic3RyaW5nXCI9PXR5cGVvZiBvJiZvLmxlbmd0aCYmby5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbih0KXtzLmNsYXNzTGlzdC5hZGQodCl9KSx0aGlzLm1vZGFsQm94Rm9vdGVyLmFwcGVuZENoaWxkKHMpLHN9LHQucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe2NvbnNvbGUud2FybihcIlJlc2l6ZSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAxLjBcIil9LHQucHJvdG90eXBlLmlzT3ZlcmZsb3c9ZnVuY3Rpb24oKXt2YXIgdD13aW5kb3cuaW5uZXJIZWlnaHQsbz10aGlzLm1vZGFsQm94LmNsaWVudEhlaWdodDtyZXR1cm4gbz49dH0sdC5wcm90b3R5cGUuY2hlY2tPdmVyZmxvdz1mdW5jdGlvbigpe3RoaXMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGluZ2xlLW1vZGFsLS12aXNpYmxlXCIpJiYodGhpcy5pc092ZXJmbG93KCk/dGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwidGluZ2xlLW1vZGFsLS1vdmVyZmxvd1wiKTp0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJ0aW5nbGUtbW9kYWwtLW92ZXJmbG93XCIpLCF0aGlzLmlzT3ZlcmZsb3coKSYmdGhpcy5vcHRzLnN0aWNreUZvb3Rlcj90aGlzLnNldFN0aWNreUZvb3RlcighMSk6dGhpcy5pc092ZXJmbG93KCkmJnRoaXMub3B0cy5zdGlja3lGb290ZXImJihvLmNhbGwodGhpcyksdGhpcy5zZXRTdGlja3lGb290ZXIoITApKSl9LHttb2RhbDp0fX0pO1xyXG4vKiFcclxuV2F5cG9pbnRzIC0gNC4wLjBcclxuQ29weXJpZ2h0IMKpIDIwMTEtMjAxNSBDYWxlYiBUcm91Z2h0b25cclxuTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5odHRwczovL2dpdGh1Yi5jb20vaW1ha2V3ZWJ0aGluZ3Mvd2F5cG9pbnRzL2Jsb2IvbWFzdGVyL2xpY2Vuc2VzLnR4dFxyXG4qL1xyXG4hZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KG4pe2lmKCFuKXRocm93IG5ldyBFcnJvcihcIk5vIG9wdGlvbnMgcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yXCIpO2lmKCFuLmVsZW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiTm8gZWxlbWVudCBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yXCIpO2lmKCFuLmhhbmRsZXIpdGhyb3cgbmV3IEVycm9yKFwiTm8gaGFuZGxlciBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yXCIpO3RoaXMua2V5PVwid2F5cG9pbnQtXCIrZSx0aGlzLm9wdGlvbnM9dC5BZGFwdGVyLmV4dGVuZCh7fSx0LmRlZmF1bHRzLG4pLHRoaXMuZWxlbWVudD10aGlzLm9wdGlvbnMuZWxlbWVudCx0aGlzLmFkYXB0ZXI9bmV3IHQuQWRhcHRlcih0aGlzLmVsZW1lbnQpLHRoaXMuY2FsbGJhY2s9bi5oYW5kbGVyLHRoaXMuYXhpcz10aGlzLm9wdGlvbnMuaG9yaXpvbnRhbD9cImhvcml6b250YWxcIjpcInZlcnRpY2FsXCIsdGhpcy5lbmFibGVkPXRoaXMub3B0aW9ucy5lbmFibGVkLHRoaXMudHJpZ2dlclBvaW50PW51bGwsdGhpcy5ncm91cD10Lkdyb3VwLmZpbmRPckNyZWF0ZSh7bmFtZTp0aGlzLm9wdGlvbnMuZ3JvdXAsYXhpczp0aGlzLmF4aXN9KSx0aGlzLmNvbnRleHQ9dC5Db250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCh0aGlzLm9wdGlvbnMuY29udGV4dCksdC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdJiYodGhpcy5vcHRpb25zLm9mZnNldD10Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF0pLHRoaXMuZ3JvdXAuYWRkKHRoaXMpLHRoaXMuY29udGV4dC5hZGQodGhpcyksaVt0aGlzLmtleV09dGhpcyxlKz0xfXZhciBlPTAsaT17fTt0LnByb3RvdHlwZS5xdWV1ZVRyaWdnZXI9ZnVuY3Rpb24odCl7dGhpcy5ncm91cC5xdWV1ZVRyaWdnZXIodGhpcyx0KX0sdC5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0KXt0aGlzLmVuYWJsZWQmJnRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2suYXBwbHkodGhpcyx0KX0sdC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuY29udGV4dC5yZW1vdmUodGhpcyksdGhpcy5ncm91cC5yZW1vdmUodGhpcyksZGVsZXRlIGlbdGhpcy5rZXldfSx0LnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5hYmxlZD0hMSx0aGlzfSx0LnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0LnJlZnJlc2goKSx0aGlzLmVuYWJsZWQ9ITAsdGhpc30sdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdyb3VwLm5leHQodGhpcyl9LHQucHJvdG90eXBlLnByZXZpb3VzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ3JvdXAucHJldmlvdXModGhpcyl9LHQuaW52b2tlQWxsPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO2Zvcih2YXIgbiBpbiBpKWUucHVzaChpW25dKTtmb3IodmFyIG89MCxyPWUubGVuZ3RoO3I+bztvKyspZVtvXVt0XSgpfSx0LmRlc3Ryb3lBbGw9ZnVuY3Rpb24oKXt0Lmludm9rZUFsbChcImRlc3Ryb3lcIil9LHQuZGlzYWJsZUFsbD1mdW5jdGlvbigpe3QuaW52b2tlQWxsKFwiZGlzYWJsZVwiKX0sdC5lbmFibGVBbGw9ZnVuY3Rpb24oKXt0Lmludm9rZUFsbChcImVuYWJsZVwiKX0sdC5yZWZyZXNoQWxsPWZ1bmN0aW9uKCl7dC5Db250ZXh0LnJlZnJlc2hBbGwoKX0sdC52aWV3cG9ydEhlaWdodD1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaW5uZXJIZWlnaHR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR9LHQudmlld3BvcnRXaWR0aD1mdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh9LHQuYWRhcHRlcnM9W10sdC5kZWZhdWx0cz17Y29udGV4dDp3aW5kb3csY29udGludW91czohMCxlbmFibGVkOiEwLGdyb3VwOlwiZGVmYXVsdFwiLGhvcml6b250YWw6ITEsb2Zmc2V0OjB9LHQub2Zmc2V0QWxpYXNlcz17XCJib3R0b20taW4tdmlld1wiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dC5pbm5lckhlaWdodCgpLXRoaXMuYWRhcHRlci5vdXRlckhlaWdodCgpfSxcInJpZ2h0LWluLXZpZXdcIjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHQuaW5uZXJXaWR0aCgpLXRoaXMuYWRhcHRlci5vdXRlcldpZHRoKCl9fSx3aW5kb3cuV2F5cG9pbnQ9dH0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7d2luZG93LnNldFRpbWVvdXQodCwxZTMvNjApfWZ1bmN0aW9uIGUodCl7dGhpcy5lbGVtZW50PXQsdGhpcy5BZGFwdGVyPW8uQWRhcHRlcix0aGlzLmFkYXB0ZXI9bmV3IHRoaXMuQWRhcHRlcih0KSx0aGlzLmtleT1cIndheXBvaW50LWNvbnRleHQtXCIraSx0aGlzLmRpZFNjcm9sbD0hMSx0aGlzLmRpZFJlc2l6ZT0hMSx0aGlzLm9sZFNjcm9sbD17eDp0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLHk6dGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpfSx0aGlzLndheXBvaW50cz17dmVydGljYWw6e30saG9yaXpvbnRhbDp7fX0sdC53YXlwb2ludENvbnRleHRLZXk9dGhpcy5rZXksblt0LndheXBvaW50Q29udGV4dEtleV09dGhpcyxpKz0xLHRoaXMuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcigpLHRoaXMuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcigpfXZhciBpPTAsbj17fSxvPXdpbmRvdy5XYXlwb2ludCxyPXdpbmRvdy5vbmxvYWQ7ZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQub3B0aW9ucy5ob3Jpem9udGFsP1wiaG9yaXpvbnRhbFwiOlwidmVydGljYWxcIjt0aGlzLndheXBvaW50c1tlXVt0LmtleV09dCx0aGlzLnJlZnJlc2goKX0sZS5wcm90b3R5cGUuY2hlY2tFbXB0eT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLmhvcml6b250YWwpLGU9dGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMudmVydGljYWwpO3QmJmUmJih0aGlzLmFkYXB0ZXIub2ZmKFwiLndheXBvaW50c1wiKSxkZWxldGUgblt0aGlzLmtleV0pfSxlLnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2UuaGFuZGxlUmVzaXplKCksZS5kaWRSZXNpemU9ITF9dmFyIGU9dGhpczt0aGlzLmFkYXB0ZXIub24oXCJyZXNpemUud2F5cG9pbnRzXCIsZnVuY3Rpb24oKXtlLmRpZFJlc2l6ZXx8KGUuZGlkUmVzaXplPSEwLG8ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpKX0pfSxlLnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2UuaGFuZGxlU2Nyb2xsKCksZS5kaWRTY3JvbGw9ITF9dmFyIGU9dGhpczt0aGlzLmFkYXB0ZXIub24oXCJzY3JvbGwud2F5cG9pbnRzXCIsZnVuY3Rpb24oKXsoIWUuZGlkU2Nyb2xsfHxvLmlzVG91Y2gpJiYoZS5kaWRTY3JvbGw9ITAsby5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCkpfSl9LGUucHJvdG90eXBlLmhhbmRsZVJlc2l6ZT1mdW5jdGlvbigpe28uQ29udGV4dC5yZWZyZXNoQWxsKCl9LGUucHJvdG90eXBlLmhhbmRsZVNjcm9sbD1mdW5jdGlvbigpe3ZhciB0PXt9LGU9e2hvcml6b250YWw6e25ld1Njcm9sbDp0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLG9sZFNjcm9sbDp0aGlzLm9sZFNjcm9sbC54LGZvcndhcmQ6XCJyaWdodFwiLGJhY2t3YXJkOlwibGVmdFwifSx2ZXJ0aWNhbDp7bmV3U2Nyb2xsOnRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueSxmb3J3YXJkOlwiZG93blwiLGJhY2t3YXJkOlwidXBcIn19O2Zvcih2YXIgaSBpbiBlKXt2YXIgbj1lW2ldLG89bi5uZXdTY3JvbGw+bi5vbGRTY3JvbGwscj1vP24uZm9yd2FyZDpuLmJhY2t3YXJkO2Zvcih2YXIgcyBpbiB0aGlzLndheXBvaW50c1tpXSl7dmFyIGw9dGhpcy53YXlwb2ludHNbaV1bc10sYT1uLm9sZFNjcm9sbDxsLnRyaWdnZXJQb2ludCxoPW4ubmV3U2Nyb2xsPj1sLnRyaWdnZXJQb2ludCxwPWEmJmgsdT0hYSYmIWg7KHB8fHUpJiYobC5xdWV1ZVRyaWdnZXIociksdFtsLmdyb3VwLmlkXT1sLmdyb3VwKX19Zm9yKHZhciBjIGluIHQpdFtjXS5mbHVzaFRyaWdnZXJzKCk7dGhpcy5vbGRTY3JvbGw9e3g6ZS5ob3Jpem9udGFsLm5ld1Njcm9sbCx5OmUudmVydGljYWwubmV3U2Nyb2xsfX0sZS5wcm90b3R5cGUuaW5uZXJIZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50PT10aGlzLmVsZW1lbnQud2luZG93P28udmlld3BvcnRIZWlnaHQoKTp0aGlzLmFkYXB0ZXIuaW5uZXJIZWlnaHQoKX0sZS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKHQpe2RlbGV0ZSB0aGlzLndheXBvaW50c1t0LmF4aXNdW3Qua2V5XSx0aGlzLmNoZWNrRW1wdHkoKX0sZS5wcm90b3R5cGUuaW5uZXJXaWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQ9PXRoaXMuZWxlbWVudC53aW5kb3c/by52aWV3cG9ydFdpZHRoKCk6dGhpcy5hZGFwdGVyLmlubmVyV2lkdGgoKX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciB0PVtdO2Zvcih2YXIgZSBpbiB0aGlzLndheXBvaW50cylmb3IodmFyIGkgaW4gdGhpcy53YXlwb2ludHNbZV0pdC5wdXNoKHRoaXMud2F5cG9pbnRzW2VdW2ldKTtmb3IodmFyIG49MCxvPXQubGVuZ3RoO28+bjtuKyspdFtuXS5kZXN0cm95KCl9LGUucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMuZWxlbWVudD09dGhpcy5lbGVtZW50LndpbmRvdyxpPWU/dm9pZCAwOnRoaXMuYWRhcHRlci5vZmZzZXQoKSxuPXt9O3RoaXMuaGFuZGxlU2Nyb2xsKCksdD17aG9yaXpvbnRhbDp7Y29udGV4dE9mZnNldDplPzA6aS5sZWZ0LGNvbnRleHRTY3JvbGw6ZT8wOnRoaXMub2xkU2Nyb2xsLngsY29udGV4dERpbWVuc2lvbjp0aGlzLmlubmVyV2lkdGgoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueCxmb3J3YXJkOlwicmlnaHRcIixiYWNrd2FyZDpcImxlZnRcIixvZmZzZXRQcm9wOlwibGVmdFwifSx2ZXJ0aWNhbDp7Y29udGV4dE9mZnNldDplPzA6aS50b3AsY29udGV4dFNjcm9sbDplPzA6dGhpcy5vbGRTY3JvbGwueSxjb250ZXh0RGltZW5zaW9uOnRoaXMuaW5uZXJIZWlnaHQoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueSxmb3J3YXJkOlwiZG93blwiLGJhY2t3YXJkOlwidXBcIixvZmZzZXRQcm9wOlwidG9wXCJ9fTtmb3IodmFyIHIgaW4gdCl7dmFyIHM9dFtyXTtmb3IodmFyIGwgaW4gdGhpcy53YXlwb2ludHNbcl0pe3ZhciBhLGgscCx1LGMsZj10aGlzLndheXBvaW50c1tyXVtsXSxkPWYub3B0aW9ucy5vZmZzZXQseT1mLnRyaWdnZXJQb2ludCxnPTAsdz1udWxsPT15O2YuZWxlbWVudCE9PWYuZWxlbWVudC53aW5kb3cmJihnPWYuYWRhcHRlci5vZmZzZXQoKVtzLm9mZnNldFByb3BdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2Q9ZC5hcHBseShmKTpcInN0cmluZ1wiPT10eXBlb2YgZCYmKGQ9cGFyc2VGbG9hdChkKSxmLm9wdGlvbnMub2Zmc2V0LmluZGV4T2YoXCIlXCIpPi0xJiYoZD1NYXRoLmNlaWwocy5jb250ZXh0RGltZW5zaW9uKmQvMTAwKSkpLGE9cy5jb250ZXh0U2Nyb2xsLXMuY29udGV4dE9mZnNldCxmLnRyaWdnZXJQb2ludD1nK2EtZCxoPXk8cy5vbGRTY3JvbGwscD1mLnRyaWdnZXJQb2ludD49cy5vbGRTY3JvbGwsdT1oJiZwLGM9IWgmJiFwLCF3JiZ1PyhmLnF1ZXVlVHJpZ2dlcihzLmJhY2t3YXJkKSxuW2YuZ3JvdXAuaWRdPWYuZ3JvdXApOiF3JiZjPyhmLnF1ZXVlVHJpZ2dlcihzLmZvcndhcmQpLG5bZi5ncm91cC5pZF09Zi5ncm91cCk6dyYmcy5vbGRTY3JvbGw+PWYudHJpZ2dlclBvaW50JiYoZi5xdWV1ZVRyaWdnZXIocy5mb3J3YXJkKSxuW2YuZ3JvdXAuaWRdPWYuZ3JvdXApfX1yZXR1cm4gby5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gbiluW3RdLmZsdXNoVHJpZ2dlcnMoKX0pLHRoaXN9LGUuZmluZE9yQ3JlYXRlQnlFbGVtZW50PWZ1bmN0aW9uKHQpe3JldHVybiBlLmZpbmRCeUVsZW1lbnQodCl8fG5ldyBlKHQpfSxlLnJlZnJlc2hBbGw9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gbiluW3RdLnJlZnJlc2goKX0sZS5maW5kQnlFbGVtZW50PWZ1bmN0aW9uKHQpe3JldHVybiBuW3Qud2F5cG9pbnRDb250ZXh0S2V5XX0sd2luZG93Lm9ubG9hZD1mdW5jdGlvbigpe3ImJnIoKSxlLnJlZnJlc2hBbGwoKX0sby5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oZSl7dmFyIGk9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8dDtpLmNhbGwod2luZG93LGUpfSxvLkNvbnRleHQ9ZX0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlKXtyZXR1cm4gdC50cmlnZ2VyUG9pbnQtZS50cmlnZ2VyUG9pbnR9ZnVuY3Rpb24gZSh0LGUpe3JldHVybiBlLnRyaWdnZXJQb2ludC10LnRyaWdnZXJQb2ludH1mdW5jdGlvbiBpKHQpe3RoaXMubmFtZT10Lm5hbWUsdGhpcy5heGlzPXQuYXhpcyx0aGlzLmlkPXRoaXMubmFtZStcIi1cIit0aGlzLmF4aXMsdGhpcy53YXlwb2ludHM9W10sdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKSxuW3RoaXMuYXhpc11bdGhpcy5uYW1lXT10aGlzfXZhciBuPXt2ZXJ0aWNhbDp7fSxob3Jpem9udGFsOnt9fSxvPXdpbmRvdy5XYXlwb2ludDtpLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7dGhpcy53YXlwb2ludHMucHVzaCh0KX0saS5wcm90b3R5cGUuY2xlYXJUcmlnZ2VyUXVldWVzPWZ1bmN0aW9uKCl7dGhpcy50cmlnZ2VyUXVldWVzPXt1cDpbXSxkb3duOltdLGxlZnQ6W10scmlnaHQ6W119fSxpLnByb3RvdHlwZS5mbHVzaFRyaWdnZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciBpIGluIHRoaXMudHJpZ2dlclF1ZXVlcyl7dmFyIG49dGhpcy50cmlnZ2VyUXVldWVzW2ldLG89XCJ1cFwiPT09aXx8XCJsZWZ0XCI9PT1pO24uc29ydChvP2U6dCk7Zm9yKHZhciByPTAscz1uLmxlbmd0aDtzPnI7cis9MSl7dmFyIGw9bltyXTsobC5vcHRpb25zLmNvbnRpbnVvdXN8fHI9PT1uLmxlbmd0aC0xKSYmbC50cmlnZ2VyKFtpXSl9fXRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKCl9LGkucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oZSl7dGhpcy53YXlwb2ludHMuc29ydCh0KTt2YXIgaT1vLkFkYXB0ZXIuaW5BcnJheShlLHRoaXMud2F5cG9pbnRzKSxuPWk9PT10aGlzLndheXBvaW50cy5sZW5ndGgtMTtyZXR1cm4gbj9udWxsOnRoaXMud2F5cG9pbnRzW2krMV19LGkucHJvdG90eXBlLnByZXZpb3VzPWZ1bmN0aW9uKGUpe3RoaXMud2F5cG9pbnRzLnNvcnQodCk7dmFyIGk9by5BZGFwdGVyLmluQXJyYXkoZSx0aGlzLndheXBvaW50cyk7cmV0dXJuIGk/dGhpcy53YXlwb2ludHNbaS0xXTpudWxsfSxpLnByb3RvdHlwZS5xdWV1ZVRyaWdnZXI9ZnVuY3Rpb24odCxlKXt0aGlzLnRyaWdnZXJRdWV1ZXNbZV0ucHVzaCh0KX0saS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKHQpe3ZhciBlPW8uQWRhcHRlci5pbkFycmF5KHQsdGhpcy53YXlwb2ludHMpO2U+LTEmJnRoaXMud2F5cG9pbnRzLnNwbGljZShlLDEpfSxpLnByb3RvdHlwZS5maXJzdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLndheXBvaW50c1swXX0saS5wcm90b3R5cGUubGFzdD1mdW5jdGlvbigpe3JldHVybiB0aGlzLndheXBvaW50c1t0aGlzLndheXBvaW50cy5sZW5ndGgtMV19LGkuZmluZE9yQ3JlYXRlPWZ1bmN0aW9uKHQpe3JldHVybiBuW3QuYXhpc11bdC5uYW1lXXx8bmV3IGkodCl9LG8uR3JvdXA9aX0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIHQ9PT10LndpbmRvd31mdW5jdGlvbiBlKGUpe3JldHVybiB0KGUpP2U6ZS5kZWZhdWx0Vmlld31mdW5jdGlvbiBpKHQpe3RoaXMuZWxlbWVudD10LHRoaXMuaGFuZGxlcnM9e319dmFyIG49d2luZG93LldheXBvaW50O2kucHJvdG90eXBlLmlubmVySGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzLmVsZW1lbnQpO3JldHVybiBlP3RoaXMuZWxlbWVudC5pbm5lckhlaWdodDp0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0fSxpLnByb3RvdHlwZS5pbm5lcldpZHRoPWZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzLmVsZW1lbnQpO3JldHVybiBlP3RoaXMuZWxlbWVudC5pbm5lcldpZHRoOnRoaXMuZWxlbWVudC5jbGllbnRXaWR0aH0saS5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gaSh0LGUsaSl7Zm9yKHZhciBuPTAsbz1lLmxlbmd0aC0xO28+bjtuKyspe3ZhciByPWVbbl07aSYmaSE9PXJ8fHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihyKX19dmFyIG49dC5zcGxpdChcIi5cIiksbz1uWzBdLHI9blsxXSxzPXRoaXMuZWxlbWVudDtpZihyJiZ0aGlzLmhhbmRsZXJzW3JdJiZvKWkocyx0aGlzLmhhbmRsZXJzW3JdW29dLGUpLHRoaXMuaGFuZGxlcnNbcl1bb109W107ZWxzZSBpZihvKWZvcih2YXIgbCBpbiB0aGlzLmhhbmRsZXJzKWkocyx0aGlzLmhhbmRsZXJzW2xdW29dfHxbXSxlKSx0aGlzLmhhbmRsZXJzW2xdW29dPVtdO2Vsc2UgaWYociYmdGhpcy5oYW5kbGVyc1tyXSl7Zm9yKHZhciBhIGluIHRoaXMuaGFuZGxlcnNbcl0paShzLHRoaXMuaGFuZGxlcnNbcl1bYV0sZSk7dGhpcy5oYW5kbGVyc1tyXT17fX19LGkucHJvdG90eXBlLm9mZnNldD1mdW5jdGlvbigpe2lmKCF0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudClyZXR1cm4gbnVsbDt2YXIgdD10aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsaT1lKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSxuPXt0b3A6MCxsZWZ0OjB9O3JldHVybiB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0JiYobj10aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLHt0b3A6bi50b3AraS5wYWdlWU9mZnNldC10LmNsaWVudFRvcCxsZWZ0Om4ubGVmdCtpLnBhZ2VYT2Zmc2V0LXQuY2xpZW50TGVmdH19LGkucHJvdG90eXBlLm9uPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dC5zcGxpdChcIi5cIiksbj1pWzBdLG89aVsxXXx8XCJfX2RlZmF1bHRcIixyPXRoaXMuaGFuZGxlcnNbb109dGhpcy5oYW5kbGVyc1tvXXx8e30scz1yW25dPXJbbl18fFtdO3MucHVzaChlKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuLGUpfSxpLnByb3RvdHlwZS5vdXRlckhlaWdodD1mdW5jdGlvbihlKXt2YXIgaSxuPXRoaXMuaW5uZXJIZWlnaHQoKTtyZXR1cm4gZSYmIXQodGhpcy5lbGVtZW50KSYmKGk9d2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KSxuKz1wYXJzZUludChpLm1hcmdpblRvcCwxMCksbis9cGFyc2VJbnQoaS5tYXJnaW5Cb3R0b20sMTApKSxufSxpLnByb3RvdHlwZS5vdXRlcldpZHRoPWZ1bmN0aW9uKGUpe3ZhciBpLG49dGhpcy5pbm5lcldpZHRoKCk7cmV0dXJuIGUmJiF0KHRoaXMuZWxlbWVudCkmJihpPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCksbis9cGFyc2VJbnQoaS5tYXJnaW5MZWZ0LDEwKSxuKz1wYXJzZUludChpLm1hcmdpblJpZ2h0LDEwKSksbn0saS5wcm90b3R5cGUuc2Nyb2xsTGVmdD1mdW5jdGlvbigpe3ZhciB0PWUodGhpcy5lbGVtZW50KTtyZXR1cm4gdD90LnBhZ2VYT2Zmc2V0OnRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0fSxpLnByb3RvdHlwZS5zY3JvbGxUb3A9ZnVuY3Rpb24oKXt2YXIgdD1lKHRoaXMuZWxlbWVudCk7cmV0dXJuIHQ/dC5wYWdlWU9mZnNldDp0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wfSxpLmV4dGVuZD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09ZVtpXSk7cmV0dXJuIHR9Zm9yKHZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksaT0xLG49ZS5sZW5ndGg7bj5pO2krKyl0KGVbMF0sZVtpXSk7cmV0dXJuIGVbMF19LGkuaW5BcnJheT1mdW5jdGlvbih0LGUsaSl7cmV0dXJuIG51bGw9PWU/LTE6ZS5pbmRleE9mKHQsaSl9LGkuaXNFbXB0eU9iamVjdD1mdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gdClyZXR1cm4hMTtyZXR1cm4hMH0sbi5hZGFwdGVycy5wdXNoKHtuYW1lOlwibm9mcmFtZXdvcmtcIixBZGFwdGVyOml9KSxuLkFkYXB0ZXI9aX0oKTtcclxuXHJcbi8qKlxyXG4gKiBPd2wgY2Fyb3VzZWxcclxuICogQHZlcnNpb24gMi4wLjBcclxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcclxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqIEB0b2RvIExhenkgTG9hZCBJY29uXHJcbiAqIEB0b2RvIHByZXZlbnQgYW5pbWF0aW9uZW5kIGJ1YmxpbmdcclxuICogQHRvZG8gaXRlbXNTY2FsZVVwXHJcbiAqIEB0b2RvIFRlc3QgWmVwdG9cclxuICogQHRvZG8gc3RhZ2VQYWRkaW5nIGNhbGN1bGF0ZSB3cm9uZyBhY3RpdmUgY2xhc3Nlc1xyXG4gKi9cclxuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcclxuXHJcblx0dmFyIGRyYWcsIHN0YXRlLCBlO1xyXG5cclxuXHQvKipcclxuXHQgKiBUZW1wbGF0ZSBmb3Igc3RhdHVzIGluZm9ybWF0aW9uIGFib3V0IGRyYWcgYW5kIHRvdWNoIGV2ZW50cy5cclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdGRyYWcgPSB7XHJcblx0XHRzdGFydDogMCxcclxuXHRcdHN0YXJ0WDogMCxcclxuXHRcdHN0YXJ0WTogMCxcclxuXHRcdGN1cnJlbnQ6IDAsXHJcblx0XHRjdXJyZW50WDogMCxcclxuXHRcdGN1cnJlbnRZOiAwLFxyXG5cdFx0b2Zmc2V0WDogMCxcclxuXHRcdG9mZnNldFk6IDAsXHJcblx0XHRkaXN0YW5jZTogbnVsbCxcclxuXHRcdHN0YXJ0VGltZTogMCxcclxuXHRcdGVuZFRpbWU6IDAsXHJcblx0XHR1cGRhdGVkWDogMCxcclxuXHRcdHRhcmdldEVsOiBudWxsXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogVGVtcGxhdGUgZm9yIHNvbWUgc3RhdHVzIGluZm9ybWF0aW9ucy5cclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdHN0YXRlID0ge1xyXG5cdFx0aXNUb3VjaDogZmFsc2UsXHJcblx0XHRpc1Njcm9sbGluZzogZmFsc2UsXHJcblx0XHRpc1N3aXBpbmc6IGZhbHNlLFxyXG5cdFx0ZGlyZWN0aW9uOiBmYWxzZSxcclxuXHRcdGluTW90aW9uOiBmYWxzZVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEV2ZW50IGZ1bmN0aW9ucyByZWZlcmVuY2VzLlxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0ZSA9IHtcclxuXHRcdF9vbkRyYWdTdGFydDogbnVsbCxcclxuXHRcdF9vbkRyYWdNb3ZlOiBudWxsLFxyXG5cdFx0X29uRHJhZ0VuZDogbnVsbCxcclxuXHRcdF90cmFuc2l0aW9uRW5kOiBudWxsLFxyXG5cdFx0X3Jlc2l6ZXI6IG51bGwsXHJcblx0XHRfcmVzcG9uc2l2ZUNhbGw6IG51bGwsXHJcblx0XHRfZ29Ub0xvb3A6IG51bGwsXHJcblx0XHRfY2hlY2tWaXNpYmlsZTogbnVsbFxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSBjYXJvdXNlbC5cclxuXHQgKiBAY2xhc3MgVGhlIE93bCBDYXJvdXNlbC5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBjcmVhdGUgdGhlIGNhcm91c2VsIGZvci5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gVGhlIG9wdGlvbnNcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBPd2woZWxlbWVudCwgb3B0aW9ucykge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ3VycmVudCBzZXR0aW5ncyBmb3IgdGhlIGNhcm91c2VsLlxyXG5cdFx0ICogQHB1YmxpY1xyXG5cdFx0ICovXHJcblx0XHR0aGlzLnNldHRpbmdzID0gbnVsbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEN1cnJlbnQgb3B0aW9ucyBzZXQgYnkgdGhlIGNhbGxlciBpbmNsdWRpbmcgZGVmYXVsdHMuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKi9cclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBPd2wuRGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUGx1Z2luIGVsZW1lbnQuXHJcblx0XHQgKiBAcHVibGljXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2FjaGVzIGluZm9ybWF0aW9ucyBhYm91dCBkcmFnIGFuZCB0b3VjaCBldmVudHMuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZHJhZyA9ICQuZXh0ZW5kKHt9LCBkcmFnKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENhY2hlcyBzb21lIHN0YXR1cyBpbmZvcm1hdGlvbnMuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc3RhdGUgPSAkLmV4dGVuZCh7fSwgc3RhdGUpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHRvZG8gTXVzdCBiZSBkb2N1bWVudGVkXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZSA9ICQuZXh0ZW5kKHt9LCBlKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlZmVyZW5jZXMgdG8gdGhlIHJ1bm5pbmcgcGx1Z2lucyBvZiB0aGlzIGNhcm91c2VsLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9wbHVnaW5zID0ge307XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDdXJyZW50bHkgc3VwcHJlc3NlZCBldmVudHMgdG8gcHJldmVudCB0aGVtIGZyb20gYmVlaW5nIHJldHJpZ2dlcmVkLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9zdXByZXNzID0ge307XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBYnNvbHV0ZSBjdXJyZW50IHBvc2l0aW9uLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9jdXJyZW50ID0gbnVsbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX3NwZWVkID0gbnVsbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENvb3JkaW5hdGVzIG9mIGFsbCBpdGVtcyBpbiBwaXhlbC5cclxuXHRcdCAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWVtYmVyIGlzIG1pc3NsZWFkaW5nLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9jb29yZGluYXRlcyA9IFtdO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ3VycmVudCBicmVha3BvaW50LlxyXG5cdFx0ICogQHRvZG8gUmVhbCBtZWRpYSBxdWVyaWVzIHdvdWxkIGJlIG5pY2UuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBudWxsO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ3VycmVudCB3aWR0aCBvZiB0aGUgcGx1Z2luIGVsZW1lbnQuXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX3dpZHRoID0gbnVsbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFsbCByZWFsIGl0ZW1zLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWxsIGNsb25lZCBpdGVtcy5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5fY2xvbmVzID0gW107XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBNZXJnZSB2YWx1ZXMgb2YgYWxsIGl0ZW1zLlxyXG5cdFx0ICogQHRvZG8gTWF5YmUgdGhpcyBjb3VsZCBiZSBwYXJ0IG9mIGEgcGx1Z2luLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9tZXJnZXJzID0gW107XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbnZhbGlkYXRlZCBwYXJ0cyB3aXRoaW4gdGhlIHVwZGF0ZSBwcm9jZXNzLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9pbnZhbGlkYXRlZCA9IHt9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogT3JkZXJlZCBsaXN0IG9mIHdvcmtlcnMgZm9yIHRoZSB1cGRhdGUgcHJvY2Vzcy5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5fcGlwZSA9IFtdO1xyXG5cclxuXHRcdCQuZWFjaChPd2wuUGx1Z2lucywgJC5wcm94eShmdW5jdGlvbihrZXksIHBsdWdpbikge1xyXG5cdFx0XHR0aGlzLl9wbHVnaW5zW2tleVswXS50b0xvd2VyQ2FzZSgpICsga2V5LnNsaWNlKDEpXVxyXG5cdFx0XHRcdD0gbmV3IHBsdWdpbih0aGlzKTtcclxuXHRcdH0sIHRoaXMpKTtcclxuXHJcblx0XHQkLmVhY2goT3dsLlBpcGUsICQucHJveHkoZnVuY3Rpb24ocHJpb3JpdHksIHdvcmtlcikge1xyXG5cdFx0XHR0aGlzLl9waXBlLnB1c2goe1xyXG5cdFx0XHRcdCdmaWx0ZXInOiB3b3JrZXIuZmlsdGVyLFxyXG5cdFx0XHRcdCdydW4nOiAkLnByb3h5KHdvcmtlci5ydW4sIHRoaXMpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgdGhpcykpO1xyXG5cclxuXHRcdHRoaXMuc2V0dXAoKTtcclxuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVmYXVsdCBvcHRpb25zIGZvciB0aGUgY2Fyb3VzZWwuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdE93bC5EZWZhdWx0cyA9IHtcclxuXHRcdGl0ZW1zOiAzLFxyXG5cdFx0bG9vcDogZmFsc2UsXHJcblx0XHRjZW50ZXI6IGZhbHNlLFxyXG5cclxuXHRcdG1vdXNlRHJhZzogdHJ1ZSxcclxuXHRcdHRvdWNoRHJhZzogdHJ1ZSxcclxuXHRcdHB1bGxEcmFnOiB0cnVlLFxyXG5cdFx0ZnJlZURyYWc6IGZhbHNlLFxyXG5cclxuXHRcdG1hcmdpbjogMCxcclxuXHRcdHN0YWdlUGFkZGluZzogMCxcclxuXHJcblx0XHRtZXJnZTogZmFsc2UsXHJcblx0XHRtZXJnZUZpdDogdHJ1ZSxcclxuXHRcdGF1dG9XaWR0aDogZmFsc2UsXHJcblxyXG5cdFx0c3RhcnRQb3NpdGlvbjogMCxcclxuXHRcdHJ0bDogZmFsc2UsXHJcblxyXG5cdFx0c21hcnRTcGVlZDogMjUwLFxyXG5cdFx0Zmx1aWRTcGVlZDogZmFsc2UsXHJcblx0XHRkcmFnRW5kU3BlZWQ6IGZhbHNlLFxyXG5cclxuXHRcdHJlc3BvbnNpdmU6IHt9LFxyXG5cdFx0cmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXHJcblx0XHRyZXNwb25zaXZlQmFzZUVsZW1lbnQ6IHdpbmRvdyxcclxuXHRcdHJlc3BvbnNpdmVDbGFzczogZmFsc2UsXHJcblxyXG5cdFx0ZmFsbGJhY2tFYXNpbmc6ICdzd2luZycsXHJcblxyXG5cdFx0aW5mbzogZmFsc2UsXHJcblxyXG5cdFx0bmVzdGVkSXRlbVNlbGVjdG9yOiBmYWxzZSxcclxuXHRcdGl0ZW1FbGVtZW50OiAnZGl2JyxcclxuXHRcdHN0YWdlRWxlbWVudDogJ2RpdicsXHJcblxyXG5cdFx0Ly8gQ2xhc3NlcyBhbmQgTmFtZXNcclxuXHRcdHRoZW1lQ2xhc3M6ICdvd2wtdGhlbWUnLFxyXG5cdFx0YmFzZUNsYXNzOiAnb3dsLWNhcm91c2VsJyxcclxuXHRcdGl0ZW1DbGFzczogJ293bC1pdGVtJyxcclxuXHRcdGNlbnRlckNsYXNzOiAnY2VudGVyJyxcclxuXHRcdGFjdGl2ZUNsYXNzOiAnYWN0aXZlJ1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEVudW1lcmF0aW9uIGZvciB3aWR0aC5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHJlYWRvbmx5XHJcblx0ICogQGVudW0ge1N0cmluZ31cclxuXHQgKi9cclxuXHRPd2wuV2lkdGggPSB7XHJcblx0XHREZWZhdWx0OiAnZGVmYXVsdCcsXHJcblx0XHRJbm5lcjogJ2lubmVyJyxcclxuXHRcdE91dGVyOiAnb3V0ZXInXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ29udGFpbnMgYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucy5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0T3dsLlBsdWdpbnMgPSB7fTtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHBpcGUuXHJcblx0ICovXHJcblx0T3dsLlBpcGUgPSBbIHtcclxuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXHJcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XHJcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSB0aGlzLl9pdGVtcyAmJiB0aGlzLl9pdGVtc1t0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpXTtcclxuXHRcdH1cclxuXHR9LCB7XHJcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxyXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGNhY2hlZCA9IHRoaXMuX2Nsb25lcyxcclxuXHRcdFx0XHRjbG9uZXMgPSB0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpO1xyXG5cclxuXHRcdFx0aWYgKGNsb25lcy5sZW5ndGggIT09IGNhY2hlZC5sZW5ndGggfHwgKCF0aGlzLnNldHRpbmdzLmxvb3AgJiYgY2FjaGVkLmxlbmd0aCA+IDApKSB7XHJcblx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jbG9uZWQnKS5yZW1vdmUoKTtcclxuXHRcdFx0XHR0aGlzLl9jbG9uZXMgPSBbXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIHtcclxuXHRcdGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXHJcblx0XHRydW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgaSwgbixcclxuXHRcdFx0XHRjbG9uZXMgPSB0aGlzLl9jbG9uZXMsXHJcblx0XHRcdFx0aXRlbXMgPSB0aGlzLl9pdGVtcyxcclxuXHRcdFx0XHRkZWx0YSA9IHRoaXMuc2V0dGluZ3MubG9vcCA/IGNsb25lcy5sZW5ndGggLSBNYXRoLm1heCh0aGlzLnNldHRpbmdzLml0ZW1zICogMiwgNCkgOiAwO1xyXG5cclxuXHRcdFx0Zm9yIChpID0gMCwgbiA9IE1hdGguYWJzKGRlbHRhIC8gMik7IGkgPCBuOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoZGVsdGEgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmVxKGl0ZW1zLmxlbmd0aCArIGNsb25lcy5sZW5ndGggLSAxKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdGNsb25lcy5wb3AoKTtcclxuXHRcdFx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuZXEoMCkucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRjbG9uZXMucG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNsb25lcy5wdXNoKGNsb25lcy5sZW5ndGggLyAyKTtcclxuXHRcdFx0XHRcdHRoaXMuJHN0YWdlLmFwcGVuZChpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXS5jbG9uZSgpLmFkZENsYXNzKCdjbG9uZWQnKSk7XHJcblx0XHRcdFx0XHRjbG9uZXMucHVzaChpdGVtcy5sZW5ndGggLSAxIC0gKGNsb25lcy5sZW5ndGggLSAxKSAvIDIpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc3RhZ2UucHJlcGVuZChpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXS5jbG9uZSgpLmFkZENsYXNzKCdjbG9uZWQnKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwge1xyXG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcclxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBydGwgPSAodGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEpLFxyXG5cdFx0XHRcdHdpZHRoID0gKHRoaXMud2lkdGgoKSAvIHRoaXMuc2V0dGluZ3MuaXRlbXMpLnRvRml4ZWQoMyksXHJcblx0XHRcdFx0Y29vcmRpbmF0ZSA9IDAsIG1lcmdlLCBpLCBuO1xyXG5cclxuXHRcdFx0dGhpcy5fY29vcmRpbmF0ZXMgPSBbXTtcclxuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHRoaXMuX2Nsb25lcy5sZW5ndGggKyB0aGlzLl9pdGVtcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuXHRcdFx0XHRtZXJnZSA9IHRoaXMuX21lcmdlcnNbdGhpcy5yZWxhdGl2ZShpKV07XHJcblx0XHRcdFx0bWVyZ2UgPSAodGhpcy5zZXR0aW5ncy5tZXJnZUZpdCAmJiBNYXRoLm1pbihtZXJnZSwgdGhpcy5zZXR0aW5ncy5pdGVtcykpIHx8IG1lcmdlO1xyXG5cdFx0XHRcdGNvb3JkaW5hdGUgKz0gKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoID8gdGhpcy5faXRlbXNbdGhpcy5yZWxhdGl2ZShpKV0ud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luIDogd2lkdGggKiBtZXJnZSkgKiBydGw7XHJcblxyXG5cdFx0XHRcdHRoaXMuX2Nvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCB7XHJcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxyXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGksIG4sIHdpZHRoID0gKHRoaXMud2lkdGgoKSAvIHRoaXMuc2V0dGluZ3MuaXRlbXMpLnRvRml4ZWQoMyksIGNzcyA9IHtcclxuXHRcdFx0XHQnd2lkdGgnOiBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlc1t0aGlzLl9jb29yZGluYXRlcy5sZW5ndGggLSAxXSkgKyB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIsXHJcblx0XHRcdFx0J3BhZGRpbmctbGVmdCc6IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nIHx8ICcnLFxyXG5cdFx0XHRcdCdwYWRkaW5nLXJpZ2h0JzogdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgfHwgJydcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyhjc3MpO1xyXG5cclxuXHRcdFx0Y3NzID0geyAnd2lkdGgnOiB0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCA/ICdhdXRvJyA6IHdpZHRoIC0gdGhpcy5zZXR0aW5ncy5tYXJnaW4gfTtcclxuXHRcdFx0Y3NzW3RoaXMuc2V0dGluZ3MucnRsID8gJ21hcmdpbi1sZWZ0JyA6ICdtYXJnaW4tcmlnaHQnXSA9IHRoaXMuc2V0dGluZ3MubWFyZ2luO1xyXG5cclxuXHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCAmJiAkLmdyZXAodGhpcy5fbWVyZ2VycywgZnVuY3Rpb24odikgeyByZXR1cm4gdiA+IDEgfSkubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGZvciAoaSA9IDAsIG4gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuXHRcdFx0XHRcdGNzcy53aWR0aCA9IE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzW2ldKSAtIE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzW2kgLSAxXSB8fCAwKSAtIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xyXG5cdFx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5lcShpKS5jc3MoY3NzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jc3MoY3NzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIHtcclxuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXHJcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XHJcblx0XHRcdGNhY2hlLmN1cnJlbnQgJiYgdGhpcy5yZXNldCh0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmluZGV4KGNhY2hlLmN1cnJlbnQpKTtcclxuXHRcdH1cclxuXHR9LCB7XHJcblx0XHRmaWx0ZXI6IFsgJ3Bvc2l0aW9uJyBdLFxyXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXModGhpcy5fY3VycmVudCkpO1xyXG5cdFx0fVxyXG5cdH0sIHtcclxuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAncG9zaXRpb24nLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXHJcblx0XHRydW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEsXHJcblx0XHRcdFx0cGFkZGluZyA9IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nICogMixcclxuXHRcdFx0XHRiZWdpbiA9IHRoaXMuY29vcmRpbmF0ZXModGhpcy5jdXJyZW50KCkpICsgcGFkZGluZyxcclxuXHRcdFx0XHRlbmQgPSBiZWdpbiArIHRoaXMud2lkdGgoKSAqIHJ0bCxcclxuXHRcdFx0XHRpbm5lciwgb3V0ZXIsIG1hdGNoZXMgPSBbXSwgaSwgbjtcclxuXHJcblx0XHRcdGZvciAoaSA9IDAsIG4gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuXHRcdFx0XHRpbm5lciA9IHRoaXMuX2Nvb3JkaW5hdGVzW2kgLSAxXSB8fCAwO1xyXG5cdFx0XHRcdG91dGVyID0gTWF0aC5hYnModGhpcy5fY29vcmRpbmF0ZXNbaV0pICsgcGFkZGluZyAqIHJ0bDtcclxuXHJcblx0XHRcdFx0aWYgKCh0aGlzLm9wKGlubmVyLCAnPD0nLCBiZWdpbikgJiYgKHRoaXMub3AoaW5uZXIsICc+JywgZW5kKSkpXHJcblx0XHRcdFx0XHR8fCAodGhpcy5vcChvdXRlciwgJzwnLCBiZWdpbikgJiYgdGhpcy5vcChvdXRlciwgJz4nLCBlbmQpKSkge1xyXG5cdFx0XHRcdFx0bWF0Y2hlcy5wdXNoKGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy4nICsgdGhpcy5zZXR0aW5ncy5hY3RpdmVDbGFzcykucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5hY3RpdmVDbGFzcyk7XHJcblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCc6ZXEoJyArIG1hdGNoZXMuam9pbignKSwgOmVxKCcpICsgJyknKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmFjdGl2ZUNsYXNzKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xyXG5cdFx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuJyArIHRoaXMuc2V0dGluZ3MuY2VudGVyQ2xhc3MpLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuY2VudGVyQ2xhc3MpO1xyXG5cdFx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5jdXJyZW50KCkpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuY2VudGVyQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBdO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplcyB0aGUgY2Fyb3VzZWwuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy50cmlnZ2VyKCdpbml0aWFsaXplJyk7XHJcblxyXG5cdFx0dGhpcy4kZWxlbWVudFxyXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5iYXNlQ2xhc3MpXHJcblx0XHRcdC5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLnRoZW1lQ2xhc3MpXHJcblx0XHRcdC50b2dnbGVDbGFzcygnb3dsLXJ0bCcsIHRoaXMuc2V0dGluZ3MucnRsKTtcclxuXHJcblx0XHQvLyBjaGVjayBzdXBwb3J0XHJcblx0XHR0aGlzLmJyb3dzZXJTdXBwb3J0KCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoICYmIHRoaXMuc3RhdGUuaW1hZ2VzTG9hZGVkICE9PSB0cnVlKSB7XHJcblx0XHRcdHZhciBpbWdzLCBuZXN0ZWRTZWxlY3Rvciwgd2lkdGg7XHJcblx0XHRcdGltZ3MgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2ltZycpO1xyXG5cdFx0XHRuZXN0ZWRTZWxlY3RvciA9IHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yID8gJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgOiB1bmRlZmluZWQ7XHJcblx0XHRcdHdpZHRoID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihuZXN0ZWRTZWxlY3Rvcikud2lkdGgoKTtcclxuXHJcblx0XHRcdGlmIChpbWdzLmxlbmd0aCAmJiB3aWR0aCA8PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5wcmVsb2FkQXV0b1dpZHRoSW1hZ2VzKGltZ3MpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ293bC1sb2FkaW5nJyk7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIHN0YWdlXHJcblx0XHR0aGlzLiRzdGFnZSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5zdGFnZUVsZW1lbnQgKyAnIGNsYXNzPVwib3dsLXN0YWdlXCIvPicpXHJcblx0XHRcdC53cmFwKCc8ZGl2IGNsYXNzPVwib3dsLXN0YWdlLW91dGVyXCI+Jyk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIHN0YWdlXHJcblx0XHR0aGlzLiRlbGVtZW50LmFwcGVuZCh0aGlzLiRzdGFnZS5wYXJlbnQoKSk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIGNvbnRlbnRcclxuXHRcdHRoaXMucmVwbGFjZSh0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCkubm90KHRoaXMuJHN0YWdlLnBhcmVudCgpKSk7XHJcblxyXG5cdFx0Ly8gc2V0IHZpZXcgd2lkdGhcclxuXHRcdHRoaXMuX3dpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xyXG5cclxuXHRcdC8vIHVwZGF0ZSB2aWV3XHJcblx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHJcblx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdvd2wtbG9hZGluZycpLmFkZENsYXNzKCdvd2wtbG9hZGVkJyk7XHJcblxyXG5cdFx0Ly8gYXR0YWNoIGdlbmVyaWMgZXZlbnRzXHJcblx0XHR0aGlzLmV2ZW50c0NhbGwoKTtcclxuXHJcblx0XHQvLyBhdHRhY2ggZ2VuZXJpYyBldmVudHNcclxuXHRcdHRoaXMuaW50ZXJuYWxFdmVudHMoKTtcclxuXHJcblx0XHQvLyBhdHRhY2ggY3VzdG9tIGNvbnRyb2wgZXZlbnRzXHJcblx0XHR0aGlzLmFkZFRyaWdnZXJhYmxlRXZlbnRzKCk7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VyKCdpbml0aWFsaXplZCcpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHVwcyB0aGUgY3VycmVudCBzZXR0aW5ncy5cclxuXHQgKiBAdG9kbyBSZW1vdmUgcmVzcG9uc2l2ZSBjbGFzc2VzLiBXaHkgc2hvdWxkIGFkYXB0aXZlIGRlc2lnbnMgYmUgYnJvdWdodCBpbnRvIElFOD9cclxuXHQgKiBAdG9kbyBTdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGJ5IHVzaW5nIGBtYXRjaE1lZGlhYCB3b3VsZCBiZSBuaWNlLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0KCksXHJcblx0XHRcdG92ZXJ3cml0ZXMgPSB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZSxcclxuXHRcdFx0bWF0Y2ggPSAtMSxcclxuXHRcdFx0c2V0dGluZ3MgPSBudWxsO1xyXG5cclxuXHRcdGlmICghb3ZlcndyaXRlcykge1xyXG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JC5lYWNoKG92ZXJ3cml0ZXMsIGZ1bmN0aW9uKGJyZWFrcG9pbnQpIHtcclxuXHRcdFx0XHRpZiAoYnJlYWtwb2ludCA8PSB2aWV3cG9ydCAmJiBicmVha3BvaW50ID4gbWF0Y2gpIHtcclxuXHRcdFx0XHRcdG1hdGNoID0gTnVtYmVyKGJyZWFrcG9pbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG92ZXJ3cml0ZXNbbWF0Y2hdKTtcclxuXHRcdFx0ZGVsZXRlIHNldHRpbmdzLnJlc3BvbnNpdmU7XHJcblxyXG5cdFx0XHQvLyByZXNwb25zaXZlIGNsYXNzXHJcblx0XHRcdGlmIChzZXR0aW5ncy5yZXNwb25zaXZlQ2xhc3MpIHtcclxuXHRcdFx0XHR0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJywgZnVuY3Rpb24oaSwgYykge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGMucmVwbGFjZSgvXFxiIG93bC1yZXNwb25zaXZlLVxcUysvZywgJycpO1xyXG5cdFx0XHRcdH0pLmFkZENsYXNzKCdvd2wtcmVzcG9uc2l2ZS0nICsgbWF0Y2gpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MgPT09IG51bGwgfHwgdGhpcy5fYnJlYWtwb2ludCAhPT0gbWF0Y2gpIHtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiBzZXR0aW5ncyB9IH0pO1xyXG5cdFx0XHR0aGlzLl9icmVha3BvaW50ID0gbWF0Y2g7XHJcblx0XHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdzZXR0aW5ncycpO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiB0aGlzLnNldHRpbmdzIH0gfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyBvcHRpb24gbG9naWMgaWYgbmVjZXNzZXJ5LlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLm9wdGlvbnNMb2dpYyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gVG9nZ2xlIENlbnRlciBjbGFzc1xyXG5cdFx0dGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcygnb3dsLWNlbnRlcicsIHRoaXMuc2V0dGluZ3MuY2VudGVyKTtcclxuXHJcblx0XHQvLyBpZiBpdGVtcyBudW1iZXIgaXMgbGVzcyB0aGFuIGluIGJvZHlcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmxvb3AgJiYgdGhpcy5faXRlbXMubGVuZ3RoIDwgdGhpcy5zZXR0aW5ncy5pdGVtcykge1xyXG5cdFx0XHR0aGlzLnNldHRpbmdzLmxvb3AgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgpIHtcclxuXHRcdFx0dGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5zZXR0aW5ncy5tZXJnZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByZXBhcmVzIGFuIGl0ZW0gYmVmb3JlIGFkZC5cclxuXHQgKiBAdG9kbyBSZW5hbWUgZXZlbnQgcGFyYW1ldGVyIGBjb250ZW50YCB0byBgaXRlbWAuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9IC0gVGhlIGl0ZW0gY29udGFpbmVyLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcigncHJlcGFyZScsIHsgY29udGVudDogaXRlbSB9KTtcclxuXHJcblx0XHRpZiAoIWV2ZW50LmRhdGEpIHtcclxuXHRcdFx0ZXZlbnQuZGF0YSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5pdGVtRWxlbWVudCArICcvPicpXHJcblx0XHRcdFx0LmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuaXRlbUNsYXNzKS5hcHBlbmQoaXRlbSlcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnRyaWdnZXIoJ3ByZXBhcmVkJywgeyBjb250ZW50OiBldmVudC5kYXRhIH0pO1xyXG5cclxuXHRcdHJldHVybiBldmVudC5kYXRhO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaSA9IDAsXHJcblx0XHRcdG4gPSB0aGlzLl9waXBlLmxlbmd0aCxcclxuXHRcdFx0ZmlsdGVyID0gJC5wcm94eShmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzW3BdIH0sIHRoaXMuX2ludmFsaWRhdGVkKSxcclxuXHRcdFx0Y2FjaGUgPSB7fTtcclxuXHJcblx0XHR3aGlsZSAoaSA8IG4pIHtcclxuXHRcdFx0aWYgKHRoaXMuX2ludmFsaWRhdGVkLmFsbCB8fCAkLmdyZXAodGhpcy5fcGlwZVtpXS5maWx0ZXIsIGZpbHRlcikubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHRoaXMuX3BpcGVbaV0ucnVuKGNhY2hlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5faW52YWxpZGF0ZWQgPSB7fTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgdmlldy5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtPd2wuV2lkdGh9IFtkaW1lbnNpb249T3dsLldpZHRoLkRlZmF1bHRdIC0gVGhlIGRpbWVuc2lvbiB0byByZXR1cm4uXHJcblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgd2lkdGggb2YgdGhlIHZpZXcgaW4gcGl4ZWwuXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGRpbWVuc2lvbikge1xyXG5cdFx0ZGltZW5zaW9uID0gZGltZW5zaW9uIHx8IE93bC5XaWR0aC5EZWZhdWx0O1xyXG5cdFx0c3dpdGNoIChkaW1lbnNpb24pIHtcclxuXHRcdFx0Y2FzZSBPd2wuV2lkdGguSW5uZXI6XHJcblx0XHRcdGNhc2UgT3dsLldpZHRoLk91dGVyOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLl93aWR0aDtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fd2lkdGggLSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBSZWZyZXNoZXMgdGhlIGNhcm91c2VsIHByaW1hcmlseSBmb3IgYWRhcHRpdmUgcHVycG9zZXMuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VyKCdyZWZyZXNoJyk7XHJcblxyXG5cdFx0dGhpcy5zZXR1cCgpO1xyXG5cclxuXHRcdHRoaXMub3B0aW9uc0xvZ2ljKCk7XHJcblxyXG5cdFx0Ly8gaGlkZSBhbmQgc2hvdyBtZXRob2RzIGhlbHBzIGhlcmUgdG8gc2V0IGEgcHJvcGVyIHdpZHRocyxcclxuXHRcdC8vIHRoaXMgcHJldmVudHMgc2Nyb2xsYmFyIHRvIGJlIGNhbGN1bGF0ZWQgaW4gc3RhZ2Ugd2lkdGhcclxuXHRcdHRoaXMuJHN0YWdlLmFkZENsYXNzKCdvd2wtcmVmcmVzaCcpO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblxyXG5cdFx0dGhpcy4kc3RhZ2UucmVtb3ZlQ2xhc3MoJ293bC1yZWZyZXNoJyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZS5vcmllbnRhdGlvbiA9IHdpbmRvdy5vcmllbnRhdGlvbjtcclxuXHJcblx0XHR0aGlzLndhdGNoVmlzaWJpbGl0eSgpO1xyXG5cclxuXHRcdHRoaXMudHJpZ2dlcigncmVmcmVzaGVkJyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2F2ZSBpbnRlcm5hbCBldmVudCByZWZlcmVuY2VzIGFuZCBhZGQgZXZlbnQgYmFzZWQgZnVuY3Rpb25zLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLmV2ZW50c0NhbGwgPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIFNhdmUgZXZlbnRzIHJlZmVyZW5jZXNcclxuXHRcdHRoaXMuZS5fb25EcmFnU3RhcnQgPSAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dGhpcy5vbkRyYWdTdGFydChlKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cdFx0dGhpcy5lLl9vbkRyYWdNb3ZlID0gJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdHRoaXMub25EcmFnTW92ZShlKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cdFx0dGhpcy5lLl9vbkRyYWdFbmQgPSAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dGhpcy5vbkRyYWdFbmQoZSk7XHJcblx0XHR9LCB0aGlzKTtcclxuXHRcdHRoaXMuZS5fb25SZXNpemUgPSAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dGhpcy5vblJlc2l6ZShlKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cdFx0dGhpcy5lLl90cmFuc2l0aW9uRW5kID0gJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdHRoaXMudHJhbnNpdGlvbkVuZChlKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cdFx0dGhpcy5lLl9wcmV2ZW50Q2xpY2sgPSAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dGhpcy5wcmV2ZW50Q2xpY2soZSk7XHJcblx0XHR9LCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2luZG93IGByZXNpemVgIGV2ZW50LlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLm9uVGhyb3R0bGVkUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xyXG5cdFx0dGhpcy5yZXNpemVUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuZS5fb25SZXNpemUsIHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZVJlZnJlc2hSYXRlKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2luZG93IGByZXNpemVgIGV2ZW50LlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoIXRoaXMuX2l0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX3dpZHRoID09PSB0aGlzLiRlbGVtZW50LndpZHRoKCkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl93aWR0aCA9IHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcclxuXHJcblx0XHR0aGlzLmludmFsaWRhdGUoJ3dpZHRoJyk7XHJcblxyXG5cdFx0dGhpcy5yZWZyZXNoKCk7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VyKCdyZXNpemVkJyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIGZvciB0b3VjaC9tb3VzZSBkcmFnIGV2ZW50IHR5cGUgYW5kIGFkZCBydW4gZXZlbnQgaGFuZGxlcnMuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuZXZlbnRzUm91dGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHZhciB0eXBlID0gZXZlbnQudHlwZTtcclxuXHJcblx0XHRpZiAodHlwZSA9PT0gXCJtb3VzZWRvd25cIiB8fCB0eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xyXG5cdFx0XHR0aGlzLm9uRHJhZ1N0YXJ0KGV2ZW50KTtcclxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtb3VzZW1vdmVcIiB8fCB0eXBlID09PSBcInRvdWNobW92ZVwiKSB7XHJcblx0XHRcdHRoaXMub25EcmFnTW92ZShldmVudCk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IFwibW91c2V1cFwiIHx8IHR5cGUgPT09IFwidG91Y2hlbmRcIikge1xyXG5cdFx0XHR0aGlzLm9uRHJhZ0VuZChldmVudCk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IFwidG91Y2hjYW5jZWxcIikge1xyXG5cdFx0XHR0aGlzLm9uRHJhZ0VuZChldmVudCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIGZvciB0b3VjaC9tb3VzZSBkcmFnIG9wdGlvbnMgYW5kIGFkZCBuZWNlc3NlcnkgZXZlbnQgaGFuZGxlcnMuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuaW50ZXJuYWxFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBpc1RvdWNoID0gaXNUb3VjaFN1cHBvcnQoKSxcclxuXHRcdFx0aXNUb3VjaElFID0gaXNUb3VjaFN1cHBvcnRJRSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLm1vdXNlRHJhZyl7XHJcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCdtb3VzZWRvd24nLCAkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMuZXZlbnRzUm91dGVyKGV2ZW50KSB9LCB0aGlzKSk7XHJcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCdkcmFnc3RhcnQnLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlIH0pO1xyXG5cdFx0XHR0aGlzLiRzdGFnZS5nZXQoMCkub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2UgfTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ293bC10ZXh0LXNlbGVjdC1vbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnRvdWNoRHJhZyAmJiAhaXNUb3VjaElFKXtcclxuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ3RvdWNoc3RhcnQgdG91Y2hjYW5jZWwnLCAkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMuZXZlbnRzUm91dGVyKGV2ZW50KSB9LCB0aGlzKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2F0Y2ggdHJhbnNpdGlvbkVuZCBldmVudFxyXG5cdFx0aWYgKHRoaXMudHJhbnNpdGlvbkVuZFZlbmRvcikge1xyXG5cdFx0XHR0aGlzLm9uKHRoaXMuJHN0YWdlLmdldCgwKSwgdGhpcy50cmFuc2l0aW9uRW5kVmVuZG9yLCB0aGlzLmUuX3RyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZXNwb25zaXZlXHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlICE9PSBmYWxzZSkge1xyXG5cdFx0XHR0aGlzLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICQucHJveHkodGhpcy5vblRocm90dGxlZFJlc2l6ZSwgdGhpcykpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgdG91Y2hzdGFydC9tb3VzZWRvd24gZXZlbnQuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHZhciBldiwgaXNUb3VjaEV2ZW50LCBwYWdlWCwgcGFnZVksIGFuaW1hdGVkUG9zO1xyXG5cclxuXHRcdGV2ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG5cdFx0Ly8gcHJldmVudCByaWdodCBjbGlja1xyXG5cdFx0aWYgKGV2LndoaWNoID09PSAzIHx8IHRoaXMuc3RhdGUuaXNUb3VjaCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGV2LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XHJcblx0XHRcdHRoaXMuJHN0YWdlLmFkZENsYXNzKCdvd2wtZ3JhYicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudHJpZ2dlcignZHJhZycpO1xyXG5cdFx0dGhpcy5kcmFnLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0dGhpcy5zcGVlZCgwKTtcclxuXHRcdHRoaXMuc3RhdGUuaXNUb3VjaCA9IHRydWU7XHJcblx0XHR0aGlzLnN0YXRlLmlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXRlLmlzU3dpcGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5kcmFnLmRpc3RhbmNlID0gMDtcclxuXHJcblx0XHRwYWdlWCA9IGdldFRvdWNoZXMoZXYpLng7XHJcblx0XHRwYWdlWSA9IGdldFRvdWNoZXMoZXYpLnk7XHJcblxyXG5cdFx0Ly8gZ2V0IHN0YWdlIHBvc2l0aW9uIGxlZnRcclxuXHRcdHRoaXMuZHJhZy5vZmZzZXRYID0gdGhpcy4kc3RhZ2UucG9zaXRpb24oKS5sZWZ0O1xyXG5cdFx0dGhpcy5kcmFnLm9mZnNldFkgPSB0aGlzLiRzdGFnZS5wb3NpdGlvbigpLnRvcDtcclxuXHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5ydGwpIHtcclxuXHRcdFx0dGhpcy5kcmFnLm9mZnNldFggPSB0aGlzLiRzdGFnZS5wb3NpdGlvbigpLmxlZnQgKyB0aGlzLiRzdGFnZS53aWR0aCgpIC0gdGhpcy53aWR0aCgpXHJcblx0XHRcdFx0KyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjYXRjaCBwb3NpdGlvbiAvLyBpZSB0byBmaXhcclxuXHRcdGlmICh0aGlzLnN0YXRlLmluTW90aW9uICYmIHRoaXMuc3VwcG9ydDNkKSB7XHJcblx0XHRcdGFuaW1hdGVkUG9zID0gdGhpcy5nZXRUcmFuc2Zvcm1Qcm9wZXJ0eSgpO1xyXG5cdFx0XHR0aGlzLmRyYWcub2Zmc2V0WCA9IGFuaW1hdGVkUG9zO1xyXG5cdFx0XHR0aGlzLmFuaW1hdGUoYW5pbWF0ZWRQb3MpO1xyXG5cdFx0XHR0aGlzLnN0YXRlLmluTW90aW9uID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5pbk1vdGlvbiAmJiAhdGhpcy5zdXBwb3J0M2QpIHtcclxuXHRcdFx0dGhpcy5zdGF0ZS5pbk1vdGlvbiA9IGZhbHNlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcmFnLnN0YXJ0WCA9IHBhZ2VYIC0gdGhpcy5kcmFnLm9mZnNldFg7XHJcblx0XHR0aGlzLmRyYWcuc3RhcnRZID0gcGFnZVkgLSB0aGlzLmRyYWcub2Zmc2V0WTtcclxuXHJcblx0XHR0aGlzLmRyYWcuc3RhcnQgPSBwYWdlWCAtIHRoaXMuZHJhZy5zdGFydFg7XHJcblx0XHR0aGlzLmRyYWcudGFyZ2V0RWwgPSBldi50YXJnZXQgfHwgZXYuc3JjRWxlbWVudDtcclxuXHRcdHRoaXMuZHJhZy51cGRhdGVkWCA9IHRoaXMuZHJhZy5zdGFydDtcclxuXHJcblx0XHQvLyB0byBkby9jaGVja1xyXG5cdFx0Ly8gcHJldmVudCBsaW5rcyBhbmQgaW1hZ2VzIGRyYWdnaW5nO1xyXG5cdFx0aWYgKHRoaXMuZHJhZy50YXJnZXRFbC50YWdOYW1lID09PSBcIklNR1wiIHx8IHRoaXMuZHJhZy50YXJnZXRFbC50YWdOYW1lID09PSBcIkFcIikge1xyXG5cdFx0XHR0aGlzLmRyYWcudGFyZ2V0RWwuZHJhZ2dhYmxlID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZS5vd2wuZHJhZ0V2ZW50cyBtb3VzZXVwLm93bC5kcmFnRXZlbnRzIHRvdWNobW92ZS5vd2wuZHJhZ0V2ZW50cyB0b3VjaGVuZC5vd2wuZHJhZ0V2ZW50cycsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHt0aGlzLmV2ZW50c1JvdXRlcihldmVudCl9LHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBIYW5kbGVzIHRoZSB0b3VjaG1vdmUvbW91c2Vtb3ZlIGV2ZW50cy5cclxuXHQgKiBAdG9kbyBTaW1wbGlmeVxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5vbkRyYWdNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHZhciBldiwgaXNUb3VjaEV2ZW50LCBwYWdlWCwgcGFnZVksIG1pblZhbHVlLCBtYXhWYWx1ZSwgcHVsbDtcclxuXHJcblx0XHRpZiAoIXRoaXMuc3RhdGUuaXNUb3VjaCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3RhdGUuaXNTY3JvbGxpbmcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV2ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG5cdFx0cGFnZVggPSBnZXRUb3VjaGVzKGV2KS54O1xyXG5cdFx0cGFnZVkgPSBnZXRUb3VjaGVzKGV2KS55O1xyXG5cclxuXHRcdC8vIERyYWcgRGlyZWN0aW9uXHJcblx0XHR0aGlzLmRyYWcuY3VycmVudFggPSBwYWdlWCAtIHRoaXMuZHJhZy5zdGFydFg7XHJcblx0XHR0aGlzLmRyYWcuY3VycmVudFkgPSBwYWdlWSAtIHRoaXMuZHJhZy5zdGFydFk7XHJcblx0XHR0aGlzLmRyYWcuZGlzdGFuY2UgPSB0aGlzLmRyYWcuY3VycmVudFggLSB0aGlzLmRyYWcub2Zmc2V0WDtcclxuXHJcblx0XHQvLyBDaGVjayBtb3ZlIGRpcmVjdGlvblxyXG5cdFx0aWYgKHRoaXMuZHJhZy5kaXN0YW5jZSA8IDApIHtcclxuXHRcdFx0dGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzLnJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuZHJhZy5kaXN0YW5jZSA+IDApIHtcclxuXHRcdFx0dGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzLnJ0bCA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcblx0XHR9XHJcblx0XHQvLyBMb29wXHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XHJcblx0XHRcdGlmICh0aGlzLm9wKHRoaXMuZHJhZy5jdXJyZW50WCwgJz4nLCB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKSkgJiYgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuXHRcdFx0XHR0aGlzLmRyYWcuY3VycmVudFggLT0gKHRoaXMuc2V0dGluZ3MuY2VudGVyICYmIHRoaXMuY29vcmRpbmF0ZXMoMCkpIC0gdGhpcy5jb29yZGluYXRlcyh0aGlzLl9pdGVtcy5sZW5ndGgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3AodGhpcy5kcmFnLmN1cnJlbnRYLCAnPCcsIHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkpKSAmJiB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XHJcblx0XHRcdFx0dGhpcy5kcmFnLmN1cnJlbnRYICs9ICh0aGlzLnNldHRpbmdzLmNlbnRlciAmJiB0aGlzLmNvb3JkaW5hdGVzKDApKSAtIHRoaXMuY29vcmRpbmF0ZXModGhpcy5faXRlbXMubGVuZ3RoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gcHVsbFxyXG5cdFx0XHRtaW5WYWx1ZSA9IHRoaXMuc2V0dGluZ3MucnRsID8gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSkgOiB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTtcclxuXHRcdFx0bWF4VmFsdWUgPSB0aGlzLnNldHRpbmdzLnJ0bCA/IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpIDogdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSk7XHJcblx0XHRcdHB1bGwgPSB0aGlzLnNldHRpbmdzLnB1bGxEcmFnID8gdGhpcy5kcmFnLmRpc3RhbmNlIC8gNSA6IDA7XHJcblx0XHRcdHRoaXMuZHJhZy5jdXJyZW50WCA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuZHJhZy5jdXJyZW50WCwgbWluVmFsdWUgKyBwdWxsKSwgbWF4VmFsdWUgKyBwdWxsKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBMb2NrIGJyb3dzZXIgaWYgc3dpcGluZyBob3Jpem9udGFsXHJcblxyXG5cdFx0aWYgKCh0aGlzLmRyYWcuZGlzdGFuY2UgPiA4IHx8IHRoaXMuZHJhZy5kaXN0YW5jZSA8IC04KSkge1xyXG5cdFx0XHRpZiAoZXYucHJldmVudERlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZXYucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnN0YXRlLmlzU3dpcGluZyA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcmFnLnVwZGF0ZWRYID0gdGhpcy5kcmFnLmN1cnJlbnRYO1xyXG5cclxuXHRcdC8vIExvY2sgT3dsIGlmIHNjcm9sbGluZ1xyXG5cdFx0aWYgKCh0aGlzLmRyYWcuY3VycmVudFkgPiAxNiB8fCB0aGlzLmRyYWcuY3VycmVudFkgPCAtMTYpICYmIHRoaXMuc3RhdGUuaXNTd2lwaW5nID09PSBmYWxzZSkge1xyXG5cdFx0XHR0aGlzLnN0YXRlLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kcmFnLnVwZGF0ZWRYID0gdGhpcy5kcmFnLnN0YXJ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYW5pbWF0ZSh0aGlzLmRyYWcudXBkYXRlZFgpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZXMgdGhlIHRvdWNoZW5kL21vdXNldXAgZXZlbnRzLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLm9uRHJhZ0VuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHR2YXIgY29tcGFyZVRpbWVzLCBkaXN0YW5jZUFicywgY2xvc2VzdDtcclxuXHJcblx0XHRpZiAoIXRoaXMuc3RhdGUuaXNUb3VjaCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZXVwJykge1xyXG5cdFx0XHR0aGlzLiRzdGFnZS5yZW1vdmVDbGFzcygnb3dsLWdyYWInKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnRyaWdnZXIoJ2RyYWdnZWQnKTtcclxuXHJcblx0XHQvLyBwcmV2ZW50IGxpbmtzIGFuZCBpbWFnZXMgZHJhZ2dpbmc7XHJcblx0XHR0aGlzLmRyYWcudGFyZ2V0RWwucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpO1xyXG5cclxuXHRcdC8vIHJlbW92ZSBkcmFnIGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuXHRcdHRoaXMuc3RhdGUuaXNUb3VjaCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zdGF0ZS5pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zdGF0ZS5pc1N3aXBpbmcgPSBmYWxzZTtcclxuXHJcblx0XHQvLyB0byBjaGVja1xyXG5cdFx0aWYgKHRoaXMuZHJhZy5kaXN0YW5jZSA9PT0gMCAmJiB0aGlzLnN0YXRlLmluTW90aW9uICE9PSB0cnVlKSB7XHJcblx0XHRcdHRoaXMuc3RhdGUuaW5Nb3Rpb24gPSBmYWxzZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHByZXZlbnQgY2xpY2tzIHdoaWxlIHNjcm9sbGluZ1xyXG5cclxuXHRcdHRoaXMuZHJhZy5lbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRjb21wYXJlVGltZXMgPSB0aGlzLmRyYWcuZW5kVGltZSAtIHRoaXMuZHJhZy5zdGFydFRpbWU7XHJcblx0XHRkaXN0YW5jZUFicyA9IE1hdGguYWJzKHRoaXMuZHJhZy5kaXN0YW5jZSk7XHJcblxyXG5cdFx0Ly8gdG8gdGVzdFxyXG5cdFx0aWYgKGRpc3RhbmNlQWJzID4gMyB8fCBjb21wYXJlVGltZXMgPiAzMDApIHtcclxuXHRcdFx0dGhpcy5yZW1vdmVDbGljayh0aGlzLmRyYWcudGFyZ2V0RWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNsb3Nlc3QgPSB0aGlzLmNsb3Nlc3QodGhpcy5kcmFnLnVwZGF0ZWRYKTtcclxuXHJcblx0XHR0aGlzLnNwZWVkKHRoaXMuc2V0dGluZ3MuZHJhZ0VuZFNwZWVkIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCk7XHJcblx0XHR0aGlzLmN1cnJlbnQoY2xvc2VzdCk7XHJcblx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cclxuXHRcdC8vIGlmIHB1bGxEcmFnIGlzIG9mZiB0aGVuIGZpcmUgdHJhbnNpdGlvbkVuZCBldmVudCBtYW51YWxseSB3aGVuIHN0aWNrXHJcblx0XHQvLyB0byBib3JkZXJcclxuXHRcdGlmICghdGhpcy5zZXR0aW5ncy5wdWxsRHJhZyAmJiB0aGlzLmRyYWcudXBkYXRlZFggPT09IHRoaXMuY29vcmRpbmF0ZXMoY2xvc2VzdCkpIHtcclxuXHRcdFx0dGhpcy50cmFuc2l0aW9uRW5kKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcmFnLmRpc3RhbmNlID0gMDtcclxuXHJcblx0XHQkKGRvY3VtZW50KS5vZmYoJy5vd2wuZHJhZ0V2ZW50cycpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEF0dGFjaGVzIGBwcmV2ZW50Q2xpY2tgIHRvIGRpc2FibGUgbGluayB3aGlsZSBzd2lwcGluZy5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3RhcmdldF0gLSBUaGUgdGFyZ2V0IG9mIHRoZSBgY2xpY2tgIGV2ZW50LlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUucmVtb3ZlQ2xpY2sgPSBmdW5jdGlvbih0YXJnZXQpIHtcclxuXHRcdHRoaXMuZHJhZy50YXJnZXRFbCA9IHRhcmdldDtcclxuXHRcdCQodGFyZ2V0KS5vbignY2xpY2sucHJldmVudENsaWNrJywgdGhpcy5lLl9wcmV2ZW50Q2xpY2spO1xyXG5cdFx0Ly8gdG8gbWFrZSBzdXJlIGNsaWNrIGlzIHJlbW92ZWQ6XHJcblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0YXJnZXQpLm9mZignY2xpY2sucHJldmVudENsaWNrJyk7XHJcblx0XHR9LCAzMDApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1cHByZXNzZXMgY2xpY2sgZXZlbnQuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnByZXZlbnRDbGljayA9IGZ1bmN0aW9uKGV2KSB7XHJcblx0XHRpZiAoZXYucHJldmVudERlZmF1bHQpIHtcclxuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGV2LnJldHVyblZhbHVlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAoZXYuc3RvcFByb3BhZ2F0aW9uKSB7XHJcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0fVxyXG5cdFx0JChldi50YXJnZXQpLm9mZignY2xpY2sucHJldmVudENsaWNrJyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2F0Y2hlcyBzdGFnZSBwb3NpdGlvbiB3aGlsZSBhbmltYXRlIChvbmx5IENTUzMpLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuZ2V0VHJhbnNmb3JtUHJvcGVydHkgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0cmFuc2Zvcm0sIG1hdHJpeDNkO1xyXG5cclxuXHRcdHRyYW5zZm9ybSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJHN0YWdlLmdldCgwKSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLnZlbmRvck5hbWUgKyAndHJhbnNmb3JtJyk7XHJcblx0XHQvLyB2YXIgdHJhbnNmb3JtID0gdGhpcy4kc3RhZ2UuY3NzKHRoaXMudmVuZG9yTmFtZSArICd0cmFuc2Zvcm0nKVxyXG5cdFx0dHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL21hdHJpeCgzZCk/XFwofFxcKS9nLCAnJykuc3BsaXQoJywnKTtcclxuXHRcdG1hdHJpeDNkID0gdHJhbnNmb3JtLmxlbmd0aCA9PT0gMTY7XHJcblxyXG5cdFx0cmV0dXJuIG1hdHJpeDNkICE9PSB0cnVlID8gdHJhbnNmb3JtWzRdIDogdHJhbnNmb3JtWzEyXTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0gZm9yIGEgY29vcmRpbmF0ZS5cclxuXHQgKiBAdG9kbyBTZXR0aW5nIGBmcmVlRHJhZ2AgbWFrZXMgYGNsb3Nlc3RgIG5vdCByZXVzYWJsZS4gU2VlICMxNjUuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWwuXHJcblx0ICogQHJldHVybiB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY2xvc2VzdCBpdGVtLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUpIHtcclxuXHRcdHZhciBwb3NpdGlvbiA9IC0xLCBwdWxsID0gMzAsIHdpZHRoID0gdGhpcy53aWR0aCgpLCBjb29yZGluYXRlcyA9IHRoaXMuY29vcmRpbmF0ZXMoKTtcclxuXHJcblx0XHRpZiAoIXRoaXMuc2V0dGluZ3MuZnJlZURyYWcpIHtcclxuXHRcdFx0Ly8gY2hlY2sgY2xvc2VzdCBpdGVtXHJcblx0XHRcdCQuZWFjaChjb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuXHRcdFx0XHRpZiAoY29vcmRpbmF0ZSA+IHZhbHVlIC0gcHVsbCAmJiBjb29yZGluYXRlIDwgdmFsdWUgKyBwdWxsKSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGluZGV4O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIHZhbHVlKVxyXG5cdFx0XHRcdFx0JiYgdGhpcy5vcChjb29yZGluYXRlLCAnPicsIGNvb3JkaW5hdGVzW2luZGV4ICsgMV0gfHwgdmFsdWUgLSB3aWR0aCkpIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPT09ICdsZWZ0JyA/IGluZGV4ICsgMSA6IGluZGV4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcG9zaXRpb24gPT09IC0xO1xyXG5cdFx0XHR9LCB0aGlzKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmxvb3ApIHtcclxuXHRcdFx0Ly8gbm9uIGxvb3AgYm91bmRyaWVzXHJcblx0XHRcdGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc+JywgY29vcmRpbmF0ZXNbdGhpcy5taW5pbXVtKCldKSkge1xyXG5cdFx0XHRcdHBvc2l0aW9uID0gY29vcmRpbmF0ZSA9IHRoaXMubWluaW11bSgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJzwnLCBjb29yZGluYXRlc1t0aGlzLm1heGltdW0oKV0pKSB7XHJcblx0XHRcdFx0cG9zaXRpb24gPSBjb29yZGluYXRlID0gdGhpcy5tYXhpbXVtKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcG9zaXRpb247XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQW5pbWF0ZXMgdGhlIHN0YWdlLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gY29vcmRpbmF0ZSAtIFRoZSBjb29yZGluYXRlIGluIHBpeGVscy5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbihjb29yZGluYXRlKSB7XHJcblx0XHR0aGlzLnRyaWdnZXIoJ3RyYW5zbGF0ZScpO1xyXG5cdFx0dGhpcy5zdGF0ZS5pbk1vdGlvbiA9IHRoaXMuc3BlZWQoKSA+IDA7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3VwcG9ydDNkKSB7XHJcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIGNvb3JkaW5hdGUgKyAncHgnICsgJywwcHgsIDBweCknLFxyXG5cdFx0XHRcdHRyYW5zaXRpb246ICh0aGlzLnNwZWVkKCkgLyAxMDAwKSArICdzJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5pc1RvdWNoKSB7XHJcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XHJcblx0XHRcdFx0bGVmdDogY29vcmRpbmF0ZSArICdweCdcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLiRzdGFnZS5hbmltYXRlKHtcclxuXHRcdFx0XHRsZWZ0OiBjb29yZGluYXRlXHJcblx0XHRcdH0sIHRoaXMuc3BlZWQoKSAvIDEwMDAsIHRoaXMuc2V0dGluZ3MuZmFsbGJhY2tFYXNpbmcsICQucHJveHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaW5Nb3Rpb24pIHtcclxuXHRcdFx0XHRcdHRoaXMudHJhbnNpdGlvbkVuZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgdGhpcykpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIG5ldyBhYnNvbHV0ZSBwb3NpdGlvbiBvciBub3RoaW5nIHRvIGxlYXZlIGl0IHVuY2hhbmdlZC5cclxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fY3VycmVudDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnQgIT09IHBvc2l0aW9uKSB7XHJcblx0XHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcignY2hhbmdlJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogcG9zaXRpb24gfSB9KTtcclxuXHJcblx0XHRcdGlmIChldmVudC5kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKGV2ZW50LmRhdGEpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9jdXJyZW50ID0gcG9zaXRpb247XHJcblxyXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XHJcblxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdwb3NpdGlvbicsIHZhbHVlOiB0aGlzLl9jdXJyZW50IH0gfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQ7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSW52YWxpZGF0ZXMgdGhlIGdpdmVuIHBhcnQgb2YgdGhlIHVwZGF0ZSByb3V0aW5lLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBwYXJ0IC0gVGhlIHBhcnQgdG8gaW52YWxpZGF0ZS5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLmludmFsaWRhdGUgPSBmdW5jdGlvbihwYXJ0KSB7XHJcblx0XHR0aGlzLl9pbnZhbGlkYXRlZFtwYXJ0XSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgbmV3IGl0ZW0uXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fc3BlZWQgPSAwO1xyXG5cdFx0dGhpcy5fY3VycmVudCA9IHBvc2l0aW9uO1xyXG5cclxuXHRcdHRoaXMuc3VwcHJlc3MoWyAndHJhbnNsYXRlJywgJ3RyYW5zbGF0ZWQnIF0pO1xyXG5cclxuXHRcdHRoaXMuYW5pbWF0ZSh0aGlzLmNvb3JkaW5hdGVzKHBvc2l0aW9uKSk7XHJcblxyXG5cdFx0dGhpcy5yZWxlYXNlKFsgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGVkJyBdKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBOb3JtYWxpemVzIGFuIGFic29sdXRlIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24gZm9yIGFuIGl0ZW0uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBwb3NpdGlvbiB0byBub3JtYWxpemUuXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgcmVsYXRpdmUgb3Igbm90LlxyXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIG5vcm1hbGl6ZWQgcG9zaXRpb24uXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbihwb3NpdGlvbiwgcmVsYXRpdmUpIHtcclxuXHRcdHZhciBuID0gKHJlbGF0aXZlID8gdGhpcy5faXRlbXMubGVuZ3RoIDogdGhpcy5faXRlbXMubGVuZ3RoICsgdGhpcy5fY2xvbmVzLmxlbmd0aCk7XHJcblxyXG5cdFx0aWYgKCEkLmlzTnVtZXJpYyhwb3NpdGlvbikgfHwgbiA8IDEpIHtcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5fY2xvbmVzLmxlbmd0aCkge1xyXG5cdFx0XHRwb3NpdGlvbiA9ICgocG9zaXRpb24gJSBuKSArIG4pICUgbjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBvc2l0aW9uID0gTWF0aC5tYXgodGhpcy5taW5pbXVtKHJlbGF0aXZlKSwgTWF0aC5taW4odGhpcy5tYXhpbXVtKHJlbGF0aXZlKSwgcG9zaXRpb24pKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcG9zaXRpb247XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydHMgYW4gYWJzb2x1dGUgcG9zaXRpb24gZm9yIGFuIGl0ZW0gaW50byBhIHJlbGF0aXZlIHBvc2l0aW9uLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gdG8gY29udmVydC5cclxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBjb252ZXJ0ZWQgcG9zaXRpb24uXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5yZWxhdGl2ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcclxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gLSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcclxuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyB0aGUgbWF4aW11bSBwb3NpdGlvbiBmb3IgYW4gaXRlbS5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cclxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUubWF4aW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XHJcblx0XHR2YXIgbWF4aW11bSwgd2lkdGgsIGkgPSAwLCBjb29yZGluYXRlLFxyXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYgKHJlbGF0aXZlKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghc2V0dGluZ3MubG9vcCAmJiBzZXR0aW5ncy5jZW50ZXIpIHtcclxuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XHJcblx0XHR9IGVsc2UgaWYgKCFzZXR0aW5ncy5sb29wICYmICFzZXR0aW5ncy5jZW50ZXIpIHtcclxuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIHNldHRpbmdzLml0ZW1zO1xyXG5cdFx0fSBlbHNlIGlmIChzZXR0aW5ncy5sb29wIHx8IHNldHRpbmdzLmNlbnRlcikge1xyXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5faXRlbXMubGVuZ3RoICsgc2V0dGluZ3MuaXRlbXM7XHJcblx0XHR9IGVsc2UgaWYgKHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5tZXJnZSkge1xyXG5cdFx0XHRyZXZlcnQgPSBzZXR0aW5ncy5ydGwgPyAxIDogLTE7XHJcblx0XHRcdHdpZHRoID0gdGhpcy4kc3RhZ2Uud2lkdGgoKSAtIHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcclxuXHRcdFx0d2hpbGUgKGNvb3JkaW5hdGUgPSB0aGlzLmNvb3JkaW5hdGVzKGkpKSB7XHJcblx0XHRcdFx0aWYgKGNvb3JkaW5hdGUgKiByZXZlcnQgPj0gd2lkdGgpIHtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtYXhpbXVtID0gKytpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyAnQ2FuIG5vdCBkZXRlY3QgbWF4aW11bSBhYnNvbHV0ZSBwb3NpdGlvbi4nXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1heGltdW07XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyB0aGUgbWluaW11bSBwb3NpdGlvbiBmb3IgYW4gaXRlbS5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cclxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUubWluaW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XHJcblx0XHRpZiAocmVsYXRpdmUpIHtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHJlbGF0aXZlIHBvc2l0aW9uLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cclxuXHQgKiBAcmV0dXJuIHtqUXVlcnl8QXJyYXkuPGpRdWVyeT59IC0gVGhlIGl0ZW0gYXQgdGhlIGdpdmVuIHBvc2l0aW9uIG9yIGFsbCBpdGVtcyBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5pdGVtcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5faXRlbXMuc2xpY2UoKTtcclxuXHRcdH1cclxuXHJcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcclxuXHRcdHJldHVybiB0aGlzLl9pdGVtc1twb3NpdGlvbl07XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcmVsYXRpdmUgcG9zaXRpb24uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxyXG5cdCAqIEByZXR1cm4ge2pRdWVyeXxBcnJheS48alF1ZXJ5Pn0gLSBUaGUgaXRlbSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gb3IgYWxsIGl0ZW1zIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLm1lcmdlcnMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xyXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX21lcmdlcnMuc2xpY2UoKTtcclxuXHRcdH1cclxuXHJcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcclxuXHRcdHJldHVybiB0aGlzLl9tZXJnZXJzW3Bvc2l0aW9uXTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbnMgb2YgY2xvbmVzIGZvciBhbiBpdGVtLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cclxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPE51bWJlcj59IC0gVGhlIGFic29sdXRlIHBvc2l0aW9ucyBvZiBjbG9uZXMgZm9yIHRoZSBpdGVtIG9yIGFsbCBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5jbG9uZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dmFyIG9kZCA9IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyLFxyXG5cdFx0XHRldmVuID0gb2RkICsgdGhpcy5faXRlbXMubGVuZ3RoLFxyXG5cdFx0XHRtYXAgPSBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gaW5kZXggJSAyID09PSAwID8gZXZlbiArIGluZGV4IC8gMiA6IG9kZCAtIChpbmRleCArIDEpIC8gMiB9O1xyXG5cclxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLl9jbG9uZXMsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIG1hcChpKSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiB2ID09PSBwb3NpdGlvbiA/IG1hcChpKSA6IG51bGwgfSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgY3VycmVudCBhbmltYXRpb24gc3BlZWQuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMgb3Igbm90aGluZyB0byBsZWF2ZSBpdCB1bmNoYW5nZWQuXHJcblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgY3VycmVudCBhbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuc3BlZWQgPSBmdW5jdGlvbihzcGVlZCkge1xyXG5cdFx0aWYgKHNwZWVkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5fc3BlZWQgPSBzcGVlZDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5fc3BlZWQ7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyB0aGUgY29vcmRpbmF0ZSBvZiBhbiBpdGVtLlxyXG5cdCAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIGlzIG1pc3NsZWFuZGluZy5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGhpbiBgbWluaW11bSgpYCBhbmQgYG1heGltdW0oKWAuXHJcblx0ICogQHJldHVybnMge051bWJlcnxBcnJheS48TnVtYmVyPn0gLSBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgaXRlbSBpbiBwaXhlbCBvciBhbGwgY29vcmRpbmF0ZXMuXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5jb29yZGluYXRlcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHR2YXIgY29vcmRpbmF0ZSA9IG51bGw7XHJcblxyXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nvb3JkaW5hdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGNvb3JkaW5hdGUsIGluZGV4KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29vcmRpbmF0ZXMoaW5kZXgpO1xyXG5cdFx0XHR9LCB0aGlzKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuY2VudGVyKSB7XHJcblx0XHRcdGNvb3JkaW5hdGUgPSB0aGlzLl9jb29yZGluYXRlc1twb3NpdGlvbl07XHJcblx0XHRcdGNvb3JkaW5hdGUgKz0gKHRoaXMud2lkdGgoKSAtIGNvb3JkaW5hdGUgKyAodGhpcy5fY29vcmRpbmF0ZXNbcG9zaXRpb24gLSAxXSB8fCAwKSkgLyAyICogKHRoaXMuc2V0dGluZ3MucnRsID8gLTEgOiAxKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvb3JkaW5hdGUgPSB0aGlzLl9jb29yZGluYXRlc1twb3NpdGlvbiAtIDFdIHx8IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvb3JkaW5hdGU7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlcyB0aGUgc3BlZWQgZm9yIGEgdHJhbnNsYXRpb24uXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBzdGFydCBpdGVtLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0byAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGl0ZW0uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtmYWN0b3I9dW5kZWZpbmVkXSAtIFRoZSB0aW1lIGZhY3RvciBpbiBtaWxsaXNlY29uZHMuXHJcblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2xhdGlvbi5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oZnJvbSwgdG8sIGZhY3Rvcikge1xyXG5cdFx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguYWJzKHRvIC0gZnJvbSksIDEpLCA2KSAqIE1hdGguYWJzKChmYWN0b3IgfHwgdGhpcy5zZXR0aW5ncy5zbWFydFNwZWVkKSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2xpZGVzIHRvIHRoZSBzcGVjaWZpZWQgaXRlbS5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHNwZWVkKSB7XHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XHJcblx0XHRcdHZhciBkaXN0YW5jZSA9IHBvc2l0aW9uIC0gdGhpcy5yZWxhdGl2ZSh0aGlzLmN1cnJlbnQoKSksXHJcblx0XHRcdFx0cmV2ZXJ0ID0gdGhpcy5jdXJyZW50KCksXHJcblx0XHRcdFx0YmVmb3JlID0gdGhpcy5jdXJyZW50KCksXHJcblx0XHRcdFx0YWZ0ZXIgPSB0aGlzLmN1cnJlbnQoKSArIGRpc3RhbmNlLFxyXG5cdFx0XHRcdGRpcmVjdGlvbiA9IGJlZm9yZSAtIGFmdGVyIDwgMCA/IHRydWUgOiBmYWxzZSxcclxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuX2Nsb25lcy5sZW5ndGggKyB0aGlzLl9pdGVtcy5sZW5ndGg7XHJcblxyXG5cdFx0XHRpZiAoYWZ0ZXIgPCB0aGlzLnNldHRpbmdzLml0ZW1zICYmIGRpcmVjdGlvbiA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXZlcnQgPSBiZWZvcmUgKyB0aGlzLl9pdGVtcy5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5yZXNldChyZXZlcnQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFmdGVyID49IGl0ZW1zIC0gdGhpcy5zZXR0aW5ncy5pdGVtcyAmJiBkaXJlY3Rpb24gPT09IHRydWUpIHtcclxuXHRcdFx0XHRyZXZlcnQgPSBiZWZvcmUgLSB0aGlzLl9pdGVtcy5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5yZXNldChyZXZlcnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5lLl9nb1RvTG9vcCk7XHJcblx0XHRcdHRoaXMuZS5fZ29Ub0xvb3AgPSB3aW5kb3cuc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuc3BlZWQodGhpcy5kdXJhdGlvbih0aGlzLmN1cnJlbnQoKSwgcmV2ZXJ0ICsgZGlzdGFuY2UsIHNwZWVkKSk7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50KHJldmVydCArIGRpc3RhbmNlKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHR9LCB0aGlzKSwgMzApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zcGVlZCh0aGlzLmR1cmF0aW9uKHRoaXMuY3VycmVudCgpLCBwb3NpdGlvbiwgc3BlZWQpKTtcclxuXHRcdFx0dGhpcy5jdXJyZW50KHBvc2l0aW9uKTtcclxuXHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbS5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHNwZWVkKSB7XHJcblx0XHRzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xyXG5cdFx0dGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSArIDEsIHNwZWVkKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTbGlkZXMgdG8gdGhlIHByZXZpb3VzIGl0ZW0uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xyXG5cdFx0c3BlZWQgPSBzcGVlZCB8fCBmYWxzZTtcclxuXHRcdHRoaXMudG8odGhpcy5yZWxhdGl2ZSh0aGlzLmN1cnJlbnQoKSkgLSAxLCBzcGVlZCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyB0aGUgZW5kIG9mIGFuIGFuaW1hdGlvbi5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUudHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly8gaWYgY3NzMiBhbmltYXRpb24gdGhlbiBldmVudCBvYmplY3QgaXMgdW5kZWZpbmVkXHJcblx0XHRpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdC8vIENhdGNoIG9ubHkgb3dsLXN0YWdlIHRyYW5zaXRpb25FbmQgZXZlbnRcclxuXHRcdFx0aWYgKChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5vcmlnaW5hbFRhcmdldCkgIT09IHRoaXMuJHN0YWdlLmdldCgwKSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc3RhdGUuaW5Nb3Rpb24gPSBmYWxzZTtcclxuXHRcdHRoaXMudHJpZ2dlcigndHJhbnNsYXRlZCcpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgdmlld3BvcnQgd2lkdGguXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgd2lkdGggaW4gcGl4ZWwuXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS52aWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHdpZHRoO1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQgIT09IHdpbmRvdykge1xyXG5cdFx0XHR3aWR0aCA9ICQodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCYXNlRWxlbWVudCkud2lkdGgoKTtcclxuXHRcdH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGgpIHtcclxuXHRcdFx0d2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkge1xyXG5cdFx0XHR3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93ICdDYW4gbm90IGRldGVjdCB2aWV3cG9ydCB3aWR0aC4nO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHdpZHRoO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGNvbnRlbnQuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fFN0cmluZ30gY29udGVudCAtIFRoZSBuZXcgY29udGVudC5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihjb250ZW50KSB7XHJcblx0XHR0aGlzLiRzdGFnZS5lbXB0eSgpO1xyXG5cdFx0dGhpcy5faXRlbXMgPSBbXTtcclxuXHJcblx0XHRpZiAoY29udGVudCkge1xyXG5cdFx0XHRjb250ZW50ID0gKGNvbnRlbnQgaW5zdGFuY2VvZiBqUXVlcnkpID8gY29udGVudCA6ICQoY29udGVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKSB7XHJcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmZpbmQoJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnRlbnQuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMTtcclxuXHRcdH0pLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgaXRlbSkge1xyXG5cdFx0XHRpdGVtID0gdGhpcy5wcmVwYXJlKGl0ZW0pO1xyXG5cdFx0XHR0aGlzLiRzdGFnZS5hcHBlbmQoaXRlbSk7XHJcblx0XHRcdHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdHRoaXMuX21lcmdlcnMucHVzaChpdGVtLmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFuZFNlbGYoJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XHJcblx0XHR9LCB0aGlzKSk7XHJcblxyXG5cdFx0dGhpcy5yZXNldCgkLmlzTnVtZXJpYyh0aGlzLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24pID8gdGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uIDogMCk7XHJcblxyXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgYW4gaXRlbS5cclxuXHQgKiBAdG9kbyBVc2UgYGl0ZW1gIGluc3RlYWQgb2YgYGNvbnRlbnRgIGZvciB0aGUgZXZlbnQgYXJndW1lbnRzLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgaXRlbSBjb250ZW50IHRvIGFkZC5cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBhdCB3aGljaCB0byBpbnNlcnQgdGhlIGl0ZW0gb3RoZXJ3aXNlIHRoZSBpdGVtIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZC5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIHBvc2l0aW9uKSB7XHJcblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uID09PSB1bmRlZmluZWQgPyB0aGlzLl9pdGVtcy5sZW5ndGggOiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcclxuXHJcblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy4kc3RhZ2UuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHR0aGlzLl9pdGVtcy5wdXNoKGNvbnRlbnQpO1xyXG5cdFx0XHR0aGlzLl9tZXJnZXJzLnB1c2goY29udGVudC5maW5kKCdbZGF0YS1tZXJnZV0nKS5hbmRTZWxmKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5faXRlbXNbcG9zaXRpb25dLmJlZm9yZShjb250ZW50KTtcclxuXHRcdFx0dGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50KTtcclxuXHRcdFx0dGhpcy5fbWVyZ2Vycy5zcGxpY2UocG9zaXRpb24sIDAsIGNvbnRlbnQuZmluZCgnW2RhdGEtbWVyZ2VdJykuYW5kU2VsZignW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGRlZCcsIHsgY29udGVudDogY29udGVudCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbW92ZXMgYW4gaXRlbSBieSBpdHMgcG9zaXRpb24uXHJcblx0ICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHRvIHJlbW92ZS5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcclxuXHJcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy50cmlnZ2VyKCdyZW1vdmUnLCB7IGNvbnRlbnQ6IHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXSwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xyXG5cclxuXHRcdHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXS5yZW1vdmUoKTtcclxuXHRcdHRoaXMuX2l0ZW1zLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcblx0XHR0aGlzLl9tZXJnZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xyXG5cclxuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlZCcsIHsgY29udGVudDogbnVsbCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMgdHJpZ2dlcmFibGUgZXZlbnRzLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLmFkZFRyaWdnZXJhYmxlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaGFuZGxlciA9ICQucHJveHkoZnVuY3Rpb24oY2FsbGJhY2ssIGV2ZW50KSB7XHJcblx0XHRcdHJldHVybiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoZS5yZWxhdGVkVGFyZ2V0ICE9PSB0aGlzKSB7XHJcblx0XHRcdFx0XHR0aGlzLnN1cHByZXNzKFsgZXZlbnQgXSk7XHJcblx0XHRcdFx0XHRjYWxsYmFjay5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG5cdFx0XHRcdFx0dGhpcy5yZWxlYXNlKFsgZXZlbnQgXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdCQuZWFjaCh7XHJcblx0XHRcdCduZXh0JzogdGhpcy5uZXh0LFxyXG5cdFx0XHQncHJldic6IHRoaXMucHJldixcclxuXHRcdFx0J3RvJzogdGhpcy50byxcclxuXHRcdFx0J2Rlc3Ryb3knOiB0aGlzLmRlc3Ryb3ksXHJcblx0XHRcdCdyZWZyZXNoJzogdGhpcy5yZWZyZXNoLFxyXG5cdFx0XHQncmVwbGFjZSc6IHRoaXMucmVwbGFjZSxcclxuXHRcdFx0J2FkZCc6IHRoaXMuYWRkLFxyXG5cdFx0XHQncmVtb3ZlJzogdGhpcy5yZW1vdmVcclxuXHRcdH0sICQucHJveHkoZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcblx0XHRcdHRoaXMuJGVsZW1lbnQub24oZXZlbnQgKyAnLm93bC5jYXJvdXNlbCcsIGhhbmRsZXIoY2FsbGJhY2ssIGV2ZW50ICsgJy5vd2wuY2Fyb3VzZWwnKSk7XHJcblx0XHR9LCB0aGlzKSk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdhdGNoZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNhcm91c2VsIGVsZW1lbnQuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUud2F0Y2hWaXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly8gdGVzdCBvbiB6ZXB0b1xyXG5cdFx0aWYgKCFpc0VsVmlzaWJsZSh0aGlzLiRlbGVtZW50LmdldCgwKSkpIHtcclxuXHRcdFx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcygnb3dsLWhpZGRlbicpO1xyXG5cdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmUuX2NoZWNrVmlzaWJpbGUpO1xyXG5cdFx0XHR0aGlzLmUuX2NoZWNrVmlzaWJpbGUgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoJC5wcm94eShjaGVja1Zpc2libGUsIHRoaXMpLCA1MDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGlzRWxWaXNpYmxlKGVsKSB7XHJcblx0XHRcdHJldHVybiBlbC5vZmZzZXRXaWR0aCA+IDAgJiYgZWwub2Zmc2V0SGVpZ2h0ID4gMDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjaGVja1Zpc2libGUoKSB7XHJcblx0XHRcdGlmIChpc0VsVmlzaWJsZSh0aGlzLiRlbGVtZW50LmdldCgwKSkpIHtcclxuXHRcdFx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdvd2wtaGlkZGVuJyk7XHJcblx0XHRcdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5lLl9jaGVja1Zpc2liaWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByZWxvYWRzIGltYWdlcyB3aXRoIGF1dG8gd2lkdGguXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEB0b2RvIFN0aWxsIHRvIHRlc3RcclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnByZWxvYWRBdXRvV2lkdGhJbWFnZXMgPSBmdW5jdGlvbihpbWdzKSB7XHJcblx0XHR2YXIgbG9hZGVkLCB0aGF0LCAkZWwsIGltZztcclxuXHJcblx0XHRsb2FkZWQgPSAwO1xyXG5cdFx0dGhhdCA9IHRoaXM7XHJcblx0XHRpbWdzLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcclxuXHRcdFx0JGVsID0gJChlbCk7XHJcblx0XHRcdGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxvYWRlZCsrO1xyXG5cdFx0XHRcdCRlbC5hdHRyKCdzcmMnLCBpbWcuc3JjKTtcclxuXHRcdFx0XHQkZWwuY3NzKCdvcGFjaXR5JywgMSk7XHJcblx0XHRcdFx0aWYgKGxvYWRlZCA+PSBpbWdzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGhhdC5zdGF0ZS5pbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhhdC5pbml0aWFsaXplKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aW1nLnNyYyA9ICRlbC5hdHRyKCdzcmMnKSB8fCAkZWwuYXR0cignZGF0YS1zcmMnKSB8fCAkZWwuYXR0cignZGF0YS1zcmMtcmV0aW5hJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEZXN0cm95cyB0aGUgY2Fyb3VzZWwuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKHRoaXMuc2V0dGluZ3MudGhlbWVDbGFzcykpIHtcclxuXHRcdFx0dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnRoZW1lQ2xhc3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmUgIT09IGZhbHNlKSB7XHJcblx0XHRcdCQod2luZG93KS5vZmYoJ3Jlc2l6ZS5vd2wuY2Fyb3VzZWwnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy50cmFuc2l0aW9uRW5kVmVuZG9yKSB7XHJcblx0XHRcdHRoaXMub2ZmKHRoaXMuJHN0YWdlLmdldCgwKSwgdGhpcy50cmFuc2l0aW9uRW5kVmVuZG9yLCB0aGlzLmUuX3RyYW5zaXRpb25FbmQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBpIGluIHRoaXMuX3BsdWdpbnMpIHtcclxuXHRcdFx0dGhpcy5fcGx1Z2luc1tpXS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubW91c2VEcmFnIHx8IHRoaXMuc2V0dGluZ3MudG91Y2hEcmFnKSB7XHJcblx0XHRcdHRoaXMuJHN0YWdlLm9mZignbW91c2Vkb3duIHRvdWNoc3RhcnQgdG91Y2hjYW5jZWwnKTtcclxuXHRcdFx0JChkb2N1bWVudCkub2ZmKCcub3dsLmRyYWdFdmVudHMnKTtcclxuXHRcdFx0dGhpcy4kc3RhZ2UuZ2V0KDApLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0XHR0aGlzLiRzdGFnZS5vZmYoJ2RyYWdzdGFydCcsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2UgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIGV2ZW50IGhhbmRsZXJzIGluIHRoZSBcIi5vd2wuY2Fyb3VzZWxcIiBuYW1lc3BhY2VcclxuXHRcdHRoaXMuJGVsZW1lbnQub2ZmKCcub3dsJyk7XHJcblxyXG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jbG9uZWQnKS5yZW1vdmUoKTtcclxuXHRcdHRoaXMuZSA9IG51bGw7XHJcblx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZURhdGEoJ293bENhcm91c2VsJyk7XHJcblxyXG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jb250ZW50cygpLnVud3JhcCgpO1xyXG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS51bndyYXAoKTtcclxuXHRcdHRoaXMuJHN0YWdlLnVud3JhcCgpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wZXJhdG9ycyB0byBjYWxjdWxhdGUgcmlnaHQtdG8tbGVmdCBhbmQgbGVmdC10by1yaWdodC5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFthXSAtIFRoZSBsZWZ0IHNpZGUgb3BlcmFuZC5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW29dIC0gVGhlIG9wZXJhdG9yLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbYl0gLSBUaGUgcmlnaHQgc2lkZSBvcGVyYW5kLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUub3AgPSBmdW5jdGlvbihhLCBvLCBiKSB7XHJcblx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGw7XHJcblx0XHRzd2l0Y2ggKG8pIHtcclxuXHRcdFx0Y2FzZSAnPCc6XHJcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPiBiIDogYSA8IGI7XHJcblx0XHRcdGNhc2UgJz4nOlxyXG5cdFx0XHRcdHJldHVybiBydGwgPyBhIDwgYiA6IGEgPiBiO1xyXG5cdFx0XHRjYXNlICc+PSc6XHJcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPD0gYiA6IGEgPj0gYjtcclxuXHRcdFx0Y2FzZSAnPD0nOlxyXG5cdFx0XHRcdHJldHVybiBydGwgPyBhID49IGIgOiBhIDw9IGI7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQXR0YWNoZXMgdG8gYW4gaW50ZXJuYWwgZXZlbnQuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgc291cmNlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYXR0YWNoLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FwdHVyZSAtIFdldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGhhbmRsZWQgYXQgdGhlIGNhcHR1cmluZyBwaGFzZSBvciBub3QuXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xyXG5cdFx0aWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKTtcclxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG5cdFx0XHRlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGFjaGVzIGZyb20gYW4gaW50ZXJuYWwgZXZlbnQuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgc291cmNlLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxyXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGF0dGFjaGVkIGV2ZW50IGhhbmRsZXIgdG8gZGV0YWNoLlxyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FwdHVyZSAtIFdldGhlciB0aGUgYXR0YWNoZWQgZXZlbnQgaGFuZGxlciB3YXMgcmVnaXN0ZXJlZCBhcyBhIGNhcHR1cmluZyBsaXN0ZW5lciBvciBub3QuXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcclxuXHRcdGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XHJcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcclxuXHRcdFx0ZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBUcmlnZ2VycyBhbiBwdWJsaWMgZXZlbnQuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIGV2ZW50IG5hbWUuXHJcblx0ICogQHBhcmFtIHsqfSBbZGF0YT1udWxsXSAtIFRoZSBldmVudCBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZXNwYWNlPS5vd2wuY2Fyb3VzZWxdIC0gVGhlIGV2ZW50IG5hbWVzcGFjZS5cclxuXHQgKiBAcmV0dXJucyB7RXZlbnR9IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuXHQgKi9cclxuXHRPd2wucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBkYXRhLCBuYW1lc3BhY2UpIHtcclxuXHRcdHZhciBzdGF0dXMgPSB7XHJcblx0XHRcdGl0ZW06IHsgY291bnQ6IHRoaXMuX2l0ZW1zLmxlbmd0aCwgaW5kZXg6IHRoaXMuY3VycmVudCgpIH1cclxuXHRcdH0sIGhhbmRsZXIgPSAkLmNhbWVsQ2FzZShcclxuXHRcdFx0JC5ncmVwKFsgJ29uJywgbmFtZSwgbmFtZXNwYWNlIF0sIGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYgfSlcclxuXHRcdFx0XHQuam9pbignLScpLnRvTG93ZXJDYXNlKClcclxuXHRcdCksIGV2ZW50ID0gJC5FdmVudChcclxuXHRcdFx0WyBuYW1lLCAnb3dsJywgbmFtZXNwYWNlIHx8ICdjYXJvdXNlbCcgXS5qb2luKCcuJykudG9Mb3dlckNhc2UoKSxcclxuXHRcdFx0JC5leHRlbmQoeyByZWxhdGVkVGFyZ2V0OiB0aGlzIH0sIHN0YXR1cywgZGF0YSlcclxuXHRcdCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9zdXByZXNzW25hbWVdKSB7XHJcblx0XHRcdCQuZWFjaCh0aGlzLl9wbHVnaW5zLCBmdW5jdGlvbihuYW1lLCBwbHVnaW4pIHtcclxuXHRcdFx0XHRpZiAocGx1Z2luLm9uVHJpZ2dlcikge1xyXG5cdFx0XHRcdFx0cGx1Z2luLm9uVHJpZ2dlcihldmVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJGVsZW1lbnQudHJpZ2dlcihldmVudCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncyAmJiB0eXBlb2YgdGhpcy5zZXR0aW5nc1toYW5kbGVyXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3NbaGFuZGxlcl0uYXBwbHkodGhpcywgZXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGV2ZW50O1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1cHByZXNzZXMgZXZlbnRzLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHN1cHByZXNzLlxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuc3VwcHJlc3MgPSBmdW5jdGlvbihldmVudHMpIHtcclxuXHRcdCQuZWFjaChldmVudHMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGV2ZW50KSB7XHJcblx0XHRcdHRoaXMuX3N1cHJlc3NbZXZlbnRdID0gdHJ1ZTtcclxuXHRcdH0sIHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlbGVhc2VzIHN1cHByZXNzZWQgZXZlbnRzLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHJlbGVhc2UuXHJcblx0ICovXHJcblx0T3dsLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24oZXZlbnRzKSB7XHJcblx0XHQkLmVhY2goZXZlbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBldmVudCkge1xyXG5cdFx0XHRkZWxldGUgdGhpcy5fc3VwcmVzc1tldmVudF07XHJcblx0XHR9LCB0aGlzKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgdGhlIGF2YWlsYWJpbGl0eSBvZiBzb21lIGJyb3dzZXIgZmVhdHVyZXMuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqL1xyXG5cdE93bC5wcm90b3R5cGUuYnJvd3NlclN1cHBvcnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuc3VwcG9ydDNkID0gaXNQZXJzcGVjdGl2ZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1cHBvcnQzZCkge1xyXG5cdFx0XHR0aGlzLnRyYW5zZm9ybVZlbmRvciA9IGlzVHJhbnNmb3JtKCk7XHJcblxyXG5cdFx0XHQvLyB0YWtlIHRyYW5zaXRpb25lbmQgZXZlbnQgbmFtZSBieSBkZXRlY3RpbmcgdHJhbnNpdGlvblxyXG5cdFx0XHR2YXIgZW5kVmVuZG9ycyA9IFsgJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJyBdO1xyXG5cdFx0XHR0aGlzLnRyYW5zaXRpb25FbmRWZW5kb3IgPSBlbmRWZW5kb3JzW2lzVHJhbnNpdGlvbigpXTtcclxuXHJcblx0XHRcdC8vIHRha2UgdmVuZG9yIG5hbWUgZnJvbSB0cmFuc2Zvcm0gbmFtZVxyXG5cdFx0XHR0aGlzLnZlbmRvck5hbWUgPSB0aGlzLnRyYW5zZm9ybVZlbmRvci5yZXBsYWNlKC9UcmFuc2Zvcm0vaSwgJycpO1xyXG5cdFx0XHR0aGlzLnZlbmRvck5hbWUgPSB0aGlzLnZlbmRvck5hbWUgIT09ICcnID8gJy0nICsgdGhpcy52ZW5kb3JOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLScgOiAnJztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnN0YXRlLm9yaWVudGF0aW9uID0gd2luZG93Lm9yaWVudGF0aW9uO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0b3VjaC9kcmFnIGNvb3JkaW5hdHMuXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0ge2V2ZW50fSAtIG1vdXNlZG93bi90b3VjaHN0YXJ0IGV2ZW50XHJcblx0ICogQHJldHVybnMge29iamVjdH0gLSBDb250YWlucyBYIGFuZCBZIG9mIGN1cnJlbnQgbW91c2UvdG91Y2ggcG9zaXRpb25cclxuXHQgKi9cclxuXHJcblx0ZnVuY3Rpb24gZ2V0VG91Y2hlcyhldmVudCkge1xyXG5cdFx0aWYgKGV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHg6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsXHJcblx0XHRcdFx0eTogZXZlbnQudG91Y2hlc1swXS5wYWdlWVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChldmVudC50b3VjaGVzID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0aWYgKGV2ZW50LnBhZ2VYICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0eDogZXZlbnQucGFnZVgsXHJcblx0XHRcdFx0XHR5OiBldmVudC5wYWdlWVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRpZiAoZXZlbnQucGFnZVggPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0eDogZXZlbnQuY2xpZW50WCxcclxuXHRcdFx0XHRcdHk6IGV2ZW50LmNsaWVudFlcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgZm9yIENTUyBzdXBwb3J0LlxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgLSBUaGUgQ1NTIHByb3BlcnRpZXMgdG8gY2hlY2sgZm9yLlxyXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gLSBDb250YWlucyB0aGUgc3VwcG9ydGVkIENTUyBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgaW5kZXggb3IgYGZhbHNlYC5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBpc1N0eWxlU3VwcG9ydGVkKGFycmF5KSB7XHJcblx0XHR2YXIgcCwgcywgZmFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBsaXN0ID0gYXJyYXk7XHJcblx0XHRmb3IgKHAgaW4gbGlzdCkge1xyXG5cdFx0XHRzID0gbGlzdFtwXTtcclxuXHRcdFx0aWYgKHR5cGVvZiBmYWtlLnN0eWxlW3NdICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdGZha2UgPSBudWxsO1xyXG5cdFx0XHRcdHJldHVybiBbIHMsIHAgXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFsgZmFsc2UgXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyBmb3IgQ1NTIHRyYW5zaXRpb24gc3VwcG9ydC5cclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEB0b2RvIFJlYWx5IGJhZCBkZXNpZ25cclxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGlzVHJhbnNpdGlvbigpIHtcclxuXHRcdHJldHVybiBpc1N0eWxlU3VwcG9ydGVkKFsgJ3RyYW5zaXRpb24nLCAnV2Via2l0VHJhbnNpdGlvbicsICdNb3pUcmFuc2l0aW9uJywgJ09UcmFuc2l0aW9uJyBdKVsxXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyBmb3IgQ1NTIHRyYW5zZm9ybSBzdXBwb3J0LlxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lIG9yIGZhbHNlLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGlzVHJhbnNmb3JtKCkge1xyXG5cdFx0cmV0dXJuIGlzU3R5bGVTdXBwb3J0ZWQoWyAndHJhbnNmb3JtJywgJ1dlYmtpdFRyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICdtc1RyYW5zZm9ybScgXSlbMF07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3MgZm9yIENTUyBwZXJzcGVjdGl2ZSBzdXBwb3J0LlxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lIG9yIGZhbHNlLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGlzUGVyc3BlY3RpdmUoKSB7XHJcblx0XHRyZXR1cm4gaXNTdHlsZVN1cHBvcnRlZChbICdwZXJzcGVjdGl2ZScsICd3ZWJraXRQZXJzcGVjdGl2ZScsICdNb3pQZXJzcGVjdGl2ZScsICdPUGVyc3BlY3RpdmUnLCAnTXNQZXJzcGVjdGl2ZScgXSlbMF07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2V0aGVyIHRvdWNoIGlzIHN1cHBvcnRlZCBvciBub3QuXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBpc1RvdWNoU3VwcG9ydCgpIHtcclxuXHRcdHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgISEobmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIHdldGhlciB0b3VjaCBpcyBzdXBwb3J0ZWQgb3Igbm90IGZvciBJRS5cclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGlzVG91Y2hTdXBwb3J0SUUoKSB7XHJcblx0XHRyZXR1cm4gd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIGpRdWVyeSBQbHVnaW4gZm9yIHRoZSBPd2wgQ2Fyb3VzZWxcclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0JC5mbi5vd2xDYXJvdXNlbCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICghJCh0aGlzKS5kYXRhKCdvd2xDYXJvdXNlbCcpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5kYXRhKCdvd2xDYXJvdXNlbCcsIG5ldyBPd2wodGhpcywgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSBqUXVlcnkgUGx1Z2luXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IgPSBPd2w7XHJcblxyXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XHJcblxyXG4vKipcclxuICogTGF6eSBQbHVnaW5cclxuICogQHZlcnNpb24gMi4wLjBcclxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcclxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqL1xyXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIHRoZSBsYXp5IHBsdWdpbi5cclxuXHQgKiBAY2xhc3MgVGhlIExhenkgUGx1Z2luXHJcblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxyXG5cdCAqL1xyXG5cdHZhciBMYXp5ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEB0eXBlIHtPd2x9XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFscmVhZHkgbG9hZGVkIGl0ZW1zLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHR5cGUge0FycmF5LjxqUXVlcnk+fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9sb2FkZWQgPSBbXTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEV2ZW50IGhhbmRsZXJzLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHR5cGUge09iamVjdH1cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XHJcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgY2hhbmdlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGlmICghZS5uYW1lc3BhY2UpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghdGhpcy5fY29yZS5zZXR0aW5ncyB8fCAhdGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKChlLnByb3BlcnR5ICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB8fCBlLnR5cGUgPT0gJ2luaXRpYWxpemVkJykge1xyXG5cdFx0XHRcdFx0dmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcclxuXHRcdFx0XHRcdFx0biA9IChzZXR0aW5ncy5jZW50ZXIgJiYgTWF0aC5jZWlsKHNldHRpbmdzLml0ZW1zIC8gMikgfHwgc2V0dGluZ3MuaXRlbXMpLFxyXG5cdFx0XHRcdFx0XHRpID0gKChzZXR0aW5ncy5jZW50ZXIgJiYgbiAqIC0xKSB8fCAwKSxcclxuXHRcdFx0XHRcdFx0cG9zaXRpb24gPSAoKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS52YWx1ZSkgfHwgdGhpcy5fY29yZS5jdXJyZW50KCkpICsgaSxcclxuXHRcdFx0XHRcdFx0Y2xvbmVzID0gdGhpcy5fY29yZS5jbG9uZXMoKS5sZW5ndGgsXHJcblx0XHRcdFx0XHRcdGxvYWQgPSAkLnByb3h5KGZ1bmN0aW9uKGksIHYpIHsgdGhpcy5sb2FkKHYpIH0sIHRoaXMpO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChpKysgPCBuKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubG9hZChjbG9uZXMgLyAyICsgdGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbikpO1xyXG5cdFx0XHRcdFx0XHRjbG9uZXMgJiYgJC5lYWNoKHRoaXMuX2NvcmUuY2xvbmVzKHRoaXMuX2NvcmUucmVsYXRpdmUocG9zaXRpb24rKykpLCBsb2FkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpXHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCB0aGUgZGVmYXVsdCBvcHRpb25zXHJcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTGF6eS5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcclxuXHJcblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyXHJcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0TGF6eS5EZWZhdWx0cyA9IHtcclxuXHRcdGxhenlMb2FkOiBmYWxzZVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZHMgYWxsIHJlc291cmNlcyBvZiBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb24uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHRMYXp5LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcclxuXHRcdHZhciAkaXRlbSA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEocG9zaXRpb24pLFxyXG5cdFx0XHQkZWxlbWVudHMgPSAkaXRlbSAmJiAkaXRlbS5maW5kKCcub3dsLWxhenknKTtcclxuXHJcblx0XHRpZiAoISRlbGVtZW50cyB8fCAkLmluQXJyYXkoJGl0ZW0uZ2V0KDApLCB0aGlzLl9sb2FkZWQpID4gLTEpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRlbGVtZW50cy5lYWNoKCQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyICRlbGVtZW50ID0gJChlbGVtZW50KSwgaW1hZ2UsXHJcblx0XHRcdFx0dXJsID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYy1yZXRpbmEnKSkgfHwgJGVsZW1lbnQuYXR0cignZGF0YS1zcmMnKTtcclxuXHJcblx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignbG9hZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XHJcblxyXG5cdFx0XHRpZiAoJGVsZW1lbnQuaXMoJ2ltZycpKSB7XHJcblx0XHRcdFx0JGVsZW1lbnQub25lKCdsb2FkLm93bC5sYXp5JywgJC5wcm94eShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCRlbGVtZW50LmNzcygnb3BhY2l0eScsIDEpO1xyXG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xyXG5cdFx0XHRcdH0sIHRoaXMpKS5hdHRyKCdzcmMnLCB1cmwpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gJC5wcm94eShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCRlbGVtZW50LmNzcyh7XHJcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgdXJsICsgJyknLFxyXG5cdFx0XHRcdFx0XHQnb3BhY2l0eSc6ICcxJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XHJcblx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzKSk7XHJcblxyXG5cdFx0dGhpcy5fbG9hZGVkLnB1c2goJGl0ZW0uZ2V0KDApKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqL1xyXG5cdExhenkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcclxuXHJcblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5oYW5kbGVycykge1xyXG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcclxuXHRcdH1cclxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcclxuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuTGF6eSA9IExhenk7XHJcblxyXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XHJcblxyXG4vKipcclxuICogQXV0b0hlaWdodCBQbHVnaW5cclxuICogQHZlcnNpb24gMi4wLjBcclxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcclxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqL1xyXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvIGhlaWdodCBwbHVnaW4uXHJcblx0ICogQGNsYXNzIFRoZSBBdXRvIEhlaWdodCBQbHVnaW5cclxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXHJcblx0ICovXHJcblx0dmFyIEF1dG9IZWlnaHQgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7T3dsfVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcclxuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCkge1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0ICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKXtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0J2xvYWRlZC5vd2wubGF6eSc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQgJiYgZS5lbGVtZW50LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpXHJcblx0XHRcdFx0XHQ9PT0gdGhpcy5fY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLl9jb3JlLmN1cnJlbnQoKSkpIHtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXHJcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b0hlaWdodC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcclxuXHJcblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xyXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGVmYXVsdCBvcHRpb25zLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRBdXRvSGVpZ2h0LkRlZmF1bHRzID0ge1xyXG5cdFx0YXV0b0hlaWdodDogZmFsc2UsXHJcblx0XHRhdXRvSGVpZ2h0Q2xhc3M6ICdvd2wtaGVpZ2h0J1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXHJcblx0ICovXHJcblx0QXV0b0hlaWdodC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLl9jb3JlLiRzdGFnZS5wYXJlbnQoKVxyXG5cdFx0XHQuaGVpZ2h0KHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5fY29yZS5jdXJyZW50KCkpLmhlaWdodCgpKVxyXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0Q2xhc3MpO1xyXG5cdH07XHJcblxyXG5cdEF1dG9IZWlnaHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcclxuXHJcblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xyXG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b0hlaWdodCA9IEF1dG9IZWlnaHQ7XHJcblxyXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XHJcblxyXG4vKipcclxuICogVmlkZW8gUGx1Z2luXHJcbiAqIEB2ZXJzaW9uIDIuMC4wXHJcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXHJcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG4gKi9cclxuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyB0aGUgdmlkZW8gcGx1Z2luLlxyXG5cdCAqIEBjbGFzcyBUaGUgVmlkZW8gUGx1Z2luXHJcblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxyXG5cdCAqL1xyXG5cdHZhciBWaWRlbyA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEB0eXBlIHtPd2x9XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENhY2hlIGFsbCB2aWRlbyBVUkxzLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHR5cGUge09iamVjdH1cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5fdmlkZW9zID0ge307XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDdXJyZW50IHBsYXlpbmcgaXRlbS5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX3BsYXlpbmcgPSBudWxsO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogV2hldGhlciB0aGlzIGlzIGluIGZ1bGxzY3JlZW4gb3Igbm90LlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX2Z1bGxzY3JlZW4gPSBmYWxzZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xyXG5cdFx0XHQncmVzaXplLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvICYmICF0aGlzLmlzSW5GdWxsU2NyZWVuKCkpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHQncmVmcmVzaC5vd2wuY2Fyb3VzZWwgY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5fcGxheWluZykge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHZhciAkZWxlbWVudCA9ICQoZS5jb250ZW50KS5maW5kKCcub3dsLXZpZGVvJyk7XHJcblx0XHRcdFx0aWYgKCRlbGVtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHRcdFx0XHRcdHRoaXMuZmV0Y2goJGVsZW1lbnQsICQoZS5jb250ZW50KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXHJcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVmlkZW8uRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XHJcblxyXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcclxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xyXG5cclxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24oJ2NsaWNrLm93bC52aWRlbycsICcub3dsLXZpZGVvLXBsYXktaWNvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR0aGlzLnBsYXkoZSk7XHJcblx0XHR9LCB0aGlzKSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGVmYXVsdCBvcHRpb25zLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRWaWRlby5EZWZhdWx0cyA9IHtcclxuXHRcdHZpZGVvOiBmYWxzZSxcclxuXHRcdHZpZGVvSGVpZ2h0OiBmYWxzZSxcclxuXHRcdHZpZGVvV2lkdGg6IGZhbHNlXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyB0aGUgdmlkZW8gSUQgYW5kIHRoZSB0eXBlIChZb3VUdWJlL1ZpbWVvIG9ubHkpLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxyXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBpdGVtIC0gVGhlIGl0ZW0gY29udGFpbmluZyB0aGUgdmlkZW8uXHJcblx0ICovXHJcblx0VmlkZW8ucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24odGFyZ2V0LCBpdGVtKSB7XHJcblxyXG5cdFx0dmFyIHR5cGUgPSB0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpID8gJ3ZpbWVvJyA6ICd5b3V0dWJlJyxcclxuXHRcdFx0aWQgPSB0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpIHx8IHRhcmdldC5hdHRyKCdkYXRhLXlvdXR1YmUtaWQnKSxcclxuXHRcdFx0d2lkdGggPSB0YXJnZXQuYXR0cignZGF0YS13aWR0aCcpIHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MudmlkZW9XaWR0aCxcclxuXHRcdFx0aGVpZ2h0ID0gdGFyZ2V0LmF0dHIoJ2RhdGEtaGVpZ2h0JykgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlb0hlaWdodCxcclxuXHRcdFx0dXJsID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcclxuXHJcblx0XHRpZiAodXJsKSB7XHJcblx0XHRcdGlkID0gdXJsLm1hdGNoKC8oaHR0cDp8aHR0cHM6fClcXC9cXC8ocGxheWVyLnx3d3cuKT8odmltZW9cXC5jb218eW91dHUoYmVcXC5jb218XFwuYmV8YmVcXC5nb29nbGVhcGlzXFwuY29tKSlcXC8odmlkZW9cXC98ZW1iZWRcXC98d2F0Y2hcXD92PXx2XFwvKT8oW0EtWmEtejAtOS5fJS1dKikoXFwmXFxTKyk/Lyk7XHJcblxyXG5cdFx0XHRpZiAoaWRbM10uaW5kZXhPZigneW91dHUnKSA+IC0xKSB7XHJcblx0XHRcdFx0dHlwZSA9ICd5b3V0dWJlJztcclxuXHRcdFx0fSBlbHNlIGlmIChpZFszXS5pbmRleE9mKCd2aW1lbycpID4gLTEpIHtcclxuXHRcdFx0XHR0eXBlID0gJ3ZpbWVvJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1ZpZGVvIFVSTCBub3Qgc3VwcG9ydGVkLicpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlkID0gaWRbNl07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdmlkZW8gVVJMLicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3ZpZGVvc1t1cmxdID0ge1xyXG5cdFx0XHR0eXBlOiB0eXBlLFxyXG5cdFx0XHRpZDogaWQsXHJcblx0XHRcdHdpZHRoOiB3aWR0aCxcclxuXHRcdFx0aGVpZ2h0OiBoZWlnaHRcclxuXHRcdH07XHJcblxyXG5cdFx0aXRlbS5hdHRyKCdkYXRhLXZpZGVvJywgdXJsKTtcclxuXHJcblx0XHR0aGlzLnRodW1ibmFpbCh0YXJnZXQsIHRoaXMuX3ZpZGVvc1t1cmxdKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIHZpZGVvIHRodW1ibmFpbC5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQHBhcmFtIHtqUXVlcnl9IHRhcmdldCAtIFRoZSB0YXJnZXQgY29udGFpbmluZyB0aGUgdmlkZW8gZGF0YS5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIFRoZSB2aWRlbyBpbmZvIG9iamVjdC5cclxuXHQgKiBAc2VlIGBmZXRjaGBcclxuXHQgKi9cclxuXHRWaWRlby5wcm90b3R5cGUudGh1bWJuYWlsID0gZnVuY3Rpb24odGFyZ2V0LCB2aWRlbykge1xyXG5cclxuXHRcdHZhciB0bkxpbmssXHJcblx0XHRcdGljb24sXHJcblx0XHRcdHBhdGgsXHJcblx0XHRcdGRpbWVuc2lvbnMgPSB2aWRlby53aWR0aCAmJiB2aWRlby5oZWlnaHQgPyAnc3R5bGU9XCJ3aWR0aDonICsgdmlkZW8ud2lkdGggKyAncHg7aGVpZ2h0OicgKyB2aWRlby5oZWlnaHQgKyAncHg7XCInIDogJycsXHJcblx0XHRcdGN1c3RvbVRuID0gdGFyZ2V0LmZpbmQoJ2ltZycpLFxyXG5cdFx0XHRzcmNUeXBlID0gJ3NyYycsXHJcblx0XHRcdGxhenlDbGFzcyA9ICcnLFxyXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXHJcblx0XHRcdGNyZWF0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcclxuXHRcdFx0XHRpY29uID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tcGxheS1pY29uXCI+PC9kaXY+JztcclxuXHJcblx0XHRcdFx0aWYgKHNldHRpbmdzLmxhenlMb2FkKSB7XHJcblx0XHRcdFx0XHR0bkxpbmsgPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby10biAnICsgbGF6eUNsYXNzICsgJ1wiICcgKyBzcmNUeXBlICsgJz1cIicgKyBwYXRoICsgJ1wiPjwvZGl2Pic7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRuTGluayA9ICc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXRuXCIgc3R5bGU9XCJvcGFjaXR5OjE7YmFja2dyb3VuZC1pbWFnZTp1cmwoJyArIHBhdGggKyAnKVwiPjwvZGl2Pic7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRhcmdldC5hZnRlcih0bkxpbmspO1xyXG5cdFx0XHRcdHRhcmdldC5hZnRlcihpY29uKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHQvLyB3cmFwIHZpZGVvIGNvbnRlbnQgaW50byBvd2wtdmlkZW8td3JhcHBlciBkaXZcclxuXHRcdHRhcmdldC53cmFwKCc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXdyYXBwZXJcIicgKyBkaW1lbnNpb25zICsgJz48L2Rpdj4nKTtcclxuXHJcblx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCkge1xyXG5cdFx0XHRzcmNUeXBlID0gJ2RhdGEtc3JjJztcclxuXHRcdFx0bGF6eUNsYXNzID0gJ293bC1sYXp5JztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjdXN0b20gdGh1bWJuYWlsXHJcblx0XHRpZiAoY3VzdG9tVG4ubGVuZ3RoKSB7XHJcblx0XHRcdGNyZWF0ZShjdXN0b21Ubi5hdHRyKHNyY1R5cGUpKTtcclxuXHRcdFx0Y3VzdG9tVG4ucmVtb3ZlKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XHJcblx0XHRcdHBhdGggPSBcImh0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvXCIgKyB2aWRlby5pZCArIFwiL2hxZGVmYXVsdC5qcGdcIjtcclxuXHRcdFx0Y3JlYXRlKHBhdGgpO1xyXG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFx0dXJsOiAnaHR0cDovL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJyArIHZpZGVvLmlkICsgJy5qc29uJyxcclxuXHRcdFx0XHRqc29ucDogJ2NhbGxiYWNrJyxcclxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb25wJyxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRwYXRoID0gZGF0YVswXS50aHVtYm5haWxfbGFyZ2U7XHJcblx0XHRcdFx0XHRjcmVhdGUocGF0aCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTdG9wcyB0aGUgY3VycmVudCB2aWRlby5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0VmlkZW8ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcCcsIG51bGwsICd2aWRlbycpO1xyXG5cdFx0dGhpcy5fcGxheWluZy5maW5kKCcub3dsLXZpZGVvLWZyYW1lJykucmVtb3ZlKCk7XHJcblx0XHR0aGlzLl9wbGF5aW5nLnJlbW92ZUNsYXNzKCdvd2wtdmlkZW8tcGxheWluZycpO1xyXG5cdFx0dGhpcy5fcGxheWluZyA9IG51bGw7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnRzIHRoZSBjdXJyZW50IHZpZGVvLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldiAtIFRoZSBldmVudCBhcmd1bWVudHMuXHJcblx0ICovXHJcblx0VmlkZW8ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihldikge1xyXG5cdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdwbGF5JywgbnVsbCwgJ3ZpZGVvJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3BsYXlpbmcpIHtcclxuXHRcdFx0dGhpcy5zdG9wKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRhcmdldCA9ICQoZXYudGFyZ2V0IHx8IGV2LnNyY0VsZW1lbnQpLFxyXG5cdFx0XHRpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLFxyXG5cdFx0XHR2aWRlbyA9IHRoaXMuX3ZpZGVvc1tpdGVtLmF0dHIoJ2RhdGEtdmlkZW8nKV0sXHJcblx0XHRcdHdpZHRoID0gdmlkZW8ud2lkdGggfHwgJzEwMCUnLFxyXG5cdFx0XHRoZWlnaHQgPSB2aWRlby5oZWlnaHQgfHwgdGhpcy5fY29yZS4kc3RhZ2UuaGVpZ2h0KCksXHJcblx0XHRcdGh0bWwsIHdyYXA7XHJcblxyXG5cdFx0aWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xyXG5cdFx0XHRodG1sID0gJzxpZnJhbWUgd2lkdGg9XCInICsgd2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIGhlaWdodCArICdcIiBzcmM9XCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLydcclxuXHRcdFx0XHQrIHZpZGVvLmlkICsgJz9hdXRvcGxheT0xJnY9JyArIHZpZGVvLmlkICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XHJcblx0XHRcdGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJodHRwOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nICsgdmlkZW8uaWQgKyAnP2F1dG9wbGF5PTFcIiB3aWR0aD1cIicgKyB3aWR0aFxyXG5cdFx0XHRcdCsgJ1wiIGhlaWdodD1cIicgKyBoZWlnaHRcclxuXHRcdFx0XHQrICdcIiBmcmFtZWJvcmRlcj1cIjBcIiB3ZWJraXRhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG5cdFx0fVxyXG5cclxuXHRcdGl0ZW0uYWRkQ2xhc3MoJ293bC12aWRlby1wbGF5aW5nJyk7XHJcblx0XHR0aGlzLl9wbGF5aW5nID0gaXRlbTtcclxuXHJcblx0XHR3cmFwID0gJCgnPGRpdiBzdHlsZT1cImhlaWdodDonICsgaGVpZ2h0ICsgJ3B4OyB3aWR0aDonICsgd2lkdGggKyAncHhcIiBjbGFzcz1cIm93bC12aWRlby1mcmFtZVwiPidcclxuXHRcdFx0KyBodG1sICsgJzwvZGl2PicpO1xyXG5cdFx0dGFyZ2V0LmFmdGVyKHdyYXApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyB3aGV0aGVyIGFuIHZpZGVvIGlzIGN1cnJlbnRseSBpbiBmdWxsIHNjcmVlbiBtb2RlIG9yIG5vdC5cclxuXHQgKiBAdG9kbyBCYWQgc3R5bGUgYmVjYXVzZSBsb29rcyBsaWtlIGEgcmVhZG9ubHkgbWV0aG9kIGJ1dCBjaGFuZ2VzIG1lbWJlcnMuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxyXG5cdCAqL1xyXG5cdFZpZGVvLnByb3RvdHlwZS5pc0luRnVsbFNjcmVlbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIGlmIFZpbWVvIEZ1bGxzY3JlZW4gbW9kZVxyXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudFxyXG5cdFx0XHR8fCBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudDtcclxuXHJcblx0XHRpZiAoZWxlbWVudCAmJiAkKGVsZW1lbnQpLnBhcmVudCgpLmhhc0NsYXNzKCdvd2wtdmlkZW8tZnJhbWUnKSkge1xyXG5cdFx0XHR0aGlzLl9jb3JlLnNwZWVkKDApO1xyXG5cdFx0XHR0aGlzLl9mdWxsc2NyZWVuID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZWxlbWVudCAmJiB0aGlzLl9mdWxsc2NyZWVuICYmIHRoaXMuX3BsYXlpbmcpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbW1pbmcgYmFjayBmcm9tIGZ1bGxzY3JlZW5cclxuXHRcdGlmICh0aGlzLl9mdWxsc2NyZWVuKSB7XHJcblx0XHRcdHRoaXMuX2Z1bGxzY3JlZW4gPSBmYWxzZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNoZWNrIGZ1bGwgc2NyZWVuIG1vZGUgYW5kIHdpbmRvdyBvcmllbnRhdGlvblxyXG5cdFx0aWYgKHRoaXMuX3BsYXlpbmcpIHtcclxuXHRcdFx0aWYgKHRoaXMuX2NvcmUuc3RhdGUub3JpZW50YXRpb24gIT09IHdpbmRvdy5vcmllbnRhdGlvbikge1xyXG5cdFx0XHRcdHRoaXMuX2NvcmUuc3RhdGUub3JpZW50YXRpb24gPSB3aW5kb3cub3JpZW50YXRpb247XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cclxuXHQgKi9cclxuXHRWaWRlby5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xyXG5cclxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKCdjbGljay5vd2wudmlkZW8nKTtcclxuXHJcblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xyXG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuVmlkZW8gPSBWaWRlbztcclxuXHJcbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcclxuXHJcbi8qKlxyXG4gKiBBbmltYXRlIFBsdWdpblxyXG4gKiBAdmVyc2lvbiAyLjAuMFxyXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxyXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuICovXHJcbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgdGhlIGFuaW1hdGUgcGx1Z2luLlxyXG5cdCAqIEBjbGFzcyBUaGUgTmF2aWdhdGlvbiBQbHVnaW5cclxuXHQgKiBAcGFyYW0ge093bH0gc2NvcGUgLSBUaGUgT3dsIENhcm91c2VsXHJcblx0ICovXHJcblx0dmFyIEFuaW1hdGUgPSBmdW5jdGlvbihzY29wZSkge1xyXG5cdFx0dGhpcy5jb3JlID0gc2NvcGU7XHJcblx0XHR0aGlzLmNvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBbmltYXRlLkRlZmF1bHRzLCB0aGlzLmNvcmUub3B0aW9ucyk7XHJcblx0XHR0aGlzLnN3YXBwaW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMucHJldmlvdXMgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVycyA9IHtcclxuXHRcdFx0J2NoYW5nZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcclxuXHRcdFx0XHRcdHRoaXMucHJldmlvdXMgPSB0aGlzLmNvcmUuY3VycmVudCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5uZXh0ID0gZS5wcm9wZXJ0eS52YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHQnZHJhZy5vd2wuY2Fyb3VzZWwgZHJhZ2dlZC5vd2wuY2Fyb3VzZWwgdHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR0aGlzLnN3YXBwaW5nID0gZS50eXBlID09ICd0cmFuc2xhdGVkJztcclxuXHRcdFx0fSwgdGhpcyksXHJcblx0XHRcdCd0cmFuc2xhdGUub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc3dhcHBpbmcgJiYgKHRoaXMuY29yZS5vcHRpb25zLmFuaW1hdGVPdXQgfHwgdGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZUluKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zd2FwKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmNvcmUuJGVsZW1lbnQub24odGhpcy5oYW5kbGVycyk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogRGVmYXVsdCBvcHRpb25zLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRBbmltYXRlLkRlZmF1bHRzID0ge1xyXG5cdFx0YW5pbWF0ZU91dDogZmFsc2UsXHJcblx0XHRhbmltYXRlSW46IGZhbHNlXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogVG9nZ2xlcyB0aGUgYW5pbWF0aW9uIGNsYXNzZXMgd2hlbmV2ZXIgYW4gdHJhbnNsYXRpb25zIHN0YXJ0cy5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQHJldHVybnMge0Jvb2xlYW58dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdEFuaW1hdGUucHJvdG90eXBlLnN3YXAgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRpZiAodGhpcy5jb3JlLnNldHRpbmdzLml0ZW1zICE9PSAxIHx8ICF0aGlzLmNvcmUuc3VwcG9ydDNkKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvcmUuc3BlZWQoMCk7XHJcblxyXG5cdFx0dmFyIGxlZnQsXHJcblx0XHRcdGNsZWFyID0gJC5wcm94eSh0aGlzLmNsZWFyLCB0aGlzKSxcclxuXHRcdFx0cHJldmlvdXMgPSB0aGlzLmNvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5wcmV2aW91cyksXHJcblx0XHRcdG5leHQgPSB0aGlzLmNvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5uZXh0KSxcclxuXHRcdFx0aW5jb21pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluLFxyXG5cdFx0XHRvdXRnb2luZyA9IHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0O1xyXG5cclxuXHRcdGlmICh0aGlzLmNvcmUuY3VycmVudCgpID09PSB0aGlzLnByZXZpb3VzKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3V0Z29pbmcpIHtcclxuXHRcdFx0bGVmdCA9IHRoaXMuY29yZS5jb29yZGluYXRlcyh0aGlzLnByZXZpb3VzKSAtIHRoaXMuY29yZS5jb29yZGluYXRlcyh0aGlzLm5leHQpO1xyXG5cdFx0XHRwcmV2aW91cy5jc3MoIHsgJ2xlZnQnOiBsZWZ0ICsgJ3B4JyB9IClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2FuaW1hdGVkIG93bC1hbmltYXRlZC1vdXQnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcyhvdXRnb2luZylcclxuXHRcdFx0XHQub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgY2xlYXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpbmNvbWluZykge1xyXG5cdFx0XHRuZXh0LmFkZENsYXNzKCdhbmltYXRlZCBvd2wtYW5pbWF0ZWQtaW4nKVxyXG5cdFx0XHRcdC5hZGRDbGFzcyhpbmNvbWluZylcclxuXHRcdFx0XHQub25lKCd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJywgY2xlYXIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdEFuaW1hdGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0JChlLnRhcmdldCkuY3NzKCB7ICdsZWZ0JzogJycgfSApXHJcblx0XHRcdC5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCBvd2wtYW5pbWF0ZWQtaW4nKVxyXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVJbilcclxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0KTtcclxuXHRcdHRoaXMuY29yZS50cmFuc2l0aW9uRW5kKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRBbmltYXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XHJcblxyXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuaGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcclxuXHRcdH1cclxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcclxuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkFuaW1hdGUgPSBBbmltYXRlO1xyXG5cclxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xyXG5cclxuLyoqXHJcbiAqIEF1dG9wbGF5IFBsdWdpblxyXG4gKiBAdmVyc2lvbiAyLjAuMFxyXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxyXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuICovXHJcbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG9wbGF5IHBsdWdpbi5cclxuXHQgKiBAY2xhc3MgVGhlIEF1dG9wbGF5IFBsdWdpblxyXG5cdCAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcclxuXHQgKi9cclxuXHR2YXIgQXV0b3BsYXkgPSBmdW5jdGlvbihzY29wZSkge1xyXG5cdFx0dGhpcy5jb3JlID0gc2NvcGU7XHJcblx0XHR0aGlzLmNvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBdXRvcGxheS5EZWZhdWx0cywgdGhpcy5jb3JlLm9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlcnMgPSB7XHJcblx0XHRcdCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCByZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLmF1dG9wbGF5KCk7XHJcblx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHQncGxheS5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKGUsIHQsIHMpIHtcclxuXHRcdFx0XHR0aGlzLnBsYXkodCwgcyk7XHJcblx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHQnc3RvcC5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuc3RvcCgpO1xyXG5cdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0J21vdXNlb3Zlci5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0J21vdXNlbGVhdmUub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5hdXRvcGxheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgdGhpcylcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9uKHRoaXMuaGFuZGxlcnMpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0QXV0b3BsYXkuRGVmYXVsdHMgPSB7XHJcblx0XHRhdXRvcGxheTogZmFsc2UsXHJcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcblx0XHRhdXRvcGxheUhvdmVyUGF1c2U6IGZhbHNlLFxyXG5cdFx0YXV0b3BsYXlTcGVlZDogZmFsc2VcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQHRvZG8gTXVzdCBiZSBkb2N1bWVudGVkLlxyXG5cdCAqL1xyXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5hdXRvcGxheSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMuY29yZS5zZXR0aW5ncy5hdXRvcGxheSAmJiAhdGhpcy5jb3JlLnN0YXRlLnZpZGVvUGxheSkge1xyXG5cdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHJcblx0XHRcdHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoJC5wcm94eShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLnBsYXkoKTtcclxuXHRcdFx0fSwgdGhpcyksIHRoaXMuY29yZS5zZXR0aW5ncy5hdXRvcGxheVRpbWVvdXQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnRzIHRoZSBhdXRvcGxheS5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFt0aW1lb3V0XSAtIC4uLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gLi4uXHJcblx0ICogQHJldHVybnMge0Jvb2xlYW58dW5kZWZpbmVkfSAtIC4uLlxyXG5cdCAqIEB0b2RvIE11c3QgYmUgZG9jdW1lbnRlZC5cclxuXHQgKi9cclxuXHRBdXRvcGxheS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHRpbWVvdXQsIHNwZWVkKSB7XHJcblx0XHQvLyBpZiB0YWIgaXMgaW5hY3RpdmUgLSBkb2VzbnQgd29yayBpbiA8SUUxMFxyXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuY29yZS5zdGF0ZS5pc1RvdWNoIHx8IHRoaXMuY29yZS5zdGF0ZS5pc1Njcm9sbGluZ1xyXG5cdFx0XHR8fCB0aGlzLmNvcmUuc3RhdGUuaXNTd2lwaW5nIHx8IHRoaXMuY29yZS5zdGF0ZS5pbk1vdGlvbikge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuY29yZS5zZXR0aW5ncy5hdXRvcGxheSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvcmUubmV4dCh0aGlzLmNvcmUuc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU3RvcHMgdGhlIGF1dG9wbGF5LlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRBdXRvcGxheS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUGF1c2VzIHRoZSBhdXRvcGxheS5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0QXV0b3BsYXkucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxyXG5cdCAqL1xyXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XHJcblxyXG5cdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcblxyXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuaGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcclxuXHRcdH1cclxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcclxuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLmF1dG9wbGF5ID0gQXV0b3BsYXk7XHJcblxyXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XHJcblxyXG4vKipcclxuICogTmF2aWdhdGlvbiBQbHVnaW5cclxuICogQHZlcnNpb24gMi4wLjBcclxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXHJcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG4gKi9cclxuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgdGhlIG5hdmlnYXRpb24gcGx1Z2luLlxyXG5cdCAqIEBjbGFzcyBUaGUgTmF2aWdhdGlvbiBQbHVnaW5cclxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsLlxyXG5cdCAqL1xyXG5cdHZhciBOYXZpZ2F0aW9uID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHR5cGUge093bH1cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBsdWdpbiBpcyBpbml0aWFsaXplZCBvciBub3QuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBjdXJyZW50IHBhZ2luZyBpbmRleGVzLlxyXG5cdFx0ICogQHByb3RlY3RlZFxyXG5cdFx0ICogQHR5cGUge0FycmF5fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9wYWdlcyA9IFtdO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWxsIERPTSBlbGVtZW50cyBvZiB0aGUgdXNlciBpbnRlcmZhY2UuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9jb250cm9scyA9IHt9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTWFya3VwIGZvciBhbiBpbmRpY2F0b3IuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX3RlbXBsYXRlcyA9IFtdO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIGNhcm91c2VsIGVsZW1lbnQuXHJcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy5fY29yZS4kZWxlbWVudDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIE92ZXJyaWRkZW4gbWV0aG9kcyBvZiB0aGUgY2Fyb3VzZWwuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9vdmVycmlkZXMgPSB7XHJcblx0XHRcdG5leHQ6IHRoaXMuX2NvcmUubmV4dCxcclxuXHRcdFx0cHJldjogdGhpcy5fY29yZS5wcmV2LFxyXG5cdFx0XHR0bzogdGhpcy5fY29yZS50b1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xyXG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5wdXNoKCQoZS5jb250ZW50KS5maW5kKCdbZGF0YS1kb3RdJykuYW5kU2VsZignW2RhdGEtZG90XScpLmF0dHIoJ2RhdGEtZG90JykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgdGhpcyksXHJcblx0XHRcdCdhZGQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMCwgJChlLmNvbnRlbnQpLmZpbmQoJ1tkYXRhLWRvdF0nKS5hbmRTZWxmKCdbZGF0YS1kb3RdJykuYXR0cignZGF0YS1kb3QnKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0J3JlbW92ZS5vd2wuY2Fyb3VzZWwgcHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0J2NoYW5nZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5fY29yZS5zdGF0ZS5yZXZlcnQgJiYgIXRoaXMuX2NvcmUuc2V0dGluZ3MubG9vcCAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLm5hdlJld2luZCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgY3VycmVudCA9IHRoaXMuX2NvcmUuY3VycmVudCgpLFxyXG5cdFx0XHRcdFx0XHRcdG1heGltdW0gPSB0aGlzLl9jb3JlLm1heGltdW0oKSxcclxuXHRcdFx0XHRcdFx0XHRtaW5pbXVtID0gdGhpcy5fY29yZS5taW5pbXVtKCk7XHJcblx0XHRcdFx0XHRcdGUuZGF0YSA9IGUucHJvcGVydHkudmFsdWUgPiBtYXhpbXVtXHJcblx0XHRcdFx0XHRcdFx0PyBjdXJyZW50ID49IG1heGltdW0gPyBtaW5pbXVtIDogbWF4aW11bVxyXG5cdFx0XHRcdFx0XHRcdDogZS5wcm9wZXJ0eS52YWx1ZSA8IG1pbmltdW0gPyBtYXhpbXVtIDogZS5wcm9wZXJ0eS52YWx1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcclxuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgdGhpcyksXHJcblx0XHRcdCdyZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLmluaXRpYWxpemUoKTtcclxuXHRcdFx0XHRcdHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdyZWZyZXNoJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMuZHJhdygpO1xyXG5cdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncmVmcmVzaGVkJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcclxuXHRcdFx0fSwgdGhpcylcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xyXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIE5hdmlnYXRpb24uRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XHJcblxyXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcclxuXHRcdHRoaXMuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVmYXVsdCBvcHRpb25zLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKiBAdG9kbyBSZW5hbWUgYHNsaWRlQnlgIHRvIGBuYXZCeWBcclxuXHQgKi9cclxuXHROYXZpZ2F0aW9uLkRlZmF1bHRzID0ge1xyXG5cdFx0bmF2OiBmYWxzZSxcclxuXHRcdG5hdlJld2luZDogdHJ1ZSxcclxuXHRcdG5hdlRleHQ6IFsgJ3ByZXYnLCAnbmV4dCcgXSxcclxuXHRcdG5hdlNwZWVkOiBmYWxzZSxcclxuXHRcdG5hdkVsZW1lbnQ6ICdkaXYnLFxyXG5cdFx0bmF2Q29udGFpbmVyOiBmYWxzZSxcclxuXHRcdG5hdkNvbnRhaW5lckNsYXNzOiAnb3dsLW5hdicsXHJcblx0XHRuYXZDbGFzczogWyAnb3dsLXByZXYnLCAnb3dsLW5leHQnIF0sXHJcblx0XHRzbGlkZUJ5OiAxLFxyXG5cdFx0ZG90Q2xhc3M6ICdvd2wtZG90JyxcclxuXHRcdGRvdHNDbGFzczogJ293bC1kb3RzJyxcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRkb3RzRWFjaDogZmFsc2UsXHJcblx0XHRkb3REYXRhOiBmYWxzZSxcclxuXHRcdGRvdHNTcGVlZDogZmFsc2UsXHJcblx0XHRkb3RzQ29udGFpbmVyOiBmYWxzZSxcclxuXHRcdGNvbnRyb2xzQ2xhc3M6ICdvd2wtY29udHJvbHMnXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplcyB0aGUgbGF5b3V0IG9mIHRoZSBwbHVnaW4gYW5kIGV4dGVuZHMgdGhlIGNhcm91c2VsLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKi9cclxuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgJGNvbnRhaW5lciwgb3ZlcnJpZGUsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSB0aGUgaW5kaWNhdG9yIHRlbXBsYXRlXHJcblx0XHRpZiAoIW9wdGlvbnMuZG90c0RhdGEpIHtcclxuXHRcdFx0dGhpcy5fdGVtcGxhdGVzID0gWyAkKCc8ZGl2PicpXHJcblx0XHRcdFx0LmFkZENsYXNzKG9wdGlvbnMuZG90Q2xhc3MpXHJcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKSlcclxuXHRcdFx0XHQucHJvcCgnb3V0ZXJIVE1MJykgXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjcmVhdGUgY29udHJvbHMgY29udGFpbmVyIGlmIG5lZWRlZFxyXG5cdFx0aWYgKCFvcHRpb25zLm5hdkNvbnRhaW5lciB8fCAhb3B0aW9ucy5kb3RzQ29udGFpbmVyKSB7XHJcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRjb250YWluZXIgPSAkKCc8ZGl2PicpXHJcblx0XHRcdFx0LmFkZENsYXNzKG9wdGlvbnMuY29udHJvbHNDbGFzcylcclxuXHRcdFx0XHQuYXBwZW5kVG8odGhpcy4kZWxlbWVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIGFic29sdXRlIG5hdmlnYXRpb25cclxuXHRcdHRoaXMuX2NvbnRyb2xzLiRpbmRpY2F0b3JzID0gb3B0aW9ucy5kb3RzQ29udGFpbmVyID8gJChvcHRpb25zLmRvdHNDb250YWluZXIpXHJcblx0XHRcdDogJCgnPGRpdj4nKS5oaWRlKCkuYWRkQ2xhc3Mob3B0aW9ucy5kb3RzQ2xhc3MpLmFwcGVuZFRvKHRoaXMuX2NvbnRyb2xzLiRjb250YWluZXIpO1xyXG5cclxuXHRcdHRoaXMuX2NvbnRyb2xzLiRpbmRpY2F0b3JzLm9uKCdjbGljaycsICdkaXYnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dmFyIGluZGV4ID0gJChlLnRhcmdldCkucGFyZW50KCkuaXModGhpcy5fY29udHJvbHMuJGluZGljYXRvcnMpXHJcblx0XHRcdFx0PyAkKGUudGFyZ2V0KS5pbmRleCgpIDogJChlLnRhcmdldCkucGFyZW50KCkuaW5kZXgoKTtcclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdHRoaXMudG8oaW5kZXgsIG9wdGlvbnMuZG90c1NwZWVkKTtcclxuXHRcdH0sIHRoaXMpKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgcmVsYXRpdmUgbmF2aWdhdGlvblxyXG5cdFx0JGNvbnRhaW5lciA9IG9wdGlvbnMubmF2Q29udGFpbmVyID8gJChvcHRpb25zLm5hdkNvbnRhaW5lcilcclxuXHRcdFx0OiAkKCc8ZGl2PicpLmFkZENsYXNzKG9wdGlvbnMubmF2Q29udGFpbmVyQ2xhc3MpLnByZXBlbmRUbyh0aGlzLl9jb250cm9scy4kY29udGFpbmVyKTtcclxuXHJcblx0XHR0aGlzLl9jb250cm9scy4kbmV4dCA9ICQoJzwnICsgb3B0aW9ucy5uYXZFbGVtZW50ICsgJz4nKTtcclxuXHRcdHRoaXMuX2NvbnRyb2xzLiRwcmV2aW91cyA9IHRoaXMuX2NvbnRyb2xzLiRuZXh0LmNsb25lKCk7XHJcblxyXG5cdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzXHJcblx0XHRcdC5hZGRDbGFzcyhvcHRpb25zLm5hdkNsYXNzWzBdKVxyXG5cdFx0XHQuaHRtbChvcHRpb25zLm5hdlRleHRbMF0pXHJcblx0XHRcdC5oaWRlKClcclxuXHRcdFx0LnByZXBlbmRUbygkY29udGFpbmVyKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dGhpcy5wcmV2KG9wdGlvbnMubmF2U3BlZWQpO1xyXG5cdFx0XHR9LCB0aGlzKSk7XHJcblx0XHR0aGlzLl9jb250cm9scy4kbmV4dFxyXG5cdFx0XHQuYWRkQ2xhc3Mob3B0aW9ucy5uYXZDbGFzc1sxXSlcclxuXHRcdFx0Lmh0bWwob3B0aW9ucy5uYXZUZXh0WzFdKVxyXG5cdFx0XHQuaGlkZSgpXHJcblx0XHRcdC5hcHBlbmRUbygkY29udGFpbmVyKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dGhpcy5uZXh0KG9wdGlvbnMubmF2U3BlZWQpO1xyXG5cdFx0XHR9LCB0aGlzKSk7XHJcblxyXG5cdFx0Ly8gb3ZlcnJpZGUgcHVibGljIG1ldGhvZHMgb2YgdGhlIGNhcm91c2VsXHJcblx0XHRmb3IgKG92ZXJyaWRlIGluIHRoaXMuX292ZXJyaWRlcykge1xyXG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9ICQucHJveHkodGhpc1tvdmVycmlkZV0sIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICovXHJcblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGhhbmRsZXIsIGNvbnRyb2wsIHByb3BlcnR5LCBvdmVycmlkZTtcclxuXHJcblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChjb250cm9sIGluIHRoaXMuX2NvbnRyb2xzKSB7XHJcblx0XHRcdHRoaXMuX2NvbnRyb2xzW2NvbnRyb2xdLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChvdmVycmlkZSBpbiB0aGlzLm92ZXJpZGVzKSB7XHJcblx0XHRcdHRoaXMuX2NvcmVbb3ZlcnJpZGVdID0gdGhpcy5fb3ZlcnJpZGVzW292ZXJyaWRlXTtcclxuXHRcdH1cclxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcclxuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIHRoZSBpbnRlcm5hbCBzdGF0ZS5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICovXHJcblx0TmF2aWdhdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaSwgaiwgayxcclxuXHRcdFx0b3B0aW9ucyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXHJcblx0XHRcdGxvd2VyID0gdGhpcy5fY29yZS5jbG9uZXMoKS5sZW5ndGggLyAyLFxyXG5cdFx0XHR1cHBlciA9IGxvd2VyICsgdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aCxcclxuXHRcdFx0c2l6ZSA9IG9wdGlvbnMuY2VudGVyIHx8IG9wdGlvbnMuYXV0b1dpZHRoIHx8IG9wdGlvbnMuZG90RGF0YVxyXG5cdFx0XHRcdD8gMSA6IG9wdGlvbnMuZG90c0VhY2ggfHwgb3B0aW9ucy5pdGVtcztcclxuXHJcblx0XHRpZiAob3B0aW9ucy5zbGlkZUJ5ICE9PSAncGFnZScpIHtcclxuXHRcdFx0b3B0aW9ucy5zbGlkZUJ5ID0gTWF0aC5taW4ob3B0aW9ucy5zbGlkZUJ5LCBvcHRpb25zLml0ZW1zKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucy5kb3RzIHx8IG9wdGlvbnMuc2xpZGVCeSA9PSAncGFnZScpIHtcclxuXHRcdFx0dGhpcy5fcGFnZXMgPSBbXTtcclxuXHJcblx0XHRcdGZvciAoaSA9IGxvd2VyLCBqID0gMCwgayA9IDA7IGkgPCB1cHBlcjsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGogPj0gc2l6ZSB8fCBqID09PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9wYWdlcy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0c3RhcnQ6IGkgLSBsb3dlcixcclxuXHRcdFx0XHRcdFx0ZW5kOiBpIC0gbG93ZXIgKyBzaXplIC0gMVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRqID0gMCwgKytrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRqICs9IHRoaXMuX2NvcmUubWVyZ2Vycyh0aGlzLl9jb3JlLnJlbGF0aXZlKGkpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRHJhd3MgdGhlIHVzZXIgaW50ZXJmYWNlLlxyXG5cdCAqIEB0b2RvIFRoZSBvcHRpb24gYGRvdERhdGFgIHdvbnQgd29yay5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICovXHJcblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGRpZmZlcmVuY2UsIGksIGh0bWwgPSAnJyxcclxuXHRcdFx0b3B0aW9ucyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXHJcblx0XHRcdCRpdGVtcyA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCksXHJcblx0XHRcdGluZGV4ID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMubmF2ICYmICFvcHRpb25zLmxvb3AgJiYgIW9wdGlvbnMubmF2UmV3aW5kKSB7XHJcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRwcmV2aW91cy50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCBpbmRleCA8PSAwKTtcclxuXHRcdFx0dGhpcy5fY29udHJvbHMuJG5leHQudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgaW5kZXggPj0gdGhpcy5fY29yZS5tYXhpbXVtKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2NvbnRyb2xzLiRwcmV2aW91cy50b2dnbGUob3B0aW9ucy5uYXYpO1xyXG5cdFx0dGhpcy5fY29udHJvbHMuJG5leHQudG9nZ2xlKG9wdGlvbnMubmF2KTtcclxuXHJcblx0XHRpZiAob3B0aW9ucy5kb3RzKSB7XHJcblx0XHRcdGRpZmZlcmVuY2UgPSB0aGlzLl9wYWdlcy5sZW5ndGggLSB0aGlzLl9jb250cm9scy4kaW5kaWNhdG9ycy5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmRvdERhdGEgJiYgZGlmZmVyZW5jZSAhPT0gMCkge1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLl9jb250cm9scy4kaW5kaWNhdG9ycy5jaGlsZHJlbigpLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRodG1sICs9IHRoaXMuX3RlbXBsYXRlc1t0aGlzLl9jb3JlLnJlbGF0aXZlKGkpXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGluZGljYXRvcnMuaHRtbChodG1sKTtcclxuXHRcdFx0fSBlbHNlIGlmIChkaWZmZXJlbmNlID4gMCkge1xyXG5cdFx0XHRcdGh0bWwgPSBuZXcgQXJyYXkoZGlmZmVyZW5jZSArIDEpLmpvaW4odGhpcy5fdGVtcGxhdGVzWzBdKTtcclxuXHRcdFx0XHR0aGlzLl9jb250cm9scy4kaW5kaWNhdG9ycy5hcHBlbmQoaHRtbCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGlmZmVyZW5jZSA8IDApIHtcclxuXHRcdFx0XHR0aGlzLl9jb250cm9scy4kaW5kaWNhdG9ycy5jaGlsZHJlbigpLnNsaWNlKGRpZmZlcmVuY2UpLnJlbW92ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9jb250cm9scy4kaW5kaWNhdG9ycy5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR0aGlzLl9jb250cm9scy4kaW5kaWNhdG9ycy5jaGlsZHJlbigpLmVxKCQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fY29udHJvbHMuJGluZGljYXRvcnMudG9nZ2xlKG9wdGlvbnMuZG90cyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBFeHRlbmRzIGV2ZW50IGRhdGEuXHJcblx0ICogQHByb3RlY3RlZFxyXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IG9iamVjdCB3aGljaCBnZXRzIHRocm93bi5cclxuXHQgKi9cclxuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5vblRyaWdnZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0dmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcclxuXHJcblx0XHRldmVudC5wYWdlID0ge1xyXG5cdFx0XHRpbmRleDogJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcyksXHJcblx0XHRcdGNvdW50OiB0aGlzLl9wYWdlcy5sZW5ndGgsXHJcblx0XHRcdHNpemU6IHNldHRpbmdzICYmIChzZXR0aW5ncy5jZW50ZXIgfHwgc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLmRvdERhdGFcclxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcylcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHBhZ2UgcG9zaXRpb24gb2YgdGhlIGNhcm91c2VsLlxyXG5cdCAqIEBwcm90ZWN0ZWRcclxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxyXG5cdCAqL1xyXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBpbmRleCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpO1xyXG5cdFx0cmV0dXJuICQuZ3JlcCh0aGlzLl9wYWdlcywgZnVuY3Rpb24obykge1xyXG5cdFx0XHRyZXR1cm4gby5zdGFydCA8PSBpbmRleCAmJiBvLmVuZCA+PSBpbmRleDtcclxuXHRcdH0pLnBvcCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyB0aGUgY3VycmVudCBzdWNjZXNvci9wcmVkZWNlc3NvciBwb3NpdGlvbi5cclxuXHQgKiBAcHJvdGVjdGVkXHJcblx0ICogQHJldHVybnMge051bWJlcn1cclxuXHQgKi9cclxuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHN1Y2Nlc3Nvcikge1xyXG5cdFx0dmFyIHBvc2l0aW9uLCBsZW5ndGgsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xyXG5cclxuXHRcdGlmIChvcHRpb25zLnNsaWRlQnkgPT0gJ3BhZ2UnKSB7XHJcblx0XHRcdHBvc2l0aW9uID0gJC5pbkFycmF5KHRoaXMuY3VycmVudCgpLCB0aGlzLl9wYWdlcyk7XHJcblx0XHRcdGxlbmd0aCA9IHRoaXMuX3BhZ2VzLmxlbmd0aDtcclxuXHRcdFx0c3VjY2Vzc29yID8gKytwb3NpdGlvbiA6IC0tcG9zaXRpb247XHJcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fcGFnZXNbKChwb3NpdGlvbiAlIGxlbmd0aCkgKyBsZW5ndGgpICUgbGVuZ3RoXS5zdGFydDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XHJcblx0XHRcdGxlbmd0aCA9IHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGg7XHJcblx0XHRcdHN1Y2Nlc3NvciA/IHBvc2l0aW9uICs9IG9wdGlvbnMuc2xpZGVCeSA6IHBvc2l0aW9uIC09IG9wdGlvbnMuc2xpZGVCeTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwb3NpdGlvbjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNsaWRlcyB0byB0aGUgbmV4dCBpdGVtIG9yIHBhZ2UuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cclxuXHQgKi9cclxuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcclxuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKHRydWUpLCBzcGVlZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTbGlkZXMgdG8gdGhlIHByZXZpb3VzIGl0ZW0gb3IgcGFnZS5cclxuXHQgKiBAcHVibGljXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZD1mYWxzZV0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxyXG5cdCAqL1xyXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xyXG5cdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuZ2V0UG9zaXRpb24oZmFsc2UpLCBzcGVlZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtIG9yIHBhZ2UuXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSBvciBwYWdlLlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFuZGFyZD1mYWxzZV0gLSBXaGV0aGVyIHRvIHVzZSB0aGUgc3RhbmRhcmQgYmVoYXZpb3VyIG9yIG5vdC5cclxuXHQgKi9cclxuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCwgc3RhbmRhcmQpIHtcclxuXHRcdHZhciBsZW5ndGg7XHJcblxyXG5cdFx0aWYgKCFzdGFuZGFyZCkge1xyXG5cdFx0XHRsZW5ndGggPSB0aGlzLl9wYWdlcy5sZW5ndGg7XHJcblx0XHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLl9wYWdlc1soKHBvc2l0aW9uICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGhdLnN0YXJ0LCBzcGVlZCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkLnByb3h5KHRoaXMuX292ZXJyaWRlcy50bywgdGhpcy5fY29yZSkocG9zaXRpb24sIHNwZWVkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5OYXZpZ2F0aW9uID0gTmF2aWdhdGlvbjtcclxuXHJcbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcclxuXHJcbi8qKlxyXG4gKiBIYXNoIFBsdWdpblxyXG4gKiBAdmVyc2lvbiAyLjAuMFxyXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcclxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqL1xyXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlcyB0aGUgaGFzaCBwbHVnaW4uXHJcblx0ICogQGNsYXNzIFRoZSBIYXNoIFBsdWdpblxyXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcclxuXHQgKi9cclxuXHR2YXIgSGFzaCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cclxuXHRcdCAqIEBwcm90ZWN0ZWRcclxuXHRcdCAqIEB0eXBlIHtPd2x9XHJcblx0XHQgKi9cclxuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEhhc2ggdGFibGUgZm9yIHRoZSBoYXNoZXMuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9oYXNoZXMgPSB7fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBjYXJvdXNlbCBlbGVtZW50LlxyXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuX2NvcmUuJGVsZW1lbnQ7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXHJcblx0XHQgKiBAcHJvdGVjdGVkXHJcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcclxuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbiA9PSAnVVJMSGFzaCcpIHtcclxuXHRcdFx0XHRcdCQod2luZG93KS50cmlnZ2VyKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHZhciBoYXNoID0gJChlLmNvbnRlbnQpLmZpbmQoJ1tkYXRhLWhhc2hdJykuYW5kU2VsZignW2RhdGEtaGFzaF0nKS5hdHRyKCdkYXRhLWhhc2gnKTtcclxuXHRcdFx0XHR0aGlzLl9oYXNoZXNbaGFzaF0gPSBlLmNvbnRlbnQ7XHJcblx0XHRcdH0sIHRoaXMpXHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcclxuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBIYXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xyXG5cclxuXHRcdC8vIHJlZ2lzdGVyIHRoZSBldmVudCBoYW5kbGVyc1xyXG5cdFx0dGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XHJcblxyXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXIgZm9yIGhhc2ggbmF2aWdhdGlvblxyXG5cdFx0JCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJywgJC5wcm94eShmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXHJcblx0XHRcdFx0aXRlbXMgPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLFxyXG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5faGFzaGVzW2hhc2hdICYmIGl0ZW1zLmluZGV4KHRoaXMuX2hhc2hlc1toYXNoXSkgfHwgMDtcclxuXHJcblx0XHRcdGlmICghaGFzaCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fY29yZS50byhwb3NpdGlvbiwgZmFsc2UsIHRydWUpO1xyXG5cdFx0fSwgdGhpcykpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVmYXVsdCBvcHRpb25zLlxyXG5cdCAqIEBwdWJsaWNcclxuXHQgKi9cclxuXHRIYXNoLkRlZmF1bHRzID0ge1xyXG5cdFx0VVJMaGFzaExpc3RlbmVyOiBmYWxzZVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cclxuXHQgKiBAcHVibGljXHJcblx0ICovXHJcblx0SGFzaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xyXG5cclxuXHRcdCQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nKTtcclxuXHJcblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcclxuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xyXG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5IYXNoID0gSGFzaDtcclxuXHJcbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcclxuLyohIG93bC5jYXJvdXNlbDIudGh1bWJzIC0gdjAuMS44IHwgKGMpIDIwMTYgQGdpanNyb2dlIHwgTUlUIGxpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vZ2lqc3JvZ2UvT3dsQ2Fyb3VzZWwyLVRodW1icyAqL1xyXG4hZnVuY3Rpb24oYSxiLGMsZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ZnVuY3Rpb24oYil7dGhpcy5vd2w9Yix0aGlzLl90aHVtYmNvbnRlbnQ9W10sdGhpcy5faWRlbnRpZmllcj0wLHRoaXMub3dsX2N1cnJlbnRpdGVtPXRoaXMub3dsLm9wdGlvbnMuc3RhcnRQb3NpdGlvbix0aGlzLiRlbGVtZW50PXRoaXMub3dsLiRlbGVtZW50LHRoaXMuX2hhbmRsZXJzPXtcInByZXBhcmVkLm93bC5jYXJvdXNlbFwiOmEucHJveHkoZnVuY3Rpb24oYil7aWYoIWIubmFtZXNwYWNlfHwhdGhpcy5vd2wub3B0aW9ucy50aHVtYnN8fHRoaXMub3dsLm9wdGlvbnMudGh1bWJJbWFnZXx8dGhpcy5vd2wub3B0aW9ucy50aHVtYnNQcmVyZW5kZXJlZHx8dGhpcy5vd2wub3B0aW9ucy50aHVtYkltYWdlKXtpZihiLm5hbWVzcGFjZSYmdGhpcy5vd2wub3B0aW9ucy50aHVtYnMmJnRoaXMub3dsLm9wdGlvbnMudGh1bWJJbWFnZSl7dmFyIGM9YShiLmNvbnRlbnQpLmZpbmQoXCJpbWdcIik7dGhpcy5fdGh1bWJjb250ZW50LnB1c2goYyl9fWVsc2UgYShiLmNvbnRlbnQpLmZpbmQoXCJbZGF0YS10aHVtYl1cIikuYXR0cihcImRhdGEtdGh1bWJcIikhPT1kJiZ0aGlzLl90aHVtYmNvbnRlbnQucHVzaChhKGIuY29udGVudCkuZmluZChcIltkYXRhLXRodW1iXVwiKS5hdHRyKFwiZGF0YS10aHVtYlwiKSl9LHRoaXMpLFwiaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsXCI6YS5wcm94eShmdW5jdGlvbihhKXthLm5hbWVzcGFjZSYmdGhpcy5vd2wub3B0aW9ucy50aHVtYnMmJih0aGlzLnJlbmRlcigpLHRoaXMubGlzdGVuKCksdGhpcy5faWRlbnRpZmllcj10aGlzLm93bC4kZWxlbWVudC5kYXRhKFwic2xpZGVyLWlkXCIpLHRoaXMuc2V0QWN0aXZlKCkpfSx0aGlzKSxcImNoYW5nZWQub3dsLmNhcm91c2VsXCI6YS5wcm94eShmdW5jdGlvbihhKXthLm5hbWVzcGFjZSYmXCJwb3NpdGlvblwiPT09YS5wcm9wZXJ0eS5uYW1lJiZ0aGlzLm93bC5vcHRpb25zLnRodW1icyYmKHRoaXMuX2lkZW50aWZpZXI9dGhpcy5vd2wuJGVsZW1lbnQuZGF0YShcInNsaWRlci1pZFwiKSx0aGlzLnNldEFjdGl2ZSgpKX0sdGhpcyl9LHRoaXMub3dsLm9wdGlvbnM9YS5leHRlbmQoe30sZS5EZWZhdWx0cyx0aGlzLm93bC5vcHRpb25zKSx0aGlzLm93bC4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyl9O2UuRGVmYXVsdHM9e3RodW1iczohMCx0aHVtYkltYWdlOiExLHRodW1iQ29udGFpbmVyQ2xhc3M6XCJvd2wtdGh1bWJzXCIsdGh1bWJJdGVtQ2xhc3M6XCJvd2wtdGh1bWItaXRlbVwiLG1vdmVUaHVtYnNJbnNpZGU6ITF9LGUucHJvdG90eXBlLmxpc3Rlbj1mdW5jdGlvbigpe3ZhciBiPXRoaXMub3dsLm9wdGlvbnM7Yi50aHVtYnNQcmVyZW5kZXJlZCYmKHRoaXMuX3RodW1iY29udGVudC5fdGh1bWJjb250YWluZXI9YShcIi5cIitiLnRodW1iQ29udGFpbmVyQ2xhc3MpKSxhKHRoaXMuX3RodW1iY29udGVudC5fdGh1bWJjb250YWluZXIpLm9uKFwiY2xpY2tcIix0aGlzLl90aHVtYmNvbnRlbnQuX3RodW1iY29udGFpbmVyLmNoaWxkcmVuKCksYS5wcm94eShmdW5jdGlvbihjKXt0aGlzLl9pZGVudGlmaWVyPWEoYy50YXJnZXQpLmNsb3Nlc3QoXCIuXCIrYi50aHVtYkNvbnRhaW5lckNsYXNzKS5kYXRhKFwic2xpZGVyLWlkXCIpO3ZhciBkPWEoYy50YXJnZXQpLnBhcmVudCgpLmlzKHRoaXMuX3RodW1iY29udGVudC5fdGh1bWJjb250YWluZXIpP2EoYy50YXJnZXQpLmluZGV4KCk6YShjLnRhcmdldCkuY2xvc2VzdChcIi5cIitiLnRodW1iSXRlbUNsYXNzKS5pbmRleCgpO2IudGh1bWJzUHJlcmVuZGVyZWQ/YShcIltkYXRhLXNsaWRlci1pZD1cIit0aGlzLl9pZGVudGlmaWVyK1wiXVwiKS50cmlnZ2VyKFwidG8ub3dsLmNhcm91c2VsXCIsW2QsYi5kb3RzU3BlZWQsITBdKTp0aGlzLm93bC50byhkLGIuZG90c1NwZWVkKSxjLnByZXZlbnREZWZhdWx0KCl9LHRoaXMpKX0sZS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5vd2wub3B0aW9ucztiLnRodW1ic1ByZXJlbmRlcmVkPyh0aGlzLl90aHVtYmNvbnRlbnQuX3RodW1iY29udGFpbmVyPWEoXCIuXCIrYi50aHVtYkNvbnRhaW5lckNsYXNzKSxiLm1vdmVUaHVtYnNJbnNpZGUmJnRoaXMuX3RodW1iY29udGVudC5fdGh1bWJjb250YWluZXIuYXBwZW5kVG8odGhpcy4kZWxlbWVudCkpOnRoaXMuX3RodW1iY29udGVudC5fdGh1bWJjb250YWluZXI9YShcIjxkaXY+XCIpLmFkZENsYXNzKGIudGh1bWJDb250YWluZXJDbGFzcykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCk7dmFyIGM7aWYoYi50aHVtYkltYWdlKWZvcihjPTA7Yzx0aGlzLl90aHVtYmNvbnRlbnQubGVuZ3RoOysrYyl0aGlzLl90aHVtYmNvbnRlbnQuX3RodW1iY29udGFpbmVyLmFwcGVuZChcIjxidXR0b24gY2xhc3M9XCIrYi50aHVtYkl0ZW1DbGFzcysnPjxpbWcgc3JjPVwiJyt0aGlzLl90aHVtYmNvbnRlbnRbY10uYXR0cihcInNyY1wiKSsnXCIgYWx0PVwiJyt0aGlzLl90aHVtYmNvbnRlbnRbY10uYXR0cihcImFsdFwiKSsnXCIgLz48L2J1dHRvbj4nKTtlbHNlIGZvcihjPTA7Yzx0aGlzLl90aHVtYmNvbnRlbnQubGVuZ3RoOysrYyl0aGlzLl90aHVtYmNvbnRlbnQuX3RodW1iY29udGFpbmVyLmFwcGVuZChcIjxidXR0b24gY2xhc3M9XCIrYi50aHVtYkl0ZW1DbGFzcytcIj5cIit0aGlzLl90aHVtYmNvbnRlbnRbY10rXCI8L2J1dHRvbj5cIil9LGUucHJvdG90eXBlLnNldEFjdGl2ZT1mdW5jdGlvbigpe3RoaXMub3dsX2N1cnJlbnRpdGVtPXRoaXMub3dsLl9jdXJyZW50LXRoaXMub3dsLl9jbG9uZXMubGVuZ3RoLzIsdGhpcy5vd2xfY3VycmVudGl0ZW09PT10aGlzLm93bC5faXRlbXMubGVuZ3RoJiYodGhpcy5vd2xfY3VycmVudGl0ZW09MCk7dmFyIGI9dGhpcy5vd2wub3B0aW9ucyxjPWIudGh1bWJzUHJlcmVuZGVyZWQ/YShcIi5cIitiLnRodW1iQ29udGFpbmVyQ2xhc3MrJ1tkYXRhLXNsaWRlci1pZD1cIicrdGhpcy5faWRlbnRpZmllcisnXCJdJyk6dGhpcy5fdGh1bWJjb250ZW50Ll90aHVtYmNvbnRhaW5lcjtjLmNoaWxkcmVuKCkuZmlsdGVyKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxjLmNoaWxkcmVuKCkuZXEodGhpcy5vd2xfY3VycmVudGl0ZW0pLmFkZENsYXNzKFwiYWN0aXZlXCIpfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGEsYjtmb3IoYSBpbiB0aGlzLl9oYW5kbGVycyl0aGlzLm93bC4kZWxlbWVudC5vZmYoYSx0aGlzLl9oYW5kbGVyc1thXSk7Zm9yKGIgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1tiXSYmKHRoaXNbYl09bnVsbCl9LGEuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5UaHVtYnM9ZX0od2luZG93LlplcHRvfHx3aW5kb3cualF1ZXJ5LHdpbmRvdyxkb2N1bWVudCk7XHJcbi8qXHJcbiAgICAgXyBfICAgICAgXyAgICAgICBfXHJcbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xyXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XHJcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXHJcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xyXG4gICAgICAgICAgICAgICAgICAgfF9fL1xyXG5cclxuIFZlcnNpb246IDEuNS45XHJcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXHJcbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcclxuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcclxuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXHJcblxyXG4gKi9cclxuIWZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcImpxdWVyeVwiKSk6YShqUXVlcnkpfShmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj13aW5kb3cuU2xpY2t8fHt9O2I9ZnVuY3Rpb24oKXtmdW5jdGlvbiBjKGMsZCl7dmFyIGYsZT10aGlzO2UuZGVmYXVsdHM9e2FjY2Vzc2liaWxpdHk6ITAsYWRhcHRpdmVIZWlnaHQ6ITEsYXBwZW5kQXJyb3dzOmEoYyksYXBwZW5kRG90czphKGMpLGFycm93czohMCxhc05hdkZvcjpudWxsLHByZXZBcnJvdzonPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1yb2xlPVwibm9uZVwiIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsbmV4dEFycm93Oic8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsYXV0b3BsYXk6ITEsYXV0b3BsYXlTcGVlZDozZTMsY2VudGVyTW9kZTohMSxjZW50ZXJQYWRkaW5nOlwiNTBweFwiLGNzc0Vhc2U6XCJlYXNlXCIsY3VzdG9tUGFnaW5nOmZ1bmN0aW9uKGEsYil7cmV0dXJuJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtcm9sZT1cIm5vbmVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1yZXF1aXJlZD1cImZhbHNlXCIgdGFiaW5kZXg9XCIwXCI+JysoYisxKStcIjwvYnV0dG9uPlwifSxkb3RzOiExLGRvdHNDbGFzczpcInNsaWNrLWRvdHNcIixkcmFnZ2FibGU6ITAsZWFzaW5nOlwibGluZWFyXCIsZWRnZUZyaWN0aW9uOi4zNSxmYWRlOiExLGZvY3VzT25TZWxlY3Q6ITEsaW5maW5pdGU6ITAsaW5pdGlhbFNsaWRlOjAsbGF6eUxvYWQ6XCJvbmRlbWFuZFwiLG1vYmlsZUZpcnN0OiExLHBhdXNlT25Ib3ZlcjohMCxwYXVzZU9uRG90c0hvdmVyOiExLHJlc3BvbmRUbzpcIndpbmRvd1wiLHJlc3BvbnNpdmU6bnVsbCxyb3dzOjEscnRsOiExLHNsaWRlOlwiXCIsc2xpZGVzUGVyUm93OjEsc2xpZGVzVG9TaG93OjEsc2xpZGVzVG9TY3JvbGw6MSxzcGVlZDo1MDAsc3dpcGU6ITAsc3dpcGVUb1NsaWRlOiExLHRvdWNoTW92ZTohMCx0b3VjaFRocmVzaG9sZDo1LHVzZUNTUzohMCx1c2VUcmFuc2Zvcm06ITEsdmFyaWFibGVXaWR0aDohMSx2ZXJ0aWNhbDohMSx2ZXJ0aWNhbFN3aXBpbmc6ITEsd2FpdEZvckFuaW1hdGU6ITAsekluZGV4OjFlM30sZS5pbml0aWFscz17YW5pbWF0aW5nOiExLGRyYWdnaW5nOiExLGF1dG9QbGF5VGltZXI6bnVsbCxjdXJyZW50RGlyZWN0aW9uOjAsY3VycmVudExlZnQ6bnVsbCxjdXJyZW50U2xpZGU6MCxkaXJlY3Rpb246MSwkZG90czpudWxsLGxpc3RXaWR0aDpudWxsLGxpc3RIZWlnaHQ6bnVsbCxsb2FkSW5kZXg6MCwkbmV4dEFycm93Om51bGwsJHByZXZBcnJvdzpudWxsLHNsaWRlQ291bnQ6bnVsbCxzbGlkZVdpZHRoOm51bGwsJHNsaWRlVHJhY2s6bnVsbCwkc2xpZGVzOm51bGwsc2xpZGluZzohMSxzbGlkZU9mZnNldDowLHN3aXBlTGVmdDpudWxsLCRsaXN0Om51bGwsdG91Y2hPYmplY3Q6e30sdHJhbnNmb3Jtc0VuYWJsZWQ6ITEsdW5zbGlja2VkOiExfSxhLmV4dGVuZChlLGUuaW5pdGlhbHMpLGUuYWN0aXZlQnJlYWtwb2ludD1udWxsLGUuYW5pbVR5cGU9bnVsbCxlLmFuaW1Qcm9wPW51bGwsZS5icmVha3BvaW50cz1bXSxlLmJyZWFrcG9pbnRTZXR0aW5ncz1bXSxlLmNzc1RyYW5zaXRpb25zPSExLGUuaGlkZGVuPVwiaGlkZGVuXCIsZS5wYXVzZWQ9ITEsZS5wb3NpdGlvblByb3A9bnVsbCxlLnJlc3BvbmRUbz1udWxsLGUucm93Q291bnQ9MSxlLnNob3VsZENsaWNrPSEwLGUuJHNsaWRlcj1hKGMpLGUuJHNsaWRlc0NhY2hlPW51bGwsZS50cmFuc2Zvcm1UeXBlPW51bGwsZS50cmFuc2l0aW9uVHlwZT1udWxsLGUudmlzaWJpbGl0eUNoYW5nZT1cInZpc2liaWxpdHljaGFuZ2VcIixlLndpbmRvd1dpZHRoPTAsZS53aW5kb3dUaW1lcj1udWxsLGY9YShjKS5kYXRhKFwic2xpY2tcIil8fHt9LGUub3B0aW9ucz1hLmV4dGVuZCh7fSxlLmRlZmF1bHRzLGYsZCksZS5jdXJyZW50U2xpZGU9ZS5vcHRpb25zLmluaXRpYWxTbGlkZSxlLm9yaWdpbmFsU2V0dGluZ3M9ZS5vcHRpb25zLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4/KGUuaGlkZGVuPVwibW96SGlkZGVuXCIsZS52aXNpYmlsaXR5Q2hhbmdlPVwibW96dmlzaWJpbGl0eWNoYW5nZVwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuJiYoZS5oaWRkZW49XCJ3ZWJraXRIaWRkZW5cIixlLnZpc2liaWxpdHlDaGFuZ2U9XCJ3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlXCIpLGUuYXV0b1BsYXk9YS5wcm94eShlLmF1dG9QbGF5LGUpLGUuYXV0b1BsYXlDbGVhcj1hLnByb3h5KGUuYXV0b1BsYXlDbGVhcixlKSxlLmNoYW5nZVNsaWRlPWEucHJveHkoZS5jaGFuZ2VTbGlkZSxlKSxlLmNsaWNrSGFuZGxlcj1hLnByb3h5KGUuY2xpY2tIYW5kbGVyLGUpLGUuc2VsZWN0SGFuZGxlcj1hLnByb3h5KGUuc2VsZWN0SGFuZGxlcixlKSxlLnNldFBvc2l0aW9uPWEucHJveHkoZS5zZXRQb3NpdGlvbixlKSxlLnN3aXBlSGFuZGxlcj1hLnByb3h5KGUuc3dpcGVIYW5kbGVyLGUpLGUuZHJhZ0hhbmRsZXI9YS5wcm94eShlLmRyYWdIYW5kbGVyLGUpLGUua2V5SGFuZGxlcj1hLnByb3h5KGUua2V5SGFuZGxlcixlKSxlLmF1dG9QbGF5SXRlcmF0b3I9YS5wcm94eShlLmF1dG9QbGF5SXRlcmF0b3IsZSksZS5pbnN0YW5jZVVpZD1iKyssZS5odG1sRXhwcj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC8sZS5yZWdpc3RlckJyZWFrcG9pbnRzKCksZS5pbml0KCEwKSxlLmNoZWNrUmVzcG9uc2l2ZSghMCl9dmFyIGI9MDtyZXR1cm4gY30oKSxiLnByb3RvdHlwZS5hZGRTbGlkZT1iLnByb3RvdHlwZS5zbGlja0FkZD1mdW5jdGlvbihiLGMsZCl7dmFyIGU9dGhpcztpZihcImJvb2xlYW5cIj09dHlwZW9mIGMpZD1jLGM9bnVsbDtlbHNlIGlmKDA+Y3x8Yz49ZS5zbGlkZUNvdW50KXJldHVybiExO2UudW5sb2FkKCksXCJudW1iZXJcIj09dHlwZW9mIGM/MD09PWMmJjA9PT1lLiRzbGlkZXMubGVuZ3RoP2EoYikuYXBwZW5kVG8oZS4kc2xpZGVUcmFjayk6ZD9hKGIpLmluc2VydEJlZm9yZShlLiRzbGlkZXMuZXEoYykpOmEoYikuaW5zZXJ0QWZ0ZXIoZS4kc2xpZGVzLmVxKGMpKTpkPT09ITA/YShiKS5wcmVwZW5kVG8oZS4kc2xpZGVUcmFjayk6YShiKS5hcHBlbmRUbyhlLiRzbGlkZVRyYWNrKSxlLiRzbGlkZXM9ZS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLGUuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxlLiRzbGlkZVRyYWNrLmFwcGVuZChlLiRzbGlkZXMpLGUuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGIsYyl7YShjKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLGIpfSksZS4kc2xpZGVzQ2FjaGU9ZS4kc2xpZGVzLGUucmVpbml0KCl9LGIucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2lmKDE9PT1hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQ9PT0hMCYmYS5vcHRpb25zLnZlcnRpY2FsPT09ITEpe3ZhciBiPWEuJHNsaWRlcy5lcShhLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQoITApO2EuJGxpc3QuYW5pbWF0ZSh7aGVpZ2h0OmJ9LGEub3B0aW9ucy5zcGVlZCl9fSxiLnByb3RvdHlwZS5hbmltYXRlU2xpZGU9ZnVuY3Rpb24oYixjKXt2YXIgZD17fSxlPXRoaXM7ZS5hbmltYXRlSGVpZ2h0KCksZS5vcHRpb25zLnJ0bD09PSEwJiZlLm9wdGlvbnMudmVydGljYWw9PT0hMSYmKGI9LWIpLGUudHJhbnNmb3Jtc0VuYWJsZWQ9PT0hMT9lLm9wdGlvbnMudmVydGljYWw9PT0hMT9lLiRzbGlkZVRyYWNrLmFuaW1hdGUoe2xlZnQ6Yn0sZS5vcHRpb25zLnNwZWVkLGUub3B0aW9ucy5lYXNpbmcsYyk6ZS4kc2xpZGVUcmFjay5hbmltYXRlKHt0b3A6Yn0sZS5vcHRpb25zLnNwZWVkLGUub3B0aW9ucy5lYXNpbmcsYyk6ZS5jc3NUcmFuc2l0aW9ucz09PSExPyhlLm9wdGlvbnMucnRsPT09ITAmJihlLmN1cnJlbnRMZWZ0PS1lLmN1cnJlbnRMZWZ0KSxhKHthbmltU3RhcnQ6ZS5jdXJyZW50TGVmdH0pLmFuaW1hdGUoe2FuaW1TdGFydDpifSx7ZHVyYXRpb246ZS5vcHRpb25zLnNwZWVkLGVhc2luZzplLm9wdGlvbnMuZWFzaW5nLHN0ZXA6ZnVuY3Rpb24oYSl7YT1NYXRoLmNlaWwoYSksZS5vcHRpb25zLnZlcnRpY2FsPT09ITE/KGRbZS5hbmltVHlwZV09XCJ0cmFuc2xhdGUoXCIrYStcInB4LCAwcHgpXCIsZS4kc2xpZGVUcmFjay5jc3MoZCkpOihkW2UuYW5pbVR5cGVdPVwidHJhbnNsYXRlKDBweCxcIithK1wicHgpXCIsZS4kc2xpZGVUcmFjay5jc3MoZCkpfSxjb21wbGV0ZTpmdW5jdGlvbigpe2MmJmMuY2FsbCgpfX0pKTooZS5hcHBseVRyYW5zaXRpb24oKSxiPU1hdGguY2VpbChiKSxlLm9wdGlvbnMudmVydGljYWw9PT0hMT9kW2UuYW5pbVR5cGVdPVwidHJhbnNsYXRlM2QoXCIrYitcInB4LCAwcHgsIDBweClcIjpkW2UuYW5pbVR5cGVdPVwidHJhbnNsYXRlM2QoMHB4LFwiK2IrXCJweCwgMHB4KVwiLGUuJHNsaWRlVHJhY2suY3NzKGQpLGMmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmRpc2FibGVUcmFuc2l0aW9uKCksYy5jYWxsKCl9LGUub3B0aW9ucy5zcGVlZCkpfSxiLnByb3RvdHlwZS5hc05hdkZvcj1mdW5jdGlvbihiKXt2YXIgYz10aGlzLGQ9Yy5vcHRpb25zLmFzTmF2Rm9yO2QmJm51bGwhPT1kJiYoZD1hKGQpLm5vdChjLiRzbGlkZXIpKSxudWxsIT09ZCYmXCJvYmplY3RcIj09dHlwZW9mIGQmJmQuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcykuc2xpY2soXCJnZXRTbGlja1wiKTtjLnVuc2xpY2tlZHx8Yy5zbGlkZUhhbmRsZXIoYiwhMCl9KX0sYi5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz17fTtiLm9wdGlvbnMuZmFkZT09PSExP2NbYi50cmFuc2l0aW9uVHlwZV09Yi50cmFuc2Zvcm1UeXBlK1wiIFwiK2Iub3B0aW9ucy5zcGVlZCtcIm1zIFwiK2Iub3B0aW9ucy5jc3NFYXNlOmNbYi50cmFuc2l0aW9uVHlwZV09XCJvcGFjaXR5IFwiK2Iub3B0aW9ucy5zcGVlZCtcIm1zIFwiK2Iub3B0aW9ucy5jc3NFYXNlLGIub3B0aW9ucy5mYWRlPT09ITE/Yi4kc2xpZGVUcmFjay5jc3MoYyk6Yi4kc2xpZGVzLmVxKGEpLmNzcyhjKX0sYi5wcm90b3R5cGUuYXV0b1BsYXk9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EuYXV0b1BsYXlUaW1lciYmY2xlYXJJbnRlcnZhbChhLmF1dG9QbGF5VGltZXIpLGEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLnBhdXNlZCE9PSEwJiYoYS5hdXRvUGxheVRpbWVyPXNldEludGVydmFsKGEuYXV0b1BsYXlJdGVyYXRvcixhLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCkpfSxiLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLmF1dG9QbGF5VGltZXImJmNsZWFySW50ZXJ2YWwoYS5hdXRvUGxheVRpbWVyKX0sYi5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvcj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5vcHRpb25zLmluZmluaXRlPT09ITE/MT09PWEuZGlyZWN0aW9uPyhhLmN1cnJlbnRTbGlkZSsxPT09YS5zbGlkZUNvdW50LTEmJihhLmRpcmVjdGlvbj0wKSxhLnNsaWRlSGFuZGxlcihhLmN1cnJlbnRTbGlkZSthLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKTooYS5jdXJyZW50U2xpZGUtMT09PTAmJihhLmRpcmVjdGlvbj0xKSxhLnNsaWRlSGFuZGxlcihhLmN1cnJlbnRTbGlkZS1hLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKTphLnNsaWRlSGFuZGxlcihhLmN1cnJlbnRTbGlkZSthLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpfSxiLnByb3RvdHlwZS5idWlsZEFycm93cz1mdW5jdGlvbigpe3ZhciBiPXRoaXM7Yi5vcHRpb25zLmFycm93cz09PSEwJiYoYi4kcHJldkFycm93PWEoYi5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1hcnJvd1wiKSxiLiRuZXh0QXJyb3c9YShiLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcyhcInNsaWNrLWFycm93XCIpLGIuc2xpZGVDb3VudD5iLm9wdGlvbnMuc2xpZGVzVG9TaG93PyhiLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIHRhYmluZGV4XCIpLGIuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gdGFiaW5kZXhcIiksYi5odG1sRXhwci50ZXN0KGIub3B0aW9ucy5wcmV2QXJyb3cpJiZiLiRwcmV2QXJyb3cucHJlcGVuZFRvKGIub3B0aW9ucy5hcHBlbmRBcnJvd3MpLGIuaHRtbEV4cHIudGVzdChiLm9wdGlvbnMubmV4dEFycm93KSYmYi4kbmV4dEFycm93LmFwcGVuZFRvKGIub3B0aW9ucy5hcHBlbmRBcnJvd3MpLGIub3B0aW9ucy5pbmZpbml0ZSE9PSEwJiZiLiRwcmV2QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSk6Yi4kcHJldkFycm93LmFkZChiLiRuZXh0QXJyb3cpLmFkZENsYXNzKFwic2xpY2staGlkZGVuXCIpLmF0dHIoe1wiYXJpYS1kaXNhYmxlZFwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiLTFcIn0pKX0sYi5wcm90b3R5cGUuYnVpbGREb3RzPWZ1bmN0aW9uKCl7dmFyIGMsZCxiPXRoaXM7aWYoYi5vcHRpb25zLmRvdHM9PT0hMCYmYi5zbGlkZUNvdW50PmIub3B0aW9ucy5zbGlkZXNUb1Nob3cpe2ZvcihkPSc8dWwgY2xhc3M9XCInK2Iub3B0aW9ucy5kb3RzQ2xhc3MrJ1wiPicsYz0wO2M8PWIuZ2V0RG90Q291bnQoKTtjKz0xKWQrPVwiPGxpPlwiK2Iub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLGIsYykrXCI8L2xpPlwiO2QrPVwiPC91bD5cIixiLiRkb3RzPWEoZCkuYXBwZW5kVG8oYi5vcHRpb25zLmFwcGVuZERvdHMpLGIuJGRvdHMuZmluZChcImxpXCIpLmZpcnN0KCkuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKX19LGIucHJvdG90eXBlLmJ1aWxkT3V0PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztiLiRzbGlkZXM9Yi4kc2xpZGVyLmNoaWxkcmVuKGIub3B0aW9ucy5zbGlkZStcIjpub3QoLnNsaWNrLWNsb25lZClcIikuYWRkQ2xhc3MoXCJzbGljay1zbGlkZVwiKSxiLnNsaWRlQ291bnQ9Yi4kc2xpZGVzLmxlbmd0aCxiLiRzbGlkZXMuZWFjaChmdW5jdGlvbihiLGMpe2EoYykuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIixiKS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIsYShjKS5hdHRyKFwic3R5bGVcIil8fFwiXCIpfSksYi4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stc2xpZGVyXCIpLGIuJHNsaWRlVHJhY2s9MD09PWIuc2xpZGVDb3VudD9hKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oYi4kc2xpZGVyKTpiLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpLGIuJGxpc3Q9Yi4kc2xpZGVUcmFjay53cmFwKCc8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKSxiLiRzbGlkZVRyYWNrLmNzcyhcIm9wYWNpdHlcIiwwKSwoYi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMHx8Yi5vcHRpb25zLnN3aXBlVG9TbGlkZT09PSEwKSYmKGIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbD0xKSxhKFwiaW1nW2RhdGEtbGF6eV1cIixiLiRzbGlkZXIpLm5vdChcIltzcmNdXCIpLmFkZENsYXNzKFwic2xpY2stbG9hZGluZ1wiKSxiLnNldHVwSW5maW5pdGUoKSxiLmJ1aWxkQXJyb3dzKCksYi5idWlsZERvdHMoKSxiLnVwZGF0ZURvdHMoKSxiLnNldFNsaWRlQ2xhc3NlcyhcIm51bWJlclwiPT10eXBlb2YgYi5jdXJyZW50U2xpZGU/Yi5jdXJyZW50U2xpZGU6MCksYi5vcHRpb25zLmRyYWdnYWJsZT09PSEwJiZiLiRsaXN0LmFkZENsYXNzKFwiZHJhZ2dhYmxlXCIpfSxiLnByb3RvdHlwZS5idWlsZFJvd3M9ZnVuY3Rpb24oKXt2YXIgYixjLGQsZSxmLGcsaCxhPXRoaXM7aWYoZT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksZz1hLiRzbGlkZXIuY2hpbGRyZW4oKSxhLm9wdGlvbnMucm93cz4xKXtmb3IoaD1hLm9wdGlvbnMuc2xpZGVzUGVyUm93KmEub3B0aW9ucy5yb3dzLGY9TWF0aC5jZWlsKGcubGVuZ3RoL2gpLGI9MDtmPmI7YisrKXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2ZvcihjPTA7YzxhLm9wdGlvbnMucm93cztjKyspe3ZhciBqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGQ9MDtkPGEub3B0aW9ucy5zbGlkZXNQZXJSb3c7ZCsrKXt2YXIgaz1iKmgrKGMqYS5vcHRpb25zLnNsaWRlc1BlclJvdytkKTtnLmdldChrKSYmai5hcHBlbmRDaGlsZChnLmdldChrKSl9aS5hcHBlbmRDaGlsZChqKX1lLmFwcGVuZENoaWxkKGkpfWEuJHNsaWRlci5odG1sKGUpLGEuJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jc3Moe3dpZHRoOjEwMC9hLm9wdGlvbnMuc2xpZGVzUGVyUm93K1wiJVwiLGRpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0pfX0sYi5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlPWZ1bmN0aW9uKGIsYyl7dmFyIGUsZixnLGQ9dGhpcyxoPSExLGk9ZC4kc2xpZGVyLndpZHRoKCksaj13aW5kb3cuaW5uZXJXaWR0aHx8YSh3aW5kb3cpLndpZHRoKCk7aWYoXCJ3aW5kb3dcIj09PWQucmVzcG9uZFRvP2c9ajpcInNsaWRlclwiPT09ZC5yZXNwb25kVG8/Zz1pOlwibWluXCI9PT1kLnJlc3BvbmRUbyYmKGc9TWF0aC5taW4oaixpKSksZC5vcHRpb25zLnJlc3BvbnNpdmUmJmQub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCYmbnVsbCE9PWQub3B0aW9ucy5yZXNwb25zaXZlKXtmPW51bGw7Zm9yKGUgaW4gZC5icmVha3BvaW50cylkLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGUpJiYoZC5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0PT09ITE/ZzxkLmJyZWFrcG9pbnRzW2VdJiYoZj1kLmJyZWFrcG9pbnRzW2VdKTpnPmQuYnJlYWtwb2ludHNbZV0mJihmPWQuYnJlYWtwb2ludHNbZV0pKTtudWxsIT09Zj9udWxsIT09ZC5hY3RpdmVCcmVha3BvaW50PyhmIT09ZC5hY3RpdmVCcmVha3BvaW50fHxjKSYmKGQuYWN0aXZlQnJlYWtwb2ludD1mLFwidW5zbGlja1wiPT09ZC5icmVha3BvaW50U2V0dGluZ3NbZl0/ZC51bnNsaWNrKGYpOihkLm9wdGlvbnM9YS5leHRlbmQoe30sZC5vcmlnaW5hbFNldHRpbmdzLGQuYnJlYWtwb2ludFNldHRpbmdzW2ZdKSxiPT09ITAmJihkLmN1cnJlbnRTbGlkZT1kLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxkLnJlZnJlc2goYikpLGg9Zik6KGQuYWN0aXZlQnJlYWtwb2ludD1mLFwidW5zbGlja1wiPT09ZC5icmVha3BvaW50U2V0dGluZ3NbZl0/ZC51bnNsaWNrKGYpOihkLm9wdGlvbnM9YS5leHRlbmQoe30sZC5vcmlnaW5hbFNldHRpbmdzLGQuYnJlYWtwb2ludFNldHRpbmdzW2ZdKSxiPT09ITAmJihkLmN1cnJlbnRTbGlkZT1kLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxkLnJlZnJlc2goYikpLGg9Zik6bnVsbCE9PWQuYWN0aXZlQnJlYWtwb2ludCYmKGQuYWN0aXZlQnJlYWtwb2ludD1udWxsLGQub3B0aW9ucz1kLm9yaWdpbmFsU2V0dGluZ3MsYj09PSEwJiYoZC5jdXJyZW50U2xpZGU9ZC5vcHRpb25zLmluaXRpYWxTbGlkZSksZC5yZWZyZXNoKGIpLGg9ZiksYnx8aD09PSExfHxkLiRzbGlkZXIudHJpZ2dlcihcImJyZWFrcG9pbnRcIixbZCxoXSl9fSxiLnByb3RvdHlwZS5jaGFuZ2VTbGlkZT1mdW5jdGlvbihiLGMpe3ZhciBmLGcsaCxkPXRoaXMsZT1hKGIudGFyZ2V0KTtzd2l0Y2goZS5pcyhcImFcIikmJmIucHJldmVudERlZmF1bHQoKSxlLmlzKFwibGlcIil8fChlPWUuY2xvc2VzdChcImxpXCIpKSxoPWQuc2xpZGVDb3VudCVkLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPT0wLGY9aD8wOihkLnNsaWRlQ291bnQtZC5jdXJyZW50U2xpZGUpJWQub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxiLmRhdGEubWVzc2FnZSl7Y2FzZVwicHJldmlvdXNcIjpnPTA9PT1mP2Qub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDpkLm9wdGlvbnMuc2xpZGVzVG9TaG93LWYsZC5zbGlkZUNvdW50PmQub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmQuc2xpZGVIYW5kbGVyKGQuY3VycmVudFNsaWRlLWcsITEsYyk7YnJlYWs7Y2FzZVwibmV4dFwiOmc9MD09PWY/ZC5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmYsZC5zbGlkZUNvdW50PmQub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmQuc2xpZGVIYW5kbGVyKGQuY3VycmVudFNsaWRlK2csITEsYyk7YnJlYWs7Y2FzZVwiaW5kZXhcIjp2YXIgaT0wPT09Yi5kYXRhLmluZGV4PzA6Yi5kYXRhLmluZGV4fHxlLmluZGV4KCkqZC5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO2Quc2xpZGVIYW5kbGVyKGQuY2hlY2tOYXZpZ2FibGUoaSksITEsYyksZS5jaGlsZHJlbigpLnRyaWdnZXIoXCJmb2N1c1wiKTticmVhaztkZWZhdWx0OnJldHVybn19LGIucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlPWZ1bmN0aW9uKGEpe3ZhciBjLGQsYj10aGlzO2lmKGM9Yi5nZXROYXZpZ2FibGVJbmRleGVzKCksZD0wLGE+Y1tjLmxlbmd0aC0xXSlhPWNbYy5sZW5ndGgtMV07ZWxzZSBmb3IodmFyIGUgaW4gYyl7aWYoYTxjW2VdKXthPWQ7YnJlYWt9ZD1jW2VdfXJldHVybiBhfSxiLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztiLm9wdGlvbnMuZG90cyYmbnVsbCE9PWIuJGRvdHMmJihhKFwibGlcIixiLiRkb3RzKS5vZmYoXCJjbGljay5zbGlja1wiLGIuY2hhbmdlU2xpZGUpLGIub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyPT09ITAmJmIub3B0aW9ucy5hdXRvcGxheT09PSEwJiZhKFwibGlcIixiLiRkb3RzKS5vZmYoXCJtb3VzZWVudGVyLnNsaWNrXCIsYS5wcm94eShiLnNldFBhdXNlZCxiLCEwKSkub2ZmKFwibW91c2VsZWF2ZS5zbGlja1wiLGEucHJveHkoYi5zZXRQYXVzZWQsYiwhMSkpKSxiLm9wdGlvbnMuYXJyb3dzPT09ITAmJmIuc2xpZGVDb3VudD5iLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoYi4kcHJldkFycm93JiZiLiRwcmV2QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIixiLmNoYW5nZVNsaWRlKSxiLiRuZXh0QXJyb3cmJmIuJG5leHRBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiLGIuY2hhbmdlU2xpZGUpKSxiLiRsaXN0Lm9mZihcInRvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrXCIsYi5zd2lwZUhhbmRsZXIpLGIuJGxpc3Qub2ZmKFwidG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGlja1wiLGIuc3dpcGVIYW5kbGVyKSxiLiRsaXN0Lm9mZihcInRvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2tcIixiLnN3aXBlSGFuZGxlciksYi4kbGlzdC5vZmYoXCJ0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrXCIsYi5zd2lwZUhhbmRsZXIpLGIuJGxpc3Qub2ZmKFwiY2xpY2suc2xpY2tcIixiLmNsaWNrSGFuZGxlciksYShkb2N1bWVudCkub2ZmKGIudmlzaWJpbGl0eUNoYW5nZSxiLnZpc2liaWxpdHkpLGIuJGxpc3Qub2ZmKFwibW91c2VlbnRlci5zbGlja1wiLGEucHJveHkoYi5zZXRQYXVzZWQsYiwhMCkpLGIuJGxpc3Qub2ZmKFwibW91c2VsZWF2ZS5zbGlja1wiLGEucHJveHkoYi5zZXRQYXVzZWQsYiwhMSkpLGIub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmIuJGxpc3Qub2ZmKFwia2V5ZG93bi5zbGlja1wiLGIua2V5SGFuZGxlciksYi5vcHRpb25zLmZvY3VzT25TZWxlY3Q9PT0hMCYmYShiLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZihcImNsaWNrLnNsaWNrXCIsYi5zZWxlY3RIYW5kbGVyKSxhKHdpbmRvdykub2ZmKFwib3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stXCIrYi5pbnN0YW5jZVVpZCxiLm9yaWVudGF0aW9uQ2hhbmdlKSxhKHdpbmRvdykub2ZmKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYi5yZXNpemUpLGEoXCJbZHJhZ2dhYmxlIT10cnVlXVwiLGIuJHNsaWRlVHJhY2spLm9mZihcImRyYWdzdGFydFwiLGIucHJldmVudERlZmF1bHQpLGEod2luZG93KS5vZmYoXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYi5zZXRQb3NpdGlvbiksYShkb2N1bWVudCkub2ZmKFwicmVhZHkuc2xpY2suc2xpY2stXCIrYi5pbnN0YW5jZVVpZCxiLnNldFBvc2l0aW9uKX0sYi5wcm90b3R5cGUuY2xlYW5VcFJvd3M9ZnVuY3Rpb24oKXt2YXIgYixhPXRoaXM7YS5vcHRpb25zLnJvd3M+MSYmKGI9YS4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKSxiLnJlbW92ZUF0dHIoXCJzdHlsZVwiKSxhLiRzbGlkZXIuaHRtbChiKSl9LGIucHJvdG90eXBlLmNsaWNrSGFuZGxlcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2Iuc2hvdWxkQ2xpY2s9PT0hMSYmKGEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksYS5zdG9wUHJvcGFnYXRpb24oKSxhLnByZXZlbnREZWZhdWx0KCkpfSxiLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7Yy5hdXRvUGxheUNsZWFyKCksYy50b3VjaE9iamVjdD17fSxjLmNsZWFuVXBFdmVudHMoKSxhKFwiLnNsaWNrLWNsb25lZFwiLGMuJHNsaWRlcikuZGV0YWNoKCksYy4kZG90cyYmYy4kZG90cy5yZW1vdmUoKSxjLiRwcmV2QXJyb3cmJmMuJHByZXZBcnJvdy5sZW5ndGgmJihjLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLGMuaHRtbEV4cHIudGVzdChjLm9wdGlvbnMucHJldkFycm93KSYmYy4kcHJldkFycm93LnJlbW92ZSgpKSxjLiRuZXh0QXJyb3cmJmMuJG5leHRBcnJvdy5sZW5ndGgmJihjLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLGMuaHRtbEV4cHIudGVzdChjLm9wdGlvbnMubmV4dEFycm93KSYmYy4kbmV4dEFycm93LnJlbW92ZSgpKSxjLiRzbGlkZXMmJihjLiRzbGlkZXMucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW5cIikucmVtb3ZlQXR0cihcImRhdGEtc2xpY2staW5kZXhcIikuZWFjaChmdW5jdGlvbigpe2EodGhpcykuYXR0cihcInN0eWxlXCIsYSh0aGlzKS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIpKX0pLGMuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSxjLiRzbGlkZVRyYWNrLmRldGFjaCgpLGMuJGxpc3QuZGV0YWNoKCksYy4kc2xpZGVyLmFwcGVuZChjLiRzbGlkZXMpKSxjLmNsZWFuVXBSb3dzKCksYy4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGVyXCIpLGMuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpLGMudW5zbGlja2VkPSEwLGJ8fGMuJHNsaWRlci50cmlnZ2VyKFwiZGVzdHJveVwiLFtjXSl9LGIucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz17fTtjW2IudHJhbnNpdGlvblR5cGVdPVwiXCIsYi5vcHRpb25zLmZhZGU9PT0hMT9iLiRzbGlkZVRyYWNrLmNzcyhjKTpiLiRzbGlkZXMuZXEoYSkuY3NzKGMpfSxiLnByb3RvdHlwZS5mYWRlU2xpZGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2MuY3NzVHJhbnNpdGlvbnM9PT0hMT8oYy4kc2xpZGVzLmVxKGEpLmNzcyh7ekluZGV4OmMub3B0aW9ucy56SW5kZXh9KSxjLiRzbGlkZXMuZXEoYSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxjLm9wdGlvbnMuc3BlZWQsYy5vcHRpb25zLmVhc2luZyxiKSk6KGMuYXBwbHlUcmFuc2l0aW9uKGEpLGMuJHNsaWRlcy5lcShhKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Yy5vcHRpb25zLnpJbmRleH0pLGImJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjLmRpc2FibGVUcmFuc2l0aW9uKGEpLGIuY2FsbCgpfSxjLm9wdGlvbnMuc3BlZWQpKX0sYi5wcm90b3R5cGUuZmFkZVNsaWRlT3V0PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7Yi5jc3NUcmFuc2l0aW9ucz09PSExP2IuJHNsaWRlcy5lcShhKS5hbmltYXRlKHtvcGFjaXR5OjAsekluZGV4OmIub3B0aW9ucy56SW5kZXgtMn0sYi5vcHRpb25zLnNwZWVkLGIub3B0aW9ucy5lYXNpbmcpOihiLmFwcGx5VHJhbnNpdGlvbihhKSxiLiRzbGlkZXMuZXEoYSkuY3NzKHtvcGFjaXR5OjAsekluZGV4OmIub3B0aW9ucy56SW5kZXgtMn0pKX0sYi5wcm90b3R5cGUuZmlsdGVyU2xpZGVzPWIucHJvdG90eXBlLnNsaWNrRmlsdGVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7bnVsbCE9PWEmJihiLiRzbGlkZXNDYWNoZT1iLiRzbGlkZXMsYi51bmxvYWQoKSxiLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksYi4kc2xpZGVzQ2FjaGUuZmlsdGVyKGEpLmFwcGVuZFRvKGIuJHNsaWRlVHJhY2spLGIucmVpbml0KCkpfSxiLnByb3RvdHlwZS5nZXRDdXJyZW50PWIucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gYS5jdXJyZW50U2xpZGV9LGIucHJvdG90eXBlLmdldERvdENvdW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPTAsYz0wLGQ9MDtpZihhLm9wdGlvbnMuaW5maW5pdGU9PT0hMClmb3IoO2I8YS5zbGlkZUNvdW50OykrK2QsYj1jK2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxjKz1hLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw8PWEub3B0aW9ucy5zbGlkZXNUb1Nob3c/YS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmEub3B0aW9ucy5zbGlkZXNUb1Nob3c7ZWxzZSBpZihhLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwKWQ9YS5zbGlkZUNvdW50O2Vsc2UgZm9yKDtiPGEuc2xpZGVDb3VudDspKytkLGI9YythLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsYys9YS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1hLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDphLm9wdGlvbnMuc2xpZGVzVG9TaG93O3JldHVybiBkLTF9LGIucHJvdG90eXBlLmdldExlZnQ9ZnVuY3Rpb24oYSl7dmFyIGMsZCxmLGI9dGhpcyxlPTA7cmV0dXJuIGIuc2xpZGVPZmZzZXQ9MCxkPWIuJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KCEwKSxiLm9wdGlvbnMuaW5maW5pdGU9PT0hMD8oYi5zbGlkZUNvdW50PmIub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihiLnNsaWRlT2Zmc2V0PWIuc2xpZGVXaWR0aCpiLm9wdGlvbnMuc2xpZGVzVG9TaG93Ki0xLGU9ZCpiLm9wdGlvbnMuc2xpZGVzVG9TaG93Ki0xKSxiLnNsaWRlQ291bnQlYi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT09MCYmYStiLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw+Yi5zbGlkZUNvdW50JiZiLnNsaWRlQ291bnQ+Yi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKGE+Yi5zbGlkZUNvdW50PyhiLnNsaWRlT2Zmc2V0PShiLm9wdGlvbnMuc2xpZGVzVG9TaG93LShhLWIuc2xpZGVDb3VudCkpKmIuc2xpZGVXaWR0aCotMSxlPShiLm9wdGlvbnMuc2xpZGVzVG9TaG93LShhLWIuc2xpZGVDb3VudCkpKmQqLTEpOihiLnNsaWRlT2Zmc2V0PWIuc2xpZGVDb3VudCViLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwqYi5zbGlkZVdpZHRoKi0xLGU9Yi5zbGlkZUNvdW50JWIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCpkKi0xKSkpOmErYi5vcHRpb25zLnNsaWRlc1RvU2hvdz5iLnNsaWRlQ291bnQmJihiLnNsaWRlT2Zmc2V0PShhK2Iub3B0aW9ucy5zbGlkZXNUb1Nob3ctYi5zbGlkZUNvdW50KSpiLnNsaWRlV2lkdGgsZT0oYStiLm9wdGlvbnMuc2xpZGVzVG9TaG93LWIuc2xpZGVDb3VudCkqZCksYi5zbGlkZUNvdW50PD1iLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoYi5zbGlkZU9mZnNldD0wLGU9MCksYi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmYi5vcHRpb25zLmluZmluaXRlPT09ITA/Yi5zbGlkZU9mZnNldCs9Yi5zbGlkZVdpZHRoKk1hdGguZmxvb3IoYi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKS1iLnNsaWRlV2lkdGg6Yi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmKGIuc2xpZGVPZmZzZXQ9MCxiLnNsaWRlT2Zmc2V0Kz1iLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihiLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpKSxjPWIub3B0aW9ucy52ZXJ0aWNhbD09PSExP2EqYi5zbGlkZVdpZHRoKi0xK2Iuc2xpZGVPZmZzZXQ6YSpkKi0xK2UsYi5vcHRpb25zLnZhcmlhYmxlV2lkdGg9PT0hMCYmKGY9Yi5zbGlkZUNvdW50PD1iLm9wdGlvbnMuc2xpZGVzVG9TaG93fHxiLm9wdGlvbnMuaW5maW5pdGU9PT0hMT9iLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGEpOmIuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoYStiLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxjPWIub3B0aW9ucy5ydGw9PT0hMD9mWzBdPy0xKihiLiRzbGlkZVRyYWNrLndpZHRoKCktZlswXS5vZmZzZXRMZWZ0LWYud2lkdGgoKSk6MDpmWzBdPy0xKmZbMF0ub2Zmc2V0TGVmdDowLGIub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJihmPWIuc2xpZGVDb3VudDw9Yi5vcHRpb25zLnNsaWRlc1RvU2hvd3x8Yi5vcHRpb25zLmluZmluaXRlPT09ITE/Yi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShhKTpiLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGErYi5vcHRpb25zLnNsaWRlc1RvU2hvdysxKSxjPWIub3B0aW9ucy5ydGw9PT0hMD9mWzBdPy0xKihiLiRzbGlkZVRyYWNrLndpZHRoKCktZlswXS5vZmZzZXRMZWZ0LWYud2lkdGgoKSk6MDpmWzBdPy0xKmZbMF0ub2Zmc2V0TGVmdDowLGMrPShiLiRsaXN0LndpZHRoKCktZi5vdXRlcldpZHRoKCkpLzIpKSxjfSxiLnByb3RvdHlwZS5nZXRPcHRpb249Yi5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb249ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztyZXR1cm4gYi5vcHRpb25zW2FdfSxiLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzPWZ1bmN0aW9uKCl7dmFyIGUsYT10aGlzLGI9MCxjPTAsZD1bXTtmb3IoYS5vcHRpb25zLmluZmluaXRlPT09ITE/ZT1hLnNsaWRlQ291bnQ6KGI9LTEqYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGM9LTEqYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGU9MiphLnNsaWRlQ291bnQpO2U+YjspZC5wdXNoKGIpLGI9YythLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsYys9YS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1hLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDphLm9wdGlvbnMuc2xpZGVzVG9TaG93O3JldHVybiBkfSxiLnByb3RvdHlwZS5nZXRTbGljaz1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxiLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50PWZ1bmN0aW9uKCl7dmFyIGMsZCxlLGI9dGhpcztyZXR1cm4gZT1iLm9wdGlvbnMuY2VudGVyTW9kZT09PSEwP2Iuc2xpZGVXaWR0aCpNYXRoLmZsb29yKGIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMik6MCxiLm9wdGlvbnMuc3dpcGVUb1NsaWRlPT09ITA/KGIuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1zbGlkZVwiKS5lYWNoKGZ1bmN0aW9uKGMsZil7cmV0dXJuIGYub2Zmc2V0TGVmdC1lK2EoZikub3V0ZXJXaWR0aCgpLzI+LTEqYi5zd2lwZUxlZnQ/KGQ9ZiwhMSk6dm9pZCAwfSksYz1NYXRoLmFicyhhKGQpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpLWIuY3VycmVudFNsaWRlKXx8MSk6Yi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsfSxiLnByb3RvdHlwZS5nb1RvPWIucHJvdG90eXBlLnNsaWNrR29Ubz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7Yy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcImluZGV4XCIsaW5kZXg6cGFyc2VJbnQoYSl9fSxiKX0sYi5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihiKXt2YXIgYz10aGlzO2EoYy4kc2xpZGVyKS5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpfHwoYShjLiRzbGlkZXIpLmFkZENsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIiksYy5idWlsZFJvd3MoKSxjLmJ1aWxkT3V0KCksYy5zZXRQcm9wcygpLGMuc3RhcnRMb2FkKCksYy5sb2FkU2xpZGVyKCksYy5pbml0aWFsaXplRXZlbnRzKCksYy51cGRhdGVBcnJvd3MoKSxjLnVwZGF0ZURvdHMoKSksYiYmYy4kc2xpZGVyLnRyaWdnZXIoXCJpbml0XCIsW2NdKSxjLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiZjLmluaXRBREEoKX0sYi5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLm9wdGlvbnMuYXJyb3dzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoYS4kcHJldkFycm93Lm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcInByZXZpb3VzXCJ9LGEuY2hhbmdlU2xpZGUpLGEuJG5leHRBcnJvdy5vbihcImNsaWNrLnNsaWNrXCIse21lc3NhZ2U6XCJuZXh0XCJ9LGEuY2hhbmdlU2xpZGUpKX0sYi5wcm90b3R5cGUuaW5pdERvdEV2ZW50cz1mdW5jdGlvbigpe3ZhciBiPXRoaXM7Yi5vcHRpb25zLmRvdHM9PT0hMCYmYi5zbGlkZUNvdW50PmIub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmEoXCJsaVwiLGIuJGRvdHMpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcImluZGV4XCJ9LGIuY2hhbmdlU2xpZGUpLGIub3B0aW9ucy5kb3RzPT09ITAmJmIub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyPT09ITAmJmIub3B0aW9ucy5hdXRvcGxheT09PSEwJiZhKFwibGlcIixiLiRkb3RzKS5vbihcIm1vdXNlZW50ZXIuc2xpY2tcIixhLnByb3h5KGIuc2V0UGF1c2VkLGIsITApKS5vbihcIm1vdXNlbGVhdmUuc2xpY2tcIixhLnByb3h5KGIuc2V0UGF1c2VkLGIsITEpKX0sYi5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBiPXRoaXM7Yi5pbml0QXJyb3dFdmVudHMoKSxiLmluaXREb3RFdmVudHMoKSxiLiRsaXN0Lm9uKFwidG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2tcIix7YWN0aW9uOlwic3RhcnRcIn0sYi5zd2lwZUhhbmRsZXIpLGIuJGxpc3Qub24oXCJ0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrXCIse2FjdGlvbjpcIm1vdmVcIn0sYi5zd2lwZUhhbmRsZXIpLGIuJGxpc3Qub24oXCJ0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrXCIse2FjdGlvbjpcImVuZFwifSxiLnN3aXBlSGFuZGxlciksYi4kbGlzdC5vbihcInRvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2tcIix7YWN0aW9uOlwiZW5kXCJ9LGIuc3dpcGVIYW5kbGVyKSxiLiRsaXN0Lm9uKFwiY2xpY2suc2xpY2tcIixiLmNsaWNrSGFuZGxlciksYShkb2N1bWVudCkub24oYi52aXNpYmlsaXR5Q2hhbmdlLGEucHJveHkoYi52aXNpYmlsaXR5LGIpKSxiLiRsaXN0Lm9uKFwibW91c2VlbnRlci5zbGlja1wiLGEucHJveHkoYi5zZXRQYXVzZWQsYiwhMCkpLGIuJGxpc3Qub24oXCJtb3VzZWxlYXZlLnNsaWNrXCIsYS5wcm94eShiLnNldFBhdXNlZCxiLCExKSksYi5vcHRpb25zLmFjY2Vzc2liaWxpdHk9PT0hMCYmYi4kbGlzdC5vbihcImtleWRvd24uc2xpY2tcIixiLmtleUhhbmRsZXIpLGIub3B0aW9ucy5mb2N1c09uU2VsZWN0PT09ITAmJmEoYi4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbihcImNsaWNrLnNsaWNrXCIsYi5zZWxlY3RIYW5kbGVyKSxhKHdpbmRvdykub24oXCJvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay1cIitiLmluc3RhbmNlVWlkLGEucHJveHkoYi5vcmllbnRhdGlvbkNoYW5nZSxiKSksYSh3aW5kb3cpLm9uKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYS5wcm94eShiLnJlc2l6ZSxiKSksYShcIltkcmFnZ2FibGUhPXRydWVdXCIsYi4kc2xpZGVUcmFjaykub24oXCJkcmFnc3RhcnRcIixiLnByZXZlbnREZWZhdWx0KSxhKHdpbmRvdykub24oXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2IuaW5zdGFuY2VVaWQsYi5zZXRQb3NpdGlvbiksYShkb2N1bWVudCkub24oXCJyZWFkeS5zbGljay5zbGljay1cIitiLmluc3RhbmNlVWlkLGIuc2V0UG9zaXRpb24pfSxiLnByb3RvdHlwZS5pbml0VUk9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Eub3B0aW9ucy5hcnJvd3M9PT0hMCYmYS5zbGlkZUNvdW50PmEub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihhLiRwcmV2QXJyb3cuc2hvdygpLGEuJG5leHRBcnJvdy5zaG93KCkpLGEub3B0aW9ucy5kb3RzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLiRkb3RzLnNob3coKSxhLm9wdGlvbnMuYXV0b3BsYXk9PT0hMCYmYS5hdXRvUGxheSgpfSxiLnByb3RvdHlwZS5rZXlIYW5kbGVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7YS50YXJnZXQudGFnTmFtZS5tYXRjaChcIlRFWFRBUkVBfElOUFVUfFNFTEVDVFwiKXx8KDM3PT09YS5rZXlDb2RlJiZiLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwP2IuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6XCJwcmV2aW91c1wifX0pOjM5PT09YS5rZXlDb2RlJiZiLm9wdGlvbnMuYWNjZXNzaWJpbGl0eT09PSEwJiZiLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwibmV4dFwifX0pKX0sYi5wcm90b3R5cGUubGF6eUxvYWQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBnKGIpe2EoXCJpbWdbZGF0YS1sYXp5XVwiLGIpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGM9YSh0aGlzKS5hdHRyKFwiZGF0YS1sYXp5XCIpLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtkLm9ubG9hZD1mdW5jdGlvbigpe2IuYW5pbWF0ZSh7b3BhY2l0eTowfSwxMDAsZnVuY3Rpb24oKXtiLmF0dHIoXCJzcmNcIixjKS5hbmltYXRlKHtvcGFjaXR5OjF9LDIwMCxmdW5jdGlvbigpe2IucmVtb3ZlQXR0cihcImRhdGEtbGF6eVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIil9KX0pfSxkLnNyYz1jfSl9dmFyIGMsZCxlLGYsYj10aGlzO2Iub3B0aW9ucy5jZW50ZXJNb2RlPT09ITA/Yi5vcHRpb25zLmluZmluaXRlPT09ITA/KGU9Yi5jdXJyZW50U2xpZGUrKGIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSxmPWUrYi5vcHRpb25zLnNsaWRlc1RvU2hvdysyKTooZT1NYXRoLm1heCgwLGIuY3VycmVudFNsaWRlLShiLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIrMSkpLGY9MisoYi5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKzEpK2IuY3VycmVudFNsaWRlKTooZT1iLm9wdGlvbnMuaW5maW5pdGU/Yi5vcHRpb25zLnNsaWRlc1RvU2hvdytiLmN1cnJlbnRTbGlkZTpiLmN1cnJlbnRTbGlkZSxmPWUrYi5vcHRpb25zLnNsaWRlc1RvU2hvdyxiLm9wdGlvbnMuZmFkZT09PSEwJiYoZT4wJiZlLS0sZjw9Yi5zbGlkZUNvdW50JiZmKyspKSxjPWIuJHNsaWRlci5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLnNsaWNlKGUsZiksZyhjKSxiLnNsaWRlQ291bnQ8PWIub3B0aW9ucy5zbGlkZXNUb1Nob3c/KGQ9Yi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIiksZyhkKSk6Yi5jdXJyZW50U2xpZGU+PWIuc2xpZGVDb3VudC1iLm9wdGlvbnMuc2xpZGVzVG9TaG93PyhkPWIuJHNsaWRlci5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5zbGljZSgwLGIub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGcoZCkpOjA9PT1iLmN1cnJlbnRTbGlkZSYmKGQ9Yi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpLnNsaWNlKC0xKmIub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGcoZCkpfSxiLnByb3RvdHlwZS5sb2FkU2xpZGVyPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLnNldFBvc2l0aW9uKCksYS4kc2xpZGVUcmFjay5jc3Moe29wYWNpdHk6MX0pLGEuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksYS5pbml0VUkoKSxcInByb2dyZXNzaXZlXCI9PT1hLm9wdGlvbnMubGF6eUxvYWQmJmEucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpfSxiLnByb3RvdHlwZS5uZXh0PWIucHJvdG90eXBlLnNsaWNrTmV4dD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcIm5leHRcIn19KX0sYi5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EuY2hlY2tSZXNwb25zaXZlKCksYS5zZXRQb3NpdGlvbigpfSxiLnByb3RvdHlwZS5wYXVzZT1iLnByb3RvdHlwZS5zbGlja1BhdXNlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpczthLmF1dG9QbGF5Q2xlYXIoKSxhLnBhdXNlZD0hMH0sYi5wcm90b3R5cGUucGxheT1iLnByb3RvdHlwZS5zbGlja1BsYXk9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EucGF1c2VkPSExLGEuYXV0b1BsYXkoKX0sYi5wcm90b3R5cGUucG9zdFNsaWRlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7Yi4kc2xpZGVyLnRyaWdnZXIoXCJhZnRlckNoYW5nZVwiLFtiLGFdKSxiLmFuaW1hdGluZz0hMSxiLnNldFBvc2l0aW9uKCksYi5zd2lwZUxlZnQ9bnVsbCxiLm9wdGlvbnMuYXV0b3BsYXk9PT0hMCYmYi5wYXVzZWQ9PT0hMSYmYi5hdXRvUGxheSgpLGIub3B0aW9ucy5hY2Nlc3NpYmlsaXR5PT09ITAmJmIuaW5pdEFEQSgpfSxiLnByb3RvdHlwZS5wcmV2PWIucHJvdG90eXBlLnNsaWNrUHJldj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcInByZXZpb3VzXCJ9fSl9LGIucHJvdG90eXBlLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKX0sYi5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZD1mdW5jdGlvbigpe3ZhciBjLGQsYj10aGlzO2M9YShcImltZ1tkYXRhLWxhenldXCIsYi4kc2xpZGVyKS5sZW5ndGgsYz4wJiYoZD1hKFwiaW1nW2RhdGEtbGF6eV1cIixiLiRzbGlkZXIpLmZpcnN0KCksZC5hdHRyKFwic3JjXCIsbnVsbCksZC5hdHRyKFwic3JjXCIsZC5hdHRyKFwiZGF0YS1sYXp5XCIpKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIikubG9hZChmdW5jdGlvbigpe2QucmVtb3ZlQXR0cihcImRhdGEtbGF6eVwiKSxiLnByb2dyZXNzaXZlTGF6eUxvYWQoKSxiLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQ9PT0hMCYmYi5zZXRQb3NpdGlvbigpfSkuZXJyb3IoZnVuY3Rpb24oKXtkLnJlbW92ZUF0dHIoXCJkYXRhLWxhenlcIiksYi5wcm9ncmVzc2l2ZUxhenlMb2FkKCl9KSl9LGIucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oYil7dmFyIGQsZSxjPXRoaXM7ZT1jLnNsaWRlQ291bnQtYy5vcHRpb25zLnNsaWRlc1RvU2hvdyxjLm9wdGlvbnMuaW5maW5pdGV8fChjLnNsaWRlQ291bnQ8PWMub3B0aW9ucy5zbGlkZXNUb1Nob3c/Yy5jdXJyZW50U2xpZGU9MDpjLmN1cnJlbnRTbGlkZT5lJiYoYy5jdXJyZW50U2xpZGU9ZSkpLGQ9Yy5jdXJyZW50U2xpZGUsYy5kZXN0cm95KCEwKSxhLmV4dGVuZChjLGMuaW5pdGlhbHMse2N1cnJlbnRTbGlkZTpkfSksYy5pbml0KCksYnx8Yy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcImluZGV4XCIsaW5kZXg6ZH19LCExKX0sYi5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cz1mdW5jdGlvbigpe3ZhciBjLGQsZSxiPXRoaXMsZj1iLm9wdGlvbnMucmVzcG9uc2l2ZXx8bnVsbDtpZihcImFycmF5XCI9PT1hLnR5cGUoZikmJmYubGVuZ3RoKXtiLnJlc3BvbmRUbz1iLm9wdGlvbnMucmVzcG9uZFRvfHxcIndpbmRvd1wiO2ZvcihjIGluIGYpaWYoZT1iLmJyZWFrcG9pbnRzLmxlbmd0aC0xLGQ9ZltjXS5icmVha3BvaW50LGYuaGFzT3duUHJvcGVydHkoYykpe2Zvcig7ZT49MDspYi5icmVha3BvaW50c1tlXSYmYi5icmVha3BvaW50c1tlXT09PWQmJmIuYnJlYWtwb2ludHMuc3BsaWNlKGUsMSksZS0tO2IuYnJlYWtwb2ludHMucHVzaChkKSxiLmJyZWFrcG9pbnRTZXR0aW5nc1tkXT1mW2NdLnNldHRpbmdzfWIuYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLGMpe3JldHVybiBiLm9wdGlvbnMubW9iaWxlRmlyc3Q/YS1jOmMtYX0pfX0sYi5wcm90b3R5cGUucmVpbml0PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztiLiRzbGlkZXM9Yi4kc2xpZGVUcmFjay5jaGlsZHJlbihiLm9wdGlvbnMuc2xpZGUpLmFkZENsYXNzKFwic2xpY2stc2xpZGVcIiksYi5zbGlkZUNvdW50PWIuJHNsaWRlcy5sZW5ndGgsYi5jdXJyZW50U2xpZGU+PWIuc2xpZGVDb3VudCYmMCE9PWIuY3VycmVudFNsaWRlJiYoYi5jdXJyZW50U2xpZGU9Yi5jdXJyZW50U2xpZGUtYi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSxiLnNsaWRlQ291bnQ8PWIub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihiLmN1cnJlbnRTbGlkZT0wKSxiLnJlZ2lzdGVyQnJlYWtwb2ludHMoKSxiLnNldFByb3BzKCksYi5zZXR1cEluZmluaXRlKCksYi5idWlsZEFycm93cygpLGIudXBkYXRlQXJyb3dzKCksYi5pbml0QXJyb3dFdmVudHMoKSxiLmJ1aWxkRG90cygpLGIudXBkYXRlRG90cygpLGIuaW5pdERvdEV2ZW50cygpLGIuY2hlY2tSZXNwb25zaXZlKCExLCEwKSxiLm9wdGlvbnMuZm9jdXNPblNlbGVjdD09PSEwJiZhKGIuJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oXCJjbGljay5zbGlja1wiLGIuc2VsZWN0SGFuZGxlciksYi5zZXRTbGlkZUNsYXNzZXMoMCksYi5zZXRQb3NpdGlvbigpLGIuJHNsaWRlci50cmlnZ2VyKFwicmVJbml0XCIsW2JdKSxiLm9wdGlvbnMuYXV0b3BsYXk9PT0hMCYmYi5mb2N1c0hhbmRsZXIoKX0sYi5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7dmFyIGI9dGhpczthKHdpbmRvdykud2lkdGgoKSE9PWIud2luZG93V2lkdGgmJihjbGVhclRpbWVvdXQoYi53aW5kb3dEZWxheSksYi53aW5kb3dEZWxheT13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2Iud2luZG93V2lkdGg9YSh3aW5kb3cpLndpZHRoKCksYi5jaGVja1Jlc3BvbnNpdmUoKSxiLnVuc2xpY2tlZHx8Yi5zZXRQb3NpdGlvbigpfSw1MCkpfSxiLnByb3RvdHlwZS5yZW1vdmVTbGlkZT1iLnByb3RvdHlwZS5zbGlja1JlbW92ZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcztyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/KGI9YSxhPWI9PT0hMD8wOmQuc2xpZGVDb3VudC0xKTphPWI9PT0hMD8tLWE6YSxkLnNsaWRlQ291bnQ8MXx8MD5hfHxhPmQuc2xpZGVDb3VudC0xPyExOihkLnVubG9hZCgpLGM9PT0hMD9kLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk6ZC4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGEpLnJlbW92ZSgpLGQuJHNsaWRlcz1kLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSksZC4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGQuJHNsaWRlVHJhY2suYXBwZW5kKGQuJHNsaWRlcyksZC4kc2xpZGVzQ2FjaGU9ZC4kc2xpZGVzLHZvaWQgZC5yZWluaXQoKSl9LGIucHJvdG90eXBlLnNldENTUz1mdW5jdGlvbihhKXt2YXIgZCxlLGI9dGhpcyxjPXt9O2Iub3B0aW9ucy5ydGw9PT0hMCYmKGE9LWEpLGQ9XCJsZWZ0XCI9PWIucG9zaXRpb25Qcm9wP01hdGguY2VpbChhKStcInB4XCI6XCIwcHhcIixlPVwidG9wXCI9PWIucG9zaXRpb25Qcm9wP01hdGguY2VpbChhKStcInB4XCI6XCIwcHhcIixjW2IucG9zaXRpb25Qcm9wXT1hLGIudHJhbnNmb3Jtc0VuYWJsZWQ9PT0hMT9iLiRzbGlkZVRyYWNrLmNzcyhjKTooYz17fSxiLmNzc1RyYW5zaXRpb25zPT09ITE/KGNbYi5hbmltVHlwZV09XCJ0cmFuc2xhdGUoXCIrZCtcIiwgXCIrZStcIilcIixiLiRzbGlkZVRyYWNrLmNzcyhjKSk6KGNbYi5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZChcIitkK1wiLCBcIitlK1wiLCAwcHgpXCIsYi4kc2xpZGVUcmFjay5jc3MoYykpKX0sYi5wcm90b3R5cGUuc2V0RGltZW5zaW9ucz1mdW5jdGlvbigpe3ZhciBhPXRoaXM7YS5vcHRpb25zLnZlcnRpY2FsPT09ITE/YS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmYS4kbGlzdC5jc3Moe3BhZGRpbmc6XCIwcHggXCIrYS5vcHRpb25zLmNlbnRlclBhZGRpbmd9KTooYS4kbGlzdC5oZWlnaHQoYS4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQoITApKmEub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGEub3B0aW9ucy5jZW50ZXJNb2RlPT09ITAmJmEuJGxpc3QuY3NzKHtwYWRkaW5nOmEub3B0aW9ucy5jZW50ZXJQYWRkaW5nK1wiIDBweFwifSkpLGEubGlzdFdpZHRoPWEuJGxpc3Qud2lkdGgoKSxhLmxpc3RIZWlnaHQ9YS4kbGlzdC5oZWlnaHQoKSxhLm9wdGlvbnMudmVydGljYWw9PT0hMSYmYS5vcHRpb25zLnZhcmlhYmxlV2lkdGg9PT0hMT8oYS5zbGlkZVdpZHRoPU1hdGguY2VpbChhLmxpc3RXaWR0aC9hLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxhLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbChhLnNsaWRlV2lkdGgqYS4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5sZW5ndGgpKSk6YS5vcHRpb25zLnZhcmlhYmxlV2lkdGg9PT0hMD9hLiRzbGlkZVRyYWNrLndpZHRoKDVlMyphLnNsaWRlQ291bnQpOihhLnNsaWRlV2lkdGg9TWF0aC5jZWlsKGEubGlzdFdpZHRoKSxhLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoYS4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQoITApKmEuJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikubGVuZ3RoKSkpO3ZhciBiPWEuJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgoITApLWEuJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7YS5vcHRpb25zLnZhcmlhYmxlV2lkdGg9PT0hMSYmYS4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS53aWR0aChhLnNsaWRlV2lkdGgtYil9LGIucHJvdG90eXBlLnNldEZhZGU9ZnVuY3Rpb24oKXt2YXIgYyxiPXRoaXM7Yi4kc2xpZGVzLmVhY2goZnVuY3Rpb24oZCxlKXtjPWIuc2xpZGVXaWR0aCpkKi0xLGIub3B0aW9ucy5ydGw9PT0hMD9hKGUpLmNzcyh7cG9zaXRpb246XCJyZWxhdGl2ZVwiLHJpZ2h0OmMsdG9wOjAsekluZGV4OmIub3B0aW9ucy56SW5kZXgtMixvcGFjaXR5OjB9KTphKGUpLmNzcyh7cG9zaXRpb246XCJyZWxhdGl2ZVwiLGxlZnQ6Yyx0b3A6MCx6SW5kZXg6Yi5vcHRpb25zLnpJbmRleC0yLG9wYWNpdHk6MH0pfSksYi4kc2xpZGVzLmVxKGIuY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDpiLm9wdGlvbnMuekluZGV4LTEsb3BhY2l0eToxfSl9LGIucHJvdG90eXBlLnNldEhlaWdodD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYoMT09PWEub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmEub3B0aW9ucy5hZGFwdGl2ZUhlaWdodD09PSEwJiZhLm9wdGlvbnMudmVydGljYWw9PT0hMSl7dmFyIGI9YS4kc2xpZGVzLmVxKGEuY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCghMCk7YS4kbGlzdC5jc3MoXCJoZWlnaHRcIixiKX19LGIucHJvdG90eXBlLnNldE9wdGlvbj1iLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbj1mdW5jdGlvbihiLGMsZCl7dmFyIGYsZyxlPXRoaXM7aWYoXCJyZXNwb25zaXZlXCI9PT1iJiZcImFycmF5XCI9PT1hLnR5cGUoYykpZm9yKGcgaW4gYylpZihcImFycmF5XCIhPT1hLnR5cGUoZS5vcHRpb25zLnJlc3BvbnNpdmUpKWUub3B0aW9ucy5yZXNwb25zaXZlPVtjW2ddXTtlbHNle2ZvcihmPWUub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO2Y+PTA7KWUub3B0aW9ucy5yZXNwb25zaXZlW2ZdLmJyZWFrcG9pbnQ9PT1jW2ddLmJyZWFrcG9pbnQmJmUub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShmLDEpLGYtLTtlLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKGNbZ10pfWVsc2UgZS5vcHRpb25zW2JdPWM7ZD09PSEwJiYoZS51bmxvYWQoKSxlLnJlaW5pdCgpKX0sYi5wcm90b3R5cGUuc2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Euc2V0RGltZW5zaW9ucygpLGEuc2V0SGVpZ2h0KCksYS5vcHRpb25zLmZhZGU9PT0hMT9hLnNldENTUyhhLmdldExlZnQoYS5jdXJyZW50U2xpZGUpKTphLnNldEZhZGUoKSxhLiRzbGlkZXIudHJpZ2dlcihcInNldFBvc2l0aW9uXCIsW2FdKX0sYi5wcm90b3R5cGUuc2V0UHJvcHM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9ZG9jdW1lbnQuYm9keS5zdHlsZTthLnBvc2l0aW9uUHJvcD1hLm9wdGlvbnMudmVydGljYWw9PT0hMD9cInRvcFwiOlwibGVmdFwiLFwidG9wXCI9PT1hLnBvc2l0aW9uUHJvcD9hLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKTphLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKSwodm9pZCAwIT09Yi5XZWJraXRUcmFuc2l0aW9ufHx2b2lkIDAhPT1iLk1velRyYW5zaXRpb258fHZvaWQgMCE9PWIubXNUcmFuc2l0aW9uKSYmYS5vcHRpb25zLnVzZUNTUz09PSEwJiYoYS5jc3NUcmFuc2l0aW9ucz0hMCksYS5vcHRpb25zLmZhZGUmJihcIm51bWJlclwiPT10eXBlb2YgYS5vcHRpb25zLnpJbmRleD9hLm9wdGlvbnMuekluZGV4PDMmJihhLm9wdGlvbnMuekluZGV4PTMpOmEub3B0aW9ucy56SW5kZXg9YS5kZWZhdWx0cy56SW5kZXgpLHZvaWQgMCE9PWIuT1RyYW5zZm9ybSYmKGEuYW5pbVR5cGU9XCJPVHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwiLW8tdHJhbnNmb3JtXCIsYS50cmFuc2l0aW9uVHlwZT1cIk9UcmFuc2l0aW9uXCIsdm9pZCAwPT09Yi5wZXJzcGVjdGl2ZVByb3BlcnR5JiZ2b2lkIDA9PT1iLndlYmtpdFBlcnNwZWN0aXZlJiYoYS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWIuTW96VHJhbnNmb3JtJiYoYS5hbmltVHlwZT1cIk1velRyYW5zZm9ybVwiLGEudHJhbnNmb3JtVHlwZT1cIi1tb3otdHJhbnNmb3JtXCIsYS50cmFuc2l0aW9uVHlwZT1cIk1velRyYW5zaXRpb25cIix2b2lkIDA9PT1iLnBlcnNwZWN0aXZlUHJvcGVydHkmJnZvaWQgMD09PWIuTW96UGVyc3BlY3RpdmUmJihhLmFuaW1UeXBlPSExKSksdm9pZCAwIT09Yi53ZWJraXRUcmFuc2Zvcm0mJihhLmFuaW1UeXBlPVwid2Via2l0VHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwiLXdlYmtpdC10cmFuc2Zvcm1cIixhLnRyYW5zaXRpb25UeXBlPVwid2Via2l0VHJhbnNpdGlvblwiLHZvaWQgMD09PWIucGVyc3BlY3RpdmVQcm9wZXJ0eSYmdm9pZCAwPT09Yi53ZWJraXRQZXJzcGVjdGl2ZSYmKGEuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1iLm1zVHJhbnNmb3JtJiYoYS5hbmltVHlwZT1cIm1zVHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwiLW1zLXRyYW5zZm9ybVwiLGEudHJhbnNpdGlvblR5cGU9XCJtc1RyYW5zaXRpb25cIix2b2lkIDA9PT1iLm1zVHJhbnNmb3JtJiYoYS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWIudHJhbnNmb3JtJiZhLmFuaW1UeXBlIT09ITEmJihhLmFuaW1UeXBlPVwidHJhbnNmb3JtXCIsYS50cmFuc2Zvcm1UeXBlPVwidHJhbnNmb3JtXCIsYS50cmFuc2l0aW9uVHlwZT1cInRyYW5zaXRpb25cIiksYS50cmFuc2Zvcm1zRW5hYmxlZD1hLm9wdGlvbnMudXNlVHJhbnNmb3JtJiZudWxsIT09YS5hbmltVHlwZSYmYS5hbmltVHlwZSE9PSExfSxiLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXM9ZnVuY3Rpb24oYSl7dmFyIGMsZCxlLGYsYj10aGlzO2Q9Yi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLGIuJHNsaWRlcy5lcShhKS5hZGRDbGFzcyhcInNsaWNrLWN1cnJlbnRcIiksYi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMD8oYz1NYXRoLmZsb29yKGIub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiksYi5vcHRpb25zLmluZmluaXRlPT09ITAmJihhPj1jJiZhPD1iLnNsaWRlQ291bnQtMS1jP2IuJHNsaWRlcy5zbGljZShhLWMsYStjKzEpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6KGU9Yi5vcHRpb25zLnNsaWRlc1RvU2hvdythLGQuc2xpY2UoZS1jKzEsZStjKzIpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikpLDA9PT1hP2QuZXEoZC5sZW5ndGgtMS1iLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWNlbnRlclwiKTphPT09Yi5zbGlkZUNvdW50LTEmJmQuZXEoYi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIikpLGIuJHNsaWRlcy5lcShhKS5hZGRDbGFzcyhcInNsaWNrLWNlbnRlclwiKSk6YT49MCYmYTw9Yi5zbGlkZUNvdW50LWIub3B0aW9ucy5zbGlkZXNUb1Nob3c/Yi4kc2xpZGVzLnNsaWNlKGEsYStiLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOmQubGVuZ3RoPD1iLm9wdGlvbnMuc2xpZGVzVG9TaG93P2QuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKTooZj1iLnNsaWRlQ291bnQlYi5vcHRpb25zLnNsaWRlc1RvU2hvdyxlPWIub3B0aW9ucy5pbmZpbml0ZT09PSEwP2Iub3B0aW9ucy5zbGlkZXNUb1Nob3crYTphLGIub3B0aW9ucy5zbGlkZXNUb1Nob3c9PWIub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCYmYi5zbGlkZUNvdW50LWE8Yi5vcHRpb25zLnNsaWRlc1RvU2hvdz9kLnNsaWNlKGUtKGIub3B0aW9ucy5zbGlkZXNUb1Nob3ctZiksZStmKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOmQuc2xpY2UoZSxlK2Iub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikpLFwib25kZW1hbmRcIj09PWIub3B0aW9ucy5sYXp5TG9hZCYmYi5sYXp5TG9hZCgpfSxiLnByb3RvdHlwZS5zZXR1cEluZmluaXRlPWZ1bmN0aW9uKCl7dmFyIGMsZCxlLGI9dGhpcztpZihiLm9wdGlvbnMuZmFkZT09PSEwJiYoYi5vcHRpb25zLmNlbnRlck1vZGU9ITEpLGIub3B0aW9ucy5pbmZpbml0ZT09PSEwJiZiLm9wdGlvbnMuZmFkZT09PSExJiYoZD1udWxsLGIuc2xpZGVDb3VudD5iLm9wdGlvbnMuc2xpZGVzVG9TaG93KSl7Zm9yKGU9Yi5vcHRpb25zLmNlbnRlck1vZGU9PT0hMD9iLm9wdGlvbnMuc2xpZGVzVG9TaG93KzE6Yi5vcHRpb25zLnNsaWRlc1RvU2hvdyxjPWIuc2xpZGVDb3VudDtjPmIuc2xpZGVDb3VudC1lO2MtPTEpZD1jLTEsYShiLiRzbGlkZXNbZF0pLmNsb25lKCEwKS5hdHRyKFwiaWRcIixcIlwiKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLGQtYi5zbGlkZUNvdW50KS5wcmVwZW5kVG8oYi4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoXCJzbGljay1jbG9uZWRcIik7Zm9yKGM9MDtlPmM7Yys9MSlkPWMsYShiLiRzbGlkZXNbZF0pLmNsb25lKCEwKS5hdHRyKFwiaWRcIixcIlwiKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLGQrYi5zbGlkZUNvdW50KS5hcHBlbmRUbyhiLiRzbGlkZVRyYWNrKS5hZGRDbGFzcyhcInNsaWNrLWNsb25lZFwiKTtiLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpLmZpbmQoXCJbaWRdXCIpLmVhY2goZnVuY3Rpb24oKXthKHRoaXMpLmF0dHIoXCJpZFwiLFwiXCIpfSl9fSxiLnByb3RvdHlwZS5zZXRQYXVzZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztiLm9wdGlvbnMuYXV0b3BsYXk9PT0hMCYmYi5vcHRpb25zLnBhdXNlT25Ib3Zlcj09PSEwJiYoYi5wYXVzZWQ9YSxhP2IuYXV0b1BsYXlDbGVhcigpOmIuYXV0b1BsYXkoKSl9LGIucHJvdG90eXBlLnNlbGVjdEhhbmRsZXI9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWEoYi50YXJnZXQpLmlzKFwiLnNsaWNrLXNsaWRlXCIpP2EoYi50YXJnZXQpOmEoYi50YXJnZXQpLnBhcmVudHMoXCIuc2xpY2stc2xpZGVcIiksZT1wYXJzZUludChkLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpKTtyZXR1cm4gZXx8KGU9MCksYy5zbGlkZUNvdW50PD1jLm9wdGlvbnMuc2xpZGVzVG9TaG93PyhjLnNldFNsaWRlQ2xhc3NlcyhlKSx2b2lkIGMuYXNOYXZGb3IoZSkpOnZvaWQgYy5zbGlkZUhhbmRsZXIoZSl9LGIucHJvdG90eXBlLnNsaWRlSGFuZGxlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1udWxsLGk9dGhpcztyZXR1cm4gYj1ifHwhMSxpLmFuaW1hdGluZz09PSEwJiZpLm9wdGlvbnMud2FpdEZvckFuaW1hdGU9PT0hMHx8aS5vcHRpb25zLmZhZGU9PT0hMCYmaS5jdXJyZW50U2xpZGU9PT1hfHxpLnNsaWRlQ291bnQ8PWkub3B0aW9ucy5zbGlkZXNUb1Nob3c/dm9pZCAwOihiPT09ITEmJmkuYXNOYXZGb3IoYSksZD1hLGg9aS5nZXRMZWZ0KGQpLGc9aS5nZXRMZWZ0KGkuY3VycmVudFNsaWRlKSxpLmN1cnJlbnRMZWZ0PW51bGw9PT1pLnN3aXBlTGVmdD9nOmkuc3dpcGVMZWZ0LGkub3B0aW9ucy5pbmZpbml0ZT09PSExJiZpLm9wdGlvbnMuY2VudGVyTW9kZT09PSExJiYoMD5hfHxhPmkuZ2V0RG90Q291bnQoKSppLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpP3ZvaWQoaS5vcHRpb25zLmZhZGU9PT0hMSYmKGQ9aS5jdXJyZW50U2xpZGUsYyE9PSEwP2kuYW5pbWF0ZVNsaWRlKGcsZnVuY3Rpb24oKXtpLnBvc3RTbGlkZShkKTtcclxufSk6aS5wb3N0U2xpZGUoZCkpKTppLm9wdGlvbnMuaW5maW5pdGU9PT0hMSYmaS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmKDA+YXx8YT5pLnNsaWRlQ291bnQtaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKT92b2lkKGkub3B0aW9ucy5mYWRlPT09ITEmJihkPWkuY3VycmVudFNsaWRlLGMhPT0hMD9pLmFuaW1hdGVTbGlkZShnLGZ1bmN0aW9uKCl7aS5wb3N0U2xpZGUoZCl9KTppLnBvc3RTbGlkZShkKSkpOihpLm9wdGlvbnMuYXV0b3BsYXk9PT0hMCYmY2xlYXJJbnRlcnZhbChpLmF1dG9QbGF5VGltZXIpLGU9MD5kP2kuc2xpZGVDb3VudCVpLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPT0wP2kuc2xpZGVDb3VudC1pLnNsaWRlQ291bnQlaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmkuc2xpZGVDb3VudCtkOmQ+PWkuc2xpZGVDb3VudD9pLnNsaWRlQ291bnQlaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT09MD8wOmQtaS5zbGlkZUNvdW50OmQsaS5hbmltYXRpbmc9ITAsaS4kc2xpZGVyLnRyaWdnZXIoXCJiZWZvcmVDaGFuZ2VcIixbaSxpLmN1cnJlbnRTbGlkZSxlXSksZj1pLmN1cnJlbnRTbGlkZSxpLmN1cnJlbnRTbGlkZT1lLGkuc2V0U2xpZGVDbGFzc2VzKGkuY3VycmVudFNsaWRlKSxpLnVwZGF0ZURvdHMoKSxpLnVwZGF0ZUFycm93cygpLGkub3B0aW9ucy5mYWRlPT09ITA/KGMhPT0hMD8oaS5mYWRlU2xpZGVPdXQoZiksaS5mYWRlU2xpZGUoZSxmdW5jdGlvbigpe2kucG9zdFNsaWRlKGUpfSkpOmkucG9zdFNsaWRlKGUpLHZvaWQgaS5hbmltYXRlSGVpZ2h0KCkpOnZvaWQoYyE9PSEwP2kuYW5pbWF0ZVNsaWRlKGgsZnVuY3Rpb24oKXtpLnBvc3RTbGlkZShlKX0pOmkucG9zdFNsaWRlKGUpKSkpfSxiLnByb3RvdHlwZS5zdGFydExvYWQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2Eub3B0aW9ucy5hcnJvd3M9PT0hMCYmYS5zbGlkZUNvdW50PmEub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihhLiRwcmV2QXJyb3cuaGlkZSgpLGEuJG5leHRBcnJvdy5oaWRlKCkpLGEub3B0aW9ucy5kb3RzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLiRkb3RzLmhpZGUoKSxhLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSxiLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbj1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGU9dGhpcztyZXR1cm4gYT1lLnRvdWNoT2JqZWN0LnN0YXJ0WC1lLnRvdWNoT2JqZWN0LmN1clgsYj1lLnRvdWNoT2JqZWN0LnN0YXJ0WS1lLnRvdWNoT2JqZWN0LmN1clksYz1NYXRoLmF0YW4yKGIsYSksZD1NYXRoLnJvdW5kKDE4MCpjL01hdGguUEkpLDA+ZCYmKGQ9MzYwLU1hdGguYWJzKGQpKSw0NT49ZCYmZD49MD9lLm9wdGlvbnMucnRsPT09ITE/XCJsZWZ0XCI6XCJyaWdodFwiOjM2MD49ZCYmZD49MzE1P2Uub3B0aW9ucy5ydGw9PT0hMT9cImxlZnRcIjpcInJpZ2h0XCI6ZD49MTM1JiYyMjU+PWQ/ZS5vcHRpb25zLnJ0bD09PSExP1wicmlnaHRcIjpcImxlZnRcIjplLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITA/ZD49MzUmJjEzNT49ZD9cImxlZnRcIjpcInJpZ2h0XCI6XCJ2ZXJ0aWNhbFwifSxiLnByb3RvdHlwZS5zd2lwZUVuZD1mdW5jdGlvbihhKXt2YXIgYyxiPXRoaXM7aWYoYi5kcmFnZ2luZz0hMSxiLnNob3VsZENsaWNrPWIudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg+MTA/ITE6ITAsdm9pZCAwPT09Yi50b3VjaE9iamVjdC5jdXJYKXJldHVybiExO2lmKGIudG91Y2hPYmplY3QuZWRnZUhpdD09PSEwJiZiLiRzbGlkZXIudHJpZ2dlcihcImVkZ2VcIixbYixiLnN3aXBlRGlyZWN0aW9uKCldKSxiLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPj1iLnRvdWNoT2JqZWN0Lm1pblN3aXBlKXN3aXRjaChiLnN3aXBlRGlyZWN0aW9uKCkpe2Nhc2VcImxlZnRcIjpjPWIub3B0aW9ucy5zd2lwZVRvU2xpZGU/Yi5jaGVja05hdmlnYWJsZShiLmN1cnJlbnRTbGlkZStiLmdldFNsaWRlQ291bnQoKSk6Yi5jdXJyZW50U2xpZGUrYi5nZXRTbGlkZUNvdW50KCksYi5zbGlkZUhhbmRsZXIoYyksYi5jdXJyZW50RGlyZWN0aW9uPTAsYi50b3VjaE9iamVjdD17fSxiLiRzbGlkZXIudHJpZ2dlcihcInN3aXBlXCIsW2IsXCJsZWZ0XCJdKTticmVhaztjYXNlXCJyaWdodFwiOmM9Yi5vcHRpb25zLnN3aXBlVG9TbGlkZT9iLmNoZWNrTmF2aWdhYmxlKGIuY3VycmVudFNsaWRlLWIuZ2V0U2xpZGVDb3VudCgpKTpiLmN1cnJlbnRTbGlkZS1iLmdldFNsaWRlQ291bnQoKSxiLnNsaWRlSGFuZGxlcihjKSxiLmN1cnJlbnREaXJlY3Rpb249MSxiLnRvdWNoT2JqZWN0PXt9LGIuJHNsaWRlci50cmlnZ2VyKFwic3dpcGVcIixbYixcInJpZ2h0XCJdKX1lbHNlIGIudG91Y2hPYmplY3Quc3RhcnRYIT09Yi50b3VjaE9iamVjdC5jdXJYJiYoYi5zbGlkZUhhbmRsZXIoYi5jdXJyZW50U2xpZGUpLGIudG91Y2hPYmplY3Q9e30pfSxiLnByb3RvdHlwZS5zd2lwZUhhbmRsZXI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztpZighKGIub3B0aW9ucy5zd2lwZT09PSExfHxcIm9udG91Y2hlbmRcImluIGRvY3VtZW50JiZiLm9wdGlvbnMuc3dpcGU9PT0hMXx8Yi5vcHRpb25zLmRyYWdnYWJsZT09PSExJiYtMSE9PWEudHlwZS5pbmRleE9mKFwibW91c2VcIikpKXN3aXRjaChiLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50PWEub3JpZ2luYWxFdmVudCYmdm9pZCAwIT09YS5vcmlnaW5hbEV2ZW50LnRvdWNoZXM/YS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoOjEsYi50b3VjaE9iamVjdC5taW5Td2lwZT1iLmxpc3RXaWR0aC9iLm9wdGlvbnMudG91Y2hUaHJlc2hvbGQsYi5vcHRpb25zLnZlcnRpY2FsU3dpcGluZz09PSEwJiYoYi50b3VjaE9iamVjdC5taW5Td2lwZT1iLmxpc3RIZWlnaHQvYi5vcHRpb25zLnRvdWNoVGhyZXNob2xkKSxhLmRhdGEuYWN0aW9uKXtjYXNlXCJzdGFydFwiOmIuc3dpcGVTdGFydChhKTticmVhaztjYXNlXCJtb3ZlXCI6Yi5zd2lwZU1vdmUoYSk7YnJlYWs7Y2FzZVwiZW5kXCI6Yi5zd2lwZUVuZChhKX19LGIucHJvdG90eXBlLnN3aXBlTW92ZT1mdW5jdGlvbihhKXt2YXIgZCxlLGYsZyxoLGI9dGhpcztyZXR1cm4gaD12b2lkIDAhPT1hLm9yaWdpbmFsRXZlbnQ/YS5vcmlnaW5hbEV2ZW50LnRvdWNoZXM6bnVsbCwhYi5kcmFnZ2luZ3x8aCYmMSE9PWgubGVuZ3RoPyExOihkPWIuZ2V0TGVmdChiLmN1cnJlbnRTbGlkZSksYi50b3VjaE9iamVjdC5jdXJYPXZvaWQgMCE9PWg/aFswXS5wYWdlWDphLmNsaWVudFgsYi50b3VjaE9iamVjdC5jdXJZPXZvaWQgMCE9PWg/aFswXS5wYWdlWTphLmNsaWVudFksYi50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD1NYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhiLnRvdWNoT2JqZWN0LmN1clgtYi50b3VjaE9iamVjdC5zdGFydFgsMikpKSxiLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITAmJihiLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPU1hdGgucm91bmQoTWF0aC5zcXJ0KE1hdGgucG93KGIudG91Y2hPYmplY3QuY3VyWS1iLnRvdWNoT2JqZWN0LnN0YXJ0WSwyKSkpKSxlPWIuc3dpcGVEaXJlY3Rpb24oKSxcInZlcnRpY2FsXCIhPT1lPyh2b2lkIDAhPT1hLm9yaWdpbmFsRXZlbnQmJmIudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg+NCYmYS5wcmV2ZW50RGVmYXVsdCgpLGc9KGIub3B0aW9ucy5ydGw9PT0hMT8xOi0xKSooYi50b3VjaE9iamVjdC5jdXJYPmIudG91Y2hPYmplY3Quc3RhcnRYPzE6LTEpLGIub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmc9PT0hMCYmKGc9Yi50b3VjaE9iamVjdC5jdXJZPmIudG91Y2hPYmplY3Quc3RhcnRZPzE6LTEpLGY9Yi50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCxiLnRvdWNoT2JqZWN0LmVkZ2VIaXQ9ITEsYi5vcHRpb25zLmluZmluaXRlPT09ITEmJigwPT09Yi5jdXJyZW50U2xpZGUmJlwicmlnaHRcIj09PWV8fGIuY3VycmVudFNsaWRlPj1iLmdldERvdENvdW50KCkmJlwibGVmdFwiPT09ZSkmJihmPWIudG91Y2hPYmplY3Quc3dpcGVMZW5ndGgqYi5vcHRpb25zLmVkZ2VGcmljdGlvbixiLnRvdWNoT2JqZWN0LmVkZ2VIaXQ9ITApLGIub3B0aW9ucy52ZXJ0aWNhbD09PSExP2Iuc3dpcGVMZWZ0PWQrZipnOmIuc3dpcGVMZWZ0PWQrZiooYi4kbGlzdC5oZWlnaHQoKS9iLmxpc3RXaWR0aCkqZyxiLm9wdGlvbnMudmVydGljYWxTd2lwaW5nPT09ITAmJihiLnN3aXBlTGVmdD1kK2YqZyksYi5vcHRpb25zLmZhZGU9PT0hMHx8Yi5vcHRpb25zLnRvdWNoTW92ZT09PSExPyExOmIuYW5pbWF0aW5nPT09ITA/KGIuc3dpcGVMZWZ0PW51bGwsITEpOnZvaWQgYi5zZXRDU1MoYi5zd2lwZUxlZnQpKTp2b2lkIDApfSxiLnByb3RvdHlwZS5zd2lwZVN0YXJ0PWZ1bmN0aW9uKGEpe3ZhciBjLGI9dGhpcztyZXR1cm4gMSE9PWIudG91Y2hPYmplY3QuZmluZ2VyQ291bnR8fGIuc2xpZGVDb3VudDw9Yi5vcHRpb25zLnNsaWRlc1RvU2hvdz8oYi50b3VjaE9iamVjdD17fSwhMSk6KHZvaWQgMCE9PWEub3JpZ2luYWxFdmVudCYmdm9pZCAwIT09YS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMmJihjPWEub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdKSxiLnRvdWNoT2JqZWN0LnN0YXJ0WD1iLnRvdWNoT2JqZWN0LmN1clg9dm9pZCAwIT09Yz9jLnBhZ2VYOmEuY2xpZW50WCxiLnRvdWNoT2JqZWN0LnN0YXJ0WT1iLnRvdWNoT2JqZWN0LmN1clk9dm9pZCAwIT09Yz9jLnBhZ2VZOmEuY2xpZW50WSx2b2lkKGIuZHJhZ2dpbmc9ITApKX0sYi5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXM9Yi5wcm90b3R5cGUuc2xpY2tVbmZpbHRlcj1mdW5jdGlvbigpe3ZhciBhPXRoaXM7bnVsbCE9PWEuJHNsaWRlc0NhY2hlJiYoYS51bmxvYWQoKSxhLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksYS4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oYS4kc2xpZGVUcmFjayksYS5yZWluaXQoKSl9LGIucHJvdG90eXBlLnVubG9hZD1mdW5jdGlvbigpe3ZhciBiPXRoaXM7YShcIi5zbGljay1jbG9uZWRcIixiLiRzbGlkZXIpLnJlbW92ZSgpLGIuJGRvdHMmJmIuJGRvdHMucmVtb3ZlKCksYi4kcHJldkFycm93JiZiLmh0bWxFeHByLnRlc3QoYi5vcHRpb25zLnByZXZBcnJvdykmJmIuJHByZXZBcnJvdy5yZW1vdmUoKSxiLiRuZXh0QXJyb3cmJmIuaHRtbEV4cHIudGVzdChiLm9wdGlvbnMubmV4dEFycm93KSYmYi4kbmV4dEFycm93LnJlbW92ZSgpLGIuJHNsaWRlcy5yZW1vdmVDbGFzcyhcInNsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLmNzcyhcIndpZHRoXCIsXCJcIil9LGIucHJvdG90eXBlLnVuc2xpY2s9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztiLiRzbGlkZXIudHJpZ2dlcihcInVuc2xpY2tcIixbYixhXSksYi5kZXN0cm95KCl9LGIucHJvdG90eXBlLnVwZGF0ZUFycm93cz1mdW5jdGlvbigpe3ZhciBiLGE9dGhpcztiPU1hdGguZmxvb3IoYS5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSxhLm9wdGlvbnMuYXJyb3dzPT09ITAmJmEuc2xpZGVDb3VudD5hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYhYS5vcHRpb25zLmluZmluaXRlJiYoYS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLGEuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSwwPT09YS5jdXJyZW50U2xpZGU/KGEuJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGEuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSk6YS5jdXJyZW50U2xpZGU+PWEuc2xpZGVDb3VudC1hLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZhLm9wdGlvbnMuY2VudGVyTW9kZT09PSExPyhhLiRuZXh0QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSxhLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIikpOmEuY3VycmVudFNsaWRlPj1hLnNsaWRlQ291bnQtMSYmYS5vcHRpb25zLmNlbnRlck1vZGU9PT0hMCYmKGEuJG5leHRBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGEuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSkpfSxiLnByb3RvdHlwZS51cGRhdGVEb3RzPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztudWxsIT09YS4kZG90cyYmKGEuJGRvdHMuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSxhLiRkb3RzLmZpbmQoXCJsaVwiKS5lcShNYXRoLmZsb29yKGEuY3VycmVudFNsaWRlL2Eub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIikpfSxiLnByb3RvdHlwZS52aXNpYmlsaXR5PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztkb2N1bWVudFthLmhpZGRlbl0/KGEucGF1c2VkPSEwLGEuYXV0b1BsYXlDbGVhcigpKTphLm9wdGlvbnMuYXV0b3BsYXk9PT0hMCYmKGEucGF1c2VkPSExLGEuYXV0b1BsYXkoKSl9LGIucHJvdG90eXBlLmluaXRBREE9ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2IuJHNsaWRlcy5hZGQoYi4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKSkuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiLTFcIn0pLmZpbmQoXCJhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3RcIikuYXR0cih7dGFiaW5kZXg6XCItMVwifSksYi4kc2xpZGVUcmFjay5hdHRyKFwicm9sZVwiLFwibGlzdGJveFwiKSxiLiRzbGlkZXMubm90KGIuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikpLmVhY2goZnVuY3Rpb24oYyl7YSh0aGlzKS5hdHRyKHtyb2xlOlwib3B0aW9uXCIsXCJhcmlhLWRlc2NyaWJlZGJ5XCI6XCJzbGljay1zbGlkZVwiK2IuaW5zdGFuY2VVaWQrY30pfSksbnVsbCE9PWIuJGRvdHMmJmIuJGRvdHMuYXR0cihcInJvbGVcIixcInRhYmxpc3RcIikuZmluZChcImxpXCIpLmVhY2goZnVuY3Rpb24oYyl7YSh0aGlzKS5hdHRyKHtyb2xlOlwicHJlc2VudGF0aW9uXCIsXCJhcmlhLXNlbGVjdGVkXCI6XCJmYWxzZVwiLFwiYXJpYS1jb250cm9sc1wiOlwibmF2aWdhdGlvblwiK2IuaW5zdGFuY2VVaWQrYyxpZDpcInNsaWNrLXNsaWRlXCIrYi5pbnN0YW5jZVVpZCtjfSl9KS5maXJzdCgpLmF0dHIoXCJhcmlhLXNlbGVjdGVkXCIsXCJ0cnVlXCIpLmVuZCgpLmZpbmQoXCJidXR0b25cIikuYXR0cihcInJvbGVcIixcImJ1dHRvblwiKS5lbmQoKS5jbG9zZXN0KFwiZGl2XCIpLmF0dHIoXCJyb2xlXCIsXCJ0b29sYmFyXCIpLGIuYWN0aXZhdGVBREEoKX0sYi5wcm90b3R5cGUuYWN0aXZhdGVBREE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO2EuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1hY3RpdmVcIikuYXR0cih7XCJhcmlhLWhpZGRlblwiOlwiZmFsc2VcIn0pLmZpbmQoXCJhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3RcIikuYXR0cih7dGFiaW5kZXg6XCIwXCJ9KX0sYi5wcm90b3R5cGUuZm9jdXNIYW5kbGVyPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztiLiRzbGlkZXIub24oXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIsXCIqXCIsZnVuY3Rpb24oYyl7Yy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTt2YXIgZD1hKHRoaXMpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmlzUGxheSYmKGQuaXMoXCI6Zm9jdXNcIik/KGIuYXV0b1BsYXlDbGVhcigpLGIucGF1c2VkPSEwKTooYi5wYXVzZWQ9ITEsYi5hdXRvUGxheSgpKSl9LDApfSl9LGEuZm4uc2xpY2s9ZnVuY3Rpb24oKXt2YXIgZixnLGE9dGhpcyxjPWFyZ3VtZW50c1swXSxkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxlPWEubGVuZ3RoO2ZvcihmPTA7ZT5mO2YrKylpZihcIm9iamVjdFwiPT10eXBlb2YgY3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGM/YVtmXS5zbGljaz1uZXcgYihhW2ZdLGMpOmc9YVtmXS5zbGlja1tjXS5hcHBseShhW2ZdLnNsaWNrLGQpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnKXJldHVybiBnO3JldHVybiBhfX0pO1xyXG4vKiFcclxuICogVkVSU0lPTjogMS43LjRcclxuICogREFURTogMjAxNC0wNy0xN1xyXG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vd3d3LmdyZWVuc29jay5jb21cclxuICpcclxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDA4LTIwMTUsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogVGhpcyB3b3JrIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHA6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXHJcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxyXG4gKiBcclxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXHJcbiAqKi9cclxudmFyIF9nc1Njb3BlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDp0aGlzfHx3aW5kb3c7KF9nc1Njb3BlLl9nc1F1ZXVlfHwoX2dzU2NvcGUuX2dzUXVldWU9W10pKS5wdXNoKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGU9d2luZG93LGk9ZnVuY3Rpb24oaSxyKXt2YXIgcz1cInhcIj09PXI/XCJXaWR0aFwiOlwiSGVpZ2h0XCIsbj1cInNjcm9sbFwiK3MsYT1cImNsaWVudFwiK3Msbz1kb2N1bWVudC5ib2R5O3JldHVybiBpPT09ZXx8aT09PXR8fGk9PT1vP01hdGgubWF4KHRbbl0sb1tuXSktKGVbXCJpbm5lclwiK3NdfHxNYXRoLm1heCh0W2FdLG9bYV0pKTppW25dLWlbXCJvZmZzZXRcIitzXX0scj1fZ3NTY29wZS5fZ3NEZWZpbmUucGx1Z2luKHtwcm9wTmFtZTpcInNjcm9sbFRvXCIsQVBJOjIsdmVyc2lvbjpcIjEuNy40XCIsaW5pdDpmdW5jdGlvbih0LHIscyl7cmV0dXJuIHRoaXMuX3dkdz10PT09ZSx0aGlzLl90YXJnZXQ9dCx0aGlzLl90d2Vlbj1zLFwib2JqZWN0XCIhPXR5cGVvZiByJiYocj17eTpyfSksdGhpcy52YXJzPXIsdGhpcy5fYXV0b0tpbGw9ci5hdXRvS2lsbCE9PSExLHRoaXMueD10aGlzLnhQcmV2PXRoaXMuZ2V0WCgpLHRoaXMueT10aGlzLnlQcmV2PXRoaXMuZ2V0WSgpLG51bGwhPXIueD8odGhpcy5fYWRkVHdlZW4odGhpcyxcInhcIix0aGlzLngsXCJtYXhcIj09PXIueD9pKHQsXCJ4XCIpOnIueCxcInNjcm9sbFRvX3hcIiwhMCksdGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChcInNjcm9sbFRvX3hcIikpOnRoaXMuc2tpcFg9ITAsbnVsbCE9ci55Pyh0aGlzLl9hZGRUd2Vlbih0aGlzLFwieVwiLHRoaXMueSxcIm1heFwiPT09ci55P2kodCxcInlcIik6ci55LFwic2Nyb2xsVG9feVwiLCEwKSx0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKFwic2Nyb2xsVG9feVwiKSk6dGhpcy5za2lwWT0hMCwhMH0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX3N1cGVyLnNldFJhdGlvLmNhbGwodGhpcyx0KTt2YXIgcj10aGlzLl93ZHd8fCF0aGlzLnNraXBYP3RoaXMuZ2V0WCgpOnRoaXMueFByZXYscz10aGlzLl93ZHd8fCF0aGlzLnNraXBZP3RoaXMuZ2V0WSgpOnRoaXMueVByZXYsbj1zLXRoaXMueVByZXYsYT1yLXRoaXMueFByZXY7dGhpcy5fYXV0b0tpbGwmJighdGhpcy5za2lwWCYmKGE+N3x8LTc+YSkmJmkodGhpcy5fdGFyZ2V0LFwieFwiKT5yJiYodGhpcy5za2lwWD0hMCksIXRoaXMuc2tpcFkmJihuPjd8fC03Pm4pJiZpKHRoaXMuX3RhcmdldCxcInlcIik+cyYmKHRoaXMuc2tpcFk9ITApLHRoaXMuc2tpcFgmJnRoaXMuc2tpcFkmJih0aGlzLl90d2Vlbi5raWxsKCksdGhpcy52YXJzLm9uQXV0b0tpbGwmJnRoaXMudmFycy5vbkF1dG9LaWxsLmFwcGx5KHRoaXMudmFycy5vbkF1dG9LaWxsU2NvcGV8fHRoaXMuX3R3ZWVuLHRoaXMudmFycy5vbkF1dG9LaWxsUGFyYW1zfHxbXSkpKSx0aGlzLl93ZHc/ZS5zY3JvbGxUbyh0aGlzLnNraXBYP3I6dGhpcy54LHRoaXMuc2tpcFk/czp0aGlzLnkpOih0aGlzLnNraXBZfHwodGhpcy5fdGFyZ2V0LnNjcm9sbFRvcD10aGlzLnkpLHRoaXMuc2tpcFh8fCh0aGlzLl90YXJnZXQuc2Nyb2xsTGVmdD10aGlzLngpKSx0aGlzLnhQcmV2PXRoaXMueCx0aGlzLnlQcmV2PXRoaXMueX19KSxzPXIucHJvdG90eXBlO3IubWF4PWkscy5nZXRYPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dkdz9udWxsIT1lLnBhZ2VYT2Zmc2V0P2UucGFnZVhPZmZzZXQ6bnVsbCE9dC5zY3JvbGxMZWZ0P3Quc2Nyb2xsTGVmdDpkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ6dGhpcy5fdGFyZ2V0LnNjcm9sbExlZnR9LHMuZ2V0WT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl93ZHc/bnVsbCE9ZS5wYWdlWU9mZnNldD9lLnBhZ2VZT2Zmc2V0Om51bGwhPXQuc2Nyb2xsVG9wP3Quc2Nyb2xsVG9wOmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOnRoaXMuX3RhcmdldC5zY3JvbGxUb3B9LHMuX2tpbGw9ZnVuY3Rpb24odCl7cmV0dXJuIHQuc2Nyb2xsVG9feCYmKHRoaXMuc2tpcFg9ITApLHQuc2Nyb2xsVG9feSYmKHRoaXMuc2tpcFk9ITApLHRoaXMuX3N1cGVyLl9raWxsLmNhbGwodGhpcyx0KX19KSxfZ3NTY29wZS5fZ3NEZWZpbmUmJl9nc1Njb3BlLl9nc1F1ZXVlLnBvcCgpKCk7XHJcblxyXG5cclxuXHJcbi8qXHJcbiAqIEN1c3RvbVxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgYmRzbSA9IHt9O1xyXG52YXIgd2F5cG9pbnRJZ25vciA9IGZhbHNlO1xyXG52YXIgaXNBbmltYXRlID0gZmFsc2U7XHJcbnZhciBjdXJyZW50U2VjdGlvbiA9ICQoJyNoZXJvJyk7XHJcbnZhciByb29tcyA9IFtdO1xyXG4kKCcuaW50ZXJpb3JzJykuZWFjaChmdW5jdGlvbihpbmRleCl7cm9vbXMucHVzaChbaW5kZXgsIDBdKX0pO1xyXG52YXIgY3VycmVudFJvb20gPSByb29tc1swXTtcclxuXHJcbmZ1bmN0aW9uIGdldE9mZnNldChlbCwgcG9zKSB7XHJcblx0bGV0IG9mZnNldCA9ICQoZWwpLm9mZnNldCgpO1xyXG5cdGlmICghcG9zKSB7XHJcblx0XHRyZXR1cm4gb2Zmc2V0O1xyXG5cdH0gZWxzZSBpZiAocG9zID09ICd0b3AnKSB7XHJcblx0XHRyZXR1cm4gb2Zmc2V0LnRvcDtcclxuXHR9IGVsc2UgaWYgKHBvcyA9PSAnbGVmdCcpIHtcclxuXHRcdHJldHVybiBvZmZzZXQubGVmdDtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRldGVjdG1vYigpIHtcclxuXHRpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSB8fFxyXG5cdFx0XHRuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKSB8fFxyXG5cdFx0XHRuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSkgfHxcclxuXHRcdFx0bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSB8fFxyXG5cdFx0XHRuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpIHx8XHJcblx0XHRcdG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkgfHxcclxuXHRcdFx0bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKSApXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZSBcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUb1ByZXZpb3VzKCkge1xyXG5cdGNvbnNvbGUubG9nKCdzY3JvbGxUb1ByZXZpb3VzJyk7XHJcbiAgdmFyIHByZXZFbGVtZW50ID0gY3VycmVudFNlY3Rpb24ucHJldkFsbCgnLnNlY3Rpb24nKVxyXG4gIGlmIChwcmV2RWxlbWVudC5sZW5ndGggPiAwICYmICFpc0FuaW1hdGUpIGdvdG9lbGVtZW50KCcjJyArIHByZXZFbGVtZW50LmF0dHIoJ2lkJyksIDEwMDAsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUb05leHQoKSB7XHJcblx0Y29uc29sZS5sb2coJ3Njcm9sbFRvTmV4dCcpO1xyXG4gIHZhciBuZXh0RWxlbWVudCA9IGN1cnJlbnRTZWN0aW9uLm5leHRBbGwoJy5zZWN0aW9uJylcclxuICBpZiAobmV4dEVsZW1lbnQubGVuZ3RoID4gMCAmJiAhaXNBbmltYXRlKSBnb3RvZWxlbWVudCgnIycgKyBuZXh0RWxlbWVudC5hdHRyKCdpZCcpLCAxMDAwLCAwKTtcclxufVxyXG5cclxuXHJcblxyXG5pZiAoZGV0ZWN0bW9iKCkpIHtcclxuXHQkKCcuaW50ZXJpb3JzJylcclxuXHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuXHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlLXVwJylcclxuXHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlLWRvd24nKVxyXG5cdFx0LnJlbW92ZUNsYXNzKCdwcmV2LXVwJylcclxuXHRcdC5yZW1vdmVDbGFzcygncHJldi1kb3duJyk7XHJcbn0gXHJcblxyXG5mdW5jdGlvbiBnb3RvZWxlbWVudChlbGVtZW50LCBzcGVlZCwgb2Zmc2V0KXtcclxuXHRcdGlzQW5pbWF0ZSA9IHRydWU7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogJChlbGVtZW50KS5vZmZzZXQoKS50b3AgKyBvZmZzZXRcclxuXHRcdH0sIHNwZWVkLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRpc0FuaW1hdGUgPSBmYWxzZTtcclxuXHRcdFx0Y3VycmVudFNlY3Rpb24gPSAkKGVsZW1lbnQpO1xyXG5cdFx0fSk7XHJcbn1cclxuXHJcbjtcclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xyXG5cclxuXHQvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdC8qIGhlcm9QYXJhbGF4INCQ0L3QuNC80LDRhtC40Y8gaGVybyDRgdC10LrRhtC40Lgg0L/RgNC4INGB0LrRgNC+0LvQtVxyXG5cdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHRiZHNtLmhlcm9QYXJhbGF4ID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHRcdFx0bGV0IHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdFx0aWYgKCFkZXRlY3Rtb2IoKSB8fCAkKCcjYnVyZ2VyQnRuJykuY3NzKCdkaXNwbGF5JykgIT09ICdibG9jaycpIHsgLy8gaWYgbm90IG1vYmlsZSBkZXZpY2VcclxuXHRcdFx0XHQkKCcuaGVyb19faW1hZ2UnKS5jc3MoeyAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoJyArIHkgKiAtMC4yNSArICdweCknIH0pO1xyXG5cdFx0XHRcdCQoJy5tYWluLXRleHQnKS5jc3MoeyAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoJyArIHkgKiAwLjIgKyAncHgpJyB9KTtcclxuXHRcdFx0XHQkKCcuaGVyb19fbG9nbycpLmNzcyh7ICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgeSAqIDAuMDE1ICsgJ3B4KScgfSk7XHJcblx0XHRcdFx0JCgnLnJlYWQtbW9yZScpLmNzcyh7ICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgeSAqIC0wLjQgKyAncHgpJyB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSBcclxuXHJcblx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQvKiB3YXlwb2ludHNcclxuXHQvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0YmRzbS53YXlwb2ludHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICghZGV0ZWN0bW9iKCkgfHwgJCgnI2J1cmdlckJ0bicpLmNzcygnZGlzcGxheScpICE9PSAnYmxvY2snKSB7XHJcblx0XHRcdHZhciB3YXlwb2ludDMgPSBuZXcgV2F5cG9pbnQoe1xyXG5cdFx0XHRcdGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8nKSxcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihkaXIpIHtcclxuXHRcdFx0XHRcdGlmIChkaXIgPT0gJ2Rvd24nKSB7XHJcblx0XHRcdFx0XHRcdCQoJy5wYWdlLW5hdl9faXRlbXMtZ3JvdXAnKS5maW5kKCcucGFnZS1uYXZfX2xpbmsnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCQodGhpcykuYXR0cignZGF0YS1zY3JvbGwtdG8nKSA9PT0gJyNwb3J0Zm9saW8nIClcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gJCgnI25hdicpLmFkZENsYXNzKCdkYXJrJyk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQkKCcjcG9ydGZvbGlvJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6ICcjOGJhNGJjJ30pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9mZnNldDogJzUwJSdcclxuXHRcdFx0fSk7XHJcblx0XHRcdHZhciB3YXlwb2ludDYgPSBuZXcgV2F5cG9pbnQoe1xyXG5cdFx0XHRcdGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8nKSxcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihkaXIpIHtcclxuXHRcdFx0XHRcdGlmIChkaXIgPT0gJ3VwJykge1xyXG5cdFx0XHRcdFx0XHQkKCcucGFnZS1uYXZfX2l0ZW1zLWdyb3VwJykuZmluZCgnLnBhZ2UtbmF2X19saW5rJykuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtc2Nyb2xsLXRvJykgPT0gJyNwb3J0Zm9saW8nIClcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyBcclxuXHRcdFx0XHRcdFx0XHRcdC8vICQoJyNuYXYnKS5hZGRDbGFzcygnZGFyaycpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0JCgnI3BvcnRmb2xpbycpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOiAnIzhiYTRiYyd9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvZmZzZXQ6ICctNTAlJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dmFyIHdheXBvaW50NCA9IG5ldyBXYXlwb2ludCh7XHJcblx0XHRcdFx0ZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpbycpLFxyXG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKGRpcikge1xyXG5cdFx0XHRcdFx0aWYgKGRpciA9PSAnZG93bicpIHtcclxuXHRcdFx0XHRcdFx0JCgnLnBhZ2UtbmF2X19pdGVtcy1ncm91cCcpLmZpbmQoJy5wYWdlLW5hdl9fbGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0JCgnI3BvcnRmb2xpbycpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOiAnIzFhMWExYSd9KTtcclxuXHRcdFx0XHRcdFx0Ly8gJCgnI25hdicpLnJlbW92ZUNsYXNzKCdkYXJrJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b2Zmc2V0OiAnLTUwJSdcclxuXHRcdFx0fSk7XHJcblx0XHRcdHZhciB3YXlwb2ludDUgPSBuZXcgV2F5cG9pbnQoe1xyXG5cdFx0XHRcdGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8nKSxcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihkaXIpIHtcclxuXHRcdFx0XHRcdGlmIChkaXIgPT0gJ3VwJykge1xyXG5cdFx0XHRcdFx0XHQkKCcucGFnZS1uYXZfX2l0ZW1zLWdyb3VwJykuZmluZCgnLnBhZ2UtbmF2X19saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHQkKCcjcG9ydGZvbGlvJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6ICcjMWExYTFhJ30pO1xyXG5cdFx0XHRcdFx0XHQvLyAkKCcjbmF2JykucmVtb3ZlQ2xhc3MoJ2RhcmsnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9mZnNldDogJzAnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQvKiBzY3JvbGxUbyDQodC60YDQvtC70LjQvdCzINC00L4g0YHQtdC60YbQuNC4INC/0L4g0LrQu9C40LrRg1xyXG5cdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHRiZHNtLnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiW2RhdGEtc2Nyb2xsLXRvXVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGRldGVjdG1vYigpICYmICQoJyNib2R5JykuaGFzQ2xhc3MoJ25hdmlnYXRpb24tbW9iaWxlJykpXHJcblx0XHRcdFx0bWVudVRvZ2xlKCk7XHJcblx0XHRcdHdheXBvaW50SWdub3IgPSB0cnVlO1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdHRvRWxlbWVudCA9ICR0aGlzLmF0dHIoJ2RhdGEtc2Nyb2xsLXRvJyksXHJcblx0XHRcdFx0JG9mZnNldCA9ICskdGhpcy5hdHRyKCdkYXRhLXNjcm9sbC1vZmZzZXQnKSB8fCAwLFxyXG5cdFx0XHRcdCRzcGVlZCA9ICR0aGlzLmF0dHIoJ2RhdGEtc2Nyb2xsLXNwZWVkJykgKiAxIHx8IDEwMDA7XHJcblxyXG5cdFx0XHRcdGdvdG9lbGVtZW50KHRvRWxlbWVudCwgJHNwZWVkLCAkb2Zmc2V0KVxyXG5cclxuXHRcdH0pO1xyXG5cdFx0JCh3aW5kb3cpLmJpbmQoJ21vdXNld2hlZWwnLCBmdW5jdGlvbihlKSB7d2F5cG9pbnRJZ25vciA9IGZhbHNlO30pO1xyXG5cdH1cclxuXHJcblx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQvKiBtb2JpbGVNZW51INCf0L7QstC10LTQtdC90LjQtSDQvNC+0LHQuNC70YzQvdC+0Lkg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcblx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdGJkc20ubW9iaWxlTWVudSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0ZnVuY3Rpb24gbWVudVRvZ2xlKCkge1xyXG5cdFx0XHR2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcblx0XHRcdHZhciBtb2JpbGVCb2R5Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVCb2R5Q29udGVudCcpO1xyXG5cdFx0XHRib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb24tbW9iaWxlJyk7XHJcblx0XHRcdG1vYmlsZUJvZHlDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb24tbW9iaWxlJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0YnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1lbnVUb2dsZSgpO1xyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQvKiBkZXNjdG9wTWVudSDQn9C+0LLQtdC00LXQvdC40LUg0LTQtdGB0LrRgtC+0L/QvdC+0Lkg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcblx0LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdGJkc20uZGVzY3RvcE1lbnUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHQkKCcucGFnZS1uYXZfX2l0ZW1zLWdyb3VwIHVsJylcclxuXHRcdFx0Lm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0XHRcdFx0aWYgKCQoJy5wYWdlLW5hdicpLmhhc0NsYXNzKCduYXYtaW50ZXJpb3JzLWluaXQnKSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKCcubmF2LWludGVyaW9ycycpLmNzcyh7ICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWCgtMTQlKScgfSk7XHJcblx0XHRcdFx0XHQkKCcucGFnZS1uYXZfX2l0ZW1zLWdyb3VwIHVsJykuY3NzKHsgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVYKDApJyB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICgkKCcucGFnZS1uYXYnKS5oYXNDbGFzcygnbmF2LWludGVyaW9ycy1pbml0JykpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCgnLm5hdi1pbnRlcmlvcnMnKS5jc3MoeyAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoMCUpJyB9KTtcclxuXHRcdFx0XHRcdCQoJy5wYWdlLW5hdl9faXRlbXMtZ3JvdXAgdWwnKS5jc3MoeyAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVgoNjUlKScgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0Lyogc2xpY2sg0J/QvtCy0LXQtNC10L3QuNC1INGB0LvQsNC50LTQtdGA0L7QslxyXG5cdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHRiZHNtLnNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0JCgnLnBvcnRmb2xpb19fYXV0aG9ycy1zbGlkZXInKS5zbGljayh7XHJcblx0ICAgIGRvdHMgOiBmYWxzZSxcclxuXHQgICAgc2xpZGVzVG9TaG93IDoxLFxyXG5cdCAgICBhcnJvd3M6dHJ1ZSxcclxuXHRcdFx0cHJldkFycm93OiAnPGRpdiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stYXJyb3dcIiA+PGkgY2xhc3M9XCJpIGlfbGFyZ2VfY2hldnJvbl9sZWZ0XCI8L2Rpdj4nLFxyXG5cdFx0XHRuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1hcnJvd1wiID48aSBjbGFzcz1cImkgaV9sYXJnZV9jaGV2cm9uX3JpZ2h0XCI8L2Rpdj4nXHJcblx0ICB9KTtcclxuXHQgIFxyXG5cdFx0JCgnLnBvcnRmb2xpb19fc2xpZGVyJykuc2xpY2soe1xyXG5cdCAgICBkb3RzIDogZmFsc2UsXHJcblx0ICAgIHNsaWRlc1RvU2hvdyA6MSxcclxuXHQgICAgYXJyb3dzOnRydWUsXHJcblx0XHRcdHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLWFycm93XCIgPjxpIGNsYXNzPVwiaSBpX2xhcmdlX2NoZXZyb25fbGVmdFwiPC9kaXY+JyxcclxuXHRcdFx0bmV4dEFycm93OiAnPGRpdiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stYXJyb3dcIiA+PGkgY2xhc3M9XCJpIGlfbGFyZ2VfY2hldnJvbl9yaWdodFwiPC9kaXY+J1xyXG5cdCAgfSk7XHJcblxyXG5cdFx0JCgnLmdhZGdldHMtY2Fyb3VzZWwnKS5zbGljayh7XHJcblx0ICAgIGRvdHMgOiB0cnVlLFxyXG5cdCAgICBzbGlkZXNUb1Nob3cgOjMsXHJcblx0ICAgIGFycm93czp0cnVlLFxyXG5cdFx0XHRwcmV2QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpY2stcHJldiBzbGljay1hcnJvd1wiID48aSBjbGFzcz1cImkgaV9sYXJnZV9jaGV2cm9uX2xlZnRcIjwvZGl2PicsXHJcblx0XHRcdG5leHRBcnJvdzogJzxkaXYgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLWFycm93XCIgPjxpIGNsYXNzPVwiaSBpX2xhcmdlX2NoZXZyb25fcmlnaHRcIjwvZGl2PicsXHJcblx0ICAgIHJlc3BvbnNpdmU6IFtcclxuXHJcblx0ICAgICAge1xyXG5cdCAgICAgICAgYnJlYWtwb2ludDogMTQ3MCxcclxuXHQgICAgICAgIHNldHRpbmdzOiB7XHJcblx0ICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuXHQgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIF1cclxuXHQgIH0pO1xyXG5cclxuXHRcdCQoJy5pbnRlcmlvcnNfX3NsaWRlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCB0aHMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0dGhzLmZpbmQoJy5pdGVtIGltZycpLmVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGxldCBpbWdVUkwgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xyXG5cdFx0XHRcdHRocy5maW5kKCcuaW50ZXJpb3JzX190aHVtYnMnKS5hcHBlbmQoXCI8bGkgZGF0YS1zbGlkZT0nXCIgKyBpICsgXCInID48aW1nIHNyYz0nXCIgKyBpbWdVUkwgKyBcIicgYWx0PScnIC8+PC9saT5cIik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLnNsaWNrJykuc2xpY2soe1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRhcnJvd3M6IHRydWUsXHJcblx0XHRcdGZhZGU6IGZhbHNlLFxyXG5cdFx0XHRhdXRvcGxheTogZmFsc2UsXHJcblx0XHRcdHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLWFycm93XCIgPjxpIGNsYXNzPVwiaSBpX2xhcmdlX2NoZXZyb25fbGVmdFwiPC9kaXY+JyxcclxuXHRcdFx0bmV4dEFycm93OiAnPGRpdiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stYXJyb3dcIiA+PGkgY2xhc3M9XCJpIGlfbGFyZ2VfY2hldnJvbl9yaWdodFwiPC9kaXY+J1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLmludGVyaW9yc19fdGh1bWJzIGxpJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciBzbGlkZW5vID0gJCh0aGlzKS5kYXRhKCdzbGlkZScpO1xyXG5cdFx0XHQkKCcuc2xpY2snKS5zbGljaygnc2xpY2tHb1RvJywgc2xpZGVubyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcuc2xpY2snKS5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xyXG5cdFx0XHR2YXIgbXlTbGlkZU51bWJlciA9IG5leHRTbGlkZTtcclxuXHRcdFx0Y3VycmVudFJvb21bMV0gPSBuZXh0U2xpZGU7XHJcblxyXG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5pbnRlcmlvcnNfX3RodW1icyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuaW50ZXJpb3JzX190aHVtYnMgbGknKS5lcShteVNsaWRlTnVtYmVyKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0Lyog0JLRi9GB0L7RgtCwINC60L7QvdGC0YDQvtC70LBcclxuXHQvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0YmRzbS5jb250cm9sc0FkYXB0aXZlID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnN0b3AoKTtcclxuXHRcdFx0Z290b2VsZW1lbnQoJyMnICsgY3VycmVudFNlY3Rpb24uYXR0cignaWQnKSwgMCwgMClcclxuXHRcdFx0dmFyIGludGVyaW9ycyA9ICQoJy5pbnRlcmlvcnMnKTtcclxuXHRcdFx0dmFyIGNvbnRyb2xzID0gJCgnLnJvb21zX19jb250cm9sJyk7XHJcblx0XHRcdHZhciBjb250cm9sc2dyb3VwID0gJCgnLnJvb21zX19jb250cm9sLWdyb3VwJykubm90KCcucm9vbXNfX2NvbnRyb2wtZ3JvdXAtLXNtYWxsJyk7XHJcblx0XHRcdHZhciBjb250cm9sc2dyb3VwU00gPSAkKCcucm9vbXNfX2NvbnRyb2wtZ3JvdXAtLXNtYWxsJyk7XHJcblx0XHRcdHZhciBjb250cm9sc0hlaWdodCA9ICQoJy5yb29tc19fY29udHJvbC1ncm91cCcpLmhlaWdodCgpO1xyXG5cclxuXHRcdFx0aW50ZXJpb3JzLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgdGhzID0gJCh0aGlzKTtcclxuXHRcdFx0XHR2YXIgdGhzSGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuXHRcdFx0XHR2YXIgZGVzY0hlaWdodCA9IHRocy5maW5kKCcuaW50ZXJpb3JzX19yb29tcycpLmhlaWdodCgpO1xyXG5cdFx0XHRcdGlmICh0aHMuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmIHdpbmRvdy5pbm5lckhlaWdodCA8IDc0OCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPiA2OTApe1xyXG5cdFx0XHRcdFx0Y29udHJvbHNncm91cC5yZW1vdmVDbGFzcygnaG9yaXpvbnRhbCcpO1xyXG5cdFx0XHRcdFx0Y29udHJvbHNncm91cFNNLnJlbW92ZUNsYXNzKCdob3Jpem9udGFsJyk7XHJcblx0XHRcdFx0XHRjb250cm9sc2dyb3VwLmNzcyh7J2hlaWdodCc6IHRoc0hlaWdodC1kZXNjSGVpZ2h0LTEzMCsncHgnLCAnd2lkdGgnOiAoKHRoc0hlaWdodC1kZXNjSGVpZ2h0LTEzMCkgLyAyKSAtIDUgKyAncHgnfSk7XHJcblx0XHRcdFx0XHRjb250cm9sc2dyb3VwU00uY3NzKHsndG9wJzogJ2F1dG8nLCAnaGVpZ2h0JzogJzU2cHgnLCAnd2lkdGgnOiA1NiAvIDIgLSA1ICsgJ3B4JywgJ2xlZnQnOiAoKHRoc0hlaWdodC1kZXNjSGVpZ2h0LTEzMCkgLyAyKSAtIDUgKyAncHgnIH0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHdpbmRvdy5pbm5lckhlaWdodCA8IDY5MCApIHtcclxuXHRcdFx0XHRcdGNvbnRyb2xzZ3JvdXAuYWRkQ2xhc3MoJ2hvcml6b250YWwnKTtcclxuXHRcdFx0XHRcdGNvbnRyb2xzZ3JvdXBTTS5hZGRDbGFzcygnaG9yaXpvbnRhbCcpO1xyXG5cdFx0XHRcdFx0Y29udHJvbHNncm91cFNNLmNzcyh7J3RvcCc6ICcwJywnbGVmdCc6ICcnLCAnaGVpZ2h0JzogMjUrJ3B4JywgJ3dpZHRoJzogMjUgKiAyICsgJ3B4JyB9KTtcclxuXHRcdFx0XHRcdGNvbnRyb2xzZ3JvdXAuY3NzKHsnaGVpZ2h0JzogMjUrJ3B4JywgJ3dpZHRoJzogMjUgKiAyICsgJ3B4J30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xyXG5cclxuXHR9XHJcblxyXG5cdGJkc20uZm9ybVN1Ym1pdCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHR9XHJcblxyXG5cdC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0LyogbW9kYWxcclxuXHQvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0YmRzbS5tb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBNb2RhbCBUaW55IG5vIGZvb3RlclxyXG4gICAgKi9cclxuICAgdmFyIG1vZGFsQ29udGVudCA9ICcnO1xyXG4gICB2YXIgbW9kYWxUaXRsZSA9ICQoJy5tb2RhbC1mb3JtIC5pbmZvLmgzJyk7XHJcbiAgIHZhciBtb2RhbFN1YlRpdGxlID0gJCgnLm1vZGFsLWZvcm0gLmluZm8uaDQnKTtcclxuICAgdmFyIGlucHV0Um9vbU51bWJlciA9ICQoJy5tb2RhbC1mb3JtIC5tb2RhbC1mb3JtX19yb29tLW51bWJlcicpO1xyXG4gICB2YXIgY3VyZW50Um9vbU51bWJlciA9IDA7XHJcbiAgIHZhciBmb3JtO1xyXG4gICB2YXIgbW9kYWxCb3ggPSAkKCcudGluZ2xlLW1vZGFsLWJveCcpO1xyXG4gICB2YXIgYmdVUkwgPSAnJztcclxuICAgdmFyIHJvb21zUHJpY2VzID0gJyc7XHJcblxyXG4gICAgdmFyIG1vZGFsRm9ybSA9IG5ldyB0aW5nbGUubW9kYWwoe1xyXG4gICAgXHRcdGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uT3BlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBtb2RhbEZvcm0uc2V0Q29udGVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybScpLmlubmVySFRNTCk7XHJcblx0XHRcdFx0XHRcdCQoJy5yZXNlcnZhdGlvbiAubW9kYWwtZm9ybV9fcm9vbS1udW1iZXInKS52YWwoY3VyZW50Um9vbU51bWJlcik7XHJcblx0XHRcdFx0XHRcdCQoJy5tb2RhbC1mb3JtX19pbWcgaW1nJykuYXR0cignc3JjJywgYmdVUkwpO1xyXG5cdFx0XHRcdFx0XHQkKCcubW9kYWwtZm9ybV9fcHJpY2VzJykuaHRtbChyb29tc1ByaWNlcyk7XHJcblx0XHRcdFx0XHRcdGZvcm0gPSAkKCcucmVzZXJ2YXRpb24gLm1vZGFsZm9ybScpLmF0dHIoJ2lkJywgJ21vZGFsZm9ybScpO1xyXG5cdFx0XHRcdFx0ICAgJCgnI21vZGFsZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0ICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdCAgICBiZHNtLmZvcm1TdWJtaXQoJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHQgICBcdCAgICAvLyBjbG9zZSBtb2RhbFxyXG5cdFx0XHRcdCAgICAkKCcubW9kYWwtZm9ybV9fY2xvc2UnKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdFx0XHQgICAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0ICAgIFx0bW9kYWxGb3JtLmNsb3NlKCk7XHJcblx0XHRcdFx0ICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFx0bW9kYWxGb3JtLnNldENvbnRlbnQoJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNzc0NsYXNzOiBbJ3Jlc2VydmF0aW9uJ11cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsRm9ybS5hZGRGb290ZXJCdG4oJ9CX0LDQsdGA0L7QvdC40YDQvtCy0LDRgtGMINC90L7QvNC10YAnLCAnYnV0dG9uIHRpbmdsZS1idG4tLXB1bGwtcmlnaHQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYnRuID0gJCgnLmpzLW1vZGFsJyk7XHJcblx0XHRidG4uY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0Y3VyZW50Um9vbU51bWJlciA9ICskKHRoaXMpLnNpYmxpbmdzKCcucm9vbXNfX251bWJlcicpLnRleHQoKS5zdWJzdHIoMSk7XHJcblx0XHRcdGlucHV0Um9vbU51bWJlci52YWwoY3VyZW50Um9vbU51bWJlcik7XHJcblx0XHRcdHJvb21zUHJpY2VzID0gJCh0aGlzKS5zaWJsaW5ncygnLnJvb21zX19wcmljZXMnKS5odG1sKCk7XHJcblx0XHRcdG1vZGFsVGl0bGUudGV4dCgn0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Ywg0L3QvtC80LXRgCAnKyBjdXJlbnRSb29tTnVtYmVyICk7XHJcblx0XHRcdG1vZGFsU3ViVGl0bGUudGV4dCgkKHRoaXMpLnNpYmxpbmdzKCcucm9vbXNfX3RpdGxlJykudGV4dCgpKTtcclxuXHRcdFx0YmdVUkwgPSAkKCQodGhpcykucGFyZW50cygnLnJvb21zJykuc2libGluZ3MoJy5pbnRlcmlvcnNfX3NsaWRlcicpLmZpbmQoJy5zbGljayAuc2xpY2stbGlzdCAuc2xpY2stdHJhY2sgLml0ZW0nKVsxXSkuZmluZCgnaW1nJykuYXR0cignc3JjJyk7XHJcblx0XHRcdG1vZGFsRm9ybS5vcGVuKCk7XHJcblxyXG4gICAgfSk7IFxyXG5cclxuXHR9XHJcblxyXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcblx0YmRzbS5oZXJvUGFyYWxheCgpO1xyXG5cdGJkc20ud2F5cG9pbnRzKCk7XHJcblx0YmRzbS5zY3JvbGxUbygpO1xyXG5cdGJkc20ubW9iaWxlTWVudSgpO1xyXG5cdGJkc20uZGVzY3RvcE1lbnUoKTtcclxuXHRiZHNtLnNsaWNrKCk7XHJcblx0YmRzbS5jb250cm9sc0FkYXB0aXZlKCk7XHJcblx0YmRzbS5tb2RhbCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGxldCBzY3JvbGwgPSB0cnVlO1xyXG5cclxuXHR2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tcycpO1xyXG5cdHZhciBvbldoZWVsU3RvcCA9IHRydWU7XHJcblx0dmFyIHN1bSA9IDA7XHJcblx0dmFyIHNsaWRlc3RhdHVzd2lkdGggPSAwO1xyXG5cdHZhciB0ZXN0ID0gZmFsc2U7XHJcblx0dmFyIHNsaWRlY291bnRlciA9IDA7XHJcblx0bGV0IHJvb21zQ29udGVudCA9ICQoJyNyb29tcyAuc2xpY2snKTtcclxuXHRsZXQgcm9vbXNMZW5ndGggPSByb29tc0NvbnRlbnQubGVuZ3RoO1xyXG5cdGxldCByb29tc0NvbnRyb2xzID0gJCgnLnJvb21zX19jb250cm9scycpO1xyXG5cdGxldCBzdG9wQW5pbWF0ZWQgPSB0cnVlO1xyXG5cclxuXHRmdW5jdGlvbiByb29tc0luaXRlZCgpIHtcclxuXHRcdHJvb21zQ29udHJvbHMuYXBwZW5kKFwiPGRpdiBjbGFzcz0ncm9vbXNfX2NvbnRyb2wtcGFnaW5hdGlvbic+PHVsPjwvdWw+PC9kaXY+XCIpO1xyXG5cclxuXHRcdCQoJy5uYXYtaW50ZXJpb3JzIGxpJykuZWFjaChmdW5jdGlvbihpKXtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdkYXRhLXJvb20tbnVtYmVyJywgaSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHJvb21zTGVuZ3RoICsgMTsgaSsrKSB7XHJcblx0XHRcdHJvb21zQ29udHJvbHMuZmluZCgndWwnKS5hcHBlbmQoJzxsaT48YSBkYXRhLXJvb20tbnVtYmVyPVwiJyArIChpIC0gMSkgKyAnXCI+JyArIGkgKyAnPC9hPjwvbGk+Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JCgnI3Jvb21zIC5pbnRlcmlvcnMnKS5lYWNoKGZ1bmN0aW9uKGkpIHsgJCh0aGlzKS5hdHRyKCdkYXRhLXJvb20tbnVtYmVyJywgaSk7IH0pO1xyXG5cdFx0JCgnLm5hdi1pbnRlcmlvcnMgYScpLmVhY2goZnVuY3Rpb24oaSkgeyAkKHRoaXMpLmF0dHIoJ2RhdGEtcm9vbS1udW1iZXInLCBpKTsgfSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBuZXh0Um9vbSgpIHtcclxuXHRcdHZhciBpbnRlcmlvcnMgPSAkKCcjcm9vbXMgLmludGVyaW9ycycpLFxyXG5cdFx0XHRzbGljayA9ICQoJyNyb29tcyAuc2xpY2snKTtcclxuXHRcdFx0c2xpZGVjb3VudGVyID0gY3VycmVudFJvb21bMF07XHJcblxyXG5cdFx0aWYgKHNsaWRlY291bnRlciA8IHNsaWNrLmxlbmd0aCAtIDEgJiYgIWlzQW5pbWF0ZSkge1xyXG5cdFx0XHRzbGlkZWNvdW50ZXIrKztcclxuXHJcblx0XHRcdHNsaWRlQ29udGVudChzbGlkZWNvdW50ZXIpO1xyXG5cclxuXHJcblx0XHR9IGVsc2UgaWYgKHNsaWRlY291bnRlciA9PSBzbGljay5sZW5ndGggLSAxICYmICF3YXlwb2ludElnbm9yICYmICFpc0FuaW1hdGUpIHtcclxuXHRcdFx0c2Nyb2xsVG9OZXh0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBwcmV2Um9vbSgpIHtcclxuXHRcdHZhciBpbnRlcmlvcnMgPSAkKCcjcm9vbXMgLmludGVyaW9ycycpLFxyXG5cdFx0XHRzbGljayA9ICQoJy5zbGljaycpLFxyXG5cdFx0XHRyb29tcyA9ICQoJy5pbnRlcmlvcnNfX3RodW1icycpLFxyXG5cdFx0XHR0aHVtYnMgPSAkKCcuaW50ZXJpb3JzX19yb29tcycpO1xyXG5cdFx0XHRzbGlkZWNvdW50ZXIgPSBjdXJyZW50Um9vbVswXTtcclxuXHJcblx0XHRpZiAoc2xpZGVjb3VudGVyID4gMCAmJiAhaXNBbmltYXRlKSB7XHJcblx0XHRcdHNsaWRlY291bnRlci0tO1xyXG5cdFx0XHRzbGlkZUNvbnRlbnQoc2xpZGVjb3VudGVyKTtcclxuXHRcdH0gZWxzZSBpZiAoIWlzQW5pbWF0ZSkge1xyXG5cdFx0XHRzY3JvbGxUb1ByZXZpb3VzKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uV2hlZWwoZSkge1xyXG5cdFx0aWYgKCFkZXRlY3Rtb2IoKSB8fCAkKCcjYnVyZ2VyQnRuJykuY3NzKCdkaXNwbGF5JykgIT09ICdibG9jaycpe1xyXG5cdFx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG5cdFx0XHR2YXIgZGVsdGEgPSBlLmRlbHRhWSB8fCBlLmRldGFpbCB8fCBlLndoZWVsRGVsdGE7XHJcblxyXG5cdFx0XHRzdW0gPSBzdW0gKyBkZWx0YTtcclxuXHRcdFx0c2xpZGVzdGF0dXN3aWR0aCA9IE1hdGguYWJzKHNsaWRlc3RhdHVzd2lkdGggKyBkZWx0YSk7XHJcblxyXG5cdFx0XHRpZiAoZGVsdGEgPiAwICYmIHN0b3BBbmltYXRlZCkge1xyXG5cdFx0XHRcdG5leHRSb29tKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRlbHRhIDwgMCAmJiBzdG9wQW5pbWF0ZWQpIHtcclxuXHRcdFx0XHRwcmV2Um9vbSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fX1cclxuXHJcblx0ZnVuY3Rpb24gc2xpZGVDb250ZW50KGluZGV4KSB7XHJcblx0XHRzdG9wQW5pbWF0ZWQgPSBmYWxzZTtcclxuXHRcdGN1cnJlbnRSb29tID0gcm9vbXNbaW5kZXhdO1xyXG5cdFx0c2xpZGVjb3VudGVyID0gY3VycmVudFJvb21bMF07XHJcblxyXG5cdFx0dmFyIGludGVyaW9ycyA9ICQoJyNyb29tcyAuaW50ZXJpb3JzJyk7XHJcblx0XHR2YXIgcHJldkluZGV4ID0gMDtcclxuXHRcdHZhciBzbGljayA9ICQoJyNyb29tcyAuc2xpY2snKSxcclxuXHRcdFx0cm9vbXNMZW5ndGggPSBzbGljay5sZW5ndGg7XHJcblx0XHRpbnRlcmlvcnMucmVtb3ZlQ2xhc3MoJ3ByZXYtdXAnKTtcclxuXHRcdGludGVyaW9ycy5yZW1vdmVDbGFzcygncHJldi1kb3duJyk7XHJcblx0XHRpbnRlcmlvcnMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHRocyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAodGhzLmhhc0NsYXNzKCdhY3RpdmUnKSApeyBcclxuXHRcdFx0XHRwcmV2SW5kZXggPSB0aHMuZGF0YSgncm9vbS1udW1iZXInKTtcclxuXHRcdFx0XHRpZiAocHJldkluZGV4ID4gaW5kZXggKXtcclxuXHRcdFx0XHR0aHMuYWRkQ2xhc3MoJ3ByZXYtdXAnKTtcclxuXHRcdFx0fSBlbHNle1xyXG5cdFx0XHRcdHRocy5hZGRDbGFzcygncHJldi1kb3duJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHR0aHMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdHRocy5yZW1vdmVDbGFzcygnYWN0aXZlLXVwJyk7XHJcblx0XHRcdFx0dGhzLnJlbW92ZUNsYXNzKCdhY3RpdmUtZG93bicpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLnJvb21zX19jb250cm9sJykucmVtb3ZlQ2xhc3MoJ3Jvb21zX19jb250cm9sLS1kaXNhYmxlZCcpO1xyXG5cdFx0aWYgKGluZGV4IDw9IDApIHtcclxuXHRcdFx0c2xpZGVjb3VudGVyID0gMDtcclxuXHRcdFx0aW5kZXggPSAwO1xyXG5cdFx0XHQkKCcucm9vbXNfX2NvbnRyb2wtLWxlZnQnKS5hZGRDbGFzcygncm9vbXNfX2NvbnRyb2wtLWRpc2FibGVkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoaW5kZXggPj0gcm9vbXNMZW5ndGggLSAxKSB7XHJcblx0XHRcdHNsaWRlY291bnRlciA9IHJvb21zTGVuZ3RoIC0gMTtcclxuXHRcdFx0aW5kZXggPSByb29tc0xlbmd0aCAtIDE7XHJcblx0XHRcdCQoJy5yb29tc19fY29udHJvbC0tcmlnaHQnKS5hZGRDbGFzcygncm9vbXNfX2NvbnRyb2wtLWRpc2FibGVkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JCgnLnJvb21zX19jb250cm9sLXBhZ2luYXRpb24gdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcucm9vbXNfX2NvbnRyb2wtcGFnaW5hdGlvbiB1bCBsaScpLmFkZENsYXNzKGZ1bmN0aW9uKGkpIHtcclxuXHRcdFx0aWYgKGkgPT0gaW5kZXgpXHJcblx0XHRcdFx0cmV0dXJuIFwiYWN0aXZlXCI7XHJcblx0XHR9KTtcclxuXHRcdCQoJy5uYXYtaW50ZXJpb3JzIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLm5hdi1pbnRlcmlvcnMgbGknKS5hZGRDbGFzcyhmdW5jdGlvbihpKSB7XHJcblx0XHRcdGlmIChpID09IGluZGV4KVxyXG5cdFx0XHRcdHJldHVybiBcImFjdGl2ZVwiO1xyXG5cdFx0fSk7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0aW50ZXJpb3JzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0aHMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKHRocy5kYXRhKCdyb29tLW51bWJlcicpID09IGluZGV4KXtcclxuXHRcdFx0XHRcdHRocy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKHByZXZJbmRleCA+IGluZGV4KXtcclxuXHRcdFx0XHRcdHRocy5hZGRDbGFzcygnYWN0aXZlLXVwJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwcmV2SW5kZXggIT09IGluZGV4KSB7XHJcblx0XHRcdFx0XHR0aHMuYWRkQ2xhc3MoJ2FjdGl2ZS1kb3duJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQkKCcucm9vbXNfX2NvbnRyb2wtLWxlZnQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHNsaWRlY291bnRlciA+IDApe1xyXG5cdFx0XHRcdFx0c2xpZGVjb3VudGVyLS07XHJcblx0XHRcdFx0XHRzbGlkZUNvbnRlbnQoc2xpZGVjb3VudGVyKTtcclxuXHRcdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKCcucm9vbXNfX2NvbnRyb2wtLXJpZ2h0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoc2xpZGVjb3VudGVyIDwgcm9vbXNMZW5ndGgtMSl7XHJcblx0XHRcdHNsaWRlY291bnRlcisrO1xyXG5cdFx0XHRzbGlkZUNvbnRlbnQoc2xpZGVjb3VudGVyKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JCgnLnJvb21zX19jb250cm9sLS10b3AnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdHNjcm9sbFRvUHJldmlvdXMoKTtcclxuXHR9KTtcclxuXHQkKCcucm9vbXNfX2NvbnRyb2wtLWJvdHRvbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0c2Nyb2xsVG9OZXh0KCk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQkKCcubmF2LWludGVyaW9ycyBhJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRzbGlkZUNvbnRlbnQoJCh0aGlzKS5kYXRhKCdyb29tLW51bWJlcicpKTtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIGNoZWNrQ2hhbmdlU2VjdGlvbihlbGVtLCBkaXIpe1xyXG5cdFx0aWYgKGRpciA9PSAndXAnICYmIE1hdGguY2VpbChlbGVtLnNjcm9sbFRvcCgpKSA9PSAwICl7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cdFx0aWYgKGRpciA9PSAnZG93bicgJiYgTWF0aC5jZWlsKGVsZW0uc2Nyb2xsVG9wKCkpID49IGVsZW1bMF0uc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ICl7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG5cclxuXHQkKHdpbmRvdykuYmluZCgnbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRpZiAoIWRldGVjdG1vYigpIHx8ICQoJyNidXJnZXJCdG4nKS5jc3MoJ2Rpc3BsYXknKSAhPT0gJ2Jsb2NrJyl7XHJcblx0XHRcdGxldCB5ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHRcdFx0dmFyIGRlbHRhID0gZS5vcmlnaW5hbEV2ZW50LmRlbHRhWSB8fCBlLm9yaWdpbmFsRXZlbnQuZGV0YWlsIHx8IGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xyXG5cdFx0XHRpZiAoZGVsdGEgPiAwICYmICFpc0FuaW1hdGUpe1xyXG5cdFx0IFx0XHRpZiAoY3VycmVudFNlY3Rpb24uYXR0cignaWQnKSAhPT0gJ3Jvb21zJykge1xyXG5cdFx0ICAgIFx0c2Nyb2xsVG9OZXh0KCk7XHJcblx0XHQgIFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKCFpc0FuaW1hdGUpe1xyXG5cdFx0IFx0XHRpZiAoY3VycmVudFNlY3Rpb24uYXR0cignaWQnKSAhPT0gJ3Jvb21zJyApIHtcclxuXHRcdCAgICBcdHNjcm9sbFRvUHJldmlvdXMoKTtcclxuXHRcdCAgXHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW0uYWRkRXZlbnRMaXN0ZW5lcikge1xyXG5cdFx0XHRcdGlmICgnb253aGVlbCcgaW4gZG9jdW1lbnQpIHtcclxuXHRcdFx0XHRcdC8vIElFOSssIEZGMTcrXHJcblx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50KSB7XHJcblx0XHRcdFx0XHQvLyDRg9GB0YLQsNGA0LXQstGI0LjQuSDQstCw0YDQuNCw0L3RgiDRgdC+0LHRi9GC0LjRj1xyXG5cdFx0XHRcdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbldoZWVsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gRmlyZWZveCA8IDE3XHJcblx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJNb3pNb3VzZVBpeGVsU2Nyb2xsXCIsIG9uV2hlZWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHsgLy8gSUU4LVxyXG5cdFx0XHRcdGVsZW0uYXR0YWNoRXZlbnQoXCJvbm1vdXNld2hlZWxcIiwgb25XaGVlbCk7XHJcblx0XHRcdH1cclxuXHR9XHJcblx0fSk7XHJcblxyXG5cdCQoJy5pbnRlcmlvcnNfX3NsaWRlcicpLm9uKFwid2Via2l0QW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgbXNBbmltYXRpb25FbmQgYW5pbWF0aW9uZW5kXCIsIGJlZm9yZUFuaW1hdGVkICk7XHJcblxyXG5cdGZ1bmN0aW9uIGJlZm9yZUFuaW1hdGVkICgpIHtcclxuXHQgIHN0b3BBbmltYXRlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCFkZXRlY3Rtb2IoKSB8fCAkKCcjYnVyZ2VyQnRuJykuY3NzKCdkaXNwbGF5JykgIT09ICdibG9jaycpe1xyXG5cdFx0ZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG5cdFx0bGV0IHkgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG5cdFx0aWYgKHkgPj0gZ2V0T2Zmc2V0KCcjcm9vbXMnLCAndG9wJykgLSAxMCkge1xyXG5cdFx0XHQkKCcucGFnZS1uYXZfX2l0ZW1zLWdyb3VwIHVsJykuY3NzKHsgJ3RyYW5zZm9ybSc6IFwidHJhbnNsYXRlWCg2NSUpXCIgfSk7XHJcblx0XHRcdCQoJy5uYXYtaW50ZXJpb3JzJykuY3NzKHsgJ3RyYW5zZm9ybSc6IFwidHJhbnNsYXRlWCgwKVwiIH0pO1xyXG5cdFx0XHQkKCcucGFnZS1uYXYnKS5hZGRDbGFzcygnbmF2LWludGVyaW9ycy1pbml0Jyk7XHJcblx0XHRcdCQoJy5wYWdlLW5hdicpLnJlbW92ZUNsYXNzKCdzaG93SG9tZUxpbmsnKTtcclxuXHRcdFx0JCgnLmludGVyaW9ycycpLmVhY2goZnVuY3Rpb24oaSl7XHJcblx0XHRcdFx0aWYgKGkgPT0gMCl7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLnBhZ2UtbmF2JykucmVtb3ZlQ2xhc3MoJ25hdi1pbnRlcmlvcnMtaW5pdCcpO1xyXG5cdFx0XHQkKCcucGFnZS1uYXZfX2l0ZW1zLWdyb3VwIHVsJykuY3NzKHsgJ3RyYW5zZm9ybSc6IFwidHJhbnNsYXRlWCgwKVwiIH0pO1xyXG5cdFx0XHQkKCcubmF2LWludGVyaW9ycycpLmNzcyh7ICd0cmFuc2Zvcm0nOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHkgPj0gZ2V0T2Zmc2V0KCcjcG9ydGZvbGlvJywgJ3RvcCcpIC0gMTApIHtcclxuXHRcdFx0JCgnLnBhZ2UtbmF2JykucmVtb3ZlQ2xhc3MoJ25hdi1pbnRlcmlvcnMtaW5pdCcpO1xyXG5cdFx0XHQkKCcucGFnZS1uYXZfX2l0ZW1zLWdyb3VwIHVsJykuY3NzKHsgJ3RyYW5zZm9ybSc6IFwidHJhbnNsYXRlWCgwKVwiIH0pO1xyXG5cdFx0XHQkKCcubmF2LWludGVyaW9ycycpLmNzcyh7ICd0cmFuc2Zvcm0nOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIgfSk7XHJcblx0XHRcdCQoJy5wYWdlLW5hdicpLmFkZENsYXNzKCdzaG93SG9tZUxpbmsnKTtcclxuXHRcdH0gXHJcblx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblx0cm9vbXNJbml0ZWQoKTtcclxuXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLmtleWRvd24oZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0d2F5cG9pbnRJZ25vciA9IGZhbHNlXHJcbiBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuIFx0aWYgKGN1cnJlbnRTZWN0aW9uLmF0dHIoJ2lkJykgPT0gJ3Jvb21zJykge1xyXG4gICAgXHRwcmV2Um9vbSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzY3JvbGxUb1ByZXZpb3VzKCk7XHJcbiAgfVxyXG4gfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDQwKSB7XHJcbiAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiBcdFx0aWYgKGN1cnJlbnRTZWN0aW9uLmF0dHIoJ2lkJykgPT0gJ3Jvb21zJykge1xyXG4gICAgXHRuZXh0Um9vbSgpO1xyXG4gIFx0fSBlbHNlIHtcclxuICAgIFx0c2Nyb2xsVG9OZXh0KCk7XHJcbiAgXHR9XHJcbiB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzkpIHtcclxuICAgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFx0aWYgKGN1cnJlbnRTZWN0aW9uLmF0dHIoJ2lkJykgPT0gJ3Jvb21zJykge1xyXG5cdFx0IFx0XHQkKCcuc2xpY2snKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG5cdFx0IFx0XHRcdGlmIChpID09IGN1cnJlbnRSb29tWzBdKXtcclxuXHRcdCBcdFx0XHRcdCQodGhpcykuc2xpY2soXCJzbGlja05leHRcIik7XHJcblx0XHQgXHRcdFx0fVxyXG5cdFx0IFx0XHR9KTtcclxuICAgIFx0fVxyXG4gfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDM3KSB7XHJcbiAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcdGlmIChjdXJyZW50U2VjdGlvbi5hdHRyKCdpZCcpID09ICdyb29tcycpIHtcclxuXHRcdCBcdFx0JCgnLnNsaWNrJykuZWFjaChmdW5jdGlvbihpKXtcclxuXHRcdCBcdFx0XHRpZiAoaSA9PSBjdXJyZW50Um9vbVswXSl7XHJcblx0XHQgXHRcdFx0XHQkKHRoaXMpLnNsaWNrKFwic2xpY2tQcmV2XCIpO1xyXG5cdFx0IFx0XHRcdH1cclxuXHRcdCBcdFx0fSk7XHJcbiAgICBcdH1cclxuIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
