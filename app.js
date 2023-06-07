const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const sidebarCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(sidebarCount - 1) * 100}vh`

upButton.addEventListener('click', () => {
    changeSlide('up')
})

downButton.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === sidebarCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = sidebarCount - 1
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}