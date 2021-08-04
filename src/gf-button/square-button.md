---
sidebarDepth: 2
description: Flutter Square Button looks like a solid button with no rounded corners.
---

# Flutter Square Button

![GW Square Buttons Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Square_button-solid_ASrQepMkb.png)

We will be able to get a **flutter square-shaped button** with solid background color with no rounded corners by adding property **shape** with `GFButtonShape.square` .

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
  ),
```

## Flutter Solid Button

![Solid Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-solid-2x_P3Wfnkh5t_vonekkHxL.png)

By default, the button **type** is set to `GFButtonType.solid` so, we were able to get a square-shaped button that has a solid background color with no rounded corners.

The callback is called when the button is tapped. By adding a callback to **onPressed** enables the button.

```dart
import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
  ),
```

## Flutter Disabled Button

![Disabled Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-disabled-2x_t-HoELvaX_eH78LlIRY0pf.png)

If this callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled as **onPressed** is set to null.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: null,
    text: "primary",
    shape: GFButtonShape.square,
 ),
```

## Flutter Block Button

![Block Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/block-2x_zhfeGvIuT0_wkwKmGk-Z.png)

**The Flutter Block button** specifies how wide the button should be. By setting **blockButton** state,`true` it will change the button to a full-width block with no rounded corners. Default **blockButton** is set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    blockButton: true,
 ),
```

## Flutter Full-Width Button

![Full Width Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/fullwidth-2x_R1MRr5rgb_8s0AW1X_soKM.png)

The **Flutter Full-Width** **button** specifies the button should be in full width of the screen. By setting a f**ullWidthButton** state,`true` it will change the button to a Full-width button with rounded corners and no border on the left or right side.  Default **fullWidthButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    fullWidthButton: true,
 ),
```

## Flutter Button Size

**Flutter Button size** can be varied using the **size** property, which specifies the size of the button. Default button size is set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    size: GFSize.SMALL,
 ),
```

## Flutter Outline Button

![](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-2x_FZI7IwZnU_X75w3ZFS1j.png)

**Flutter Outline Button** describes the button with a transparent background and a visible border. This button can be easily found in **GFButton** by adding **type** as **`GFButtonType.outline`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    type: GFButtonType.outline,
 ),
```

Above mentioned  properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works well in **Outline Button** also.

## Flutter Outline2x Button

![Outline2x Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-2x-2x_-CHfawHE8_05mmWBq_il.png)

**Flutter Outline2x Button** describes the Button with a transparent background and a visible border with 2x border-width. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline2x`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    shape: GFButtonShape.square,
    type: GFButtonType.outline2x,
 ),
```

Above mentioned  properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works well in **Outline2x Button** also.

