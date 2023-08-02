# Crear un React Router desde cero

- Crear una MPA (Multiple Page Application) - Asi duncionaban las paginas antiguamente
- Crea una forma de hacer SPAs (Single Page ApplicationS)
- Poder navegar entre páginas con el botón de atrás
- Crear componente Link para hacerlo declarativo
- Crear componente Router para hacerlo mas declarativo
- Soportar rut apor defecto (404)
- Soportar rutas con párametros
- Componente <Route/> para hacerlo declarativo
- Lazy loading de las rutas
- Hacer un i18n con las rutas (Internacionalizacion - Poner páginas en varios idiomas)
- Testing
- Publicar paquete en NPM

# Librerias utlizadas

- Para testing
    vitest (pnpm install vitest -D) - Libreria de test al estilo Jest
    happy-dom (pnpm install happy-dom) - Nos permite recrear un arbol de objetos DOM para luego utilizarlo para los test
    resting-library/react (pnpm @testing-library/react -D)- Libreria que nos aporta metodos para testeo

- Para poder realizar rutas dinamicas
   path-to-regexp( pnpm install path-to-regexp -E ) - Libreria que ya viene integrada con NodeJS o react-router

- Para compilar los ficheros (swc)
   @swc/cli y @swc/core (pnpm install @swc/cli @swc/core -D) 



