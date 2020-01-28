---
description: Tapping a GFAccordian expands or collapses the view of its children.
---

# GF Accordian

### Usage

The simple code is as shown below

```dart
 import 'package:getflutter/getflutter.dart';
 
 GFAccordian(
    text: 'GF Accordian',
    description: Text('GetFlutter is an open source library that comes with pre-build 1000+ UI components.'
    )
)
```



### Accordian with trailing Text

The trailing part takes any widget like text, icon etc. The below code shows the accordian with the text.

```dart
import 'package:getflutter/getflutter.dart';
 
 GFAccordian(
     text: 'GF Accordian',
     description: Text('GetFlutter is an open source library that comes with pre-build 1000+ UI components.'),
     collapsedIcon: Text('Show'),
     expandedIcon: Text('Hide')
),
```

### Accordian with Icon

```dart
import 'package:getflutter/getflutter.dart';

GFAccordian(
    text: 'GF Accordian',
    description: Text('GetFlutter is an open source library that comes with pre-build 1000+ UI components.'),
    collapsedIcon: Icon(Icons.add),
    expandedIcon: Icon(Icons.minimize)
),
```

### Custom Properties

|  |  |
| :--- | :--- |
| **child** | **child** of type \[Widget\] which is alternative to **text**. **text** will get priority over **child** |
| **description** | shows its **children** when it is expanded |
| **titlebackgroundColor** | changes the **backgroundColor** of the **Accordian** title |
| **collapsedIcon** | type of \[Widget\] when the **Accordian** is collpased |
| **expandedIcon** | type of \[Widget\] when the **Accordian** is expanded |
| **textStyle** | textStyle of type \[textStyle\] applicable to **text** only and not for **child** |
| **titlePadding** | padding used to set for the **Accordian** title |
| **descriptionPadding** | padding used to set for the **Accordian** description |
| **descriptionbackgroundColor** | changes the **backgroundColor** of the **Accordian** description |
| **margin** | used to set the margin of the **Accordian** |

