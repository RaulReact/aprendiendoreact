React Prueba Tecnica










* ¿Como inicializar el proyecto de React si no nos dejan inicializar REACT directamente con Vite?

- Creamos proyecto con Vite : npm create vite@latest
- En vez de React elegimos Vanilla y posteriormente elegimos Javascript
- Instalamos el plugin de React : npm install @vitejs/plugin-react -E
- Instalamos los dos paquetes imprescindibles de React : npm install react react-dom -E
- Creamos archivo de configuracion de vite en la raiz del proyecto : vite.config.js
- Añadimos estas lineas a el archivo anterior
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    export default defineConfig({
    plugins: [react()]
    })
- Ya lo ultimo seria crear el punto de entrada en main.js
    import { createRoot } from 'react-dom/client'

    const root = createRoot(document.getElementById('app'))
    root.render(<h1>Hello World</h1>)

- Esto dara un erro y tendremos que cambiar de .js a .jsx el archivo
  asi como en el index html cambiar la ruta del script tambien a main.jsx


  ** Instalar Lintern

  Instalar el Linter es primordial para que te ayude este a programar mejor

  - Instalamos la dependencia : npm install standard -D
  - Configuramos el linter en el package.json
         "eslintConfig": {
         "extends": "./node_modules/standard/eslintrc.json"
         }

