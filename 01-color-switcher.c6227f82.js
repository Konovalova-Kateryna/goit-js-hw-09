const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.c6227f82.js.map