const tabItem = document.querySelectorAll('.tabs-btn-item');
const tabContent = document.querySelectorAll('.tabs-content-item');

tabItem.forEach((elem) => {
  elem.addEventListener('click', open)
});

function open(event){
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;
  
  //tab buttons
  tabItem.forEach((item)=> {
    item.classList.remove('tabs-btn-item-active')
  });
  tabTarget.classList.add('tabs-btn-item-active');

  //tab content
  tabContent.forEach((item)=>{
    item.classList.remove('tabs-btn-item-active');
  });

  document.querySelector(`#${button}`).classList.add('tabs-btn-item-active')
}



const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});