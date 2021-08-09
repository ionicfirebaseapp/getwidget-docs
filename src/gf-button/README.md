---
sidebarDepth: 2
description: >-
  GF Button is Flutter Button Widgets that come with a 100+ pre-built button
  with endless color combinations that you can use straightway in your project.
---

# Flutter Button Widget

![GF Flutter Button Widget ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Gw_buttons_E5z1JheN4.png)

**GF Button** is a clickable element, that can be used for click events like **click functions, page routing**, **social authentications**, **form submissions,** or anywhere that needs simple, standard button functionality. **Flutter Buttons** have a broad area and can be used with any other widgets as well.

### How to create GF Button in Flutter? 

The **Flutter Buttons** are the very simple yet most commonly used component in almost all of the pages. The simple code of a **GFButton** looks like the following:

```dart
GFButton(
    onPressed: (){},
    text:"primary"
),
```

### Flutter Disabled Button

The **Flutter Disable Button** is used to get a disabled button in the application. The disabled button will have a `null` value on the **onPressed** parameter. The simple code of **GFDisabled Button** is as follows:

```dart
GFButton(                          
    onPressed: null,             
    text:"primary"
),
```

### Flutter GF Button Properties

**GF Buttons** are a very widely used component in any application. Hence the **GFButtons** are highly customizable and have a wide range of properties that gives a better look and feel for any application. The **GFButton's properties** are described below:

### FLUTER RAISED/STANDARD BUTTON 

{% embed url="https://docs.getwidget.dev/gf-button/standard-button/" %}

### FLUTTER ROUNDED BUTTON 

{% embed url="https://docs.getwidget.dev/gf-button/pills-button/" %}

### FLUTTER ICON BUTTON 

{% embed url="https://docs.getwidget.dev/gf-button/icon-button/" %}



#### How to Set Button Color in flutter? 

**GFColors** are used to change the background of the button.

| Name | Description |
| :--- | :--- |
| **Description** | The color to use from the application color palette |
| **Attribute** | color |
| **Type** | `GFColors` |
| **Default** | GFColors.PRIMARY |

#### How to Set Button Size in Flutter?

**GFSize** can be used to determine the size of the buttons as follows:

| Name | Description |
| :--- | :--- |
| **Description** | The GFButton Size |
| **Attribute** | size |
| **Type** | `GFSize.LARGE,  GFSize.MEDIUM, GFSize.SMALL` |
| **Default** | `GFSize.MEDIUM` |

#### How to Change Button Shape in Flutter?

The **shape of the button** like **standard**, **square**,  or **pills** can be determined by the shape property.

| Name | Description |
| :--- | :--- |
| **Description** | The GFButton Shape |
| **Attribute** | shape |
| **Type** | `GFButtonShape.standard, GFButtonShape.square, GFButtonShape.pills` |
| **Default** | `GFButtonShape.standard`  |

### GF Flutter Button Type Properties

The **button type** of the button like **solid**, **outline** can be determined by the following properties:

| Name | Description |
| :--- | :--- |
| **Description** | The GFButton Type |
| **Attribute** | type |
| **Type** | `GFButtonType.solid, GFButtonType.outline, GFButtonType.outline2x, GFButtonType.transparent` |
| **Default** | `GFButtonType.solid` |

#### How to change Button Position in Flutter?

The **GFButton** can be placed in the `start` or at the `end` of the **position** using the position property:

| Name | Description |
| :--- | :--- |
| **Description** | Position of icon in the button. |
| **Attribute** | position |
| **Type** | `GFPosition.start, GFPosition.end` |
| **Default** | `GFPosition.start` |

### GFButton Custom Properties

| Name | Description |
| :--- | :--- |
| **onPressed** | callback i.e, called when the button is tapped |
| **onLongPressed** | callback i.e, called when the button is long-pressed |
| **text** | describe the button's label. text will be a priority over child |
| **icon** | describe button's label with icon |
| **child** | child of type Widget alternative to text |
| **textColor** | the color to use for this button's text when the button is enabled |
| **textStyle** | defines the styling of the text |
| **disabledColor** | the fillcolor of  the button when the button is disabled |
| **disabledTextColor** | the color to use for this button's text when the button is disabled |
| **borderSide** | defines the border side |
| **bordershape** | defines the shape of the border |
| **buttonBoxShadow** | if `true,` default boxShadow appears around the button. |
| **boxShadow** | defines the boxShadow |
| **fullWidthButton** | if `true,` defines the full width of the button. |
| **blockButton** | if `true`, defines the block button. |
| **padding** | defines internal padding of the button |
| **focusColor** | fillColor of the button when it has the input focused |
| **hoverColor** | fillColor of the button when the pointer is hovered over it |
| **splashColor** | indicates that the button has been touched |
| **highlightColor** | indicates that the button is actively being pressed |

