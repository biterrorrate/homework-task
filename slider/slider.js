const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const slider = document.querySelector('.slider')
const item = document.querySelector(".item");
const items = document.querySelectorAll('.item')

const itemWidth = getComputedStyle(item).width;
let currentRight = 0;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (items.length - preShownItems) * step;
const minRight = 0;


rightBtn.addEventListener ('click', e => {
     e.preventDefault()

     slider.style.right = currentRight;
     if(currentRight < maxRight){
        currentRight += step;
        slider.style.right = `${currentRight}px`
     }


 })

 leftBtn.addEventListener ('click', e => {
    e.preventDefault()

    slider.style.right = currentRight;
    if(currentRight > minRight){
       currentRight -= step;
       slider.style.right = `${currentRight}px`
    }


})