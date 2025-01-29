function generateColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`
   }

const importantElement = document.getElementsByClassName('important');
importantElement[0].setAttribute("title", "This is an important item");

const allImg = document.querySelectorAll('img')

for (const img of allImg) {
    
    if (img.className === "important") {
        img.style.display = "none";
    }
}

const allP = document.querySelectorAll('p')

for (const p of allP) {
    if (p.className === '') {
        p.style.color = generateColor()
    }
    
};


