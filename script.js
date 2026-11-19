console.log("HOLA ARTISTAS");

const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputEmail = document.getElementById("email");
const inputContrasenia = document.getElementById("contrasenia");
const inputConfirmarContrasenia = document.getElementById("confirmar-contrasenia");

const registro = async (event) =>{
    event.preventDefault();
     const nombreUser = inputNombre.value;
     const edadUser = inputEdad.value;
     const emailUser = inputEmail.value;
     const contraseniaUser = inputContrasenia.value;
     const confirmarContraseniaUser = inputConfirmarContrasenia.value;

    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchData = await fetch(url)
    const dataUsers = await fetchData.json();

    const emailUsers = dataUsers.map(
        (user) => {
            return user.email
        }
    )
    const filterEmail = emailUsers.filter(
        (registrado) =>{
            return emailUser ===registrado
        }
    )

    console.log(filterEmail)

    if (filterEmail.length >0 ){
        alert("Ingresa otro MAIL");
        console.warn("Si existe");
        return
    }

    const edadAutorizada = 18

    if(edadUser < edadAutorizada){
        alert("Eres menor de edad, no puedes registrarte");
        console.warn("Eres menor de edad, no puedes registrarte");
        return
    }

    if(contraseniaUser !== confirmarContraseniaUser){
        alert("Las contraseñas no coinciden");
        console.warn("Las contraseñas no coinciden")
        return
    }

        localStorage.setItem("usuarioRegistrado",emailUser)

        window.location.href = "bienvenida.html"; 

}

const validaciónRegistro = () =>{
    const userRegistrado = localStorage.getItem("USUARIO REGISTRADO"); 
    if(userRegistrado === true){ 
        window.location.href = "/bienvenida.html"
    }
}

if(window.location.pathname === "/bienvenida.html"){
    validaciónRegistro()
}

const cerrarSesión = () =>{
    localStorage.clear()
    window.location.href = "index.html"
}