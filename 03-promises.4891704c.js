!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),l=document.querySelector(".form"),c=l.elements.delay,a=l.elements.step,u=l.elements.amount;function d(e){var n=e.i,o=e.delay;return new Promise((function(e,t){setTimeout((function(){Math.random()>.3&&e({i:n,delay:o}),t({i:n,delay:o})}),o)}))}function f(n){var o=n.i,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))}function s(n){var o=n.i,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();for(var n=Number(c.value),o=Number(a.value),t=Number(u.value),i=1;i<=t;i+=1)d({i:i,delay:n}).then(f).catch(s),n+=o;l.reset()}))}();
//# sourceMappingURL=03-promises.4891704c.js.map
