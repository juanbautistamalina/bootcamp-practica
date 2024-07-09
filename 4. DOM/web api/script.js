let inicio = performance.now();
let fragmento = document.createDocumentFragment()
for(let i = 0; i<100; i++){
    let img = document.createElement("p");
    img.innerText = "aaa"
    fragmento.appendChild(img)
}
document.body.appendChild(fragmento);

let final = performance.now();
console.log(final-inicio)