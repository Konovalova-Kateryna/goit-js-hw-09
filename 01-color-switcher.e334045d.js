!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){t.setAttribute("disabled",!0),timerId=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.e334045d.js.map