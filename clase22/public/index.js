const inputNombre = document.querySelector('#inputNombre')
const inputApellido = document.querySelector('#inputApellido')
const inputCedula = document.querySelector('#inputCedula')
const inputFecha = document.querySelector('#inputNacimiento')

const btnGuardar = document.querySelector('#btnAdd')
const usuarios = document.querySelector('.usuarios')

btnGuardar.addEventListener('click', () =>{
    const nombre = inputNombre.value 
    const apellido = inputApellido.value 
    const cedula = inputCedula.value 
    const fecha = inputFecha.value

    if(!nombre || !apellido || !cedula || !fecha){
    alert('llene los espacios')
    return
    }
    const usuario = document.createElement ('div')
    usuario.classList.add('usuario')
    usuario.innerHTML = `
    <h2>${nombre} ${apellido}<h2/> 
    <p>cedula: ${cedula} <p/>
    <p>fecha de nacimiento: ${fecha}<p/>`

    usuarios.appendChild(usuario)
    

})



zz