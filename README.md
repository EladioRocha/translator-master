# translator-master

Aplicación web de traducción con Express, EJS y automatización del navegador mediante Puppeteer. Depende del comportamiento de un sitio externo.

## Estructura

- [api](api)
- [examples](examples)
- [public](public)
- [routes](routes)
- [views](views)
- [app.js](app.js)

## Preparación y uso

### Raíz del repositorio

Requiere Node.js. Este paquete no fija una versión del runtime; valida compatibilidad con las dependencias antes de actualizarlo.

```sh
npm ci
npm run dev
```

Comandos declarados en [package.json](package.json):

| Comando | Acción |
| --- | --- |
| `npm run test` | `echo "Error: no test specified" && exit 1` |
| `npm run start` | `node app.js` |
| `npm run dev` | `nodemon app.js` |

El script `test` es un marcador inicial, no una suite de pruebas.

## Configuración detectada en el código

Estas son referencias explícitas a variables de entorno, no una garantía de que toda la configuración esté externalizada. Los nombres y archivos permiten localizar dónde se usan; los valores deben corresponder a tu entorno.

| Variable | Referencia |
| --- | --- |
| `PORT` | [app.js](app.js) |

No guardes credenciales reales en la documentación. Si hay `.env.example`, úsalo como referencia y revisa cómo carga la configuración el punto de entrada.

## Validación y estado

Esta guía se contrastó con el árbol de archivos y los manifiestos del repositorio. No se ha validado una ejecución completa contra servicios externos, bases de datos o hardware. Las versiones y los scripts mostrados describen el código actual; no implican que sus dependencias antiguas sigan siendo compatibles.

## Documentación previa

Se conserva como referencia histórica, incluidas las imágenes y atribuciones originales. Los enlaces a demos y servicios no se han comprobado.

# Translator master

Translator as powerful as google translate. It is made with scraping techniques in the Google translator with **Nodejs** using the [Puppeteer](https://pptr.dev/) library.

**Example #1**\
![Example 1 of translator-master working](https://github.com/EladioRocha/translator-master/blob/master/examples/result-1.gif)

**Example #2**\
![Example 2 of translator-master working](https://github.com/EladioRocha/translator-master/blob/master/examples/result-2.gif)
