# Dev Store Project

Este es proyecto Monorepo que utiliza Turborepo, el cual tiene como objetivo similar una tienda de articulos informaticos y miscelaneas de este mismo campo. 

## Apps contenidas en el Monorepo

|App        |Funcion                                                                                                                |Modulos usados         |
|-----------|-----------------------------------------------------------------------------------------------------------------------|-----------------------|
|Web        |Renderizar el front-end                                                                                                |Next                   |
|Server     |Cargar el back-end, lugar donde se realizaran todas la peticiones y procesamiento de informacion recepcioanda y servida|Express                |
|Admin      |Renderezar un apartado protegido para los usuarios admin para que puedan manipular los productos de la tienda          |Next                   |

## Paquetes utilizados

| Paquete   | Funcion                                                                           | Modulos usados                |
|-----------|-----------------------------------------------------------------------------------|-------------------------------|
| ui        | Cargar todos los componentes comunes que se usaran en el front-end                | Shadcn + Vanilla Components   |
| db        | paquete el cual nos permite comunicarnos y realizar las operaciones CRUD con la DB| Drizzle                       |