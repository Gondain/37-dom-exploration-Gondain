// const ol = document.querySelector('ol')
// const lastChild = ol.lastElementChild
// const firstChild = ol.firstElementChild
// firstChild.before(lastChild)
// console.log(ol)


const h2 = document.querySelectorAll('h2');
const div = document.querySelector('div');
const p = div.querySelector('p');
const section = document.querySelectorAll('section');
h2[1].after(h2[2]);
p.before(h2[1]);
section[2].remove();


