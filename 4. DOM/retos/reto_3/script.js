const header = document.querySelector("header");
const botones = document.querySelectorAll("button");

botones[0].addEventListener("click", () => { agregarCarrito(0); });
botones[1].addEventListener("click", () => { agregarCarrito(1); });
botones[2].addEventListener("click", () => { agregarCarrito(2); });

function agregarCarrito(index) {
    let producto = document.querySelectorAll(".producto")[index];
    let content = producto.innerHTML;
    let notificacion = document.createElement("DIV");
    notificacion.classList.add("notificacion");
    notificacion.innerText = `Producto agregado al carrito: ${content}`;

    let x = document.createElement("SPAN");
    x.classList.add("close");
    x.innerText = "x"
    notificacion.appendChild(x);
    header.appendChild(notificacion);


    x.onclick = function(){
        notificacion.remove()
    }

}
