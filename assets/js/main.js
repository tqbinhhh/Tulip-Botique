document.addEventListener('DOMContentLoaded', () => {

    // Khởi tạo WOW.js cho animation khi cuộn
    if (typeof WOW === 'function') {
        new WOW().init();
    }

    // --- STICKY HEADER ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // --- RESPONSIVE OVERLAY MENU ---
    const menu = document.querySelector('.inner-menu');
    const toggleBtn = document.querySelector('.header-toggle');

    if (menu && toggleBtn) {
        const menuLinks = menu.querySelectorAll('a');

        // Hàm để mở/đóng menu
        const toggleMenu = () => {
            menu.classList.toggle('is-open');
            toggleBtn.classList.toggle('is-active');
            const icon = toggleBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        };

        // Bắt sự kiện click cho nút hamburger
        toggleBtn.addEventListener('click', toggleMenu);

        // Đóng menu khi nhấn vào một link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('is-open')) {
                    toggleMenu();
                }
            });
        });
    }
    
    // Đoạn mã cho nút bấm ở góc trái nếu cần thêm chức năng
    // Hiện tại chỉ là một yếu tố trang trí nên không cần JS

});