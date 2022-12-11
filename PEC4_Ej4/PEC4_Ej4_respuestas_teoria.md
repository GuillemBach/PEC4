# PEC4 Ejercicio 4

1. **Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural** NgFor:

- index -> el índice del elemento actual en el iterable.
- even -> True cuando el elemento tiene un índice par en el iterable.
- odd -> True cuando el elemento tiene un índice impar en el iterable.
- first -> True cuando el elemento es el primer elemento en el iterable.
- last -> True cuando el elemento es el último elemento en el iterable.

- **¿Cuándo se deberían utilizar las varibales locales de la directiva estructural NgFor?**

    - A rasgos generales, se utilizan las variables locales cuando estas sean necesarias para usar explicitamente en la aplicación ya que, su uso es opcional porqué no son necesarias para realizar la iteración (usar NgFor). Es por eso, que si unicamente nuestra intención es iterar sobre un objeto o array y mostrar por pantalla su contenido, no serán necesarias ninguna de las variables locales. Estas se necesitan cuando el tratamiento de los datos del interior de un objeto o array que se itera con NgFor se vuelve complejo y se tiene la necesidad de usarlas como podria ser:

      - Mostrar en la plantilla todos los elementos del objeto o array incluyendo su posición empezando desde 1. En este caso necesitariamos usar la variable local index.
      - Otro ejemplo podria ser que queremos mostrar en la plantilla todos los elementos de una array, pero el primero lo queremos resaltar. En este caso se tendría que utilizar la variable local 'first'.
      - De igual forma con el resto de variables locales. Todas ellas, que nos ofrece NgFor, son para poder hacer un tratamiento de datos más exaustivo.

2. **¿Para qué sirve la opción** trackBy **de la directiva estructural** NgFor **? Pon ejemplos de uso.**

- trackBy es una función que define cómo realizar un seguimiento de los cambios para los elementos en el iterable, es decir, cuando se agregan, mueven o eliminan elementos en el iterable, la directiva, **sólo volverá a redibujar los items que han cambiado**, reduciendo notablemente la carga de trabajo sobre el DOM ya que, sin trackBy, cada modificación en el iterable, *ngFor volverá a redibujar completemente el DOM desde cero, y esto en proyectos medianos y grandes es un gran problema.

   - Ejemplo sin trackBy: Mostrar en la plantilla, en forma de lista, todos los elementos de un objeto o array con su indice delante.
      - HTML -> <code><li *ngFor="let item of items; let i=index">{{i}} - {{item.name}}</li></code>
   - Ejemplo con trackBy: 
      - HTML -> <code><li *ngFor="let item of items; let i=index; trackBy: trackByItems">{{i}} - {{item.name}}</li></code>
      - TS -> trackByItems(index: number, item: any): number {return item.id;}
        - Cuando se proporciona esta función, la directiva utiliza el resultado de llamar a esta función para identificar el nodo del elemento, en lugar de la identidad del objeto en sí. La función recibe dos entradas, el índice de iteración y el ID del objeto del nodo (item).

3. **¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.**

- 