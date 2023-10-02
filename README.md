#Instalacion:

Clona el repositorio https://github.com/EsauRangel/app-likes.git

Abre una terminal en el frontend-likes 
Ejecuta el comando yarn 

Abre una nueva terminar en el directorio backend-likes 
Ejecuta el comando composer install 

Configura el el archivo .env del proyecto backend-likes 

En DB_USERNAME configura el usuario de tu servidor postgres
En DB_PASSWORD Configura el password de tu servidor postgres



Crea la base de datos likes-app en postgre
Ejecuta php artisan migrate 
Ejecuta php artisan serve
Ejecuta yarn dev



DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=likes-app
DB_USERNAME=TU-USUARIO
DB_PASSWORD=TU-PASSWORD
