var c = null;
var args = process.argv;
var a = args[2];
var signo = args[3];
var b = args[4];
var c = args[5];

switch (c){
    case undefined: 
        switch(signo){
            case "mas": mas(a,b); break;
            case "menos":menos(a,b); break;
            case "por":por(a,b); break;
            case "entre":entre(a,b); break;
            default: non(); break;
}
        break;
    default:    
        console.log("Error al ingresar datos, por favor ingrese algo similar al ejemplo : 1 mas 1");   }


function mas(a,b) {
    var tot = parseInt(a) + parseInt(b);
    console.log("El resultado de la operacion es: "+tot);
}

function menos(a,b) {
    var tot = a-b;
    console.log("El resultado de la operacion es: "+tot);
}

function por(a,b) {
    var tot = a*b;
    console.log("El resultado de la operacion: " + tot);
}

function entre(a,b) {
    var tot = a/b;
    console.log("El resultado de la operacion es: " + tot);
}

function non(){
    console.log("Error al ingresar datos, por favor ingrese algo similar al ejemplo : 1 mas 1");
}