"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(require("postcss-value-parser"));function n(e,n,o,r){const a=[];let s=!1;if(e.nodes.forEach((e=>{"word"!==e.type?function(e){return"function"===e.type&&"var"===e.value.toLowerCase()}(e)&&(s=!0):a.push(e)})),s)return void u(n,o,`Failed to transform ${n.value} as variables can't be processed.`,r);if(2!==a.length)return void u(n,o,`Failed to transform ${n.value} as it's expecting 2 arguments instead of ${a.length}`,r);const l=t.default.unit(a[0].value),i=t.default.unit(a[1].value);if(l&&i){if(l.unit===i.unit)return[l,i];u(n,o,`Failed to transform ${n.value} as the units don't match`,r)}}function u(e,t,n,u){"warn"===u.onInvalid&&e.warn(t,n)}function o(e){delete e.nodes;const t=e;return t.type="word",t}var r;!function(e){e.Nearest="nearest",e.Up="up",e.Down="down",e.ToZero="to-zero"}(r||(r={}));const a=/^[a-z|-]+$/i;const s=e=>{const s=Object.assign({preserve:!1,onInvalid:""},e);return{postcssPlugin:"postcss-stepped-value-functions",Declaration(e,{result:l}){const i=["mod(","rem(","round("].some((t=>e.value.toLowerCase().includes(t)));if(!e||!i)return;const c=e.clone();if(c.value.toLowerCase().includes("mod(")){const e=function(e,u,r){const a=t.default(e.value);return a.walk((t=>{if("function"!==t.type||"mod"!==t.value.toLowerCase())return;const a=n(t,e,u,r);if(!a)return;const[s,l]=a,i=Number(s.number),c=Number(l.number),d=(i%c+c)%c;"number"!=typeof d||isNaN(d)||(o(t).value=0===d?"0":`${d}${s.unit}`)}),!0),a.toString()}(c,l,s);e&&(c.value=e)}if(c.value.toLowerCase().includes("rem(")){const e=function(e,u,r){const a=t.default(e.value);return a.walk((t=>{if("function"!==t.type||"rem"!==t.value.toLowerCase())return;const a=n(t,e,u,r);if(!a)return;const[s,l]=a,i=Number(s.number)%Number(l.number);("number"==typeof i||isNaN(i))&&(o(t).value=0===i?"0":`${i}${s.unit}`)}),!0),a.toString()}(c,l,s);e&&(c.value=e)}if(c.value.toLowerCase().includes("round(")){const e=function(e,n,s){const l=t.default(e.value);return l.walk((l=>{if("function"!==l.type||"round"!==l.value.toLowerCase())return;if(3!==l.nodes.length&&5!==l.nodes.length)return void u(e,n,`Failed to transform ${e.value} as the amount of arguments isn't valid`,s);const i=l.nodes.filter((e=>"word"===e.type)),c=i[0].value;let d,f,v;if(a.test(c.toLowerCase())){var m,p;if(!Object.values(r).includes(c.toLowerCase()))return void u(e,n,`Failed to transform ${e.value} as ${c} is not a valid rounding strategy.`,s);d=c.toLowerCase(),f=t.default.unit((null==i||null==(m=i[1])?void 0:m.value)||""),v=t.default.unit((null==i||null==(p=i[2])?void 0:p.value)||"")}else{var b,w;d=r.Nearest,f=t.default.unit((null==i||null==(b=i[0])?void 0:b.value)||""),v=t.default.unit((null==i||null==(w=i[1])?void 0:w.value)||"")}if(!f||!v)return;if(f.unit!==v.unit)return void u(e,n,`Failed to transform ${e.value} as the units don't match`,s);const h=Number(f.number),N=Number(v.number);let $;switch(d){case r.Down:$=Math.floor(h/N)*N;break;case r.Up:$=Math.ceil(h/N)*N;break;case r.ToZero:$=Math.trunc(h/N)*N;break;case r.Nearest:default:$=Math.round(h/N)*N}"number"!=typeof $||isNaN($)||(o(l).value=0===$?"0":`${$}${f.unit}`)}),!0),l.toString()}(c,l,s);e&&(c.value=e)}e.value!==c.value&&(e.before(c),s.preserve||e.remove())}}};s.postcss=!0,module.exports=s;