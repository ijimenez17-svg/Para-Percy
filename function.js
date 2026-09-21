const girasol = "girasol.png"
const jardin = document.getElementById("jardin")
const boton = document.getElementById("boton")
const nube = document.getElementById("nube")
const rutaNube = "nube.png";
const rutacorazon = "corazon.png"; 
let contador = 0

const palabras = ["WOOF WOOF","Te quiero mucho","Lindura","El amor de mi vida","Bello","Mi vida"]

function crearNube() {
    const nuevaNube = document.createElement("img");
    nuevaNube.src = rutaNube;
    nuevaNube.alt = "Nube flotando";
    nuevaNube.classList.add("nube");

    // Opcional: Hacer que aparezcan a alturas un poco diferentes en el cielo
    const alturaRandom = Math.floor(Math.random() * 40) + 10; // Entre 10px y 90px de arriba
    nuevaNube.style.top = alturaRandom + "px";

    // Metemos la nube al cielo del jardín
    jardin.appendChild(nuevaNube);
}

const pie = document.getElementById("foot")
function corazon() {
    const nuevocorazon = document.createElement("img");
    nuevocorazon.src = rutacorazon;
    nuevocorazon.alt = "Corazon volador";
    nuevocorazon.classList.add("corazon");
    const randomLeft = Math.floor(Math.random() * 40) + 10
    nuevocorazon.style.left = randomLeft + "%";
    jardin.appendChild(nuevocorazon);

}


boton.addEventListener("click", function() {
    const nuevoGirasol = document.createElement("img");
    nuevoGirasol.src = girasol;
    nuevoGirasol.alt = "Girasol plantado";
    nuevoGirasol.classList.add("girasol"); // Copia la clase CSS si quieres que mida lo mismo

    const randomSize = Math.floor(Math.random() * 70) + 40;
    nuevoGirasol.style.width = randomSize + "px";
    nuevoGirasol.style.height = randomSize + "px"; //

    const randomLeft = Math.floor(Math.random() * 40) + 10
    nuevoGirasol.style.left = randomLeft + "%";

    jardin.appendChild(nuevoGirasol);
    corazon();
    if (contador > palabras.length-1)  {
        contador = 0
        boton.textContent = palabras[contador];
    }
    boton.textContent = palabras[contador];
    contador += 1;
    
    console.log("¡Has plantado un girasol!");
});

