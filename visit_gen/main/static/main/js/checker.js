var email = document.getElementById('E').textContent;
var telegram = document.getElementById('T').textContent;
var youtube = document.getElementById('Y').textContent;
var vk = document.getElementById('V').textContent;

document.getElementById("varElementE").innerHTML = '<i class="fa-solid fa-envelope"></i> ' + email;

if (telegram != '') {
    document.getElementById("varElementT").innerHTML = '<i class="fa-brands fa-telegram"></i> ' + telegram;
}

if (youtube != '') {
    document.getElementById("varElementY").innerHTML = '<i class="fa-brands fa-youtube"></i> ' + youtube;
}

if (vk != '') {
    document.getElementById("varElementY").innerHTML = '<i class="fa-brands fa-vk"></i> ' + vk;
}

if (telegram == '' && youtube == '' && vk == '') {
    document.getElementById("other").innerHTML = 'Пользователь не указал дополнительные контакты.'
}