const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
   const pageOffset = window.scrollY; 

   sections.forEach(section => {
      let sectionHeight = section.offsetHeight;
      let sectionTop = section.offsetTop - 100;
      let sectionID = section.getAttribute('id');

      if (pageOffset > sectionTop && pageOffset <= sectionTop + sectionHeight) {
         document.querySelector('.nav__menu-item a[href*="' + sectionID + '"]').parentElement.classList.add('active');
      } else {
         document.querySelector('.nav__menu-item a[href*="' + sectionID + '"]').parentElement.classList.remove('active');
      }
   })
})

const worksGalleryItems = document.querySelectorAll(".work__img");

let counterArray = new Array(worksGalleryItems.length);
counterArray = counterArray.fill(0, 0, worksGalleryItems.length);

worksGalleryItems.forEach((item, index) => {
   item.addEventListener('click', () => {
      counterArray[index]++;

      item.style.order = "-" +  counterArray[index];
   })
})


const availableClassNames = ['bxs-moon', 'bxs-sun'];
const colorModeBtn = document.querySelector(".nav__menu-item > i");
const body = document.querySelector("body");
const header = document.querySelector("header");
const allTextTags = document.querySelectorAll("a");
const skills = document.querySelectorAll(".skills-data");
const backgroundColor = "#222831";
const textColor = "#F6F1F1";
const navBackgroundColor = "#393E46";
const contactInputs = document.querySelectorAll(".contact__form > .contact__input");
let theme = localStorage.getItem("theme");
let burgerMenu = document.querySelector(".nav__toggle");

loadPreferences(theme);

colorModeBtn.addEventListener('click', (e) => {
   e.preventDefault(); 
   
   if (colorModeBtn.classList[1] === 'bxs-moon') { 
      colorModeBtn.classList.remove(availableClassNames[0]);
      colorModeBtn.classList.add(availableClassNames[1]);
      applyDarkThemeStyles();
      localStorage.setItem("theme", "dark");
      theme = "dark";
   } else {
      colorModeBtn.classList.remove(availableClassNames[1]);
      colorModeBtn.classList.add(availableClassNames[0]);
      applyLightThemeStyles();
      localStorage.setItem("theme", "light");
      theme = "light";
   }
})

function applyDarkThemeStyles() {
   body.style.background = backgroundColor;
   body.style.color = textColor;
   body.style.transition = "background 1s ease-in, color 1s ease-in";
   header.style.background = navBackgroundColor;
   header.style.transition = "background 1s ease-in";
   allTextTags.forEach(item => {
      item.style.color = textColor;
   });
   skills.forEach(item => {
      item.style.background = `lighten(${backgroundColor}, 100%)`;
      item.style.boxShadow = '0px 4px 25px rgba(255, 255, 255, 0.15)';
   });
   contactInputs.forEach(item => {
      item.style.background = backgroundColor; 
      item.style.color = textColor;
      item.style.border = "1.5px solid " + textColor + "50";
      item.style.transition = "background 1s ease-in, color 1s ease-in, box-shadow 0.5s ease-in-out, border 0.5s ease-in-out";
   })
}

contactInputs.forEach(item => {
   item.addEventListener('focusin', () => {
      item.style.border = "";
   })

   item.addEventListener('focusout', () => {
      if (theme === "dark") {
         item.style.border = "1.5px solid " + textColor + "50";
      }

      if (theme === "light") {
         item.style.border = "";
      }
   })
})

let isOpen = false;

burgerMenu.addEventListener('click', (e) => {
   e.preventDefault(); 

   const menu = document.querySelector(".nav__menu");
   if (!isOpen) {
      menu.style.right = "0";
      isOpen = true;
   } else {
      menu.style.right = "-100%";
      isOpen = false;
   }
})

function applyLightThemeStyles() {
   body.style.background = "";
   body.style.color = "";
   header.style.background = "";
   header.style.color = "";
   allTextTags.forEach(item => {
      item.style.color = "";
   })
   skills.forEach(item => {
      item.style.background = ``;
      item.style.boxShadow = '';
   })
   contactInputs.forEach(item => {
      item.style.background = ""; 
      item.style.color = "";
      item.style.border = "";
   })
}

function loadPreferences(theme) {
   if (theme === "dark") {
      colorModeBtn.classList.remove(availableClassNames[0]);
      colorModeBtn.classList.add(availableClassNames[1]);
      applyDarkThemeStyles(); 
   } else if(theme === "light") {
      colorModeBtn.classList.remove(availableClassNames[1]);
      colorModeBtn.classList.add(availableClassNames[0]);
      applyLightThemeStyles();
   }
}

// De implementat scrollReveal
// De adaugat site-ul la google analytics
// De scris documentatia

// SCROLL REVEAL ANIMATION 

const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
   delay: 200,
//     reset: true
});

scrollReveal.reveal('.home-data, .about-data__img, .skills-text__header, .skills-text__subtext',{}); 
scrollReveal.reveal('.home__img, .about-text__subtext, .about-text',{delay: 400}); 
scrollReveal.reveal('.home__social-icon',{ interval: 200}); 
scrollReveal.reveal('.skills-data, .skills__img, .work__img, .contact__input',{interval: 200});

var typeEffect = new Typed("#header-text", {
   strings: [`Hi, ^250<br>I'am <span class="home-text__header_colored">Cristian</span>^350
   <br>Web Developer`],
   startDelay: 1500, 
   typeSpeed: 75,   
   showCursor: false
})

