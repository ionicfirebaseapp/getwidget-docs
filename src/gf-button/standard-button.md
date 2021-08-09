---
sidebarDepth: 2
description: >-
  Flutter Elevated Button looks like a solid button with slightly rounded
  corners. GF Button has all the variants like an outline, Transparent, Disable,
  and Block button.
---

# Flutter Elevated Button

![Flutter Elevated Button Widget UI Kit ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Standard_buttons_-_solid_bfYdW7r4D.png)

The default button **shape** is set to `GFButtonShape.standard` so that we will be able to get the standard shaped button with solid background color with slightly rounded corners.

## Flutter Elevated Solid Button

![Elevated Solid Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/solid-button-2x_1mtTU6eHS_d9pt0_fS_g.png)

By default, button **type** is set to Flutter Solid Button`GFButtonType.solid` so, we can get buttons that have a solid background color with slightly rounded corners.

The callback is called when the button is tapped. By adding a callback to **onPressed** enables the button.

```dart
 import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
  ),
```

## Flutter Elevated Disabled Button

![Elevated Disabled Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/disabled-button-2x_BF_NVpDS8_LvFp8btIa2.png)

If the callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled as **onPressed** is set to null.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: null,
    text: "primary",
 ),
```

## Flutter Elevated Transparent Button

![Flutter Elevated Transparent Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/transparent-button-2x_CnsR7pkJx_1foWmNnyos.png)

In **GFButton** by adding **type,`GFButtonType.transparent`**  we will get the transparent button. Default GFButton **type** will be `GFButtonType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.transparent,
 ),
```

## Flutter Elevated Block Button

![Elevated Block Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/block-buttons-2x_gd1aXxKLI_YTwXCQ0t0.png)

The **Flutter Elevated Block button** specifies how wide the button should be. By setting **blockButton** state,`true` it will change the button to a full-width block with rounded corners. Default **blockButton** is set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    blockButton: true,
 ),
```

## Flutter Elevated Full-Width Button

![Flutter Elevated Block Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/fullwidth-icon-button-2x-1_rsx_EmmVZ_A_wcghxKaW.png)

The **Flutter Elevated Full-Width** **button** specifies the button should be in full width of the screen. By setting a f**ullWidthButton** state,`true` it will change the button to a Full-width button with rounded corners and no border on the left or right side.  Default **fullWidthButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    fullWidthButton: true,
 ),
```

## Flutter Elevated Button Size

**Flutter Elevated Elevated Button size** can be varied using the **size** property, which specifies the size of the button. Default button size set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.SMALL,
 ),
```

## Flutter Elevated Outline Button

![Elevated Outline Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-2x-2x-1_LtgeZktSN_Id3QwQtR2I.png)

The **Flutter Elevated Outline Button** describes the Button with a transparent background and a visible border. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

Above mentioned  properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works well in **Elevated Outline Button** also.

## Flutter Elevated Outline2x Button

![Elevated Outline2x Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-2x-2x-1_LtgeZktSN_Id3QwQtR2I.png)

**The Flutter Elevated Outline2x Button** describes the Button with a transparent background and a visible border with 2x border width. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline2x`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline2x,
 ),
```

Above mentioned properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works fine in **Outline2x Button** also.

