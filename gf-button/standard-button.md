---
description: >-
  Un GF Button estándar luce como un botón sólido con los bordes ligeramente
  redondeados. GF Button tiene todas las variantes, tales como Outline,
  Transparent, Disable, y Block.
---

# Botón estándar

![Bot&#xF3;n est&#xE1;ndar](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Standard_buttons_-_solid_2x_lnCv20In0.png)

El atributo **shape** está definido por defecto como `GFButtonShape.standard`, por lo tanto, obtendremos un botón estándar con un sólido color de fondo y bordes ligeramente redondeados.

## Botón sólido

![Flutter Bot&#xF3;n s&#xF3;lido](../.gitbook/assets/solid-button-2x.png)

El atributo **type** está definido por defecto como `GFButtonType.solid`, por lo tanto, obtendremos un botón estándar con un sólido color de fondo y bordes ligeramente redondeados.

El callback disparado cuando se presiona el botón, definido en el atributo **onPressed**, habilita el botón.

```dart
 import 'package:getflutter/getflutter.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
  ),
```

### Botón deshabilitado

![GF Flutter Bot&#xF3;n deshabilitado](../.gitbook/assets/disabled-button-2x.png)

Si el atributo **onPressed** es null, entonces el botón estará deshabilitado. Por defecto, GFButton estará deshabilitado porque **onPressed** es null.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: null,
    text: "primary",
 ),
```

### Botón transparente

![Flutter Bot&#xF3;n transparente](../.gitbook/assets/transparent-button-2x.png)

Definiendo el atributo **type** como **`GFButtonType.transparent`** obtenemos un botón transparente. Por defecto, GFButton define el atributo **type** como `GFButtonType.solid`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.transparent,
 ),
```

### Botón bloque

![Flutter Bot&#xF3;n bloque](../.gitbook/assets/block-button-2x.png)

Block Button especifica cuan ancho debe ser el botón. Definiendo **blockButton** como `true`, el botón será un bloque de ancho máximo con bordes redondeados. Por defecto **blockButton** está definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    blockButton: true,
 ),
```

### Botón de ancho máximo

![Flutter Bot&#xF3;n de ancho m&#xE1;ximo](../.gitbook/assets/full-width-button-2x.png)

Full Width Button especifica cuan ancho debe ser el botón. Definiendo **fullWidthButton** como `true`, el botón será un botón de ancho máximo con bordes redondeados y sin margen a los costados. Por defecto **fullWidthButton** está definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    fullWidthButton: true,
 ),
```

### Tamaño del botón

El tamaño del botón puede ser modificado utilizando la propiedad **size**. El valor por defecto es `GFSize.MEDIUM`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.SMALL,
 ),
```

## Botón Outline

![Flutter Outline Button](../.gitbook/assets/outline-2x-2x-2.png)

Outline Button es un botón con fondo transparente y borde visible. Podemos obtener este botón facilmente definiedo el atributo **type** como **`GFButtonType.outline`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan también con **Outline Button**.

## Botón Outline 2x

![GF Flutter Outline 2X Button](../.gitbook/assets/outline-2x-2x-1.png)

Outline2x Button es un botón con fondo transparente y borde visible con un ancho de 2x. Podemos obtener este botón facilmente definiedo el atributo **type** como **`GFButtonType.outline2x`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline2x,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan también con **Outline2x Button**..

