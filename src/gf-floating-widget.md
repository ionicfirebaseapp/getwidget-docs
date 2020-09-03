---
sidebarDepth: 2
description: >-
  GF Floating Widget is a simple widget that acts like the outer wrapper to 
  other kind of components. It has properties like body and child in which the
  body acts like the Scaffold's body.
---

# GF Floating Widget

GF Floating Widget's child can take any kind of components or widgets as its paramater. The GF Floating Widget is mostly and effectively used to show some **popups**, **alerts** or some **error messages** which floats over the main body.

### Usage

The simple way to use the GF Floating widget with its body and child properties is as shown below:

```dart
import 'package:getwidget/getwidget.dart';

return Scaffold(
  body:GFFloatingWidget(
    child:Text('This is a floating text'),
    body:Text('body or any kind of widget here..')
  )
)
```

### Position

There are two types of positions ie, **horizontalPosition** and **VerticalPosition** in which the **child** of GF Floating widget can be placed any where inside the body ie, it basically floats in the body and hence the name GF Floating Widget. The below code shows how to use the positions:

```dart
import 'package:getwidget/getwidget.dart';

return Scaffold(
  body:GFFloatingWidget(
    child: GFIconBadge(
              child: GFAvatar(
              size: GFSize.large,
              backgroundImage:AssetImage('your asset image'),
              ),
           counterChild:  GFBadge(
           text: '12',
           shape: GFBadgeShape.circle,
           )
        ),
    body:Text('body or any kind of widget here..'),
    verticalPosition: MediaQuery.of(context).size.height* 0.2,
    horizontalPosition: MediaQuery.of(context).size.width* 0.8,
  )
)
```

### Custom Properties

|  |  |
| :--- | :--- |
| showblurness | showblurness defines whether the body should be blur or not when showing popups, error messages etc whenever the  **child** property is used in  GF Floating widget. The showblurness defaults to `false`. |
| blurnessColor | defines how much blur  backgroundColor should be whenever the **child** is used and when showblurness is `true` |

