var updateQueryString=require("./util/update-query-string");module.exports=function(t,r,u){r=r||{};var e;var n=r.requestOptions||{};var a=(n.requestMethod||"GET").toUpperCase();var s=n.requestParams||null;var o=n.formData||null;var i=null;var l=new XMLHttpRequest;var c=r.timeout||0;l.onreadystatechange=function(){if(l.readyState===4){if(l.status===200){u(l.responseText,l,t,r)}else if(l.status!==0){u(null,l,t,r)}}};l.onerror=function(e){console.log(e);u(null,l,t,r)};l.ontimeout=function(){u(null,l,t,r)};if(s&&s.length){e=s.map(function(e){return e.name+"="+e.value}).join("&");switch(a){case"GET":t=t.split("?")[0];t+="?"+e;break;case"POST":i=e;break}}else if(o){i=o}if(r.cacheBust){t=updateQueryString(t,"t",Date.now())}l.open(a,t,true);l.timeout=c;l.setRequestHeader("X-Requested-With","XMLHttpRequest");l.setRequestHeader("X-PJAX","true");l.setRequestHeader("X-PJAX-Selectors",JSON.stringify(r.selectors));if(i&&a==="POST"&&!o){l.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}l.send(i);return l};