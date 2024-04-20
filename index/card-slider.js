const productContainers = [...document.querySelectorAll('.place-container')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach ((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        console.log(i);
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;

    })
})
