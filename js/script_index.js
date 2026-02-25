// ==========================================
// script_index.js
// Animación flotante de palabras tipo "carrete"
// ==========================================

const words = document.querySelectorAll('.floating-words .word');

words.forEach(word => {
    // Posición horizontal aleatoria (0% a 90%)
    word.style.left = Math.random() * 90 + '%';
    // Posición vertical inicial debajo de la pantalla (100% a 150%)
    word.style.top = 100 + Math.random() * 50 + '%';
    // Velocidad aleatoria: de 15 a 35 segundos para subir
    const speed = 15 + Math.random() * 20;
    word.style.animation = `floatUp ${speed}s linear infinite`;
    // Delay aleatorio para que no suban todas a la vez
    word.style.animationDelay = Math.random() * 20 + 's';
    //Variar el tamaño de las palabras
    word.style.fontSize = (30 + Math.random() * 50) + 'px'; // 30px a 80px
});