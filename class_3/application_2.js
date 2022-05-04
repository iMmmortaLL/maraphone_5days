const upBtn = document.querySelector(".up-button")
const downBtn = document.querySelector(".down-button")
const sideBar = document.querySelector(".sidebar")
const mainSlide = document.querySelector (".main-slide")
const container = document.querySelector(".container")
const slidesCount = mainSlide.querySelectorAll("div").length

let slideIndex = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener("click", () => {
    
    changePosition("up")
})
downBtn.addEventListener("click", ()=> {
    changePosition("down")
})

function changePosition (direction){
    if(direction ==="up"){
        slideIndex++
        if(slideIndex === slidesCount)
        {
            slideIndex = 0
        } 
        } else if (direction ==="down"){
        slideIndex--
        if(slideIndex <= 0) {
            slideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${slideIndex*height}px)`

    sideBar.style.transform = `translateY(${slideIndex*height}px)`
}