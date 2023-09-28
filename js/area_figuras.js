document.addEventListener('DOMContentLoaded', iniciarApp);


function iniciarApp(){


        //FORMA 2 DE CAPTURAR Y ASIGNAR EVENTOS A ELEMENTOS HTML
        const botones = document.querySelectorAll('.tabla button')

        //Creando un Evento
        botones[0].addEventListener('click', calcularAreaCuadrado );
        botones[1].addEventListener('click', calcularAreaRectangulo );
        botones[2].addEventListener('click', calcularAreaTriangulo );
        botones[3].addEventListener('click', calcularAreaCirculo );

}

const solicitarNumero = (dato, figura) => parseInt( window.prompt(`Ingresa ${dato} del ${figura}`));

const calcularAreaCuadrado = () => {
    const lado = solicitarNumero('lado', 'cuadrado');
    const area = lado * lado;
    alert('El área del cuadrado es: ' + area)
}
const calcularAreaRectangulo = () => {
    const largo = solicitarNumero('largo', 'rectangulo');
    const ancho = solicitarNumero('ancho', 'rectangulo');
    const area = largo * ancho;
    alert('El área del rectangulo es: ' + area)

}
const calcularAreaTriangulo = () => {
    const base = solicitarNumero('base', 'triangulo');
    const altura = solicitarNumero('altura', 'triangulo');
    const area = (base * altura) / 2;
    alert('El área del triangulo es: ' + area)
}
const calcularAreaCirculo = () => {
    const radio = solicitarNumero('radio', 'circulo');
    const PI = Math.PI;    
    const area =  PI * Math.pow(radio, 2);
    alert('El área del circulo es: ' + area)
}
