---
sidebarDepth: 2
description: >-
  GFTypography defines the different sizes of the texts in the application
  varying from Type 1 to Type 6.
---

# GF Typography

![GF Typography](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Typography_WU9Jso1UwI.png)

**Flutter Typography** is the art of arranging letters according to the need in order to make a clean styling of texts and words.

## GFTypography

**GFTypography** is a **Flutter Typograpphy** that arranges the texts in a clean pattern with font weight, font size in order to give a stylish and smooth effect to the words.

The simple **GFTypography** code is as shown below

```dart
import 'package:getwidget/getwidget.dart';

GFTypography(
  text: 'GF Header Typo1',
),
```

### GFTypography Size

**GFTypograhy** comes in different sizes that vary from **Typo1** to **Typo6. The below** code shows **Typo1** example.

```dart
import 'package:getwidget/getwidget.dart';

GFTypography(
  text: 'GF Header Typo1',
  type: GFTypographyType.typo1,
),
```

### GFTypography With Icon

GFTypography comes with different typo and it can be used with any kind of **icon**. The usual usage can be a **GFAvatar** to show the image and the name as shown in the below example.

![GF Typography with Icon](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/with_icon_3x_f-2jWZF_2.png)

```dart
import 'package:getwidget/getwidget.dart';

 GFTypography(
   text: 'GF Header Typo1',
   type: GFTypographyType.typo1,
   icon: Icon(Icons.send),
 ),
```

### GFTypgraphy With BackgroundImage

**GFTypography** can have a **background image** in it and the **text or icon with the text** on it. The background image gives a more specific feature to GFTypography. The below code shows the **GFTypography** on **BackgroundImage**.

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

### GFTypography Custom Properties

The look and feel can be customized using **GFTypography** properties.

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

