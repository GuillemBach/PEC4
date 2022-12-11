# PEC 4 - Ejercicio 6

1. **¿Cuáles son los** style encapsulation **de los componentes? Pon un ejemplo de uso de cada uno de ellos.**

    1. **ShadowDom** -> La aplicación utiliza la implementación nativa de shadow DOM del navegador. Los elementos se encapsulan dentro de un ShadowRoot (usado como elemento host del componente) y aplicar los estilos provistos de manera aislada.
       - Ejemplo:
    <code>
    @Component({
        selector: 'app-shadow-dom-encapsulation',
        template: `
            <h2>ShadowDom</h2>
            <div class="shadow-message">Shadow DOM encapsulation</div>
            <app-emulated-encapsulation></app-emulated-encapsulation>
            <app-no-encapsulation></app-no-encapsulation>
        `,
        styles: ['h2, .shadow-message { color: blue; }'],
        encapsulation: ViewEncapsulation.ShadowDom,
    })
    export class ShadowDomEncapsulationComponent { }
    </code>
    2. **Emulated** -> Los estilos están preprocesados. Se añade un atributo de elemento host a cada selector que abarca el estilo del elemento host. Cada elemento DOM tiene un atributo _ngcontent, generado automáticamente y único en su host, adjunto. Estos identifican a qué host pertenece (a que componente pertenece) el elemento y, por lo tanto, qué estilos deben aplicarse a él.
       - Ejemplo:
    <code>
    @Component({
        selector: 'app-emulated-encapsulation',
        template: `
            <h2>Emulated</h2>
            <div class="emulated-message">Emulated encapsulation</div>
            <app-no-encapsulation></app-no-encapsulation>
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
            <h2>None</h2>
            <div class="none-message">No encapsulation</div>
        `,
        styles: ['h2, .none-message { color: red; }'],
        encapsulation: ViewEncapsulation.None,
    })
    export class NoEncapsulationComponent { }
    </code>


2. **¿Qué es el** shadow DOM **?**
3. **¿Qué es el** changeDetection **?**
4. **¿Qué diferencias existen entre las estrategias** Default **y** OnPush **? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.**
5. **Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los** hooks OnChanges, OnInit, AfterViewInit y OnDestroy, **puesto que son los más utilizados.**