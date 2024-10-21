
    const dropdownMenu = document.getElementById('dropdownMenu')
    const dropdownButton = document.getElementById('dropdownButton');
    const parentElement = document.querySelector('.group');
  
    parentElement.addEventListener('mouseenter', () => {
      dropdownMenu.classList.remove('hidden', 'animate-fadeOutDown');
      dropdownMenu.classList.add('animate-fadeInUp');
      dropdownButton.classList.add('text-green');
    });
  
  dropdownMenu.addEventListener('mouseenter', () => {
    dropdownButton.classList.add('text-green');
    });
  
  
    parentElement.addEventListener('mouseleave', () => {

            dropdownMenu.classList.remove('animate-fadeInUp');
            dropdownMenu.classList.add('animate-fadeOutDown');
            dropdownButton.classList.remove('text-green');
  
        setTimeout(()=>{
            dropdownMenu.classList.add('hidden');
        },300)  
    });
  
    dropdownMenu.addEventListener('mouseleave', () => {
      dropdownMenu.classList.remove('animate-fadeInUp');
      dropdownMenu.classList.add('animate-fadeOutDown');
      dropdownButton.classList.remove('text-green');
      
      
      setTimeout(() => {
        dropdownMenu.classList.add('hidden');
      }, 400); 
    });

    function updateCounter(counterElement, targetValue) {
        let currentValue = 0;
        const duration = 2000;
        const increment = Math.ceil(targetValue / (duration / 50));
      
        function step() {
          if (currentValue < targetValue) {
            currentValue += increment;
            counterElement.textContent = Math.min(currentValue, targetValue).toLocaleString();
            setTimeout(step, 50);
          }
        }
      
        step();
      }
      
      function observeCounters() {
        const counters = document.querySelectorAll('[id^="counter"]');
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const counter = entry.target;
              const targetValue = parseInt(counter.getAttribute('data-target'), 10);
              updateCounter(counter, targetValue);
              observer.unobserve(counter); 
            }
          });
        }, { threshold: 0.5 }); 
      
        counters.forEach(counter => observer.observe(counter));
      }
      
      document.addEventListener('DOMContentLoaded', () => {
        observeCounters();
      });
      
    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
    });
    const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(accordion => {
    const trigger = accordion.querySelector('.accordion-trigger');
    const content = accordion.querySelector('.accordion-content');
    const arrow = trigger.querySelector('svg');

    trigger.addEventListener('click', () => {
        accordion.classList.toggle('accordion-active');
        arrow.classList.toggle('rotate-180');
    });
});

var swiper = new Swiper(".postcarousal", {
  slidesPerView: 1, 
  spaceBetween: 20, 
  loop:true,
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,
  },

  breakpoints: {
    1024: {
      slidesPerView: 3, 
    },
    768: {
      slidesPerView: 2, 
    },
   
  },
      navigation: {
        nextEl: ".post-button-next",
        prevEl: ".post-button-prev",
      },
    });
  
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('header');
        let lastScrollY = window.scrollY;
  
        window.addEventListener('scroll', () => {
          if (window.scrollY > lastScrollY) {
            
            header.style.transform = 'translateY(-100%)';
          } else {
            
            header.style.transform = 'translateY(0)';
          }
          lastScrollY = window.scrollY;
        });
      });
      document.addEventListener('DOMContentLoaded', function() {
        
        gsap.registerPlugin(ScrollTrigger);
    
        
        gsap.from("#award-heading", {
          scrollTrigger: {
            trigger: "#award-heading",
            start: "top 80%",      
            toggleActions: "play none none none",
          },
          opacity: 0,              
          y: 50,                   
          duration: 1,             
          ease: "power3.out",
          delay: 0.5    
        });
        gsap.from("#Digital-heading", {
          scrollTrigger: {
            trigger: "#Digital-heading",
            start: "top 80%",      
            toggleActions: "play none none none",
          },
          opacity: 0,              
          y: 50,                   
          duration: 1,             
          ease: "power3.out",
          delay: 0.9  
        });
        gsap.from(".first-section-p", {
          scrollTrigger: {
            trigger: ".first-section-p",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 50,                   
          duration: 1,             
          ease: "power3.out"
        });
        gsap.from("#first-section-button", {
          scrollTrigger: {
            trigger: "#first-section-button",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 50,                   
          duration: 1,             
          ease: "power3.out"
        });
        gsap.from("#images-first-section", {
          scrollTrigger: {
            trigger: "#images-first-section",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 50,                   
          duration: 1,             
          ease: "power3.out",
          scale:0.2
        });
        gsap.from("#third-section", {
          scrollTrigger: {
            trigger: "#third-section",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 50,                   
          duration: 1,             
          ease: "power3.out",
        });
        gsap.from("#why-choose-us-small-text", {
          scrollTrigger: {
            trigger: "#why-choose-us-small-text",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 100,
          opacity:0,                   
          duration: 1,             
          ease: "power3.out",
          stagger:0.2
        });
        gsap.from("#testimonial-skider", {
          scrollTrigger: {
            trigger: "#testimonial-skider",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 100,
          opacity:0,                   
          duration: 1,             
          ease: "power3.out"
        });
        gsap.from("#QNA", {
          scrollTrigger: {
            trigger: "#QNA",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 100,
          opacity:0,                   
          duration: 1,             
          ease: "power3.out",
          stagger:0.4
        });
        gsap.from("#post", {
          scrollTrigger: {
            trigger: "#post",
            start: "top 80%",      
            toggleActions: "play none none none",
          },              
          y: 100,
          opacity:0,                   
          duration: 1,             
          ease: "power3.out",
          stagger:0.4
        });
        gsap.to(".progress-bar", {
          width: "80%", 
          duration: 2, 
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".progress-section",
            start: "top 80%", 
            toggleActions: "play none none none",
          },
        });
        gsap.to(".progress-bar2", {
          width: "90%", 
          duration: 2, 
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".progress-section2",
            start: "top 80%", 
            toggleActions: "play none none none",
          },
        });
        gsap.to(".progress-bar3", {
          width: "95%", 
          duration: 2, 
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".progress-section3",
            start: "top 80%", 
            toggleActions: "play none none none",
          },
        });

      });



    
  var swiper = new Swiper('.hero-slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero-button-next',
      prevEl: '.hero-button-prev',
    },
  });

  const tabHeadings = document.querySelectorAll('.tab-heading');
  const tabBackground = document.getElementById('tab-bg');
  const tabContent1 = document.getElementById('tab1-content');
  const tabContent2 = document.getElementById('tab2-content');

  
  tabHeadings.forEach((heading) => {
    heading.addEventListener('click', () => {
      
      const tab = heading.dataset.tab;
      if (tab === 'tab1') {
        tabBackground.style.left = '0'; 
      } else {
        tabBackground.style.left = '50%';
      }

      if (tab === 'tab1') {
        tabContent1.classList.remove('hidden');
        tabContent2.classList.add('hidden');
      } else {
        tabContent1.classList.add('hidden');
        tabContent2.classList.remove('hidden');
      }
    });
  });

