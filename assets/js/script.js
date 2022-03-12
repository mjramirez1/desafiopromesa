// Función que llama a la API y pide los datos
const getDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos"
    try {
        const response = await fetch(url)//Fetch trae la api y espera 
        const datos = await response.json() //entrega los datos con json y espera
        console.log(datos) // muestra los datos completo de la API
        
        const filtro = datos.filter(t => t.id <= 20).map(t => t.title)// crea filtro con los datos por id hasta el 20 y realiza un map solo con los titulos
        console.log(filtro) //llama el filtro y map a la consola
    } catch (err) { //si existiera error
        console.log(err)
    }
}
getDatos()

// Se crea la función que retorna una promesa con el mensaje solicitado
const mensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => { //define tiempo para ejecutar el mensaje 
            resolve('¡Información enviada!')
        }, 3000)
    })
}
// Se crea la función asíncrona que recibe la promesa para luego mostrarla
const getMensaje = async () => {
    const respuestaPromesa = await mensaje() 
    console.log(respuestaPromesa)//ejecuta el mensaje luego de 3 segundos
}
getMensaje()










