// dropdown
document.querySelectorAll('.filters__item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.stopPropagation();

        const dropdown = this.querySelector('.filters__dropdown');
        const imgIcon = this.querySelector('.filters__info-img');

        document.querySelectorAll('.filters__dropdown.active').forEach(openDropdown => {
            if (openDropdown !== dropdown) {
                openDropdown.classList.remove('active');
                openDropdown.previousElementSibling.querySelector('.filters__info-img').style.transform = 'rotate(0deg)';
            }
        });

        const isActive = dropdown.classList.toggle('active');

        if (isActive) {
            imgIcon.style.transform = 'rotate(180deg)';
        } else {
            imgIcon.style.transform = 'rotate(0deg)';
        }
    });
});

document.addEventListener('click', function () {
    document.querySelectorAll('.filters__dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
        dropdown.previousElementSibling.querySelector('.filters__info-img').style.transform = 'rotate(0deg)';
    });
});