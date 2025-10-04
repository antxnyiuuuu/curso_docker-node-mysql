function esperar(ms) { //funcion que devuelve una promesa que se resuelve despues de ms milisegundos
    return new Promise((resolve) => setTimeout(resolve, ms)) //esperar ms milisegundos
}

async function demo()  { //funcion asincrona que espera 2 segundos esta funcion tiene una promesa
    console.log('Inicio');
    await esperar(2000); //esperar 2 segundos
    console.log('Fin');    
}

demo(); //llamar a la funcion demo
console.log('Fin del programa'); //esta linea se ejecuta antes que la funcion demo pq esta afuera async