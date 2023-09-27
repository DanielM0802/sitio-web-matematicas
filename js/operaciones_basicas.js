document.addEventListener('DOMContentLoaded', iniciarApp);


function iniciarApp(){

    //Capturar los elementos html
    const btnSumar = document.querySelector('#btn-sumar');
    const btnRestar = document.querySelector('#btn-restar');
    const btnMultiplicacion = document.querySelector('#btn-multiplicacion');
    const btnDivision = document.querySelector('#btn-division');
    

    btnSumar.addEventListener('click', sumar )
    btnRestar.addEventListener('click', restar )


    console.log(btnSumar)




}



const sumar = () => {
    
    const numeros = abrirPromts();
    const num1 = numeros[0];
    const num2 = numeros[1];
    alert(num1 + num2)
}

const restar = () => {

    const numeros = abrirPromts();


}


const abrirPromts = () => {

    const num1 = parseInt(window.prompt('Ingresa el primer numero'));
    const num2 = parseInt(window.prompt('Ingresa el segundo numero'));

    return [num1, num2]
}