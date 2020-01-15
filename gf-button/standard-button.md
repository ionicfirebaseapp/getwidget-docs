---
description: >-
  Flutter Standard Button looks like a solid button with slightly rounded
  corners. GF Button has all the variants like an outline, Transparent, Disable,
  and Block button.
---

# Standard Button

![](https://ik.imagekit.io/ionicfirebaseapp/docs/buttons/Standard_buttons_-_solid_uZzksC-oh.png)

![](../.gitbook/assets/standard-buttons-solid-2x.png)

![](../.gitbook/assets/standard-buttons-solid-2x-1.png)

Default button **shape** set to `GFButtonShape.standard` so that we will able to get standard shaped button with solid background color with slightly rounded corners.

## Solid Button

By default, button **type** set to `GFType.solid` so, we able to get buttons have a solid background color with slightly rounded corners.

The callback that is called when the button is tapped. By adding callback to **onPressed** enables the button.

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
    onPressed: (){},
    text: "primary",
    type: GFType.transparent,
 ),
```

### Block Button

Block button specify how wide the button should be. By setting **blockButton** state `true`, it will change the button to a full-width block with rounded corners. Default **blockButton** set to `false`.

```dart
GFButton(
    onPressed: (){},
    text: "primary",
    blockButton: true,
 ),
```

### Full Width Button

Full Width button specify how wide the button should be. By setting **fullWidthButton** state `true`, it will change the button to a Full-width button with square corners and no border on the left or right. Default **fullWidthButton** set to `false`.

```dart
GFButton(
    onPressed: (){},
    text: "primary",
    fullWidthButton: true,
 ),
```

### Button Size

Button size can be varied using **size** property, which specifies the size of the button. Default button size set to `GFSize.medium`.

```dart
GFButton(
    onPressed: (){},
    text: "primary",
    size: GFSize.small,
 ),
```

## Outline Button

Outline Button describes as the Button with a transparent background and a visible border. This button can be easily get in GFButton by adding **type** as **`GFType.outline`**. 

```dart
GFButton(
    onPressed: (){},
    text: "primary",
    type: GFType.outline,
 ),
```

Above mentioned all the properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works fine in **Outline Button** also.

## Outline2x Button

Outline2x Button describes as the Button with a transparent background and a visible border with 2x border-width. This button can be easily get in GFButton by adding **type** as **`GFType.outline2x`**. 

```dart
GFButton(
    onPressed: (){},
    text: "primary",
    type: GFType.outline2x,
 ),
```

Above mentioned all the properties like `size`, `blockButton`, `fullWidthButton`, enabling and disabling of button works fine in **Outline2x Button** also.

