#Instalacion:

Clona el repositorio https://github.com/EsauRangel/app-likes.git

Abre una terminal en el directorio react 
Ejecuta el comando yarn 

Abre una nueva terminar en el directorio laravel
Ejecuta el comando composer install 

Configura el el archivo .env del proyecto laravel

En DB_USERNAME configura el usuario de tu servidor postgres
En DB_PASSWORD Configura el password de tu servidor postgres



Crea la base de datos likes-app en postgre
Dentro del proyecto laravel
Ejecuta php artisan migrate 
Ejecuta php artisan serve
Dentro del proyecto react
Ejecuta yarn dev



DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=likes-app
DB_USERNAME=TU-USUARIO
DB_PASSWORD=TU-PASSWORD
