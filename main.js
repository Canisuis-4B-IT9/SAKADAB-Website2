





// Failed nav menu button

const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('.span');
const mobile_menu = document.querySelector('.mobile_menu');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
    ? 'close'
    : 'menu';
    
    mobile_menu.classlist.toggle('is-open');
})




// Back to top button

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}