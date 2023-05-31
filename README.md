# Nap Leaflet (Backend)

Лаконічний сервер на expres для взаємодії з фронтенд застосунком https://github.com/ihor-soloviov/map-leaflet

## Вимоги

Перед початком роботи переконайтеся, що у вас встановлені наступні компоненти:

- Node.js - [Завантажити Node.js](https://nodejs.org)
- PostgreSQL - [Завантажити PostgreSQL](https://www.postgresql.org/download/)

## Установка

1. Склонуйте репозиторій:

   ```shell
   git clone https://github.com/your-username/your-project-backend.git
   
  Перейдіть в папку проекту:

shell

cd your-project-backend

Встановіть залежності:

shell

npm install

Створіть базу даних та таблицю:

    Створіть базу даних "leaflet" в PostgreSQL.
    Виконайте SQL-запит з файлу "db.sql" для створення таблиці "places". (Переконайтеся, що у вас встановлено PostgreSQL та ви маєте права на створення бази даних та таблиці.)

Налаштуйте з'єднання з базою даних:

Відкрийте файл "db.js" та вкажіть налаштування з'єднання з вашою базою даних. Замініть значення host, port, database, user та password на відповідні для вашої бази даних PostgreSQL.

Запустіть сервер:

shell

    npm start

    Сервер буде доступний за адресою http://localhost:8081.

