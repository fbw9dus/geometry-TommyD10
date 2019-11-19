var circle = {
  size: 60,
  color: "cyan"
}

var rectangle = {
  size: 40,
  color: "blue"
}

var parallelogram = {
  width: 70,
  height: 40,
  color: "red"
}




var erste = document.querySelector(".board")

var circle1 = document.createElement("div")
var rectangle1 = document.createElement("div")
var parallelogram1 = document.createElement("div")
var spaceInvader = document.createElement("div")
var eggy = document.createElement("div")
var moony = document.createElement("div")

erste.appendChild(circle1)
erste.appendChild(rectangle1)
erste.appendChild(parallelogram1)
erste.appendChild(spaceInvader)
erste.appendChild(eggy)
erste.appendChild(moony)

moony.classList.add("moon")
spaceInvader.classList.add("space-invader")
circle1.classList.add("circle")
rectangle1.classList.add("rectangle")
parallelogram1.classList.add("parallelogram")
eggy.classList.add("egg")

circle1.style.width = circle.size + "px"
circle1.style.height = circle.size + "px"
circle1.style.backgroundColor = circle.color

rectangle1.style.width = rectangle.size + "px"
rectangle1.style.height = rectangle.size + "px"
rectangle1.style.backgroundColor = rectangle.color

parallelogram1.style.width = parallelogram.width + "px"
parallelogram1.style.height = parallelogram.height + "px"
parallelogram1.style.backgroundColor = parallelogram.color

eggy.style.width = "150px"
eggy.style.height= "200px"
eggy.style.backgroundColor = "yellow"

moony.style.width = "200px"
moony.style.height = "200px"
