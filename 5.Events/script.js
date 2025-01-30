const _initTime = Date.now()

function generateColor(){
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let code = "";
  for(let i=0; i<6; i++){
   code += hexArray[Math.floor(Math.random()*16)];
  }
  return `#${code}`
 }

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

let ul = document.querySelector("main section:last-of-type ul")
const clickOnSquare = (e) => {
  // console.log(e.target.classList[1])
  // console.log(getElapsedTime())
  let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0]; // body element
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare")
  newDiv.classList.add(e.target.classList[1])
  wrapper.appendChild(newDiv);
  const li = document.createElement('li')
  li.innerText = `[${getElapsedTime()}] Created a new ${e.target.classList[1]} square`
  ul.appendChild(li)
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

const body = document.querySelector('body')
document.addEventListener('keydown', function(event){
  if (event.code === "Space") {
    const color = generateColor()
    body.style.backgroundColor = color
    const li = document.createElement('li')
    li.innerText = `[${getElapsedTime()}] Change the background in ${color}`
    ul.appendChild(li)
  }
}) 

document.addEventListener('keydown', function(event){
  if (event.code === "KeyI") {
    ul.innerHTML = "";
  }
})

document.addEventListener('keydown', function(event){
  if (event.code === "KeyS") {
    const wrapper = document.getElementsByClassName('displayedsquare-wrapper')[0]
    wrapper.innerHTML = ""
  }
})


for (let displayedSquares of document.getElementsByClassName('displayedsquare-wrapper')) {
  displayedSquares.addEventListener('click', function(e) {
    alert (e.target.classList[1])
  })
}


// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color