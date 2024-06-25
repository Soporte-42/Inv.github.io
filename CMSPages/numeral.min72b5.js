
!function(n,t){"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():n.numeral=t()}(this,function(){function e(n,t){this._input=n;this._value=t}var n,i,r={},f={},u={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},t={currentLocale:u.currentLocale,zeroFormat:u.zeroFormat,nullFormat:u.nullFormat,defaultFormat:u.defaultFormat,scalePercentBy100:u.scalePercentBy100};return n=function(u){var f,o,s,h;if(n.isNumeral(u))f=u.value();else if(0===u||"undefined"==typeof u)f=0;else if(null===u||i.isNaN(u))f=null;else if("string"==typeof u)if(t.zeroFormat&&u===t.zeroFormat)f=0;else if(t.nullFormat&&u===t.nullFormat||!u.replace(/[^0-9]+/g,"").length)f=null;else{for(o in r)if(h="function"==typeof r[o].regexps.unformat?r[o].regexps.unformat():r[o].regexps.unformat,h&&u.match(h)){s=r[o].unformat;break}s=s||n._.stringToNumber;f=s(u)}else f=Number(u)||null;return new e(u,f)},n.version="2.0.6",n.isNumeral=function(n){return n instanceof e},n._=i={numberToFormat:function(t,i,r){var o,a,u,h,p,nt,c,s=f[n.options.currentLocale],y=!1,tt=!1,w=0,e="",b=1e12,k=1e9,d=1e6,it=1e3,l="",v=!1,g;if(t=t||0,a=Math.abs(t),n._.includes(i,"(")?(y=!0,i=i.replace(/[\(|\)]/g,"")):(n._.includes(i,"+")||n._.includes(i,"-"))&&(p=n._.includes(i,"+")?i.indexOf("+"):0>t?i.indexOf("-"):-1,i=i.replace(/[\+|\-]/g,"")),n._.includes(i,"a")&&(o=i.match(/a(k|m|b|t)?/),o=o?o[1]:!1,n._.includes(i," a")&&(e=" "),i=i.replace(new RegExp(e+"a[kmbt]?"),""),a>=b&&!o||"t"===o?(e+=s.abbreviations.trillion,t/=b):b>a&&a>=k&&!o||"b"===o?(e+=s.abbreviations.billion,t/=k):k>a&&a>=d&&!o||"m"===o?(e+=s.abbreviations.million,t/=d):(d>a&&a>=it&&!o||"k"===o)&&(e+=s.abbreviations.thousand,t/=it)),n._.includes(i,"[.]")&&(tt=!0,i=i.replace("[.]",".")),u=t.toString().split(".")[0],h=i.split(".")[1],nt=i.indexOf(","),w=(i.split(".")[0].split(",")[0].match(/0/g)||[]).length,h?(n._.includes(h,"[")?(h=h.replace("]",""),h=h.split("["),l=n._.toFixed(t,h[0].length+h[1].length,r,h[1].length)):l=n._.toFixed(t,h.length,r),u=l.split(".")[0],l=n._.includes(l,".")?s.delimiters.decimal+l.split(".")[1]:"",tt&&0===Number(l.slice(1))&&(l="")):u=n._.toFixed(t,0,r),e&&!o&&Number(u)>=1e3&&e!==s.abbreviations.trillion)switch(u=String(Number(u)/1e3),e){case s.abbreviations.thousand:e=s.abbreviations.million;break;case s.abbreviations.million:e=s.abbreviations.billion;break;case s.abbreviations.billion:e=s.abbreviations.trillion}if(n._.includes(u,"-")&&(u=u.slice(1),v=!0),u.length<w)for(g=w-u.length;g>0;g--)u="0"+u;return nt>-1&&(u=u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+s.delimiters.thousands)),0===i.indexOf(".")&&(u=""),c=u+l+(e?e:""),y?c=(y&&v?"(":"")+c+(y&&v?")":""):p>=0?c=0===p?(v?"-":"+")+c:c+(v?"-":"+"):v&&(c="-"+c),c},stringToNumber:function(n){var u,i,e,r=f[t.currentLocale],s=n,o={thousand:3,million:6,billion:9,trillion:12};if(t.zeroFormat&&n===t.zeroFormat)i=0;else if(t.nullFormat&&n===t.nullFormat||!n.replace(/[^0-9]+/g,"").length)i=null;else{i=1;"."!==r.delimiters.decimal&&(n=n.replace(/\./g,"").replace(r.delimiters.decimal,"."));for(u in o)if(e=new RegExp("[^a-zA-Z]"+r.abbreviations[u]+"(?:\\)|(\\"+r.currency.symbol+")?(?:\\))?)?$"),s.match(e)){i*=Math.pow(10,o[u]);break}i*=(n.split("-").length+Math.min(n.split("(").length-1,n.split(")").length-1))%2?1:-1;n=n.replace(/[^0-9\.]+/g,"");i*=Number(n)}return i},isNaN:function(n){return"number"==typeof n&&isNaN(n)},includes:function(n,t){return-1!==n.indexOf(t)},insert:function(n,t,i){return n.slice(0,i)+t+n.slice(i)},reduce:function(n,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var u,r=Object(n),f=r.length>>>0,i=0;if(3===arguments.length)u=arguments[2];else{for(;f>i&&!(i in r);)i++;if(i>=f)throw new TypeError("Reduce of empty array with no initial value");u=r[i++]}for(;f>i;i++)i in r&&(u=t(u,r[i],i,r));return u},multiplier:function(n){var t=n.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var n=Array.prototype.slice.call(arguments);return n.reduce(function(n,t){var r=i.multiplier(t);return n>r?n:r},1)},toFixed:function(n,t,i,r){var u,e,o,f,s=n.toString().split("."),h=t-(r||0);return u=2===s.length?Math.min(Math.max(s[1].length,h),t):h,o=Math.pow(10,u),f=(i(n+"e+"+u)/o).toFixed(u),r>t-u&&(e=new RegExp("\\.?0{1,"+(r-(t-u))+"}$"),f=f.replace(e,"")),f}},n.options=t,n.formats=r,n.locales=f,n.locale=function(n){return n&&(t.currentLocale=n.toLowerCase()),t.currentLocale},n.localeData=function(n){if(!n)return f[t.currentLocale];if(n=n.toLowerCase(),!f[n])throw new Error("Unknown locale : "+n);return f[n]},n.reset=function(){for(var n in u)t[n]=u[n]},n.zeroFormat=function(n){t.zeroFormat="string"==typeof n?n:null},n.nullFormat=function(n){t.nullFormat="string"==typeof n?n:null},n.defaultFormat=function(n){t.defaultFormat="string"==typeof n?n:"0.0"},n.register=function(n,t,i){if(t=t.toLowerCase(),this[n+"s"][t])throw new TypeError(t+" "+n+" already registered.");return this[n+"s"][t]=i,i},n.validate=function(t,i){var s,h,c,r,e,o,f,u;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),t=t.trim(),t.match(/^\d+$/))return!0;if(""===t)return!1;try{f=n.localeData(i)}catch(l){f=n.localeData(n.locale())}return c=f.currency.symbol,e=f.abbreviations,s=f.delimiters.decimal,h="."===f.delimiters.thousands?"\\.":f.delimiters.thousands,u=t.match(/^[^\d]+/),null!==u&&(t=t.substr(1),u[0]!==c)?!1:(u=t.match(/[^\d]+$/),null!==u&&(t=t.slice(0,-1),u[0]!==e.thousand&&u[0]!==e.million&&u[0]!==e.billion&&u[0]!==e.trillion)?!1:(o=new RegExp(h+"{2}"),t.match(/[^\d.,]/g)?!1:(r=t.split(s),r.length>2?!1:r.length<2?!!r[0].match(/^\d+.*\d$/)&&!r[0].match(o):1===r[0].length?!!r[0].match(/^\d+$/)&&!r[0].match(o)&&!!r[1].match(/^\d+$/):!!r[0].match(/^\d+.*\d$/)&&!r[0].match(o)&&!!r[1].match(/^\d+$/))))},n.fn=e.prototype={clone:function(){return n(this)},format:function(i,u){var o,f,e,s=this._value,h=i||t.defaultFormat;if(u=u||Math.round,0===s&&null!==t.zeroFormat)f=t.zeroFormat;else if(null===s&&null!==t.nullFormat)f=t.nullFormat;else{for(o in r)if(h.match(r[o].regexps.format)){e=r[o].format;break}e=e||n._.numberToFormat;f=e(s,h,u)}return f},value:function(){return this._value},input:function(){return this._input},set:function(n){return this._value=Number(n),this},add:function(n){function r(n,i){return n+Math.round(t*i)}var t=i.correctionFactor.call(null,this._value,n);return this._value=i.reduce([this._value,n],r,0)/t,this},subtract:function(n){function r(n,i){return n-Math.round(t*i)}var t=i.correctionFactor.call(null,this._value,n);return this._value=i.reduce([n],r,Math.round(this._value*t))/t,this},multiply:function(n){function t(n,t){var r=i.correctionFactor(n,t);return Math.round(n*r)*Math.round(t*r)/Math.round(r*r)}return this._value=i.reduce([this._value,n],t,1),this},divide:function(n){function t(n,t){var r=i.correctionFactor(n,t);return Math.round(n*r)/Math.round(t*r)}return this._value=i.reduce([this._value,n],t),this},difference:function(t){return Math.abs(n(this._value).subtract(t).value())}},n.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(n){var t=n%10;return 1==~~(n%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),function(){n.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,i,r){var u,f=n._.includes(i," BPS")?" ":"";return t=1e4*t,i=i.replace(/\s?BPS/,""),u=n._.numberToFormat(t,i,r),n._.includes(u,")")?(u=u.split(""),u.splice(-1,0,f+"BPS"),u=u.join("")):u=u+f+"BPS",u},unformat:function(t){return+(.0001*n._.stringToNumber(t)).toFixed(15)}})}(),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},i={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},u=t.suffixes.concat(i.suffixes.filter(function(n){return t.suffixes.indexOf(n)<0})),r=u.join("|");r="("+r.replace("B","B(?!PS)")+")";n.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(r,u,f){var h,e,o,c,s=n._.includes(u,"ib")?i:t,l=n._.includes(u," b")||n._.includes(u," ib")?" ":"";for(u=u.replace(/\s?i?b/,""),e=0;e<=s.suffixes.length;e++)if(o=Math.pow(s.base,e),c=Math.pow(s.base,e+1),null===r||0===r||r>=o&&c>r){l+=s.suffixes[e];o>0&&(r/=o);break}return h=n._.numberToFormat(r,u,f),h+l},unformat:function(r){var u,f,e=n._.stringToNumber(r);if(e){for(u=t.suffixes.length-1;u>=0;u--){if(n._.includes(r,t.suffixes[u])){f=Math.pow(t.base,u);break}if(n._.includes(r,i.suffixes[u])){f=Math.pow(i.base,u);break}}e*=f||1}return e}})}(),function(){n.register("format","currency",{regexps:{format:/(\$)/},format:function(t,i,r){var e,s,f,o=n.locales[n.options.currentLocale],u={before:i.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:i.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(i=i.replace(/\s?\$\s?/,""),e=n._.numberToFormat(t,i,r),t>=0?(u.before=u.before.replace(/[\-\(]/,""),u.after=u.after.replace(/[\-\)]/,"")):0>t&&!n._.includes(u.before,"-")&&!n._.includes(u.before,"(")&&(u.before="-"+u.before),f=0;f<u.before.length;f++)switch(s=u.before[f]){case"$":e=n._.insert(e,o.currency.symbol,f);break;case" ":e=n._.insert(e," ",f+o.currency.symbol.length-1)}for(f=u.after.length-1;f>=0;f--)switch(s=u.after[f]){case"$":e=f===u.after.length-1?e+o.currency.symbol:n._.insert(e,o.currency.symbol,-(u.after.length-(1+f)));break;case" ":e=f===u.after.length-1?e+" ":n._.insert(e," ",-(u.after.length-(1+f)+o.currency.symbol.length-1))}return e}})}(),function(){n.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,i,r){var u,e="number"!=typeof t||n._.isNaN(t)?"0e+0":t.toExponential(),f=e.split("e");return i=i.replace(/e[\+|\-]{1}0/,""),u=n._.numberToFormat(Number(f[0]),i,r),u+"e"+f[1]},unformat:function(t){function u(t,i){var r=n._.correctionFactor(t,i);return t*r*i*r/(r*r)}var r=n._.includes(t,"e+")?t.split("e+"):t.split("e-"),f=Number(r[0]),i=Number(r[1]);return i=n._.includes(t,"e-")?i*=-1:i,n._.reduce([f,Math.pow(10,i)],u,1)}})}(),function(){n.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,i,r){var u,e=n.locales[n.options.currentLocale],f=n._.includes(i," o")?" ":"";return i=i.replace(/\s?o/,""),f+=e.ordinal(t),u=n._.numberToFormat(t,i,r),u+f}})}(),function(){n.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,i,r){var u,f=n._.includes(i," %")?" ":"";return n.options.scalePercentBy100&&(t=100*t),i=i.replace(/\s?\%/,""),u=n._.numberToFormat(t,i,r),n._.includes(u,")")?(u=u.split(""),u.splice(-1,0,f+"%"),u=u.join("")):u=u+f+"%",u},unformat:function(t){var i=n._.stringToNumber(t);return n.options.scalePercentBy100?.01*i:i}})}(),function(){n.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(n){var i=Math.floor(n/3600),t=Math.floor((n-3600*i)/60),r=Math.round(n-3600*i-60*t);return i+":"+(10>t?"0"+t:t)+":"+(10>r?"0"+r:r)},unformat:function(n){var t=n.split(":"),i=0;return 3===t.length?(i+=3600*Number(t[0]),i+=60*Number(t[1]),i+=Number(t[2])):2===t.length&&(i+=60*Number(t[0]),i+=Number(t[1])),Number(i)}})}(),n})