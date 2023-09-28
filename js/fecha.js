document.addEventListener('DOMContentLoaded', calcularFecha);


//fecha del día (día, mes, año, hora y minutos).
function calcularFecha(){
    const fechaSpan = document.querySelector('.fecha span');
    const fecha = new Date();
    //formatear fecha
    const fechaFormateada = `${fecha.getDate()} / ${ fecha.getMonth() + 1} / ${fecha.getFullYear()} / ${fecha.getHours() } : ${fecha.getMinutes()} ` 
    fechaSpan.textContent = fechaFormateada;
}