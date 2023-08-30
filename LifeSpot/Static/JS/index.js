﻿// Создаем ассоциативный массив Map для сохранения сессии
let session = new Map();

// Сохраняем информацию о браузере клиента
session.set("userAgent", window.navigator.userAgent);

// Запросим возраст пользователя и сохраним в переменную
let age = prompt("Пожалуйста, введите ваш возраст");
 
if (age >= 18) {
    // Сохраняем возраст пользователя
    session.set("age", age);

    // Сохраняем время начала сессии
    session.set("startDate", new Date().toLocaleString());

    // Те, кто старше 18, увидят приветствие и будут направлены на сайт
    alert("Приветствуем на LifeSpot! " + session.get("start Date"));
  
}
else{
    // Выполним проверку. Если введенное число < 18, либо если введено не число -
    // пользователь будет перенаправлен
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены"); 
    window.location.href = "http://www.google.com";
}
// Выводим в консоль содержимое объекта Map
for (const [key, value] of session) {
    console.log(`${key}: ${value}`);
}
