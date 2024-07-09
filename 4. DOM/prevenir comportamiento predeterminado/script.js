const link = document.querySelector('a');
link.addEventListener("click", 
    (evento) => {console.log(evento);
    evento.preventDefault();
},
     true
    )