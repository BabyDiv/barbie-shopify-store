document.querySelectorAll('.has-dropdown').forEach((item) => {
  let itemSub = item.parentElement.querySelector('.item__sub');
  
  item.addEventListener('mouseenter', () => {
    itemSub?.classList.remove('visibility-hidden');

  });

  item.addEventListener('mouseleave', () => {
    itemSub?.classList.add('visibility-hidden');
  });
});

let burger = document.getElementById('burger');
let navList = document.querySelector('.nav__list');
let burgerIcon = document.querySelector('.burger__icon');
let burgerCross = document.querySelector('.burger__cross');

burger.addEventListener('click', () => {
  navList.classList.toggle('hidden');
  burgerIcon.classList.toggle('hidden');
  burgerCross.classList.toggle('hidden');
})


  
console.log('index.js загружен 🎉');


