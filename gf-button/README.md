---
description: >-
  GF Flutter button comes with a 100+ pre-built button with endless color
  combinations that you can use straightway in your project.
---

# GF Button

GF Button provides a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both.

## Usage

We can get simple standard button using below code.

```dart
GFButton(
    onPressed: (){},
    text:"primary"
),
```

GF Buttons can be styled with several attributes to look a specific way. Each and every attribute is described below.

## Properties 

GF Buttons can be styled with several attributes to look a specific way. Each and every attribute is described below.

### Color 

GFColor is used to change the background

| \*\*\*\* |  |
| :--- | :--- |
| **Description** | The color to use from application's color palette  |
| **Attribute** | color |
| **Type** | GFColor |
| **Default** | GFColor.primary  \(`primary`\) |

### Size

|  |  |
| :--- | :--- |
| **Description** |     The Button Size                                         |
| **Attribute** |     size |
| **Type** |  `GFSize.large,  GFSize.medium, GfSize.small` |
| **Default** |  `GFSize.medium` |

### Shape

|  |  |
| :--- | :--- |
| **Description** |              The Button Shape                                               |
| **Attribute** |              shape |
| **Type** |       `GFButtonShape.standard, GFButtonShape.square, GFButtonShape.pills` |
| **Default** |       `GFButtonShape.standard` |

### Disabled Button:

Default GFButton onPressed will be null, that gives Disabled button.

```dart
 GFButton(
    onPressed: null,
    text:"primary"
),
```



