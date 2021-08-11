---
sidebarDepth: 2
description: >-
  Flutter Badge is a notification alarm that gives some additional information
  about the widget.
---

# GF Flutter Badge

![GF Flutter Badges Widget](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Badges_v0v7rCbeO.png)

### GF Flutter Badges

**GFBadges** are the **Flutter Badges** that are used to alert notification in the active widget. It gives the number of active notifications that arose.

Typically **GFBadge** takes text widget as a child, to display the number or characters inside badges.

```dart
import 'package:getwidget/getwidget.dart';

GFBadge(
  onPressed: (){},
  child: Text("12"),
),
```

### GF Flutter Badge Size

**GFBadge** size can be varied using the **size** property, which specifies the size of the badge. Default badge size set to `GFSize.medium`.

```dart
import 'package:getwidget/getwidget.dart';

GFBadge(
    onPressed: (){},
    child: "primary",
    size: GFSize.small,
 ),
```

### GF Flutter Badge Shape

the Shape of **GFBadge** can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the Badge set to`GFIconButtonShape.standard`which gives square-shaped IconButton with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFBadge(
    onPressed: (){},
    child: "primary",
    shape: GFIconButtonShape.pills,
 ),
```

| Name  | Description |
| :--- | :--- |
| **Description** | The GFBadge Shape |
| **Attribute** | shape |
| **Type** | `GFBadgeShape.standard, GFBadgeShape.square, GFBadgeShape.pills, GFBadgeShape.circle` |
| **Default** | `GFButtonShape.standard` |

### GF Flutter Badge Custom Properties

| Name | Description |
| :--- | :--- |
| **child** | child of type \[widget\] alternative to text |
| **textcolor** | the color to use for this badge;s text |
| **textStyle** | defines the styling of the text |
| **border** | defines the border side |
| **bordershape** | defines the shape of the border |
| **color** | GFColor is used to change the background of the button. |

### How to add badges in flutter button?

**GFBadges** can be used with buttons to display the number of notifications the active widget has. Below is the code for the button with GFBadge.

```dart
import 'package:getwidget/getwidget.dart';

GFButtonBadge(
  onPressed: () {},
  text: 'primary',
  icon: GFBadge(
    child: Text("12"),
  ),
),
```

Default button **shape** set to`GFButtonShape.standard`so that we will get standard-shaped button with solid background color and slightly rounded corners.

### Flutter Solid Button Badge

![Flutter Solid Button Badge](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/solid-badge-buttons-2x_AEtC9rqrH_9WGUj7cmx.png)

By default, button **type** is set to`GFType.solid`so, we will get buttons that have a solid background color with slightly rounded corners.

The callback is called when the button is tapped. By adding a callback to **onPressed** enables the button.

```dart
import 'package:getwidget/getwidget.dart';

GFButtonBadge(
  onPressed: (){},
  text: "primary",
  icon: GFBadge(
    child: Text("12"),
  ),
),
```

### Flutter Disabled Button Badge

![Flutter Disabled Button Badge](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/disabled-badge-buttons-2x_pRTAZyWWe_DdAbyhxxOt.png)

If this callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled because **onPressed** will be set to null.

```dart
import 'package:getwidget/getwidget.dart';

GFButtonBadge(
    onPressed: null,
    text: "primary",
    icon: GFBadge(
       child: Text("12"),
     ),
 ),
```

### Flutter Outline Button Badge 

![Flutter Outline Button Badge ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/outline-badge-buttons-2x-1_-Tow_mzA3_uCCZDyDrN.png)

**Flutter Outline Button** describes the button with a transparent background and a visible border. This button can be easily found in GFButton by adding **type** as **`GFType.outline`**.

```dart
import 'package:getwidget/getwidget.dart';

GFButtonBadge(
    onPressed: (){},
    text: "primary",
    icon: GFBadge(
      child: Text("12"),
    ),
    type: GFType.outline,
 ),
```

### Flutter Pills Button Badge   

**Flutter Pills Badge** can be achieved by adding property **shape** as `GFButtonShape.pills`.

```dart
import 'package:getwidget/getwidget.dart';

  GFButtonBadge(
    onPressed: (){},
    text: "primary",
    icon: GFBadge(
      child: Text("12"),
    ),
    shape: GFButtonShape.pills,
  ),
```

### Flutter Button Badge Size

**GFButton size** can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

```dart
import 'package:getwidget/getwidget.dart';

GFButtonBadge(
    onPressed: (){},
    text: "primary",
    icon: GFBadge(
      child: Text("12"),
    ),
    size: GFSize.small,
 ),
```

### GF Badge Custom Properties

**GF Button Badge** can be styled with several attributes to look a specific way. Each and every attribute is described below.

### How to change flutter badge color?

**GFColor** is used to change the background of the button.

| Name  | Description |
| :--- | :--- |
| **Description** | The color to use from application's color pallete |
| **Attribute** | color |
| **Type** | `GFColor` |
| **Default** | `GFColor.primary` |

### How to change badge size in flutter?

**GFSize** property is used to change the size of **GFBadge**

| Name  | Description |
| :--- | :--- |
| **Description** | The GFButtonBadge Size |
| **Attribute** | size |
| **Type** | `GFSize.large,  GFSize.medium, GfSize.small` |
| **Default** | `GFSize.medium` |

### How to change Flutter badge shape?

**GFBadge** shape can be changed using the **shape** parameter as shown below

| Name | Description |
| :--- | :--- |
| **Description** | The GFButtonBadge Shape |
| **Attribute** | shape |
| **Type** | `GFButtonShape.standard, GFButtonShape.square, GFButtonShape.pills` |
| **Default** | `GFButtonShape.standard` |

### How to change Flutter Badges Type ?

**GFBadge** type can be changed using the **type** parameter as shown below

| Name  | Description |
| :--- | :--- |
| **Description** | The GFButtonBadge Type |
| **Attribute** | type |
| **Type** | `GFType.solid, GFType.outline, GFType.outline2x, GFType.transparent` |
| **Default** | `GFType.solid` |

### How to chnage Flutter Badge custom position ?

**GFBadge** position can be changed using the **position** parameter as shown below

| Name | Description |
| :--- | :--- |
| **Description** | The GFButtonBadge Position |
| **Attribute** | position |
| **Type** | `GFPosition.start, GFPosition.end` |
| **Default** | `GFPosition.start` |

### GF Badge  custom Properties

| Name | Description |
| :--- | :--- |
| **onPressed** | callback i.e, called when the button is tapped |
| **onLongPressed** | callback i.e, called when the button is long-pressed |
| **text** | text of type \[string\] to describe button's label. text will be priority over child |
| **icon** | icon of type \[widget\] to describe button's label with icon |
| **child** | child of type \[widget\] alternative to text |
| **textcolor** | the color to use for this button's text when the button is enabled |
| **textStyle** | defines the styling of the text |
| **disabledColor** | the fillcolor of  the button when the button is disabled |
| **disabledTextColor** | the color to use for this button's text when the button is disabled |
| **borderSide** | defines the border side |
| **bordershape** | defines the shape of the border |
| **buttonBoxShadow** | if `true,` default boxShadow appears around button. |
| **boxShadow** | defines the boxShadow |
| **fullWidthButton** | if `true,` defines the full width of the button. |
| **blockButton** | if `true`, defines the block button. |
| **padding** | defines internal padding of the button |
| **focusColor** | fillColor of the button when it has the input focused |
| **hoverColor** | fillColor of the button when the pointer is hovered over it |
| **splashColor** | indicates that the button has been touched |
| **highlightColor** | indicates that the button is actively being pressed |

### Flutter Icon Badge Button  

**GFBadges** can be used with Buttons to display the notifications with icons using **GFIconBadge** button as shown in the below example.

```dart
import 'package:getwidget/getwidget.dart';

GFIconBadge(
  child: GFIconButton(
   onPressed: (){},
   icon: Icon(Icons.ac_unit),
  ),
  counterChild: GFBadge(
    child: Text("12"),
  ),
),
```

Default icon button **shape is** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners.

### Flutter Icon Button Badge Size

**GFButton** size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

```dart
import 'package:getwidget/getwidget.dart';

GFIconBadge(
  child: GFIconButton(
   onPressed: (){},
   icon: Icon(Icons.ac_unit),
   size: GFSize.large,
  ),
  counterChild: GFBadge(
    child: Text("12"),
  ),
),
```

### Flutter Icon Button Badge Type

**GFButton** type can be changed using property **type** by setting to `GFType.outline`. Default type of the IconButton will be `GFType.solid`.

```dart
import 'package:getwidget/getwidget.dart';

 GFIconBadge(
  child: GFIconButton(
   onPressed: (){},
   icon: Icon(Icons.ac_unit),
   type: GFType.outline,
  ),
  counterChild: GFBadge(
    child: Text("12"),
  ),
),
```

### Flutter Icon Button Badge Shape

The Shape of **Icon Button** can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the IconButton set to `GFIconButtonShape.standard` which gives square shaped IconButton with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFIconBadge(
  child: GFIconButton(
   onPressed: (){},
   icon: Icon(Icons.ac_unit),
   shape: GFIconButtonShape.pills,
  ),
  counterChild: GFBadge(
    child: Text("12"),
  ),
),
```

| Name  | Description |
| :--- | :--- |
| **Description** | The GFIconButton Shape |
| **Attribute** | shape |
| **Type** | `GFIconButtonShape.standard, GFIconButtonShape.square, GFIconButtonShape.pills, GFIconButtonShape.circle` |
| **Default** | `GFIconButtonShape.standard` |

### Flutter Icon Button Custom Properties

| Name | Description |
| :--- | :--- |
| **child** | child of type \[widget\] alternative to text |
| **textcolor** | the color to use for this badge;s text |
| **textStyle** | defines the styling of the text |
| **borderSide** | defines the border side |
| **bordershape** | defines the shape of the border |
| **color** | GFColor is used to change the background of the button. |
| **iconSize** | defines the size of icon |
| **buttonBoxShadow** | if `true,` default boxShadow appears around button. |
| **boxShadow** | defines the boxShadow |

