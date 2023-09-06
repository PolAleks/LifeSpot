let session = new Map();

function checkAge() {
    // Запросим возраст пользователя и сохраним в переменную
    let age = prompt("Пожалуйста, введите ваш возраст");
    if (age >= 18) {
        session.set("age", age);
        alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());        
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
}


function handleSession() {
    // Сохраняем информацию о браузере клиента
    session.set("userAgent", window.navigator.userAgent);
    // Сохраняем время начала сессии
    session.set("startDate", new Date().toLocaleString());
}

const sessionLog = function () {
    for (const [key, value] of session) {
        console.log(`${key}: ${value}`);
    }
}

const inputParseFunction = function() {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}

function filterContent() {

    // Получим все контейнеры с видео
    let elements = document.getElementsByClassName('video-container');

    // Пробежимся в цикле по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        // Получаем описание видео
        let videoDescription = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();

        // Сравниваем описание видео с поисковой строкой
        if (!videoDescription.includes(inputParseFunction())) {
            // Скрываем видео
            elements[i].style.display = 'none'
        } else {
            // Включаем найденое видео
            elements[i].style.display = 'inline-block'
        }
    }
}

const subscribe = function () {
    alert("Подпишись на инсту, будешь маладець!");
}
