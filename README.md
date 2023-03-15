# [VisGen - генератор визиток](https://visgen.v6.rocks/)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/vaiegit/visit_generator?label=%D0%A0%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%20%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%3A)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/vaIegit/visit_generator?label=%D0%92%D0%B5%D1%80%D1%81%D0%B8%D1%8F%3A)

![VisGen](visit_gen/main/static/main/favicon/favicon.png)
## Описание
Проект по созданию сайта - генератора визиток.
При переходе на сайт пользватель будет вводить ФИО, телефон, email, ссылки на соц сети (VK, Telegram, YouTube). После ввода этих данных сайт будет выдавать ссылку на визитку и qr код, содержащий её.
## Состав сайта:
* Главная страница, на которой пользователь вводит свои данные для создания визитки
* Визитка пользователя
* Админ-панель в которой будут отображаться все визитки
## Production сервер
В качестве production сервера используется связка gunicorn + nginx (для https),
HTTPS сертификаты получены с помощью [certbot(Let's Encrypt)](https://letsencrypt.org/ru/),
всё это установлено и настроено на VPS под управлением ОС Linux.
## To Do list:
- :heavy_check_mark: Выучить фреймворк Django
- :heavy_check_mark: Написать базовый FrontEnd (скелет сайта)
- :heavy_check_mark: Продумать базу данных
- :heavy_check_mark: Написать BackEnd
- :heavy_check_mark: Завершить FrontEnd часть
- :heavy_check_mark: Выгрузить на хостинг

## Как запустить DEV-сервер? Для этого необходимо:

> :warning: ВНИМАНИЕ: в целях безопасности замените SECRET_KEY в visit_gen/visit_gen/settings.py

```bash
#Склонируйте репозиторий любым для Вас удобным способом
git clone git@github.com:vaIegit/visit_generator.git 
#Установите необходимые зависимости
pip3 install -r requirements.txt 
#Сделайте миграции
python3 visit_gen/manage.py migrate
#Создайте пароль для доступа в админ панель
python3 visit_gen/manage.py createsuperuser
#Запустите сервер
python3 visit_gen/manage.py runserver
```


