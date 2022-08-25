"use strict";(self.webpackChunkbloomtraining=self.webpackChunkbloomtraining||[]).push([[290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return r?o.createElement(g,l(l({ref:t},c),{},{components:r})):o.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={title:"08-Livre-decodable",sidebar_position:8,slug:"08-Livre-decodable"},l=void 0,i={unversionedId:"Livre-decodable",id:"Livre-decodable",title:"08-Livre-decodable",description:"Introduction",source:"@site/docs/08-Livre-decodable.md",sourceDirName:".",slug:"/08-Livre-decodable",permalink:"/bloomtraining/fr/next/08-Livre-decodable",draft:!1,editUrl:"https://github.com/JenniBeadle/bloomtraining/docs/08-Livre-decodable.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"08-Livre-decodable",sidebar_position:8,slug:"08-Livre-decodable"},sidebar:"tutorialSidebar",previous:{title:"07-Levelled-reader",permalink:"/bloomtraining/fr/next/07-Levelled-reader"},next:{title:"09-Create-an-ebook-for-Android",permalink:"/bloomtraining/fr/next/09-Create-an-ebook-for-Android"}},d={},s=[{value:"8.1 Choose the collection",id:"81-choose-the-collection",level:2},{value:"8.2 Creating a decodable reader",id:"82-creating-a-decodable-reader",level:2},{value:"8.3 Configure Stages",id:"83-configure-stages",level:2},{value:"8.4 Adding graphemes",id:"84-adding-graphemes",level:2},{value:"8.5 Adding a word list (suggested words)",id:"85-adding-a-word-list-suggested-words",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Introduction"),"\nIn this module we will learn how to create a decodable book in Bloom (i.e.\xa0a book that contains only the learned letters (or sight words))."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why is this important?"),"\nWhen people start learning to read, they need a lot of practice with reading material that contains only the letters (or sight words) they have learned so far. Without a program like Bloom, it is very difficult to ensure that your book is limited to known letters or sight words. Bloom\u2019s Decodable reader book allows us to introduce letters and sight words at different stages. When you make decodable books, Bloom will warn you whenever you use a word with letters that have not yet been learned (or that is not a sight word)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What will you do?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a book based on the decodable reader template. - Set the stages by adding the graphemes, word list and letter and sight word definitions for each stage. - Create a level 1 decodable reader book.")),(0,n.kt)("h2",{id:"81-choose-the-collection"},"8.1 Choose the collection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If necessary, start Bloom"),(0,n.kt)("li",{parentName:"ul"},"Check that the correct collection is open.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If necessary, click ",(0,n.kt)("strong",{parentName:"li"},"Other collections"),".\n*The Open / Create Collection dialog box is displayed."),(0,n.kt)("li",{parentName:"ul"},"Select the desired collection.\n*The main window is displayed.")))),(0,n.kt)("h2",{id:"82-creating-a-decodable-reader"},"8.2 Creating a decodable reader"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Sources for New Books")," pane, select the ",(0,n.kt)("strong",{parentName:"li"},"Decodable Reader")," template."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create a book from this source"),".")),(0,n.kt)("h2",{id:"83-configure-stages"},"8.3 Configure Stages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If necessary, click  (on the right) to see the tools pane."),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Decodable Reader Tool")," pane, click ",(0,n.kt)("strong",{parentName:"li"},"Set Up Stages"),".",(0,n.kt)("em",{parentName:"li"},"The dialogue box appears"),". See below.")),(0,n.kt)("h2",{id:"84-adding-graphemes"},"8.4 Adding graphemes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Letters")," tab."),(0,n.kt)("li",{parentName:"ul"},"Type or paste the desired letters into the ",(0,n.kt)("strong",{parentName:"li"},"Letters and Letter Combinations")," text box.")),(0,n.kt)("h2",{id:"85-adding-a-word-list-suggested-words"},"8.5 Adding a word list (suggested words)"),(0,n.kt)("p",null,"You can either type in words and/or import words from a file. - Click on the ",(0,n.kt)("strong",{parentName:"p"},"Suggested Words")," tab. - To type or paste the suggested words - click in the text box ",(0,n.kt)("strong",{parentName:"p"},"1) Type the words here"),". - type or paste words\nOR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To add words from a file"),(0,n.kt)("li",{parentName:"ul"},"In 2) Place text files\u2026 click the link \u201cSample Text folders\u201d",(0,n.kt)("em",{parentName:"li"},"An Explorer window opens in the folder Bloom uses to get suggested words"),"."),(0,n.kt)("li",{parentName:"ul"},"Copy and paste your text file into this folder."),(0,n.kt)("li",{parentName:"ul"},"Close the Explorer window.",(0,n.kt)("em",{parentName:"li"},"The full path name of the file is displayed in the text box")," ",(0,n.kt)("strong",{parentName:"li"},"2) Place the text files"),".")))}p.isMDXComponent=!0}}]);