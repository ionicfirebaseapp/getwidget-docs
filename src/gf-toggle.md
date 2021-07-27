---
sidebarDepth: 2
description: GFToggle is used to toggle the on/off state of a single setting.
---

# GF Toggle

![GW Toggle Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Toggles_hndeJnCfxa.png)

## Toggle Info

### Usage

The simple toggle code is as shown below.

```dart
import 'package:getwidget/getwidget.dart';

 GFToggle(
    onChanged: (val){},
    value: true,
 )
```

### Types of Toggle

There are four types ie, `android`, `ios`, `square` and `custom`. The default toggle is a android toggle

### IOS Toggle

![IOS Toggle](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/ios_bW24_m8Gb_wJs_-EKey0.webp)

The below code shows a simple ios toggle

```dart
import 'package:getwidget/getwidget.dart';

 GFToggle(
    onChanged: (val){},
    value: true,
    type: GFToggleType.ios,
 )
```

### Square Toggle

![Square Toggle](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/square_kQf7GGmmw_rysXqcWnd.png)

The below code shows a simple square toggle

```dart
import 'package:getwidget/getwidget.dart';

 GFToggle(
    onChanged: (val){},
    value: true,
    type: GFToggleType.square,
 )
```

### Custom Toggle

![Custom Toggle](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/custom-2_IukUJZTss_ILY-qwiUmD.png)

The **custom** toggle can be used to add the text to the on/off state . The default text is **ON** and **OFF** Below is a simple code for custom toggle

```dart
import 'package:getwidget/getwidget.dart';

GFToggle(
   onChanged: null,
   value: true,
   type: GFToggleType.custom,
 ),
```

### Custom Properties

|  |  |
| :--- | :--- |
| **enabledText** | type of \[String\] used to add custom text i.e, ON, ENABLE |
| **disabledText** | type of \[String\] used to add custom text i.e, OFF, DISABLE |
| **enabledTextStyle** | type of \[TextStyle\] used to define the style properties of enabled text |
| **disabledTextStyle** | type of \[TextStyle\] used to define the style properties of disabled text |
| **enabledThumbColor** | color used for the active thumb color |
| **disabledThumnbColor** | color used for the disabled thumb color |
| **enabledTrackColor** | color used for the active track color |
| **disabledTrackColor** | color used for the disabled track color |
| **boxShape** | type of \[BoxShape\] ie , `circle`, `rectangle` used to change the shape of the thumb, default shape is `circle` |
| **borderRadius** | borderRadius should be given zero for a **ios** toggle to make it a **square** toggle with **boxshape** as `rectangle` |
| **duration** | animation duration called when the switch animates during the specific time elapse |

