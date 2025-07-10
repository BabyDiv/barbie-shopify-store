document.querySelectorAll('.has-dropdown').forEach((item) => {
  let itemSub = item.parentElement.querySelector('.js-item-sub');
  
  item.addEventListener('mouseenter', () => {
    itemSub?.classList.remove('visibility-hidden');

  });

  item.addEventListener('mouseleave', () => {
    itemSub?.classList.add('visibility-hidden');
  });
});

document.querySelectorAll('.js-item-sub li.has-dropdown').forEach((subItem) => {
  const itemSubSub = subItem.querySelector('.js-item-sub_sub');

  subItem.addEventListener('mouseenter', () => {
    itemSubSub?.classList.remove('visibility-hidden');
  });

  subItem.addEventListener('mouseleave', () => {
    itemSubSub?.classList.add('visibility-hidden');
  });
});

document.querySelectorAll('.js-item-footer.has-dropdown').forEach((item) => {
  const itemUl = item.querySelector('.js-item-ul');

  item.addEventListener('mouseenter', () => {
    itemUl?.classList.remove('visibility-hidden');
  });

  item.addEventListener('mouseleave', () => {
    itemUl?.classList.add('visibility-hidden');
  });
});

let burger = document.getElementById('burger');
let navList = document.querySelector('.js-nav-list');
let burgerIcon = document.querySelector('.js-burger-icon');
let burgerCross = document.querySelector('.js-burger-cross');

burger.addEventListener('click', () => {
  navList.classList.toggle('hidden');
  burgerIcon.classList.toggle('hidden');
  burgerCross.classList.toggle('hidden');
})


  
console.log('index.js загружен 🎉');

// let array = [
//   {
//     text: "Hello",
//     url: "https://yandex.ru/search?lr=194",
//     links: [
//       {
//         text: "Masha",
//         url: "masha.com"
//       },
//       { 
//         text: "Vanya",
//         url: "Vanya.com"
//       },
//       {
//         text: "Kesha",
//         url: "InnokentiyTheGreat.com"
//       }
//     ]
//   },
//   {
//     "text": "Whatsup",
//     "url": "https://www.google.co.uk/"
//   },
//   {
//     "text": "Goodbye",
//     "url": "https://www.pornhub.com"
//   }
// ];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i].text);
//   console.log(array[i].url)
// }

// array[0].links.forEach(link => {
//   console.log(link.text),
//   console.log(link.url)
// })


