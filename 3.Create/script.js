function generateColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`
   }


function createLearner(name) {
    let section = document.createElement('section')
    section.style.backgroundColor = generateColor()
    

    let p = document.createElement('p')
    p.innerText = name

    console.log(getComputedStyle(section))

    if (section.style.backgroundColor > 128) {
        p.style.color = "#FFFFFF"
    } else {
        p.style.color = "#000000"
    }

    section.appendChild(p);
    document.querySelector('article').appendChild(section);
}




createLearner("Quentin Balon")
createLearner("Bastien Morrier")




