// Variables
let escMenu = false;
let escSubMenu = false;
let resultado = 0;
let datoBuscado = 0;
let guardar =0;
let imc = 0;
let persona = 0;
let body = 0;
const arrayDatos = [];

//Arrow Function

//Permite ingresar los datos personales
let ingresarDatos = () => {
  nombre = prompt ("Ingrese su nombre").toUpperCase();
  apellido = prompt ("Ingrese su apellido").toUpperCase();
  alert (`Gracias por registrarse ${nombre} ${apellido}`);
  };

//Si se elige crear un nuevo usuario, borra los datos en el objeto body
let borrarDatosImc = () =>{
  delete body.peso ;
  delete body.altura ;
  delete body.imc;
};

// Funcion para buscar el dato y guardarlo en una variable
let buscarDatoNombre = (dato) => dato.nombre == `${datoBuscado}`;
let buscarDatoApellido = (dato) => dato.apellido == `${datoBuscado}`;

//Se busca un usuario que se encuentre guardado en el arrayDatos
let buscar = () => {
  do {
    resultado = prompt("¿Desea buscar por nombre o apellido?").toUpperCase();
    if (resultado == "NOMBRE"){
      datoBuscado = prompt("¿Qué desea buscar?").toUpperCase();
      let datosBuscados = arrayDatos.find(buscarDatoNombre);
      if (datosBuscados != undefined){
        alert("Se encontraron los siguientes datos : "+ datosBuscados.nombre + " " + datosBuscados.apellido);
        break;
      }else {
        alert("No se encontraron datos");
        break;
      }
     }
     if(resultado == "APELLIDO"){
      datoBuscado = prompt("¿Qué desea buscar?").toUpperCase();
      let datosBuscados = arrayDatos.find(buscarDatoApellido);
      if (datosBuscados != undefined){
        alert("Se encontraron los siguientes datos : "+ datosBuscados.nombre + " " + datosBuscados.apellido);
        break;
      }else {
        alert("No se encontraron datos");
        break;
      }
     }else if((resultado !="NOMBRE") && (resultado !="APELLIDO")){
      alert("Elija una opción")
     }
  } while ((resultado !="NOMBRE") && (resultado !="APELLIDO"));
};

//Se busca y elimina un usuario que se encuentre previamente guardado en el arrayDatos
const eliminar = () => {
  do {
    resultado = prompt("¿Desea eliminar por nombre o apellido?").toUpperCase();
    if (resultado == "NOMBRE"){
      datoBuscado = prompt("¿Qué desea buscar?").toUpperCase();
      let datosBuscadosEli = arrayDatos.find(buscarDatoNombre)
      let datosBuscados = arrayDatos.findIndex(buscarDatoNombre);
      if (datosBuscados != -1){
        alert("Se encontraron los siguientes datos : "+ datosBuscadosEli.nombre + " " + datosBuscadosEli.apellido);
        arrayDatos.splice(datosBuscados, 1)
        break;
      }else {
        alert("No se encontraron datos");
        break;
      }
     }
     if(resultado == "APELLIDO"){
      datoBuscado = prompt("¿Qué desea buscar?").toUpperCase();
      let datosBuscadosEli = arrayDatos.find(buscarDatoApellido)
      let datosBuscados = arrayDatos.findIndex(buscarDatoApellido)
      console.log(arrayDatos.findIndex(buscarDatoApellido))
        if (datosBuscados != -1){
        alert("Se encontraron los siguientes datos : "+ datosBuscadosEli.nombre + " " + datosBuscadosEli.apellido);
        arrayDatos.splice(datosBuscados, 1)
        break;
      }else {
        alert("No se encontraron datos");
        break;
      }
     }else if((resultado !="NOMBRE") && (resultado !="APELLIDO")){
      alert("Elija una opción")
     }
  } while ((resultado !="NOMBRE") && (resultado !="APELLIDO"));
 }

//Se crean objetos
let crearPersona = () => { persona = new Persona ({ nombre: nombre, apellido : apellido });}

let crearBodyCheck = () => { body = new BodyCheck ({ peso: peso, altura : altura, imc: imc });}

//Object


class Persona{
  constructor(literal){
    this.nombre = literal.nombre;
    this.apellido = literal.apellido;
  }
}
class BodyCheck{
  constructor(literal){
    this.peso = literal.peso;
    this.altura = literal.altura;
    this.imc = literal.imc;
  }
}


//Funciones


function saludar() {
    alert("¡¡Bienvenidos!!");
    alert("No importa si quieres perder peso, hacer algo por tu salud o si estás ganando masa muscular, el Índice de Masa Corporal (IMC en su abreviatura) es, en la mayoría de los casos, el primer valor que se calcula. En función de tu IMC podrás elaborar tu próximo programa de entrenamiento y nutrición. Pero, ¿qué es exactamente el IMC? Y, ¿cómo se calcula?.");
}

//Consulta al usuario si los datos ingresados son correctos
function datos(){
  let pregunta = 0;
  ingresarDatos();
  pregunta = prompt(`¿Son ${nombre} ${apellido} los datos correctos?`).toUpperCase();
  while (pregunta != "SI") {
    if(pregunta == "NO"){
      alert("Ingrese el dato nuevamente");
      ingresarDatos();
      pregunta = prompt(`¿Son ${nombre} ${apellido} los datos correctos?`).toUpperCase();
    }else if((pregunta !="SI") && (pregunta !="NO")){
        alert("Las opciones disponibles son SI o NO");
        pregunta = prompt(`¿Son ${nombre} ${apellido} los datos correctos?`).toUpperCase();
          }
  }
  crearPersona();
}

function bodyCheck() {
  peso = prompt("Por favor, ingrese su peso como el siguiente ejemplo = 70.2");
  altura = prompt("Por favor, ingrese su altura como el siguiente ejemplo = 1.70");
  imcDecimales = (peso) / (altura * altura);
  imc = imcDecimales.toFixed(1);
  if (imc < 18.5) {
      alert(
        `${nombre},Su IMC actual es: ` +
        imc + "." + " " + "La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable."
      );}if (imc >= 18.5 && imc <= 24.9) {
      alert(
        `${nombre},Su IMC actual es: ` +
        imc + "." + " " + "El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría."
      );
      }if (imc >= 25 && imc <= 34.9) {
      alert(
        `${nombre},Su IMC actual es: ` +
        imc + "." + " " + "Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro."
      );
      } if (imc >= 35 && imc <= 39.9) {
      alert(
        `¡Cuidado ${nombre}! Su IMC actual es: ` +
      imc + "." + " " + "La obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía."
      );
      } if (imc >= 40) {
      alert(
        `¡¡¡Cuidado ${nombre}!!! Su IMC actual es: ` +
      imc + "." + " " + "La obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía."
    );
  }
  crearBodyCheck();
}

//Guarda los datos en arrayDatos. Si tiene IMC, mergea ambos objetos
function guardarDato(){
  do {
  guardar = prompt(`${nombre}, ¿Desea guardar sus datos?`).toUpperCase();
  console.log (guardar);
  if (guardar === "SI"){
    if(imc > 0){
      //mergeamos en un archivo el objeto persona y body
      let datosUnidos = {...persona, ...body};
      arrayDatos.push(datosUnidos);
    }else if (imc === 0){
      arrayDatos.push(persona);
    }
   }
   if(guardar === "NO"){
   }else if((guardar !="SI") && (guardar !="NO")){
    alert("Las opciones disponibles son SI o NO")
   }
} while ((guardar !="SI") && (guardar !="NO"));
  console.log(arrayDatos);
}

 
// Comandos


saludar();
datos();
console.log(persona);

do {
  menuP = parseInt(prompt(
      `CALCULADORA DE ÍNDICE DE MASA CORPORAL (IMC)
       ${nombre}, seleccione alguna de las siguientes opciones:
      1 - ¿Qué es el IMC? 
      2 - ¿Cómo se calcula el IMC?
      3 - Datos
      4 - BodyCheck
      5 - Guardar
      6 - Salir`
    )
  );
  //Menu de opciones
  switch (menuP) {
    case 1:
      alert("El IMC es un valor orientativo y de medida que permite realizar una valoración del peso corporal. Se obtiene de la relación entre el peso corporal y la altura. En la evaluación se distingue entre las siguientes categorías: bajo peso, peso normal, sobrepeso y obesidad. ");
      break;
    case 2:
      alert("¿Cómo puedes calcular tu IMC? Es muy sencillo. El cálculo se realiza según la siguiente fórmula del Índice de Masa Corporal : IMC = peso corporal [kg] / (altura [m])² Ejemplo=  Una mujer pesa 60 kg y mide 1,69 m. Cálculo= (60 kg)/(1,69 m)² = 21. Por tanto, la mujer tiene un IMC de 21. Calcula ahora tu IMC individualizado de forma gratuita en nuestro Body Check");
      break;
    case 3:
      do {
        subMenu = parseInt(prompt(
            `Ingresa, consulta o borra tus datos:
            1 - Ingresa tus datos 
            2 - Consulta
            3 - Borrar
            4 - Salir`
          )
        );
        //subMenu de opciones
        switch (subMenu) {
          case 1:
            datos();
            borrarDatosImc();
            break;
          case 2:
            buscar();
            break;
          case 3:
            eliminar();
            break;
          case 4:
            escSubMenu = true;
            break;
        }
      } while (!escSubMenu);
      break;
    case 4:
      bodyCheck();
      break;
    case 5:
      guardarDato();
      break;
    case 6:
      console.log(arrayDatos);
      alert("¡¡¡Gracias por elegirnos!!!");
      escMenu = true;
      break;
  }
} while (!escMenu);