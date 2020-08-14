let arrProductos = [
    {nombre:'Banana', paisOrigen:'Ecuador', valor:2},
    {nombre:'Manzana', paisOrigen:'Chile', valor:5},
    {nombre:'Limón', paisOrigen:'Argentina', valor:7},
    {nombre:'Aguacate', paisOrigen:'Colombia', valor:4},
]


let carrito;
let carritoLocalStorage;
let contenedorP = document.querySelector('#contenedorProductos');
let contenedorCarrito = document.querySelector('#contenedorCarrito');

    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito')); 
        // console.log("Resultado: carrito", carrito);
        actualizarCarrito();
    }else{
        carrito = [];
    }


function actualizarProductos(){
    contenedorP.innerHTML = null
    for (let index = 0; index < arrProductos.length; index++) {
        const fruta = arrProductos[index];
        let contenedorFruta = document.createElement('div'); // CONTENEDOR DE TODA LA FRUTA
        let nombreFruta = document.createElement('h1');
        let paisOrigen = document.createElement('p');
        let precio = document.createElement('p');
        let btnAdd = document.createElement('button');

        contenedorFruta.classList.add('item');
        btnAdd.textContent ='Añadir';
        btnAdd.classList.add('btn');
        btnAdd.classList.add('btn-info');
        btnAdd.addEventListener('click', ()=>{
            carrito.push(fruta);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito ();
        });

        nombreFruta.textContent = fruta.nombre;
        paisOrigen.textContent = fruta.paisOrigen;
        precio.textContent = fruta.valor;

        contenedorFruta.appendChild(nombreFruta);
        contenedorFruta.appendChild(paisOrigen);
        contenedorFruta.appendChild(precio);
        contenedorFruta.appendChild(btnAdd);
        contenedorP.appendChild(contenedorFruta);
    } 
}

actualizarProductos();


function actualizarCarrito (){
    carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
    contenedorCarrito.innerHTML = null; 
    for (let index =0; index < carritoLocalStorage.length; index++){
        const frutaCarrito = carritoLocalStorage[index];
        let contenedorFruta = document.createElement('div'); 
        let nombreFruta = document.createElement('h1');
        let paisOrigen = document.createElement('p');
        let precio = document.createElement('p');
        
        contenedorFruta.classList.add('itemCarrito');
        nombreFruta.textContent = frutaCarrito.nombre;
        paisOrigen.textContent = frutaCarrito.paisOrigen;
        precio.textContent = frutaCarrito.valor;

        contenedorFruta.appendChild(nombreFruta);
        contenedorFruta.appendChild(paisOrigen);
        contenedorFruta.appendChild(precio);
        contenedorCarrito.appendChild(contenedorFruta);
        
    }
}

function solicitarDatos (){
    
}

function limpiarCarrito(){
    contenedorCarrito.innerHTML= null
    localStorage.removeItem('carrito');
}


function ordenarValor(){
    arrProductos.sort(function (fruta1, fruta2) {
        if (fruta1.valor > fruta2.valor) {
            return 1;
        }
        if (fruta1.valor < fruta2.valor) {
            return -1;
        }
    });

    actualizarProductos();
}
function ordenarNombre(){
    arrProductos.sort(function (fruta1, fruta2) {
        if (fruta1.nombre.toLocaleLowerCase() > fruta2.nombre.toLocaleLowerCase()) {
            return 1;
        }
        if (fruta1.nombre.toLocaleLowerCase() < fruta2.nombre.toLocaleLowerCase()) {
            return -1;
        }
    });

    actualizarProductos();
}

