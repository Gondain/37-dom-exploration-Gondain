const myTitle = document.querySelector('title')
myTitle.innerHTML = "Modifying the DOM"
console.log (myTitle)

document.body.style.backgroundColor = "#FF69B4"

for (const child of document.body.children) {
    console.log(child.tagName)
}