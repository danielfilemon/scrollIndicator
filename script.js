// Script para o botão abrir/fechar
const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

toggleButton.addEventListener('click', () => {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.textContent = 'Fechar';
    } else {
        content.style.display = 'none';
        toggleButton.textContent = 'Abrir';
    }
});

// Script para o scrollIndicator
window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentScrolled = (window.scrollY / maxScroll) * 100;
    scrollIndicator.style.width = percentScrolled + '%';
});
