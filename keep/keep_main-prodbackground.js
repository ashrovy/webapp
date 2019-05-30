var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
da("Promise",function(a){function b(e){this.B=0;this.$=void 0;this.u=[];var h=this.W();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.ha=function(e){if(null==this.g){this.g=[];var h=this;this.ia(function(){h.Ca()})}this.g.push(e)};var f=ca.setTimeout;c.prototype.ia=function(e){f(e,0)};c.prototype.Ca=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(m){this.ya(m)}}}this.g=null};c.prototype.ya=function(e){this.ia(function(){throw e;})};b.prototype.W=function(){function e(m){return function(n){k||(k=!0,m.call(h,n))}}var h=this,k=!1;return{resolve:e(this.La),reject:e(this.Z)}};b.prototype.La=function(e){if(e===this)this.Z(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.Na(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.Ka(e):
this.la(e)}};b.prototype.Ka=function(e){var h=void 0;try{h=e.then}catch(k){this.Z(k);return}"function"==typeof h?this.Oa(h,e):this.la(e)};b.prototype.Z=function(e){this.oa(2,e)};b.prototype.la=function(e){this.oa(1,e)};b.prototype.oa=function(e,h){if(0!=this.B)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.B);this.B=e;this.$=h;this.Da()};b.prototype.Da=function(){if(null!=this.u){for(var e=0;e<this.u.length;++e)g.ha(this.u[e]);this.u=null}};var g=new c;b.prototype.Na=
function(e){var h=this.W();e.F(h.resolve,h.reject)};b.prototype.Oa=function(e,h){var k=this.W();try{e.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};b.prototype.then=function(e,h){function k(r,u){return"function"==typeof r?function(t){try{m(r(t))}catch(v){n(v)}}:u}var m,n,p=new b(function(r,u){m=r;n=u});this.F(k(e,m),k(h,n));return p};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.F=function(e,h){function k(){switch(m.B){case 1:e(m.$);break;case 2:h(m.$);break;default:throw Error("Unexpected state: "+
m.B);}}var m=this;null==this.u?g.ha(k):this.u.push(k)};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var m=q(e),n=m.next();!n.done;n=m.next())d(n.value).F(h,k)})};b.all=function(e){var h=q(e),k=h.next();return k.done?d([]):new b(function(m,n){function p(t){return function(v){r[t]=v;u--;0==u&&m(r)}}var r=[],u=0;do r.push(void 0),u++,d(k.value).F(p(r.length-1),n),k=h.next();while(!k.done)})};return b});
function w(a){return void 0!==a}
function x(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a,b,c){return a.call.apply(a.bind,arguments)}function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return y.apply(null,arguments)}var ha=Date.now||function(){return+new Date};function z(a,b){function c(){}c.prototype=b.prototype;a.qb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pb=function(d,f,g){for(var e=Array(arguments.length-2),h=2;h<arguments.length;h++)e[h-2]=arguments[h];return b.prototype[f].apply(d,e)}};function A(a,b){this.type=a;this.L=b||null;this.Pa=JSON.stringify(ia(this))}A.prototype.toString=function(){return this.Pa};function ia(a){var b={};b=(b.type=a.type,b);a.L&&(b.nodeId=a.L);return b};function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}z(B,Error);B.prototype.name="CustomError";function C(a,b){a=a.split("%s");for(var c="",d=a.length-1,f=0;f<d;f++)c+=a[f]+(f<b.length?b[f]:"%s");B.call(this,c+a[d])}z(C,B);C.prototype.name="AssertionError";function D(a,b,c,d){var f="Assertion failed";if(c){f+=": "+c;var g=d}else a&&(f+=": "+a,g=b);throw new C(""+f,g||[]);}function E(a,b,c){a||D("",null,b,Array.prototype.slice.call(arguments,2));return a}function F(a,b){throw new C("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));}
function G(a,b,c){"string"==typeof a||D("Expected string but got %s: %s.",[x(a),a],b,Array.prototype.slice.call(arguments,2))}function H(a,b,c){"array"==x(a)||D("Expected array but got %s: %s.",[x(a),a],b,Array.prototype.slice.call(arguments,2))};var I=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};function J(a){a=w(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return I("0",Math.max(0,2-b))+a};function ja(a){this.color=a};var ka={Wa:["BC","AD"],Va:["Before Christ","Anno Domini"],Ya:"JFMAMJJASOND".split(""),hb:"JFMAMJJASOND".split(""),Xa:"January February March April May June July August September October November December".split(" "),gb:"January February March April May June July August September October November December".split(" "),cb:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),jb:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),nb:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
lb:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),fb:"Sun Mon Tue Wed Thu Fri Sat".split(" "),kb:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Za:"SMTWTFS".split(""),ib:"SMTWTFS".split(""),eb:["Q1","Q2","Q3","Q4"],ab:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Ra:["AM","PM"],Ta:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],mb:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ua:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ua:6,ob:[5,6],va:5},K=ka;
K=ka;function L(a,b,c){"number"==typeof a?(this.a=la(a,b||0,c||1),M(this,c||1)):(b=typeof a,"object"==b&&null!=a||"function"==b?(this.a=la(a.getFullYear(),a.getMonth(),a.getDate()),M(this,a.getDate())):(this.a=new Date(ha()),a=this.a.getDate(),this.a.setHours(0),this.a.setMinutes(0),this.a.setSeconds(0),this.a.setMilliseconds(0),M(this,a)))}function la(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}l=L.prototype;l.H=K.ua;l.I=K.va;
l.clone=function(){var a=new L(this.a);a.H=this.H;a.I=this.I;return a};l.getFullYear=function(){return this.a.getFullYear()};l.getYear=function(){return this.getFullYear()};l.getMonth=function(){return this.a.getMonth()};l.getDate=function(){return this.a.getDate()};l.getTime=function(){return this.a.getTime()};l.getDay=function(){return this.a.getDay()};l.getUTCFullYear=function(){return this.a.getUTCFullYear()};l.getUTCMonth=function(){return this.a.getUTCMonth()};l.getUTCDate=function(){return this.a.getUTCDate()};
l.getUTCDay=function(){return this.a.getDay()};l.getUTCHours=function(){return this.a.getUTCHours()};l.getUTCMinutes=function(){return this.a.getUTCMinutes()};l.getTimezoneOffset=function(){return this.a.getTimezoneOffset()};l.set=function(a){this.a=new Date(a.getFullYear(),a.getMonth(),a.getDate())};l.setFullYear=function(a){this.a.setFullYear(a)};l.setYear=function(a){this.setFullYear(a)};l.setMonth=function(a){this.a.setMonth(a)};l.setDate=function(a){this.a.setDate(a)};l.setTime=function(a){this.a.setTime(a)};
l.setUTCFullYear=function(a){this.a.setUTCFullYear(a)};l.setUTCMonth=function(a){this.a.setUTCMonth(a)};l.setUTCDate=function(a){this.a.setUTCDate(a)};
l.add=function(a){if(a.Qa||a.Ha){var b=this.getMonth()+a.Ha+12*a.Qa,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.Ba&&(a=new Date((new Date(this.getYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.Ba),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),
this.setDate(a.getDate()),M(this,a.getDate()))};l.O=function(a){return[this.getFullYear(),J(this.getMonth()+1),J(this.getDate())].join(a?"-":"")+""};l.toString=function(){return this.O()};function M(a,b){a.getDate()!=b&&a.a.setUTCHours(a.a.getUTCHours()+(a.getDate()<b?1:-1))}l.valueOf=function(){return this.a.valueOf()};function N(a,b,c,d,f,g,e){this.a="number"==typeof a?new Date(a,b||0,c||1,d||0,f||0,g||0,e||0):new Date(a&&a.getTime?a.getTime():ha())}z(N,L);
function ma(a){var b=new N;b.setTime(a);return b}l=N.prototype;l.getHours=function(){return this.a.getHours()};l.getMinutes=function(){return this.a.getMinutes()};l.getSeconds=function(){return this.a.getSeconds()};l.getMilliseconds=function(){return this.a.getMilliseconds()};l.getUTCDay=function(){return this.a.getUTCDay()};l.getUTCHours=function(){return this.a.getUTCHours()};l.getUTCMinutes=function(){return this.a.getUTCMinutes()};l.getUTCSeconds=function(){return this.a.getUTCSeconds()};
l.getUTCMilliseconds=function(){return this.a.getUTCMilliseconds()};l.setHours=function(a){this.a.setHours(a)};l.setMinutes=function(a){this.a.setMinutes(a)};l.setSeconds=function(a){this.a.setSeconds(a)};l.setMilliseconds=function(a){this.a.setMilliseconds(a)};l.setUTCHours=function(a){this.a.setUTCHours(a)};l.setUTCMinutes=function(a){this.a.setUTCMinutes(a)};l.setUTCSeconds=function(a){this.a.setUTCSeconds(a)};l.setUTCMilliseconds=function(a){this.a.setUTCMilliseconds(a)};
l.add=function(a){L.prototype.add.call(this,a);a.Fa&&this.setUTCHours(this.a.getUTCHours()+a.Fa);a.Ga&&this.setUTCMinutes(this.a.getUTCMinutes()+a.Ga);a.Ma&&this.setUTCSeconds(this.a.getUTCSeconds()+a.Ma)};l.O=function(a){var b=L.prototype.O.call(this,a);return a?b+" "+J(this.getHours())+":"+J(this.getMinutes())+":"+J(this.getSeconds()):b+"T"+J(this.getHours())+J(this.getMinutes())+J(this.getSeconds())};l.toString=function(){return this.O()};
l.clone=function(){var a=new N(this.a);a.H=this.H;a.I=this.I;return a};var na=!!(window.chrome&&window.chrome.lockScreen&&window.chrome.lockScreen.data);function oa(){var a=this;E(na,"Lockscreen storage API unavialable in this environment.");this.na=[];this.za=[];chrome.lockScreen.data.onDataItemsAvailable.addListener(function(b){return pa(a,b)})}function qa(a,b){a=ma(a.creationTime);return ma(b.creationTime).getTime()-a.getTime()}
function ra(a){chrome.lockScreen.data.getAll(function(b){if(chrome.runtime.lastError)a([]);else{var c=[],d={};b=q(b);for(var f=b.next();!f.done;d={R:d.R},f=b.next())d.R=f.value,c.push(new Promise(function(g){return function(e){var h=E(g.R.id);chrome.lockScreen.data.getContent(h,function(k){chrome.runtime.lastError?e(null):e(k?{buffer:k,id:h}:null)})}}(d)));Promise.all(c).then(function(g){a(g.filter(function(e){return!!e}))})}})}
function sa(a){var b={};a=JSON.stringify((b.type=1,b.value=a,b));return(new TextEncoder).encode(a).buffer}function pa(a,b){b.wasLocked&&ra(function(c){var d=[],f;c=q(c);for(var g=c.next();!g.done;g=c.next()){g=g.value;var e=JSON.parse((new TextDecoder).decode(g.buffer));g=e.type;e=e.value;1==g?d.push(JSON.parse(e)):0==g&&(f=new ja(JSON.parse(e).color))}d.length&&(d.sort(qa),a.na.forEach(function(h){return h(d)}));f&&a.za.forEach(function(h){return h(f)})})};var ta={aa:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},sa:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},O=ta;O=ta;var P={AED:[2,"dh","\u062f.\u0625."],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[32,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[50,"kr.","kr."],DOP:[2,"RD$","RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[34,"Ft",
"Ft"],IDR:[0,"Rp","Rp"],ILS:[34,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","PHP"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u20bd",
"RUB"],SAR:[2,"Rial","Rial"],SEK:[50,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"\u20ba","TRY"],TWD:[2,"NT$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u0433\u0440\u043d.","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[48,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var ua={ba:".",S:",",ea:"%",U:"0",xa:"+",da:"-",ca:"E",fa:"\u2030",T:"\u221e",wa:"NaN",ta:"#,##0.###",bb:"#E0",$a:"#,##0%",Sa:"\u00a4#,##0.00",C:"USD"},Q=ua;Q=ua;function va(){this.J=null;this.Aa=0;this.Ja=null;this.w=40;this.c=1;this.v=0;this.f=3;this.K=this.j=0;this.pa=this.ra=!1;this.A=this.m="";this.h=R(this).da;this.s="";this.b=1;this.l=!1;this.i=[];this.P=this.ka=!1;this.G=0;this.ja=null;var a=R(this).ta;this.N=a.replace(/ /g,"\u00a0");var b=[0];this.m=S(this,a,b);for(var c=b[0],d=-1,f=0,g=0,e=0,h=-1,k=a.length,m=!0;b[0]<k&&m;b[0]++)switch(a.charAt(b[0])){case "#":0<g?e++:f++;0<=h&&0>d&&h++;break;case "0":if(0<e)throw Error('Unexpected "0" in pattern "'+
a+'"');g++;0<=h&&0>d&&h++;break;case ",":0<h&&this.i.push(h);h=0;break;case ".":if(0<=d)throw Error('Multiple decimal separators in pattern "'+a+'"');d=f+g+e;break;case "E":if(this.P)throw Error('Multiple exponential symbols in pattern "'+a+'"');this.P=!0;this.K=0;b[0]+1<k&&"+"==a.charAt(b[0]+1)&&(b[0]++,this.ra=!0);for(;b[0]+1<k&&"0"==a.charAt(b[0]+1);)b[0]++,this.K++;if(1>f+g||1>this.K)throw Error('Malformed exponential pattern "'+a+'"');m=!1;break;default:b[0]--,m=!1}0==g&&0<f&&0<=d&&(g=d,0==g&&
g++,e=f-g,f=g-1,g=1);if(0>d&&0<e||0<=d&&(d<f||d>f+g)||0==h)throw Error('Malformed pattern "'+a+'"');e=f+g+e;this.f=0<=d?e-d:0;0<=d&&(this.j=f+g-d,0>this.j&&(this.j=0));this.c=(0<=d?d:e)-f;this.P&&(this.w=f+this.c,0==this.f&&0==this.c&&(this.c=1));this.i.push(Math.max(0,h));this.ka=0==d||d==e;c=b[0]-c;this.A=S(this,a,b);b[0]<a.length&&";"==a.charAt(b[0])?(b[0]++,1!=this.b&&(this.l=!0),this.h=S(this,a,b),b[0]+=c,this.s=S(this,a,b)):(this.h+=this.m,this.s+=this.A)}function R(a){return a.Ja||Q}
va.prototype.parse=function(a,b){b=b||[0];if(0!=this.G)throw Error("Parsing of compact numbers is unimplemented");a=a.replace(/ |\u202f/g,"\u00a0");var c=a.indexOf(this.m,b[0])==b[0],d=a.indexOf(this.h,b[0])==b[0];c&&d&&(this.m.length>this.h.length?d=!1:this.m.length<this.h.length&&(c=!1));c?b[0]+=this.m.length:d&&(b[0]+=this.h.length);if(a.indexOf(R(this).T,b[0])==b[0]){b[0]+=R(this).T.length;var f=Infinity}else{f=a;var g=!1,e=!1,h=!1,k=-1,m=1,n=R(this).ba,p=R(this).S,r=R(this).ca;if(0!=this.G)throw Error("Parsing of compact style numbers is not implemented");
p=p.replace(/\u202f/g,"\u00a0");for(var u="";b[0]<f.length;b[0]++){var t=f.charAt(b[0]),v=wa(this,t);if(0<=v&&9>=v)u+=v,h=!0;else if(t==n.charAt(0)){if(g||e)break;u+=".";g=!0}else if(t==p.charAt(0)&&("\u00a0"!=p.charAt(0)||b[0]+1<f.length&&0<=wa(this,f.charAt(b[0]+1)))){if(g||e)break}else if(t==r.charAt(0)){if(e)break;u+="E";e=!0;k=b[0]}else if("+"==t||"-"==t){if(h&&k!=b[0]-1)break;u+=t}else if(1==this.b&&t==R(this).ea.charAt(0)){if(1!=m)break;m=100;if(h){b[0]++;break}}else if(1==this.b&&t==R(this).fa.charAt(0)){if(1!=
m)break;m=1E3;if(h){b[0]++;break}}else break}1!=this.b&&(m=this.b);f=parseFloat(u)/m}if(c){if(a.indexOf(this.A,b[0])!=b[0])return NaN;b[0]+=this.A.length}else if(d){if(a.indexOf(this.s,b[0])!=b[0])return NaN;b[0]+=this.s.length}return d?-f:f};
va.prototype.format=function(a){if(isNaN(a))return R(this).wa;var b=[];var c=null===this.ja?a:this.ja,d=a;if(0==this.G)var f=T;else c=Math.abs(c),d=Math.abs(d),f=xa(this,1>=c?0:U(c)).X,d=V(d,-f),ya(this,d),c=V(c,-f),c=ya(this,c),f=xa(this,f+U(c.ma));a=V(a,-f.X);b.push(f.prefix);c=0>a||0==a&&0>1/a;b.push(c?this.h:this.m);if(isFinite(a))if(a=a*(c?-1:1)*this.b,this.P)if(0==a)za(this,a,this.c,b),Aa(this,0,b);else{d=Math.log(a)/Math.log(10);E(!w(void 0)||!1);d=Math.floor(d+2E-15);a=V(a,-d);var g=this.c;
1<this.w&&this.w>this.c?(g=d%this.w,0>g&&(g=this.w+g),a=V(a,g),d-=g,g=1):1>this.c?(d++,a=V(a,-1)):(d-=this.c-1,a=V(a,this.c-1));za(this,a,g,b);Aa(this,d,b)}else za(this,a,this.c,b);else b.push(R(this).T);b.push(c?this.s:this.A);b.push(f.qa);return b.join("")};function ya(a,b){var c=V(b,a.f);0<a.v&&(c=Ba(c,a.v,a.f));c=Math.round(c);isFinite(c)?(b=Math.floor(V(c,-a.f)),a=Math.floor(c-V(b,a.f))):a=0;return{ma:b,Ea:a}}
function za(a,b,c,d){if(a.j>a.f)throw Error("Min value must be less than max value");d||(d=[]);b=ya(a,b);var f=b.ma,g=b.Ea,e=0==f?0:U(f)+1,h=0<a.j||0<g||a.pa&&e<a.v;b=a.j;h&&(b=a.pa&&0<a.v?a.v-e:a.j);var k="";for(e=f;1E20<e;)k="0"+k,e=Math.round(V(e,-1));k=e+k;var m=R(a).ba;e=R(a).U.charCodeAt(0);var n=k.length,p=0;if(0<f||0<c){for(f=n;f<c;f++)d.push(String.fromCharCode(e));if(2<=a.i.length)for(c=1;c<a.i.length;c++)p+=a.i[c];c=n-p;if(0<c){f=a.i;p=n=0;for(var r,u=R(a).S,t=k.length,v=0;v<t;v++)if(d.push(String.fromCharCode(e+
1*Number(k.charAt(v)))),1<t-v)if(r=f[p],v<c){var Va=c-v;(1===r||0<r&&1===Va%r)&&d.push(u)}else p<f.length&&(v===c?p+=1:r===v-c-n+1&&(d.push(u),n+=r,p+=1))}else{c=k;k=a.i;f=R(a).S;r=c.length;u=[];for(n=k.length-1;0<=n&&0<r;n--){p=k[n];for(t=0;t<p&&0<=r-t-1;t++)u.push(String.fromCharCode(e+1*Number(c.charAt(r-t-1))));r-=p;0<r&&u.push(f)}d.push.apply(d,u.reverse())}}else h||d.push(String.fromCharCode(e));(a.ka||h)&&d.push(m);g=String(g);h=g.split("e+");2==h.length&&(g=String(Ba(parseFloat(h[0]),a.v,
1)),g=g.replace(".",""),g+=I("0",parseInt(h[1],10)-g.length+1));a.f+1>g.length&&(g="1"+I("0",a.f-g.length)+g);for(a=g.length;"0"==g.charAt(a-1)&&a>b+1;)a--;for(f=1;f<a;f++)d.push(String.fromCharCode(e+1*Number(g.charAt(f))))}function Aa(a,b,c){c.push(R(a).ca);0>b?(b=-b,c.push(R(a).da)):a.ra&&c.push(R(a).xa);b=""+b;for(var d=R(a).U,f=b.length;f<a.K;f++)c.push(d);c.push(b)}function wa(a,b){b=b.charCodeAt(0);if(48<=b&&58>b)return b-48;a=R(a).U.charCodeAt(0);return a<=b&&b<a+10?b-a:-1}
function S(a,b,c){for(var d="",f=!1,g=b.length;c[0]<g;c[0]++){var e=b.charAt(c[0]);if("'"==e)c[0]+1<g&&"'"==b.charAt(c[0]+1)?(c[0]++,d+="'"):f=!f;else if(f)d+=e;else switch(e){case "#":case "0":case ",":case ".":case ";":return d;case "\u00a4":if(c[0]+1<g&&"\u00a4"==b.charAt(c[0]+1))c[0]++,d+=a.J||R(a).C;else switch(a.Aa){case 0:d+=P[a.J||R(a).C][1];break;case 2:e=a.J||R(a).C;var h=P[e];d+=e==h[1]?e:e+" "+h[1];break;case 1:d+=P[a.J||R(a).C][2]}break;case "%":if(!a.l&&1!=a.b)throw Error("Too many percent/permill");
if(a.l&&100!=a.b)throw Error("Inconsistent use of percent/permill characters");a.b=100;a.l=!1;d+=R(a).ea;break;case "\u2030":if(!a.l&&1!=a.b)throw Error("Too many percent/permill");if(a.l&&1E3!=a.b)throw Error("Inconsistent use of percent/permill characters");a.b=1E3;a.l=!1;d+=R(a).fa;break;default:d+=e}}return d}var T={prefix:"",qa:"",X:0};
function xa(a,b){a=1==a.G?O.aa:O.sa;null==a&&(a=O.aa);if(3>b)return T;b=Math.min(14,b);var c=a[V(1,b)];for(--b;!c&&3<=b;)c=a[V(1,b)],b--;if(!c)return T;a=c.other;return a&&"0"!=a?(a=/([^0]*)(0+)(.*)/.exec(a))?{prefix:a[1],qa:a[3],X:b+1-(a[2].length-1)}:T:T}function U(a){if(!isFinite(a))return 0<a?a:0;for(var b=0;1<=(a/=10);)b++;return b}
function V(a,b){E(0==b%1,'Cannot shift by fractional digits "%s".',b);if(!a||!isFinite(a)||0==b)return a;a=String(a).split("e");return parseFloat(a[0]+"e"+(parseInt(a[1]||0,10)+b))}function Ca(a,b){E(0==b%1,'Cannot round to fractional digits "%s".',b);return a&&isFinite(a)?V(Math.round(V(a,b)),-b):a}function Ba(a,b,c){if(!a)return a;b=b-U(a)-1;return b<-c?Ca(a,-c):Ca(a,b)};function Da(a){return 1==a%10&&11!=a%100?"one":2==a%10&&12!=a%100?"two":3==a%10&&13!=a%100?"few":"other"}var Ea=Da;Ea=Da;function Fa(a,b){if(void 0===b){b=a+"";var c=b.indexOf(".");b=Math.min(-1==c?0:b.length-c-1,3)}return 1==(a|0)&&0==b?"one":"other"}var Ga=Fa;Ga=Fa;function W(a){this.N=a;this.M=this.o=this.Y=null;a=Q;var b=O;if(Ha!==a||Ia!==b)Ha=a,Ia=b,Ja=new va;this.Ia=Ja}var Ha=null,Ia=null,Ja=null,Ka=/'([{}#].*?)'/g,La=/''/g;
W.prototype.format=function(a){if(this.N){this.Y=[];var b=Ma(this,this.N);this.M=X(this,b);this.N=null}if(this.M&&0!=this.M.length){b=this.Y;var c=b.length;if(0<c){for(var d=Array(c),f=0;f<c;f++)d[f]=b[f];b=d}else b=[];this.o=b;b=[];Na(this,this.M,a,!1,b);a=b.join("");for(E(-1==a.search("#"),"Not all # were replaced.");0<this.o.length;)a=a.replace(this.V(this.o),this.o.pop())}else a="";return a};
function Na(a,b,c,d,f){for(var g=0;g<b.length;g++)switch(b[g].type){case 4:f.push(b[g].value);break;case 3:var e=b[g].value,h=a,k=f,m=c[e];w(m)?(h.o.push(m),k.push(h.V(h.o))):k.push("Undefined parameter - "+e);break;case 2:e=b[g].value;h=a;k=c;m=d;var n=f,p=e.D;w(k[p])?(p=e[k[p]],w(p)||(p=e.other,H(p,"Invalid option or missing other option for select block.")),Na(h,p,k,m,n)):n.push("Undefined parameter - "+p);break;case 0:e=b[g].value;Oa(a,e,c,Ga,d,f);break;case 1:e=b[g].value;Oa(a,e,c,Ea,d,f);break;
default:F("Unrecognized block type: "+b[g].type)}}function Oa(a,b,c,d,f,g){var e=b.D,h=b.ga,k=+c[e];isNaN(k)?g.push("Undefined or invalid parameter - "+e):(h=k-h,e=b[c[e]],w(e)||(E(0<=h,"Argument index smaller than offset."),d=d(h),G(d,"Invalid plural key."),e=b[d],w(e)||(e=b.other),H(e,"Invalid option or missing other option for plural block.")),b=[],Na(a,e,c,f,b),c=b.join(""),G(c,"Empty block in plural."),f?g.push(c):(a=a.Ia.format(h),g.push(c.replace(/#/g,a))))}
function Ma(a,b){var c=a.Y,d=y(a.V,a);b=b.replace(La,function(){c.push("'");return d(c)});return b=b.replace(Ka,function(f,g){c.push(g);return d(c)})}
function Y(a){var b=0,c=[],d=[],f=/[{}]/g;f.lastIndex=0;for(var g;g=f.exec(a);){var e=g.index;"}"==g[0]?(g=c.pop(),E(w(g)&&"{"==g,"No matching { for }."),0==c.length&&(g={type:1},g.value=a.substring(b,e),d.push(g),b=e+1)):(0==c.length&&(b=a.substring(b,e),""!=b&&d.push({type:0,value:b}),b=e+1),c.push("{"))}E(0==c.length,"There are mismatched { or } in the pattern.");b=a.substring(b);""!=b&&d.push({type:0,value:b});return d}
var Pa=/^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,Qa=/^\s*(\w+)\s*,\s*selectordinal\s*,/,Ra=/^\s*(\w+)\s*,\s*select\s*,/;
function X(a,b){var c=[];b=Y(b);for(var d=0;d<b.length;d++){var f={};if(0==b[d].type)f.type=4,f.value=b[d].value;else if(1==b[d].type){var g=b[d].value;switch(Pa.test(g)?0:Qa.test(g)?1:Ra.test(g)?2:/^\s*\w+\s*/.test(g)?3:5){case 2:f.type=2;f.value=Sa(a,b[d].value);break;case 0:f.type=0;f.value=Ta(a,b[d].value);break;case 1:f.type=1;f.value=Ua(a,b[d].value);break;case 3:f.type=3;f.value=b[d].value;break;default:F("Unknown block type for pattern: "+b[d].value)}}else F("Unknown part of the pattern.");
c.push(f)}return c}function Sa(a,b){var c="";b=b.replace(Ra,function(h,k){c=k;return""});var d={};d.D=c;b=Y(b);for(var f=0;f<b.length;){var g=b[f].value;G(g,"Missing select key element.");f++;E(f<b.length,"Missing or invalid select value element.");if(1==b[f].type)var e=X(a,b[f].value);else F("Expected block type.");d[g.replace(/\s/g,"")]=e;f++}H(d.other,"Missing other key in select statement.");return d}
function Ta(a,b){var c="",d=0;b=b.replace(Pa,function(k,m,n){c=m;n&&(d=parseInt(n,10));return""});var f={};f.D=c;f.ga=d;b=Y(b);for(var g=0;g<b.length;){var e=b[g].value;G(e,"Missing plural key element.");g++;E(g<b.length,"Missing or invalid plural value element.");if(1==b[g].type)var h=X(a,b[g].value);else F("Expected block type.");f[e.replace(/\s*(?:=)?(\w+)\s*/,"$1")]=h;g++}H(f.other,"Missing other key in plural statement.");return f}
function Ua(a,b){var c="";b=b.replace(Qa,function(h,k){c=k;return""});var d={};d.D=c;d.ga=0;b=Y(b);for(var f=0;f<b.length;){var g=b[f].value;G(g,"Missing ordinal key element.");f++;E(f<b.length,"Missing or invalid ordinal value element.");if(1==b[f].type)var e=X(a,b[f].value);else F("Expected block type.");d[g.replace(/\s*(?:=)?(\w+)\s*/,"$1")]=e;f++}H(d.other,"Missing other key in selectordinal statement.");return d}
W.prototype.V=function(a){E(0<a.length,"Literal array is empty.");return"\ufddf_"+(a.length-1).toString(10)+"_"};var Z;a:{var Wa=this.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Z=Xa;break a}}Z=""};var Ya=null,Za=null,$a=null;
function ab(a,b){a=void 0===a?{}:a;var c=!1,d,f=!!a.isDemoSession,g=a.actionData;if(g&&"new_note"==g.actionType){c=!0;var e=a.items;"image"==a.id&&e&&e.length&&(d=e[0].entry)}if(g&&g.isLockScreenAction){var h=g.restoreLastActionState;chrome.app.window.create("index.html",{lockScreenAction:g.actionType,frame:{type:"none", "color": "#ffffff"}},function(k){k.contentWindow._DumpException=function(m){return console.log(m.stack?m.stack:m)};k.contentWindow._keep_persistenceEnabled_=h;k.contentWindow._keep_isDemoMode_=f})}else c||
b?chrome.app.window.create("index.html",{id:"google-keep",state:"maximized",frame:{color:-1!=Z.indexOf("CrOS")?"#fff":void 0}},function(k){k.contentWindow._DumpException=function(m){return console.log(m.stack?m.stack:m)};k.contentWindow._keep_isDemoMode_=f;c?(k.contentWindow._keep_launchToDrawing_=!0,k.contentWindow._keep_drawingImageEntry_=d):b&&(k.contentWindow._keep_drawingNoteIdToOpen_=b)}):chrome.app.window.create("index.html",{id:"google-keep",innerBounds:{width:960,height:700,minWidth:411,
minHeight:540,maxHeight:540,maxWidth:360},frame:{color:-1!=Z.indexOf("CrOS")?"#fff":void 0}},function(k){k.contentWindow._DumpException=function(m){return console.log(m.stack?m.stack:m)};k.contentWindow._keep_isDemoMode_=f})}chrome.app.runtime.onLaunched.addListener(ab);
chrome.notifications.onClicked.addListener(function(a){var b=chrome.app.window.getAll();if(b&&0==b.length){chrome.notifications.clear(a);try{var c=JSON.parse(a);var d=new A(c.type,c.nodeId)}catch(f){d=new A("unknown")}a=d;"lockscreenNote"==a.type&&a.L?ab(void 0,a.L):ab()}});
na&&(Ya=new oa,Ya.na.push(function(a){var b=[];a=q(a);for(var c=a.next();!c.done;c=a.next())if(c=c.value,!c.isNotified){b.push(c.nodeId);c.isNotified=!0;var d=c.storageId;d&&chrome.lockScreen.data.setContent(d,sa(JSON.stringify(c)))}b.length&&(a=(new A("lockscreenNote",1==b.length?b[0]:void 0)).toString(),b=b.length,Za||(Za=new W("{noteCount, plural, =1 {Lock screen note taken}other {# lock screen notes taken}}")),$a||($a=new W("{noteCount, plural, =1 {Open Keep Chrome app to edit or sync note.}other {Open Keep Chrome app to edit or sync notes.}}")),
chrome.notifications.create(a,{iconUrl:"icon_128.png",type:"basic",title:Za.format({noteCount:b}),message:$a.format({noteCount:b}),isClickable:!0}))}));
