import{o as r,e as a,a as e,d as C,i as x,J as T,j as N,u as n,n as p,f as h,t as _,k as w,l as P,m as D,r as f,p as j,q as L,v as B,b as u,w as i,T as E,c as v,s as S,X as O,g,F as $,h as z,x as A}from"./app-01c14e15.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const I={},J={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),q=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),H=[R,q];function U(d,o){return r(),a("svg",J,H)}const X=V(I,[["render",U]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},K={class:"flex items-center justify-between flex-wrap"},Q={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Z=[Y],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],re={class:"ml-3 font-medium text-sm text-white truncate"},oe={class:"shrink-0 sm:ml-3"},ae=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ne=[ae],ie={__name:"Banner",setup(d){const o=C(!0),s=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),c=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.banner)||""});return N(c,async()=>{o.value=!0}),(t,y)=>(r(),a("div",null,[o.value&&n(c)?(r(),a("div",{key:0,class:p({"bg-indigo-500":n(s)=="success","bg-red-700":n(s)=="danger"})},[e("div",G,[e("div",K,[e("div",Q,[e("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":n(s)=="success","bg-red-600":n(s)=="danger"}])},[n(s)=="success"?(r(),a("svg",W,Z)):h("",!0),n(s)=="danger"?(r(),a("svg",ee,se)):h("",!0)],2),e("p",re,_(n(c)),1)]),e("div",oe,[e("button",{type:"button",class:p(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":n(s)=="success","hover:bg-red-600 focus:bg-red-600":n(s)=="danger"}]),"aria-label":"Dismiss",onClick:y[0]||(y[0]=w(l=>o.value=!1,["prevent"]))},ne,2)])])])],2)):h("",!0)]))}},de={class:"relative"},F={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white","dark:bg-gray-700"]}},setup(d){const o=d;let s=C(!1);const c=l=>{s.value&&l.key==="Escape"&&(s.value=!1)};P(()=>document.addEventListener("keydown",c)),D(()=>document.removeEventListener("keydown",c));const t=x(()=>({48:"w-48"})[o.width.toString()]),y=x(()=>o.align==="left"?"origin-top-left left-0":o.align==="right"?"origin-top-right right-0":"origin-top");return(l,m)=>(r(),a("div",de,[e("div",{onClick:m[0]||(m[0]=M=>j(s)?s.value=!n(s):s=!n(s))},[f(l.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=M=>j(s)?s.value=!1:s=!1)},null,512),[[B,n(s)]]),u(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[L(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[n(t),n(y)]]),style:{display:"none"},onClick:m[2]||(m[2]=M=>j(s)?s.value=!1:s=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",d.contentClasses])},[f(l.$slots,"content")],2)],2),[[B,n(s)]])]),_:3})]))}},le={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},ue=["href"],k={__name:"DropdownLink",props:{href:String,as:String},setup(d){return(o,s)=>(r(),a("div",null,[d.as=="button"?(r(),a("button",le,[f(o.$slots,"default")])):d.as=="a"?(r(),a("a",{key:1,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[f(o.$slots,"default")],8,ue)):(r(),v(n(S),{key:2,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:i(()=>[f(o.$slots,"default")]),_:3},8,["href"]))]))}},ce={__name:"NavLink",props:{href:String,active:Boolean},setup(d){const o=d,s=x(()=>o.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(c,t)=>(r(),v(n(S),{href:d.href,class:p(n(s))},{default:i(()=>[f(c.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(d){const o=d,s=x(()=>o.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-left text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(c,t)=>(r(),a("div",null,[d.as=="button"?(r(),a("button",{key:0,class:p([n(s),"w-full text-left"])},[f(c.$slots,"default")],2)):(r(),v(n(S),{key:1,href:d.href,class:p(n(s))},{default:i(()=>[f(c.$slots,"default")]),_:3},8,["href","class"]))]))}},ge={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},he={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},pe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},ye={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},_e={class:"ml-3 relative"},ke={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},we=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),je=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Be=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Ae={class:"ml-3 relative"},Fe={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ne=["src","alt"],Pe={key:1,class:"inline-flex rounded-md"},De={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Oe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),Ie=["onSubmit"],Je={class:"-mr-2 flex items-center sm:hidden"},Re={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},qe={class:"pt-2 pb-3 space-y-1"},He={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},Ue={class:"flex items-center px-4"},Xe={key:0,class:"shrink-0 mr-3"},Ge=["src","alt"],Ke={class:"font-medium text-base text-gray-800 dark:text-gray-200"},Qe={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Ye=["onSubmit"],Ze=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),rt=["onSubmit"],ot={class:"flex items-center"},at={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},nt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[nt],dt={key:0,class:"bg-white dark:bg-gray-800 shadow"},lt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},gt={__name:"AppLayout",props:{title:String},setup(d){const o=C(!1),s=t=>{A.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},c=()=>{A.post(route("logout"))};return(t,y)=>(r(),a("div",null,[u(n(O),{title:d.title},null,8,["title"]),u(ie),e("div",ge,[e("nav",he,[e("div",pe,[e("div",fe,[e("div",me,[e("div",ve,[u(n(S),{href:t.route("dashboard")},{default:i(()=>[u(X,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ye,[u(ce,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[g(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",_e,[t.$page.props.jetstream.hasTeamFeatures?(r(),v(F,{key:0,align:"right",width:"60"},{trigger:i(()=>[e("span",ke,[e("button",xe,[g(_(t.$page.props.user.current_team.name)+" ",1),we])])]),content:i(()=>[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(r(),a($,{key:0},[Se,u(k,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:i(()=>[g(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(r(),v(k,{key:0,href:t.route("teams.create")},{default:i(()=>[g(" Create New Team ")]),_:1},8,["href"])):h("",!0),je,Ce,(r(!0),a($,null,z(t.$page.props.user.all_teams,l=>(r(),a("form",{key:l.id,onSubmit:w(m=>s(l),["prevent"])},[u(k,{as:"button"},{default:i(()=>[e("div",Te,[l.id==t.$page.props.user.current_team_id?(r(),a("svg",Le,ze)):h("",!0),e("div",null,_(l.name),1)])]),_:2},1024)],40,Me))),128))],64)):h("",!0)])]),_:1})):h("",!0)]),e("div",Ae,[u(F,{align:"right",width:"48"},{trigger:i(()=>[t.$page.props.jetstream.managesProfilePhotos?(r(),a("button",Fe,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ne)])):(r(),a("span",Pe,[e("button",De,[g(_(t.$page.props.user.name)+" ",1),Ee])]))]),content:i(()=>[Oe,u(k,{href:t.route("profile.show")},{default:i(()=>[g(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(r(),v(k,{key:0,href:t.route("api-tokens.index")},{default:i(()=>[g(" API Tokens ")]),_:1},8,["href"])):h("",!0),Ve,e("form",{onSubmit:w(c,["prevent"])},[u(k,{as:"button"},{default:i(()=>[g(" Log Out ")]),_:1})],40,Ie)]),_:1})])]),e("div",Je,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:y[0]||(y[0]=l=>o.value=!o.value)},[(r(),a("svg",Re,[e("path",{class:p({hidden:o.value,"inline-flex":!o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!o.value,"inline-flex":o.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:o.value,hidden:!o.value},"sm:hidden"])},[e("div",qe,[u(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[g(" Dashboard ")]),_:1},8,["href","active"])]),e("div",He,[e("div",Ue,[t.$page.props.jetstream.managesProfilePhotos?(r(),a("div",Xe,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ge)])):h("",!0),e("div",null,[e("div",Ke,_(t.$page.props.user.name),1),e("div",Qe,_(t.$page.props.user.email),1)])]),e("div",We,[u(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:i(()=>[g(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(r(),v(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:i(()=>[g(" API Tokens ")]),_:1},8,["href","active"])):h("",!0),e("form",{method:"POST",onSubmit:w(c,["prevent"])},[u(b,{as:"button"},{default:i(()=>[g(" Log Out ")]),_:1})],40,Ye),t.$page.props.jetstream.hasTeamFeatures?(r(),a($,{key:1},[Ze,et,u(b,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:i(()=>[g(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(r(),v(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:i(()=>[g(" Create New Team ")]),_:1},8,["href","active"])):h("",!0),tt,st,(r(!0),a($,null,z(t.$page.props.user.all_teams,l=>(r(),a("form",{key:l.id,onSubmit:w(m=>s(l),["prevent"])},[u(b,{as:"button"},{default:i(()=>[e("div",ot,[l.id==t.$page.props.user.current_team_id?(r(),a("svg",at,it)):h("",!0),e("div",null,_(l.name),1)])]),_:2},1024)],40,rt))),128))],64)):h("",!0)])])],2)]),t.$slots.header?(r(),a("header",dt,[e("div",lt,[f(t.$slots,"header")])])):h("",!0),e("main",null,[f(t.$slots,"default")])])]))}};export{gt as _};