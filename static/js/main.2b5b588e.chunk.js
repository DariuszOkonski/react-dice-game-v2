(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(3),c=n.n(l),r=(n(13),n(14),n(4)),o=n(5),s=n(1),u=n(7),d=n(6),m=function(e){return i.a.createElement("i",{className:"Dice ".concat(e.rolling?"rolling":""," fas fa-dice-").concat(e.name)})};m.defaultProps={name:"one"};var h=m,g=["one","two","three","four","five","six"],f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={dice1:"one",dice2:"one",rolling:!1},a.handleClick=a.handleClick.bind(Object(s.a)(a)),a}return Object(o.a)(n,[{key:"getRandomDice",value:function(){return g[Math.floor(Math.random()*g.length)]}},{key:"handleClick",value:function(){var e=this;this.setState({dice1:this.getRandomDice(),dice2:this.getRandomDice(),rolling:!0}),setTimeout((function(){e.setState({rolling:!1})}),1e3)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container"},i.a.createElement(h,{name:this.state.dice1,rolling:this.state.rolling}),i.a.createElement(h,{name:this.state.dice2,rolling:this.state.rolling})),i.a.createElement("button",{disabled:this.state.rolling,onClick:this.handleClick},this.state.rolling?"Rolling...":"Roll Dices!!!"))}}]),n}(a.Component);var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Dice Game"),i.a.createElement(f,null))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2b5b588e.chunk.js.map