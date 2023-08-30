//// Запрос имени пользователя
//let name = prompt('Как вас зовут? ');

//// Приветствие посетителя по имени
//alert(`Приветствую ${name}! В вашем имени - ${name.length} символ(ов).`)

//let elements = document.getElementsByTagName('*');
//alert(`Данная html страница содержит ${elements.length} элементов`);


function Filter() {
    // Считываем ввод пользователя
    let searchData = document.getElementsByTagName('input')[0].value.toLowerCase();
    
    // Получим все контейнеры с видео
    let elements = document.getElementsByClassName('video-container');

    // Пробежимся в цикле по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        // Получаем описание видео
        let videoDescription = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();

        // Сравниваем описание видео с поисковой строкой
        if (!videoDescription.includes(searchData)) {
            // Скрываем видео
            elements[i].style.display = 'none'
        } else {
            // Включаем найденое видео
            elements[i].style.display = 'inline-block'
        }
    }
}
