---
description: >-
  Un GF Button estándar luce como un botón sólido con los bordes ligeramente redondeados. GF Button tiene todas las variantes, tales como Outline, Transparent, Disable, y Block.
---

# Bot&oacute;n est&aacute;ndar

![Bot&oacute;n est&aacute;ndar](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Standard_buttons_-_solid_2x_lnCv20In0.png)

El atributo **shape** est&aacute; definido por defecto como `GFButtonShape.standard`, por lo tanto, obtendremos un bot&oacute;n est&aacute;ndar con un s&oacute;lido color de fondo y bordes ligeramente redondeados.

## Bot&oacute;n s&oacute;lido  

![Flutter Bot&oacute;n s&oacute;lido](../.gitbook/assets/solid-button-2x.png)

El atributo **type** est&aacute; definido por defecto como `GFButtonType.solid`, por lo tanto, obtendremos un bot&oacute;n est&aacute;ndar con un s&oacute;lido color de fondo y bordes ligeramente redondeados.

El callback disparado cuando se presiona el bot&oacute;n, definido en el atributo **onPressed**, habilita el bot&oacute;n.

```dart
 import 'package:getflutter/getflutter.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
  ),
```

### Bot&oacute;n deshabilitado

![GF Flutter Bot&oacute;n deshabilitado](../.gitbook/assets/disabled-button-2x.png)

Si el atributo **onPressed** es null, entonces el bot&oacute;n estar&aacute; deshabilitado. Por defecto, GFButton estar&aacute; deshabilitado porque **onPressed** es null.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: null,
    text: "primary",
 ),
```

### Bot&oacute;n transparente

![Flutter Bot&oacute;n transparente](../.gitbook/assets/transparent-button-2x.png)

Definiendo el atributo **type** como **`GFButtonType.transparent`** obtenemos un bot&oacute;n transparente. Por defecto, GFButton define el atributo **type** como `GFButtonType.solid`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.transparent,
 ),
```

### Bot&oacute;n bloque

![Flutter Bot&oacute;n bloque](../.gitbook/assets/block-button-2x.png)

Block Button especifica cuan ancho debe ser el bot&oacute;n. Definiendo **blockButton** como `true`, el bot&oacute;n ser&aacute; un bloque de ancho m&aacute;ximo con bordes redondeados. Por defecto **blockButton** est&aacute; definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    blockButton: true,
 ),
```

### Bot&oacute;n de ancho m&aacute;ximo

![Flutter Bot&oacute;n de ancho m&aacute;ximo](../.gitbook/assets/full-width-button-2x.png)

Full Width Button especifica cuan ancho debe ser el bot&oacute;n. Definiendo **fullWidthButton** como `true`, el bot&oacute;n ser&aacute; un bot&oacute;n de ancho m&aacute;ximo con bordes redondeados y sin margen a los costados. Por defecto **fullWidthButton** est&aacute; definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
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
    size: GFSize.SMALL,
 ),
```

## Bot&oacute;n Outline

![Flutter Outline Button](../.gitbook/assets/outline-2x-2x%20%282%29.png)

Outline Button es un bot&oacute;n con fondo transparente y borde visible. Podemos obtener este bot&oacute;n facilmente definiedo el atributo **type** como **`GFButtonType.outline`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan tambi&eacute;n con **Outline Button**.

## Bot&oacute;n Outline 2x

![GF Flutter Outline 2X Button](../.gitbook/assets/outline-2x-2x%20%281%29.png)

Outline2x Button es un bot&oacute;n con fondo transparente y borde visible con un ancho de 2x. Podemos obtener este bot&oacute;n facilmente definiedo el atributo **type** como **`GFButtonType.outline2x`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline2x,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan tambi&eacute;n con **Outline2x Button**..
