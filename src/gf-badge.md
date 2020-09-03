---
sidebarDepth: 2
description: >-
  Badge contain a number or other characters. They can be used as a notification
  that there are additional items associated with an element and indicate how
  many items there are.
---

# GF Badge

![Badge](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Badges_2x_08i8g5F_w.png)

Badges

Typically GFBadge takes text widget as child, to display number or characters inside badges.

```dart
import 'package:getwidget/getwidget.dart';

GFBadge(
  onPressed: (){},
  child: Text("12"),
),
```

### Size

Badge size can be varied using **size** property, which specifies the size of the badge. Default badge size set to `GFSize.medium`.

```dart
import 'package:getwidget/getwidget.dart';

GFBadge(
    onPressed: (){},
    child: "primary",
    size: GFSize.small,
 ),
```

### Shape

Shape of Badge can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the Badge set to `GFIconButtonShape.standard` which gives square shaped IconButton with slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFBadge(
    onPressed: (){},
    child: "primary",
    shape: GFIconButtonShape.pills,
 ),
```

|  |  |
| :--- | :--- |
| **Description**     |  The GFBadge Shape                                               |
| **Attribute** |  shape |
| **Type**               | `GFBadgeShape.standard, GFBadgeShape.square, GFBadgeShape.pills, GFBadgeShape.circle` |
| **Default** | `GFButtonShape.standard` |

### Custom Properties

| Name | Description |
| :--- | :--- |
| **child** | child of type \[widget\] alternative to text |
| **textcolor** | the color to use for this badge;s text |
| **textStyle** | defines the styling of the text |
| **border** | defines the border side  |
| **bordershape** | defines the shape of the border |
| **color** | GFColor is used to change the background of the button. |

## Button with Badges

Badges can be used with button to display, the badges with label and GFButton properties.

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

Default button **shape** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners.

### Solid Button Badge

![Solid Button Badge](./assets/solid-badge-buttons-2x.png)

By default, button **type** set to `GFType.solid` so, we able to get buttons have a solid background color with slightly rounded corners.

The callback that is called when the button is tapped. By adding callback to **onPressed** enables the button.

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

### Disabled Button Badge

![Disabled Button Badge](./assets/disabled-badge-buttons-2x.png)

If this callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled because, **onPressed** set to null. 

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

### Button Badge Type \(Outline Button\)

![Outline Button Badge](./assets/outline-badge-buttons-2x-1.png)

Outline Button describes as the Button with a transparent background and a visible border. This button can be easily get in GFButton by adding **type** as **`GFType.outline`**. 

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

### Button Badge Shape \(Pills Button\)

We will able to get pills shaped button with solid background color with rounded corners by adding property **shape** with  `GFButtonShape.pills` . 

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

###  Button Badge Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

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

## Properties 

GF Button Badge can be styled with several attributes to look a specific way. Each and every attribute is described below.

### Color 

GFColor is used to change the background of the button.

|  |  |
| :--- | :--- |
| **Description** | The color to use from application's color pallete                                |
| **Attribute** |  color |
| **Type** | `GFColor` |
| **Default** | `GFColor.primary` |

### Size

|  |  |
| :--- | :--- |
| **Description**  | The GFButtonBadge Size                                                                                           |
| **Attribute** |  size |
| **Type** | `GFSize.large,  GFSize.medium, GfSize.small` |
| **Default** | `GFSize.medium` |

### Shape

|  |  |
| :--- | :--- |
| **Description**     |  The GFButtonBadge Shape                                               |
| **Attribute** |  shape |
| **Type**               | `GFButtonShape.standard, GFButtonShape.square, GFButtonShape.pills` |
| **Default** | `GFButtonShape.standard` |

### Type

|  |  |
| :--- | :--- |
| **Description**     |   The GFButtonBadge Type                                |
| **Attribute** |   type |
| **Type** | `GFType.solid, GFType.outline, GFType.outline2x, GFType.transparent` |
| **Default** | `GFType.solid` |

### Position

|  |  |
| :--- | :--- |
| **Description** |  The GFButtonBadge Position                                                                    |
| **Attribute** |  position |
| **Type** | `GFPosition.start, GFPosition.end` |
| **Default** | `GFPosition.start` |

### Custom Properties

| Name | Description |
| :--- | :--- |
| **onPressed**   | callback i.e, called when the button is tapped |
| **onLongPressed** | callback i.e, called when the button is long-pressed |
| **text** | text of type \[string\] to describe button's label. text will be priority over child |
| **icon** | icon of type \[widget\] to describe button's label with icon |
| **child** | child of type \[widget\] alternative to text |
| **textcolor** | the color to use for this button's text when the button is enabled |
| **textStyle** | defines the styling of the text |
| **disabledColor** | the fillcolor of  the button when the button is disabled |
| **disabledTextColor** | the color to use for this button's text when the button is disabled |
| **borderSide** | defines the border side  |
| **bordershape** | defines the shape of the border |
| **buttonBoxShadow** | if `true,` default boxShadow appears around button. |
| **boxShadow** | defines the boxShadow |
| **fullWidthButton** | if `true,` defines the full width of the button.  |
| **blockButton** | if `true`, defines the block button.  |
| **padding** | defines internal padding of the button |
| **focusColor** | fillColor of the button when it has the input focused |
| **hoverColor** | fillColor of the button when the pointer is hovered over it |
| **splashColor** | indicates that the button has been touched |
| **highlightColor** | indicates that the button is actively being pressed |

## Icon Button with Badge

Badges can be used with button to display, the badges with icons and GFIconButton properties.

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

Default icon button **shape** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners.

### IconButton Badge Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

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

### IconButton Badge Type

Button type can be changed using property **type** by setting to `GFType.outline`. Default type of the IconButton will be `GFType.solid`.

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

### IconButton Badge Shape

Shape of Icon Button can be changed by setting property **shape** to `GFIconButtonShape.circle`. Default shape of the IconButton set to `GFIconButtonShape.standard` which gives square shaped IconButton with slightly rounded corners.

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

