var tape=require("tape");var on=require("../../lib/events/on");var off=require("../../lib/events/off");var trigger=require("../../lib/events/trigger");var el=document.createElement("div");var el2=document.createElement("span");var els=[el,el2];var classCb=function(){this.className+="on"};var attrCb=function(){this.setAttribute("data-state",this.getAttribute("data-state")+"ON")};tape("test events on/off/trigger for one element, one event",function(e){el.className="";on(el,"click",classCb);trigger(el,"click");e.equal(el.className,"on","attached callback has been fired properly");el.className="off";off(el,"click",classCb);trigger(el,"click");e.equal(el.className,"off","triggered event didn't fire detached callback");e.end()});tape("test events on/off/trigger for multiple elements, one event",function(e){el.className="";el2.className="";on(els,"click",classCb);trigger(els,"click");e.equal(el.className,"on","attached callback has been fired properly on the first element");e.equal(el2.className,"on","attached callback has been fired properly on the second element");el.className="off";el2.className="off";off(els,"click",classCb);trigger(els,"click");e.equal(el.className,"off","triggered event didn't fire detached callback on the first element");e.equal(el2.className,"off","triggered event didn't fire detached callback on the second element");e.end()});tape("test events on/off/trigger for one element, multiple events",function(e){el.className="";on(el,"click mouseover",classCb);trigger(el,"click mouseover");e.equal(el.className,"onon","attached callbacks have been fired properly");el.className="off";off(el,"click mouseover",classCb);trigger(el,"click mouseover");e.equal(el.className,"off","triggered events didn't fire detached callback");e.end()});tape("test events on/off/trigger for multiple elements, multiple events",function(e){el.className="";el2.className="";el.setAttribute("data-state","");el2.setAttribute("data-state","");on(els,"click mouseover",classCb);on(els,"resize scroll",attrCb);trigger(els,"click mouseover resize scroll");e.equal(el.className,"onon","attached callbacks has been fired properly on the first element");e.equal(el.getAttribute("data-state"),"ONON","attached callbacks has been fired properly on the first element");e.equal(el2.className,"onon","attached callbacks has been fired properly on the second element");e.equal(el2.getAttribute("data-state"),"ONON","attached callbacks has been fired properly on the second element");el.className="off";el2.className="off";el.setAttribute("data-state","off");el2.setAttribute("data-state","off");off(els,"click mouseover",classCb);off(els,"resize scroll",attrCb);trigger(els,"click mouseover resize scroll");e.equal(el.className,"off","triggered events didn't fire detached callbacks on the first element");e.equal(el.getAttribute("data-state"),"off","triggered events didn't fire detached callbacks on the first element");e.equal(el2.className,"off","triggered events didn't fire detached callbacks on the first element");e.equal(el2.getAttribute("data-state"),"off","triggered events didn't fire detached callbacks on the first element");e.end()});tape("test events on top level elements",function(e){var t=document;t.className="";on(t,"click",classCb);trigger(t,"click");e.equal(t.className,"on","attached callback has been fired properly on document");t=window;t.className="";on(t,"click",classCb.bind(window));trigger(t,"click");e.equal(t.className,"on","attached callback has been fired properly on window");e.end()});