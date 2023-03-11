var email = document.getElementById('E').textContent;
var telegram = document.getElementById('T').textContent;
var vk = document.getElementById('V').textContent;
var youtube = document.getElementById('Y').textContent;

document.getElementById("varElementE").innerHTML = '<i class="fa-solid fa-envelope"></i> ' + email;

if (telegram != '') {
    document.getElementById("varElementT").innerHTML = '<i class="fa-brands fa-telegram"></i> ' + telegram;
}

if (vk != '') {
    document.getElementById("varElementV").innerHTML = '<i class="fa-brands fa-vk"></i> ' + vk;
}

if (youtube != '') {
    document.getElementById("varElementY").innerHTML = '<i class="fa-brands fa-youtube"></i> ' + youtube;
}

if (telegram == '' && vk == '' && youtube == '') {
    document.getElementById("other").innerHTML = 'Пользователь не указал дополнительные контакты.'
}