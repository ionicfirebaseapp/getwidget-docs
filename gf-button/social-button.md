---
description: >-
  Los botones sociales son botones estándar, sólidos, con una etiqueta y/o con
  un ícono.
---

# Botón social

![Social Button](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Social_Buttons_2x_qhe5emJKB.png)

## Botón social full

El atributo **shape** está definido por defecto como `GFButtonShape.standard`, por lo tanto, obtendremos un botón estándar con un sólido color de fondo y bordes ligeramente redondeados.

### Botón social sólido

![Bot&#xF3;n social s&#xF3;lido](../.gitbook/assets/solid-social-button-2x.png)

El atributo **type** está definido por defecto como `GFButtonType.solid`, por lo tanto, obtendremos un botón con sólido color de fondo y bordes ligeramente redondeados.

El callback disparado cuando se presiona el botón, definido en el atributo **onPressed**, habilita el botón.

```dart
  import 'package:getflutter/getflutter.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
  ),
```

### Botón social deshabilitado

![Bot&#xF3;n social deshabilitado](../.gitbook/assets/disabled-buttons-2x%20%281%29.png)

Si el atributo **onPressed** es null, entonces el botón estará deshabilitado. Por defecto, GFButton estará deshabilitado porque **onPressed** es null.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: null,
    text: "primary",
    icon: Icon(Icons.share),
 ),
```

### Botón social Outline

![Bot&#xF3;n social Outline](../.gitbook/assets/outline-social-button-2x%20%281%29.png)

Outline Button es un botón con fondo transparente y borde visible. Podemos obtener este botón facilmente definiedo el atributo **type** como **`GFButtonType.outline`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline,
 ),
```

### Botón social Outline 2x

![Bot&#xF3;n social Outline 2x](../.gitbook/assets/outline-2x-social-button-2x.png)

Outline2x Button es un botón con fondo transparente y borde visible con un ancho de 2x. Podemos obtener este botón facilmente definiedo el atributo **type** como **`GFButtonType.outline2x`**.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline2x,
 ),
```

### Botón social transparente

![Bot&#xF3;n social transparente](../.gitbook/assets/transparent-social-button-2x.png)

Definiendo el atributo **type** como **`GFButtonType.transparent`** obtenemos un botón transparente. Por defecto, GFButton define el atributo **type** como `GFButtonType.solid`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.transparent,
 ),
```

### Botón social píldora

![Bot&#xF3;n social p&#xED;ldora](../.gitbook/assets/pills-social-buttons-2x.png)

Para obtener un botón con forma de píldora con un color de fondo sólido y bordes redondeados solo debemos agregar la propiedad **shape** con el valor `GFButtonShape.pills`.

```dart
 import 'package:getflutter/getflutter.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.pills,
  ),
```

### Botón social cuadrado

![Bot&#xF3;n social cuadrado](../.gitbook/assets/square-social-button-2x.png)

Para obtener un botón cuadrado con un color de fondo sólido sin bordes redondeados solo debemos agregar la propiedad **shape** con el valor `GFButtonShape.square`.

```dart
 import 'package:getflutter/getflutter.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.square,
  ),
```

### Tamaño de un botón social

![Tama&#xF1;o de un bot&#xF3;n social](../.gitbook/assets/full-width-social-button-2x%20%281%29.png)

El tamaño del botón puede ser modificado utilizando la propiedad **size**. El valor por defecto es `GFSize.MEDIUM`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    size: GFSize.SMALL,
 ),
```

### Botón social bloque

![Bot&#xF3;n social bloque](../.gitbook/assets/block-social-button-2x.png)

Block Button especifica cuan ancho debe ser el botón. Definiendo **blockButton** como `true`, el botón será un bloque de ancho máximo con bordes redondeados. Por defecto **blockButton** está definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.solid,
    blockButton: true,
 ),
```

### Botón de ancho máximo

![Bot&#xF3;n de ancho m&#xE1;ximo](../.gitbook/assets/full-width-social-button-2x.png)

Full Width Button especifica cuan ancho debe ser el botón. Definiendo **fullWidthButton** como `true`, el botón será un botón de ancho máximo con bordes redondeados y sin margen a los costados. Por defecto **fullWidthButton** está definido como `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.solid,
    fullWidthButton: true,
 ),
```

## Botón social con ícono

![Bot&#xF3;n social con &#xED;cono](../.gitbook/assets/social-icon-button-2x.png)

Los botones solo con íconos tienen la funcionalidad estándar de un botón sólido, y tienen un ícono como hijo.

El atributo **shape** está definido por defecto como `GFButtonShape.standard`, por lo tanto, obtendremos un botón con forma estándar con un sólido color de fondo y bordes ligeramente redondeados. El atributo **type** está definido por defecto como `GFButtonType.solid`, por lo tanto, obtendremos un botón con un sólido color de fondo y bordes ligeramente redondeados.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.share),
 ),
```

### Tamaño

El tamaño del botón puede ser modificado utilizando la propiedad **size**. El valor por defecto es `GFSize.MEDIUM`.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.small,
 ),
```

### Tipo

El tipo del botón puede ser cambiado definiedo la propiedad **type** como `GFButtonType.outline`. El valor por defecto es `GFButtonType.solid`.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

### Forma

La forma del botón puede ser cambiada definiendo la propiedad **shape** to `GFIconButtonShape.circle`. El valor por defecto es `GFIconButtonShape.standard`, con lo cual obtenemos un botón cuadrado con los bordes ligeramente redondeados.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    shape: GFIconButtonShape.pills,
 ),
```

