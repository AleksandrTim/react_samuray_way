(this["webpackJsonpreact-project-1"]=this["webpackJsonpreact-project-1"]||[]).push([[3],{293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__WNQSs"}},294:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1N71F",posts:"MyPosts_posts__1CYG-"}},295:function(e,t,a){e.exports={item:"Post_item__B1Egu"}},296:function(e,t,a){"use strict";a.r(t);var s=a(27),n=a(28),r=a(29),o=a(30),u=a(0),c=a.n(u),l=a(293),i=a.n(l),p=a(64),m=a(127),f=a(94),d=function(e){var t=Object(u.useState)(!1),a=Object(m.a)(t,2),s=a[0],n=a[1],r=Object(u.useState)(e.status),o=Object(m.a)(r,2),l=o[0],i=o[1];Object(u.useEffect)((function(){i(e.status)}),[e.status]);return c.a.createElement("div",null,!s&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"no status")),s&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1)},value:l})))},E=function(e){var t=e.profile,a=e.status,s=e.updateStatus;return t?c.a.createElement("div",null,c.a.createElement("div",{className:i.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large}),c.a.createElement(d,{status:a,updateStatus:s}))):c.a.createElement(p.a,null)},h=a(40),b=a(294),v=a.n(b),g=a(295),j=a.n(g),P=function(e){return c.a.createElement("div",{className:j.a.item},c.a.createElement("img",{src:"https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount))},O=a(88),k=a(126),S=a(65),_=a(41),x=Object(S.a)(10),y=Object(k.a)({form:"ProfileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(O.a,{name:"newPostText",component:_.b,placeholder:"Post message",validate:[S.b,x]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),B=c.a.memo((function(e){console.log("RENDER 1");var t=Object(h.a)(e.posts).reverse().map((function(e){return c.a.createElement(P,{message:e.message,likesCount:e.likesCount})}));c.a.createRef();return c.a.createElement("div",{className:v.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(y,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:v.a.posts},t))})),N=a(11),w=Object(N.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(f.a)(t))}}}))(B),C=function(e){return c.a.createElement("div",null,c.a.createElement(E,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(w,null))},I=a(24),M=a(7),T=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement(C,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(c.a.Component);t.default=Object(M.d)(Object(N.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:f.d,getStatus:f.c,updateStatus:f.e}),I.f)(T)}}]);
//# sourceMappingURL=3.5738245d.chunk.js.map