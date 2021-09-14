/* *************** SELECTORES *************** */
const inpEmail = document.querySelector("#email-ejemplo");
const inpPass = document.querySelector("#pass-ejemplo");
const btnEnviar = document.querySelector("#formBtn");

/* *************** LISTENERS *************** */
btnEnviar.addEventListener("click", formEnviar);

/* *************** FUNCIONES *************** */


// Ver datos de formularios
function formEnviar(e) {
    e.preventDefault();
    console.log(inpEmail.value);
    console.log(inpPass.value);


    if (inpPass.value === '') {
        alert('el campo contraseña es obligatorio')

    } else if (!inpEmail.value.includes("@" && ".com")) {
        alert("Los datos no son válidos. Por favor, vuelva a cargar el formulario.")
    }

}