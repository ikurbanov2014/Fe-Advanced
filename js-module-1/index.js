/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показыать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы ADMIN_LOGIN, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы ADMIN_LOGIN, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы ADMIN_PASSWORD, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

const loginPanel = prompt('Пожалуйста введите ваш логин!');
const welcome = 'Добро пожаловать!';
const accessDenied = 'Доступ запрещен!';
const userCancel = 'Отменено пользователем!';

let passwordPanel;
if (loginPanel === null) {
    alert(userCancel);
} else {
    switch (loginPanel) {
        case ADMIN_LOGIN:
            let passwordPanel = prompt('Введите пароль');
                switch (passwordPanel) {
                    case null:
                        alert(userCancel);
                        break;
                    case ADMIN_PASSWORD:
                        alert(welcome);
                        break;
                    default:
                        alert(accessDenied);
                        break;
                }     
            break;
        default: 
            alert(accessDenied);
            break;
    }
}