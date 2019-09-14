const $ = n => document.querySelector(n);
const log = n => console.log(n);

const imageCardArr = document.querySelectorAll('.image');
const imageArr = ['01.jpeg', '02.jpeg', '03.jpeg']

imageCardArr.forEach((image, index) => {
  // image.style.backgroundImage = url(`../lesson/images/${imageArr[index]}`)
  log(image.style.backgroundImage)
})