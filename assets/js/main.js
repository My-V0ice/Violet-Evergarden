const bars = document.querySelector(".menu__btn");

// Открытие меню
bars.addEventListener('click', function (event) {
    document.querySelector(".nav__list").style.display = "block";
});

// Поиск всех элементов с классом ".nav__item"
const items = document.querySelectorAll('.nav__item')

// Для работы всех элементов меню
items.forEach(element => {
    element.addEventListener('click', function (event) {
        document.querySelector(".nav__list").style.display = "none";
    })
})
