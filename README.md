# FUNDAPP
Aplicación Movil informativa hibrida que hace uso de React Native y NativeBase para su programación y diseño

Cuando abras la app antes tienes que configurar la direccion de la api a la que apunta. Por defecto está en http://192.168.43.144:8000 (que es mi dirección ip de wifi actual). (no es necesario internet, solo una red entre la pc y el telefono)

Tanto como en los archivos `screens/SettingsScreen.js` y `screens/LinksScreen.js` tienes que cambiar la ip de la api a la que pongas a correr en el servidor de laravel (de esta manera `php artisan serve --host=192.168.44.44 --port=8000` donde la ip que coloqué ahí tiene que ser la direccion (wifi) de la pc con la cual estás sirviendo la api.........
