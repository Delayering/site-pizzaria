 // Menu hamburger para mobile
    document.getElementById('menuToggle').addEventListener('click', function() {
    const navContainer = document.getElementById('navContainer');
    navContainer.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

    // Fechar menu ao clicar em um link (apenas mobile)
    document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.getElementById('navContainer').classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

    // Ajustar menu conforme redimensionamento da tela
    function handleResize() {
    const navContainer = document.getElementById('navContainer');
    if (window.innerWidth > 768) {
    navContainer.style.display = 'flex';
} else {
    navContainer.style.display = 'none';
    navContainer.classList.remove('active');
    document.body.classList.remove('menu-open');
}
}

    // Inicializar na carga da página
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);


 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         target.scrollIntoView({
             behavior: 'smooth',
             block: 'start'
         });
     });
 });