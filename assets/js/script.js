document.addEventListener('DOMContentLoaded', () => {

    // --- KHỞI TẠO THƯ VIỆN AOS CHO ANIMATION ---
    // Đảm bảo AOS được khởi tạo sau khi mọi thứ đã sẵn sàng
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,  // Thời gian animation
            once: true,     // Chỉ animate một lần
            offset: 50,     // Animate sớm hơn một chút
        });
    }

    // --- STICKY HEADER ---
    // Thêm background cho header khi người dùng cuộn chuột
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- RESPONSIVE OVERLAY MENU ---
    // Xử lý việc bật/tắt menu trên mobile/tablet
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');

    if (navMenu && navToggle) {
        const navLinks = navMenu.querySelectorAll('a');

        // Hàm để bật/tắt menu
        const toggleMenu = () => {
            // Thêm/xóa class để hiện/ẩn menu overlay
            navMenu.classList.toggle('is-open');
            // Thêm/xóa class để di chuyển nút X
            navToggle.classList.toggle('is-active');
            
            // Thay đổi icon giữa hamburger và dấu X
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        };

        // Gán sự kiện click cho nút hamburger
        navToggle.addEventListener('click', toggleMenu);

        // Đóng menu khi người dùng nhấn vào một link trong menu
        // (Hữu ích cho trang single-page)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('is-open')) {
                    toggleMenu();
                }
            });
        });
    }

});