(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{150:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(1),a=t(6),r=(t(0),t(180)),i={id:"functionalComponents",title:"Using functional components as screens",sidebar_label:"Using functional components"},c={id:"functionalComponents",title:"Using functional components as screens",description:"Both class components and functional components can be used as screens. There is no performance difference between the two. Deciding which type component to use boils down to user preference.",source:"@site/docs/docs-functional-components.mdx",permalink:"/react-native-navigation/docs/functionalComponents",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-functional-components.mdx",sidebar_label:"Using functional components",sidebar:"docs",previous:{title:"Passing data to components",permalink:"/react-native-navigation/docs/passing-data-to-components"},next:{title:"Stack",permalink:"/react-native-navigation/docs/stack"}},s=[{value:"Declaring static options",id:"declaring-static-options",children:[]},{value:"Listening to navigation events",id:"listening-to-navigation-events",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Both class components and functional components can be used as screens. There is no performance difference between the two. Deciding which type component to use boils down to user preference."),Object(r.b)("h2",{id:"declaring-static-options"},"Declaring static options"),Object(r.b)("p",null,"Static options are a great way to declare options close to where they are used. Declaring static options is done by first declaring the functional component, and then declaring the options on the function class."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const MyScreen = (props) => {\n  return (\n      <View>\n        <Text>Screen Component</Text>\n      </View>\n    );\n};\n\nMyScreen.options = {\n  topBar: {\n    background: {\n      color: 'red'\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"listening-to-navigation-events"},"Listening to navigation events"),Object(r.b)("p",null,"Navigation events let you react to various events related to a specific component or the app its self. Read more about them ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"../api/events-a"}),"here")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useEffect } from 'react';\nimport Navigation from 'react-native-navigation';\n\nfunction MyScreen(props) {\n  useEffect(() => {\n    const listener = {\n      componentDidAppear: () => {\n        console.log('RNN', `componentDidAppear`);\n      },\n      componentDidDisappear: () => {\n        console.log('RNN', `componentDidDisappear`);\n      }\n    };\n    // Register the listener to all events related to our component\n    const unsubscribe = Navigation.events().bindComponent(listener, props.componentId);\n    return () => {\n      // Make sure to unregister the listener during cleanup\n      unsubscribe.remove();\n    };\n  }, []);\n\n  return (\n      <View>\n        <Text>Screen Component</Text>\n      </View>\n    );\n}\n")),Object(r.b)("p",null,"Notice that in the example above, we call ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.events().bindComponent()")," to register our listener even though we're not binding any component. That's because our listener is registered with the ",Object(r.b)("inlineCode",{parentName:"p"},"componentId")," passed in the second argument."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/underscopeio/react-native-navigation-hooks"}),"underscopeio/react-native-navigation-hooks")," is a wonderful library which greatly simplifies usage with hooks by introducing dedicated hooks for each event. The following example, which is taken from their docs, shows how to listen to all appear events and a particular screen's appear events:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'\n\nconst ScreenComponent = ({ componentId }) => {\n  // Global listener\n  useNavigationComponentDidAppear(e => {\n    console.log(`${e.componentName} (${e.componentId}) appeared`)\n  })\n\n  // Listen events only for this screen (componentId)\n  useNavigationComponentDidAppear(e => {\n    console.log(`${e.componentName} appeared`)\n  }, componentId)\n\n  return (\n    <View>\n      <Text>Screen Component</Text>\n    </View>\n  )\n}\n")))))}l.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return t?a.a.createElement(b,c({ref:n},p,{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);