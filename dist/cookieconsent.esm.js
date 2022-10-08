/*!
* CookieConsent 3.0.0-rc.6
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='button',t=e=>'function'==typeof e,n=e=>JSON.parse(JSON.stringify(e)),o=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:t}))},a=(e,a,r)=>{const c=i.t,s=i.o,l={cookie:i.l.i};if(a){const n={modalName:a};return e===s._?t(c._)&&c._(n):e===s.p?t(c.p)&&c.p(n):(n.modal=r,t(c.u)&&c.u(n)),o(e,n)}e===s.v?t(c.v)&&c.v(n(l)):e===s.m?t(c.m)&&c.m(n(l)):(l.changedCategories=i.l.g,l.changedServices=i.l.h,t(c.C)&&c.C(n(l))),o(e,n(l))};class r{constructor(){this.k={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.l={S:null,M:'',A:{},T:null,i:null,B:[],D:null,H:null,N:null,V:'',F:!0,I:!1,j:!1,G:!1,O:!1,P:!1,R:!1,J:[],L:!1,U:!0,g:[],q:!1,K:'',W:!1,X:[],Y:[],Z:[],$:[],ee:!1,te:!1,ne:!1,oe:[],ae:[],re:[],ie:{},ce:{},se:{},h:{},le:{},de:[],fe:[]},this._e={pe:0,ue:0,ve:0,me:0,ge:0,be:0,he:0,ye:0,we:0,Ce:0,ke:0,Se:0,xe:0,Me:0,Ae:0,Te:0,Be:0,De:0,He:0,Ee:0,Ne:0,Ve:0,Fe:0,Ie:0,je:0,Ge:0,Oe:0,Pe:0,Re:0,Je:{},Le:{}},this.t={v:0,m:0,C:0,_:0,p:0,u:0},this.o={v:'cc:onFirstConsent',m:'cc:onConsent',C:'cc:onChange',_:'cc:onModalShow',p:'cc:onModalHide',u:'cc:onModalReady'}}}const i=new r,c=e=>!!e&&'object'==typeof e&&!Array.isArray(e),s=(e,t)=>-1!==e.indexOf(t),l=t=>{const n=document.createElement(t);return t===e&&d(n,'type',t),n},d=(e,t,n)=>{e.setAttribute(t,n)},f=(e,t)=>{e.appendChild(t)},_=(e,t,n,o)=>{e.addEventListener(t,n),o&&i.l.B.push({Ue:e,ze:t,qe:n})},p=e=>Object.keys(e),u=(e,t)=>{e.classList.add(t)},v=(e,t)=>{u(e,'cm__'+t)},m=(e,t)=>{u(e,'pm__'+t)},g=(e,t)=>{e.classList.remove(t)},b=()=>{const e=i.k.cookie.expiresAfterDays;return t(e)?e(i.l.K):e},h=(e,t)=>e.filter((e=>!s(t,e))).concat(t.filter((t=>!s(e,t)))),y=()=>{i.l.K=(()=>{let e='custom',t=C().accepted;return t.length===i.l.X.length?e='all':t.length===i.l.Z.length&&(e='necessary'),e})()},w=(e,t,n,o)=>{const a='accept-',r=v('show-preferencesModal'),c=v('show-consentModal'),s=v(a+'all'),l=v(a+'necessary'),f=v(a+'custom'),p=!0===i.k.lazyHtmlGeneration;for(var u=0;u<r.length;u++)d(r[u],'aria-haspopup','dialog'),_(r[u],'click',(e=>{e.preventDefault(),t.showPreferences()}),!0),p&&_(r[u],'mouseover',(e=>{e.preventDefault(),i.l.O||n(t,o)}),!0);for(u=0;u<c.length;u++)d(c[u],'aria-haspopup','dialog'),_(c[u],'click',(e=>{e.preventDefault(),t.show(!0)}),!0);for(u=0;u<s.length;u++)_(s[u],'click',(e=>{m(e,'all')}),!0);for(u=0;u<f.length;u++)_(f[u],'click',(e=>{m(e)}),!0);for(u=0;u<l.length;u++)_(l[u],'click',(e=>{m(e,[])}),!0);function v(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function m(e,n){e.preventDefault(),t.acceptCategory(n),t.hidePreferences(),t.hide()}},C=()=>{const e=i.l.X.filter((e=>!s(i.l.Y,e)));return{accepted:i.l.Y,rejected:e}},k=()=>{const t=i.l,n=['[href]',e,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),o=(e,t)=>{const o=e&&e.querySelectorAll(n);t[0]=o[0],t[1]=o[o.length-1]};t.I&&o(i._e.be,t.oe),t.O&&o(i._e.He,t.ae)},S=e=>{const n=i.l,o=n.ce;if(n.X.forEach((e=>{(n.h[e]||n.ce[e]||[]).forEach((o=>{const a=n.ie[e][o];!a.enabled&&s(n.ce[e],o)&&t(a.onAccept)?(a.enabled=!0,a.onAccept()):a.enabled&&!s(n.ce[e],o)&&t(a.onReject)&&(a.enabled=!1,a.onReject())}))})),!i.k.manageScriptTags)return;var a=n.de,r=e||n.i.categories||[];const c=(e,t)=>{if(t<e.length){var a=e[t],i=n.fe[t],f=i.Ke,_=i.Qe,p=s(r,f),u=!!_&&s(o[f],_);if(!i.We){var v=!_&&!i.Xe&&p,m=_&&!i.Xe&&u,g=!_&&i.Xe&&!p&&s(n.g,f),b=_&&i.Xe&&!u&&s(n.h[f]||[],_);if(v||g||m||b){i.We=!0,a.removeAttribute('type'),a.removeAttribute('data-category');let n=a.getAttribute('data-src');n&&a.removeAttribute('data-src');const o=l('script');if(o.textContent=a.innerHTML,((e,t)=>{for(var n=t.attributes,o=n.length,a=0;a<o;a++){var r=n[a].nodeName;d(e,r,t[r]||t.getAttribute(r))}})(o,a),n?o.src=n:n=a.src,n&&(o.onload=o.onerror=()=>{c(e,++t)}),a.replaceWith(o),n)return}}c(e,++t)}};c(a,0)},x=e=>{const t=i.l.S.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=(e,t,n,o,a,r)=>{var c=n&&n.layout,l=n&&n.position,d=n&&!0===n.flipButtons,f=n&&!1===n.equalWeightButtons,_=c&&c.split(' ')||[],p=l&&l.split(' ')||[],v=_[0],m=_[1],b=p[0],h='pm--'===o?p[0]:p[1],y=v,w=t[v];w||(w=t[a],y=a);var C=s(w.Ye,m)&&m,k=s(w.Ze,b)?b:w.$e,S=s(w.et,h)?h:w.tt;e.className=r,u(e,o+y),C&&u(e,o+C),k&&u(e,o+k),S&&u(e,o+S),d&&u(e,o+'flip');const x='btn--secondary',M=r+'__';if('cm'===r){const{Ae:e,De:t}=i._e;e&&g(e,M+x),t&&g(t,M+x),f&&(e&&u(e,M+x),t&&u(t,M+x))}else{const{Pe:e}=i._e;e&&g(e,M+x),f&&e&&u(e,M+x)}};if(0===e){const e=['middle','top','bottom'],t=['left','center','right'],o={box:{Ye:['wide','inline'],Ze:e,et:t,$e:'bottom',tt:'right'},cloud:{Ye:['inline'],Ze:e,et:t,$e:'bottom',tt:'center'},bar:{Ye:['inline'],Ze:e.slice(1),et:[],$e:'bottom',tt:''}};a(i._e.be,o,n,'cm--','box','cm')}if(1===e){const e={box:{Ye:[],Ze:[],et:[],$e:'',tt:''},bar:{Ye:['wide'],Ze:[],et:['left','right'],$e:'',tt:'left'}};a(i._e.He,e,o,'pm--','box','pm')}},M=(t,n)=>{const o=i.l,r=i._e,c=o.T&&o.T.preferencesModal;if(c){var s=c.title,v=c.closeIconLabel,b=c.acceptAllBtn,h=c.acceptNecessaryBtn,y=c.savePreferencesBtn,w=c.sections;if(r.ge)r.Ie=l('div'),m(r.Ie,'body');else{r.ge=l('div'),u(r.ge,'pm-wrapper'),r.He=l('div'),r.He.style.visibility='hidden',u(r.He,'pm'),d(r.He,'role','dialog'),d(r.He,'aria-hidden',!0),d(r.He,'aria-modal',!0),_(r.ue,'keydown',(e=>{27===e.keyCode&&t.hidePreferences()}),!0),r.Ee=l('div'),m(r.Ee,'header'),r.Ne=l('div'),m(r.Ne,'title'),d(r.Ne,'role','heading'),r.Ve=l(e),m(r.Ve,'close-btn'),d(r.Ve,'aria-label',c.closeIconLabel||''),_(r.Ve,'click',t.hidePreferences),r.Fe=l('div'),m(r.Fe,'body'),r.Ge=l('div'),m(r.Ge,'footer');var C=l('div');u(C,'btns');var S=l('div'),M=l('div');m(S,'btn-group'),m(M,'btn-group'),f(r.Ge,M),f(r.Ge,S),f(r.Ee,r.Ne),f(r.Ee,r.Ve),f(r.He,r.Ee),f(r.He,r.Fe),f(r.He,r.Ge),f(r.ge,r.He)}s&&(r.Ne.innerHTML=s,v&&d(r.Ve,'aria-label',v)),w&&w.forEach((t=>{var n=t.title,a=t.description,i=t.linkedCategory,s=i&&o.W[i],v=t.cookieTable,b=v&&v.body,h=b&&b.length>0,y=!!s,w=y&&o.ie[i]||!1,C=w&&p(w)||[],k=y&&(!!a||!!h||p(w).length>0),S=l('div');if(m(S,'section'),k||a){var x=l('div');m(x,'section-desc-wrapper')}if(k&&C.length>0){var M=l('div');m(M,'section-services'),C.forEach((e=>{var t=w[e].label||e,n=l('div'),o=l('div'),a=l('div'),r=l('div');m(n,'service'),m(r,'service-title'),m(o,'service-header'),m(a,'service-icon');var c=A(t,e,s,!0,i);r.innerHTML=t,f(o,a),f(o,r),f(n,o),f(n,c),f(M,n)})),f(x,M)}if(n){var T=l('div'),B=l(y?e:'div');if(m(T,'section-title-wrapper'),m(B,'section-title'),B.innerHTML=n,f(T,B),y){var D=l('span');m(D,'section-arrow'),f(T,D),S.className+='--toggle';var H=A(n,i,s);if(C.length>0){var E=l('span');m(E,'badge'),m(E,'service-counter'),d(E,'aria-hidden',!0),d(E,'data-servicecounter',C.length);var N=c.serviceCounterLabel;N&&'string'==typeof N&&d(E,'data-counterlabel',N),f(B,E)}if(k){m(S,'section--expandable');var V=i+'-desc';d(B,'aria-expanded',!1),d(B,'aria-controls',V)}f(T,H)}else d(B,'role','heading'),d(B,'aria-level','3');f(S,T)}if(a){var F=l('div');m(F,'section-desc'),F.innerHTML=a,f(x,F)}if(k&&(d(x,'aria-hidden','true'),x.id=V,((e,t,n)=>{_(B,'click',(()=>{t.classList.contains('is-expanded')?(g(t,'is-expanded'),d(n,'aria-expanded','false'),d(e,'aria-hidden','true')):(u(t,'is-expanded'),d(n,'aria-expanded','true'),d(e,'aria-hidden','false'))}))})(x,S,B),h)){var I=l('table'),j=l('thead'),G=l('tbody');m(I,'section-table'),m(j,'table-head'),m(G,'table-body');var O=v.headers,P=p(O),R=r.pe.createDocumentFragment(),J=l('tr');d(J,'role','row');for(var L=0;L<P.length;L++){var U=O[P[L]],z=l('th');z.id='cc__row-'+U,d(z,'role','columnheader'),d(z,'scope','col'),m(z,'table-th'),z.innerHTML=U,f(R,z)}f(J,R),f(j,J);var q=r.pe.createDocumentFragment();for(L=0;L<b.length;L++){var K=b[L],Q=l('tr');d(Q,'role','row'),m(Q,'table-tr');for(var W=0;W<P.length;W++){var X=P[W],Y=O[X],Z=K[X],$=l('td'),ee=l('div');m($,'table-td'),d($,'data-column',Y),d($,'headers','cc__row-'+Y),ee.insertAdjacentHTML('beforeend',Z),f($,ee),f(Q,$)}f(q,Q)}f(G,q),f(I,j),f(I,G),f(x,I)}(k||a)&&f(S,x),f(r.Fe,S),r.Ie?f(r.Ie,S):f(r.Fe,S)})),(b||h)&&(h&&(r.Pe||(r.Pe=l(e),m(r.Pe,'btn'),f(S,r.Pe),_(r.Pe,'click',(()=>{T([])}))),r.Pe.innerHTML=h),b&&(r.Oe||(r.Oe=l(e),m(r.Oe,'btn'),f(S,r.Oe),_(r.Oe,'click',(()=>{T('all')}))),r.Oe.innerHTML=b)),y&&(r.Re||(r.Re=l(e),m(r.Re,'btn'),m(r.Re,'btn--secondary'),f(M,r.Re),_(r.Re,'click',(()=>{T()}))),r.Re.innerHTML=y),r.Ie&&(r.He.replaceChild(r.Ie,r.Fe),r.Fe=r.Ie),x(1),o.O||(o.O=!0,a(i.o.u,'preferencesModal',r.He),k(),n(t),f(r.ve,r.ge),setTimeout((()=>u(r.ge,'c--anim')),100))}function T(e){t.acceptCategory(e),t.hidePreferences(),t.hide()}};function A(e,t,n,o,a){const r=i.l,c=i._e;var p=l('label'),v=l('input'),m=l('span'),g=l('span'),b=l('span'),h=l('span');if(v.type='checkbox',u(p,'section__toggle-wrapper'),u(v,'section__toggle'),u(b,'toggle__icon-on'),u(h,'toggle__icon-off'),u(m,'toggle__icon'),u(g,'toggle__label'),d(m,'aria-hidden','true'),o?(u(p,'toggle-service'),u(v,'toggle-service'),d(v,'data-category',a),c.Le[a][t]=v):c.Je[t]=v,o?(e=>{_(v,'change',(()=>{var t=c.Le[e],n=c.Je[e];for(var o in r.se[e]=[],t){const n=t[o];n.checked&&r.se[e].push(n.value)}r.se[e].length>0?n.checked=!0:n.checked=!1}))})(a):(e=>{_(v,'click',(()=>{var t=c.Le[e];if(r.se[e]=[],v.checked)for(var n in t)t[n].checked=!0;else for(n in t)t[n].checked=!1}))})(t),v.value=t,g.textContent=e.replace(/<.*>.*<\/.*>/gm,''),f(m,h),f(m,b),r.F)(n.enabled||n.readOnly)&&(v.checked=!0);else if(o){var y=r.ce[a];y&&s(y,t)&&(v.checked=!0)}else s(r.i.categories,t)&&(v.checked=!0);return n.readOnly&&(v.disabled=!0),f(p,v),f(p,m),f(p,g),p}const T=(t,n)=>{const o=i.l,r=i._e,c=o.T&&o.T.consentModal;if(c){!0===o.S.disablePageInteraction&&u(r.ue,'disable--interaction');var s=c.acceptAllBtn,p=c.acceptNecessaryBtn,m=c.showPreferencesBtn,g=c.closeIconLabel,b=c.footer;if(!r.me){r.me=l('div'),r.be=l('div'),r.he=l('div'),r.ye=l('div'),r.ke=l('div'),u(r.me,'cm-wrapper'),u(r.be,'cm'),v(r.he,'body'),v(r.ye,'texts'),v(r.ke,'btns'),d(r.be,'role','dialog'),d(r.be,'aria-modal','true'),d(r.be,'aria-hidden','false'),d(r.be,'aria-labelledby','cm__title'),d(r.be,'aria-describedby','cm__desc'),r.be.style.visibility='hidden';const n='box',a=o.S.guiOptions,i=a&&a.consentModal,c=(i&&i.layout||n).split(' ')[0]===n;g&&c&&(r.De||(r.De=l(e),v(r.De,'btn'),v(r.De,'btn--close'),_(r.De,'click',(()=>{t.hide(),t.acceptCategory([])})),f(r.he,r.De)),d(r.De,'aria-label',g)),f(r.he,r.ye),(s||p||m)&&f(r.he,r.ke),f(r.be,r.he),f(r.me,r.be)}var h=c.title;h&&(r.we||(r.we=l('div'),r.we.className=r.we.id='cm__title',d(r.we,'role','heading'),d(r.we,'aria-level','2'),f(r.ye,r.we)),r.we.innerHTML=h);var y=c.description;if(y&&(o.L&&(y=y.replace('{{revisionMessage}}',o.U?'':c.revisionMessage||'')),r.Ce||(r.Ce=l('div'),r.Ce.className=r.Ce.id='cm__desc',f(r.ye,r.Ce)),r.Ce.innerHTML=y),s&&(r.Me||(r.Me=l(e),v(r.Me,'btn'),_(r.Me,'click',(()=>{t.hide(),t.acceptCategory('all')}))),r.Me.innerHTML=s),p&&(r.Ae||(r.Ae=l(e),v(r.Ae,'btn'),_(r.Ae,'click',(()=>{t.hide(),t.acceptCategory([])}))),r.Ae.innerHTML=p),m&&(r.Te||(r.Te=l(e),v(r.Te,'btn'),v(r.Te,'btn--secondary'),_(r.Te,'mouseover',(()=>{M(t,n)})),_(r.Te,'click',t.showPreferences)),r.Te.innerHTML=m),!r.xe&&m&&(r.xe=l('div'),v(r.xe,'btn-group'),f(r.xe,r.Te),f(r.ke,r.xe)),r.Se||(r.Se=l('div'),v(r.Se,'btn-group'),p&&f(r.Se,r.Ae),s&&f(r.Se,r.Me),(s||p)&&f(r.he,r.Se),f(r.ke,r.Se)),b){if(!r.Be){var C=l('div'),S=l('div');r.Be=l('div'),v(C,'footer'),v(S,'links'),v(r.Be,'link-group'),f(S,r.Be),f(C,S),f(r.be,C)}r.Be.innerHTML=b}x(0),o.I||(o.I=!0,a(i.o.u,'consentModal',r.be),k(),n(t),f(r.ve,r.me),setTimeout((()=>u(r.me,'c--anim')),100)),w(r.he,t,M,n)}},B=e=>{const t=i._e;if(!t.ve){t.ve=l('div'),t.ve.id='cc-main',t.ve.style.position='fixed',t.ve.style.zIndex='2147483647';let n=i.l.S.root;n&&'string'==typeof n&&(n=document.querySelector(n)),f(n||t.pe.body,t.ve),(e=>{const t=i._e;_(t.ve,'click',(n=>{const o=i.l;o.R?t.He.contains(n.target)?o.P=!0:(e.hidePreferences(0),o.P=!1):o.j&&t.be.contains(n.target)&&(o.P=!0)}))})(e)}},D=e=>!!e&&s(p(i.l.A),e),H=()=>{const e=i.l;return e.M||e.S.language.default},E=e=>{e&&(i.l.M=e)},N=async e=>{const t=i.l;let n;n=e&&D(e)?e:H();let o=t.A[n];if(!o)return!1;if('string'==typeof o){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o);if(!e)return!1;o=e}return t.T=o,E(n),!0},V=e=>{const{hostname:t,protocol:n}=window.location,{name:o,path:a,domain:r,sameSite:c}=i.k.cookie,l=encodeURIComponent(JSON.stringify(i.l.i)),d=e?(()=>{const e=i.l.N,t=e?new Date-e:0;return 864e5*b()-t})():864e5*b(),f=new Date;f.setTime(f.getTime()+d);let _=o+'='+l+(0!==d?'; expires='+f.toUTCString():'')+'; Path='+a+'; SameSite='+c;s(t,'.')&&(_+='; Domain='+r),'https:'===n&&(_+='; Secure'),document.cookie=_,i.l.i},F=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},I=(e,t,n)=>{const o=n||i.k.cookie.domain,a=t||i.k.cookie.path,r='www.'===o.slice(0,4),c=r&&o.substring(4),s=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{s(e),s(e,o),r&&s(e,c)}))},j=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},G=e=>{const t=document.cookie.split(/;\s*/),n=[];for(var o=0;o<t.length;o++){let a=t[o].split('=')[0];if(e)try{e.test(a)&&n.push(a)}catch(e){}else n.push(a)}return n},O=e=>{e.dispatchEvent(new Event('change'))},P=(e,t=[])=>{const o=i.l;let r=!1;var c=[];if(e)if('object'==typeof e&&'number'==typeof e.length)for(var l=0;l<e.length;l++)s(o.X,e[l])&&c.push(e[l]);else'string'==typeof e&&('all'===e?c=o.X.slice():s(o.X,e)&&c.push(e));else c=(()=>{let e=i._e.Je,t=[];if(e)for(var n in e)e[n].checked&&t.push(e[n].value);else o.F||(t=o.i.categories);for(let e in o.se)o.se[e].length>0&&(s(t,e)||t.push(e));return t})(),r=!0;if(t.length>=1)for(l=0;l<t.length;l++)c=c.filter((e=>e!==t[l]));for(l=0;l<o.Z.length;l++)s(c,o.Z[l])||c.push(o.Z[l]);o.Y=c,y(),r||(o.se={}),o.le=n(o.ce),o.X.forEach((e=>{const t=o.ie[e],n=p(t),a=o.ce;0!==n.length&&(a[e]=[],s(o.Z,e)?n.forEach((t=>{a[e].push(t)})):'all'===o.K?r&&o.se[e]&&o.se[e].length>0?o.se[e].forEach((t=>{a[e].push(t)})):n.forEach((t=>{a[e].push(t)})):'necessary'===o.K?a[e]=[]:r&&o.se[e]&&o.se[e].length>0?o.se[e].forEach((t=>{a[e].push(t)})):s(o.Y,e)&&p(t).forEach((t=>a[e].push(t))),a[e]=[...new Set(a[e])])})),(()=>{const e=i.l;'opt-out'===i.k.mode&&e.F?e.g=h(e.$,e.Y):e.g=h(e.Y,e.i.categories||[]);let t=e.g.length>0,o=!1;e.X.forEach((t=>{e.h[t]=h(e.ce[t],e.le[t]||[]),e.h[t].length>0&&(o=!0)}));var r=i._e.Je;for(var c in r)s(e.Y,c)?r[c].checked=!0:r[c].checked=!1;e.X.forEach((t=>{var n=i._e.Le[t],o=e.ce[t];for(var a in n){const e=n[a];s(o,a)?e.checked=!0:e.checked=!1}})),e.H||(e.H=new Date),e.V||(e.V=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.i={categories:n(e.Y),revision:i.k.revision,data:e.D,consentTimestamp:e.H.toISOString(),consentId:e.V,services:n(e.ce)};var l=!1;(e.F||t||o)&&(e.F&&(e.F=!1,l=!0),y(),e.N?e.N=new Date:e.N=e.H,e.i.lastConsentTimestamp=e.N.toISOString(),V(),i.k.autoClearCookies&&(l||!e.F&&t)&&(e=>{const t=i.l,n=G();t.q=!1;let o=e?t.X:t.g;o=o.filter((e=>{let n=t.W[e];return!!n&&!n.readOnly&&!!n.autoClear})),o.forEach((o=>{const a=t.W[o].autoClear,r=a&&a.cookies||[],i=s(t.g,o),c=!s(t.Y,o),l=i&&c;(e&&c||!e&&l)&&(!0===a.reloadPage&&l&&(t.q=!0),r.forEach((e=>{let t=[];const o=e.name,a=e.domain,r=e.path;if(o instanceof RegExp)n.forEach((e=>{o.test(e)&&t.push(e)}));else{let e=(i=o,n.indexOf(i));e>-1&&t.push(n[e])}var i;t.length>0&&I(t,r,a)})))}))})(l),S()),l&&(a(i.o.v),a(i.o.m),'opt-in'===i.k.mode)||((t||o)&&a(i.o.C),e.q&&window.location.reload())})()},R=e=>{let t;return t=i.l.F&&'opt-in'!==i.k.mode?i.l.$:C().accepted||[],s(t,e)},J=(e,t)=>{const n=i.l;if(!e||!t||'string'!=typeof t||!s(n.X,t))return!1;const o=i._e.Le[t]||{},a=p(n.ie[t]);if(n.se[t]=[],'string'==typeof e)if('all'===e){for(let e in o)o[e].checked=!0,O(o[e]);n.se[t]=[...a]}else{for(let t in o)o[t].checked=e===t,O(o[t]);s(a,e)&&n.se[t].push(e)}else if('object'==typeof e&&Array.isArray(e)){for(let t in o)s(e,t)?o[t].checked=!0:o[t].checked=!1,O(o[t]);a.forEach((o=>{s(e,o)&&n.se[t].push(o)}))}P()},L=(e,t)=>s(i.l.ce[t]||[],e),U=e=>''!==j(e,!0),z=(e,t,n)=>{let o=[];const a=e=>{if('string'==typeof e){let t=j(e);''!==t&&o.push(t)}else o=o.concat(G(e))};if(Array.isArray(e))for(var r=0;r<e.length;r++)a(e[r]);else a(e);I(o,t,n)},q=e=>{e&&!i.l.I&&T(X,B),i.l.I&&(u(i._e.ue,'show--consent'),d(i._e.be,'aria-hidden','false'),i.l.j=!0,setTimeout((()=>{i.l.te=i._e.pe.activeElement,i.l.J=i.l.oe}),200),a(i.o._,'consentModal'))},K=()=>{i.l.I&&i.l.j&&(g(i._e.ue,'show--consent'),d(i._e.be,'aria-hidden','true'),i.l.j=!1,setTimeout((()=>{i.l.te.focus(),i.l.J=[]}),200),a(i.o.p,'consentModal'))},Q=()=>{const e=i.l;e.O&&e.G||(e.O||M(X,B),u(i._e.ue,'show--preferences'),d(i._e.He,'aria-hidden','false'),e.G=!0,setTimeout((()=>{e.R=!0}),1),setTimeout((()=>{e.j?e.ne=i._e.pe.activeElement:e.te=i._e.pe.activeElement,0!==e.ae.length&&(e.ae[0].focus(),e.J=e.ae)}),200),a(i.o._,'preferencesModal'))},W=()=>{const e=i.l;e.G&&(g(i._e.ue,'show--preferences'),d(i._e.He,'aria-hidden','true'),e.G=!1,setTimeout((()=>{e.R=!1}),1),e.j?(e.ne&&e.ne.focus(),e.J=e.oe):(e.te&&e.te.focus(),e.J=[]),e.P=!1,a(i.o.p,'preferencesModal'))};var X={show:q,hide:K,showPreferences:Q,hidePreferences:W,acceptCategory:P};const Y=async(e,t)=>!(!D(e)||e===H()&&!0!==t||!await N(e)||(E(e),i.l.I&&T(X,B),i.l.O&&M(X,B),0)),Z=()=>{const e=!i.l.F;var t,n=e&&C();return{acceptType:i.l.K,acceptedCategories:e?n.accepted:[],rejectedCategories:e?n.rejected:[],acceptedServices:e?i.l.ce:{},rejectedServices:e?(t={},i.l.X.forEach((e=>{t[e]=h(i.l.ce[e]||[],p(i.l.ie[e])||[])})),t):{}}},$=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise(((o,a)=>{if(n)return o(!0);n=l('script'),Array.isArray(t)&&t.forEach((e=>{d(n,e.name,e.value)})),n.onload=()=>o(!0),n.onerror=()=>{n.remove(),a(!1)},n.src=e,f(document.head,n)}))},ee=e=>{let t,n=e.value,o=e.mode,a=!1;const r=i.l;if('update'===o){r.D=te('data'),t=te('data');const e=typeof t==typeof n;if(e&&'object'==typeof t)for(var c in!t&&(t={}),n)t[c]!==n[c]&&(t[c]=n[c],a=!0);else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(r.D=t,r.i.data=t,V(!0)),a},te=(e,t)=>{const n=F(j(t||i.k.cookie.name,!0));return e?n[e]:n},ne=e=>{const t=i.k,n=i.l.S;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},oe=()=>!i.l.F,ae=async e=>{const t=i.l,n=i.k,o=window;if(!o.nt){if(o.nt=!0,(e=>{!function(){const e=document;i._e.pe=e,i._e.ue=e.documentElement,i.k.cookie.domain=window.location.hostname}();const t=i.k,n=i.l,o=t.cookie,a=i.t,r=e.cookie,l=e.categories,d=p(l)||[],f=navigator;n.S=e,n.A=e.language.translations,n.W=l,n.X=d,a.v=e.onFirstConsent,a.m=e.onConsent,a.C=e.onChange,a.p=e.onModalHide,a._=e.onModalShow,a.u=e.onModalReady;const{mode:_,autoShow:u,autoClearCookies:v,revision:m,manageScriptTags:g,hideFromBots:b,lazyHtmlGeneration:h}=e;'opt-out'===_&&(t.mode=_),'boolean'==typeof u&&(t.autoShow=u),'boolean'==typeof v&&(t.autoClearCookies=v),'boolean'==typeof g&&(t.manageScriptTags=g),'number'==typeof m&&m>=0&&(t.revision=m,n.L=!0),'boolean'==typeof h&&(t.lazyHtmlGeneration=h),!1===b&&(t.hideFromBots=!1),!0===t.hideFromBots&&f&&(n.ee=f.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(f.userAgent)||f.webdriver),c(r)&&(t.cookie={...o,...r}),t.autoClearCookies,n.L,t.manageScriptTags,function(e){const t=i.l;e.forEach((e=>{const n=t.W[e],o=n.services||{},a=o&&c(o)&&p(o)||[];n.readOnly&&t.Z.push(e),t.ie[e]={},t.ce[e]=[],i._e.Le[e]={},a.forEach((n=>{const a=o[n];a.enabled=!1,t.ie[e][n]=a}))}))}(d),(()=>{if(!i.k.manageScriptTags)return;const e=i.l;e.de=i._e.pe.querySelectorAll('script[data-category]'),e.fe=[],e.de.forEach((t=>{let n=t.getAttribute('data-category'),o=t.dataset.service||'',a=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),s(e.X,n)&&(e.fe.push({We:!1,Xe:a,Ke:n,Qe:o}),o)){const t=e.ie[n];t[o]||(t[o]={enabled:!1})}}))})(),E((()=>{const e=i.l.S.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),D(t))return t}return H()})())})(e),t.ee)return;const l=F(j(n.cookie.name,!0)),d=l.categories,f=Array.isArray(d)&&d.length>0;t.i=l,t.V=l.consentId;const u=!!t.V&&'string'==typeof t.V;t.H=l.consentTimestamp,t.H&&(t.H=new Date(t.H)),t.N=l.lastConsentTimestamp,t.N&&(t.N=new Date(t.N));const v=l.data;if(t.D=void 0!==v?v:null,t.L&&u&&l.revision!==n.revision&&(t.U=!1),t.F=!(u&&t.U&&t.H&&t.N&&f),t.F,t.F?'opt-out'===n.mode&&(()=>{const e=i.l;e.X.forEach((t=>{if(e.W[t].enabled){e.$.push(t);const o=e.ie[t]||{};for(var n in o)e.ce[t].push(n)}}))})():(t.Y=l.categories,t.ce=l.services||{},y()),!await N())return;r=X,i.l.F&&T(r,B),i.k.lazyHtmlGeneration||M(r,B),w(null,r,M,B),n.autoShow&&t.F&&q(!0),(()=>{const e=i._e;var t=!1,n=!1;_(e.ue,'keydown',(o=>{if('Tab'!==o.key)return;const a=i.l.J;if(a.length>0){const r=e.pe.activeElement;o.shiftKey?r===a[0]&&(a[1].focus(),o.preventDefault()):r===a[1]&&(a[0].focus(),o.preventDefault()),n||i.l.P||(n=!0,!t&&o.preventDefault(),o.shiftKey?a[1].focus():a[0].focus())}!n&&(t=!0)}),!0)})(),t.F?'opt-out'===n.mode&&(n.mode,t.$,S(t.$)):(S(),a(i.o.m))}var r},re=e=>{const t=i._e,n=i.k.cookie;!0===e&&z(n.name,n.path,n.domain),i.l.B.forEach((e=>{e.Ue.removeEventListener(e.ze,e.qe)})),t.ve&&t.ve.remove(),t.ue&&(g(t.ue,'disable--interaction'),g(t.ue,'show--preferences'),g(t.ue,'show--consent'));const o=new r;i.l=o.l,i._e=o._e,i.k=o.k,i.t=o.t,i.o=o.o,window.nt=!1};export{P as acceptCategory,J as acceptService,R as acceptedCategory,L as acceptedService,z as eraseCookies,ne as getConfig,te as getCookie,Z as getUserPreferences,K as hide,W as hidePreferences,$ as loadScript,re as reset,ae as run,ee as setCookieData,Y as setLanguage,q as show,Q as showPreferences,oe as validConsent,U as validCookie};
