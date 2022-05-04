const board = document.querySelector("#board")
const colors =  ["#FF9C66","#FFCD70","#E89F51","#E86D51",
"#FF5C59","#FF7170","#FF71D2","#FFDC59"]
const SQUARES_NUMBER = 1000
for (let i = 0; i < SQUARES_NUMBER; i++ ){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", setColor )

    square.addEventListener("mouseleave", removeColor)

    board.append(square)
}

function setColor (event) {
    element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 
    0 0 10px ${color}`
}

function removeColor (event) {
    element = event.target
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(){
    return colors[Math.floor(Math.random() * 
        colors.length)]
}