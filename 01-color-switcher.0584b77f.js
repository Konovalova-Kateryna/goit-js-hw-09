const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body"),r=0;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),r=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.0584b77f.js.map
