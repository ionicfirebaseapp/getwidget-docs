---
sidebarDepth: 2
description: >-
  Flutter Standard Button looks like a solid button with slightly rounded
  corners. GF Button has all the variants like an outline, Transparent, Disable,
  and Block button.
---

# GF Flutter Standard Button

![GF Flutter Standard Button](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Standard_buttons_-_solid_2x_lnCv20In0.png)

Default button **shape** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners.

## Solid Button  

![Flutter Solid Button](../assets/solid-button-2x.png)

By default, button **type** set to Flutter Solid Button`GFButtonType.solid` so, we able to get buttons have a solid background color with slightly rounded corners.

The callback that is called when the button is tapped. By adding callback to **onPressed** enables the button.

```dart
 import 'package:getwidget/getwidget.dart';
  
  GFButton(
    onPressed: (){},
    text: "primary",
  ),
```

### Disabled Button

![GF Flutter Disabled Button](../assets/disabled-button-2x.png)

If this callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled because, **onPressed** set to null. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: null,
    text: "primary",
 ),
```

### Transparent Button

![Flutter Transparent Button](../assets/transparent-button-2x.png)

In GFButton by adding **type** **`GFButtonType.transparent`**, we able to get transparent button. Default GFButton **type** will be `GFButtonType.solid`. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.transparent,
 ),
```

### Block Button

![Flutter Block Button](../assets/block-button-2x.png)

Block button specify how wide the button should be. By setting **blockButton** state `true`, it will change the button to a full-width block with rounded corners. Default **blockButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    blockButton: true,
 ),
```

### Full Width Button

![Flutter Full Width Button](../assets/full-width-button-2x.png)

Full Width button specify how wide the button should be. By setting **fullWidthButton** state `true`, it will change the button to a Full-width button with rounded corners and no border on the left or right. Default **fullWidthButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    fullWidthButton: true,
 ),
```

### Button Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.SMALL,
 ),
```

## Outline Button

![Flutter Outline Button](../assets/outline-2x-2x-2.png)

Outline Button describes as the Button with a transparent background and a visible border. This button can be easily get in GFButton by adding **type** as **`GFButtonType.outline`**. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

Above mentioned all the properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works fine in **Outline Button** also.

## Outline2x Button

![GF Flutter Outline 2X Button](../assets/outline-2x-2x-1.png)

Outline2x Button describes as the Button with a transparent background and a visible border with 2x border-width. This button can be easily get in GFButton by adding **type** as **`GFButtonType.outline2x`**. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline2x,
 ),
```

Above mentioned all the properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works fine in **Outline2x Button** also.

