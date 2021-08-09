---
sidebarDepth: 2
description: >-
  GF Button is Flutter Button Widgets that come with a 100+ pre-built button
  with endless color combinations that you can use straightway in your project.
---

# Flutter Button Widget

![GF Flutter Button Widget ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Gw_buttons_E5z1JheN4.png)

**GF Button** is a **Flutter Button** that is a clickable element, that can be used for click events like **click functions, page routing**, **social authentications**, **form submissions,** or anywhere that needs simple, standard button functionality. **Flutter Buttons** have a broad area and can be used with any other widgets as well.

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

### FLUTTER ELEVATED/STANDARD BUTTON 

**Flutter Elevated Button** is a **button in flutter** which is the most commonly used **flutter button** which upon clicking, elevates or triggers to show the button action. The more customized properties can be seen in **GF Elevated Button** [**https://docs.getwidget.dev/gf-button/standard-button/**](https://docs.getwidget.dev/gf-button/standard-button/)\*\*\*\*

### FLUTTER ROUNDED BUTTON 

**Flutter Rounded Button** or **Flutter Pills Button** is a **button in flutter** wherein the corners of the buttons are circular in shape. In other words, it is a button with border-radius in it. For more customizable properties head to **Flutter Pills/Rounded Button** [https://docs.getwidget.dev/gf-button/pills-button/](https://docs.getwidget.dev/gf-button/pills-button/)

### FLUTTER ICON BUTTON 

**Flutter Icon Button** or **Icon Button Flutter** is a **flutter button** where the button has icons on them. It can even have a **text** which is a **button with text** or **text with an** **icon** which is a **text icon button.** To know more about  **Icon Button** head to **the Flutter Icon Button** section [https://docs.getwidget.dev/gf-button/icon-button/](https://docs.getwidget.dev/gf-button/icon-button/)

### **FLUTTER TOGGLE BUTTON**

**Flutter Toggle Button** or **Flutter Toggle Switch** is ****a **switch button** that toggles between two states and the two states are often **ON/OFF** state**.** For more information head to **Flutter Toggle Switch Button** [**https://docs.getwidget.dev/gf-toggle/**](https://docs.getwidget.dev/gf-toggle/)\*\*\*\*

### FLUTTER CIRCULAR BUTTON

**Flutter circular button** or **Flutter Pills/Rounded Button** is a type of **Flutter Button** that has circular corners in them. For more examples head to [https://docs.getwidget.dev/gf-button/pills-button/](https://docs.getwidget.dev/gf-button/pills-button/)

#### How to Set Button Color in flutter? 

**Button** **Colors** can be the background fill colors for solid buttons or the color can be for the border to the outline buttons.

**GFColors** are used to change the background of the button.

| Name | Description |
| :--- | :--- |
| **Description** | The color to use from the application color palette |
| **Attribute** | color |
| **Type** | `GFColors` |
| **Default** | GFColors.PRIMARY |

#### How to Set Button Size in Flutter?

**Flutter** **Button** can be of any size and can be changed according to the need.

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

**Flutter Buttons** can be customised using **GFButton** Custom properties which are listed below:

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

