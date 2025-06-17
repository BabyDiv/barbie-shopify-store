document.querySelectorAll('.has-dropdown').forEach((item) => {
  let itemSub = item.parentElement.querySelector('.item__sub');
  
  item.addEventListener('mouseenter', () => {
    itemSub?.classList.remove('visibility-hidden');

  });

  item.addEventListener('mouseleave', () => {
    itemSub?.classList.add('visibility-hidden');
  });
});

document.querySelectorAll('.item__sub li.has-dropdown').forEach((subItem) => {
  const itemSubSub = subItem.querySelector('.item__sub_sub');

  subItem.addEventListener('mouseenter', () => {
    itemSubSub?.classList.remove('visibility-hidden');
  });

  subItem.addEventListener('mouseleave', () => {
    itemSubSub?.classList.add('visibility-hidden');
  });
});

document.querySelectorAll('.item__footer.has-dropdown').forEach((item) => {
  const itemUl = item.querySelector('.item__ul');

  item.addEventListener('mouseenter', () => {
    itemUl?.classList.remove('visibility-hidden');
  });

  item.addEventListener('mouseleave', () => {
    itemUl?.classList.add('visibility-hidden');
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


