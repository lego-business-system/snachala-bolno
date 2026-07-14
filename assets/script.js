const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav');
if(burger&&nav){
 burger.setAttribute('aria-expanded','false');
 burger.addEventListener('click',()=>{
   const open=nav.classList.toggle('open');
   burger.setAttribute('aria-expanded',String(open));
   burger.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');
 });
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
   nav.classList.remove('open');
   burger.setAttribute('aria-expanded','false');
   burger.setAttribute('aria-label','Открыть меню');
 }));
 document.addEventListener('click',e=>{
   if(nav.classList.contains('open')&&!nav.contains(e.target)&&!burger.contains(e.target)){
     nav.classList.remove('open');
     burger.setAttribute('aria-expanded','false');
     burger.setAttribute('aria-label','Открыть меню');
   }
 });
}

const lightbox=document.getElementById('lightbox');
if(lightbox){
 const img=lightbox.querySelector('img');
 const closeButton=lightbox.querySelector('.lightbox-close');
 let opener=null;
 const close=()=>{
   if(!lightbox.classList.contains('open')) return;
   lightbox.classList.remove('open');
   lightbox.setAttribute('aria-hidden','true');
   img.removeAttribute('src');
   document.body.style.overflow='';
   if(opener&&typeof opener.focus==='function') opener.focus({preventScroll:true});
   opener=null;
 };
 document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',e=>{
   e.preventDefault();
   opener=el;
   img.src=el.dataset.lightbox||el.href;
   lightbox.classList.add('open');
   lightbox.setAttribute('aria-hidden','false');
   document.body.style.overflow='hidden';
   requestAnimationFrame(()=>closeButton&&closeButton.focus({preventScroll:true}));
 }));
 if(closeButton) closeButton.addEventListener('click',close);
 lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
