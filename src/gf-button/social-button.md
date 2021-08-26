---
sidebarDepth: 2
description: >-
  Flutter Social Buttons are a set of buttons that are used to get sign-in
  buttons for any social media account, GF social button comes with lots of
  properties to customize as need.
image: >-
  https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Social_Buttons_359dhW_7Eo0.png
canonicalUrl: https://docs.getwidget.dev/gf-button/social-button/

---

# Flutter Social Button

![Flutter Social Button UI Design ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Social_Buttons_359dhW_7Eo0.png)

## Flutter Social Button

**GFSocial Buttons** are clickable buttons that are widely used in any social accounts to get the authentication process done like login, sign-in, etc.

The Default button **shape** is set`GFButtonShape.standard`so that we will be able to get the standard shaped button with solid background color with slightly rounded corners.

**Flutter Social Buttons** can have only **icons** or **icons along with Text**. We will see both of them in the below section with examples:

## Flutter Solid Social Button With Text

**GFSocial solid button** has a full background color and **text** on it. By default, the button **type** is set to `GFButtonType.solid` so, we were able to get buttons that have a solid background color with slightly rounded corners.

![Flutter Solid Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-social-button-2x_ofI-wQHkM_kJIyYkwhYR.png)

The Below code gives the **icon with the text button** as the above image:  The **icon parameter** can be any widget like **default flutter icons** or **customized asset images** or **icons**. Unless The icon parameter is not passed, we will get a default GFButton without the icon

```dart
  import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
   icon: Icon(Icons.facebook),
  ),
```

## Flutter Disabled Social Button with Text

![Flutter Disabled Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/disabled-buttons-2x-1_WXYljNGX9_Og84OQ7_j.png)

If this callback and **onPressed** are null, then the button will be disabled. Default **GFButton** will be disabled as **onPressed** is set to null.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: null,
    text: "primary",
   icon: Icon(Icons.facebook),
 ),
```

## Flutter Outline  Social Button with Text

![Outline  Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-social-button-2x-1_s9l5xQdik_18Ar4Rbfp0Z.png)

**The Flutter Outline Button** describes the Button with a transparent background and a visible border. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
   icon: Icon(Icons.facebook),
    type: GFButtonType.outline,
 ),
```

## Flutter Outline2x  Social Button with Text

![Flutter Outline2x Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-2x-social-button-2x_3hSCzrQDG_YjwynP9h8q.png)

**The Flutter Outline** **Icon** Button describes the Button with a transparent background and a visible border of 2x border width. This button can be easily found in GFButton by adding **type** as **`GFButtonType.outline2x`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
   icon: Icon(Icons.facebook),
    type: GFButtonType.outline2x,
 ),
```

## Flutter Transparent  Social Button With Text

![Flutter Transparent Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/transparent-social-button-2x_lRGI7ulxY_Nhn4SFl_l0.png)

In GFButton by adding **type,`GFButtonType.transparent`** we can get a transparent button. Default GFButton **type** will be `GFType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
   icon: Icon(Icons.facebook),
    type: GFButtonType.transparent,
 ),
```

## Flutter Circular/Rounded  Social Button with Text

![Flutter Pills  Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/pills-social-buttons-2x_GfJjVk77h_itBRIApxau.png)

We will be able to get the **circular or rounded** **shaped** **buttons** with solid background color with rounded corners by adding property **shape** with `GFButtonShape.pills` .

```dart
 import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.facebook),
    shape: GFButtonShape.pills,
  ),
```

## Flutter Square Social Button with Text

![Flutter Square Social Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-social-button-2x_ofI-wQHkM_kJIyYkwhYR.png)

We will be able to get a **square-shaped button** with solid background color with no rounded corners by adding property **shape** with `GFButtonShape.square` .

```dart
 import 'package:getwidget/getwidget.dart';

  GFButton(
    onPressed: (){},
    text: "primary",
   icon: Icon(Icons.facebook),
    shape: GFButtonShape.square,
  ),
```

## Flutter Social Button Size Properties

![Flutter Facebook Social Button Size](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/full-width-social-button-2x-1_45MJ57qDeo_LWX7K-eIj9.png)

The **Flutter Social Button size** can be varied using the **size** property, which specifies the size of the button. Default button size is set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
   icon: Icon(Icons.facebook),
    size: GFSize.SMALL,
 ),
```

## Flutter Block Social Button

![Flutter Social Button ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/block-social-button-2x_rkTw_Ij63_tp2AOfDiWy.png)

**The Flutter Block button** specifies how wide the button should be with some spacing on both the left and right sides. By setting **blockButton** state, `true` it will change the button to a full-width block. Default **blockButton** is set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
   icon: Icon(Icons.facebook),
    type: GFButtonType.solid,
    blockButton: true,
 ),
```

## Flutter Full Width Social Button

![Flutter Full Width Social Button](https://ik.imagekit.io/ionicfirebaseapp/docs/full-width-social-button-2x-1_45MJ57qDeo_LWX7K-eIj9.png)

The **Flutter Full-Width** **button** specifies the button should be in full width of the screen. By setting a f**ullWidthButton** state,`true` it will change the button to a Full-width button. Default **fullWidthButton** set to `false`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.facebook),
    type: GFButtonType.solid,
    fullWidthButton: true,
 ),
```

## Flutter Social Icon Button

![Flutter Social Icon Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/social-icon-button-2x_sCVoXFCFZ_sC-Qx0HKP.webp)

The **Flutter Social Icon Button** are buttons that have features of a **standard**, **solid** button with a full-color background and slightly rounded corners and only **icons** as a child.

The Default button **shape** is set`GFButtonShape.standard`so that we will be able to get a standard shaped button with solid background color with slightly rounded corners. By default, button **type** is set to`GFType.solid`.

The Below example takes **icon** as its primary parameter to display only **icon button**

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.facebook),
 ),
```

### How to change flutter button size?

**The Flutter Button size** can be varied using the **size** property, which specifies the size of the button. Default button size is set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.facebook),
    size: GFSize.SMALL,
 ),
```

### GF Flutter Button Type

**The Flutter Button type** can be changed using the property **type** by setting it to `GFButtonType.outline`. The Default type of the IconButton will be `GFButtonType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
   icon: Icon(Icons.facebook),
    type: GFButtonType.outline,
 ),
```

### Flutter Social Icon Button Shape

**The Shape of Icon Button** can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the **IconButton** set to`GFIconButtonShape.standard`which gives square-shaped IconButton with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.facebook),
    shape: GFIconButtonShape.pills,
 ),
```

