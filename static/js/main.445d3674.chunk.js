(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){},158:function(e,t,a){e.exports=a(253)},163:function(e,t,a){},164:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(57),s=a.n(r),c=(a(163),a(6)),o=a(7),l=a(10),u=a(8),m=a(11),d=(a(164),a(50)),p=(a(96),a(9)),h=a(51),v=a.n(h),f=function(e){return{type:"ADD_CARD",payload:e}},b=function(e){return{type:"FETCH",payload:e}},g=function(){return function(e){var t=v.a.auth().currentUser;t?e(b(t.uid)):localStorage.getItem("FirebaseUID")?e(b(localStorage.getItem("FirebaseUID"))):e({type:"FETCH_ERROR"})}},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).SignUp=function(){var e=a.state,t=e.email,n=e.password;e.passwordCheck===n?a.props.Firebase.doCreateUserWithEmailAndPassword(t,n).then(function(e){a.setState({msg:"Success"}),localStorage.setItem("FirebaseUID",e.user.uid),a.props.getUser()}).catch(function(e){a.setState({msg:e.toString(e)})}):a.setState({msg:"\u5bc6\u78bc\u4e0d\u76f8\u7b26"})},a.handleKeyDownSignup=function(e){"Enter"===e.key&&a.SignUp()},a.state={email:"",password:"",passwordCheck:"",msg:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"signup__box"},i.a.createElement("h1",null,"\u8a3b\u518a"),i.a.createElement("div",{className:"signup__box_inner"},i.a.createElement("div",{className:"signup__error"},this.state.msg),i.a.createElement("input",{name:"email",type:"text",placeholder:"Email",className:"signup__input",onChange:function(t){return e.setState({email:t.target.value})}}),i.a.createElement("input",{type:"password",placeholder:"\u5bc6\u78bc",className:"signup__input",onChange:function(t){return e.setState({password:t.target.value})}}),i.a.createElement("input",{type:"password",placeholder:"\u78ba\u8a8d\u5bc6\u78bc",className:"signup__input",onChange:function(t){return e.setState({passwordCheck:t.target.value})},onKeyDown:this.handleKeyDownSignup}),i.a.createElement("br",null),i.a.createElement("div",{className:"signup__enter",onClick:this.SignUp},"\u8a3b\u518a"),i.a.createElement("div",{className:"otherBtn",onClick:this.props.signupStatus},"\u767b\u5165")))}}]),t}(n.Component),y=Object(p.b)("",{getUser:g})(E),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).LogIn=function(){var e=a.state,t=e.email,n=e.password;a.props.Firebase.doSignInWithEmailAndPassword(t,n).then(function(e){a.setState({msg:"Success"}),localStorage.setItem("FirebaseUID",e.user.uid),a.props.getUser()}).catch(function(e){a.setState({msg:e.toString(e)})})},a.ForgetPasswordTrigger=function(){a.setState({forget:!a.state.forget})},a.SendEmail=function(){""!==a.state.forgetPasswordEmail.trim()&&a.props.Firebase.doFetchSignInMethodsForEmail(a.state.forgetPasswordEmail).then(function(e){e.length>0&&a.props.Firebase.doPasswordReset(a.state.forgetPasswordEmail).then(a.setState({msg:"Please Check Your Mail Box"}))}).catch(a.setState({msg:"Email is not exist!"}))},a.handleKeyDownLogin=function(e){"Enter"===e.key&&a.LogIn()},a.handleKeyDownForget=function(e){"Enter"===e.key&&a.SendEmail(a.state.forgetPasswordEmail)},a.state={email:"",password:"",msg:"",forgetPasswordEmail:"",forget:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"signup__box"},i.a.createElement("h1",null,"\u767b\u5165"),this.state.forget?i.a.createElement("div",{className:"signup__box_inner"},i.a.createElement("div",{className:"signup__error"},this.state.msg),i.a.createElement("input",{className:"signup__input",placeholder:"Email",onChange:function(t){return e.setState({forgetPasswordEmail:t.target.value})},onKeyDown:this.handleKeyDownForget}),i.a.createElement("div",{className:"signup__enter",onClick:this.SendEmail},"\u9001\u51fa"),i.a.createElement("div",{className:"otherBtn",onClick:this.ForgetPasswordTrigger},"\u8fd4\u56de")):i.a.createElement("div",{className:"signup__box_inner"},i.a.createElement("div",{className:"signup__error"},this.state.msg),i.a.createElement("input",{className:"signup__input",placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}}),i.a.createElement("input",{className:"signup__input",placeholder:"\u5bc6\u78bc",type:"password",onChange:function(t){return e.setState({password:t.target.value})},onKeyDown:this.handleKeyDownLogin}),i.a.createElement("div",{className:"signup__enter",onClick:this.LogIn},"\u767b\u5165"),i.a.createElement("div",{className:"otherBtn",onClick:this.ForgetPasswordTrigger},"\u5fd8\u8a18\u5bc6\u78bc"),i.a.createElement("div",{className:"otherBtn",onClick:this.props.signupStatus},"\u8a3b\u518a")))}}]),t}(n.Component),w=Object(p.b)("",{getUser:g})(_),O=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],s=a[1],c=function(){s(!r)};return i.a.createElement("div",{className:"user_box"},i.a.createElement("div",{className:"user_box__inner"},r?i.a.createElement(y,{signupStatus:c,Firebase:e.Firebase}):i.a.createElement(w,{signupStatus:c,Firebase:e.Firebase})))},C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).signOut=function(){window.confirm("\u78ba\u5b9a\u8981\u767b\u51fa\u55ce")&&a.props.Firebase.doSignOut().then(function(){localStorage.setItem("FirebaseUID",""),a.props.getUser(),window.location.reload()})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("li",{style:k,onClick:function(){e.signOut(),e.props.closeSideMenu()}},"\u767b\u51fa")}}]),t}(n.Component),k={cursor:"pointer"},j=Object(p.b)("",{getUser:g})(C),S=a(136),N=a(38),D=a.n(N),F=(a(235),a(236),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({item:{name:e.state.item.name,time:D()(t).format("YYYY-MM-DD")}})},e.updateWatch=function(){e.props.Firebase.user(e.props.firebaseUID).child(e.props.type).push({name:e.state.item.name,time:e.state.item.time})},e.updateWanted=function(){e.props.Firebase.user(e.props.firebaseUID).child(e.props.type).push({name:e.state.item.name,time:e.state.item.time})},e.state={item:{name:"",time:D()(new Date).format("YYYY-MM-DD")}},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"edit__box"},i.a.createElement("div",{className:"closeBtn",onClick:function(){e.props.AddCard(!e.props.add)}},"\u274c"),i.a.createElement("div",null,i.a.createElement("input",{placeholder:"Name",onChange:function(t){e.setState({item:{name:t.target.value,time:e.state.item.time}})}}),"watch"===this.props.type?i.a.createElement(S.a,{value:this.state.item.time,onChange:function(t){return e.handleChange(t)},dateFormat:"YYYY-MM-dd"}):""),i.a.createElement("div",{className:"addBtn",onClick:function(){"wanted"===e.props.type?(e.props.AddCard(!e.props.add),e.updateWanted()):(e.props.AddCard(!e.props.add),e.updateWatch())}},"Add"))}}]),t}(n.Component)),L=Object(p.b)(function(e){return{add:e.AddCardReducer,type:e.CardTypeReducer,firebaseUID:e.CheckLoginReducer.uid}},{AddCard:f})(F),A=(a(237),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.add?i.a.createElement("div",null,i.a.createElement("div",{className:"CardAdd__edit"},i.a.createElement(L,{Firebase:this.props.Firebase}))):i.a.createElement("div",{className:"CardAdd",onClick:function(){e.props.AddCard(!e.props.add)}},"+")}}]),t}(n.Component)),I=Object(p.b)(function(e){return{add:e.AddCardReducer}},{AddCard:f})(A),P=(a(238),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).set=function(e){a.props.Firebase.user(a.props.firebaseUID).child(a.props.type).child(e).set({name:a.state.item.name,time:a.state.item.time})},a.delete=function(e){window.confirm("\u78ba\u5b9a\u8981\u522a\u9664\u55ce")&&a.props.Firebase.user(a.props.firebaseUID).child(a.props.type).child(e).remove()},a.move=function(e){a.props.Firebase.user(a.props.firebaseUID).child(a.props.type).child(e).remove(),a.props.Firebase.user(a.props.firebaseUID).child("watch").child(e).set({name:a.state.item.name,time:a.state.item.time})},a.state={edit:!1,item:{name:a.props.detail.name,time:a.props.detail.time}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.state.edit?"cardBox__edit":"cardBox"},this.state.edit?"":i.a.createElement("div",{className:"edit",onClick:function(){e.setState({edit:!e.state.edit})}}),this.state.edit?i.a.createElement("div",{className:"closeBtn",onClick:function(){e.setState({edit:!e.state.edit})}},"\u274c"):"",this.state.edit?i.a.createElement("input",{onChange:function(t){e.setState({item:{name:t.target.value,time:e.state.item.time}})},value:this.state.item.name}):i.a.createElement("div",null,"\u540d\u7a31: ",this.state.item.name),"watch"===this.props.type?this.state.edit?i.a.createElement("input",{onChange:function(t){e.setState({item:{time:t.target.value,name:e.state.item.name}})},value:this.state.item.time}):i.a.createElement("div",null,"\u89c0\u770b\u6642\u9593: ",this.state.item.time):"","wanted"===this.props.type&&this.state.edit?i.a.createElement("div",{className:"moveBtn",onClick:function(){e.setState({edit:!e.state.edit}),e.move(e.props.id)}},"\u79fb\u81f3\u5df2\u89c0\u770b"):"",this.state.edit?i.a.createElement("div",{className:"saveBtn",onClick:function(){e.setState({edit:!e.state.edit}),e.set(e.props.id)}},"\u5132\u5b58"):"",this.state.edit?i.a.createElement("div",{className:"deleteBtn",onClick:function(){e.setState({edit:!e.state.edit}),e.delete(e.props.id)}},"\u522a\u9664"):"")}}]),t}(n.Component)),M=Object(p.b)(function(e){return{type:e.CardTypeReducer,firebaseUID:e.CheckLoginReducer.uid}})(P),R=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t={display:"flex",flexWrap:"wrap"};return i.a.createElement("div",null,"watch"===this.props.type&&this.props.list.watch?i.a.createElement("div",{style:t},Object.keys(this.props.list.watch).map(function(t){return i.a.createElement(M,{Firebase:e.props.Firebase,detail:e.props.list.watch[t],key:t,id:t})})):i.a.createElement("div",null),"wanted"===this.props.type&&this.props.list.wanted?i.a.createElement("div",{style:t},i.a.createElement("div",{style:t},Object.keys(this.props.list.wanted).map(function(t){return i.a.createElement(M,{Firebase:e.props.Firebase,detail:e.props.list.wanted[t],key:t,id:t})}))):i.a.createElement("div",null))}}]),t}(n.Component),x=Object(p.b)(function(e){return{type:e.CardTypeReducer,list:e.CheckLoginReducer.list}})(R),T=(a(239),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).switch_to_watch=function(){a.setState({active:"watch"})},a.switch_to_wanted=function(){a.setState({active:"wanted"})},a.state={active:a.props.type},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card__page "},i.a.createElement("div",{className:"navBtn"},i.a.createElement("div",{className:"navBtn__item ".concat("watch"===this.state.active?"active":""),onClick:function(){e.props.AddCardType("watch"),e.switch_to_watch()}},"\u5df2\u89c0\u770b"),i.a.createElement("div",{className:"navBtn__item ".concat("wanted"===this.state.active?"active":""),onClick:function(){e.props.AddCardType("wanted"),e.switch_to_wanted()}},"\u5f85\u89c0\u770b")),i.a.createElement("div",{className:"content"},i.a.createElement(I,{Firebase:this.props.Firebase}),i.a.createElement(x,{Firebase:this.props.Firebase})))}}]),t}(n.Component)),U=Object(p.b)(function(e){return{type:e.CardTypeReducer}},{AddCardType:function(e){return{type:"ADD_CARD_TYPE",payload:e}}})(T),Y=a(118),B=a.n(Y),W=a(155),K=(a(241),Object(p.b)(function(e){return{firebaseUID:e.CheckLoginReducer.uid,list:e.CheckLoginReducer.list}})(function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],s=a[1];return i.a.createElement("div",{className:"movie__card"},i.a.createElement("img",{className:"movie__image",src:"https://image.tmdb.org/t/p/w300"+e.item.poster_path,alt:""}),i.a.createElement("div",{className:"movie__title"}," ",e.item.title," "),i.a.createElement("div",{className:"movie__more",onClick:function(){s(!r)}},"..."),r?i.a.createElement("div",{className:"movie__card_hover"},i.a.createElement("div",{className:"movie__close",onClick:function(){s(!r)}},"\u274c"),i.a.createElement("div",{className:"movie__watch",onClick:function(){var t,a=!1;Object.keys(e.list.watch).forEach(function(t){e.list.watch[t].name===e.item.title&&(a=!0)}),a?alert("\u5df2\u5728\u6e05\u55ae\u5167"):(t="watch",e.Firebase.user(e.firebaseUID).child(t).push({name:e.item.title,time:D()(new Date).format("YYYY-MM-DD")}),alert("\u6dfb\u52a0\u6210\u529f\uff01"))}},"\u52a0\u5165\u5df2\u89c0\u770b"),i.a.createElement("div",{className:"movie__wanted",onClick:function(){var t,a=!1;Object.keys(e.list.wanted).forEach(function(t){e.list.wanted[t].name===e.item.title&&(a=!0)}),a?alert("\u5df2\u5728\u6e05\u55ae\u5167"):(t="wanted",e.Firebase.user(e.firebaseUID).child(t).push({name:e.item.title,time:D()(new Date).format("YYYY-MM-DD")}),alert("\u6dfb\u52a0\u6210\u529f\uff01"))}},"\u52a0\u5165\u5f85\u89c0\u770b")):i.a.createElement("div",null))})),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={movie:[],weather:0,weatherIcon:"",weatherArea:!1,movieArea:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(W.a)(B.a.mark(function e(){var t,a,n,r,s,c=this;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/popular?api_key=62e89effcdf6600bdd0c99c694029d19&language=zh-TW&region=tw");case 3:if((t=e.sent).ok){e.next=6;break}throw Error(t.statusText);case 6:return e.next=8,t.json();case 8:a=e.sent,n=a.results.map(function(e,t){return i.a.createElement(K,{Firebase:c.props.Firebase,item:e,key:t})}),this.setState({movie:n}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.setState({movieArea:!1});case 16:return e.prev=16,e.next=19,fetch("https://api.openweathermap.org/data/2.5/weather?q=Taipei,tw&APPID=bb26d8de2301acc163da7859740eaec3&units=metric");case 19:if((r=e.sent).ok){e.next=22;break}throw Error(r.statusText);case 22:return e.next=24,r.json();case 24:s=e.sent,this.setState({weather:s.main.temp,weatherIcon:"https://openweathermap.org/img/w/"+s.weather[0].icon+".png",weatherArea:!0}),e.next=30;break;case 28:e.prev=28,e.t1=e.catch(16);case 30:case"end":return e.stop()}},e,this,[[0,13],[16,28]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"Home__box"},this.state.weatherArea?i.a.createElement("div",null,i.a.createElement("div",{className:"weather__box"},"\u73fe\u5728\u6eab\u5ea6 ",this.state.weather,"\xb0C ",i.a.createElement("img",{src:this.state.weatherIcon,alt:""})),i.a.createElement("div",null,parseInt(this.state.weather)>=20?"\u597d\u5929\u6c23\uff0c\u51fa\u9580\u770b\u5834\u96fb\u5f71\u5427":"\u6709\u9ede\u51b7\uff0c\u5728\u5bb6\u770b\u5834\u96fb\u5f71\u5427")):"",i.a.createElement("br",null),"\u73fe\u6b63\u71b1\u6620",this.state.movieArea?i.a.createElement("div",{className:"movie__box"},this.state.movie):i.a.createElement("div",null,"\u7121\u8cc7\u6599..."))}}]),t}(n.Component),J=(a(242),a(243),function(e){return i.a.createElement("div",{className:"total_number"},"\u76ee\u524d\u5df2\u89c0\u770b",e.total,"\u90e8\u96fb\u5f71")}),z=(a(134),a(244),function(e){return i.a.createElement("div",{className:"folder__item"},i.a.createElement("div",{className:"date"},i.a.createElement("h3",null,e.month,i.a.createElement("br",null),i.a.createElement("span",null,e.day))),i.a.createElement("div",{className:"name"},i.a.createElement("p",null,e.name)))}),q=a(43),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).ref=Object(n.createRef)(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=q.e(this.ref.current),t=.9*parseInt(q.e("#container").style("width"),10)-2,a=.7*parseInt(q.e("#container").style("height"),10)-2,n=function(e){for(var t=0,a=0;a<e.length;a++)e[a].value>t&&(t=e[a].value);return t}(this.props.data);var i=e.append("g").attr("transform","translate(30, 30)"),r=q.c().range([0,t]).domain(this.props.data.map(function(e){return e.date})).padding(.4),s=q.d().range([a,0]).domain([0,n]);i.append("g").attr("transform","translate(0, ".concat(a,")")).call(q.a(r)),i.append("g").call(q.b(s));var c=i.selectAll().data(this.props.data).enter().append("g");c.append("rect").attr("class","bar").attr("x",function(e){return r(e.date)}).attr("y",function(e){return s(e.value)}).attr("height",function(e){return a-s(e.value)}).attr("width",t/20).on("click",function(e){i.selectAll("#limit").remove();var a=s(e.value);i.append("line").attr("id","limit").attr("x1",0).attr("y1",a).attr("x2",t).attr("y2",a)}),c.append("text").attr("class","value").attr("x",function(e){return r(e.date)+r.bandwidth()/2}).attr("y",function(e){return s(e.value)+30}).attr("text-anchor","middle")}},{key:"render",value:function(){return i.a.createElement("svg",{ref:this.ref})}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).pieDate=function(){for(var e=Array.from({length:12},function(e,t){return t+1}),t=[],n=function(n,i,c){c=0,(i={}).date=e[n],a.props.files.forEach(function(t){parseInt(e[n])===parseInt(t.month)&&c++}),i.value=c,t.push(i),r=i,s=c},i=0,r={},s=0;i<e.length;i++)n(i,r,s);return t},a.toggle=function(){a.setState({open:!a.state.open})},a.state={open:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"folder_inner ".concat(this.state.open?"open":""),onClick:this.toggle},this.props.name),this.state.open?i.a.createElement("div",null,i.a.createElement("div",{id:"container"},i.a.createElement(V,{data:this.pieDate()})),i.a.createElement("ul",null,this.props.files.map(function(e){return i.a.createElement(z,{key:e.name,name:e.name,month:e.month,day:e.day})}))):null)}}]),t}(n.Component),Q=Object(p.b)(function(e){return{cardWatch:e.SaveWatchCardReducer,cardWanted:e.SaveWantedCardReducer}})(function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],s=a[1];return i.a.createElement("div",{className:"cal__folder"},i.a.createElement("div",{className:"folder ".concat(r?"open":""),onClick:function(){s(!r)}},r?"\u95dc\u9589":"\u958b\u555f\u5206\u6790\u7d50\u679c"),r?i.a.createElement("ul",null,e.files.map(function(e){return i.a.createElement(G,{key:e.name,name:e.name,files:e.files})})):null)}),X=Object(p.b)(function(e){if(e.CheckLoginReducer.list&&e.CheckLoginReducer.list.watch){for(var t=[],a=[],n=[],i=[],r=[],s=Object.values(e.CheckLoginReducer.list.watch).map(function(e){return e.time.split("-")[0]}).sort(),c=0;c<s.length;c++)s[c]!==s[c+1]&&t.push(s[c]);for(var o=0;o<t.length;o++){for(var l=0;l<Object.values(e.CheckLoginReducer.list.watch).length;l++)t[o]===Object.values(e.CheckLoginReducer.list.watch)[l].time.split("-")[0]&&n.push({name:Object.values(e.CheckLoginReducer.list.watch)[l].name,month:Object.values(e.CheckLoginReducer.list.watch)[l].time.split("-")[1],day:Object.values(e.CheckLoginReducer.list.watch)[l].time.split("-")[2]});i.push(n),n=[]}for(var u=0;u<t.length;u++)a.name=t[u],a.files=i[u],r.push(a),a=[];return{list:e.CheckLoginReducer.list,data:r}}return{list:e.CheckLoginReducer.list,data:{}}})(function(e){return e.list.watch?i.a.createElement("div",null,function(){var t=Object.values(e.list.watch).map(function(e){return e.time});return i.a.createElement(J,{total:t.length})}(),i.a.createElement(Q,{files:e.data})):i.a.createElement("div",{className:"system_calculating"},"\u7121\u5206\u6790\u8cc7\u6599...")}),Z=(a(245),a(246),function(e){return i.a.createElement("div",{className:"PlayTimeCard"},i.a.createElement("div",{className:"PlayTimeCard__theater"},e.theater),i.a.createElement("div",{className:"PlayTimeCard__timebox"},e.time.map(function(e){return e=e.split(" ")[1],i.a.createElement("div",{key:e},"".concat(e.split(":")[0],":").concat(e.split(":")[1]))})))}),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).detail=function(e){a.state.moviePlayList.forEach(function(t){Object.keys(t)[0]===e.target.value&&a.setState({movie:e.target.value,detail:t[e.target.value],area:"",chooseList:[],poster:{}})})},a.renderMatchMovie=function(e){a.state.detail.forEach(function(t){if(Object.keys(t)[0]===e.target.value){var n={};a.state.posterData.forEach(function(e){Object.keys(e)[0]===a.state.movie&&(n=e)}),a.setState({area:e.target.value,chooseList:t[e.target.value],poster:n})}})},a.closeSearch=function(){a.setState({search:!1,matchList:[]})},a.search=function(e){var t=e.currentTarget.innerHTML;a.state.moviePlayList.forEach(function(e){if(Object.keys(e)[0]===t){var n={};e[t].forEach(function(e){n=Object.assign(n,e[Object.keys(e)])});var i={};a.state.posterData.forEach(function(e){Object.keys(e)[0]===t&&(i=e)}),a.setState({movie:t,chooseList:n,area:"",matchList:[],detail:e[Object.keys(e)],search:!1,poster:i})}})},a.getMatchList=function(e){var t=[];a.state.moviePlayList.forEach(function(a){""!==e.trim()&&Object.keys(a)[0].includes(e)&&t.push(Object.keys(a)[0])}),a.setState({matchList:t,movie:e,chooseList:[],area:"",detail:[],poster:{}})},a.state={moviePlayList:[],show:!1,movie:"",detail:[],area:"",chooseList:[],matchList:[],search:!1,posterData:[],poster:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.Firebase.getMoviePlayList().once("value",function(t){null!==t.val()&&e.setState({moviePlayList:t.val(),show:!0})}),this.props.Firebase.getMoviePosterDataList().once("value",function(t){null!==t.val()&&e.setState({posterData:t.val()})})}},{key:"render",value:function(){var e=this;return this.state.show?i.a.createElement("div",{className:"moviePlayList"},i.a.createElement("div",{className:"moviePlayList__top"},i.a.createElement("div",{className:"top__selectArea"},i.a.createElement("select",{className:"top__selectArea-movie",value:this.state.movie?this.state.movie:"\u8acb\u9078\u64c7",onChange:function(t){return e.detail(t)}},i.a.createElement("option",null,"\u8acb\u9078\u64c7"),this.state.moviePlayList.map(function(e){return i.a.createElement("option",{key:Object.keys(e),value:Object.keys(e)},Object.keys(e))})),i.a.createElement("select",{className:"top__selectArea-area",value:this.state.area?this.state.area:"\u8acb\u9078\u64c7",onChange:function(t){return e.renderMatchMovie(t)}},i.a.createElement("option",null,"\u8acb\u9078\u64c7"),this.state.detail.map(function(e){return i.a.createElement("option",{key:Object.keys(e),value:Object.keys(e)},Object.keys(e))})))),i.a.createElement("div",{className:"moviePlayList__down"},i.a.createElement("div",{className:"moviePoster__box"},i.a.createElement("div",{className:"moviePoster__poster"},i.a.createElement("img",{alt:"",src:0===Object.keys(this.state.poster).length?"":Object.values(this.state.poster)[0][0]})),i.a.createElement("a",{className:"moviePoster__title",target:"_blank",href:"https://movies.yahoo.com.tw/movieinfo_main/".concat(0===Object.keys(this.state.poster).length?"":Object.values(this.state.poster)[0][1])},Object.keys(this.state.poster))),Object.keys(this.state.chooseList).map(function(t){return i.a.createElement(Z,{key:t,theater:t,time:e.state.chooseList[t]})})),this.state.search?i.a.createElement("div",null,i.a.createElement("div",{className:"search__mask",onClick:this.closeSearch}),i.a.createElement("div",{className:"search__Box"},i.a.createElement("div",{className:"search__inputArea"},i.a.createElement("input",{placeholder:"\u641c\u5c0b\u96fb\u5f71",className:"search__input",onChange:function(t){e.getMatchList(t.target.value)}}),i.a.createElement("div",{className:"matchbox"},this.state.matchList.map(function(t){return i.a.createElement("li",{key:t,onClick:function(t){return e.search(t)}},t)}))),i.a.createElement("div",{className:"search__cancel",onClick:this.closeSearch},"\uff38"))):i.a.createElement("div",{className:"movieSearch",onClick:function(){e.setState({search:!0})}})):i.a.createElement("div",{className:"noData"},i.a.createElement("div",{className:"noData__text"},"\u8cc7\u6599\u66f4\u65b0\u4e2d"))}}]),t}(n.Component),ee=a(261),te=a(259),ae=a(260),ne=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).changeSideMenuStatus=function(){e.setState({sidemenu:!e.state.sidemenu})},e.getListWhileFirebaseIDReady=function(){e.props.Firebase&&!e.state.get&&(e.props.Firebase.user(e.props.firebaseUID).on("value",function(t){null!==t.val()?e.props.TaskList(t.val()):e.props.TaskList("")}),e.setState({get:!0}))},e.state={sidemenu:!1,get:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){var e=this;return"Unlogin"===this.props.CheckLogin?i.a.createElement("div",{className:"App"},i.a.createElement(O,{Firebase:this.props.Firebase})):"Loading"===this.props.CheckLogin?i.a.createElement("div",{className:"welcome"},i.a.createElement("div",{className:"welcome__text"},"Welcome Back")):(this.getListWhileFirebaseIDReady(),i.a.createElement(ee.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("ul",{className:"navBar"},i.a.createElement("div",{className:"left"},i.a.createElement(te.a,{to:"/"},i.a.createElement("li",{className:"navBar__logo"})),i.a.createElement("li",null,i.a.createElement(te.a,{to:"/Card"},"\u6211\u7684\u6e05\u55ae")),i.a.createElement("li",null,i.a.createElement(te.a,{to:"/Calculate"},"\u5206\u6790")),i.a.createElement("li",null,i.a.createElement(te.a,{to:"/NowPlaying"},"\u96fb\u5f71\u6642\u523b\u8868"))),i.a.createElement("div",{className:"right"},i.a.createElement(j,{Firebase:this.props.Firebase,closeSideMenu:this.changeSideMenuStatus}))),i.a.createElement("ul",{className:"navBar__mobile"},i.a.createElement(te.a,{to:"/"},i.a.createElement("li",{className:"navBar__mobile__logo"})),i.a.createElement("div",{className:"navBar__mobile__icon",onClick:this.changeSideMenuStatus}),this.state.sidemenu?i.a.createElement("div",{className:"sidemenu"},i.a.createElement("div",{className:"close",onClick:this.changeSideMenuStatus},"\u274c"),i.a.createElement("li",{onClick:this.changeSideMenuStatus},i.a.createElement(te.a,{to:"/"},"\u73fe\u6b63\u71b1\u6620")),i.a.createElement("li",{onClick:this.changeSideMenuStatus},i.a.createElement(te.a,{to:"/Card"},"\u6211\u7684\u6e05\u55ae")),i.a.createElement("li",{onClick:this.changeSideMenuStatus},i.a.createElement(te.a,{to:"/Calculate"},"\u5206\u6790")),i.a.createElement("li",{onClick:this.changeSideMenuStatus},i.a.createElement(te.a,{to:"/NowPlaying"},"\u96fb\u5f71\u6642\u523b\u8868")),i.a.createElement(j,{Firebase:this.props.Firebase,closeSideMenu:this.changeSideMenuStatus})):""),i.a.createElement(ae.a,{exact:!0,path:"/",render:function(){return i.a.createElement(H,{Firebase:e.props.Firebase})}}),i.a.createElement(ae.a,{path:"/Card",render:function(){return i.a.createElement(U,{Firebase:e.props.Firebase})}}),i.a.createElement(ae.a,{path:"/Calculate",component:X}),i.a.createElement(ae.a,{path:"/NowPlaying",render:function(){return i.a.createElement($,{Firebase:e.props.Firebase})}}))))}}]),t}(n.Component),ie=Object(p.b)(function(e){return{firebaseUID:e.CheckLoginReducer.uid,CheckLogin:e.CheckLoginReducer.status}},{getUser:g,TaskList:function(e){return function(t){t(e?{type:"FETCHTASKLIST",payload:e}:{type:"EMPTYTASKLIST",payload:{}})}}})(ne),re=a(42),se=a(157),ce=a(95),oe=Object(re.c)({AddCardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"ADD_CARD"===t.type?t.payload:e},CardTypeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"watch",t=arguments.length>1?arguments[1]:void 0;return"ADD_CARD_TYPE"===t.type?t.payload:e},CheckLoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:"Loading",uid:"",list:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"FETCHING";switch(t.type){case"FETCH":return Object(ce.a)({},e,{status:"Login",uid:t.payload});case"FETCH_ERROR":return{status:"Unlogin",uid:"",list:{}};case"FETCHTASKLIST":case"EMPTYTASKLIST":return Object(ce.a)({},e,{list:t.payload});default:return e}}}),le=(a(248),a(250),{apiKey:"AIzaSyBqd2lmJTdVxcmAMUtmVjNNOef9JkHCvJA",authDomain:"todolist-7a64c.firebaseapp.com",databaseURL:"https://todolist-7a64c.firebaseio.com",projectId:"todolist-7a64c",storageBucket:"todolist-7a64c.appspot.com",messagingSenderId:"248405903996"}),ue=function e(){var t=this;Object(c.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doFetchSignInMethodsForEmail=function(e){return t.auth.fetchSignInMethodsForEmail(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.getMoviePlayList=function(){return t.db.ref("moviePlayList/".concat(D()(new Date).format("YYYY-MM-DD")))},this.getMoviePosterDataList=function(){return t.db.ref("moviePosterDataList/".concat(D()(new Date).format("YYYY-MM-DD")))},v.a.initializeApp(le),this.auth=v.a.auth(),this.db=v.a.database()};s.a.render(i.a.createElement(p.a,{store:Object(re.e)(oe,Object(re.d)(Object(re.a)(se.a)))},i.a.createElement(ie,{Firebase:new ue})),document.getElementById("root"))},96:function(e,t,a){}},[[158,1,2]]]);
//# sourceMappingURL=main.445d3674.chunk.js.map