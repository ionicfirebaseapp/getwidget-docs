---
description: >-
  GF Flutter button comes with a 100+ pre-built button with endless color
  combinations that you can use straightway in your project.
---

# GF Button

![Buttons](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Gf_buttons_2x_aotfII9ZS5.png)



GF Button is a clickable element, that can be used for click events like click functions, page routing, social authentications, form submissions or anywhere that needs simple, standard button functionality. Buttons has a broad area to be used  and can be used with any other widgets as well.

## Usage

We can get simple standard button using below code. 

```dart
GFButton(
    onPressed: (){},
    text:"primary"
),
```

### Disabled Button:

Default GFButton's  onPressed will be null, that gives Disabled button.

```dart
GFButton(                          
    onPressed: null,             
    text:"primary"
),
```

GF Buttons can be styled with several attributes to look a specific way. Each and every attribute is described below.

## Properties 

GF Buttons can be styled with several attributes to look a specific way. Each and every attribute is described below.

### Color 

GFColor is used to change the background of the button.

|  |  |
| :--- | :--- |
| **Description** | The color to use from application's color palette                                |
| **Attribute** |  color |
| **Type** | `GFColor` |
| **Default** | `GFColor.primary` |

### Size

|  |  |
| :--- | :--- |
| **Description**  | The GFButton Size                                                                                           |
| **Attribute** |  size |
| **Type** | `GFSize.large,  GFSize.medium, GfSize.small` |
| **Default** | `GFSize.medium` |

### Shape

|  |  |
| :--- | :--- |
| **Description**     |  The GFButton Shape                                               |
| **Attribute** |  shape |
| **Type**               | `GFButtonShape.standard, GFButtonShape.square, GFButtonShape.pills` |
| **Default** | `GFButtonShape.standard` |

### Type

|  |  |
| :--- | :--- |
| **Description**     |   The GFButton Type                                |
| **Attribute** |   type |
| **Type** | `GFType.solid, GFType.outline, GFType.outline2x, GFType.transparent` |
| **Default** | `GFType.solid` |

### Position

|  |  |
| :--- | :--- |
| **Description** |  The GFButton Position                                                                    |
| **Attribute** |  position |
| **Type** | `GFPosition.start, GFPosition.end` |
| **Default** | `GFPosition.start` |

### Custom Properties

| Name | Description |
| :--- | :--- |
| **onPressed**   | callback i.e, called when the button is tapped |
| **onLongPressed** | callback i.e, called when the button is long-pressed |
| **text** |  describe button's label. text will be priority over child |
| **icon** |  describe button's label with icon |
| **child** | child of type Widget alternative to text |
| **textcolor** | the color to use for this button's text when the button is enabled |
| **textStyle** | defines the styling of the text |
| **disabledColor** | the fillcolor of  the button when the button is disabled |
| **disabledTextColor** | the color to use for this button's text when the button is disabled |
| **borderSide** | defines the border side  |
| **bordershape** | defines the shape of the border |
| **buttonBoxShadow** | if `true,` default boxShadow appears around button. |
| **boxShadow** | defines the boxShadow |
| **fullWidthButton** | if `true,` defines the full width of the button.  |
| **blockButton** | if `true`, defines the block button.  |
| **padding** | defines internal padding of the button |
| **focusColor** | fillColor of the button when it has the input focused |
| **hoverColor** | fillColor of the button when the pointer is hovered over it |
| **splashColor** | indicates that the button has been touched |
| **highlightColor** | indicates that the button is actively being pressed |

