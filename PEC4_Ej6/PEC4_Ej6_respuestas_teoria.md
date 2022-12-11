# PEC 4 - Ejercicio 6

1. **¿Cuáles son los** style encapsulation **de los componentes? Pon un ejemplo de uso de cada uno de ellos.**

    1. **ShadowDom** -> La aplicación utiliza la implementación nativa de shadow DOM del navegador. Los elementos se encapsulan dentro de un ShadowRoot (usado como elemento host del componente) y aplicar los estilos provistos de manera aislada.
       - Ejemplo:

    - @Component({
        - selector: 'app-shadow-dom-encapsulation',
        - template: `
            - <'h2>ShadowDom</'h2>
            - <'div class="shadow-message">Shadow DOM encapsulation</'div>
            - <'app-emulated-encapsulation></'app-emulated-encapsulation>
            - <'app-no-encapsulation></a'pp-no-encapsulation>
        - `,
        - styles: ['h2, .shadow-message { color: blue; }'],
        - encapsulation: ViewEncapsulation.ShadowDom,
    - })
    - export class ShadowDomEncapsulationComponent { }

    2. **Emulated** -> Los estilos están preprocesados. Se añade un atributo de elemento host a cada selector que abarca el estilo del elemento host. Cada elemento DOM tiene un atributo _ngcontent, generado automáticamente y único en su host, adjunto. Estos identifican a qué host pertenece (a que componente pertenece) el elemento y, por lo tanto, qué estilos deben aplicarse a él.
       - Ejemplo:

    <code>
    @Component({
        selector: 'app-emulated-encapsulation',
        template: `
            <'h2>Emulated</'h2>
            <'div class="emulated-message">Emulated encapsulation</'div>
            <'app-no-encapsulation></'app-no-encapsulation>
        `,
        styles: ['h2, .emulated-message { color: green; }'],
        encapsulation: ViewEncapsulation.Emulated,
    })
    export class EmulatedEncapsulationComponent { }
    </code>

    3. **None** -> Elimina toda la encapsulación. Los estilos de cualquiera de las hojas de estilo, independientemente de que se apliquen directamente a un componente, se aplicarán globalmente a la aplicación.
       - Ejemplo:

    <code>
    @Component({
        selector: 'app-no-encapsulation',
        template: `
            <'h2>None</'h2>
            <'div class="none-message">No encapsulation</'div>
        `,
        styles: ['h2, .none-message { color: red; }'],
        encapsulation: ViewEncapsulation.None,
    })
    export class NoEncapsulationComponent { }
    </code>

2. **¿Qué es el** shadow DOM **?**

-  Shadow DOM es una 'subvariedad' del DOM estándar y un pilar fundamental de los componentes. Estas 'sombras de DOM' las generan los mismos navegadores igual que los DOM convencionales de forma automática a partir del código HTML, pero no se aplica a toda la aplicación, sino solo al los componentes del proyecto que se expresan en dicho código. Además, los Shadow DOM aíslan los elementos contenidos de cualquier indicación de diseño o estructura que se aplique a todo el proyecto, como determinadas instrucciones CSS. Dicho de otra forma, los Shadow DOM son cápsulas independientes de códigos dentro de un DOM convencional, pero con su propio rango de validez.

- Estructura de Shadow DOM -> existe un número indefinido de Shadow Trees, parecido al árbol del documento en general (estructura del proyecto). Cada uno de estos árboles, cuya raíz se denomina Shadow Root, cuenta son sus propios elementos y su propio estilo. Los Trees siempre se asignan a un elemento determinado del árbol de documento de orden superior o a otro Shadow Tree. En ambos casos, el elemento al que están asignados se denomina Shadow Host. La transición entre DOM normal y DOM oculto se denomina Shadow Boundary.

3. **¿Qué es el** changeDetection **?**

- ChangeDetection es la estrategia que sigue Angular para detectar cada vez que algo cambia en la aplicación. Angular comprobará todas las propiedades del componente para verificar si la vista está actualizada. Esto es muy útil porque no tenemos que preocuparnos de que los componentes no muestren su estado más reciente en la vista cuando una propiedad cambia. La desventaja es su rendimiento. Cuando la aplicación crezca, Angular tendrá que comprobar cada vez más componentes y sus propiedades, lo que afectará a la experiencia del usuario. Esto es en el caso de la estrategia changeDetection por defecto de Angular, pero existe otro tipo de estrategia llamada OnPush, la cual es una estrategia manual de detección de cambios, definida por el programador, es más laboriosa pero la carga de trabajo del motor de Angular es mucho menor.

4. **¿Qué diferencias existen entre las estrategias** Default **y** OnPush **? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.**

- Diferencias:
   - En la estrategia Default, Angular no tendrá ninguna suposición sobre la dependencia del componente y comprobará cada componente desde el árbol de componentes de arriba a abajo cada vez que un evento active la detección de cambios en los eventos del navegador, temporizadores, XHR y promesas. En cambio, en la estrategia OnPush, Angular omite las comprobaciones de los componentes que utilizan la estrategia OnPush y todos sus componentes secundarios. Con esta estrategia, Angular solo actualizará el componente si ocurren una o más de estas condiciones:
      - La referencia de entrada ha cambiado
      - Un evento del componente o de uno de sus hijos.
      - La tubería asíncrona vinculada a la plantilla emite un nuevo valor.
      - Se activó manualmente la detección de cambios
      - Entre otros.
- Cuándo usar una y otra?
   - Podría ser más cómodo usar la opción predeterminada, segun las necesidades del proyecto y del programador, cuándo el proyecto tiene un tamaño 'pequeño' evitando asi tener más trabajo implementando la estrategia onPush y aprobechando así esta función que nos brinda Angular, sin embargo, a medida que la aplicación se haga más grande, la complejidad de la detección de cambios aumentará, afectado el rendimiento de la aplicación. Esa es la razón por la que podemos considerar OnPush como nuestra estrategia de detección de cambios para proyecto medianos y grandes. Como hemos mencionado, dependerá del tamaño del pryecto utilizar una estrategia u otra, ya que su elección tiene efecto directo en el rendimiento de la aplicación y por ende la experiencia del usuario.
- Ventajas e inconvenientes:
   - Default -> La ventaja principal que nos ofrece esta estratégia es más comodidad y menos trabajo para usu uso e implementación dado que dicha estrategia está predefinida por Angular y hará una revisión entera de todos los componentes del proyecto para su correcta visualización. El principal inconveniente es la carga de trabajo que supone utilizar dicha estratégia en proyectos medianos y grandes, probocando efectes negativos en el rendimiento de la aplicación.
   - OnPush -> La ventaja principal de usar está estratégia es la eficiencia que ofrece en la aplicación a la hora de detectar los cambios y recargarlos en la plantilla, ya que, no se revisa en su totalidad el árbol de componentes. El principal inconveniente es la carga de trabajo que tiene que realizar el programador para la implementación de esta estratégia en comparación a la Default.

5. **Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los** hooks OnChanges, OnInit, AfterViewInit y OnDestroy, **puesto que son los más utilizados.**

- Cada componente tiene un ciclo de vida, una cantidad de etapas diferentes que atraviesa. Hay 8 etapas diferentes en el ciclo de vida de los componentes. Cada etapa se denomina 'lifecycle hook event'. Podemos utilizar estos eventos en diferentes fases de nuestra aplicación para obtener el control de los componentes.
El constructor de la clase de componente se ejecuta primero, antes de la ejecución de cualquier otro lifecycle hook. Después de ejecutar el constructor, Angular ejecuta sus métodos de enganche de ciclo de vida en un orden específico, los cuales se exponen y describen a continuación:

   0. **Constructor**
   1. **OnChanges:** Este evento se ejecuta cada vez que se cambia un valor de un input control dentro de un componente. Se activa primero cuando se cambia el valor de una propiedad vinculada. Siempre recibe un change data map, que contiene el valor actual y anterior de la propiedad vinculada envuelta en un SimpleChange.
   2. **OnInit:** Se ejecuta una vez que Angular ha desplegado los data-bound properties (variables vinculadas a datos) o cuando el componente ha sido inicializado, una vez que OnChanges se haya ejecutado. Este evento es utilizado principalmente para inicializar la data en el componente.
   3. **DoCheck:** Se activa cada vez que se verifican las propiedades de entrada de un componente. Este método nos permite implementar nuestra propia lógica o algoritmo de detección de cambios personalizado para cualquier componente.
   4. **AfterContentInit:** Se ejecuta cuando Angular realiza cualquier muestra de contenido dentro de las vistas de componentes y justo después de DoCheck. Actuando una vez que todas las vinculaciones del componente deban verificarse por primera vez. Está vinculado con las inicializaciones del componente hijo.
   5. **AfterContentChecked:** Se ejecuta cada vez que el contenido del componente ha sido verificado por el mecanismo de detección de cambios de Angular (se llama después del método ngAfterContentInit). Este también se invoca en cada ejecución posterior de DoCheck y está relacionado principalmente con las inicializaciones del componente hijo.
   6. **AfterViewInit:** Se ejecuta cuando la vista del componente se ha inicializado por completo. Este método se inicializa después de que Angular ha inicializado la vista del componente y las vistas secundarias. Se llama después de AfterContentChecked. Solo se aplica a los componentes.
   7. **AfterViewChecked:** Se ejecuta después del método AfterViewInit y cada vez que la vista del componente verifique cambios. También se ejecuta cuando se ha modificado cualquier enlace de las directivas secundarias. Por lo tanto, es muy útil cuando el componente espera algún valor que proviene de sus componentes secundarios.
   8. **OnDestroy:** Este método se ejecutará justo antes de que Angular destruya los componentes. Es muy útil para darse de baja de los observables y desconectar los event handlers para evitar memory leaks o fugas de memoria.