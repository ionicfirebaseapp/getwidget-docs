---
description: >-
  GFAvatar typically represents the user's profile image. It comes with
  different shapes
---

# GF Avatar

### Circular Avatar

GFAvatar comes with different shapes , in which one of the default shape is circle. To place the image inside the avatar, image should be given in `backgroundImage` property.

```dart
GFAvatar(
backgroundImage:NetworkImage(AvatarUrl);
)
```

### Standard Avatar

Standard GFAvatar is a avatar shape which has a slightly rounded corners.

```dart
GFAvatar(
 backgroundImage:NetworkImage(AvatarUrl);
 shape: GFAvatarShape.standard
)
```

### Square Avatar

Square GFAvatar is a avatar shape which represents a square

```dart
GFAvatar(
 backgroundImage:NetworkImage(AvatarUrl);
 shape: GFAvatarShape.square
)
```

### Custom Properties

|  |  |
| :--- | :--- |
| **child** | type of \[widget\], which can have text  |
| **backgroundColor** | GFColor or Color to fill the background of avatar |
| **foregroundColor** | GFColor or Color to change the textColor inside the avatar |
| **radius** | size of the avatar |
| **minRadius** | minimum size of the avatar |
| **maxRadius**  | maximun size of the avatar |
| **size** | size of the avatar i.e `GFSize.large, GFSize.medium, GFSize.small` |
| **shape** | shape of the avatar i.e, `GFAvatarShape.standard, GFAvatarShape.circle, GFAvatarShape.square` |
| **borderRadius** | extra radius to avatar shapes, not applicable to circular avatar |

