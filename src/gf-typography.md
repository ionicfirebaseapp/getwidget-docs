---
sidebarDepth: 2
description: >-
  GFTypography defines the different sizes of the texts in the application
  varying from Type 1 to Type 6.
---

# GF Typography

![Typography](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Typography_2x_7rUbGrN2G.png)



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

![Typography with icon](./assets/with-icon-2x.png)

```dart
import 'package:getwidget/getwidget.dart';
 
 GFTypography(
   text: 'GF Header Typo1',
   type: GFTypographyType.typo1,
   icon: Icon(Icons.send),
 ),
```

### With BackgroundImage

![Typography with background image](./assets/with-image-2x.png)

```dart
import 'package:getwidget/getwidget.dart';

GFTypography(
  text: 'GF Header Typo1',
  type: GFTypographyType.typo1,
  icon: Icon(Icons.send),
  backgroundImage: NetworkImage(''),
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

