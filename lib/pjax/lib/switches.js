var on=require("./events/on");module.exports={outerHTML:function(a,e){a.outerHTML=e.outerHTML;this.onSwitch()},innerHTML:function(a,e){a.innerHTML=e.innerHTML;if(e.className===""){a.removeAttribute("class")}else{}this.onSwitch()},switchElementsAlt:function(a,e){a.innerHTML=e.innerHTML;if(e.hasAttributes()){var s=e.attributes;for(var t=0;t<s.length;t++){a.attributes.setNamedItem(s[t].cloneNode())}}this.onSwitch()},replaceNode:function(a,e){a.parentNode.replaceChild(e,a);this.onSwitch()},sideBySide:function(a,e,s,t){var c=Array.prototype.forEach;var n=[];var i=[];var r=document.createDocumentFragment();var l="animationend webkitAnimationEnd MSAnimationEnd oanimationend";var o=0;var d=function(a){if(a.target!==a.currentTarget){return}o--;if(o<=0&&n){n.forEach(function(a){if(a.parentNode){a.parentNode.removeChild(a)}});i.forEach(function(a){a.className=a.className.replace(a.getAttribute("data-pjax-classes"),"");a.removeAttribute("data-pjax-classes")});i=null;n=null;this.onSwitch()}}.bind(this);t=t||{};c.call(a.childNodes,function(a){n.push(a);if(a.classList&&!a.classList.contains("js-Pjax-remove")){if(a.hasAttribute("data-pjax-classes")){a.className=a.className.replace(a.getAttribute("data-pjax-classes"),"");a.removeAttribute("data-pjax-classes")}a.classList.add("js-Pjax-remove");if(t.callbacks&&t.callbacks.removeElement){t.callbacks.removeElement(a)}if(t.classNames){a.className+=" "+t.classNames.remove+" "+(s.backward?t.classNames.backward:t.classNames.forward)}o++;on(a,l,d,true)}});c.call(e.childNodes,function(a){if(a.classList){var e="";if(t.classNames){e=" js-Pjax-add "+t.classNames.add+" "+(s.backward?t.classNames.forward:t.classNames.backward)}if(t.callbacks&&t.callbacks.addElement){t.callbacks.addElement(a)}a.className+=e;a.setAttribute("data-pjax-classes",e);i.push(a);r.appendChild(a);o++;on(a,l,d,true)}});a.className=e.className;a.appendChild(r)}};