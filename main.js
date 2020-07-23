'use strict';
{

  const pic0 = document.querySelector('.thumbnails').querySelector('.pic0').querySelector('img');
  pic0.addEventListener('click', () => {
    document.querySelector('.main img').src = pic0.getAttribute('src');
  });

  const pic1 = document.querySelector('.thumbnails').querySelector('.pic1').querySelector('img');
  pic1.addEventListener('click', () => {
    document.querySelector('.main img').src = pic1.getAttribute('src');
  });

  const pic2 = document.querySelector('.thumbnails').querySelector('.pic2').querySelector('img');
  pic2.addEventListener('click', () => {
    document.querySelector('.main img').src = pic2.getAttribute('src');
  });

  const pic3 = document.querySelector('.thumbnails').querySelector('.pic3').querySelector('img');
  pic3.addEventListener('click', () => {
    document.querySelector('.main img').src = pic3.getAttribute('src');
  });
  



  // const images = [
  //   'img/pic00.png',
  //   'img/pic01.png',
  //   'img/pic02.png',
  //   'img/pic03.png',
  //   'img/pic04.png',
  // ];

  // let currentNum = 0;
  // function setMainImage(image) {
  //   document.querySelector('main img').src = image;
  // }

  // setMainImage(images[currentNum]);

  // function removeCurrentClass() {
  //   document.querySelectorAll('.thumbnails li')[currentNum]
  //     .classList.remove('current');
  // }
 
  // function addCurrentClass() {
  //   document.querySelectorAll('.thumbnails li')[currentNum]
  //     .classList.add('current');
  // }
 
  // const thumbnails = document.querySelector('.thumbnails');
  // images.forEach((image, index) => {
  //   const li = document.createElement('li');
  //   if (index === currentNum) {
  //     li.classList.add('current');
  //   }
 
  //   li.addEventListener('click', () => {
  //     setMainImage(image);
  //     removeCurrentClass();
  //     currentNum = index;
  //     addCurrentClass();
  //   });
 
  //   const img = document.createElement('img');
  //   img.src = image;
  //   li.appendChild(img);
  //   thumbnails.appendChild(li);
  // });


}