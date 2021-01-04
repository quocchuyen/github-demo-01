const stage = document.querySelector('.owl-stage')
const prev = document.querySelector('.owl-prev')
const next = document.querySelector('.owl-next') 
const items = document.querySelectorAll('.owl-item')
let count = 0
const changePosition = val => {
    stage.style.transform = `translate3d(${val*count}px, 0px, 0px)`
}
prev.addEventListener('click', ()=> {
    count < 1 ? -1 : count--,changePosition(-250)
})

next.addEventListener('click', ()=>  {
    count > 2  ? -1 : count++,changePosition(-250)
})
