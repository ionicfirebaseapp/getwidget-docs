---
description: 'Icon Button having features of standard, solid button with label and icon.'
---

# Icon Button

![Icon Button](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/tr:dpr-auto,tr:w-auto/Icon_buttons_2x_OTNJg6egxk.png)

## Icon Button

Default button **shape** set to `GFIconButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners.

### Disabled Button:

![Disabled Button](../.gitbook/assets/disabled-buttons-2x.png)

Default GFIconButton's  onPressed will be null, that gives Disabled button.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(                          
    onPressed: null,             
    text:"primary"
),
```

GF IconButtons can be styled with several attributes to look a specific way. Each and every attribute is described below.

### Solid Icon Button

![Solid Icon Button](../.gitbook/assets/solid-icon-button-2x.png)

By default, button **type** set to `GFType.solid` so, we able to get buttons have a solid background color with slightly rounded corners.

The callback that is called when the button is tapped. By adding callback to **onPressed** enables the button.

```dart
import 'package:getflutter/getflutter.dart';
  
  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
  ),
```

### Outline Icon Button

![Outline Icon Button](../.gitbook/assets/outline-icon-button-2x%20%281%29.png)

Outline Button describes as the Button with a transparent background and a visible border. This button can be easily get in GFButton by adding **type** as **`GFType.outline`**. 

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFType.outline,
 ),
```

### Outline2x Icon Button

![Outline 2X Icon Button](../.gitbook/assets/outline-2x-icon-button-2x.png)

Outline Icon Button describes as the Button with a transparent background and a visible border of 2x border-width. This button can be easily get in GFButton by adding **type** as **`GFType.outline2x`**. 

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFType.outline2x,
 ),
```

### Transparent Icon Button

![Transparent Icon Button](../.gitbook/assets/transparent-icon-button-2x.png)

In GFIconButton by adding **type** **`GFType.transparent`**, we able to get transparent button. Default GFButton **type** will be **`GFType.solid`**. 

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFType.transparent,
 ),
```

### Pills Icon Button

![Pills Icon Button](../.gitbook/assets/pills-icon-button-2x.png)

We will able to get pills shaped button with solid background color with rounded corners by adding property **shape** with  **`GFButtonShape.pills`** . 

```dart
import 'package:getflutter/getflutter.dart';
  
  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.pills,
  ),
```

### Square Icon Button

![Square Icon Button](../.gitbook/assets/square-icon-button-2x.png)

We will able to get pills shaped button with solid background color with no rounded corners by adding property **shape** with  **`GFButtonShape.square`** . 

```dart
import 'package:getflutter/getflutter.dart';
  
  GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    shape: GFButtonShape.square,
  ),
```

### Block Icon Button

![Block Icon Button](../.gitbook/assets/block-icon-button-2x.png)

Block button specify how wide the button should be. By setting **blockButton** state `true`, it will change the button to a full-width block with rounded corners. Default **blockButton** set to `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFType.solid,
    blockButton: true,
 ),
```

### Full Width Icon Button

![Full Width Icon Button](../.gitbook/assets/fullwidth-icon-button-2x%20%281%29.png)

Full Width button specify how wide the button should be. By setting **fullWidthButton** state `true`, it will change the button to a Full-width button with square corners and no border on the left or right. Default **fullWidthButton** set to `false`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    type: GFType.solid,
    fullWidthButton: true,
 ),
```

### Icon Button Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

```dart
import 'package:getflutter/getflutter.dart';

GFButton(
    onPressed: (){},
    text: "primary",
    icon: Icon(Icons.share),
    size: GFSize.small,
 ),
```

## Icons Only Button

Icons Only Button having features of standard, solid button with fill color background and slightly rounded corners and icon as a child.

Default button **shape** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners. By default, button **type** set to `GFType.solid` so, we able to get buttons have a solid background color with slightly rounded corners.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    icon: Icon(Icons.share),
 ),
```

### Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.small,
 ),
```

### Type

Button type can be changed using property **type** by setting to `GFType.outline`. Default type of the IconButton will be `GFType.solid`.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    type: GFType.outline,
 ),
```

### Shape

Shape of Icon Button can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the IconButton set to `GFIconButtonShape.standard` which gives square shaped IconButton with slightly rounded corners.

```dart
import 'package:getflutter/getflutter.dart';

GFIconButton(
    onPressed: (){},
    text: "primary",
    shape: GFIconButtonShape.pills,
 ),
```

|  |  |
| :--- | :--- |
| **Description**     |  The GFIconButton Shape                                               |
| **Attribute** |  shape |
| **Type**               | `GFIconButtonShape.standard, GFIconButtonShape.square, GFIconButtonShape.pills, GFIconButtonShape.circle` |
| **Default** | `GFIconButtonShape.standard` |

### Custom Properties

| Name | Description |
| :--- | :--- |
| **child** | child of type \[widget\] alternative to text |
| **textcolor** | the color to use for this badge;s text |
| **textStyle** | defines the styling of the text |
| **borderSide** | defines the border side  |
| **bordershape** | defines the shape of the border |
| **color** | GFColor is used to change the background of the button. |
| **iconSize** | defines the size of icon |
| **buttonBoxShadow** | if `true,` default boxShadow appears around button. |
| **boxShadow** | defines the boxShadow |



