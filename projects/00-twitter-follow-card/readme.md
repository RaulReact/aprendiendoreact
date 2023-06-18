CONCEPTOS BASICOS DE REACT (NOTAS EJERCICIO)

Basado en el Primer Capitulo de el CURSO DE REACT 2023 de Midudev

https://www.youtube.com/watch?v=7iobxzd_2wY

Apuntes de Cosecha Propia

Componente -> El componente en react es la factoria de elementos.      Es decir el componente crea los elementos. Funcion que devuelve elementos

Elemento -> Es aquello que renderiza react

Props -> Son parametros que le pasamos a un componente para que este los
         utilize en la renderizacion del mismo

    children (Tipo prop especial) -> Es una prop especial que sirve para capturar aquella informacion (textos, elementos , componentes ...) que se encuentren dentro de otro componente. Al capturar ese children renderizaremos 
    esa parte que podra tener una forma u otra.

Recarga de Componentes

Siempre vamos a tener un componente padre del que colgaran uno o varios hijos y asi sucesivamente. Es importante recalcar que cuando se renderiza todo el arbol de nodos se renderizan todos los nodos aunque no
sufran cambios (es posible evitar la renderizacion en los nodos no 
modificados pero esto es un ajuste avanzado y que no se da por defecto).

Aunque el renderizado sea total veremos que el cambio se da en una zona concreto (Virtual DOM). No se destruye y vuelve a construir todo como en concepto normal de DOM.