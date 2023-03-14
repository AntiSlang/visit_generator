# Сайт - генератор визиток
## Описание
Проект по созданию сайта - генератора визиток.
При переходе на сайт пользватель будет вводить ФИО, телефон, email, ссылки на соц сети (VK, Telegram, YouTube). После ввода этих данных сайт будет выдавать ссылку на визитку и qr код, содержащий её.
## Состав сайта:
* Главная страница, на которой пользователь вводит свои данные для создания визитки
* Визитка пользователя
* Админ-панель в которой будут отображаться все визитки
## To Do list:
- :heavy_check_mark: Выучить фреймворк Django
- :heavy_check_mark: Написать базовый FrontEnd (скелет сайта)
- :heavy_check_mark: Продумать базу данных
- :heavy_check_mark: Написать BackEnd
- :heavy_check_mark: Завершить FrontEnd часть
- :heavy_check_mark: Выгрузить на хостинг

## Как запустить сервер? Для этого необходимо:

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

### :warning: ВНИМАНИЕ
В целях безопасности замените SECRET_KEY в visit_gen/visit_gen/settings.py
