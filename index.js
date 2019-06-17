// Mis variables de entrada

var metrosCuadrados = 0; 
var tipoDeInmueble = "";
var valorDeAdministracion = 0;
var valorCuotaDeAseo = 0;
var cantidadDeHabitantes = 0;
var edad;
var genero = "";
var valorDerechosDeGimnasio = 0;


metrosCuadrados = prompt("Digite los " + "metros cuadrado");
tipoDeInmueble = prompt('Digite el tipo de ' + 'inmueble "CASA" o "APARTAMENTO".')
tipoDeInmueble = tipoDeInmueble.toUpperCase()
genero = prompt('Digite el ' + 'genero "MASCULINO" o "FEMENINO".');
genero = genero.toUpperCase()
edad = prompt("Digite la edad");



// Procesos o calculos

valorDeAdministracion = calcularValorDeAdministracion(metrosCuadrados, tipoDeInmueble)

valorCuotaDeAseo = calcularValorDeCuotaAseo(valorDeAdministracion, metrosCuadrados)

valorDerechosDeGimnasio = calcularValorDerechoDeGimnasio(genero, edad)

    function calcularValorDeAdministracion(metrosCuadrados, tipoDeInmueble){
if(tipoDeInmueble == "CASA"){
    return metrosCuadrados * 1500 + 100000;
    }else if(tipoDeInmueble == "APARTAMENTO"){
return metrosCuadrados * 1500 + 50000

    }
    else{
        return "Tipo de inmueble no válido"
    }

}

function calcularValorDeCuotaAseo(valorDeAdministracion, metrosCuadrados){

return (valorDeAdministracion * 0.1) + (metrosCuadrados * 1000)

}

function calcularValorDerechoDeGimnasio(genero, edad){

switch(genero){

case "MASCULINO":

    if (edad < 10){
return 10000
    } else {
        return 20000
    }
break;
    }
}




// Salidas del sistema

document.write("El valor de la administracion es " + valorDeAdministracion + "<br>")
document.write("El valor de la cuota de aseo es " + valorCuotaDeAseo + "<br>")
document.write("El valor de la cuota de gimnasio es " + valorDerechosDeGimnasio)