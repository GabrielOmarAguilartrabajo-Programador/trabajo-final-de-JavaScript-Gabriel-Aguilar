Necesito que estas indicaciones:

* Este es un proyecto centrado en javascript.  
* utiliza siempre estilos css, no librerias ni frameworks  
* utiliza una estructura simple en html de header, main y footer.  
* Hay que subdividir el proyecto en 4 archivos: index.html, bienvenida.html, style.css y script.js  
* cuando trabaje en el script, utilice solo arrow function (función flecha), no utilice la función clásica  
* los condicionales deben ser sólo con if, a menos que sea necesario un else.  
* usa programación declarativa  
* el fetch debe ser simple (fetch, guardar la data en una constante y convertirla a JSON)  
* utiliza métodos con la estructura de arrow function  
* para traer los datos de html, utiliza getElementById, no querySelector  
* los mensajes de consola tienen que estar diferenciados entre .log para mensajes genéricos, .warn para advertencias y .error para errores  
* para la persistencia de datos utiliza localStorage, no sessionStorage  
* para las redirecciones desde js/script utiliza window.location.href  
* en html, para llamar la función, si es un formulario, utilizar el atributo onSubmit, pero si la función debe llamarse en un elemento solo, utiliza onclick.  
*  Resuelve las validaciones usando únicamente if con retorno anticipado (return). Evita el uso de else salvo que sea estrictamente indispensable. 
* Persistencia y Redirección: Guarda y lee los datos del usuario únicamente con localStorage, no sessionStorage. Al validar el registro con éxito, redirige al usuario usando window.location.href = 'bienvenida.html'. En bienvenida.html, verifica que exista un usuario guardado en el storage elegido para mostrar sus datos en pantalla (y prever el estado de usuario logueado).
* Consumo Asíncrono (fetch): Incluye una petición HTTP simple (fetch(url)), guarda la respuesta en una constante y conviértela con .json()
* Utiliza los tres niveles de registro según corresponda: console.log() para flujo normal. console.warn() para advertencias no bloqueantes. console.error() para errores críticos (ej. contraseñas que no coinciden o fallos en fetch).