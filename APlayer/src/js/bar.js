class Bar{constructor(e){this.elements={};this.elements.volume=e.volume;this.elements.played=e.played;this.elements.loaded=e.loaded}set(e,t,s){t=Math.max(t,0);t=Math.min(t,1);this.elements[e].style[s]=t*100+"%"}get(e,t){return parseFloat(this.elements[e].style[t])/100}}export default Bar;