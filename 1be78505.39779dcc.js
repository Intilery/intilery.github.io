(window.webpackJsonp=window.webpackJsonp||[]).push([[10,70],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(125),i=a(126),r=a(22),o=a(130),s=a(2),u=a(6),m=a(128),b=a(146),d=a(150),f=a(151),v=a(152),h=a(149),p=a(127),k=a(134),E=a(59),O=a.n(E);var g=function e(t,a){return"link"===t.type?(n=t.href,l=a,(c=function(e){return e.endsWith("/")?e:e+"/"})(n)===c(l)):"category"===t.type&&t.items.some((function(t){return e(t,a)}));var n,l,c};function j(e){var t,a,c,i=e.item,r=e.onItemClick,o=e.collapsible,b=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),f=i.items,v=i.label,h=g(i,b),p=(a=h,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),k=Object(n.useState)((function(){return!!o&&(!h&&i.collapsed)})),E=k[0],j=k[1];Object(n.useEffect)((function(){h&&!p&&E&&j(!1)}),[h,p,E]);var C=Object(n.useCallback)((function(e){e.preventDefault(),j((function(e){return!e}))}),[j]);return 0===f.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":E}),key:v},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[O.a.menuLinkText]=!o,t)),onClick:o?C:void 0,href:o?"#!":void 0},d),v),l.a.createElement("ul",{className:"menu__list"},f.map((function(e){return l.a.createElement(_,{tabIndex:E?"-1":"0",key:e.label,item:e,onItemClick:r,collapsible:o,activePath:b})}))))}function C(e){var t=e.item,a=e.onItemClick,n=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=t.href,r=t.label,o=g(t,n);return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(p.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:i},Object(k.a)(i)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),r))}function _(e){switch(e.item.type){case"category":return l.a.createElement(j,e);case"link":default:return l.a.createElement(C,e)}}var N=function(e){var t,a,c=e.path,r=e.sidebar,o=e.sidebarCollapsible,u=void 0===o||o,k=Object(n.useState)(!1),E=k[0],g=k[1],j=Object(i.a)(),C=j.siteConfig,N=(C=void 0===C?{}:C).themeConfig,w=(N=void 0===N?{}:N).navbar,y=(w=void 0===w?{}:w).title,M=void 0===y?"":y,I=w.hideOnScroll,P=void 0!==I&&I,x=j.isClient,L=Object(v.a)(),S=L.logoLink,W=L.logoLinkProps,R=L.logoImageUrl,A=L.logoAlt,B=Object(b.a)().isAnnouncementBarClosed,D=Object(h.a)().scrollY;Object(d.a)(E);var F=Object(f.a)();return Object(n.useEffect)((function(){F===f.b.desktop&&g(!1)}),[F]),l.a.createElement("div",{className:Object(m.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=P,t))},P&&l.a.createElement(p.a,Object(s.a)({tabIndex:"-1",className:O.a.sidebarLogo,to:S},W),null!=R&&l.a.createElement("img",{key:x,src:R,alt:A}),null!=M&&l.a.createElement("strong",null,M)),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",O.a.menu,(a={"menu--show":E},a[O.a.menuWithAnnouncementBar]=!B&&0===D,a))},l.a.createElement("button",{"aria-label":E?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){g(!E)}},E?l.a.createElement("span",{className:Object(m.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},r.map((function(e){return l.a.createElement(_,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),g(!1)},collapsible:u,activePath:c})})))))},w=a(136),y=a(143),M=a(132),I=a(64),P=a.n(I);function x(e){var t,a,n=e.currentDocRoute,r=e.docsMetadata,s=e.children,u=Object(i.a)(),m=u.siteConfig,b=u.isClient,d=r.permalinkToSidebar,f=r.docsSidebars,v=r.version,h=f[d[n.path]];return l.a.createElement(o.a,{version:v,key:b},l.a.createElement("div",{className:P.a.docPage},h&&l.a.createElement("div",{className:P.a.docSidebarContainer,role:"complementary"},l.a.createElement(N,{sidebar:h,path:n.path,sidebarCollapsible:null===(t=null===(a=m.themeConfig)||void 0===a?void 0:a.sidebarCollapsible)||void 0===t||t})),l.a.createElement("main",{className:P.a.docMainContainer},l.a.createElement(c.a,{components:w.a},s))))}t.default=function(e){var t=e.route.routes,a=e.docsMetadata,n=e.location,c=t.find((function(e){return Object(M.matchPath)(n.pathname,e)}));return c?l.a.createElement(x,{currentDocRoute:c,docsMetadata:a},Object(r.a)(t)):l.a.createElement(y.default,e)}},143:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(130);t.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);