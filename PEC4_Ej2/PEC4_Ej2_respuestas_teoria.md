# PEC 4 Ejercicio 2

1. (0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto). Explica brevemente la estructura y ficheros que ha generado Angular CLI:

  - Para crear un nuevo proyecto Anguar utilizando Angular CLI denominado vinoteca, tengo que utilizar el siguiente comando: <code> ng new vinoteca* </code>

- **Ficheros de configuración en la raíz del proyecto:**
   - tsconfig.json -> contiene la configuración general de escritura del código de TypeScript.
   - tsconfig.app.json -> se relaciona con la aplicación de Angular, cargando sus clases y estableciendo el directorio de salida de la aplicación. Extensión de tsconfig.json.
   - tsconfig.spec.json -> es la configuración de TypeScript para las pruebas de la aplicación. Extensión de tsconfig.json.
   - angular.json -> contiene la configuración de Angular. Además, incluye rutas, versiones, etc.
   - package-lock.json -> es un archivo de bloqueo que contiene información sobre las dependencias/paquetes con sus números de          versión exactos que se instalaron para un proyecto. Esto sirbe para que cuando los desarrolladores clonen el repositorio, puedan instalar dependencias que coincidan exactamente (las versiones) con las instaladas en la máquina/entorno inicial. 
   - package.json ->es la configuración de nuestra aplicación. Contiene el nombre de la app, las dependencias necesarias para su correcta ejecución y entre muchas otras cosas.
   - .editorconfig -> es la configuración de nuestro editor de código. 
   - .gitignore -> son las carpetas o archivos que debe ignorar el git cuando lo añadamos al repositorio, es decir, listado de ficheros y directorios que no queremos que se suban al repositorio de git.
   - ...
- **Directorio** node_modules -> es la carpeta que contiene todas las dependencias de nuestro proyecto.
- **Directorio** src: -> es el directorio desde donde trabajaremos nuestro proyecto y que contiene los distintos módulos que dan forma a nuestra aplicación. Contiene todo el código del proyecto.
   - index.html -> Es el archivo de la página principal del proyecto.
   - main.ts -> Es el archivo Type Script inicial del proyecto donde podrás configurar todas las configuraciones globales del proyecto.
   - styles.css -> Definir estilos que se aplicarán de forma global a todos los componentes de nuestra aplicación
   - test.ts
   - polyfills.ts -> Este archivo incluye polyfills (un fragmento de código que se utiliza para proporcionar una funcionalidad moderna en navegadores antiguos que no lo admiten de forma nativa) necesarios para Angular y se carga antes de la aplicación. Archivo necesario para que la aplicación sea compatible con todos los navegadores.
   - **Directorio** environments -> Directorio donde se encuentra las configuraciones y variables de entorno para poner el proyecto tanto en desarrollo como en producción.
   - **Directorio** assets -> Contiene todos los asset y archivos adicionales para hacer que el proyecto funcione.
   - **Directorio** app -> carpeta donde se ubica toda la implementación de los componentes principales de la aplicación, junto a su template html y archivos de estilos css.
      - **Ficheros** app.component.* -> Conjunto de archivos que forman la classe AppComponent en su totalidad (parte visual del componente AppComponent .html, donde se declara la clase AppComponent .ts, estilos que se van a aplicar solo al componente AppComponent .css y donde se define el código de testing para medir el correcto funcionamiento del componente AppComponent .spec.ts.)
      - **Fichero** app.module.ts -> Fichero que permite importar todos los elementos que se usaran en la aplicación angular, permite importar componentes, módulos y servicios.

2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

- app.module.ts - @NgModule (declarations, imports, providers, bootstrap).

   - El decorador @NgModule() es una función que toma un solo objeto de metadatos, cuyas propiedades describen el módulo.
      - declarations -> Se utiliza para importar componentes pero también directivas y pipes, y poderlos usar en las plantillas HTML.
      - imports -> Sirve para importar los módulos que vas a usar en este NgModule
      - providers -> Sirve para importar servicios. Una vez importados son accesibles en cualquier parte de tu app. 
      - bootstrap -> La vista o componente principal de la aplicación, llamado componente raíz. Por defecto es AppComponent.

- app.component.ts - @Component (selector, templateUrl, styleUrls).

   -  La clase completa AppComponent se distribuye en otros archivos y mediante la función decoradora @Component le indicamos los otros archivos que pertenecen a este componente (selector = app-root, templateUrl = app.component.html, styleUrls = app.component.css)

3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?

   - Si que es posible, escribiendo directamente el código html o css en la propiedad (Ejemplo -> template: <code><h2>About Page</h2></code>). Solo se usaria en caso de código muy muy simple el cual no seria suficiente para formar una app entera. En todo caso, seria muy poco práctico hacerlo. No es nada recomendable, por lo que acabamos de comentar. Lo más recomendable es usar templateUrl y styleUrls para incluir un archivo esxterno html o css con una gran catidad de código.