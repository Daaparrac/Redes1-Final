# Redes1-Final

## Para la instalación del clinicSearch con Servisalud se requiere de los siguientes programas

Web Chrome Services (extensión de google Chrome)
Apache2.4
Php 5.6
Mysql Server y Workbench 8.0
angular node js
Un editor de texto preferiblemente (SublimeText3)

## Instalación y Despliegue

Al tener instalados estos programas en la computadora, para el despliegue del clinic search descargue el archivo final redes1.doc y en el apartado implementacion se muestra la configuración del api y archivos para su completo despliegue

Para la instalación del Servisalud debe tener en cuenta que el servicio apache este instalado y corriendo. para esto se puede guiar de el siguiente enlace http://lifeofageekadmin.com/how-install-apache-2-4-php-5-6-and-mysql-5-6-26-on-windows-10/

En la instalación del Angular node js lo puede descargar desde la pagina principal https://nodejs.org/es/download/ y para instalar el complemento de angular en la powershell de windows escribir la siguiente linea de codigo. npm install -g angular

Para el despliegue final se descargara el archivo Servisalud.zip y su contenido se guardara en la direccion ../Apache24/htdocs/ para verificar el despliegue se va al navegador de su preferencia

Mediante el archivo DumpServisalud, podemos hacer la importacion de la base de datos en MySQL Workbench la cual se debe crear una base de datos llamada servi_salud o en caso tal de querer darle un nombre diferente debera cambiar el archivo de conexión el cual se encuentra en la siguiente ruta ..\ServiSalud\php\classes\class.Database.php 

para saber si quedo correcto el despliegue ir a la siguiente dirección http://localhost/Servisalud/#/ y Listo!.



