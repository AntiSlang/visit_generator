
function test() {
    var name = $('#admin_name').val();
    var pass = $('#admin_pass').val();
    console.log(name, pass);

    if (name=="") {
        alert("Введите имя администратора");
    }
    if (pass=="") {
        alert("Введите пароль администратора");
    }

}


$(document).ready(function () {
    $('.send').on('click', test);
    $(".phone").mask("+7(999)999-9999")
});