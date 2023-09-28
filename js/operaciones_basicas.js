document.addEventListener('DOMContentLoaded', iniciarApp);


function iniciarApp(){

    //Capturar los elementos html
    const btnSumar = document.querySelector('#btn-sumar');
    const btnRestar = document.querySelector('#btn-restar');
    const btnMultiplicacion = document.querySelector('#btn-multiplicacion');
    const btnDivision = document.querySelector('#btn-division');
    
    //Creando un Evento
    btnSumar.addEventListener('click', sumar )
    btnRestar.addEventListener('click', restar )
    btnMultiplicacion.addEventListener('click',multiplicacion  )
    btnDivision.addEventListener('click',division  )


}



const sumar = () => {
    
    const numeros = abrirPromts();
    const num1 = numeros[0];
    const num2 = numeros[1];
    alert(num1 + num2)
}

const restar = () => {

    const numeros = abrirPromts();
    const num1 = numeros[0];
    const num2 = numeros[1];
    alert(num1 - num2)

}

const multiplicacion = () => {

    const numeros = abrirPromts();
    const num1 = numeros[0];
    const num2 = numeros[1];
    alert(num1 * num2)

}

const division = () => {

    const numeros = abrirPromts();
    const num1 = numeros[0];
    const num2 = numeros[1];
    alert(num1 / num2)

}



const abrirPromts = () => {

    const num1 = parseInt(window.prompt('Ingresa el primer numero'));
    const num2 = parseInt(window.prompt('Ingresa el segundo numero'));

    return [num1, num2]
}