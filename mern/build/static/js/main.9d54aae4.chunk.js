(this.webpackJsonpfifthapp=this.webpackJsonpfifthapp||[]).push([[0],{39:function(e,t,s){},46:function(e,t,s){},65:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(32),i=s.n(c),r=s(7),o=s(6),l=s(2),j=s(3),h=s(5),d=s(4),m=(s(39),s(0)),b=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).renderCity=function(e){if(e)return e.map((function(e){return Object(m.jsx)("option",{value:e.city,children:e.city_name})}))},n.renderHotel=function(e){if(e)return e.map((function(e){return Object(m.jsxs)("option",{value:e._id,children:[e.name," || ",e.locality]})}))},n.handleCity=function(e){console.log(e.target.value),fetch("".concat("https://developerfunnel.herokuapp.com/hotels?city=").concat(e.target.value),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({hotels:e})}))},n.handleHotel=function(e){n.props.history.push("/details/".concat(e.target.value))},n.state={location:"",hotels:""},n}return Object(j.a)(s,[{key:"render",value:function(){return console.log(this.props),Object(m.jsxs)("div",{className:"imageContainer",children:[Object(m.jsx)("div",{id:"logo",children:"M!"}),Object(m.jsx)("div",{className:"heading",children:"Trip With Us"}),Object(m.jsxs)("div",{className:"locationSelector",children:[Object(m.jsxs)("select",{className:"locationDropDown",onChange:this.handleCity,children:[Object(m.jsx)("option",{children:"-----SELECT CITY----"}),this.renderCity(this.state.location)]}),Object(m.jsxs)("select",{className:"reataurantsinput",onChange:this.handleHotel,children:[Object(m.jsx)("option",{children:"-----SELECT HOTEL----"}),this.renderHotel(this.state.hotels)]})]})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),s}(n.Component),u=Object(o.e)(b),p=(s(46),function(e){return Object(m.jsxs)("div",{className:"quickSearchContainer",children:[Object(m.jsx)("p",{className:"quickSearchHeading",children:"QuickSearch"}),Object(m.jsx)("p",{className:"quickSearchSubHeading",children:"Discover Trip by Type"}),Object(m.jsx)("br",{}),function(e){var t=e.tripdata;if(t)return t.map((function(e){return Object(m.jsx)(r.b,{to:"/listing/".concat(e.trip),children:Object(m.jsxs)("div",{className:"tileContainer",children:[Object(m.jsx)("div",{className:"tileComponent1",children:Object(m.jsx)("img",{src:e.image})}),Object(m.jsxs)("div",{className:"tileComponent2",children:[Object(m.jsx)("div",{className:"componentHeading",children:e.name}),Object(m.jsxs)("div",{className:"componentSubHeading",children:["Start Your ",e.name," Trip With Us"]})]})]})})}))}(e)]})}),O=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={triptype:""},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(m.jsx)(p,{tripdata:this.state.triptype})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://developerfunnel.herokuapp.com/booking",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({triptype:t})}))}}]),s}(n.Component),x=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{}),Object(m.jsx)(O,{})]})},v=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).conditionalHeader=function(){if(null!==sessionStorage.getItem("username"))return Object(m.jsx)("li",{children:Object(m.jsxs)("a",{children:["Hi ",sessionStorage.getItem("username")]})});sessionStorage.removeItem("username")},e.state={username:""},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(m.jsx)("nav",{class:"navbar navbar-inverse",children:Object(m.jsxs)("div",{class:"container-fluid",children:[Object(m.jsx)("div",{class:"navbar-header"}),Object(m.jsx)("ul",{class:"nav navbar-nav",children:Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/",children:"Home"})})}),Object(m.jsxs)("ul",{class:"nav navbar-nav navbar-right",children:[this.conditionalHeader(),Object(m.jsxs)("li",{class:"dropdown",children:[Object(m.jsxs)("a",{href:"#",class:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:["Menu ",Object(m.jsx)("span",{class:"caret"})]}),Object(m.jsxs)("ul",{class:"dropdown-menu",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(r.b,{to:"/register",children:[Object(m.jsx)("span",{class:"glyphicon glyphicon-user"})," Sign Up"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(r.b,{to:"/login",children:[Object(m.jsx)("span",{class:"glyphicon glyphicon-log-in"})," Login"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(r.b,{to:"/profile",children:[Object(m.jsx)("span",{class:"glyphicon glyphicon-user"})," Profile"]})})]})]})]})]})})}}]),s}(n.Component),g=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),Object(m.jsx)("center",{children:Object(m.jsx)("h2",{children:"\xa9tejamacharla1997 "})})]})},f=s(12),y=s.n(f),N=(s(65),function(e){console.log(e);return Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"main-heading",children:Object(m.jsx)("div",{className:"col-md-12",children:function(e){var t=e.listdata;return t?t.length>1?t.map((function(e){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm-5",children:Object(m.jsx)("img",{className:"Image",src:e.thumb})}),Object(m.jsx)("div",{className:"col-sm-7",children:Object(m.jsxs)("div",{className:"hotel_name",children:[Object(m.jsx)(r.b,{to:"/details/".concat(e._id),children:e.name}),Object(m.jsx)("div",{className:"city_name",children:e.city_name}),Object(m.jsx)("div",{className:"city_name",children:e.locality}),Object(m.jsx)("div",{className:"city_name",children:e.address})]})})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-3",children:[Object(m.jsx)("div",{className:"cuisine",children:"Room Type"}),Object(m.jsx)("div",{className:"cuisine",children:"Cost For Night"})]}),Object(m.jsxs)("div",{className:"col-sm-3",children:[Object(m.jsx)("div",{className:"cuisine_data",children:e.type[0].name}),Object(m.jsxs)("div",{className:"cuisine_data",children:["Rs. ",e.cost]})]})]})]})})):Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("h2",{children:"No Data Found"})}):Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("img",{src:"/images/loader.gif"})})}(e)})})})}),k="https://developerfunnel.herokuapp.com/hotellist",S=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).filterRoom=function(t){var s,n=t.target.value,a=sessionStorage.getItem("tripid");s=""==n?"".concat(k,"/").concat(a):"".concat(k,"/").concat(a,"?roomtype=").concat(n),y.a.get(s).then((function(t){e.props.roomPerType(t.data)}))},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)("center",{children:"Room Type"}),Object(m.jsxs)("div",{onChange:this.filterRoom,children:[Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:""}),"All"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"1"}),"Deluxe Room"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"2"}),"Premium Rooms"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"3"}),"Travel"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"4"}),"Semi Deluxe Room"]})]})]})}}]),s}(n.Component),C="https://developerfunnel.herokuapp.com/hotellist",w=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).filterCost=function(t){var s,n=t.target.value.split("-"),a=n[0],c=n[1],i=sessionStorage.getItem("tripid");s=""==n?"".concat(C,"/").concat(i):"".concat(C,"/").concat(i,"?hcost=").concat(c,"&lcost=").concat(a),y.a.get(s).then((function(t){e.props.costPerType(t.data)}))},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)("center",{children:"Cost Type"}),Object(m.jsxs)("div",{onChange:this.filterCost,children:[Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:""}),"All"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"1000-3000"}),"1000-3000"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"3001-6000"}),"3001-6000"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"6001-9000"}),"6001-9000"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"room",value:"9001-12000"}),"9001-12000"]})]})]})}}]),s}(n.Component),I=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).setDataPerFilter=function(t){e.setState({list:t})},e.state={list:""},e}return Object(j.a)(s,[{key:"render",value:function(){var e=this;return null==sessionStorage.getItem("ltk")&&this.props.history.push("/login"),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-2",children:[Object(m.jsx)(S,{roomPerType:function(t){e.setDataPerFilter(t)}}),Object(m.jsx)(w,{costPerType:function(t){e.setDataPerFilter(t)}})]}),Object(m.jsx)("div",{className:"col-md-10",children:Object(m.jsx)(N,{listdata:this.state.list})})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;sessionStorage.setItem("tripid",t),y.a.get("".concat("https://developerfunnel.herokuapp.com/hotellist","/").concat(t)).then((function(t){e.setState({list:t.data})}))}}]),s}(n.Component),D=s(22),E=s.n(D),T=s(34),P=s(16),H=(s(67),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={details:""},e}return Object(j.a)(s,[{key:"render",value:function(){null==sessionStorage.getItem("ltk")&&this.props.history.push("/login");var e=this.state.details;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"panel panel-primary",children:[Object(m.jsx)("div",{className:"panel-heading",children:Object(m.jsx)("h3",{children:this.state.details.name})}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)("img",{className:"img-responsive",src:e.thumb,style:{height:400,width:1500}})}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("h3",{children:e.locality}),Object(m.jsx)("h3",{children:e.address}),Object(m.jsx)("h4",{children:e.cost})]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(P.d,{children:[Object(m.jsxs)(P.b,{children:[Object(m.jsx)(P.a,{children:"Details"}),Object(m.jsx)(P.a,{children:"Contact"})]}),Object(m.jsxs)(P.c,{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("h5",{children:[e.name," is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a "]})]}),Object(m.jsxs)(P.c,{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsx)("h4",{children:"Phone no: 123456789"}),Object(m.jsx)("p",{children:e.address})]})]}),Object(m.jsx)(r.b,{to:"/",className:"btn btn-danger",children:"Back"})," \xa0",Object(m.jsx)(r.b,{to:"/booking/".concat(e.name),className:"btn btn-success",children:"Proceed"})]})]})})}},{key:"componentDidMount",value:function(){var e=Object(T.a)(E.a.mark((function e(){var t,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,y.a.get("".concat(" https://developerfunnel.herokuapp.com/hotelsdetails","/").concat(t));case 3:s=e.sent,sessionStorage.setItem("cost",s.data[0].cost),this.setState({details:s.data[0]});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),s}(n.Component)),L=s(17),_=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(L.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),sessionStorage.setItem("bid",n.state.id),sessionStorage.setItem("name",n.state.name),sessionStorage.setItem("hotelname",n.state.hotel_name),fetch(" http://localhost:1700/orders",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.history.push("/userBookingDetails"))},n.state={id:Math.floor(1e4*Math.random()),hotel_name:n.props.match.params.hotel_name,name:"",email:"",phone:"",cost:sessionStorage.getItem("cost")},n}return Object(j.a)(s,[{key:"render",value:function(){return null==sessionStorage.getItem("ltk")&&this.props.history.push("/login"),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"panel panel-primary",children:[Object(m.jsx)("div",{className:"panel-heading",children:"Booking Form"}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:" Order ID"}),Object(m.jsx)("input",{name:"id",className:"form-control",value:this.state.id,readOnly:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Hotel Name"}),Object(m.jsx)("input",{name:"hotel_name",className:"form-control",value:this.state.hotel_name,readOnly:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{name:"name",className:"form-control",value:this.state.name,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{name:"email",className:"form-control",value:this.state.email,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Phone Number"}),Object(m.jsx)("input",{name:"phone",className:"form-control",value:this.state.phone,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Cost"}),Object(m.jsx)("input",{name:"cost",className:"form-control",value:this.state.cost,readOnly:!0})]}),Object(m.jsx)("btn",{className:"btn btn-success",onClick:this.handleSubmit,children:"Submit"})]})]})})}}]),s}(n.Component),M=function(e){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("center",{children:Object(m.jsx)("h3",{children:"Booking List"})}),Object(m.jsxs)("table",{className:"table table-responsive",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"OrderId"}),Object(m.jsx)("th",{children:"Hotel"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Phone"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Cost"})]})}),Object(m.jsx)("tbody",{children:function(e){var t=e.viewdata;if(t)return t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.hotel_name}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsxs)("td",{children:["Rs.",e.cost]})]})}))}(e)})]})]})},R=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={view:""},e}return Object(j.a)(s,[{key:"render",value:function(){return null!==sessionStorage.getItem("ltk")&&"Admin"!==sessionStorage.getItem("rtk")&&this.props.history.push("/profile"),Object(m.jsx)(M,{viewdata:this.state.view})}},{key:"componentDidMount",value:function(){var e=this;y.a.get("http://localhost:1700/orders").then((function(t){e.setState({view:t.data})}))}}]),s}(n.Component),A="http://localhost:7800/api/auth/register",B={id:Math.floor(1e4*Math.random()),name:"",phone:"",email:"",password:"",cpassword:"",role:"",nameError:"",emailError:"",cpwdError:""},F=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state=B,e.handleChange=function(t){e.setState(Object(L.a)({},t.target.name,t.target.value))},e.validate=function(){var t="",s="",n=e.state.password,a=e.state.cpassword,c="";return e.state.name||(t="Name can not be blank"),e.state.email.includes("@")||(s="Invalid Email"),n!==a&&(c="Confirm password does not match"),!(s||t||c)||(e.setState({emailError:s,nameError:t,cpwdError:c}),!1)},e.handleSubmit=function(t){if(t.preventDefault(),e.validate()){console.log(e.state),e.setState(B);var s=e.state.name;fetch(A,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state)}).then(e.props.history.push("/login")),sessionStorage.setItem("username",s)}},e}return Object(j.a)(s,[{key:"render",value:function(){return null!==sessionStorage.getItem("ltk")&&this.props.history.push("/profile"),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"panel panel-info",children:[Object(m.jsx)("div",{className:"panel-heading",children:"Register"}),Object(m.jsx)("div",{className:"panel-body",children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"User ID"}),Object(m.jsx)("input",{name:"name",value:this.state.id,className:"form-control",readOnly:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{name:"name",value:this.state.name,className:"form-control",onChange:this.handleChange}),Object(m.jsx)("div",{style:{color:"red"},children:this.state.nameError})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Phone"}),Object(m.jsx)("input",{name:"phone",value:this.state.phone,className:"form-control",onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{name:"email",value:this.state.email,className:"form-control",onChange:this.handleChange}),Object(m.jsx)("div",{style:{color:"red"},children:this.state.emailError})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{name:"password",type:"password",value:this.state.password,className:"form-control",onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Confirm Password"}),Object(m.jsx)("input",{name:"cpassword",value:this.state.cpassword,type:"password",className:"form-control",onChange:this.handleChange}),Object(m.jsx)("div",{style:{color:"red"},children:this.state.cpwdError})]}),Object(m.jsx)("button",{className:"btn btn-success",type:"submit",children:"Register"})]})})]})})}}]),s}(a.a.Component),U=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(L.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("http://localhost:7800/api/auth/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n.state)}).then((function(e){return e.json()})).then((function(e){0==e.auth?n.setState({message:e.token}):(sessionStorage.setItem("ltk",e.token),n.props.history.push("/profile"))}))},n.state={email:"",password:"",message:""},n}return Object(j.a)(s,[{key:"render",value:function(){return null!==sessionStorage.getItem("ltk")&&this.props.history.push("/profile"),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"panel panel-success",children:[Object(m.jsx)("h2",{style:{color:"red"},children:this.state.message}),Object(m.jsx)("div",{className:"panel-heading",children:"Login"}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{name:"email",value:this.state.email,className:"form-control",onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{name:"password",type:"password",value:this.state.password,className:"form-control",onChange:this.handleChange})]}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Login"}),Object(m.jsxs)("p",{children:["If you don't have any account Please ",Object(m.jsx)("a",{class:"btn btn-primary",href:"/register",role:"button",children:"Sign Up"})]})]})]})})}}]),s}(n.Component),Y=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).handleLogout=function(){sessionStorage.removeItem("ltk"),sessionStorage.removeItem("username"),e.props.history.push("/login")},e.conditionalRender=function(){if(e.state.user.role&&"Admin"===e.state.user.role)return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(r.b,{className:"btn btn-success",to:"/userinfo",children:"All Users"}),Object(m.jsx)(r.b,{className:"btn btn-success",to:"/viewBooking",children:"BookingList"})]})},e.state={user:""},e}return Object(j.a)(s,[{key:"render",value:function(){return null==sessionStorage.getItem("ltk")&&this.props.history.push("/login"),sessionStorage.setItem("rtk",this.state.user.role),sessionStorage.setItem("username",this.state.user.name),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"panel panel-success",children:[Object(m.jsx)("div",{className:"panel-heading",children:Object(m.jsx)("h3",{children:" User Profile"})}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsxs)("h3",{children:["Hi ",this.state.user.name]}),Object(m.jsxs)("h3",{children:["Your Mail Id is ",this.state.user.email]}),Object(m.jsxs)("h4",{children:[" Your Role is ",this.state.user.role]}),this.conditionalRender(),Object(m.jsx)("btn",{className:"btn btn-danger",onClick:this.handleLogout,children:"LogOut"})]})]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:7800/api/auth/userinfo",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({user:t})}))}}]),s}(n.Component),J=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return null==sessionStorage.getItem("ltk")&&this.props.history.push("/login"),Object(m.jsxs)("div",{className:"panel panel-success",children:[Object(m.jsx)("div",{className:"panel-heading",children:"Booking Details"}),Object(m.jsx)("div",{className:"panel-body",children:Object(m.jsxs)("div",{class:"jumbotron",children:[Object(m.jsx)("div",{class:"alert alert-success",role:"alert",children:Object(m.jsx)("p",{className:"alert-link",children:" Well done! You Successfully Booked Your Hotel."})}),Object(m.jsxs)("div",{className:"alert alert-info",role:"alert",children:[Object(m.jsxs)("p",{className:"alert-link",children:[Object(m.jsx)("u",{children:"Your Booking Details:"}),Object(m.jsx)("br",{}),"ID: ",sessionStorage.getItem("bid"),Object(m.jsx)("br",{}),"Name: ",sessionStorage.getItem("name"),Object(m.jsx)("br",{}),"Hotel Name: ",sessionStorage.getItem("hotelname"),Object(m.jsx)("br",{}),"Cost: ",sessionStorage.getItem("cost")]}),Object(m.jsx)(r.b,{className:"btn btn-danger",to:"/",children:"OK"})]})]})})]})}}]),s}(n.Component),G=function(e){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("center",{children:Object(m.jsx)("h2",{children:"List Of Users"})}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Sno"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Phone"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Role"})]})}),Object(m.jsx)("tbody",{children:function(e){var t=e.userdata;if(t)return t.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.role})]})}))}(e)})]})]})},q=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={users:""},e}return Object(j.a)(s,[{key:"render",value:function(){return null==sessionStorage.getItem("ltk")&&this.props.history.push("/login"),null!==sessionStorage.getItem("ltk")&&"Admin"!==sessionStorage.getItem("rtk")&&this.props.history.push("/profile"),Object(m.jsx)(G,{userdata:this.state.users})}},{key:"componentDidMount",value:function(){var e=this;y.a.get("http://localhost:7800/api/auth/users").then((function(t){return e.setState({users:t.data})}))}}]),s}(n.Component),W=function(){return Object(m.jsxs)(r.a,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(m.jsx)(o.a,{path:"/listing/:id",component:I}),Object(m.jsx)(o.a,{path:"/details/:id",component:H}),Object(m.jsx)(o.a,{path:"/booking/:hotel_name",component:_}),Object(m.jsx)(o.a,{path:"/viewBooking",component:R}),Object(m.jsx)(o.a,{path:"/register",component:F}),Object(m.jsx)(o.a,{path:"/login",component:U}),Object(m.jsx)(o.a,{path:"/profile",component:Y}),Object(m.jsx)(o.a,{path:"/userBookingDetails",component:J}),Object(m.jsx)(o.a,{path:"/userinfo",component:q}),Object(m.jsx)(g,{})]})};i.a.render(Object(m.jsx)(W,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9d54aae4.chunk.js.map