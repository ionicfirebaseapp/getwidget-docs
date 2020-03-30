---
description: >-
  GF Button es un componente Button de Flutter que viene con más de 100 botones preconstruidos, con interminables combinaciones de colores que puedes utilizar directamente en tu proyecto.
---

# GF Button

![Variantes de botones Flutter](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Gf_buttons_2x_aotfII9ZS5.png)



GF Button es un elemento clickeable que puede ser utilizado para eventos del click, como funciones, ruteo, autenticaciones con redes sociales, env&iacute;o de formularios, o en cualquier lugar que se necesite una funcionalidad simple y est&aacute;ndar de un bot&oacute;n. Los botones tienen una amplia &aacute;rea de uso y pueden ser utilizados tambi&eacute;n con cualquier otro widget.

## Uso

Podemos obtener un simple bot&oacute;n est&aacute;ndar usando el c&oacute;digo a continuaci&oacute;n.

```dart
GFButton(
    onPressed: (){},
    text:"primary"
),
```

### Bot&oacute;n deshabilitado

Para utilizar un bot&oacute;n deshabilitado definimos por defecto el valor null al atributo onPressed del GFButton, lo cual deshabilita el bot&oacute;n.

```dart
GFButton(                          
    onPressed: null,             
    text:"primary"
),
```

## Propiedades

Se pueden utilizar muchos atributos para darle estilo a los botones GFButton y que luzcan de una manera espec&iacute;fica. Cada uno de los atributos se describe a continuaci&oacute;n.

### Color

GFColor es utilizado para cambiar el color de fondo del bot&oacute;n.

|  |  |
| :--- | :--- |
| **Descripci&oacute;n** | El color a utilizar de la paleta de colores de la aplicaci&oacute;n |
| **Atributo** |  color |
| **Tipo** | `GFColors` |
| **Default** | `GFColors.PRIMARY` |

### Tama&ntilde;o

|  |  |
| :--- | :--- |
| **Descripci&oacute;n** | El tama&ntilde;o del bot&oacute;n |
| **Atributo** | size |
| **Tipo** | `GFSize.LARGE, GFSize.MEDIUM, GFSize.SMALL` |
| **Default** | `GFSize.MEDIUM` |

### Forma

|  |  |
| :--- | :--- |
| **Descripci&oacute;n** | La forma del bot&oacute;n |
| **Atributo** | shape |
| **Tipo** | `GFButtonShape.standard, GFButtonShape.square, GFButtonShape.pills` |
| **Default** | `GFButtonShape.standard` |

### Tipo

|  |  |
| :--- | :--- |
| **Descripci&oacute;n** | El tipo del bot&oacute;n |
| **Atributo** | type |
| **Tipo** | `GFButtonType.solid, GFButtonType.outline, GFButtonType.outline2x, GFButtonType.transparent` |
| **Default** | `GFButtonType.solid` |

### Posici&oacute;n

|  |  |
| :--- | :--- |
| **Descripci&oacute;n** | La posici&oacute;n del icono del bot&oacute;n |
| **Atributo** | position |
| **Tipo** | `GFPosition.start, GFPosition.end` |
| **Default** | `GFPosition.start` |

### Propiedades personalizadas

| Nombre | Descripci&oacute;n |
| :--- | :--- |
| **onPressed** | callback disparado cuando es tocado el bot&oacute;n |
| **onLongPress** | callback disparado cuando el bot&oacute;n es presionado un poco m&aacute;s tiempo |
| **text** | describe la etiqueta del bot&oacute;n con un texto. Tiene prioridad sobre la propiedad child |
| **icon** | describe la etiqueta del bot&oacute;n con un &iacute;cono |
| **child** | describe la etiqueta del bot&oacute;n con un Widget. Es una alternativa al atributo text |
| **textColor** | el color del texto del bot&oacute;n cuando este est&aacute; habilitado |
| **textStyle** | define el estilo del texto |
| **disabledColor** | el color de relleno del bot&oacute;n cuando est&aacute; deshabilitado |
| **disabledTextColor** | el color del texto del bot&oacute;n cuando este est&aacute; deshabilitado |
| **borderSide** | define el borde del bot&oacute;n  |
| **borderShape** | define la forma del borde del bot&oacute;n |
| **buttonBoxShadow** | si es `true` muestra el sombreado por defecto |
| **boxShadow** | define el sombreado del bot&oacute;n |
| **fullWidthButton** | si es `true` muestra el bot&oacute;n ocupando el ancho m&aacute;ximo |
| **blockButton** | si es `true` define el bot&oacute;n como un bloque |
| **padding** | define el padding del bot&oacute;n |
| **focusColor** | color del bot&oacute;n cuando tiene el foco |
| **hoverColor** | color del bot&oacute;n cuando se pasa el puntero por encima |
| **splashColor** | color del bot&oacute;n cuando se presiona |
| **highlightColor** | color del bot&oacute;n cuando se mantiene presionado |
