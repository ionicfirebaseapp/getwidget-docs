---
sidebarDepth: 2
description: >-
  GF button is Flutter Button Component that comes with a 100+ pre-built button
  with endless color combinations that you can use straightway in your project.
---

# GF Button

![Flutter Buttons Variant](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Gf_buttons_2x_aotfII9ZS5.png)



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

To use of Flutter Disable Button we have set Default GFButton's  onPressed be null, that gives Disabled button.

```dart
GFButton(                          
    onPressed: null,             
    text:"primary"
),
```

## Properties 

GF Buttons can be styled with several attributes to look a specific way. Each and every attribute is described below.

### Color 

GFColors is used to change the background of the button.

|  |  |
| :--- | :--- |
| **Description** | The color to use from application's color palette                                |
| **Attribute** |  color |
| **Type** | `GFColors` |
| **Default** | GFColors.PRIMARY |

### Size

|  |  |
| :--- | :--- |
| **Description**  | The GFButton Size                                                                                           |
| **Attribute** |  size |
| **Type** | `GFSize.LARGE,  GFSize.MEDIUM, GFSize.SMALL` |
| **Default** | `GFSize.MEDIUM` |

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
| **Type** | `GFButtonType.solid, GFButtonType.outline, GFButtonType.outline2x, GFButtonType.transparent` |
| **Default** | `GFButtonType.solid` |

### Position

|  |  |
| :--- | :--- |
| **Description** |  Position of icon in the button.                                                                  |
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
| **textColor** | the color to use for this button's text when the button is enabled |
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

