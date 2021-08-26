---
sidebarDepth: 2
description: >-
  Flutter Icon button is a button that has a icon with solid background fill
  color in it.
image: >-
  https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Icon_buttons_inVOVWej_.png
canonicalUrl: https://docs.getwidget.dev/gf-button/icon-button/

---

# Flutter Icon Button

![GF Flutter Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Icon_buttons_inVOVWej_.png)

## Flutter Icon Button

**Flutter Icon Button** or **Icon Button Flutter** is a flutter button where the button has icons on them.  

**GFIcon Button** is an **Icon Flutter Button** that can have an icon, text, and a combination of both icon and text on it. 

**GFButtons** are clickable buttons that are used widely in an application. **GFButtons** come in many shapes and types. One of them is **Flutter Icon Button.**

The Default button **shape** is set to`GFIconButtonShape.standard`so that we will be able to get a standard shaped button with solid background color with slightly rounded corners.

## Flutter Disabled Icon Button:

![Flutter Disabled Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/disabled-buttons-2x_bIhj5gtao_KuzmzE36rim8.png)

Default **GFIconButton's** **onPressed** will be null, which gives the Disabled button.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(                          
    onPressed: null,             
    text:"primary"
),
```

**GF IconButtons** can be styled with several attributes to look in a specific way. All the attributes are described below.

## Flutter Solid Icon Button

![Flutter Solid Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/solid-icon-button-2x_x7HdkO4Xa_5i6iwtmoQY.png)

By default, button **type** is set to `GFButtonType.solid` so, we were able to get buttons that have a solid background color with slightly rounded corners.

The callback is called when the button is tapped. By adding a callback to **onPressed** enables the button.

```dart
import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
  ),
```

## Flutter Outline Icon Button

![Flutter Outline Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-icon-button-2x-1_9DnBbeMtB_kkUSHBKTef.png)

**The Flutter Outline Button** describes the button with a transparent background and a visible border. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline,
 ),
```

## Flutter Outline2x Icon Button

![Flutter Outline2x Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-2x-icon-button-2x_RwMGJ0MJ__5VFGKu0tkD.png)

The **Flutter Outline Icon Button** describes the button with a transparent background and a visible border of 2x border width. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline2x`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline2x,
 ),
```

## Flutter Transparent Icon Button

The Flutter Transparent Icon Button can be achieved by adding **type** as**`GFButtonType.transparent`**we were able to get a transparent button. Default GFButton **type** will be **`GFButtonType.solid`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.transparent,
 ),
```

## Flutter Pills Icon Button

![Flutter Pills Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/pills-icon-button-2x_o-E933fNd_XL_kSsNAyvto.png)

We will be able to get **pills shaped** button with solid background color with rounded corners by adding property **shape** with **`GFButtonShape.pills`** . 

```dart
import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.pills,
  ),
```

## Flutter Square Icon Button

![Flutter Square Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-icon-button-2x_gwaY8THuK_FvQEV9zlIp.png)

We will be able to get a **square-shaped button** with solid background color with no rounded corners by adding property **shape** with **`GFButtonShape.square`** .

```dart
import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.square,
  ),
```

## Flutter Block Icon Button

![Flutter Block Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/block-icon-button-2x_jb9rGWSR9_Dm-XpRE3dgwQ.png)

**The Flutter Block button** specifies how wide the button should be. By setting **blockButton** state, `true`it will change the button to a full-width block with rounded corners. Default **blockButton** set to `false`.

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

## Flutter Full Width Icon Button

![Flutter Full Width Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/fullwidth-icon-button-2x-1_rsx_EmmVZ_A_wcghxKaW.png)

The **Flutter Full-Width** **button** specifies the button should be in full width of the screen. By setting a f**ullWidthButton** state,`true` it will change the button to a Full-width button with rounded corners and no border on the left or right side.  Default **fullWidthButton** set to `false`.

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

## Flutter Icon Button Size

**The Flutter Button size** can be varied using the **size** property, which specifies the size of the button. The  Default button size  is set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    size: GFSize.SMALL,
 ),
```

## Flutter Icon Button

**The Flutter Icon Button** having features of a **standard, solid button** with a fill-color background and slightly rounded corners and icons as a child.

The Default button **shape** is set`GFButtonShape.standard`so that we will be able to get a standard-shaped button with solid background color with slightly rounded corners. By default, button **type** is set to`FButtonType.solid` so, we are able to get buttons to have a solid background color with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.share),
 ),
```

### Flutter Icon Button Size Properties

**The Flutter Button size** can be varied using the **size** property, which specifies the size of the button. The default button size is set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.small,
 ),
```

### Flutter GF Icon Button Type 

**The Flutter Button type** can be changed by using property **type** and setting to`GFButtonType.outline`. The default type of the IconButton will be `GFType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

### Flutter GF Button Shape Properties

**The Flutter Shape of Icon Button** can be changed by setting the property **shape** to `GFIconButtonShape.circle`. The default shape of the IconButton is set to `GFIconButtonShape.standard`which gives a square-shaped IconButton with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    shape: GFIconButtonShape.pills,
 ),
```

|  |  |
| :--- | :--- |
| **Description** | The GFIconButton Shape |
| **Attribute** | shape |
| **Type** | `GFIconButtonShape.standard, GFIconButtonShape.square, GFIconButtonShape.pills, GFIconButtonShape.circle` |
| **Default** | `GFIconButtonShape.standard` |

### Flutter GF Button Custom Properties

| Name | Description |
| :--- | :--- |
| **child** | child of type \[widget\] alternative to text |
| **textColor** | the color to use for this badge's text |
| **textStyle** | defines the styling of the text |
| **borderSide** | defines the border side |
| **borderShape** | defines the shape of the border |
| **color** | GFColor is used to change the background of the button. |
| **iconSize** | defines the size of an icon |
| **buttonBoxShadow** | if `true,` default boxShadow appears around the button. |
| **boxShadow** | defines the boxShadow |

