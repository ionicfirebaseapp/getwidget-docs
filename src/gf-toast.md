---
sidebarDepth: 2
description: >-
  GF Flutter Toast is a Flutter Toast Widget that can be used to display quick
  warning or error messages for a short time period. You can customize it as
  required.
---

# GF Flutter Toast Widget

![GF Flutter Toast Widget](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Toasts_CjkhzUIzm.png)

### GF Flutter Toast Widget and its Usage

**GFToast** is a **Flutter Toast** that is used to show **toast messages** or **errors** in a given interval of time and it can have a button to dismiss the messages.

**GFToast** should be wrapped inside the **GFFloating** Widget. The **child** of the **GFFloatingWidget** takes **GFToast** as its argument and the **body** takes any kind of widgets. 

The simple example code for **Flutter Toast Widget** is shown below.

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

### GF Flutter Toast with Button:

**GFToas**t can be used to dismiss or cancel messages or warnings with the help of a **GFButton** inside the GFToast. Hence GFToast will be usually accompanied by a **Flutter button**.

The below example shows a simple code of how the **Flutter button** is used with the **GFToast**.

![Flutter Custom Toast with Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/BAsic_toasts_3x_Jy51nVck_o.png)

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

### Flutter Auto Dismissible Toast

**GFToast** can be dismissed using **Flutter buttons** and we have seen the example in the above section. But there is also another way to dismiss it by just passing a boolean value to the **autoDismiss** property wherein the toast will automatically get dismissed after a few given seconds.

The bool value `true` should be passed to **autoDismiss** property to make the toast, auto dismissible. The below code shows a simple example.

```dart
import 'package:getwidget/getwidget.dart';

GFToast(
  text: 'This item already has the label “travel”',
  autoDismiss: true,
)
```

### Flutter Toast custom Positioning 

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

### GF Flutter Toast Custom Properties

GFToast can be customized for a better look and feel. Here are the properties:

| Name  | Description |
| :--- | :--- |
| **child** | **child** of type \[Widget\] which is an alternative to **text**. **text** will get priority over **child** |
| **backgroundColor** | color of type \[GFColor\] or \[Color\] to change the backgroundColor of toast |
| **textStyle** | textStyle of type \[textStyle\] applicable to **text** only and not for **child** |
| **width** | to control the width of the toast |
| **type** | type of \[GFToastType\]  _ie_, `rounded` , `fullWidth` and defaults to `basic` |
| **autoDismiss** | takes **bool** values to automatically hide the toast, defaults to `true` |
| **animationDuration** | duration of the fade in and out animation when **autoDismiss** is `true` |
| **duration** | duration called on how much delay the toast should be visible |
| **alignment** | to align the text inside the toast _ie,_ `left`, `center`, `end` |

