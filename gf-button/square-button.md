---
description: Un botón cuadrado luce como un botón sólido sin bordes redondeados.
---

# Botón cuadrado

![Bot&#xF3;n cuadrado](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Square_button-solid_2x_Wkjf-bdm3.png)

Para obtener un botón cuadrado con un color de fondo sólido sin bordes redondeados solo debemos agregar la propiedad **shape** con el valor `GFButtonShape.square`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
  ),
```

## Botón sólido

![Bot&#xF3;n s&#xF3;lido](../.gitbook/assets/square-solid-2x.png)

El atributo **type** está definido por defecto como `GFButtonType.solid`, por lo tanto, obtendremos un botón cuadrado con un sólido color de fondo sin bordes redondeados.

El callback disparado cuando se presiona el botón, definido en el atributo **onPressed**, habilita el botón.

```dart
import 'package:getflutter/getflutter.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
  ),
```

### Botón deshabilitado

![Bot&#xF3;n deshabilitado](../.gitbook/assets/square-disabled-2x.png)

Si el atributo **onPressed** es null, entonces el botón estará deshabilitado. Por defecto, GFButton estará deshabilitado porque **onPressed** es null.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: null,
    text: "primary",
    shape: GFButtonShape.square,
 ),
```

### Botón bloque

![Bot&#xF3;n bloque](../.gitbook/assets/block-2x.png)

Block Button especifica cuan ancho debe ser el botón. Definiendo **blockButton** como `true`, el botón será un bloque de ancho máximo sin bordes redondeados. Por defecto **blockButton** está definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    blockButton: true,
 ),
```

### Botón de ancho máximo

![Bot&#xF3;n de ancho m&#xE1;ximo](../.gitbook/assets/fullwidth-2x.png)

Full Width Button especifica cuan ancho debe ser el botón. Definiendo **fullWidthButton** como `true`, el botón será un botón de ancho máximo sin bordes redondeados y sin margen a los costados. Por defecto **fullWidthButton** está definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
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
    shape: GFButtonShape.square,
    size: GFSize.SMALL,
 ),
```

## Botón Outline

![Bot&#xF3;n Outline](../.gitbook/assets/outline-2x.png)

Outline Button es un botón con fondo transparente y borde visible. Podemos obtener este botón facilmente definiedo el atributo **type** como **`GFButtonType.outline`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    type: GFButtonType.outline,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan también con **Outline Button**.

## Botón Outline 2x

![Bot&#xF3;n Outline 2x](../.gitbook/assets/outline-2x-2x.png)

Outline2x Button es un botón con fondo transparente y borde visible con un ancho de 2x. Podemos obtener este botón facilmente definiedo el atributo **type** como **`GFButtonType.outline2x`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    type: GFButtonType.outline2x,
 ),
```

Las propiedades antes mencionadas, como `size`, `blockButton`, `fullWidthButton`, habilitar y deshabilitar botones, funcionan también con **Outline2x Button**.

