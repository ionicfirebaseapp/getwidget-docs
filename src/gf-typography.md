---
sidebarDepth: 2
description: >-
  GFTypography defines the different sizes of the texts in the application
  varying from Type 1 to Type 6.
---

# GF Typography

![GF Typography](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Typography_WU9Jso1UwI.png)

## Typography Info

### Usage

The simple Typography code is as shown below

```dart
import 'package:getwidget/getwidget.dart';

GFTypography(
  text: 'GF Header Typo1',
),
```

### Size

The different sizes of Typography differs from **Typo1** to **Typo6**

```dart
import 'package:getwidget/getwidget.dart';

GFTypography(
  text: 'GF Header Typo1',
  type: GFTypographyType.typo1,
),
```

### With Icon

![GF Typography with Icon](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/with_icon_3x_f-2jWZF_2.png)

```dart
import 'package:getwidget/getwidget.dart';

 GFTypography(
   text: 'GF Header Typo1',
   type: GFTypographyType.typo1,
   icon: Icon(Icons.send),
 ),
```

### With BackgroundImage

![GF Typography with Background Image](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/with_image_3x_EMzRHJ-fi.png)

```dart
import 'package:getwidget/getwidget.dart';

GFTypography(
  text: 'GF Header Typo1',
  type: GFTypographyType.typo1,
  icon: Icon(Icons.send),
  backgroundImage: AssetImage('asset image here'),
),
```

### Custom Properties

|  |  |
| :--- | :--- |
| **child** | child of type Widget alternative to text Key |
| **dividerColor** | defines the color of the divider |
| **textColor** | defines the color of the text |
| **dividerBorderRadius** | the border radius of the divider |
| **dividerAlignment** | the alignment of the divider to `start`, `center` or `end` |
| **showDivider** | bool value to hide or show divider , defaults to true |
| **dividerWidth** | the width of the divider |
| **backgroundImagecolorFilter** | colorFilter of background image only when background image is available |

