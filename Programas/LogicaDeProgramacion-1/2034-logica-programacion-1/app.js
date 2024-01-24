//Variables
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt (prompt (`Me indicas un numero entre el 1 y ${numeroMaximo}:`));
    console.log(typeof(numeroUsuario));
    /* Este codigo realiza la comparacion */
    if(numeroUsuario == numeroSecreto){
        //Fue verdadera la condicion
        alert(`Acertaste el numero: ${numeroUsuario}. Lo hicistes en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementa el contador cuando no acierta 
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condicion no se cumplio
        //alert('No acertaste');
    }
}
