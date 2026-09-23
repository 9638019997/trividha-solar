(function(){const fmt=new Intl.NumberFormat('en-IN');const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));const root=document.documentElement;let testimonialTimer;function icons(){if(window.lucide&&lucide.createIcons)lucide.createIcons()}function year(){const el=$('#year');if(el)el.textContent=new Date().getFullYear()}function loader(){const l=$('#pageLoader');if(l)requestAnimationFrame(()=>l.classList.add('is-hidden'))}function theme(){const btn=$('#themeToggle');if(!btn)return;const saved=localStorage.getItem('trividha-theme');const prefer=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches;const t=saved||(prefer?'light':'dark');root.setAttribute('data-theme',t);btn.setAttribute('aria-pressed',String(t==='light'));const setIcon=()=>{btn.innerHTML=`<i data-lucide="${root.getAttribute('data-theme')==='light'?'moon-star':'sun-medium'}"></i>`;icons()};setIcon();btn.addEventListener('click',()=>{const n=root.getAttribute('data-theme')==='light'?'dark':'light';root.setAttribute('data-theme',n);localStorage.setItem('trividha-theme',n);btn.setAttribute('aria-pressed',String(n==='light'));setIcon()})}function nav(){const btn=$('#navToggle'),nav=$('#nav');if(!btn||!nav)return;const close=()=>{nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');btn.innerHTML='<i data-lucide="menu"></i>';icons()};btn.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));btn.innerHTML=`<i data-lucide="${open?'x':'menu'}"></i>`;icons()});nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});document.addEventListener('click',e=>{if(!nav.classList.contains('is-open'))return;if(!nav.contains(e.target)&&!btn.contains(e.target))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}function activeMenu(){const links=$$('.nav-link');if(!links.length)return;const sections=['home','about','services','process','calculator','surya-ghar','projects','testimonials','faq','contact'].map(id=>document.getElementById(id)).filter(Boolean);if('IntersectionObserver'in window){const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;links.forEach(a=>a.classList.remove('active'));const id=entry.target.id;const href=`/#${id}`;const link=links.find(a=>a.getAttribute('href')===href);if(link)link.classList.add('active');if(location.pathname==='/'&&id==='home'){const home=links.find(a=>a.getAttribute('href')==='/');home&&home.classList.add('active')}if(location.pathname.includes('about')&&id==='about'){const ab=links.find(a=>a.getAttribute('href')==='/about.html');ab&&ab.classList.add('active')}})},{rootMargin:'-35% 0px -55% 0px',threshold:.1});sections.forEach(s=>obs.observe(s))}const path=location.pathname;links.forEach(a=>{const href=a.getAttribute('href');if((path==='/'&&href==='/')||(path.includes('about')&&href==='/about.html'))a.setAttribute('aria-current','page')})}function validateField(el){if(!el)return true;let valid=true;let msg='';const name=el.id;const v=(el.value||'').trim();if(name==='name'&&v.length<2){valid=false;msg='Enter your name.'}if(name==='phone'&&!/^[6-9]\d{9}$/.test(v)){valid=false;msg='Enter a valid 10-digit Indian mobile number.'}if(name==='msg'&&v.length<10){valid=false;msg='Write at least 10 characters.'}el.setAttribute('aria-invalid',String(!valid));el.classList.toggle('invalid',!valid);return {valid,msg}}function calc(){const billEl=$('#bill'),tariffEl=$('#tariff'),offsetEl=$('#offset'),feedback=$('#calcFeedback');const bill=Number.parseFloat(billEl?.value||'0'),tariff=Number.parseFloat(tariffEl?.value||'8'),offset=Number.parseFloat(offsetEl?.value||'0.8');const errors=[];if(!billEl||bill<0)errors.push('Enter a valid bill amount.');if(!tariffEl||tariff<=0)errors.push('Enter a valid tariff.');if(errors.length){feedback&&(feedback.textContent=errors.join(' '));return}feedback&&(feedback.textContent='');const units=tariff>0?bill/tariff:0,target=units*offset,kw=Math.max(1,Math.round((target/120)*10)/10),save=bill*12*offset;$('#sizeOut')&&($('#sizeOut').textContent=`Recommended system: ${kw.toFixed(1)} kW`);$('#unitsOut')&&($('#unitsOut').textContent=`Monthly units estimate: ${Math.round(target)} units`);$('#saveOut')&&($('#saveOut').textContent=`Estimated yearly savings: ₹${fmt.format(Math.round(save))}`);const box=$('#saveOut')?.closest('.calc-result');box&&box.animate([{transform:'scale(.985)'},{transform:'scale(1)'}],{duration:240,easing:'ease-out'})}function form(){const f=$('#leadForm');if(!f)return;const fb=$('#formFeedback');['name','phone','msg'].forEach(id=>{const el=$('#'+id);el&&['input','blur'].forEach(evt=>el.addEventListener(evt,()=>{const res=validateField(el);if(!res.valid&&evt==='blur'&&fb)fb.textContent=res.msg}))});f.addEventListener('submit',e=>{e.preventDefault();const name=$('#name'),phone=$('#phone'),msg=$('#msg');const n=validateField(name),p=validateField(phone),m=validateField(msg);const errors=[n.msg,p.msg,m.msg].filter(Boolean);if(errors.length){fb&&(fb.textContent=errors[0]);return}fb&&(fb.textContent='');const text=encodeURIComponent(`Hello Trividha Solar,\nName: ${name.value.trim()}\nMobile: ${phone.value.trim()}\nMessage: ${msg.value.trim()}`);window.open(`https://wa.me/919999999999?text=${text}`,'_blank','noopener');f.reset();fb&&(fb.textContent='Thanks — opening WhatsApp with your message.')})}function reveal(){const els=$$('.reveal');if(!('IntersectionObserver'in window)){els.forEach(el=>el.classList.add('in-view'));return}const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');obs.unobserve(entry.target)}})},{threshold:.16});els.forEach(el=>obs.observe(el))}function count(){const els=$$('[data-counter]');if(!els.length)return;const run=el=>{const target=Number(el.getAttribute('data-target')||'0'),start=performance.now(),dur=1200;const tick=now=>{const p=Math.min((now-start)/dur,1),val=Math.floor(target*(.15+.85*p));el.firstChild.nodeValue=`${val}+`;p<1&&requestAnimationFrame(tick)};requestAnimationFrame(tick)};if(!('IntersectionObserver'in window)){els.forEach(run);return}const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){run(entry.target);obs.unobserve(entry.target)}})},{threshold:.45});els.forEach(el=>obs.observe(el))}function aosGsap(){if(window.AOS)AOS.init({duration:900,offset:120,once:true,easing:'ease-out-cubic'});if(window.gsap){gsap.from('.hero-copy',{y:26,opacity:0,duration:1,ease:'power3.out'});gsap.from('.hero-panel',{y:30,opacity:0,duration:1.05,delay:.08,ease:'power3.out'})}}function topBtn(){const btn=$('#topBtn');if(!btn)return;const onScroll=()=>btn.style.opacity=window.scrollY>500?'1':'0';btn.style.opacity='0';window.addEventListener('scroll',onScroll,{passive:true});onScroll()}function anchors(){$$('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{const id=a.getAttribute('href');if(id&&id.length>1)history.replaceState(null,'',id)}))}function testimonials(){const slider=$('#testimonialSlider');if(!slider)return;const cards=$$('.testimonial-card',slider);const prev=$('#testimonialPrev'),next=$('#testimonialNext'),dots=$('#testimonialDots');if(!cards.length)return;let index=0;const perView=()=>window.innerWidth<760?1:1;const slideWidth=()=>cards[0].getBoundingClientRect().width+16;const go=i=>{index=(i+cards.length)%cards.length;slider.scrollTo({left:index*slideWidth(),behavior:'smooth'});update()};const update=()=>{if(!dots)return;dots.innerHTML='';cards.forEach((_,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`Go to testimonial ${i+1}`);if(i===index)b.classList.add('is-active');b.addEventListener('click',()=>go(i));dots.appendChild(b)})};prev&&prev.addEventListener('click',()=>go(index-1));next&&next.addEventListener('click',()=>go(index+1));slider.addEventListener('scroll',()=>{const i=Math.round(slider.scrollLeft/slideWidth());if(i!==index){index=i;update()}},{passive:true});let paused=false;['mouseenter','focusin','touchstart'].forEach(evt=>slider.addEventListener(evt,()=>paused=true));['mouseleave','focusout','touchend'].forEach(evt=>slider.addEventListener(evt,()=>paused=false));clearInterval(testimonialTimer);testimonialTimer=setInterval(()=>{if(!paused)go(index+1)},5000);window.addEventListener('resize',()=>go(index),{passive:true});update()}function mapLazy(){const iframe=document.querySelector('.map-wrap iframe');if(iframe&&!iframe.getAttribute('loading'))iframe.setAttribute('loading','lazy')}document.addEventListener('DOMContentLoaded',()=>{year();loader();theme();nav();activeMenu();calc();form();reveal();count();anchors();topBtn();testimonials();mapLazy();icons();setTimeout(icons,250);aosGsap();['bill','tariff','offset'].forEach(id=>{const el=$('#'+id);el&&el.addEventListener('input',calc);el&&el.addEventListener('change',calc)});$$('[data-action="calculate"]').forEach(b=>b.addEventListener('click',calc));window.addEventListener('load',()=>{icons();aosGsap()})})})();
/* ================= HERO GSAP & CALCULATOR LOGIC ================= */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }, { passive: true });
  }

  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('[data-gsap="badge"]', { opacity: 0, y: -20, duration: 0.8, delay: 0.2 })
      .from('[data-gsap="title"]', { opacity: 0, y: 35, duration: 1 }, '-=0.5')
      .from('[data-gsap="subtitle"]', { opacity: 0, y: 20, duration: 0.7 }, '-=0.6')
      .from('[data-gsap="desc"]', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
      .from('[data-gsap="cta"]', { opacity: 0, scale: 0.95, duration: 0.6 }, '-=0.4')
      .from('[data-gsap="trust"] .trust-badge-item', { opacity: 0, y: 15, stagger: 0.12, duration: 0.6 }, '-=0.4')
      .from('#glassCalcCard', { opacity: 0, x: 40, duration: 1.1, ease: 'power2.out' }, '-=0.9');

    const hero = document.getElementById('hero');
    const card = document.getElementById('glassCalcCard');
    const sunGlow = document.getElementById('sunGlow');
    if (hero && card && sunGlow) {
      hero.addEventListener('mousemove', (e) => {
        const xOffset = (e.clientX / window.innerWidth - 0.5) * 20;
        const yOffset = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(card, { rotationY: xOffset * 0.4, rotationX: -yOffset * 0.4, transformPerspective: 1000, ease: 'power1.out', duration: 0.5 });
        gsap.to(sunGlow, { x: xOffset * 1.5, y: yOffset * 1.5, ease: 'power1.out', duration: 0.7 });
      });
    }
  }

  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    window.addEventListener('resize', () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.2
    }));
    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        ctx.fillStyle = `rgba(251, 191, 36, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  const slider = document.getElementById('billSlider');
  const billDisplay = document.getElementById('billDisplay');
  const outSize = document.getElementById('outSize');
  const outSubsidy = document.getElementById('outSubsidy');
  const outSaving = document.getElementById('outSaving');
  const outPayback = document.getElementById('outPayback');
  const propertyBtns = document.querySelectorAll('.property-btn');

  if (slider && billDisplay && outSize && outSubsidy && outSaving && outPayback) {
    let currentType = 'residential';
    function calculateSolar() {
      const monthlyBill = parseFloat(slider.value);
      billDisplay.textContent = monthlyBill.toLocaleString('en-IN');
      const monthlyUnits = monthlyBill / 7.2;
      let recKW = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);
      let subsidy = 0;
      if (currentType === 'residential') {
        if (recKW <= 1.5) subsidy = 30000;
        else if (recKW <= 2.5) subsidy = 60000;
        else subsidy = 78000;
      }
      const estimatedSaving = Math.round(monthlyBill * 0.90);
      const grossCost = recKW * 58000;
      const netCost = grossCost - subsidy;
      let paybackYears = (netCost / (estimatedSaving * 12)).toFixed(1);
      if (paybackYears < 2.2) paybackYears = 2.4;

      outSize.textContent = recKW.toFixed(1);
      outSubsidy.textContent = subsidy.toLocaleString('en-IN');
      outSaving.textContent = estimatedSaving.toLocaleString('en-IN');
      outPayback.textContent = paybackYears;
    }

    propertyBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        propertyBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentType = btn.dataset.type;
        calculateSolar();
      });
    });

    slider.addEventListener('input', calculateSolar);
    calculateSolar();
  }
});