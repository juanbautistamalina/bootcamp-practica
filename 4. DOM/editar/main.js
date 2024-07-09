/*
1. Selecciona el elemento 'ul' dentro del elemento 'nav' que es único en pagina web 
y guárdalo en la variable 'navegación'. 
2. Después crea un elemento 'li' y guárdalo en la variable 'info'.
3. Asigna el texto 'Más información' a la variable 'info'.
4. Por último inserta la variable 'info' en la variable 'navegación'. Usa comillas simples.
 */

const navegacion = document.querySelector("ul");
const a = document.createElement("a");
const info = document.createElement("li");
a.innerText = "Más Información";
a.href = "#informacion"
info.appendChild(a);
navegacion.appendChild(info);