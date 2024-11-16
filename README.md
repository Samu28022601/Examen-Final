Para utilizar el programa primero descargaremos el archivo que esta en el repositorio,

***Ejeucion del frontend***
1)en la carpeta que esta nombrado como hotel-reservas-frontend hacemos click derecho, esto nos ejecutara una ventala la cual tendra un opcion llamada open terminal
![image](https://github.com/user-attachments/assets/70f87415-ea32-4f77-837a-aa6cff2b47df)

2) Al realizar el primer paso se abrira el terminal en el cual debemos escribir lo siguiente npm install axios
![image](https://github.com/user-attachments/assets/2116a99b-27b9-45c5-abae-8075264be147)

3) Despues que se installe realizaremos los mismo pasos pero con la excepcion de que en la nueva terminal colocaremos el siguiente comando npm start

![image](https://github.com/user-attachments/assets/c96ff6f1-1348-4c6a-a061-ef0d79c406b4)

4) Despues se ejecutara la pagina de react a la cual ya tendremos acceso a las funciones y caracteristicas del sistema

5) para que se realize la conexion con mysql, abrimos mysql e ingresamos con nuestro usuario, para despues colocar el siguiente codigo para la creacion del las tablas

-- Crear la base de datos
CREATE DATABASE hotel_reservas;

-- Usar la base de datos
USE hotel_reservas;

-- Crear la tabla de reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    tipo_habitacion ENUM('Sencilla', 'Doble', 'Suite') NOT NULL
);

-- Confirmar la creación
DESCRIBE reservas;

6) por ultimo a ejecutar y listo a disfrutar del sistema
   
