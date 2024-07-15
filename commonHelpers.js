(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery");function d({webformatURL:s,largeImageURL:a,tags:i,likes:t,views:e,comments:r,downloads:o}){return`<li class="gallery-item">
  <div class="img-container">
  <a class="gallery-link" href=${a}>
  <img class="gallery-image" src=${s} data-source=${a} alt=${i}>
  </a>
  </div>
  <div class="img-data">
  <ul class="img-data-list">
  <li class="img-data-element">
  <p class="img-data-fetched">Likes: </p>
  <p class="img-data-fetched">${t}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Views: </p>
  <p class="img-data-fetched">${e}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Comments: </p>
  <p class="img-data-fetched">${r}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Downloads: </p>
  <p class="img-data-fetched">${o}</p>
  </li>
  </ul>
  </div>
  </li>`}function u(s){return s.map(d).join("")}function m(s){const i=`https://pixabay.com/api/?key=44934541-86fe3f4b652536370b4b9d239&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()}).then(t=>{if(console.log(t),t.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");const e=u(t.hits);l.insertAdjacentHTML("beforeend",e)}).catch(t=>{window.alert(t.message),console.error("Error:",t.message)})}const c=document.querySelector("form"),n=document.querySelector(".loading-indicator");c.addEventListener("submit",f);function f(s){s.preventDefault();const i=s.target.elements["user-input"].value;if(i===""){window.alert("Please fill in the form");return}l.innerHTML="",n.style.display="block",m(i).finally(()=>{n.style.display="none"}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
