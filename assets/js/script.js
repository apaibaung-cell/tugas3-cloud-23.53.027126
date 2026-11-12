
document.addEventListener('DOMContentLoaded', () => {
    // Mengambil tombol menu dan navigasi
    const menuButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Fungsi menu navigasi untuk tampilan HP
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');

            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.textContent = isOpen ? '×' : '☰';
        });

        // Menutup menu setelah tautan navigasi diklik
        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.textContent = '☰';
            });
        });
    }

    // Menangani tautan Tugas 1 dan Tugas 2 yang belum diisi
    document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
        link.addEventListener('click', (event) => {
            if (link.getAttribute('href') === '#') {
                event.preventDefault();
                alert('Silakan ganti tautan ini dengan URL hasil Tugas 1 atau Tugas 2.');
            }
        });
    });
});
