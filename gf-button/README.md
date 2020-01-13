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
$ GFButton(
    onPressed: (){},
    child: Text("primary"),
),
```

GF Buttons can be styled with several attributes to look a specific way. Each and every attribute is described below.

## Properties 

GF Buttons can be styled with several attributes to look a specific way. Each and every attribute is described below.

### Color 

| \*\*\*\* |  |
| :--- | :--- |
| **Description** | The color to use from application's color pallete |
| **Attribute** | color |
| **Type** | GFColor |
| **Default** | GFColor.primary |

## Disabled Button:

Default GFButton onPressed will be null, that gives Disabled button.

```dart
$ GFButton(
    onPressed: null,
    child: Text("primary"),
),
```



