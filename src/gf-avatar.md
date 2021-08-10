---
sidebarDepth: 2
description: >-
  Flutter Avatar is a Widget that typically represents the user's profile image.
  It comes in different shapes.
---

# GF Avatar

![GW Avatars Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Avatars_1QfiwJn9kNW.png)

**GFAvatar** is a **Flutter Avatar** which is an image basically used to display the user picture in the profile section. **GFAvatar** has different shapes wherein the popular is a **Circular Avatar.**

## GF Circular Avatar

**The Circular Avatar** has a **circle shape** image**. GFAvatar** comes with different shapes, in which one of the default shapes is a **circle**. To place the image inside the **GFAvatar**,  the image should be given in`backgroundImage`property. The below code shows a simple **Circular Avatar.**

![Circular Avatar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/circular-avatars-2x_YEAePfrqD_-gE8M4y47.webp)

```dart
import 'package:getwidget/getwidget.dart';

GFAvatar(
  backgroundImage:NetworkImage(AvatarUrl),
)
```

## GF Standard Avatar

**GFAvatar** has another type of avatar called **Standard Avatar**. It is a Square shape avatar with slightly rounded corners as shown in the below image. The code below gives a Standard Avatar.

![Standard Avatar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/slightly-rounded-corners-2x_VCB3GCS2h_fIj6SKS1L.webp)

```dart
import 'package:getwidget/getwidget.dart';

GFAvatar(
  backgroundImage:NetworkImage(AvatarUrl),
  shape: GFAvatarShape.standard
)
```

## GF Square Avatar

**GFAvatar** has another type of avatar called **Square Avatar**. It is a Square shape avatar with no rounded corners as shown in the below image. The code below gives a Standard Avatar.

![Square Avatar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-2x_Zs-9r00cm_xeDrjlBV7.webp)

```dart
import 'package:getwidget/getwidget.dart';

GFAvatar(
  backgroundImage:NetworkImage(AvatarUrl),
  shape: GFAvatarShape.square
)
```

## GFAvatar Custom Properties:

The look and feel of **GFAvatar** can be customized using the following properties:

|  |  |
| :--- | :--- |
| **child** | type of \[Widget\], which can have text, icon,  etc |
| **backgroundColor** | GFColor or Color to fill the background of the avatar |
| **foregroundColor** | GFColor or Color to change the textColor inside the avatar |
| **radius** | size of the avatar |
| **minRadius** | minimum size of the avatar |
| **maxRadius** | maximum size of the avatar |
| **size** | size of the avatar i.e `GFSize.large, GFSize.medium, GFSize.small` |
| **shape** | shape of the avatar i.e, `GFAvatarShape.standard, GFAvatarShape.circle, GFAvatarShape.square` |
| **borderRadius** | extra radius to avatar shapes, not applicable to the circular avatar |

