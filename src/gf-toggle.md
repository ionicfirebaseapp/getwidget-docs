---
description: >-
  GF Flutter Toggle is a custom toggle widget like Square, Android, IOS, and
  Custom widget with many custom properties to customize as required.
---

# GF Flutter Toggle

![GF Flutter Toggle Widget](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Toggles_hndeJnCfxa.png)

The **Flutter toggle switch** is **ON/OFF switch** or **ON/OFF Button** that allows the user to toggle the **switch** between **ON** or **OFF** states.

## GF Flutter Toggle and its Usage:

**GFToggle** **switch** is a **Flutter Switch Toggle** that permits the user to use this toggle to mark check when it is in **ON** state and mark unchecked when it is in **OFF** state. The **toggle switch** basically switches from ON to OFF state and vice-versa. Let us look at a simple example of GFToggle in the below code.

```dart
import 'package:getwidget/getwidget.dart';

 GFToggle(
    onChanged: (val){},
    value: true,
 )
```

## GF Flutter Switch Toggle

**GFToggle switch** can be divided into four types ie, `android`, `ios`, `square` and `custom`. The default toggle is an **android toggle.**

## Flutter IOS Toggle

**Flutter IOS Toggle** switch has a circular track and a circular thumb as shown in the below image.

![Flutter IOS Toggle](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/ios_bW24\_m8Gb_wJs\_-EKey0.webp)

The below example code shows a simple ios toggle

```dart
import 'package:getwidget/getwidget.dart';

 GFToggle(
    onChanged: (val){},
    value: true,
    type: GFToggleType.ios,
 )
```

## Flutter Square Toggle

**The Square Toggle** switch has a square-shaped track and a square-shaped thumb as shown in the below image.

![Flutter Square Toggle](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square_kQf7GGmmw_rysXqcWnd.png)

The below code shows a simple **square toggle**

```dart
import 'package:getwidget/getwidget.dart';

 GFToggle(
    onChanged: (val){},
    value: true,
    type: GFToggleType.square,
 )
```

## Flutter Custom Toggle

The **custom** **toggle** can be used to add the text to the on/off state. The default text is **ON** and **OFF** Below is a simple code for custom toggle

![Flutter Custom Toggle](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/custom-2\_IukUJZTss_ILY-qwiUmD.png)

The below example code shows a simple custom toggle switch

```dart
import 'package:getwidget/getwidget.dart';

GFToggle(
   onChanged: null,
   value: true,
   type: GFToggleType.custom,
 ),
```

## GFToggle Custom Properties

The look and feel of **GFToggle** can be customized using the below properties

| Name                   | Description                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **enabledText**        | type of \[String] used to add custom text i.e, ON, ENABLE                                                              |
| **disabledText**       | type of \[String] used to add custom text i.e, OFF, DISABLE                                                            |
| **enabledTextStyle**   | type of \[TextStyle] used to define the style properties of enabled text                                               |
| **disabledTextStyle**  | type of \[TextStyle] used to define the style properties of disabled text                                              |
| **enabledThumbColor**  | color used for the active thumb color                                                                                  |
| **disabledThumbColor** | color used for the disabled thumb color                                                                                |
| **enabledTrackColor**  | color used for the active track color                                                                                  |
| **disabledTrackColor** | color used for the disabled track color                                                                                |
| **boxShape**           | type of \[BoxShape] ie , `circle`, `rectangle` used to change the shape of the thumb, default shape is `circle`        |
| **borderRadius**       | borderRadius should be given zero for a **ios** toggle to make it a **square** toggle with **boxshape** as `rectangle` |
| **duration**           | animation duration called when the switch animates during the specific time elapse                                     |
