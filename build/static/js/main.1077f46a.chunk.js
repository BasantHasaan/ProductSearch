(this.webpackJsonpproducts=this.webpackJsonpproducts||[]).push([[0],{248:function(e,t,a){e.exports=a(568)},253:function(e,t,a){},565:function(e,t,a){},568:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(9),c=a.n(l),o=(a(253),a(241)),i=a(242),s=a(247),u=a(246),m=a(151),d=a.n(m),h=a(11),E=(a(565),new h.SearchkitManager("http://localhost:9200/products")),g=function(e){var t=e.bemBlocks,a=e.result,r="http://localhost:9200/products/"+a._source.brand;d()({},a._source,a.highlight);return n.a.createElement("div",{className:t.item().mix(t.container("item")),"data-qa":"hit"},n.a.createElement("h1",null,a._source.brand),n.a.createElement("h1",null,a._source.price),n.a.createElement("p",null,a._source.name),n.a.createElement("a",{href:r,target:"_blank"},n.a.createElement("img",{"data-qa":"poster",alt:"Product",className:t.item("poster"),src:a._source.image,width:"170",height:"240"})))},p=function(e){var t=e.bemBlocks,a=e.result;a._source.brand,d()({},a._source,a.highlight);return n.a.createElement("div",{className:t.item().mix(t.container("item")),"data-qa":"hit"},n.a.createElement("h1",null,a._source.brand),n.a.createElement("h1",null,a._source.price),n.a.createElement("p",null,a._source.name),n.a.createElement("div",{className:t.item("poster")},n.a.createElement("img",{alt:a._source.brand,"data-qa":"poster",src:a._source.image})),n.a.createElement("div",{className:t.item("details")}))},b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(h.SearchkitProvider,{searchkit:E},n.a.createElement(h.Layout,null,n.a.createElement(h.TopBar,null,n.a.createElement("div",{className:"my-logo"},"Product"),n.a.createElement(h.SearchBox,{autofocus:!0,searchOnChange:!0,prefixQueryFields:["brand^1"]})),n.a.createElement(h.LayoutBody,null,n.a.createElement(h.SideBar,null,n.a.createElement(h.HierarchicalMenuFilter,{fields:["category"],title:"category",id:"category"})),n.a.createElement(h.LayoutResults,null,n.a.createElement(h.ActionBar,null,n.a.createElement(h.ActionBarRow,null,n.a.createElement(h.HitsStats,{translations:{"hitstats.results_found":"{hitCount} results found"}}),n.a.createElement(h.ViewSwitcherToggle,null),n.a.createElement(h.SortingSelector,{options:[{label:"Relevance",field:"_score",order:"desc"},{label:"High Price",field:"price",order:"desc"},{label:"Low Price",field:"price",order:"asc"}]})),n.a.createElement(h.ActionBarRow,null,n.a.createElement(h.GroupedSelectedFilters,null),n.a.createElement(h.ResetFilters,null))),n.a.createElement(h.ViewSwitcherHits,{hitsPerPage:12,highlightFields:["brand","category"],sourceFilter:["brand","name","price","category"],hitComponents:[{key:"grid",title:"Grid",itemComponent:g,defaultOption:!0},{key:"list",title:"List",itemComponent:p}],scrollTo:"body"}),n.a.createElement(h.NoHits,{suggestionsField:"title"}),n.a.createElement(h.Pagination,{showNumbers:!0})))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[248,1,2]]]);
//# sourceMappingURL=main.1077f46a.chunk.js.map