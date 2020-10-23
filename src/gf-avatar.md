---
sidebarDepth: 2
description: >-
  GFAvatar is a Flutter Avatar Widget that typically represents the user's
  profile image. It comes with different shapes.
---

# GF Avatar

![GW Avatars Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Avatars_1QfiwJn9kNW.png)

## Circular Avatar

![Circular Avatar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/circular-avatars-2x_YEAePfrqD_-gE8M4y47.webp)

GFAvatar comes with different shapes , in which one of the default shape is circle. To place the image inside the avatar, image should be given in `backgroundImage` property.

```dart
import 'package:getwidget/getwidget.dart';

GFAvatar(
  backgroundImage:NetworkImage(AvatarUrl);
)
```

## Standard Avatar

![Standard Avatar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/slightly-rounded-corners-2x_VCB3GCS2h_fIj6SKS1L.webp)

Standard GFAvatar is a avatar shape which has a slightly rounded corners.

```dart
import 'package:getwidget/getwidget.dart';

GFAvatar(
  backgroundImage:NetworkImage(AvatarUrl);
  shape: GFAvatarShape.standard
)
```

## Square Avatar

![Square Avatar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square-2x_Zs-9r00cm_xeDrjlBV7.webp)

Square GFAvatar is a avatar shape which represents a square

```dart
import 'package:getwidget/getwidget.dart';

GFAvatar(
  backgroundImage:NetworkImage(AvatarUrl);
  shape: GFAvatarShape.square
)
```

## Custom Properties

|  |  |
| :--- | :--- |
| **child** | type of \[Widget\], which can have text , icon etc |
| **backgroundColor** | GFColor or Color to fill the background of avatar |
| **foregroundColor** | GFColor or Color to change the textColor inside the avatar |
| **radius** | size of the avatar |
| **minRadius** | minimum size of the avatar |
| **maxRadius** | maximun size of the avatar |
| **size** | size of the avatar i.e `GFSize.large, GFSize.medium, GFSize.small` |
| **shape** | shape of the avatar i.e, `GFAvatarShape.standard, GFAvatarShape.circle, GFAvatarShape.square` |
| **borderRadius** | extra radius to avatar shapes, not applicable to circular avatar |

