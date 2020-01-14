---
description: >-
  GFTile represents a single row that typically contains some text as title,
  subtitle,  icons as trailing and additional text as description
---

# GF Tile

## Usage

The simple GFTile code is as show below

```dart
GFListTile(
  title: Text('Title'),
  subTitle: Text('Lorem ipsum dolor sit amet, consectetur adipiscing'),
  icon: Icon(Icons.favorite)
),
```

### With Avatar

```dart
GFListTile(
  avatar:GFAvatar(),
  title: Text('Title'),
  subTitle: Text('Lorem ipsum dolor sit amet, consectetur adipiscing'),
  icon: Icon(Icons.favorite)
),
```

### Custom Properties

|  |  |
| :--- | :--- |
| **color** | defines the backgroundColor  |
| **description** | brief text to display  |
| **showDivider** | hide or show the divider , defaults to `true` |
| **padding** | defines the tile's outer container padding |
| **dividerHeight** | the height of the divider |
| **dividerThickness** | the thickness of the divider |
| **dividerColor** | the color of the divider |
| **dividerIndent** | the amount of space to the leading edge of the divider |
| **dividerEndIndent** | the amount of space to the trailing edge of the divider |

