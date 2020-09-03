---
sidebarDepth: 2
description: >-
 Social Button determines the standard, solid, button with both label and icon.
---

# Social Button

![Social Button](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Social_Buttons_2x_qhe5emJKB.png)

## Social Button Full

Default button **shape** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners.

### Solid Social Button

![Solid Social Button](../assets/solid-social-button-2x.png)

By default, button **type** set to `GFButtonType.solid` so, we able to get buttons have a solid background color with slightly rounded corners.

The callback that is called when the button is tapped. By adding callback to **onPressed** enables the button.

```dart
  import 'package:getwidget/getwidget.dart';
  
  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
  ),
```

### Disabled Social Button

![Disabled Social Button](../assets/disabled-buttons-2x-1.png)

If this callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled because, **onPressed** set to null. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: null,
    text: "primary",
    icon: Icon(Icons.share),
 ),
```

### Outline  Social Button

![Outline Social Button](../assets/outline-social-button-2x-1.png)

Outline Button describes as the Button with a transparent background and a visible border. This button can be easily get in GFButton by adding **type** as **`GFButtonType.outline`**. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline,
 ),
```

### Outline2x  Social Button

![Outline 2X Social Button](../assets/outline-2x-social-button-2x.png)

Outline Icon Button describes as the Button with a transparent background and a visible border of 2x border-width. This button can be easily get in GFButton by adding **type** as **`GFButtonType.outline2x`**. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.outline2x,
 ),
```

### Transparent  Social Button

![Transparent Social Button](../assets/transparent-social-button-2x.png)

In GFButton by adding **type** **`GFButtonType.transparent`**, we able to get transparent button. Default GFButton **type** will be `GFType.solid`. 

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFButtonType.transparent,
 ),
```

### Pills  Social Button

![Pills Social Button](../assets/pills-social-buttons-2x.png)

We will able to get pills shaped button with solid background color with rounded corners by adding property **shape** with  `GFButtonShape.pills` . 

```dart
 import 'package:getwidget/getwidget.dart';
  
  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.pills,
  ),
```

### Square Social Button

![Square Social Button](../assets/square-social-button-2x.png)

We will able to get square shaped button with solid background color with no rounded corners by adding property **shape** with  `GFButtonShape.square` . 

```dart
 import 'package:getwidget/getwidget.dart';
  
  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.square,
  ),
```

###  Social  Button Size

![Social Button Size](../assets/full-width-social-button-2x-1.png)

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    size: GFSize.SMALL,
 ),
```

### Block Social Button

![Block Social Button](../assets/block-social-button-2x.png)

Block button specify how wide the button should be. By setting **blockButton** state `true`, it will change the button to a full-width block with rounded corners. Default **blockButton** set to `false`.

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

### Full Width Social Button

![Full Width Social Button](../assets/full-width-social-button-2x.png)

Full Width button specify how wide the button should be. By setting **fullWidthButton** state `true`, it will change the button to a Full-width button with square corners and no border on the left or right. Default **fullWidthButton** set to `false`.

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

## Social Icon Button

![Social Icon Button](../assets/social-icon-button-2x.png)

Social Icon Button having features of standard, solid button with fill color background and slightly rounded corners and icon as a child.

Default button **shape** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners. By default, button **type** set to `GFType.solid` so, we able to get buttons have a solid background color with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.share),
 ),
```

### Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.MEDIUM`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.SMALL,
 ),
```

### Type

Button type can be changed using property **type** by setting to `GFButtonType.outline`. Default type of the IconButton will be `GFButtonType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    type: GFButtonType.outline,
 ),
```

### Shape

Shape of Icon Button can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the IconButton set to `GFIconButtonShape.standard` which gives square shaped IconButton with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    shape: GFIconButtonShape.pills,
 ),
```

