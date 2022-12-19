(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(7),a=i.n(n),s=i(2),r=i(3),o=i(5),l=i(4),c=i(1),u=i.n(c),m=(i(12),i(13),i(0)),p=10,d=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).intervalId=0,e.showNext=function(){e.props.isInfinite&&clearInterval(e.intervalId);var t=document.querySelector(".Carousel__list");if(t){var i=(e.props.itemWidth+p)*e.props.step;t.scrollTo({left:Math.ceil(t.scrollLeft)+i,behavior:"smooth"})}},e.showPrevious=function(){e.props.isInfinite&&clearInterval(e.intervalId);var t=document.querySelector(".Carousel__list");if(t){var i=(e.props.itemWidth+p)*e.props.step;t.scrollTo({left:Math.ceil(t.scrollLeft)-i,behavior:"smooth"})}},e.scroll=function(t){var i=t.currentTarget,n=i.scrollLeft,a=i.scrollWidth,s=i.clientWidth,r=document.querySelector(".Carousel__button--next"),o=document.querySelector(".Carousel__button--prev");if(!e.props.isInfinite&&Math.ceil(n)===a-s){var l=document.querySelector(".Carousel__list");if(!l)return;setTimeout((function(){l.scrollTo({left:0,behavior:"smooth"})}),2e3)}var c=a-s;switch(Math.ceil(n)){case c:null===r||void 0===r||r.classList.add("disabled");break;case 0:null===o||void 0===o||o.classList.add("disabled");break;default:null===r||void 0===r||r.classList.remove("disabled"),null===o||void 0===o||o.classList.remove("disabled")}},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.intervalId=window.setInterval((function(){e.showNext()}),this.props.animationDuration)}},{key:"componentDidUpdate",value:function(e){var t=this;e.animationDuration!==this.props.animationDuration&&(clearInterval(this.intervalId),this.intervalId=window.setInterval((function(){t.showNext()}),this.props.animationDuration))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.images,i=e.frameSize,n=e.itemWidth,a=i*(n+p)-p;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(a,"px")},onScroll:this.scroll,children:t.map((function(e){return Object(m.jsx)("li",{className:"Carousel__item",children:Object(m.jsx)("img",{src:e,alt:e,className:"Carousel__image",width:n})},e)}))}),Object(m.jsxs)("div",{className:"Carousel__buttons-container",children:[Object(m.jsx)("button",{type:"button",name:"Prev",onClick:this.showPrevious,className:"Carousel__button Carousel__button--prev disabled",children:"Prev"}),Object(m.jsx)("button",{type:"button",name:"Next",onClick:this.showNext,className:"Carousel__button Carousel__button--next","data-cy":"next",children:"Next"})]})]})}}]),i}(u.a.Component),h=d,b=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,isInfinite:!1},e.setStep=function(){var t=document.querySelector("#stepId");t&&e.setState({step:Number(t.value)})},e.setFrameSize=function(){var t=document.querySelector("#frameId");t&&e.setState({frameSize:Number(t.value)})},e.setItemWidth=function(){var t=document.querySelector("#itemId");t&&e.setState({itemWidth:Number(t.value)})},e.setAnimationDuration=function(){var t=document.querySelector("#AnimationDuration");t&&e.setState({animationDuration:Number(t.value)})},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".Carousel__button");t&&t.forEach((function(t){return t.addEventListener("click",(function(){e.setState({isInfinite:!0})}))}))}},{key:"render",value:function(){var e=this.state,t=e.images,i=e.step,n=e.frameSize,a=e.itemWidth,s=e.animationDuration,r=e.isInfinite;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(m.jsxs)("div",{className:"App__inputs",children:[Object(m.jsxs)("div",{className:"App__inputs-wrap",children:[Object(m.jsx)("label",{className:"App__inputs-label",htmlFor:"itemId",children:"ItemWidth:"}),Object(m.jsx)("input",{className:"App__inputs-input",type:"number",name:"ItemWidth",id:"itemId",defaultValue:130,min:"1",onChange:this.setItemWidth}),Object(m.jsx)("label",{className:"App__inputs-label",htmlFor:"frameId",children:"FrameSize:"}),Object(m.jsx)("input",{className:"App__inputs-input",type:"number",name:"FrameSize",id:"frameId",min:"1",defaultValue:3,onChange:this.setFrameSize})]}),Object(m.jsxs)("div",{className:"App__inputs-wrap",children:[Object(m.jsx)("label",{className:"App__inputs-label",htmlFor:"stepId",children:"Step: "}),Object(m.jsx)("input",{className:"App__inputs-input",type:"number",name:"Step",id:"stepId",min:"1",defaultValue:3,onChange:this.setStep}),Object(m.jsx)("label",{className:"App__inputs-label",htmlFor:"AnimationDuration",children:"AnimationDuration:"}),Object(m.jsx)("input",{className:"App__inputs-input",type:"number",name:"AnimationDuration",id:"AnimationDuration",defaultValue:1e3,onChange:this.setAnimationDuration})]})]}),Object(m.jsx)(h,{images:t,step:i,frameSize:n,itemWidth:a,animationDuration:s,isInfinite:r})]})}}]),i}(u.a.Component),v=b;a.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5e95dc60.chunk.js.map