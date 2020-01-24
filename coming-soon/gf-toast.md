---
description: GFToast can be used to display quick warning or error messages.
---

# GF Toast

### Usage

The below code snippet gives a simple GFToast

```dart
import 'package:getflutter/components/toast/gf_toast.dart';
 
GFToast(
  text: 'Paired Succesfully !',
  autoDismiss: false,
),
```

### Toast with Button

```dart
import 'package:getflutter/components/toast/gf_toast.dart';

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

### Auto Dismissable Toast

The bool value `true` should be passed to **autoDismiss** property to make the toast, auto dismissable,

```dart
import 'package:getflutter/components/toast/gf_toast.dart';

GFToast(
  text: 'This item already has the label “travel”',
  autoDismiss: true,
)
```

### Toast with GFFloating Widget

**GFToast** should be wrapped inside the **GFFloating** Widget.The child of the **GFFloatingWidget** takes **GFToast** as its argument and the **body** takes any kind of widgets. The simple code is as shown below. 

```dart
import 'package:getflutter/components/toast/gf_toast.dart';
import 'package:getflutter/components/toast/gf_floating_widget.dart';

body:GFFloatingWidget(
    child:GFToast(
    text: 'This item already has the label “travel”',
  ),
 body:widget.body
)
```

### Positioning of the Toast

Toasts can be positioned accordingly inside the **GFFloating** Widget. The positioning takes two parameters ie, **horizontalPosition** and **verticalPosition**. The usage of these is shown below.

```dart
import 'package:getflutter/components/toast/gf_toast.dart';
import 'package:getflutter/components/toast/gf_floating_widget.dart';

body:GFFloatingWidget(
    horizontalPosition:40.0,
    verticalPosition:20.0,
    child:GFToast(
    text: 'Logged In',
  ),
 body:widget.body
)
```

