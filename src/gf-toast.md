---
sidebarDepth: 2
description: >-
  GFToast is a Flutter Toast Widget that can be used to display quick warning or
  error messages.
---

# GF Toast - A Flutter Toast Widget

## Toast Info

![GW Toast Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Toasts_CjkhzUIzm.png)

### Usage

**GFToast** should be wrapped inside the **GFFloating** Widget.The **child** of the **GFFloatingWidget** takes **GFToast** as its argument and the **body** takes any kind of widgets. The simple code is as shown below.

```dart
import 'package:getwidget/getwidget.dart';

bool showFloatingToast = false;

Scaffold
    body: GFFloatingWidget(
        verticalPosition: MediaQuery.of(context).size.width * 0.5,
        horizontalPosition: MediaQuery.of(context).size.height * 0.02,
        showBlurness: showFloatingToast,
        blurnessColor: Colors.black54,
        child: showFloatingToast
            ? GFToast(
          backgroundColor: Colors.white,
          text:
          'This item already has the label “travel”',
          textStyle: const TextStyle(color: Colors.black87),
          button: GFButton(
            onPressed: () {
              setState(() {
                showFloatingToast = false;
              });
            },
            text: 'OK',
            type: GFButtonType.transparent,
            color: GFColors.SUCCESS,
          ),
          autoDismiss: false,
        )
            : Container(),
        body: Column(
          children: [
            Container(
              margin: const EdgeInsets.only(left: 40, right: 40),
              child: GFButton(
                onPressed: () {
                  setState(() {
                    showFloatingToast = !showFloatingToast;
                  });
                },
                text: 'View Floating Toast',
              ),
            ),
          ],
        )
    ),
),  
```

### Toast with Button

![Toast with Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/BAsic_toasts_3x_Jy51nVck_o.png)

```dart
import 'package:getwidget/getwidget.dart';

GFToast(
  text:'This item already has the label “travel”',
  button: GFButton(
     onPressed: () {},
     text: 'Close',
     type: GFButtonType.transparent,
     color: GFColor.success,
   ),
   autoDismiss: false,
),
```

### Auto Dismissible Toast

The bool value `true` should be passed to **autoDismiss** property to make the toast, auto dismissible,

```dart
import 'package:getwidget/getwidget.dart';

GFToast(
  text: 'This item already has the label “travel”',
  autoDismiss: true,
)
```

### Positioning of the Toast

Toasts can be positioned accordingly inside the **GFFloating** Widget. The positioning takes two parameters ie, **horizontalPosition** and **verticalPosition**. The usage of these is shown below.

```dart
import 'package:getwidget/getwidget.dart';

body:GFFloatingWidget(
    horizontalPosition:40.0,
    verticalPosition:20.0,
    child:GFToast(
    text: 'Logged In',
  ),
 body:Text('body or any kind of widget here..')
)
```

### Custom Properties

|  |  |
| :--- | :--- |
| **child** | **child** of type \[Widget\] which is alternative to **text**. **text** will get priority over **child** |
| **backgroundColor** | color of type \[GFColor\] or \[Color\] to change the backgroundColor of toast |
| **textStyle** | textStyle of type \[textStyle\] applicable to **text** only and not for **child** |
| **width** | to control the width of the toast |
| **type** | type of \[GFToastType\]  _ie_, `rounded` , `fullWidth` and defaults to `basic` |
| **autoDismiss** | takes **bool** values to automatically hide the toast, defaults to `true` |
| **animationDuration** | duration of the fade in and out animation when **autoDismiss** is `true` |
| **duration** | duration called on how much delay the toast should be visible |
| **alignment** | to align the text inside the toast _ie,_ `left`, `center`, `end` |

