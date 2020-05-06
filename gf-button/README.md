---
description: >-
  GF Button es un componente Button de Flutter que viene con más de 100 botones
  preconstruidos, con interminables combinaciones de colores que puedes utilizar
  directamente en tu proyecto.
---

# GF Button

![Variantes de botones Flutter](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Gf_buttons_2x_aotfII9ZS5.png)

GF Button es un elemento clickeable que puede ser utilizado para eventos del click, como funciones, ruteo, autenticaciones con redes sociales, envío de formularios, o en cualquier lugar que se necesite una funcionalidad simple y estándar de un botón. Los botones tienen una amplia área de uso y pueden ser utilizados también con cualquier otro widget.

## Uso

Podemos obtener un simple botón estándar usando el código a continuación.

```dart
GFButton(
    onPressed: (){},
    text:"primary"
),
```

### Botón deshabilitado

Para utilizar un botón deshabilitado definimos por defecto el valor null al atributo onPressed del GFButton, lo cual deshabilita el botón.

```dart
GFButton(                          
    onPressed: null,             
    text:"primary"
),
```

## Propiedades

Se pueden utilizar muchos atributos para darle estilo a los botones GFButton y que luzcan de una manera específica. Cada uno de los atributos se describe a continuación.

### Color

GFColor es utilizado para cambiar el color de fondo del botón.

|  |  |
| :--- | :--- |
| **Descripción** | El color a utilizar de la paleta de colores de la aplicación |
| **Atributo** | color |
| **Tipo** | `GFColors` |
| **Default** | `GFColors.PRIMARY` |

### Tamaño

|  |  |
| :--- | :--- |
| **Descripción** | El tamaño del botón |
| **Atributo** | size |
| **Tipo** | `GFSize.LARGE, GFSize.MEDIUM, GFSize.SMALL` |
| **Default** | `GFSize.MEDIUM` |

### Forma

|  |  |
| :--- | :--- |
| **Descripción** | La forma del botón |
| **Atributo** | shape |
| **Tipo** | `GFButtonShape.standard, GFButtonShape.square, GFButtonShape.pills` |
| **Default** | `GFButtonShape.standard` |

### Tipo

|  |  |
| :--- | :--- |
| **Descripción** | El tipo del botón |
| **Atributo** | type |
| **Tipo** | `GFButtonType.solid, GFButtonType.outline, GFButtonType.outline2x, GFButtonType.transparent` |
| **Default** | `GFButtonType.solid` |

### Posición

|  |  |
| :--- | :--- |
| **Descripción** | La posición del icono del botón |
| **Atributo** | position |
| **Tipo** | `GFPosition.start, GFPosition.end` |
| **Default** | `GFPosition.start` |

### Propiedades personalizadas

| Nombre | Descripción |
| :--- | :--- |
| **onPressed** | callback disparado cuando es tocado el botón |
| **onLongPress** | callback disparado cuando el botón es presionado un poco más tiempo |
| **text** | describe la etiqueta del botón con un texto. Tiene prioridad sobre la propiedad child |
| **icon** | describe la etiqueta del botón con un ícono |
| **child** | describe la etiqueta del botón con un Widget. Es una alternativa al atributo text |
| **textColor** | el color del texto del botón cuando este está habilitado |
| **textStyle** | define el estilo del texto |
| **disabledColor** | el color de relleno del botón cuando está deshabilitado |
| **disabledTextColor** | el color del texto del botón cuando este está deshabilitado |
| **borderSide** | define el borde del botón |
| **borderShape** | define la forma del borde del botón |
| **buttonBoxShadow** | si es `true` muestra el sombreado por defecto |
| **boxShadow** | define el sombreado del botón |
| **fullWidthButton** | si es `true` muestra el botón ocupando el ancho máximo |
| **blockButton** | si es `true` define el botón como un bloque |
| **padding** | define el padding del botón |
| **focusColor** | color del botón cuando tiene el foco |
| **hoverColor** | color del botón cuando se pasa el puntero por encima |
| **splashColor** | color del botón cuando se presiona |
| **highlightColor** | color del botón cuando se mantiene presionado |

