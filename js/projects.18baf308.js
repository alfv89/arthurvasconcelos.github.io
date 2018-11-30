(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"054a":function(t,s,a){"use strict";var e=a("4047"),n=a.n(e);n.a},"0bfb":function(t,s,a){"use strict";var e=a("cb7c");t.exports=function(){var t=e(this),s="";return t.global&&(s+="g"),t.ignoreCase&&(s+="i"),t.multiline&&(s+="m"),t.unicode&&(s+="u"),t.sticky&&(s+="y"),s}},3846:function(t,s,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},4047:function(t,s,a){},"7f7f":function(t,s,a){var e=a("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in n||a("9e1e")&&e(n,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},acca:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"projects"},[a("PageHeader",{attrs:{title:"Projects"}}),a("PageContent",{staticClass:"projects"},[a("div",{staticClass:"projectList"},t._l(t.projects,function(t,s){return a("ProjectItem",{key:"project-"+s,attrs:{repo:t.name,createDate:t.npmCreateDate}})}))])],1)},n=[],i=(a("cadf"),a("551c"),a("097d"),a("36ad")),o=a("33c7"),c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"project",staticClass:"project"},[a("div",{staticClass:"project-loading",class:{"is-loaded":t.isLoaded}},[a("FontAwesomeIcon",{attrs:{icon:["fas","spinner"],pulse:""}})],1),a("div",{staticClass:"project-body"},[a("h2",{staticClass:"project-name"},[t._v(t._s(t.name))]),a("p",{staticClass:"project-description"},[t._v(t._s(t.description))]),a("ul",{staticClass:"statList"},[a("li",{staticClass:"statList-item"},[a("a",{staticClass:"statList-link",attrs:{href:"https://github.com/arthurvasconcelos/"+t.name+"/watchers",target:"_blank",title:"Watchers"}},[a("FontAwesomeIcon",{attrs:{icon:["fas","eye"]}}),a("span",{staticClass:"statList-item-value"},[t._v(t._s(t.watchers))])],1)]),a("li",{staticClass:"statList-item"},[a("a",{staticClass:"statList-link",attrs:{href:"https://github.com/arthurvasconcelos/"+t.name+"/stargazers",target:"_blank",title:"Stars"}},[a("FontAwesomeIcon",{attrs:{icon:["fas","star"]}}),a("span",{staticClass:"statList-item-value"},[t._v(t._s(t.stars))])],1)]),a("li",{staticClass:"statList-item"},[a("a",{staticClass:"statList-link",attrs:{href:"https://github.com/arthurvasconcelos/"+t.name+"/network/members",target:"_blank",title:"Forks"}},[a("FontAwesomeIcon",{attrs:{icon:["fas","code-branch"]}}),a("span",{staticClass:"statList-item-value"},[t._v(t._s(t.forks))])],1)]),a("li",{staticClass:"statList-item"},[a("a",{staticClass:"statList-link",attrs:{href:"https://github.com/arthurvasconcelos/"+t.name+"/issues",target:"_blank",title:"Issues"}},[a("FontAwesomeIcon",{attrs:{icon:["fas","exclamation-circle"]}}),a("span",{staticClass:"statList-item-value"},[t._v(t._s(t.issues))])],1)]),a("li",{staticClass:"statList-item"},[a("a",{staticClass:"statList-link",attrs:{href:"https://github.com/arthurvasconcelos/"+t.name,target:"_blank",title:"Version"}},[a("FontAwesomeIcon",{attrs:{icon:["fas","code"]}}),a("span",{staticClass:"statList-item-value"},[t._v(t._s(t.version))])],1)]),a("li",{staticClass:"statList-item"},[a("a",{staticClass:"statList-link",attrs:{href:"https://www.npmjs.com/package/"+t.name,target:"_blank",title:"Downloads"}},[a("FontAwesomeIcon",{attrs:{icon:["fas","cloud-download-alt"]}}),a("span",{staticClass:"statList-item-value"},[t._v(t._s(t.downloads))])],1)])]),a("code",{staticClass:"installCommand"},[t._v("npm install --save "+t._s(t.name))])])])},r=[],l=(a("7f7f"),a("3846"),a("c1df")),u=a.n(l),p="https://api.github.com/repos/arthurvasconcelos/",m={name:"ProjectItem",props:{repo:{type:String,required:!0},createDate:{type:String,required:!0}},data:function(){return{name:"",description:"",watchers:0,stars:0,forks:0,issues:0,version:0,downloads:0,flags:{gh:!1,downloads:!1,version:!1}}},computed:{isLoaded:function(){return this.flags.gh&&this.flags.downloads&&this.flags.version}},beforeMount:function(){var t=this;this.$http.get("".concat(p).concat(this.repo)).then(function(s){var a=s.data;t.name=a.name,t.description=a.description,t.watchers=a.subscribers_count,t.stars=a.stargazers_count,t.forks=a.forks_count,t.issues=a.open_issues_count,t.flags.gh=!0}),this.$http.get("https://api.npmjs.org/downloads/point/".concat(this.createDate,":").concat(u()().format("YYYY-MM-DD"),"/").concat(this.repo)).then(function(s){t.downloads=s.data.downloads,t.flags.downloads=!0}),this.$http.get("https://raw.githubusercontent.com/arthurvasconcelos/".concat(this.repo,"/master/package.json")).then(function(s){t.version=s.data.version,t.flags.version=!0})},mounted:function(){},methods:{}},f=m,h=(a("ba18"),a("2877")),d=Object(h["a"])(f,c,r,!1,null,null,null);d.options.__file="ProjectItem.vue";var g=d.exports,v={name:"Projects",components:{PageHeader:i["a"],PageContent:o["a"],ProjectItem:g},data:function(){return{projects:[{name:"vue-izitoast",npmCreateDate:"2018-01-28"},{name:"vue-cbsc",npmCreateDate:"2018-02-16"}]}}},_=v,C=(a("054a"),Object(h["a"])(_,e,n,!1,null,null,null));C.options.__file="Projects.vue";s["default"]=C.exports},ba18:function(t,s,a){"use strict";var e=a("ce27"),n=a.n(e);n.a},ce27:function(t,s,a){}}]);
//# sourceMappingURL=projects.18baf308.js.map