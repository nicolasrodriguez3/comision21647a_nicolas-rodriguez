# Foro Personal - Proyecto final Argentina Programa

Este proyecto es una aplicación de foro personal que permite al usuario crear publicaciones sobre diversos temas. Cada publicación incluye un título descriptivo, contenido informativo, una fecha de creación y la opción de adjuntar un enlace (URL) de una imagen de Internet relacionada con el contenido.

La aplicación se ha desarrollado utilizando Node.js, Express, EJS, MYSQL y Tailwind CSS para estilos.

## Características

- Creación de publicaciones con título, contenido y enlace de imagen.
- Visualización de publicaciones con formato atractivo y responsivo en diferentes dispositivos.
- Interfaz de usuario amigable y fácil de usar.

## Ejecución Local

Siga estos pasos para ejecutar el proyecto en su máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/nicolasrodriguez3/comision21647a_nicolas-rodriguez.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd comision21647a_nicolas-rodriguez
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura variables de entorno:
   Crea un archivo ".env" en la raíz del proyecto con la siguiente configuración:

   ```env
   PORT=1234
   DB_NAME=arg_prog
   DB_USERNAME=root
   DB_PASSWORD=root
   DB_HOST=localhost
   DB_DIALECT=mysql
   DB_PORT=3306
   ```

5. Inicia la aplicación:

   ```bash
   npm run dev
   ```

6. Abre tu navegador web y visita http://localhost:1234 para acceder al foro.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías web:

- Node.js: Entorno de tiempo de ejecución JavaScript del lado del servidor.
- Express.js: Framework de aplicación web de Node.js.
- EJS (Embedded JavaScript): Motor de plantillas para generar contenido HTML dinámico.
- Tailwind CSS: Framework CSS para estilizar la interfaz de usuario de manera eficiente.
- MySQL: Sistema de gestión de bases de datos relacional.
- Sequelize: ORM (Mapeo Objeto-Relacional) para interactuar con la base de datos MySQL.

## Screenshots

![Captura de pantalla de la pantalla de inicio](/public/screenshot-1.png)
![Captura de pantalla del formulario para crear nuevos post](/public/screenshot-2.png)

## ¡Gracias!

Quiero finalizar agradeciendo a los profesores y compañeros por los conocimientos brindados y su disposición para responder cada pregunta e incluso ofrecer clases adicionales.

### Mantengámonos en contacto

Puedes conectar conmigo en [Linkedin](https://www.linkedin.com/in/nirodriguez/).
