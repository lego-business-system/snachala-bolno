
const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav');
if(burger&&nav){burger.addEventListener('click',()=>nav.classList.toggle('open'));}
const lightbox=document.getElementById('lightbox');
if(lightbox){
 const img=lightbox.querySelector('img');
 const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');img.removeAttribute('src');document.body.style.overflow='';};
 document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();img.src=el.dataset.lightbox||el.href;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}));
 lightbox.addEventListener('click',e=>{if(e.target===lightbox||e.target.classList.contains('lightbox-close'))close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
