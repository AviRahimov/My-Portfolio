import"./Layout.astro_astro_type_script_index_0_lang.C_vkfgQ_.js";const o=document.getElementById("contact-form"),r=document.getElementById("submit-btn"),s=document.getElementById("form-status");o?.addEventListener("submit",async e=>{e.preventDefault();const t=r.innerHTML;r.innerHTML=`
      <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
      <span>Sending...</span>
    `,r.disabled=!0;try{const n=new FormData(o);if((await fetch(o.action,{method:"POST",body:n,headers:{Accept:"application/json"}})).ok)s.className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400",s.innerHTML=`
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>Thank you! Your message has been sent successfully. I'll get back to you soon!</span>
          </div>
        `,o.reset();else throw new Error("Failed to send message")}catch{s.className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400",s.innerHTML=`
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span>Oops! There was an error sending your message. Please try again or email me directly.</span>
        </div>
      `}finally{r.innerHTML=t,r.disabled=!1,s.classList.remove("hidden"),s.scrollIntoView({behavior:"smooth",block:"center"})}});const a={threshold:.1,rootMargin:"0px 0px -50px 0px"},i=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.style.opacity="1",t.target.style.transform="translateY(0)")})},a);document.querySelectorAll(".hover-glow").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(30px)",e.style.transition="opacity 0.6s ease, transform 0.6s ease",i.observe(e)});
