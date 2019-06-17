// Mis variables de entrada
var metrosCuadrados = 0; 
var tipoDeInmueble = "";
var valorDeAdministracion = 0;
var valorCuotaDeAseo = 0;
var edad;
var genero = "";
var valorDerechosDeGimnasio = 0;
var cantidadDePersonas = 0;
var cantidadDeInmuebles = 0;
var totalAPagar = 0;
var totalDeInmuebles = 0;
cantidadDeInmuebles = prompt("Digite la cantidad de inmuebles");
for(var n = 0; n < cantidadDeInmuebles; n++){

metrosCuadrados = prompt("Digite los " + "metros cuadrado" + (n+1));
tipoDeInmueble = prompt('Digite el tipo de ' + 'inmueble "CASA" o "APARTAMENTO".' + (n+1))
tipoDeInmueble = tipoDeInmueble.toUpperCase()
cantidadDePersonas = prompt("Digite la cantidad de personas que viven en el inmueble" + (n+1))


// Procesos o calculos

for (var i = 0; i < cantidadDePersonas; i++){
    genero = prompt('Digite el ' + 'genero "MASCULINO" o "FEMENINO ".' + (i+1));
    genero = genero.toUpperCase()
    edad = prompt("Digite la edad " + (i+1));
    valorDerechosDeGimnasio += calcularValorDerechoDeGimnasio(genero, edad)
}

valorDeAdministracion = calcularValorDeAdministracion(metrosCuadrados, tipoDeInmueble)

valorCuotaDeAseo = calcularValorDeCuotaAseo(valorDeAdministracion, metrosCuadrados)



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
return 0
    } else if(edad>=10 && edad<20) {
return 20000
    }else if(edad>=20 && edad<40){
return 15000
    }else if(edad>=40 && edad<60){
return 10000
    }else if(edad>60){
        return 0
    }

break;
 
    case "FEMENINO":
            if (edad < 10){
                return 0
                    } else if(edad>=10 && edad<18) {
                return 15000
                    }else if(edad>=18 && edad<35){
                return 12000
                    }else if(edad>=35 && edad<55){
                return 8000
                    }else if (edad>55){
                        return 0
                    }
                
                break;
}
}

totalAPagar = valorDeAdministracion + valorCuotaDeAseo + valorDerechosDeGimnasio
totalDeInmuebles += total
// Salidas del sistema

    document.write("El valor de la administracion es " + valorDeAdministracion + "<br>")
    document.write("El valor de la cuota de aseo es " + valorCuotaDeAseo + "<br>")
    document.write("El valor de la cuota de gimnasio es " + valorDerechosDeGimnasio + "<br>")
    document.write("El valor total a pagar es " + totalAPagar + "<br>")
    
}
document.write("El valor total de los inmuebles es " + totalDeInmuebles + "<br>")