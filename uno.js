/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var continuar;
	//a)
	var acumuladorSueldoProgramador = 0;
	var acumuladorSueldoAnalista = 0;
	var acumuladorSueldoQa = 0;
	var contProgramador = 0;
	var contAnalista = 0;
	var contQa = 0;
	var promedioSueldoProgramador;
	var promedioSueldoAnalista;
	var promedioSueldoQa;
	//b)
	var sueldoMaximo;
	var sexoSueldoMaximo;
	var flagSueldo = true;
	//c)
	var sueldoFemeninoMaximo;
	var nombreSueldoFemeninoMaximo;
	var flagSueldoFemenino = true;
	//d)
	var contProgramadoresNoBinarios = 0;

	do
	{
		nombre = prompt("Ingrese el nombre: ");
		while(!isNaN(nombre))
		{
			nombre = prompt("Error. Ingrese el nombre: ");
		}

		edad = parseInt(prompt("Ingrese la edad: "));
		while(isNaN(edad))
		{
			edad = parseInt(prompt("Error. Ingrese la edad: "));
		}

		sexo = prompt("Ingrese el sexo (masculino/femenino/no binario): ");
		sexo = sexo.toUpperCase(sexo);
		while(sexo != "MASCULINO" && sexo != "FEMENINO" && sexo != "NO BINARIO")
		{
			sexo = prompt("Error. Ingrese el sexo (masculino/femenino/no binario): ");
			sexo = sexo.toUpperCase(sexo);
		}

		puesto = prompt("Ingrese el puesto (programador/analista/qa): ");
		puesto = puesto.toUpperCase(puesto);
		while(puesto != "PROGRAMADOR" && puesto != "ANALISTA" && puesto != "QA")
		{
			puesto = prompt("Error. Ingrese el puesto (programador/analista/qa): ");
			puesto = puesto.toUpperCase(puesto);
		}

		sueldo = parseInt(prompt("Ingrese el sueldo (entre 15000 y 70000): "));
		while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000)
		{
			sueldo = parseInt(prompt("Error. Ingrese el sueldo (entre 15000 y 70000): "));
		}

		switch(puesto)
		{
			case "PROGRAMADOR":
			{
				acumuladorSueldoProgramador += sueldo;
				contProgramador++;

				if(sexo == "NO BINARIO")
				{
					if(sueldo > 20000 && sueldo < 55000)
					{
						contProgramadoresNoBinarios++;
					}
				}
				break;
			}
			case "ANALISTA":
			{
				acumuladorSueldoAnalista += sueldo;
				contAnalista++;
				break;
			}
			case "QA":
			{
				acumuladorSueldoQa += sueldo;
				contQa++;
				break;
			}
		}

		if(flagSueldo || sueldo > sueldoMaximo)
		{
			sueldoMaximo = sueldo;
			sexoSueldoMaximo = sexo;
			flagSueldo = false;
		}

		if(sexo == "FEMENINO")
		{
			if(flagSueldoFemenino || sueldo > sueldoFemeninoMaximo)
			{
				sueldoFemeninoMaximo = sueldo;
				nombreSueldoFemeninoMaximo = nombre;
				flagSueldoFemenino = false;
			}
		}

		continuar = confirm("¿Desea continuar?");
	}while(continuar)

	if(contProgramador > 0)
	{
		promedioSueldoProgramador = acumuladorSueldoProgramador / contProgramador;
	}
	else
	{
		promedioSueldoProgramador = 0;
	}
	if(contAnalista > 0)
	{
		promedioSueldoAnalista = acumuladorSueldoAnalista / contAnalista;
	}
	else
	{
		promedioSueldoAnalista = 0;
	}
	if(contQa > 0)
	{
		promedioSueldoQa = acumuladorSueldoQa / contQa;
	}
	else
	{
		promedioSueldoQa = 0;
	}

	document.write("<br>Promedio sueldo de programadores: " + promedioSueldoProgramador);
	document.write("<br>Promedio sueldo de analista: " + promedioSueldoAnalista);
	document.write("<br>Promedio sueldo de qa: " + promedioSueldoQa);
	document.write("<br>El sexo de la persona con más sueldo es: " + sexoSueldoMaximo);
	if(nombreSueldoFemeninoMaximo != undefined)
	{
		document.write("<br>Nombre del mayor sueldo femenino: " + nombreSueldoFemeninoMaximo);
	}
	else
	{
		document.write("<br>No hay mujeres");
	}
	
	document.write("<br>Cantidad de programadores no binarios con sueldos entre 20000 y 55000: " + contProgramadoresNoBinarios);
}