class e{constructor(e,t,n,c,r,o){this.images=e,this.title=t,this.description=n,this.rating=c,this.stock=r,this.category=o,this.images=e,this.title=t,this.description=n,this.rating=c,this.stock=r,this.category=o,this.createButton()}createButton(){}}function t(t){"display"===t?async function(){let t=await fetch("https://dummyjson.com/products");!function(t){let n=document.querySelector("#productsContainer");t.forEach(t=>{console.log(new e(t.images,t.title,t.description,t.rating,t.stock,t.category));let c=document.createElement("div");c.className="productCard";let r=document.createElement("img"),o=document.createElement("h1"),i=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p"),m=document.createElement("button");r.src=t.images[0],o.innerText=t.title,i.innerText=t.description,a.innerHTML=t.rating,s.innerText=t.stock,d.innerText=t.category,m.innerText="Add to cart",c.append(r,o,i,a,s,d,m),n.append(c)})}((await t.json()).products)}():"search"===t&&async function(){let e=document.querySelector("#searchInput").value,t=`https://dummyjson.com/products/search?q=${e}`,n=await fetch(t);!function(e){let t=document.querySelector("#searchResultContainer");t.innerHTML="";let n=document.querySelector("#cleanButton"),c=document.createElement("button");c.innerText="Close X",n.append(c),c.addEventListener("click",()=>{t.innerHTML="",n.innerHTML=""}),console.log(e),e.forEach(e=>{let n=document.createElement("div");n.className="productCard";let c=document.createElement("img"),r=document.createElement("h1"),o=document.createElement("p"),i=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p"),d=document.createElement("button");c.src=e.images[0],r.innerText=e.title,o.innerText=e.description,i.innerHTML=e.rating,a.innerText=e.stock,s.innerText=e.category,d.innerText="Add to cart",n.append(c,r,o,i,a,s,d),t.append(n)})}((await n.json()).products)}()}t("display"),document.querySelector("#searchButton")?.addEventListener("click",()=>{t("search")});
//# sourceMappingURL=index.f739828c.js.map