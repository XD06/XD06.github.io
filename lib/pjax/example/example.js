var pjax;var initButtons=function(){var e=document.querySelectorAll("button[data-manual-trigger]");if(!e){return}for(var t=0;t<e.length;t++){e[t].addEventListener("click",function(e){var t=e.currentTarget;if(t.getAttribute("data-manual-trigger-override")==="true"){pjax.loadUrl("/example/page2.html",{cacheBust:false})}else{pjax.loadUrl("/example/page2.html")}})}};console.log("Document initialized:",window.location.href);document.addEventListener("pjax:send",function(){console.log("Event: pjax:send",arguments)});document.addEventListener("pjax:complete",function(){console.log("Event: pjax:complete",arguments)});document.addEventListener("pjax:error",function(){console.log("Event: pjax:error",arguments)});document.addEventListener("pjax:success",function(){console.log("Event: pjax:success",arguments);initButtons()});document.addEventListener("DOMContentLoaded",function(){pjax=new Pjax({elements:[".js-Pjax"],selectors:[".body","title"],cacheBust:true});console.log("Pjax initialized.",pjax);initButtons()});