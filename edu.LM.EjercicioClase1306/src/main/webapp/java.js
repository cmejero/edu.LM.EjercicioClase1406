let arrayActividades = [];
console.log(arrayActividades);




for (let i in arrayActividades) {

	console.log(arrayActividades);
}


function pedir() {

	let pedirUsu;
	let fechaSplit;
	let fechaUsu;
	let fechaString;
	let fechaActual = new Date();

	do {
		pedirUsu = prompt("Introduzca la actividad a realizar: clase: 1, comer: 2, viaje: 3, dormir: 4 o ejercicio: 5");
	} while (pedirUsu != "1" && pedirUsu != "2" && pedirUsu != "3" && pedirUsu != "4" && pedirUsu != "5")






	switch (pedirUsu) {

		case "1":

			do {
				fecha = prompt("Introduzca la fecha que desea realizar la accion en formato: dd-MM-yyyy");
				fechaSplit = fecha.split("-")
				fechaUsu = new Date(fechaSplit[2], fechaSplit[1] - 1, fechaSplit[0]);
			} while (fechaActual > fechaUsu);

			fechaString = fechaUsu.getDate().toString() + "/" + (fechaUsu.getMonth() + 1).toString() + "/" + fechaUsu.getFullYear().toString();

			arrayActividades.push({

				nombre: "clase",
				duracion: "1 hora",
				fechaDate: fechaUsu,
				fecha: fechaString

			})

			break;






		case "2":
			do {
				fecha = prompt("Introduzca la fecha que desea realizar la accion en formato: dd-MM-yyyy");
				fechaSplit = fecha.split("-")
				fechaUsu = new Date(fechaSplit[2], fechaSplit[1] - 1, fechaSplit[0]);
			} while (fechaActual > fechaUsu);

			fechaString = fechaUsu.getDate().toString() + "/" + (fechaUsu.getMonth() + 1).toString() + "/" + fechaUsu.getFullYear().toString();

			arrayActividades.push({

				nombre: "comer",
				duracion: "45 min",
				fechaDate: fechaUsu,
				fecha: fechaString

			})

			break;



		case "3":
			do {
				fecha = prompt("Introduzca la fecha que desea realizar la accion en formato: dd-MM-yyyy");
				fechaSplit = fecha.split("-")
				fechaUsu = new Date(fechaSplit[2], fechaSplit[1] - 1, fechaSplit[0]);
			} while (fechaActual > fechaUsu);
			fechaString = fechaUsu.getDate().toString() + "/" + (fechaUsu.getMonth() + 1).toString() + "/" + fechaUsu.getFullYear().toString();

			arrayActividades.push({

				nombre: "viaje",
				duracion: "20 min",
				fechaDate: fechaUsu,
				fecha: fechaString

			})

			break;


		case "4":
			do {
				fecha = prompt("Introduzca la fecha que desea realizar la accion en formato: dd-MM-yyyy");
				fechaSplit = fecha.split("-")
				fechaUsu = new Date(fechaSplit[2], fechaSplit[1] - 1, fechaSplit[0]);
			} while (fechaActual > fechaUsu);

			fechaString = fechaUsu.getDate().toString() + "/" + (fechaUsu.getMonth() + 1).toString() + "/" + fechaUsu.getFullYear().toString();

			arrayActividades.push({

				nombre: "dormir",
				duracion: "8 horas",
				fechaDate: fechaUsu,
				fecha: fechaString

			})

			break;


		case "5":
			do {
				fecha = prompt("Introduzca la fecha que desea realizar la accion en formato: dd-MM-yyyy");
				fechaSplit = fecha.split("-")
				fechaUsu = new Date(fechaSplit[2], fechaSplit[1] - 1, fechaSplit[0]);
			} while (fechaActual > fechaUsu);
			fechaString = fechaUsu.getDate().toString() + "/" + (fechaUsu.getMonth() + 1).toString() + "/" + fechaUsu.getFullYear().toString();

			arrayActividades.push({

				nombre: "ejericio",
				duracion: "1 h y 30 min",
				fechaDate: fechaUsu,
				fecha: fechaString

			})

			break;


	}
	tiempoRestante()
	mostrarPorPantalla();



}
let horas;
let diaInt;

function tiempoRestante() {
	let arrayAux = []

	for (let i = 0; i < arrayActividades.length - 1; i++) {

		for (let j = 0; j < arrayActividades.length - i - 1; j++) {

			if (arrayActividades[j].fecha > arrayActividades[j + 1].fecha) {

				arrayAux = arrayActividades[j]
				arrayActividades[j] = arrayActividades[j + 1]
				arrayActividades[j + 1] = arrayAux

			}
		}

	}


	let fechaActual = new Date()
	let diferenciaFecha = arrayActividades[0].fechaDate.getTime() - fechaActual.getTime()
	horas =  diferenciaFecha / ( 60 * 60 * 1000)

	let dias = horas / 24
	diaInt = dias;
	horas = horas %24
	
	
		
		if(arrayActividades[0] != null){
			
			
			mostrarPorPantalla2()
			
		}
	





	


}




function mostrarPorPantalla() {

	let escribir = document.getElementById("mostrar");

	escribir.innerHTML = "";


	for (let i in arrayActividades) {

		escribir.innerHTML += ("<tr><td>" + arrayActividades[i].nombre + "</td><td>" + arrayActividades[i].duracion + "</td><td>" + arrayActividades[i].fecha + "</td></tr>")

	}


	




}
function mostrarPorPantalla2(){
	
	
	let escribir2 = document.getElementById("mostrar2");

	escribir2.innerHTML = "";

	for (let i in arrayActividades) {

		escribir2.innerHTML = ("<tr><td>" + "<b>Actividad:</b> " + arrayActividades[i].nombre + "</td><td>" + "<b>tiempo Restante:</b> Dias:  " + Math.floor(diaInt) + " horas: " + Math.floor(horas) + "</td></tr>")

	}
	
	
}