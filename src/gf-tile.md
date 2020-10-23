---
sidebarDepth: 2
description: >-
  GFTile represents a single row that typically contains some text as title,
  subtitle,  icons as trailing and additional text as description
---

# GF ListTile

![GW ListTile](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Tiles_ceMiNxKGK.png)

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
| **color** | The GFListTile's background color. Can be given \[Color\] or \[GFColors\] |
| **description** | The description to display inside the \[GFListTile\]. see \[Text\] |
| **padding** | defines the padding of GFListTile |
| **margin** | defines the margin of GFListTile |
| **titleText** | type of \[String\] used to pass text, alternative to title property and gets higher priority than title |
| **subtitleText** | type of \[String\] used to pass text, alternative to subtitle property and gets higher priority than subtitle |
| **avatar** | type of \[Widget\] or \[GFAvatar\] used to create rounded user profile |
| **title** | The title to display inside the \[GFListTile\]. see \[Text\] |
| **subtitle** | The subtitle to display inside the \[GFListTile\]. see \[Text\] |
| **icon** | The icon to display inside the \[GFListTile\]. see \[Icon\] |
| **enabled** | Whether this list tile is interactive. If false, this list tile is styled with the disabled color from the current \[Theme\] and the \[onTap\] and \[onLongPress\] callbacks are inoperative. |
| **onTap** | Called when the user taps this list tile. Inoperative if \[enabled\] is false. |
| **onLongPress** | Called when the user long-presses on this list tile. Inoperative if \[enabled\] is false. |
| **selected** | If this tile is also \[enabled\] then icons and text are rendered with the same color. By default the selected color is the theme's primary color. The selected color can be overridden with a \[ListTileTheme\]. |
| **focusColor** | The color for the tile's \[Material\] when it has the input focus. |
| **hoverColor** | The color for the tile's \[Material\] when a pointer is hovering over it. |
| **focusNode** | Defines the keyboard focus for this widget. |
| **autofocus** | On true state it should focus itself if nothing else is already focused. Defaults to false |

