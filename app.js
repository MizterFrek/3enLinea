 swal(  'TRABAJO FINAL - BECA JOVENES BICENTENARIO\n\n'+
         'Bienvenido a mi Juego HTML: 3 en Línea\n\n\n'+
         'Espero lo disfrute');
       
let turno = true;
document.getElementById('turno').innerHTML='Comienza el Jugador 1';
var reinicio = document.getElementById('reinicio');
const matriz = [];
const box = []
var numTurno = 0;

function push(index)
{   
    if(win()) return                        
    if(box[index] !== undefined) return     
    turno = !turno;                         
    numTurno++;                             
    box[index]   = 'btn'+index;                         
    const btn    = document.getElementById(box[index]); 
    let player = turno ? 'Jugador 1':'Jugador 2';  
    btn.className += turno ? 'cross':'circle';
    matriz[index] = player;
  
    
    if(win())
    {
        player = turno ? 'Jugador 2':'Jugador 1';
        document.getElementById('turno').innerHTML='Ha ganado el '+player;
        reinicio.classList.remove('oculto');
        return alert('Ha ganado '+player);
    }
    else if(empate())
    {
        player = turno ? 'Jugador 2':'Jugador 1';
        document.getElementById('turno').innerHTML='Empate...!';
        reinicio.classList.remove('oculto');
        return alert('Empate');
    }
    document.getElementById('turno').innerHTML='Turno del '+player;
}

function restart()
{
    location.reload();
}

function win()
{
    //horizontal
    if(matriz[0] && matriz[0]==matriz[1] && matriz[1]==matriz[2]) return true;
    if(matriz[3] && matriz[3]==matriz[4] && matriz[4]==matriz[5]) return true;
    if(matriz[6] && matriz[6]==matriz[7] && matriz[7]==matriz[8]) return true;
    //vertical
    if(matriz[0] && matriz[0]==matriz[3] && matriz[3]==matriz[6]) return true;
    if(matriz[1] && matriz[1]==matriz[4] && matriz[4]==matriz[7]) return true;
    if(matriz[2] && matriz[2]==matriz[5] && matriz[5]==matriz[8]) return true;
    //diagonal
    if(matriz[0] && matriz[0]==matriz[4] && matriz[4]==matriz[8]) return true;
    if(matriz[6] && matriz[6]==matriz[4] && matriz[4]==matriz[2]) return true;

    return false;
};

function empate()
{
    if(numTurno >= 9)return true
    return false;
}