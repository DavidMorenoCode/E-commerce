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
        console.log("Resultado: carrito", carrito);
        actualizarCarrito();
    }else{
        carrito = [];
    }

for (let index = 0; index < arrProductos.length; index++) {
    const fruta = arrProductos[index];
    let contenedorFruta = document.createElement('div'); // CONTENEDOR DE TODA LA FRUTA
    let nombreFruta = document.createElement('h1');
    let paisOrigen = document.createElement('p');
    let precio = document.createElement('p');
    let btnAdd = document.createElement('button');

    contenedorFruta.classList.add('item');
    btnAdd.textContent ='Añadir';
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


function actualizarCarrito (){
    carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));
    contenedorCarrito.innerHTML = null; 
    for (let index =0; index < carritoLocalStorage.length; index++){
        const frutaCarrito = carritoLocalStorage[index];
        let contenedorFruta = document.createElement('div'); 
        let nombreFruta = document.createElement('h1');
        let paisOrigen = document.createElement('p');
        let precio = document.createElement('p');
        
        
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
    let nombre = prompt('Ingrese su nombre:'); 
    let validarEnvio = prompt('Te lo enviamos a tu hogar: (si/no)');
    let direccion
    
    if(validarEnvio === 'si'){
        direccion = prompt('Ingrese su direccion:'); 
    }
    
    console.log("Resultado: solicitarDatos -> nombre", nombre);
    console.log("Resultado: solicitarDatos -> validarEnvio", validarEnvio);
    console.log("Resultado: solicitarDatos -> direccion", direccion);
}

