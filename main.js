// Находим кнопку бургера и само меню
let newMenu = document.querySelector('.new-menu');
let menu = document.querySelector('.h-menu');

// Отслеживаем клик по кнопке
// Назначаем обработчика событий click
newMenu.addEventListener('click', () => {
    /* classList — это специальное встроенное свойство в JavaScript, которое содержит в себе все классы выбранного HTML-элемента.
    У classList есть 4 главных метода, которые используют разработчики каждый день:
    
1. .add() — Добавить класс
Просто берёт и дописывает класс к элементу. Если такой класс уже есть, он не будет дублироваться.
// Было в HTML: <nav class="h-menu"></nav>
menu.classList.add('is-open');
// Стало в HTML: <nav class="h-menu is-open"></nav>

2. .remove() — Удалить класс
Убирает указанный класс у элемента. Если класса и так не было, JavaScript просто ничего не сделает (ошибки не будет).
// Было в HTML: <nav class="h-menu is-open"></nav>
menu.classList.remove('is-open');
// Стало в HTML: <nav class="h-menu"></nav>

3. .toggle() — Переключатель (Тумблер)
Самый полезный метод для бургер-меню, вкладок и спойлеров. Он работает как выключатель света: если класса нет — он его добавляет, а если класс уже есть — он его удаляет.
// Один метод заменяет собой целое условие if/else:
menu.classList.toggle('is-open'); 

4. .contains() — Проверить наличие
Этот метод не меняет классы, а просто проверяет элемент. Он возвращает ответ true (да, класс есть) или false (нет, такого класса у элемента нет).
if (menu.classList.contains('is-open')) {
    console.log("Меню сейчас открыто!");
}*/
    menu.classList.toggle('is-open');
});

// 1. Закрывать меню при клике на кнопу
let menuClose = document.querySelector('.new-menu-2'); //находим кнопку
let menu2 = document.querySelector('.h-menu'); //находим меню

menuClose.addEventListener('click', () => {
    menu2.classList.remove('is-open'); // Гарантированно закроет меню
});

// Просто "включаем" :active на мобильных Safari/Chrome
document.addEventListener('touchstart', function() {}, { passive: true });

