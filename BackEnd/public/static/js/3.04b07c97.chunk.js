(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{552:function(e,a,t){"use strict";var c=t(1),s=t.n(c),n=function(e){var a=e.conversation,t=e.user;return s.a.createElement("div",{className:"d-flex flex-nowrap chat-item"},s.a.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:t.thumb,alt:""}),s.a.createElement("div",{className:"bubble"},s.a.createElement("div",{className:"message"},a.message),s.a.createElement("div",{className:"time text-muted text-right mt-2"},a.sentAt)))},r=function(e){var a=e.conversation;return s.a.createElement("div",{className:"d-flex flex-nowrap chat-item flex-row-reverse"},s.a.createElement("img",{className:"rounded-circle avatar size-40 align-self-end",src:t(73),alt:a.name}),s.a.createElement("div",{className:"bubble jambo-card"},s.a.createElement("div",{className:"message"},a.message),s.a.createElement("div",{className:"time text-muted text-right mt-2"},a.sentAt)))};a.a=function(e){var a=e.conversationData,t=e.selectedUser;return s.a.createElement("div",{className:"chat-main-content"},a.map(function(e,a){return"sent"===e.type?s.a.createElement(r,{key:a,conversation:e}):s.a.createElement(n,{key:a,conversation:e,user:t})}))}},553:function(e,a,t){"use strict";var c=t(1),s=t.n(c),n=function(e){var a=e.chat,t=e.selectedSectionId,c=e.onSelectUser;return s.a.createElement("div",{key:a.id,className:"chat-user-item ".concat(t===a.id?"active":""),onClick:function(){c(a)}},s.a.createElement("div",{className:"chat-user-row row"},s.a.createElement("div",{className:"chat-avatar col-xl-2 col-3"},s.a.createElement("div",{className:"chat-avatar-mode"},s.a.createElement("img",{src:a.thumb,className:"rounded-circle size-40",alt:a.name}),s.a.createElement("span",{className:"chat-mode small ".concat(a.status)}))),s.a.createElement("div",{className:"chat-info col-xl-8 col-6"},s.a.createElement("span",{className:"name h4"},a.name),s.a.createElement("div",{className:"chat-info-des"},a.lastMessage.substring(0,25)+"..."),s.a.createElement("div",{className:"last-message-time"},a.lastMessageTime)),s.a.createElement("div",{className:"chat-date col-xl-2 col-3"},s.a.createElement("div",{className:"bg-primary rounded-circle badge text-white"},a.unreadMessage))))};a.a=function(e){var a=e.chatUsers,t=e.selectedSectionId,c=e.onSelectUser;return s.a.createElement("div",{className:"chat-user"},a.map(function(e,a){return s.a.createElement(n,{key:a,chat:e,selectedSectionId:t,onSelectUser:c})}))}},554:function(e,a,t){"use strict";var c=t(1),s=t.n(c),n=function(e){var a=e.onSelectUser,t=e.selectedSectionId,c=e.user;return s.a.createElement("div",{className:"chat-user-item ".concat(t===c.id?"active":""),onClick:function(){a(c)}},s.a.createElement("div",{className:"chat-user-row row"},s.a.createElement("div",{className:"chat-avatar col-xl-2 col-3"},s.a.createElement("div",{className:"chat-avatar-mode"},s.a.createElement("img",{src:c.thumb,className:"rounded-circle size-40",alt:"Abbott"}),s.a.createElement("span",{className:"chat-mode smallcal ".concat(c.status)}))),s.a.createElement("div",{className:"chat-contact-col col-xl-10 col-9"},s.a.createElement("div",{className:"h4 name"},c.name),s.a.createElement("div",{className:"chat-info-des"},c.mood.substring(0,30)+"..."))))};a.a=function(e){var a=e.onSelectUser,t=e.selectedSectionId,c=e.contactList;return s.a.createElement("div",{className:"chat-user"},c.map(function(e,c){return s.a.createElement(n,{key:c,user:e,selectedSectionId:t,onSelectUser:a})}))}},579:function(e,a,t){"use strict";t.r(a);var c=t(11),s=t(18),n=t(19),r=t(21),l=t(20),i=t(22),m=t(70),o=t(1),d=t.n(o),h=t(36),u=t.n(h),v=t(102),E=t.n(v),N=t(30),b=t(555),f=t.n(b),p=t(153),g=t.n(p),x=t(154),w=t.n(x),S=t(138),C=t.n(S),U=t(103),y=t.n(U),j=t(34),O=t.n(j),k=t(120),I=t.n(k),z=t(105),L=t.n(z),T=t(553),D=t(139),A=t(552),M=t(72),J=t(554),K=t(124),V=t(14),F=t(56),P=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(r.a)(this,Object(l.a)(a).call(this))).filterContact=function(e){return""===e?M.a.filter(function(e){return!e.recent}):M.a.filter(function(a){return!a.recent&&a.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.filterUsers=function(e){return""===e?M.a.filter(function(e){return e.recent}):M.a.filter(function(a){return a.recent&&a.name.toLowerCase().indexOf(e.toLowerCase())>-1})},e.Communication=function(){var a=e.state,t=a.message,c=a.selectedUser,s=a.conversation.conversationData;return d.a.createElement("div",{className:"chat-main"},d.a.createElement("div",{className:"chat-main-header"},d.a.createElement(O.a,{className:"d-block d-xl-none chat-btn","aria-label":"Menu",onClick:e.onToggleDrawer.bind(Object(m.a)(Object(m.a)(e)))},d.a.createElement("i",{className:"zmdi zmdi-comment-text"})),d.a.createElement("div",{className:"chat-main-header-info"},d.a.createElement("div",{className:"chat-avatar mr-2"},d.a.createElement("div",{className:"chat-avatar-mode"},d.a.createElement("img",{src:c.thumb,className:"rounded-circle size-60",alt:""}),d.a.createElement("span",{className:"chat-mode ".concat(c.status)}))),d.a.createElement("div",{className:"chat-contact-name"},c.name))),d.a.createElement(F.a,{className:"chat-list-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 300px)":"calc(100vh - 255px)"}},d.a.createElement(A.a,{conversationData:s,selectedUser:c})),d.a.createElement("div",{className:"chat-main-footer"},d.a.createElement("div",{className:"d-flex flex-row align-items-center",style:{maxHeight:51}},d.a.createElement("div",{className:"col"},d.a.createElement("div",{className:"form-group"},d.a.createElement("textarea",{id:"required",className:"border-0 form-control chat-textarea",onKeyUp:e._handleKeyPress.bind(Object(m.a)(Object(m.a)(e))),onChange:e.updateMessageValue.bind(Object(m.a)(Object(m.a)(e))),value:t,placeholder:"Type and hit enter to send message"}))),d.a.createElement("div",{className:"chat-sent"},d.a.createElement(O.a,{onClick:e.submitComment.bind(Object(m.a)(Object(m.a)(e))),"aria-label":"Send message"},d.a.createElement("i",{className:"zmdi  zmdi-mail-send"}))))))},e.AppUsersInfo=function(){return d.a.createElement("div",{className:"chat-sidenav-main"},d.a.createElement("div",{className:"bg-grey lighten-5 chat-sidenav-header"},d.a.createElement("div",{className:"chat-user-hd mb-0"},d.a.createElement(O.a,{className:"back-to-chats-button","aria-label":"back button",onClick:function(){e.setState({userState:1})}},d.a.createElement("i",{className:"zmdi zmdi-arrow-back"}))),d.a.createElement("div",{className:"chat-user chat-user-center"},d.a.createElement("div",{className:"chat-avatar mx-auto"},d.a.createElement("img",{src:t(73),className:"avatar avatar-shadow rounded-circle size-60 huge",alt:"John Doe"})),d.a.createElement("div",{className:"user-name h4 my-2"},"Robert Johnson"))),d.a.createElement("div",{className:"chat-sidenav-content"},d.a.createElement(F.a,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 162px)"}},d.a.createElement("form",{className:"p-4"},d.a.createElement("div",{className:"form-group mt-4"},d.a.createElement("label",null,"Mood"),d.a.createElement(I.a,{fullWidth:!0,id:"exampleTextarea",multiline:!0,rows:3,onKeyUp:e._handleKeyPress.bind(Object(m.a)(Object(m.a)(e))),onChange:e.updateMessageValue.bind(Object(m.a)(Object(m.a)(e))),defaultValue:"it's a status....not your diary...",placeholder:"Status",margin:"none"}))))))},e.ChatUsers=function(){return d.a.createElement("div",{className:"chat-sidenav-main"},d.a.createElement("div",{className:"chat-sidenav-header"},d.a.createElement("div",{className:"chat-user-hd"},d.a.createElement("div",{className:"chat-avatar mr-3",onClick:function(){e.setState({userState:2})}},d.a.createElement("div",{className:"chat-avatar-mode"},d.a.createElement("img",{id:"user-avatar-button",src:t(73),className:"rounded-circle size-50",alt:""}),d.a.createElement("span",{className:"chat-mode online"}))),d.a.createElement("div",{className:"module-user-info d-flex flex-column justify-content-center"},d.a.createElement("div",{className:"module-title"},d.a.createElement("h5",{className:"mb-0"},"Robert Johnson")),d.a.createElement("div",{className:"module-user-detail"},d.a.createElement("span",{className:"jr-link text-grey"},"robert@example.com")))),d.a.createElement("div",{className:"search-wrapper"},d.a.createElement(K.a,{placeholder:"Search or start new chat",onChange:e.updateSearchChatUser.bind(Object(m.a)(Object(m.a)(e))),value:e.state.searchChatUser}))),d.a.createElement("div",{className:"chat-sidenav-content"},d.a.createElement(g.a,{position:"static",className:"no-shadow chat-tabs-header"},d.a.createElement(w.a,{className:"chat-tabs",value:e.state.selectedTabIndex,onChange:e.handleChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},d.a.createElement(C.a,{label:d.a.createElement(V.a,{id:"chat.chatUser"})}),d.a.createElement(C.a,{label:d.a.createElement(V.a,{id:"chat.contacts"})}))),d.a.createElement(f.a,{index:e.state.selectedTabIndex,onChangeIndex:e.handleChangeIndex},d.a.createElement(F.a,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.chatUsers.length?d.a.createElement("div",{className:"p-5"},e.state.userNotFound):d.a.createElement(T.a,{chatUsers:e.state.chatUsers,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(Object(m.a)(Object(m.a)(e)))})),d.a.createElement(F.a,{className:"chat-sidenav-scroll scrollbar",style:{height:e.props.width>=1200?"calc(100vh - 328px)":"calc(100vh - 202px)"}},0===e.state.contactList.length?d.a.createElement("div",{className:"p-5"},e.state.userNotFound):d.a.createElement(J.a,{contactList:e.state.contactList,selectedSectionId:e.state.selectedSectionId,onSelectUser:e.onSelectUser.bind(Object(m.a)(Object(m.a)(e)))})))))},e._handleKeyPress=function(a){"Enter"===a.key&&e.submitComment()},e.handleChange=function(a,t){e.setState({selectedTabIndex:t})},e.handleChangeIndex=function(a){e.setState({selectedTabIndex:a})},e.onSelectUser=function(a){e.setState({loader:!0,selectedSectionId:a.id,drawerState:e.props.drawerState,selectedUser:a,conversation:e.state.conversationList.find(function(e){return e.id===a.id})}),setTimeout(function(){e.setState({loader:!1})},1500)},e.showCommunication=function(){return d.a.createElement("div",{className:"chat-box"},d.a.createElement("div",{className:"chat-box-main"},null===e.state.selectedUser?d.a.createElement("div",{className:"loader-view",style:{height:"calc(100vh - 120px)"}},d.a.createElement("i",{className:"zmdi zmdi-comment s-128 text-muted"}),d.a.createElement("h1",{className:"text-muted"},d.a.createElement(V.a,{id:"chat.selectUserChat"})),d.a.createElement(u.a,{className:"d-block d-xl-none",color:"primary",onClick:e.onToggleDrawer.bind(Object(m.a)(Object(m.a)(e)))},d.a.createElement(V.a,{id:"chat.selectContactChat"}))):e.Communication()))},e.state={loader:!1,userNotFound:"No user found",drawerState:!1,selectedSectionId:"",selectedTabIndex:0,userState:1,searchChatUser:"",contactList:M.a.filter(function(e){return!e.recent}),selectedUser:null,message:"",chatUsers:M.a.filter(function(e){return e.recent}),conversationList:D.a,conversation:null},e}return Object(i.a)(a,e),Object(n.a)(a,[{key:"submitComment",value:function(){var e=this;if(""!==this.state.message){var a=this.state.conversation.conversationData.concat({type:"sent",message:this.state.message,sentAt:L()().format("hh:mm:ss A")});this.setState({conversation:Object(c.a)({},this.state.conversation,{conversationData:a}),message:"",conversationList:this.state.conversationList.map(function(t){return t.id===e.state.conversation.id?Object(c.a)({},e.state.conversation,{conversationData:a}):t})})}}},{key:"updateMessageValue",value:function(e){this.setState({message:e.target.value})}},{key:"updateSearchChatUser",value:function(e){this.setState({searchChatUser:e.target.value,contactList:this.filterContact(e.target.value),chatUsers:this.filterUsers(e.target.value)})}},{key:"onToggleDrawer",value:function(){this.setState({drawerState:!this.state.drawerState})}},{key:"render",value:function(){var e=this.state,a=e.loader,t=e.userState,c=e.drawerState;return d.a.createElement("div",{className:"app-wrapper app-wrapper-module"},d.a.createElement("div",{className:"app-module chat-module animated slideInUpTiny animation-duration-3"},d.a.createElement("div",{className:"chat-module-box"},d.a.createElement("div",{className:"d-block d-xl-none"},d.a.createElement(E.a,{open:c,onClose:this.onToggleDrawer.bind(this)},1===t?this.ChatUsers():this.AppUsersInfo())),d.a.createElement("div",{className:"chat-sidenav d-none d-xl-flex"},1===t?this.ChatUsers():this.AppUsersInfo()),a?d.a.createElement("div",{className:"loader-view w-100",style:{height:"calc(100vh - 120px)"}},d.a.createElement(y.a,null)):this.showCommunication())))}}]),a}(o.Component);a.default=Object(N.c)(function(e){return{width:e.settings.width}})(P)}}]);
//# sourceMappingURL=3.04b07c97.chunk.js.map