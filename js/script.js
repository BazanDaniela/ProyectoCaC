function esMayor(){
    let edad = Number(prompt("Ingrese su edad: "));
    if (edad >= 18)
        alert("Es mayor de edad.");
    else 
        alert("No es mayor de edad."); 
}
esMayor();

function mayor(){
    let edad1 = Number(prompt("Usuario 1 ingrese su edad: "));
    let edad2 = Number(prompt("Usuario 2 ingrese su edad: "));
    let edad3 = Number(prompt("Usuario 3 ingrese su edad: "));
    if (edad1 == edad2 & edad1 == edad3)
        alert("Todos tienen la misma edad.")
    else if (edad1 == edad2){
        if (edad1 > edad3)
            alert("Los usuarios 1 y 2 son los de mayor edad.")
        else
            alert("El usuario 3 es el de mayor edad.")
    }
    else if (edad1 == edad3){
        if (edad1 > edad2)
        alert("Los usuarios 1 y 3 son los de mayor edad.")
        else
        alert("El usuario 2 es el de mayor edad.")
    }
    else if (edad2 == edad3){
        if (edad2 > edad1)
        alert("Los usuarios 2 y 3 son los de mayor edad.")
        else
        alert("El usuario 1 es el de mayor edad.") 
    }
    else if (edad1 > edad2 && edad1 > edad3)
        alert("El usuario 1 es el de mayor edad.");
    else if (edad2 > edad1 && edad2 > edad3)
        alert("El usuario 2 es el de mayor edad.")
    else 
        alert("El usuario 3 es el de mayor edad.")
}
mayor();