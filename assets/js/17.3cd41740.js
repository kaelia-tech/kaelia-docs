(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{384:function(e,t,a){e.exports=a.p+"assets/img/domain-model.0547d09f.svg"},423:function(e,t,a){"use strict";a.r(t);var s=a(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"main-concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-concepts"}},[e._v("#")]),e._v(" Main concepts")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Although this page details the main data model used for SaaS applications the organisation part is optional and you can build legacy applications just by using services.")])]),e._v(" "),s("h2",{attrs:{id:"services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[e._v("#")]),e._v(" Services")]),e._v(" "),s("p",[e._v("According to the "),s("a",{attrs:{href:"https://docs.feathersjs.com/guides/about/philosophy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers philosophy"),s("OutboundLink")],1),e._v(" each business operation should be performed through a "),s("a",{attrs:{href:"https://docs.feathersjs.com/api/services.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("service interface"),s("OutboundLink")],1),e._v(". As a consequence, these are are the building blocks at the heart of each KDK application.")]),e._v(" "),s("h2",{attrs:{id:"organisation-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#organisation-model"}},[e._v("#")]),e._v(" Organisation model")]),e._v(" "),s("p",[e._v("Organisations are the basic elements that permit to create and configure teams (i.e. "),s("strong",[e._v("groups")]),e._v(" of users) and invite others to join and share content. Organisations are shared workspaces where users can collaborate using a set of services only available "),s("strong",[e._v("within the context")]),e._v(" of the organisation.")]),e._v(" "),s("h3",{attrs:{id:"data-segregation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-segregation"}},[e._v("#")]),e._v(" Data segregation")]),e._v(" "),s("p",[e._v("KDK implements an extreme solution to segregate data at the source: using different databases. This means that dedicated databases (respectively services) are created to hold (respectively to manage) the contextual assets when organisations are made available, and simply destroyed when they are not anymore.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Under the hood the "),s("a",{attrs:{href:"https://github.com/feathersjs-ecosystem/feathers-mongodb-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("feathers-mongodb-management"),s("OutboundLink")],1),e._v(" module is used to dynamically create/remove a database per organisation whenever required")])]),e._v(" "),s("p",[e._v("Using the KDK you can dynamically declare services to access organisation assets stored in this segregated DB.")]),e._v(" "),s("h3",{attrs:{id:"permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),s("p",[e._v("Organisation owners can manage member access to an organisation with a pre-defined set of permissions based on "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Attribute-based_access_control",target:"_blank",rel:"noopener noreferrer"}},[e._v("Attribute Based Access Control"),s("OutboundLink")],1),e._v(" (ABAC), which allows to enforce authorization decisions based on any attribute accessible to the application and not just the user's role. Similarly, resource owners can manage member access to a given resource (e.g. a "),s("strong",[e._v("group")]),e._v(").")]),e._v(" "),s("p",[e._v("All permissions are stored along with the user so that they are always available once authenticated. They are organised by resource types (what we call "),s("em",[e._v("scopes")]),e._v("). The "),s("strong",[e._v("authorisation service")]),e._v(" allow to:")]),e._v(" "),s("ol",[s("li",[e._v("add, respectively remove, a set of "),s("strong",[e._v("permissions")]),e._v(" (e.g. being a owner or a manager)")]),e._v(" "),s("li",[e._v("for a subject (i.e. a "),s("strong",[e._v("user")]),e._v(" in most case but it could be generalized)")]),e._v(" "),s("li",[e._v("on a resource (e.g. an "),s("strong",[e._v("organisation")]),e._v(" or a "),s("strong",[e._v("group")]),e._v(").")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Under the hood the "),s("a",{attrs:{href:"https://stalniy.github.io/casl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CASL"),s("OutboundLink")],1),e._v(" module is used to manage the permissions")])]),e._v(" "),s("h2",{attrs:{id:"domain-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domain-model"}},[e._v("#")]),e._v(" Domain model")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("domain model")]),e._v(" is a set of high-level abstractions that describes selected aspects of a sphere of activity, it is a representation of meaningful real-world concepts pertinent to the domain that are modeled in the software. The concepts include the data involved in the business and rules the business uses in relation to that data.")]),e._v(" "),s("p",[e._v("The class diagram used to represent the domain model in the "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unified_Modeling_Language",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unified Modeling Language"),s("OutboundLink")],1),e._v(" (UML) is presented afterwards. The Kalisio domain model is implemented as a hybridation between "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Object-oriented_programming",target:"_blank",rel:"noopener noreferrer"}},[e._v("objects"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Aspect-oriented_software_development",target:"_blank",rel:"noopener noreferrer"}},[e._v("cross-cutting concerns"),s("OutboundLink")],1),e._v(" within a layer that uses a lower-level layer for "),s("RouterLink",{attrs:{to:"/architecture/data-model-view.html"}},[e._v("persistence")]),e._v(" and "),s("em",[e._v("publishes")]),e._v(" an "),s("RouterLink",{attrs:{to:"/api/"}},[e._v("API")]),e._v(" to a higher-level layer to gain access to the data and behavior of the model.")],1),e._v(" "),s("p",[s("img",{attrs:{src:a(384),alt:"Domain model"}})]),e._v(" "),s("p",[e._v("To get into the details of this model look at the "),s("RouterLink",{attrs:{to:"/architecture/data-model-view.html"}},[e._v("persisted data model")]),e._v(" and the provided "),s("RouterLink",{attrs:{to:"/api/"}},[e._v("API")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);