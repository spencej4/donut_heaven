(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,o){},16:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var c=o(0),a=o.n(c),n=o(8),r=o.n(n),s=(o(15),o(2)),i=o(3),p=o(6),l=o(4),u=o(5),h=o(1),m=(o(16),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"header"},a.a.createElement("p",{className:"logo"},"Clicky"),a.a.createElement("p",{className:"instructions"},"Click an image to begin!"),a.a.createElement("p",{className:"scores"},"Score:",this.props.score," | TopScore:",this.props.topScore))}}]),t}(a.a.Component));var k=function(e){return a.a.createElement("div",{className:"hero"},a.a.createElement("p",{className:"middle"},"_Donut Heaven_"))},d=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(f,{checkForDuplicates:this.props.checkForDuplicates,score:this.props.score}))}}]),t}(a.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=[{link:"https://photo2.foodgawker.com/wp-content/uploads/2019/03/3393004.jpg",key:0},{link:"https://photo.foodgawker.com/wp-content/uploads/2019/02/3387319.jpg",key:2},{link:"https://photo.foodgawker.com/wp-content/uploads/2019/02/3384831.jpg",key:3},{link:"https://photo.foodgawker.com/wp-content/uploads/2019/02/3383607.jpg",key:4},{link:"https://photo.foodgawker.com/wp-content/uploads/2019/02/3382343.jpg",key:5},{link:"https://photo.foodgawker.com/wp-content/uploads/2019/02/3380227.jpg",key:6},{link:"https://photo.foodgawker.com/wp-content/uploads/2019/01/3359963.jpg",key:7},{link:"https://photo2.foodgawker.com/wp-content/uploads/2018/12/3350447.jpg",key:8},{link:"https://photo2.foodgawker.com/wp-content/uploads/2019/01/3362759.jpg",key:9},{link:"https://photo2.foodgawker.com/wp-content/uploads/2018/12/3355340.jpg",key:10},{link:"https://photo.foodgawker.com/wp-content/uploads/2018/10/3323959.jpg",key:11},{link:"https://photo2.foodgawker.com/wp-content/uploads/2018/09/3302988.jpg",key:12}];return function(e){for(var t=e.length-1;t>0;t--){var o=Math.floor(Math.random()*(t+1)),c=[e[o],e[t]];e[t]=c[0],e[o]=c[1]}}(t),t.map(function(t,o){return a.a.createElement("div",{className:"card",key:t.key,value:t.id,onClick:function(t){return function(t,o){t.preventDefault(),e.props.checkForDuplicates(o)}(t,o)}},a.a.createElement("img",{src:t.link,alt:"donut"}))})}}]),t}(a.a.Component),g=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(p.a)(this,Object(l.a)(t).call(this,e))).runComparison=function(e){if(0===o.state.clickedItems.length)return o.state.clickedItems.push(e),void o.calcScore();var t=!0,c=!1,a=void 0;try{for(var n,r=o.state.clickedItems[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var s=n.value;if(s===e){alert("game over"),o.setState({gameActive:!1,score:0,clickedItems:[]});break}s!==e&&o.calcScore()}}catch(i){c=!0,a=i}finally{try{t||null==r.return||r.return()}finally{if(c)throw a}}o.state.clickedItems.push(e)},o.calcScore=function(){o.state.score>=o.state.topScore?o.setState({score:o.state.score+1,topScore:o.state.topScore+1}):o.state.score<o.state.topScore&&o.setState({score:o.state.score+1})},o.state={gameActive:!0,score:0,topScore:0,clickedItems:[]},o.checkForDuplicates=o.checkForDuplicates.bind(Object(h.a)(Object(h.a)(o))),o.runComparison=o.runComparison.bind(Object(h.a)(Object(h.a)(o))),o.calcScore=o.calcScore.bind(Object(h.a)(Object(h.a)(o))),o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"checkForDuplicates",value:function(e){this.runComparison(e)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,{gameActive:this.state.gameActive,score:this.state.score,topScore:this.state.topScore}),a.a.createElement(k,null),a.a.createElement(d,{checkForDuplicates:this.checkForDuplicates,score:this.state.score}))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,o){e.exports=o(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a18fc67c.chunk.js.map