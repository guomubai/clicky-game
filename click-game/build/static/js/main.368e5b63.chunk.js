(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Vega",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/balrog.gif",count:0},{id:2,name:"Blanka",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/blanka.gif",count:0},{id:3,name:"Chun Li",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/chun-li.gif",count:0},{id:4,name:"Dhalsim",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/dhalsim.gif",count:0},{id:5,name:"E. Honda",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/ehonda.gif",count:0},{id:6,name:"Guile",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/guile.gif",count:0},{id:7,name:"Ken",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/ken.gif",count:0},{id:8,name:"Balrog",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/mbison.gif",count:0},{id:9,name:"Ryu",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/ryu.gif",count:0},{id:10,name:"Sagat",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/sagat.gif",count:0},{id:11,name:"M. Bison",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/vega.gif",count:0},{id:12,name:"Zangief",image:"http://www.sfgalleries.net/art/sf2/sf2ce/series1/zangief.gif",count:0}]},,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(3),r=a.n(i),c=a(4),o=a(5),f=a(7),l=a(6),u=a(8),g=(a(15),function(e){return s.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image})))}),m=(a(17),function(e){return s.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(19),function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"title"},e.children),s.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),d=a(1),w=(a(21),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={cards:d,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},function(){console.log(this.state.highscore)}),a.state.cards.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.clickCount=function(e){a.state.cards.find(function(t,n){if(t.id===e){if(0===d[n].count)return d[n].count=d[n].count+1,a.setState({score:a.state.score+1},function(){console.log(this.state.score)}),a.state.cards.sort(function(){return Math.random()-.5}),!0;a.gameOver()}})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(m,null,s.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Street Fighter Clicky Game: Champion  Edition"),this.state.cards.map(function(t){return s.a.createElement(g,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})}))}}]),t}(n.Component));a(23);r.a.render(s.a.createElement(w,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.368e5b63.chunk.js.map