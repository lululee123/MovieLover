(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){},157:function(e,t,a){e.exports=a(249)},162:function(e,t,a){},163:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(56),s=a.n(i),c=(a(162),a(6)),o=a(7),l=a(9),u=a(8),p=a(10),d=(a(163),a(95),a(11)),m=a(49),h=a.n(m),f=function(e){return{type:"ADD_CARD",payload:e}},v=function(e){return{type:"FETCH",payload:e}},b=function(){return function(e){var t=h.a.auth().currentUser;t?e(v(t.uid)):localStorage.getItem("FirebaseUID")?e(v(localStorage.getItem("FirebaseUID"))):e({type:"FETCH_ERROR"})}},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).SignUp=function(){var e=a.state,t=e.email,n=e.password;e.passwordCheck===n?a.props.Firebase.doCreateUserWithEmailAndPassword(t,n).then(function(e){a.setState({msg:"Success"}),localStorage.setItem("FirebaseUID",e.user.uid),a.props.getUser()}).catch(function(e){a.setState({msg:e.toString(e)})}):a.setState({msg:"\u5bc6\u78bc\u4e0d\u76f8\u7b26"})},a.handleKeyDownSignup=function(e){"Enter"===e.key&&a.SignUp()},a.state={email:"",password:"",passwordCheck:"",msg:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup__box"},r.a.createElement("h1",null,"\u8a3b\u518a"),r.a.createElement("div",{className:"signup__box_inner"},r.a.createElement("div",{className:"signup__error"},this.state.msg),r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",className:"signup__input",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{type:"password",placeholder:"\u5bc6\u78bc",className:"signup__input",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("input",{type:"password",placeholder:"\u78ba\u8a8d\u5bc6\u78bc",className:"signup__input",onChange:function(t){return e.setState({passwordCheck:t.target.value})},onKeyDown:this.handleKeyDownSignup}),r.a.createElement("br",null),r.a.createElement("div",{className:"signup__enter",onClick:this.SignUp},"\u8a3b\u518a"),r.a.createElement("div",{className:"otherBtn",onClick:this.props.signupStatus},"\u767b\u5165")))}}]),t}(n.Component),E=Object(d.b)("",{getUser:b})(g),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).LogIn=function(){var e=a.state,t=e.email,n=e.password;a.props.Firebase.doSignInWithEmailAndPassword(t,n).then(function(e){a.setState({msg:"Success"}),localStorage.setItem("FirebaseUID",e.user.uid),a.props.getUser()}).catch(function(e){a.setState({msg:e.toString(e)})})},a.ForgetPasswordTrigger=function(){a.setState({forget:!a.state.forget})},a.SendEmail=function(){""!==a.state.forgetPasswordEmail.trim()&&a.props.Firebase.doFetchSignInMethodsForEmail(a.state.forgetPasswordEmail).then(function(e){e.length>0&&a.props.Firebase.doPasswordReset(a.state.forgetPasswordEmail).then(a.setState({msg:"Please Check Your Mail Box"}))}).catch(a.setState({msg:"Email is not exist!"}))},a.handleKeyDownLogin=function(e){"Enter"===e.key&&a.LogIn()},a.handleKeyDownForget=function(e){"Enter"===e.key&&a.SendEmail(a.state.forgetPasswordEmail)},a.state={email:"",password:"",msg:"",forgetPasswordEmail:"",forget:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup__box"},r.a.createElement("h1",null,"\u767b\u5165"),this.state.forget?r.a.createElement("div",{className:"signup__box_inner"},r.a.createElement("div",{className:"signup__error"},this.state.msg),r.a.createElement("input",{className:"signup__input",placeholder:"Email",onChange:function(t){return e.setState({forgetPasswordEmail:t.target.value})},onKeyDown:this.handleKeyDownForget}),r.a.createElement("div",{className:"signup__enter",onClick:this.SendEmail},"\u9001\u51fa"),r.a.createElement("div",{className:"otherBtn",onClick:this.ForgetPasswordTrigger},"\u8fd4\u56de")):r.a.createElement("div",{className:"signup__box_inner"},r.a.createElement("div",{className:"signup__error"},this.state.msg),r.a.createElement("input",{className:"signup__input",placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{className:"signup__input",placeholder:"\u5bc6\u78bc",type:"password",onChange:function(t){return e.setState({password:t.target.value})},onKeyDown:this.handleKeyDownLogin}),r.a.createElement("div",{className:"signup__enter",onClick:this.LogIn},"\u767b\u5165"),r.a.createElement("div",{className:"otherBtn",onClick:this.ForgetPasswordTrigger},"\u5fd8\u8a18\u5bc6\u78bc"),r.a.createElement("div",{className:"otherBtn",onClick:this.props.signupStatus},"\u8a3b\u518a")))}}]),t}(n.Component),y=Object(d.b)("",{getUser:b})(w),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).signupStatus=function(){a.setState({showSignup:!a.state.showSignup})},a.state={showSignup:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user_box"},r.a.createElement("div",{className:"user_box__inner"},this.state.showSignup?r.a.createElement(E,{signupStatus:this.signupStatus,Firebase:this.props.Firebase}):r.a.createElement(y,{signupStatus:this.signupStatus,Firebase:this.props.Firebase})))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).signOut=function(){window.confirm("\u78ba\u5b9a\u8981\u767b\u51fa\u55ce")&&a.props.Firebase.doSignOut().then(function(){localStorage.setItem("FirebaseUID",""),a.props.getUser(),window.location.reload()})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{style:j,onClick:function(){e.signOut(),e.props.closeSideMenu()}},"\u767b\u51fa")}}]),t}(n.Component),j={cursor:"pointer"},_=Object(d.b)("",{getUser:b})(O),k=a(135),S=a(50),N=a.n(S),F=(a(234),a(235),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({item:{name:e.state.item.name,time:N()(t).format("YYYY-MM-DD")}})},e.updateWatch=function(){e.props.Firebase.user(e.props.firebaseUID).child(e.props.type).push({name:e.state.item.name,time:e.state.item.time})},e.updateWanted=function(){e.props.Firebase.user(e.props.firebaseUID).child(e.props.type).push({name:e.state.item.name,time:e.state.item.time})},e.state={item:{name:"",time:N()(new Date).format("YYYY-MM-DD")}},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"edit__box"},r.a.createElement("div",{className:"closeBtn",onClick:function(){e.props.AddCard(!e.props.add)}},"\u274c"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",onChange:function(t){e.setState({item:{name:t.target.value,time:e.state.item.time}})}}),"watch"===this.props.type?r.a.createElement(k.a,{value:this.state.item.time,onChange:function(t){return e.handleChange(t)},dateFormat:"YYYY-MM-dd"}):""),r.a.createElement("div",{className:"addBtn",onClick:function(){"wanted"===e.props.type?(e.props.AddCard(!e.props.add),e.updateWanted()):(e.props.AddCard(!e.props.add),e.updateWatch())}},"Add"))}}]),t}(n.Component)),D=Object(d.b)(function(e){return{add:e.AddCardReducer,type:e.CardTypeReducer,firebaseUID:e.CheckLoginReducer.uid}},{AddCard:f})(F),A=(a(236),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.add?r.a.createElement("div",null,r.a.createElement("div",{className:"CardAdd"},"+"),r.a.createElement("div",{className:"CardAdd__edit"},r.a.createElement(D,{Firebase:this.props.Firebase}))):r.a.createElement("div",{className:"CardAdd",onClick:function(){e.props.AddCard(!e.props.add)}},"+")}}]),t}(n.Component)),I=Object(d.b)(function(e){return{add:e.AddCardReducer}},{AddCard:f})(A),x=(a(237),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).set=function(e){a.props.Firebase.user(a.props.firebaseUID).child(a.props.type).child(e).set({name:a.state.item.name,time:a.state.item.time})},a.delete=function(e){a.props.Firebase.user(a.props.firebaseUID).child(a.props.type).child(e).remove()},a.move=function(e){a.props.Firebase.user(a.props.firebaseUID).child(a.props.type).child(e).remove(),a.props.Firebase.user(a.props.firebaseUID).child("watch").child(e).set({name:a.state.item.name,time:a.state.item.time})},a.state={edit:!1,item:{name:a.props.detail.name,time:a.props.detail.time}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.state.edit?"cardBox__edit":"cardBox"},this.state.edit?"":r.a.createElement("div",{className:"edit",onClick:function(){e.setState({edit:!e.state.edit})}}),this.state.edit?r.a.createElement("div",{className:"closeBtn",onClick:function(){e.setState({edit:!e.state.edit})}},"\u274c"):"",this.state.edit?r.a.createElement("input",{onChange:function(t){e.setState({item:{name:t.target.value,time:e.state.item.time}})},value:this.state.item.name}):r.a.createElement("div",null,"\u540d\u7a31: ",this.state.item.name),"watch"===this.props.type?this.state.edit?r.a.createElement("input",{onChange:function(t){e.setState({item:{time:t.target.value,name:e.state.item.name}})},value:this.state.item.time}):r.a.createElement("div",null,"\u89c0\u770b\u6642\u9593: ",this.state.item.time):"","wanted"===this.props.type&&this.state.edit?r.a.createElement("div",{className:"moveBtn",onClick:function(){e.setState({edit:!e.state.edit}),e.move(e.props.id)}},"\u79fb\u81f3\u5df2\u89c0\u770b"):"",this.state.edit?r.a.createElement("div",{className:"saveBtn",onClick:function(){e.setState({edit:!e.state.edit}),e.set(e.props.id)}},"\u5132\u5b58"):"",this.state.edit?r.a.createElement("div",{className:"deleteBtn",onClick:function(){e.setState({edit:!e.state.edit}),e.delete(e.props.id)}},"\u522a\u9664"):"")}}]),t}(n.Component)),R=Object(d.b)(function(e){return{type:e.CardTypeReducer,firebaseUID:e.CheckLoginReducer.uid}})(x),L=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t={display:"flex",flexWrap:"wrap"};return r.a.createElement("div",null,"watch"===this.props.type&&this.props.list.watch?r.a.createElement("div",{style:t},Object.keys(this.props.list.watch).map(function(t){return r.a.createElement(R,{Firebase:e.props.Firebase,detail:e.props.list.watch[t],key:t,id:t})})):r.a.createElement("div",null),"wanted"===this.props.type&&this.props.list.wanted?r.a.createElement("div",{style:t},r.a.createElement("div",{style:t},Object.keys(this.props.list.wanted).map(function(t){return r.a.createElement(R,{Firebase:e.props.Firebase,detail:e.props.list.wanted[t],key:t,id:t})}))):r.a.createElement("div",null))}}]),t}(n.Component),T=Object(d.b)(function(e){return{type:e.CardTypeReducer,list:e.CheckLoginReducer.list}})(L),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).switch_to_watch=function(){a.setState({active:"watch"})},a.switch_to_wanted=function(){a.setState({active:"wanted"})},a.state={active:a.props.type},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:M},r.a.createElement("div",{style:W},r.a.createElement("div",{style:"watch"===this.state.active?Y:B,onClick:function(){e.props.AddCardType("watch"),e.switch_to_watch()}},"\u5df2\u89c0\u770b"),r.a.createElement("div",{style:"wanted"===this.state.active?Y:B,onClick:function(){e.props.AddCardType("wanted"),e.switch_to_wanted()}},"\u5f85\u89c0\u770b")),r.a.createElement("div",{style:P},r.a.createElement(I,{Firebase:this.props.Firebase}),r.a.createElement(T,{Firebase:this.props.Firebase})))}}]),t}(n.Component),M={display:"flex",flexDirection:"column",padding:"calc(50px + 2vw) 2vw"},W={display:"flex",fontSize:"18px",color:"white",marginBottom:"15px"},P={display:"flex"},Y={color:"yellow",cursor:"pointer",marginRight:"5px"},B={color:"white",cursor:"pointer",marginRight:"5px"},K=Object(d.b)(function(e){return{type:e.CardTypeReducer}},{AddCardType:function(e){return{type:"ADD_CARD_TYPE",payload:e}}})(U),H=a(117),J=a.n(H),z=a(154),q=(a(239),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={more:!1},a.updateWatch=function(e){a.props.Firebase.user(a.props.firebaseUID).child(e).push({name:a.props.item.title,time:N()(new Date).format("YYYY-MM-DD")})},a.updateWanted=function(e){a.props.Firebase.user(a.props.firebaseUID).child(e).push({name:a.props.item.title,time:N()(new Date).format("YYYY-MM-DD")})},a.checkWatch=function(){var e=!1;Object.keys(a.props.list.watch).map(function(t){a.props.list.watch[t].name===a.props.item.title&&(e=!0)}),e?alert("\u5df2\u5728\u6e05\u55ae\u5167"):(a.updateWatch("watch"),alert("\u6dfb\u52a0\u6210\u529f\uff01"))},a.checkWanted=function(){var e=!1;Object.keys(a.props.list.wanted).map(function(t){a.props.list.wanted[t].name===a.props.item.title&&(e=!0)}),e?alert("\u5df2\u5728\u6e05\u55ae\u5167"):(a.updateWanted("wanted"),alert("\u6dfb\u52a0\u6210\u529f\uff01"))},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"movie__card"},r.a.createElement("img",{className:"movie__image",src:"https://image.tmdb.org/t/p/w300"+this.props.item.poster_path,alt:""}),r.a.createElement("div",{className:"movie__title"}," ",this.props.item.title," "),r.a.createElement("div",{className:"movie__more",onClick:function(){e.setState({more:!0})}},"..."),this.state.more?r.a.createElement("div",{className:"movie__card_hover"},r.a.createElement("div",{className:"movie__close",onClick:function(){e.setState({more:!1})}},"\u274c"),r.a.createElement("div",{className:"movie__watch",onClick:this.checkWatch},"\u52a0\u5165\u5df2\u89c0\u770b"),r.a.createElement("div",{className:"movie__wanted",onClick:this.checkWanted},"\u52a0\u5165\u5f85\u89c0\u770b")):r.a.createElement("div",null))}}]),t}(n.Component)),V=Object(d.b)(function(e){return{firebaseUID:e.CheckLoginReducer.uid,list:e.CheckLoginReducer.list}})(q),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={movie:[],weather:0,weatherIcon:"",weatherArea:!0,movieArea:!0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(z.a)(J.a.mark(function e(){var t,a,n,i,s,c=this;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/popular?api_key=62e89effcdf6600bdd0c99c694029d19&language=zh-TW&region=tw");case 3:if((t=e.sent).ok){e.next=6;break}throw Error(t.statusText);case 6:return e.next=8,t.json();case 8:a=e.sent,n=a.results.map(function(e,t){return r.a.createElement(V,{Firebase:c.props.Firebase,item:e,key:t})}),this.setState({movie:n}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.setState({movieArea:!1});case 16:return e.prev=16,e.next=19,fetch("https://api.openweathermap.org/data/2.5/weather?q=Taipei,tw&APPID=bb26d8de2301acc163da7859740eaec3&units=metric");case 19:if((i=e.sent).ok){e.next=22;break}throw Error(i.statusText);case 22:return e.next=24,i.json();case 24:s=e.sent,this.setState({weather:s.main.temp,weatherIcon:"https://openweathermap.org/img/w/"+s.weather[0].icon+".png"}),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(16),this.setState({weatherArea:!1});case 31:case"end":return e.stop()}},e,this,[[0,13],[16,28]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"Home__box"},this.state.weatherArea?r.a.createElement("div",null,r.a.createElement("div",{className:"weather__box"},"\u73fe\u5728\u6eab\u5ea6 ",this.state.weather,"\xb0C ",r.a.createElement("img",{src:this.state.weatherIcon,alt:""})),r.a.createElement("div",null,parseInt(this.state.weather)>=20?"\u597d\u5929\u6c23\uff0c\u51fa\u9580\u770b\u5834\u96fb\u5f71\u5427":"\u6709\u9ede\u51b7\uff0c\u5728\u5bb6\u770b\u5834\u96fb\u5f71\u5427")):"",r.a.createElement("br",null),"\u71b1\u9580\u5f71\u7247",this.state.movieArea?r.a.createElement("div",{className:"movie__box"},this.state.movie):r.a.createElement("div",null,"\u7121\u8cc7\u6599..."))}}]),t}(n.Component),Q=(a(240),a(241),function(e){return r.a.createElement("div",{className:"total_number"},"\u76ee\u524d\u5df2\u89c0\u770b",e.total,"\u90e8\u96fb\u5f71")}),X=(a(133),a(242),function(e){return r.a.createElement("div",{className:"folder__item"},r.a.createElement("div",{className:"date"},r.a.createElement("h3",null,e.month,r.a.createElement("br",null),r.a.createElement("span",null,e.day))),r.a.createElement("div",{className:"name"},r.a.createElement("p",null,e.name)))}),Z=a(42),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).ref=Object(n.createRef)(),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Z.e(this.ref.current),t=.9*parseInt(Z.e("#container").style("width"),10)-2,a=.7*parseInt(Z.e("#container").style("height"),10)-2,n=function(e){for(var t=0,a=0;a<e.length;a++)e[a].value>t&&(t=e[a].value);return t}(this.props.data);var r=e.append("g").attr("transform","translate(30, 30)"),i=Z.c().range([0,t]).domain(this.props.data.map(function(e){return e.date})).padding(.4),s=Z.d().range([a,0]).domain([0,n]);r.append("g").attr("transform","translate(0, ".concat(a,")")).call(Z.a(i)),r.append("g").call(Z.b(s));var c=r.selectAll().data(this.props.data).enter().append("g");c.append("rect").attr("class","bar").attr("x",function(e){return i(e.date)}).attr("y",function(e){return s(e.value)}).attr("height",function(e){return a-s(e.value)}).attr("width",t/20).on("click",function(e){r.selectAll("#limit").remove();var a=s(e.value);r.append("line").attr("id","limit").attr("x1",0).attr("y1",a).attr("x2",t).attr("y2",a)}),c.append("text").attr("class","value").attr("x",function(e){return i(e.date)+i.bandwidth()/2}).attr("y",function(e){return s(e.value)+30}).attr("text-anchor","middle")}},{key:"render",value:function(){return r.a.createElement("svg",{ref:this.ref})}}]),t}(n.Component),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).pieDate=function(){for(var e=Array.from({length:12},function(e,t){return t+1}),t=[],n=function(n,r,c){c=0,(r={}).date=e[n],a.props.files.map(function(t){parseInt(e[n])===parseInt(t.month)&&c++}),r.value=c,t.push(r),i=r,s=c},r=0,i={},s=0;r<e.length;r++)n(r,i,s);return t},a.toggle=function(){a.setState({open:!a.state.open})},a.state={open:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"folder_inner ".concat(this.state.open?"open":""),onClick:this.toggle},this.props.name),this.state.open?r.a.createElement("div",null,r.a.createElement("div",{id:"container"},r.a.createElement($,{data:this.pieDate()})),r.a.createElement("ul",null,this.props.files.map(function(e){return r.a.createElement(X,{key:e.name,name:e.name,month:e.month,day:e.day})}))):null)}}]),t}(n.Component),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.setState({open:!a.state.open})},a.state={open:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cal__folder"},r.a.createElement("div",{className:"folder ".concat(this.state.open?"open":""),onClick:this.toggle},this.state.open?"\u95dc\u9589":"\u958b\u555f\u5206\u6790\u7d50\u679c"),this.state.open?r.a.createElement("ul",null,this.props.files.map(function(e){return r.a.createElement(ee,{key:e.name,name:e.name,files:e.files})})):null)}}]),t}(n.Component),ae=Object(d.b)(function(e){return{cardWatch:e.SaveWatchCardReducer,cardWanted:e.SaveWantedCardReducer}})(te),ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).total=function(){var e=Object.values(a.props.list.watch).map(function(e){return e.time});return r.a.createElement(Q,{total:e.length})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.list.watch?0===Object.values(this.props.list.watch).length?r.a.createElement("div",{className:"system_calculating"},"\u7121\u5206\u6790\u8cc7\u6599..."):r.a.createElement("div",null,this.total(),r.a.createElement(ae,{files:this.props.data})):r.a.createElement("div",{className:"system_calculating"},"\u7cfb\u7d71\u5206\u6790\u4e2d...")}}]),t}(n.Component),re=Object(d.b)(function(e){if(e.CheckLoginReducer.list&&e.CheckLoginReducer.list.watch){for(var t=[],a=[],n=[],r=[],i=[],s=Object.values(e.CheckLoginReducer.list.watch).map(function(e){return e.time.split("-")[0]}).sort(),c=0;c<s.length;c++)s[c]!==s[c+1]&&t.push(s[c]);for(var o=0;o<t.length;o++){for(var l=0;l<Object.values(e.CheckLoginReducer.list.watch).length;l++)t[o]===Object.values(e.CheckLoginReducer.list.watch)[l].time.split("-")[0]&&n.push({name:Object.values(e.CheckLoginReducer.list.watch)[l].name,month:Object.values(e.CheckLoginReducer.list.watch)[l].time.split("-")[1],day:Object.values(e.CheckLoginReducer.list.watch)[l].time.split("-")[2]});r.push(n),n=[]}for(var u=0;u<t.length;u++)a.name=t[u],a.files=r[u],i.push(a),a=[];return{list:e.CheckLoginReducer.list,data:i}}return{list:e.CheckLoginReducer.list,data:{}}})(ne),ie=a(256),se=a(255),ce=a(257),oe=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).changeSideMenuStatus=function(){e.setState({sidemenu:!e.state.sidemenu})},e.getListWhileFirebaseIDReady=function(){e.props.Firebase&&!e.state.get&&(e.props.Firebase.user(e.props.firebaseUID).on("value",function(t){null!==t.val()?e.props.TaskList(t.val()):e.props.TaskList("")}),e.setState({get:!0}))},e.state={sidemenu:!1,get:!1},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){var e=this;return"Unlogin"===this.props.CheckLogin?r.a.createElement("div",{className:"App"},r.a.createElement(C,{Firebase:this.props.Firebase})):"Loading"===this.props.CheckLogin?r.a.createElement("div",{className:"welcome"},r.a.createElement("div",{className:"welcome__text"},"Welcome Back")):(this.getListWhileFirebaseIDReady(),r.a.createElement(ie.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("ul",{className:"navBar"},r.a.createElement("div",{className:"left"},r.a.createElement(se.a,{to:"/"},r.a.createElement("li",{className:"navBar__logo"})),r.a.createElement("li",null,r.a.createElement(se.a,{to:"/Card"},"\u6211\u7684\u6e05\u55ae")),r.a.createElement("li",null,r.a.createElement(se.a,{to:"/Calculate"},"\u5206\u6790"))),r.a.createElement("div",{className:"right"},r.a.createElement(_,{Firebase:this.props.Firebase,closeSideMenu:this.changeSideMenuStatus}))),r.a.createElement("ul",{className:"navBar__mobile"},r.a.createElement(se.a,{to:"/"},r.a.createElement("li",{className:"navBar__mobile__logo"})),r.a.createElement("div",{className:"navBar__mobile__icon",onClick:this.changeSideMenuStatus}),this.state.sidemenu?r.a.createElement("div",{className:"sidemenu"},r.a.createElement("div",{className:"close",onClick:this.changeSideMenuStatus},"\u274c"),r.a.createElement("li",{onClick:this.changeSideMenuStatus},r.a.createElement(se.a,{to:"/"},"\u9748\u611f")),r.a.createElement("li",{onClick:this.changeSideMenuStatus},r.a.createElement(se.a,{to:"/Card"},"\u6211\u7684\u6e05\u55ae")),r.a.createElement("li",{onClick:this.changeSideMenuStatus},r.a.createElement(se.a,{to:"/Calculate"},"\u5206\u6790")),r.a.createElement(_,{Firebase:this.props.Firebase,closeSideMenu:this.changeSideMenuStatus})):""),r.a.createElement(ce.a,{exact:!0,path:"/",render:function(){return r.a.createElement(G,{Firebase:e.props.Firebase})}}),r.a.createElement(ce.a,{path:"/Card",render:function(){return r.a.createElement(K,{Firebase:e.props.Firebase})}}),r.a.createElement(ce.a,{path:"/Calculate",component:re}))))}}]),t}(n.Component),le=Object(d.b)(function(e){return{firebaseUID:e.CheckLoginReducer.uid,CheckLogin:e.CheckLoginReducer.status}},{getUser:b,TaskList:function(e){return function(t){t(e?{type:"FETCHTASKLIST",payload:e}:{type:"EMPTYTASKLIST",payload:{}})}}})(oe),ue=a(41),pe=a(156),de=a(94),me=Object(ue.c)({AddCardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"ADD_CARD"===t.type?t.payload:e},CardTypeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"watch",t=arguments.length>1?arguments[1]:void 0;return"ADD_CARD_TYPE"===t.type?t.payload:e},CheckLoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:"Loading",uid:"",list:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"FETCHING";switch(t.type){case"FETCH":return Object(de.a)({},e,{status:"Login",uid:t.payload});case"FETCH_ERROR":return{status:"Unlogin",uid:"",list:{}};case"FETCHTASKLIST":case"EMPTYTASKLIST":return Object(de.a)({},e,{list:t.payload});default:return e}}}),he=(a(244),a(246),{apiKey:"AIzaSyBqd2lmJTdVxcmAMUtmVjNNOef9JkHCvJA",authDomain:"todolist-7a64c.firebaseapp.com",databaseURL:"https://todolist-7a64c.firebaseio.com",projectId:"todolist-7a64c",storageBucket:"todolist-7a64c.appspot.com",messagingSenderId:"248405903996"}),fe=function e(){var t=this;Object(c.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doFetchSignInMethodsForEmail=function(e){return t.auth.fetchSignInMethodsForEmail(e)},this.user=function(e){return t.db.ref("users/".concat(e))},h.a.initializeApp(he),this.auth=h.a.auth(),this.db=h.a.database()};s.a.render(r.a.createElement(d.a,{store:Object(ue.e)(me,Object(ue.d)(Object(ue.a)(pe.a)))},r.a.createElement(le,{Firebase:new fe})),document.getElementById("root"))},95:function(e,t,a){}},[[157,1,2]]]);
//# sourceMappingURL=main.c06b0586.chunk.js.map