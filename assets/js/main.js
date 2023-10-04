// open
const bars = document.querySelector(".menu__btn");

// close
const onBars = document.querySelector(".menu__btn2");

// Открытие меню
bars.addEventListener('click', function (event) {
    document.querySelector(".nav__list").style.display = "block";

    // Изменение иконки
    onBars.style.display = "block";
    bars.style.display = "none";
});

// Закрытие меню
// Поиск всех элементов с классом ".nav__item"
const items = document.querySelectorAll('.nav__item')

// Для работы всех элементов меню
items.forEach(element => {
    element.addEventListener('click', function (event) {
        document.querySelector(".nav__list").style.display = "none";

        // Изменение иконки
        onBars.style.display = "none";
        bars.style.display = "block";
    })
})

onBars.addEventListener("click", function (event) {
    document.querySelector(".nav__list").style.display = "none";

    // Изменение иконки
    onBars.style.display = "none";
    bars.style.display = "block";
})
