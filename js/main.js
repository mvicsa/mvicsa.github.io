/********************
*     Fixed Nav     *
********************/
let mainHeader = document.querySelector('header.main'),
    mainNav = document.querySelector('.navigation');

let fixedNav = () => {

  let winScrollTop = document.documentElement.scrollTop;

  if (winScrollTop >= 400) {

    mainNav.classList.add('scrolling');

  } else {

    mainNav.classList.remove('scrolling');

  }

}

window.addEventListener('scroll', fixedNav);
window.addEventListener('load', fixedNav);

/********************
*  Sections Active  *
********************/
let sections = document.querySelectorAll('body section'),
    navList = document.getElementById('navlist');

function sectionActive() {

  let winScrollTop = document.documentElement.scrollTop;

  sections.forEach((el, index) => {

    if (
      winScrollTop >= (el.offsetTop - 80) && 
      winScrollTop <= el.offsetTop + el.offsetHeight
    ) {

      let current = document.getElementById(el.getAttribute('data-target'));

      for (i = 0; i < navList.children.length; i++) {

        navList.children[i].classList.remove('active');

      }

      current.classList.add('active');

    }

    // Animations
    if (
      winScrollTop >= (el.offsetTop - 440) && 
      winScrollTop <= el.offsetTop + el.offsetHeight
    ) {

      if (index == 0) {


        for(i = 0; i < el.children[0].children[0].children.length; i++) {

          el.children[0].children[0].children[i].classList.add('active');

        }

        el.children[0].children[0].children[0].classList.add('animate__rollIn');
        el.children[0].children[0].children[1].classList.add('animate__fadeInDown');
      
      }

      if (index == 1) {


        for(i = 0; i < el.children[0].children[1].children.length; i++) {

          el.children[0].children[1].children[i].classList.add('active');

        }
      
      }

      if (index == 2) {


        for(i = 0; i < el.children[1].children.length; i++) {

          el.children[1].children[i].classList.add('active');

        }

        el.children[1].children[0].classList.add('animate__lightSpeedInLeft');
        el.children[1].children[1].classList.add('animate__rotateIn');
        el.children[1].children[2].classList.add('animate__lightSpeedInRight');
//         el.children[1].children[3].classList.add('animate__lightSpeedInLeft');
        

      }
    
    }
  
  });

  if (winScrollTop < sections[0].offsetTop - 80) {

    for (i = 0; i < navList.children.length; i++) {

      navList.children[i].classList.remove('active');

    }

    navList.children[0].classList.add('active');

  }

}

window.addEventListener('scroll', sectionActive);
window.addEventListener('load', sectionActive);

navList.children[0].onclick = function () { 
  document.documentElement.scrollTop = 0;
}
navList.children[1].onclick = function () { 

  document.documentElement.scrollTop = sections[0].offsetTop - 80;

}
navList.children[2].onclick = function () { 

  document.documentElement.scrollTop = sections[1].offsetTop - 80;

}
navList.children[3].onclick = function () { 

  document.documentElement.scrollTop = sections[2].offsetTop - 80;

}

/****************
*    Nav Mob    *
****************/
let menuBTN = document.querySelector('.navigation .menu i'),
    navMenu = document.querySelector('.navigation .links'),
    menuClose = document.querySelector('.navigation .links .close');

menuBTN.onclick = () => navMenu.classList.add('active');
menuClose.onclick = () => navMenu.classList.remove('active');

navMenu.children[0].children.forEach((el) => {

  let func = () => navMenu.classList.remove('active');

  el.addEventListener('click', func);

});

/****************
*     Popup     *
****************/
let workSection = document.querySelector('section.work'),
    workItems = workSection.children[1],
    popup = document.querySelector('.popup'),
    popupClose = document.querySelectorAll('.popup .close'),
    popupOver = document.querySelectorAll('.popup .overlay');

workItems.children.forEach((el, index) => {

  if (!el.children[0].classList.contains('soon')) {

    el.onclick = () => popup.children[index].classList.add('active');

  }

});

popupClose.forEach((el) => {

  el.onclick = () => el.parentNode.parentNode.parentNode.classList.remove('active');

});

popupOver.forEach((el) => {

  el.onclick = () => { 

    el.parentNode.classList.remove('active'); 
    el.parentNode.classList.remove('animate__zoomIn'); 
  
  };

});

/***************
*    Go Top    *
***************/
let goTop = document.querySelector('.gotop');

let gotoTop = () => {

  if (document.documentElement.scrollTop >= 400) {

    goTop.classList.add('active');

  } else {

    goTop.classList.remove('active');

  }

  goTop.onclick = () => document.documentElement.scrollTop = 0;

}

window.addEventListener('scroll', gotoTop);
window.addEventListener('load', gotoTop);
