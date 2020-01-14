---
description: Standard Button looks like a solid button with slightly rounded corners.
---

# Standard Button

### Solid Button

The callback that is called when the button is tapped or otherwise activated. By adding callback to **onPressed** activates the button, that enables the button.

```dart
  GFButton(
    onPressed: (){},
    text: "primary",
  ),
```

### Disabled Button

If this callback and **onPressed** are null, then the button will be disabled. Default GFButton will be disabled because, **onPressed** set to null. 

```dart
GFButton(
    onPressed: null,
    text: "primary",
 ),
```

### Transparent Button

In GFButton by adding **type** **`GFType.transparent`**, we able to get transparent button. Default GFButton **type** will be `GFType.solid`. 

```dart
GFButton(
    onPressed: null,
    text: "primary",
    type: GFType.transparent,
 ),
```

### Block Button

Block button specify how wide the button should be. By setting **blockButton** state `true`, it will change the button to a full-width block with rounded corners. Default **blockButton** set to `false`.

```dart
GFButton(
    onPressed: null,
    text: "primary",
    type: GFType.solid,
    blockButton: true,
 ),
```

### Full Width Button

Full Width button specify how wide the button should be. By setting **fullWidthButton** state `true`, it will change the button to a Full-width button with square corners and no border on the left or right. Default **fullWidthButton** set to `false`.

```dart
GFButton(
    onPressed: null,
    text: "primary",
    type: GFType.solid,
    fullWidthButton: true,
 ),
```

### Button Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

```dart
GFButton(
    onPressed: null,
    text: "primary",
    size: GFSize.small,
 ),
```

