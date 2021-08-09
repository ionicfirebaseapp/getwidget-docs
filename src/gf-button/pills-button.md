---
sidebarDepth: 2
description: >-
  Flutter Pills/Rounded/Circular Button Widget looks like a solid button with
  rounded corners. It comes with 200 + custom properties to customize button
  size, color.
---

# Flutter Pills/Rounded Button

![Flutter Pills Button Widget](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Pills_button-solid_VWUMopUjx_.png)

**GFButtons** are clickable buttons that are used widely in an application. **GFButtons** come in many shapes and one of the shapes is a **pill-shaped button.**

We will be able to get **flutter** **circular/rounded** shaped button with solid background color with rounded corners by adding property **shape** with `GFButtonShape.pills` 

The simple example of **GFButton with pill shape** is as follows:

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.pills,
  ),
```

## Flutter Rounded Solid Button

![Flutter Pills/Rounded Solid Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/pills-solid-button-2x_EQT2X6jAl_BLgdXpw26c7E.png)

By default, button **type** is set to `GFButtonType.solid` so,  that we will be able to get pills shaped buttons that have a solid background color with rounded corners.

The callback is called when the button is tapped. By adding a callback to **onPressed** enables the button.

```dart
import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.pills,
  ),
```

## Flutter Pills/Rounded Disabled Button

![Flutter Pills Disabled Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/pills-disabled-2x_lVoPerI-o_-pNn9kds88.png)

If this callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled because **onPressed** set to null.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: null,
    text: "primary",
    shape: GFButtonShape.pills,
 ),
```

## Flutter Pills/Rounded Block Button

![Flutter Pills Block Button Design ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/block-buttons-2x_gd1aXxKLI_YTwXCQ0t0.png)

**The Flutter Block button** specifies how wide the button should be. By setting **blockButton** state,`true` it will change the button to a full-width block with rounded corners. Default **blockButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.pills,
    blockButton: true,
 ),
```

## Flutter Pills/Rounded Full Width Button

![Flutter Full Width Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/full-width-2x_pKifhtU6P_908jFrHjHx.png)

The **Flutter Full-Width** **button** specifies the button should be in full width of the screen. By setting a **fullWidthButton** state,`true` it will change the button to a Full-width button with rounded corners and no border on the left or right. Default **fullWidthButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.pills,
    fullWidthButton: true,
 ),
```

## Flutter Rounded Button Size 

**Flutter Button size** can be varied using the **size** property, which specifies the size of the button. Default button size set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.pills,
    size: GFSize.SMALL,
 ),
```

## Flutter Pills/Rounded Outline Button

![Flutter Pills Outline Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs//pills-outline-2x_iq1SEFIpR_yeuxE-DmfT.png)

**Flutter Pill Outline Button** describes as the Button with a transparent background and a visible border. This button can easily get in GFButton by adding **type** as **`GFButtonType.outline`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.pills,
    type: GFButtonType.outline,
 ),
```

Above mentioned  properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works well in **Outline Button** also.

## Flutter Pills/Rounded Outline2x Button

![Flutter Pills Outline2x Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/pills-outline-2x-2x_Qez5VXh02_zOFwwDB3SRU.png)

**Flutter Pills Outline2x Button** describes as the Button with a transparent background and a visible border with 2x border-width. This button can  easily get in GFButton by adding **type** as **`GFButtonType.outline2x`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.pills,
    type: GFButtonType.outline2x,
 ),
```

Above mentioned  properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works well in **Outline2x Button** also.

