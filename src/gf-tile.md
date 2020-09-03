---
sidebarDepth: 2
description: >-
  GFTile represents a single row that typically contains some text as title,
  subtitle,  icons as trailing and additional text as description
---

# GF Tile

![Tile](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Tiles_2x_NFyiWgtQc.png)

## Usage

The simple GFTile code is as show below

```dart
import 'package:getwidget/getwidget.dart';

GFListTile(
  titleText:'Title',
  subtitleText:'Lorem ipsum dolor sit amet, consectetur adipiscing',
  icon: Icon(Icons.favorite)
),
```

### With Avatar

```dart
import 'package:getwidget/getwidget.dart';

GFListTile(
  avatar:GFAvatar(),
  titleText:'Title',
  subtitleText:'Lorem ipsum dolor sit amet, consectetur adipiscing',
  icon: Icon(Icons.favorite)
),
```

### Custom Properties

|  |  |
| :--- | :--- |
| **color** | defines the backgroundColor |
| **description** | brief text to display |
| **padding** | defines the tile's padding |
| **margin** | defines the tile's margin |



