---
sidebarDepth: 2
description: 'Social Button determines the standard, solid, button with both label and icon.'
---

# Flutter Social Button

![Social Button Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Social_Buttons_359dhW_7Eo0.png)

## Flutter Social Button Full

**GFButtons** are clickable buttons that are used widely in an application. **GFButtons** come in many shapes and types. Here we will see the **Flutter Social Buttons**.

The Default button **shape** is set to `GFButtonShape.standard` so that we will be able to get the standard shaped button with solid background color with slightly rounded corners.

## Flutter Solid Social Button

![Solid Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-social-button-2x_ofI-wQHkM_kJIyYkwhYR.png)

By default, the button **type** is set to `GFButtonType.solid` so, we were able to get buttons that have a solid background color with slightly rounded corners.

The callback is called when the button is tapped. By adding a callback to **onPressed** enables the button.

```dart
  import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
  ),
```

## Flutter Disabled Social Button

![Disabled Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/disabled-buttons-2x-1_WXYljNGX9_Og84OQ7_j.png)

If this callback and **onPressed** are null, then the button will be disabled. Default **GFButton** will be disabled as **onPressed** is set to null.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: null,
    text: "primary",
    icon: Icon(Icons.share),
 ),
```

## Flutter Outline  Social Button

![Outline  Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-social-button-2x-1_s9l5xQdik_18Ar4Rbfp0Z.png)

**The Flutter Outline Button** describes the Button with a transparent background and a visible border. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline,
 ),
```

## Flutter Outline2x  Social Button

![Outline2x  Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-2x-social-button-2x_3hSCzrQDG_YjwynP9h8q.png)

**The Flutter Outline** **Icon** Button describes the Button with a transparent background and a visible border of 2x border width. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline2x`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline2x,
 ),
```

## Flutter Transparent  Social Button

![Transparent  Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/transparent-social-button-2x_lRGI7ulxY_Nhn4SFl_l0.png)

In GFButton by adding **type,`GFButtonType.transparent`** we can get a transparent button. Default GFButton **type** will be `GFType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.transparent,
 ),
```

## Flutter Pills  Social Button

![Pills  Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/pills-social-buttons-2x_GfJjVk77h_itBRIApxau.png)

We will be able to get **pills** **shaped** **button** with solid background color with rounded corners by adding property **shape** with `GFButtonShape.pills` .

```dart
 import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.pills,
  ),
```

## Flutter Square Social Button

![Square Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-social-button-2x_ofI-wQHkM_kJIyYkwhYR.png)

We will be able to get a square-shaped button with solid background color with no rounded corners by adding property **shape** with `GFButtonShape.square` .

```dart
 import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.square,
  ),
```

## Flutter Social  Button Size

![Social  Button Size](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/full-width-social-button-2x-1_45MJ57qDeo_LWX7K-eIj9.png)

**The Flutter Button size** can be varied using the **size** property, which specifies the size of the button. Default button size is set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    size: GFSize.SMALL,
 ),
```

## Flutter Block Social Button

![Block Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/block-social-button-2x_rkTw_Ij63_tp2AOfDiWy.png)

**The Flutter Block button** specifies how wide the button should be. By setting **blockButton** state, `true` it will change the button to a full-width block with rounded corners. Default **blockButton** is set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.solid,
    blockButton: true,
 ),
```

## Flutter Full Width Social Button

![Full Width Social Button](https://ik.imagekit.io/ionicfirebaseapp/docs/full-width-social-button-2x-1_45MJ57qDeo_LWX7K-eIj9.png)

The **Flutter Full-Width** **button** specifies the button should be in full width of the screen. By setting a f**ullWidthButton** state,`true` it will change the button to a Full-width button with rounded corners and no border on the left or right side. Default **fullWidthButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.solid,
    fullWidthButton: true,
 ),
```

## Flutter Social Icon Button

![Social Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/social-icon-button-2x_sCVoXFCFZ_sC-Qx0HKP.webp)

**The Flutter Social Icon Button** are buttons that have features of a **standard**, **solid** button with a full-color background and slightly rounded corners and icons as a child.

The Default button **shape** is set`GFButtonShape.standard`so that we will be able to get a standard shaped button with solid background color with slightly rounded corners. By default, button **type** is set to`GFType.solid`so, we can get buttons that have a solid background color with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.share),
 ),
```

### Flutter Button Size

**The Flutter Button size** can be varied using the **size** property, which specifies the size of the button. Default button size is set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.SMALL,
 ),
```

### Flutter Button Type

**The Flutter Button type** can be changed using the property **type** by setting it to `GFButtonType.outline`. The Default type of the IconButton will be `GFButtonType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

### Flutter Icon Button Shape

**The Shape of Icon Button** can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the **IconButton** set to`GFIconButtonShape.standard`which gives square-shaped IconButton with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    shape: GFIconButtonShape.pills,
 ),
```

