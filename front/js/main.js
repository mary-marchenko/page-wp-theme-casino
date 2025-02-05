// dropdown
document.querySelectorAll('.filters__item').forEach(item => {
    item.addEventListener('click', function (e) {
        // Зупиняємо спливання події, щоб уникнути закриття через клік на батьківські елементи
        e.stopPropagation();

        const dropdown = this.querySelector('.filters__dropdown');
        const imgIcon = this.querySelector('.filters__info-img');

        // Закриваємо всі відкриті списки і скидаємо повороти іконок
        document.querySelectorAll('.filters__dropdown.active').forEach(openDropdown => {
            if (openDropdown !== dropdown) {
                openDropdown.classList.remove('active');
                openDropdown.previousElementSibling.querySelector('.filters__info-img').style.transform = 'rotate(0deg)';
            }
        });

        // Перемикаємо клас active для поточного списку
        const isActive = dropdown.classList.toggle('active');

        // Додаємо або прибираємо поворот для іконки
        if (isActive) {
            imgIcon.style.transform = 'rotate(180deg)';
        } else {
            imgIcon.style.transform = 'rotate(0deg)';
        }
    });
});

// Закриваємо всі відкриті списки при кліку поза ними
document.addEventListener('click', function () {
    document.querySelectorAll('.filters__dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
        dropdown.previousElementSibling.querySelector('.filters__info-img').style.transform = 'rotate(0deg)';
    });
});