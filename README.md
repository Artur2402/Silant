# Silant
# Инструкция по запуску и тестированию проекта:
## Backend: 1. Установка зависимостей: 

Склонируйте проект и перейдите в директорию проекта:
```
git clone https://github.com/Artur2402/Silant.git
cd backend
```
Установите виртуальное окружение и активируйте его:
```
python -m venv env
source env/bin/activate  # Linux/MacOS
.\env\Scripts\activate  # Windows
```
Установите зависимости проекта:
```
pip install -r requirements.txt
```
## 2. Настройка окружения: 
Создайте файл .env в корневой директории и добавьте следующие переменные:
```
DEBUG=True
SECRET_KEY=<ваш секретный ключ>
```
Сгенерированный ключ Ключ для Django можно сгенерировать по пути https://djecrety.ir/
## 3. Подготовка базы данных: 
Примените миграции для создания нужных таблиц в базе данных:
```
python manage.py makemigrations
python manage.py migrate
```
## 4. Запуск сервера
```
python manage.py runserver
```
Доступ к DFR API - http://127.0.0.1:8000/api/
## Frontend: 1. Открытие клиентской части:
Перейдите в директорию frontend:
```
cd frontend
```
Установите зависимости:
```
npm i
npm install
```
Запустите проект:
```
npm start
```

### Примечания:
Логин и пароль к Админке:
```
admin
admin
```
Пароль для все пользователей:
```
user1234
```
### Логины пользователей:
Клиенты:
```
AO_Zander
IP_Trudnikov
OOO_FPK21
OOO_Komplekt_Postavka
OOO_MNS77
OOO_RMK
OOO_Ranskiy_LPH
```
Сервисные компании:
```
OOO_FNS
OOO_Promyshlennaya_Technika
OOO_Silent
```
Менеджеры:
```
SuperManager
```
