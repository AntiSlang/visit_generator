
function test() {
    var name = $('#Names').val();
    var pass = $('#admin_pass').val();
    console.log(name, pass);

    if (name=="") {
        alert("Введите имя администратора");
    }
    if (pass=="") {
        alert("Введите пароль администратора");
    }

}

// Пример стартового JavaScript для отключения отправки форм при наличии недопустимых полей
(function () {
  'use strict'

  // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
  var forms = document.querySelectorAll('.needs-validation')

  // Зацикливайтесь на них и предотвращайте отправку
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
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
    $('#Send').on('click', test);
    $(".phone").mask("+7(999)999-9999")
});