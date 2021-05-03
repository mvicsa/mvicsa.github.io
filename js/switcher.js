const colorStyle = document.getElementById('color'),
      switcher = document.querySelector('.switcher'),
      switchSetting = document.querySelector('.switcher .settings'),
      switchColors = document.querySelector('.switcher .switcher-colors');


switchSetting.onclick = () => {
      
  switcher.classList.toggle('active');

};

switchColors.children.forEach((el) => {

  let color = el.children[0].className;

  el.onclick = () => {


    colorStyle.href = `css/colors/${color}.css`;
    document.cookie = `color=${color};expires=31 Dec 2025 23:59:59`;
    
  };

  if (document.cookie.indexOf(`${color}`) != -1) {
    
    colorStyle.href = `css/colors/${color}.css`;

  }

});
