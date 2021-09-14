/* *************** SELECTORES *************** */
const inpNombre = document.querySelector("#nom-ejemplo");
const inpApe = document.querySelector("#ape-ejemplo");
const inpEdad = document.querySelector("#edad-ejemplo");
const inpNac = document.querySelector("#nac-ejemplo");

//Selects e Inputs Radio
const inpGen = document.querySelector("#genero");
const divRadio = document.querySelector("#radioOptions");
const inpRadio = document.querySelector("#inpRadio");

//Boton enviar
const btnEnviarDatos = document.querySelector("#formBtnDatos");




/* *************** LISTENERS *************** */
btnEnviarDatos.addEventListener("click", formEnviar);
//divRadio.addEventListener("change", actualizarForm)






/* *************** FUNCIONES *************** */

// Ver datos de formularios
function formEnviar(e) {
    e.preventDefault();

    console.log(inpGen.value);

    // console.log(inpNombre.value);
    // console.log(inpApe.value);
    // console.log(inpEdad.value);
    // console.log(inpNac.value);
    
    // if (inpNombre.value.length > 8) {
    //     alert("Nombre muy largo")
    //     return false
    // }else if(inpNombre.value == "" || inpApe.value == "" || inpEdad.value == "" || inpNac.value == "" ){
    //     alert("Rellenar los campos es obligatorio")
    //     return false
    // }else if(inpEdad.value   < 18){
    //     alert("Sos menor de edad")
    //     return false
    // }
    
    
    // const user = {
    //     nombre: inpNombre.value,
    //     apellido: inpApe.value,
    //     edad: inpEdad.value,
    //     nacionalidad: inpNac.value
    // }


    // localStorage.setItem('usuario', JSON.stringify(user));

}


// function actualizarForm(e) {
//     inpRadio.textContent = e.target.value;
//     // inpRadio.innerHTML = `
//     //     <div class="mb-3">
//     //         <label for="exampleInputPassword1" class="form-label">Form para opcion ${e.target.value}</label>
//     //         <input type="text" class="form-control" />
//     //     </div>
//     // `
// }




/* -------------------------------------------------------------------------- */
/*                                Mas ejemplos                                */
/* -------------------------------------------------------------------------- */
// inpNac.addEventListener('change', (event) => {
//     const resultado = document.querySelector('.resultado');
//     resultado.textContent = `Te gusta el sabor ${event.target.value}`;
// });
// inpNac.addEventListener('change', updateValue);

// function updateValue(e) {
//     const resultado = document.querySelector('.resultado');
//     resultado.textContent = e.target.value;
// }