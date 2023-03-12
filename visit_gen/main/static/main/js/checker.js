var email = document.getElementById('E').textContent;
var telegram = document.getElementById('T').textContent;
var vk = document.getElementById('V').textContent;
var youtube = document.getElementById('Y').textContent;

document.getElementById("varElementE").innerHTML = '<i class="fa-solid fa-envelope"></i> <a href="mailto:' + email + '">' + email + '</a>';

if (telegram != '') {
    console.log("Телеграмм не пустой")
    console.log(telegram)
    document.getElementById("varElementT").innerHTML = '<i class="fa-brands fa-telegram"></i> <a href="' + telegram + '">' + telegram + '</a>';
} else {
    console.log("Телеграмм пустой")
}

if (vk != '') {
    document.getElementById("varElementV").innerHTML = '<i class="fa-brands fa-vk"></i> <a href="' + vk + '">' + vk + '</a>';
}

if (youtube != '') {
    document.getElementById("varElementY").innerHTML = '<i class="fa-brands fa-youtube"></i> <a href="' + youtube + '">' + youtube + '</a>';
}

if (telegram == '' && vk == '' && youtube == '') {
    document.getElementById("other").innerHTML = '<h5 class="text-muted p-2">Дополнительные контакты не указаны.</h5>'
    document.getElementById("clickable").innerHTML = ''
}