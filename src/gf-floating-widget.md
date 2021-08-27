---
sidebarDepth: 2
description: >-
  GF Flutter Floating Widget is a simple widget that acts as the outer wrapper
  to other kinds of components.
canonicalUrl: 'https://docs.getwidget.dev/gf-floating-widget'
---

# GF Flutter Floating Widget

The **GF Flutter Floating Widget** is mostly and effectively used to show some **popups**, **alerts,** or some **error messages** which float over the main body. **GF Floating Widget's** child can take any kind of component or widgets as its parameter.

The simple way to use the **GF Flutter Floating widget** with its body and child properties is as shown below example code:

```dart
import 'package:getwidget/getwidget.dart';

return Scaffold(
  body:GFFloatingWidget(
    child:Text('This is a floating text'),
    body:Text('body or any kind of widget here..')
  )
)
```

## GF Flutter Floating Widget Position

**GFFloating Widget** comes with two types of positions ie, **horizontalPosition** and **VerticalPosition** in which the **child** of **GF** **Floating** widget can be placed anywhere inside the body ie, it basically floats in the body, and hence the name GF Floating Widget.

The below code shows how to use **Floating Widget positions**

```dart
import 'package:getwidget/getwidget.dart';

return Scaffold(
  body:GFFloatingWidget(
    child: GFIconBadge(
              child: GFAvatar(
              size: GFSize.LARGE,
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

## GF Flutter Floating Widget Custom Properties

The look and feel of **GFFloating Widget** can be changed using the below properties:

| Name | Description |
| :--- | :--- |
| **showBlurness** | showBlurness defines whether the body should be blur or not when showing popups, error messages, etc whenever the **child** property is used in  GF Floating widget. The showBlurness defaults to `false`. |
| **blurnessColor** | defines how much blur  backgroundColor should be whenever the **child** is used and when showBlurness is `true` |

