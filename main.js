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