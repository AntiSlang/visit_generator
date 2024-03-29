let url = window.location.href;


// Пример стартового JavaScript для отключения отправки форм при наличии недопустимых полей
(function() {
    'use strict'

// Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
var forms = document.querySelectorAll('.needs-validation')

// Зацикливайтесь на них и предотвращайте отправку
Array.prototype.slice.call(forms)
    .forEach(function(form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
})
})()



$(document).ready(function () {
    $(".phone").mask("+7(999)999-9999")
    console.log("файл загружен")
});

new QRCode(document.getElementById("qrcode"), url);

