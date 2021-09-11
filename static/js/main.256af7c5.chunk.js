(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"PhonebookList_list__2YY4Z",listItem:"PhonebookList_listItem__32iUI",btn:"PhonebookList_btn__2WN9B"}},12:function(t,e,n){t.exports={filter:"Filter_filter__1gK8J",input:"Filter_input__2Sn7C"}},14:function(t,e,n){t.exports={container:"Container_container__9dEmi"}},15:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(t,e,n){t.exports={form:"PhonebookForm_form__24DUE",label:"PhonebookForm_label__344hD",input:"PhonebookForm_input__7fxlZ",btn:"PhonebookForm_btn__1vFg1"}},24:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(13),r=n.n(o),i=(n(24),n(18)),s=n(3),l=n(6),u=n(7),b=n(9),d=n(8),m=n(14),h=n.n(m),j=n(0);function f(t){var e=t.children;return Object(j.jsx)("div",{className:h.a.container,children:e})}var p=n(15),v=n(5),O=n(2),C=n.n(O),_=n(16),x=n.n(_),g=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(s.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:C.a.label,children:["Name",Object(j.jsx)("input",{className:C.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,placeholder:"Ivan Ivanov"})]}),Object(j.jsxs)("label",{className:C.a.label,children:["Number",Object(j.jsx)(x.a,{options:{delimiter:"-",blocks:[3,2,2]},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,className:C.a.input,placeholder:"111-11-11"})]}),Object(j.jsx)("button",{type:"submit",className:C.a.btn,children:"Add contact"})]})}}]),n}(a.Component),k=n(19),S=n(10),N=n.n(S);function y(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:N.a.listItem,children:[a+":"+c,Object(j.jsx)(k.a,{color:"red",size:"20px",className:N.a.btn,type:"button",name:"delete",onClick:function(){return n(e)},children:"delete"})]},e)}))})}var F=n(12),A=n.n(F);function I(t){var e=t.value,n=t.onChangeFilter;return Object(j.jsxs)("div",{className:A.a.filter,children:["Find contacts by name"," ",Object(j.jsx)("input",{className:A.a.input,type:"text",value:e,onChange:n,placeholder:"Enter name"})]})}var w=n(17),P=n.n(w),D=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:p,filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else{var n=Object(s.a)(Object(s.a)({},e),{},{id:P.a.generate()});t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(i.a)(e))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(f,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(g,{onSubmit:this.formSubmitHandler,onAddContact:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(I,{value:t,onChangeFilter:this.changeFilter}),Object(j.jsx)(y,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.256af7c5.chunk.js.map