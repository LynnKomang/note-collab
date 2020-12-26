(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-link text-center",attrs:{to:"/"}},[t._v("Create a new Workspace!")])],1),a("router-view")],1)},o=[],i=(a("034f"),a("2877")),r={},c=Object(i["a"])(r,n,o,!1,null,null,null),l=c.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("h1",{staticClass:"display-2 mb-5"},[t._v("Task Manager")]),t.doesExist?null===t.tasks||null===t.categories?a("h1",{staticClass:"text-center"},[t._v(" Loading tasks... ")]):a("div",[a("QueryOptions",{on:{"on-change":t.changeTasks}}),0===t.tasks.length?a("h2",{staticClass:"text-center"},[t._v(" It seems like there aren't any tasks here... ")]):t._e(),t._l(t.organizedTasks,(function(e){return a("Task",{key:e.id,staticClass:"mx-auto mb-4",attrs:{task:e},on:{"on-task-submit":function(a){return t.updateTask(e)},"on-task-delete":function(a){return t.deleteTask(e)}}})})),a("MenuButtons"),a("CreateTask",{attrs:{categories:t.categories},on:{"on-task-created":t.createTask}}),a("CreateCategory",{on:{"on-category-created":t.createCategory}})],2):a("h1",[t._v(" This link seems to lead to a non-existing workspace... ")])])},p=[],m=(a("99af"),a("4de4"),a("caad"),a("b0c0"),a("2532"),a("96cf"),a("1da1")),f=a("cc7d"),v=a.n(f),g=a("c6e1"),h=a.n(g),b=a("bc3a"),C=a.n(b),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card shadow rounded-3"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between align-items-baseline mb-2"},[a("div",{staticClass:"d-flex align-items-center"},[a("h3",{staticClass:"card-title me-2"},[t._v(t._s(t.task.title))]),a("span",{staticClass:"badge",style:t.getCategoryStyle(t.task.category)},[t._v(t._s(t.task.category.name))])]),a("p",{staticClass:"card-text text-muted"},[t._v(t._s(t.formattedDate(t.task.date)))])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.content,expression:"task.content"}],staticClass:"w-100 form-control",staticStyle:{"background-color":"#e9e9e9"},attrs:{rows:"4"},domProps:{value:t.task.content},on:{input:[function(e){e.target.composing||t.$set(t.task,"content",e.target.value)},t.emitTask]}}),t.task.deadline?a("p",{staticClass:"card-text text-danger mt-1"},[t._v(" Deadline: "+t._s(t.formattedDate(t.task.deadline))+" ")]):t._e(),a("div",{staticClass:"text-end"},[a("button",{staticClass:"btn btn-danger",class:t.task.deadline?"":"mt-4",on:{click:t.deleteTask}},[t._v(" Delete ")])])])])},y=[],_=(a("d81d"),a("fb6a"),a("3835")),w=function(t){var e=[parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5),16)],a=e.map((function(t){return t/=255,t<=.03928?t/=12.92:t=Math.pow((t+.055)/1.055,2.4),t})),s=Object(_["a"])(a,3),n=s[0],o=s[1],i=s[2],r=.2126*n+.7152*o+.0722*i;return r>.179?"#000000":"#ffffff"},x=function(t){return null===t?"":{"background-color":t.color,color:w(t.color)}},T=a("b166"),O={props:{task:{type:Object,required:!0}},methods:{formattedDate:function(t){return Object(T["a"])(new Date(t),"dd.MM.yyyy")},emitTask:function(){this.$emit("on-task-submit")},deleteTask:function(){this.$emit("on-task-delete")},getCategoryStyle:x}},$=O,S=Object(i["a"])($,k,y,!1,null,null,null),j=S.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal",attrs:{tabindex:"-1",id:"exampleModal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Task title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",class:t.isTitleValid?"is-valid":"is-invalid",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v(" Input must be between 3 to 50 characters and not include special symbols. ")])]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Content")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{rows:"4"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Deadline")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.deadline,expression:"deadline"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.deadline},on:{input:function(e){e.target.composing||(t.deadline=e.target.value)}}})]),a("div",[a("label",{staticClass:"form-label"},[t._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategory,expression:"selectedCategory"}],staticClass:"form-select",style:t.getCategoryStyle(t.selectedCategory),on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCategory=e.target.multiple?a:a[0]}}},t._l(t.categories,(function(e){return a("option",{key:e.id,style:t.getCategoryStyle(e),domProps:{value:e}},[t._v(" "+t._s(e.name)+" ")])})),0)])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")]),a("button",{staticClass:"btn btn-success",attrs:{type:"button","data-bs-dismiss":"modal",disabled:!t.isInputValid},on:{click:t.createTask}},[t._v(" Create ")])])])])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Create new task")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],M=(a("ac1f"),{props:{categories:{type:Array,required:!0}},data:function(){return{title:"",content:"",deadline:"",selectedCategory:null}},computed:{isTitleValid:function(){var t=/^[A-Za-z0-9 \\.?!,\\:]{3,50}$/;return t.exec(this.title)},isInputValid:function(){return this.isTitleValid&&null!==this.selectedCategory}},methods:{createTask:function(){var t={title:this.title,content:this.content,date:Object(T["a"])(new Date,"yyyy-MM-dd"),deadline:""===this.deadline?"":Object(T["a"])(new Date(this.deadline),"yyyy-MM-dd"),category:this.selectedCategory};this.$emit("on-task-created",t)},getCategoryStyle:x}}),P=M,D=Object(i["a"])(P,N,E,!1,null,null,null),I=D.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal",attrs:{tabindex:"-1",id:"exampleModal2"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Category name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:t.isInputValid?"is-valid":"is-invalid",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v(" Input must be between 3 to 20 characters and not include special symbols. ")])]),a("div",{staticClass:"d-flex align-baseline justify-content-between"},[a("label",{staticClass:"form-label"},[t._v("Category color:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color"},domProps:{value:t.color},on:{input:function(e){e.target.composing||(t.color=e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")]),a("button",{staticClass:"btn btn-success",attrs:{type:"button","data-bs-dismiss":"modal",disabled:!t.isInputValid},on:{click:t.createCategory}},[t._v(" Create ")])])])])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Create new category")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],A={data:function(){return{name:"",color:"#0275d8"}},computed:{isInputValid:function(){var t=/^[A-Za-z0-9 \\.?!,\\:]{3,20}$/;return t.exec(this.name)}},methods:{createCategory:function(){var t={name:this.name,color:this.color};this.$emit("on-category-created",t)}}},L=A,W=Object(i["a"])(L,J,V,!1,null,null,null),z=W.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed-bottom mb-4 ms-4 d-flex flex-column col-5 col-md-3 col-lg-1"},[a("button",{staticClass:"btn btn-primary rounded-pill btn-lg mb-2",attrs:{"data-bs-toggle":"modal","data-bs-target":"#exampleModal"}},[t._v(" New Task ")]),a("button",{staticClass:"btn btn-primary rounded-pill btn-lg",attrs:{"data-bs-toggle":"modal","data-bs-target":"#exampleModal2"}},[t._v(" New Category ")])])}],q={},G=Object(i["a"])(q,B,R,!1,null,null,null),Q=G.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-10"},[a("div",{staticClass:"input-group shadow-sm"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchTitle,expression:"searchTitle",modifiers:{trim:!0}}],staticClass:"form-control rounded-3",attrs:{type:"text",placeholder:"Search titles","aria-label":"Search titles","aria-describedby":"basic-addon1"},domProps:{value:t.searchTitle},on:{input:function(e){e.target.composing||(t.searchTitle=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)])]),a("div",{staticClass:"col"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.sortingOption,expression:"sortingOption"}],staticClass:"shadow-sm form-select",attrs:{"aria-label":"Default select example"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sortingOption=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"date",selected:""}},[t._v("Date")]),a("option",{attrs:{value:"title"}},[t._v("Title")]),a("option",{attrs:{value:"category"}},[t._v("Category")])])])])},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[a("i",{staticClass:"fas fa-search"})])}],H={data:function(){return{searchTitle:"",sortingOption:"date"}},watch:{searchTitle:function(){this.emitChange()},sortingOption:function(){this.emitChange()}},methods:{emitChange:function(){this.$emit("on-change",{searchTitle:this.searchTitle,sortingOption:this.sortingOption})}}},F=H,K=Object(i["a"])(F,U,Z,!1,null,null,null),X=K.exports,Y={name:"Home",components:{Task:j,CreateTask:I,CreateCategory:z,MenuButtons:Q,QueryOptions:X},data:function(){return{tasks:null,categories:null,isConnected:!1,doesExist:!0,searchTitle:"",sortingOption:"date"}},computed:{isSocketConnected:function(){return this.stompClient&&this.stompClient.connected},organizedTasks:function(){var t=this;if(null===this.tasks)return null;var e=this.tasks;switch(this.sortingOption){case"date":e=e.sort((function(t,e){var a=t.id,s=e.id;return+a-+s}));break;case"title":e=e.sort((function(t,e){var a=t.title,s=e.title;return a.toLowerCase().localeCompare(s.toLowerCase())}));break;case"category":e=e.sort((function(t,e){var a=t.category,s=e.category;return a.name.toLowerCase().localeCompare(s.name.toLowerCase())}));break}return e.filter((function(e){return e.title.toLowerCase().includes(t.searchTitle.toLowerCase())}))}},methods:{changeTasks:function(t){this.searchTitle=t.searchTitle,this.sortingOption=t.sortingOption},getTasks:function(){console.log("Getting tasks from server..."),this.isSocketConnected&&this.stompClient.send("/app/workspaces/id/".concat(this.$route.params.id,"/tasks"))},getCategories:function(){console.log("Getting categories from server..."),this.isSocketConnected&&this.stompClient.send("/app/workspaces/id/".concat(this.$route.params.id,"/categories"))},createTask:function(t){console.log("Creating a task and sending it to the server..."),this.isSocketConnected&&this.stompClient.send("/app/workspaces/id/".concat(this.$route.params.id,"/tasks/add"),JSON.stringify(t))},createCategory:function(t){console.log("Creating a category and sending it to the server..."),this.isSocketConnected&&this.stompClient.send("/app/workspaces/id/".concat(this.$route.params.id,"/categories/add"),JSON.stringify(t))},updateTask:function(t){console.log("Updating Tasks to server..."),this.isSocketConnected&&this.stompClient.send("/app/workspaces/id/".concat(this.$route.params.id,"/tasks/update"),JSON.stringify(t))},deleteTask:function(t){console.log("Deleting a task from the server..."),this.isSocketConnected&&this.stompClient.send("/app/workspaces/id/".concat(this.$route.params.id,"/tasks/delete"),JSON.stringify(t))},deleteCategory:function(t){console.log("Deleting a category from the server..."),this.isSocketConnected&&this.stompClient.send("/app/workspaces/id/".concat(this.$route.params.id,"/categories/delete"),JSON.stringify(t))},checkIfExists:function(){return C.a.get("".concat("https://note-collab-backend.herokuapp.com","/exists/id/").concat(this.$route.params.id)).then((function(t){return t.data}))},connect:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.checkIfExists();case 2:if(e.sent){e.next=6;break}t.doesExist=!1,e.next=9;break;case 6:t.socket=new v.a("".concat("https://note-collab-backend.herokuapp.com","/gs-guide-websocket")),t.stompClient=h.a.over(t.socket),t.stompClient.connect({},(function(e){t.isConnected=!0,console.log(e),t.stompClient.subscribe("/output/workspaces/".concat(t.$route.params.id,"/tasks"),(function(e){console.log(e),t.tasks=JSON.parse(e.body)})),t.getTasks(),t.stompClient.subscribe("/output/workspaces/".concat(t.$route.params.id,"/categories"),(function(e){console.log(e),t.categories=JSON.parse(e.body)})),t.getCategories()}),(function(e){console.log(e),t.isConnected=!1}));case 9:case"end":return e.stop()}}),e)})))()},disconnect:function(){this.stompClient&&this.stompClient.disconnect(),this.isConnected=!1},tickleConnection:function(){this.isConnected?this.disconnect():this.connect()}},created:function(){this.connect()}},tt=Y,et=Object(i["a"])(tt,u,p,!1,null,null,null),at=et.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("h1",{staticClass:"text-center"},[t._v("Nothing to see here...")])])}],ot={name:"Blank",methods:{createWorkSpaceAndRedirect:function(){var t=this;C.a.post("".concat("https://note-collab-backend.herokuapp.com","/workspaces/add")).then((function(e){t.$router.push({name:"WorkSpace",params:{id:e.data}})}))}},created:function(){this.createWorkSpaceAndRedirect()}},it=ot,rt=Object(i["a"])(it,st,nt,!1,null,null,null),ct=rt.exports;s["a"].use(d["a"]);var lt=[{path:"/",name:"Blank",component:ct},{path:"/workspace/:id",name:"WorkSpace",component:at}],dt=new d["a"]({mode:"history",base:"/",routes:lt}),ut=dt;s["a"].config.productionTip=!1,new s["a"]({router:ut,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.0443e9cf.js.map