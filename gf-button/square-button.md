---
description: Un botón cuadrado luce como un botón sólido sin bordes redondeados.
---

# Bot&oacute;n cuadrado

![Bot&oacute;n cuadrado](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Square_button-solid_2x_Wkjf-bdm3.png)

Para obtener un bot&oacute;n cuadrado con un color de fondo s&oacute;lido sin bordes redondeados solo debemos agregar la propiedad **shape** con el valor `GFButtonShape.square`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
  ),
```

## Bot&oacute;n s&oacute;lido

![Bot&oacute;n s&oacute;lido](../.gitbook/assets/square-solid-2x.png)

El atributo **type** est&aacute; definido por defecto como `GFButtonType.solid`, por lo tanto, obtendremos un bot&oacute;n cuadrado con un s&oacute;lido color de fondo sin bordes redondeados.

El callback disparado cuando se presiona el bot&oacute;n, definido en el atributo **onPressed**, habilita el bot&oacute;n.

```dart
import 'package:getflutter/getflutter.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
  ),
```

### Bot&oacute;n deshabilitado

![Bot&oacute;n deshabilitado](../.gitbook/assets/square-disabled-2x.png)

Si el atributo **onPressed** es null, entonces el bot&oacute;n estar&aacute; deshabilitado. Por defecto, GFButton estar&aacute; deshabilitado porque **onPressed** es null.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: null,
    text: "primary",
    shape: GFButtonShape.square,
 ),
```

### Bot&oacute;n bloque

![Bot&oacute;n bloque](../.gitbook/assets/block-2x.png)

Block Button especifica cuan ancho debe ser el bot&oacute;n. Definiendo **blockButton** como `true`, el bot&oacute;n ser&aacute; un bloque de ancho m&aacute;ximo sin bordes redondeados. Por defecto **blockButton** est&aacute; definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    blockButton: true,
 ),
```

### Bot&oacute;n de ancho m&aacute;ximo

![Bot&oacute;n de ancho m&aacute;ximo](../.gitbook/assets/fullwidth-2x.png)

Full Width Button especifica cuan ancho debe ser el bot&oacute;n. Definiendo **fullWidthButton** como `true`, el bot&oacute;n ser&aacute; un bot&oacute;n de ancho m&aacute;ximo sin bordes redondeados y sin margen a los costados. Por defecto **fullWidthButton** est&aacute; definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    fullWidthButton: true,
 ),
```

### Tama&ntilde;o del bot&oacute;n

El tama&ntilde;o del bot&oacute;n puede ser modificado utilizando la propiedad **size**. El valor por defecto es `GFSize.MEDIUM`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    size: GFSize.SMALL,
 ),
```

## Bot&oacute;n Outline

![Bot&oacute;n Outline](../.gitbook/assets/outline-2x.png)

Outline Button es un bot&oacute;n con fondo transparente y borde visible. Podemos obtener este bot&oacute;n facilmente definiedo el atributo **type** como **`GFButtonType.outline`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    type: GFButtonType.outline,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan tambi&eacute;n con **Outline Button**.

## Bot&oacute;n Outline 2x

![Bot&oacute;n Outline 2x](../.gitbook/assets/outline-2x-2x.png)

Outline2x Button es un bot&oacute;n con fondo transparente y borde visible con un ancho de 2x. Podemos obtener este bot&oacute;n facilmente definiedo el atributo **type** como **`GFButtonType.outline2x`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    type: GFButtonType.outline2x,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan tambi&eacute;n con **Outline2x Button**.
