// Controle do Botão de Curtida
const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');

let count = 0;
let isLiked = false;

likeBtn.addEventListener('click', () => {
    if (!isLiked) {
        count++;
        isLiked = true;
        likeBtn.classList.add('liked');
    } else {
        count--;
        isLiked = false;
        likeBtn.classList.remove('liked');
    }
    likeCount.textContent = count;
});

// Controle do Modo Escuro
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Modo Claro';
    } else {
        themeToggle.textContent = '🌙 Modo Escuro';
    }
});