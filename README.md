<div align="center">

<img alt="foro epica" src="readme.png" width="500">

# PROYECTO-INTEGRADOR-FINAL 
# Argentina Programa 4.0-Tramo II - Lenguajes de Programación I 
# FORO-MULTITEMATICO

</div>


#

# Foro Epica

Foro Epica es una plataforma de discusión en línea donde los usuarios pueden crear, modificar y eliminar publicaciones sobre una variedad de temas. Este proyecto está diseñado para permitir a las personas tener una experiencia de un foro en un entorno virtual.

## Funcionalidades Clave

- **Creación de Publicaciones:** Los usuarios pueden crear nuevas publicaciones en el foro. Cada publicación consta de un título, un mensaje de texto y una URL de imagen.

- **Edición y Eliminación de Publicaciones:** Los usuarios pueden editar y eliminar sus propias publicaciones.

- **Vista de Publicaciones:** Los visitantes y usuarios pueden ver todas las publicaciones en el foro, ordenadas por fecha de creación.

- **Interfaz de Usuario Atractiva:** El foro utiliza una interfaz de usuario amigable y atractiva que facilita la navegación y la participación.

## Tecnologías Utilizadas

- **Node.js:** El backend del foro se construye utilizando Node.js, lo que permite una comunicación eficiente entre el servidor y el cliente.

- **Express.js:** Se utiliza el framework Express.js para gestionar las rutas y solicitudes HTTP.

- **Sequelize:** Sequelize es un ORM (Object-Relational Mapping) que se utiliza para interactuar con la base de datos MySQL.

- **MySQL:** La base de datos MySQL almacena información sobre usuarios, publicaciones y comentarios.

- **EJS:** EJS (Embedded JavaScript) se utiliza como motor de plantillas para renderizar las vistas HTML dinámicamente en el servidor.

- **HTML, CSS y JavaScript:** Para el desarrollo del frontend se utilizan tecnologías web estándar, incluyendo HTML para la estructura, CSS para el diseño y JavaScript para la interactividad.

- **Bootstrap:** Bootstrap un framework de css que se utiliza para estilizar la interfaz de usuario y garantizar que sea responsive y atractiva.


## Instalación y Uso

1. Clona este repositorio en tu máquina local:

```
git clone https://github.com/Jonux13/foro-epica.git
```

2. Accede al directorio del proyecto:
```bash
 cd foro-epica
```
  

3. Instala las dependencias del proyecto:

```
npm install
```

4. Configura la base de datos:
   Para ejecutar la aplicación Foro Epica localmente, necesitas configurar una base de datos MySQL. A continuación, se detallan los pasos para hacerlo:

    - Descarga e instala XAMPP desde su sitio web oficial.

    - Una vez instalado XAMPP, ábrelo y asegúrate de que el servicio de MySQL esté iniciado.

    - Abre phpMyAdmin desde la interfaz de XAMPP.

    - Crea una nueva base de datos llamada db_foro  


5. Inicia la aplicación:
```
npm run dev
```
6. Configuración del Entorno

- Instala la bilioteca dotenv

```
npm install dotenv
```

Antes de ejecutar la aplicación, asegúrate de configurar las siguientes variables de entorno en un archivo `.env` en la raíz del proyecto:

- `PORT`: El puerto en el que se ejecutará la aplicación web.
- `DB_NAME`: El nombre de la base de datos MySQL.
- `DB_USER`: El usuario de la base de datos MySQL.
- `DB_PASSWORD`: La contraseña del usuario de la base de datos MySQL.
- `DB_HOST`: La dirección del host de la base de datos MySQL.
- `DB_DIALECT`: El dialecto de la base de datos (por ejemplo, `mysql`).

Asegúrate de que estas variables estén configuradas correctamente antes de iniciar la aplicación. Puedes editar el archivo `.env` para establecer sus valores.

7. Abre tu navegador web y visita http://localhost:*/post para acceder al Foro Épica.
* coloca el numero del puerto declarada en la variable de entorno PORT, sin el *. 

