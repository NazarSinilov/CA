const img = document.querySelector('img');
console.log(img);
img.addEventListener('click' , () => {
  if (img.className) {
    img.classList.remove('img');
  } else {
    img.classList.add('img');
  }
})