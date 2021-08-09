---
sidebarDepth: 2
description: >-
  GFLoader is a progress indicator which spins to indicate that the application
  is busy. It usually progresses along a circle.
---

# GF Loader

![GW Loader Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Loaders_Docs_Banner_knsNFM97YO.png)

**Flutter Loader** is a circular indicator that will be loading continuously that indicate something is about to load.

### GFLoader and its Usage:

**GFLoader** is a circular spinner that spins over time which signifies that some part of the program is about to get executed.

The basic code of a simple **GFLoader** is as shown below. There are five types in which the default corresponds to the android type of loader.

```dart
import 'package:getwidget/getwidget.dart';
 GFLoader(),
```

### Types of Loaders

There are five different types of loaders namely **android**, **ios,** **circle**, **square,** and **custom**

### **IOS Loader**

![IOS Loader](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/iOS_loaders_3x__6iEhhCjnN.png)

A simple **ios** loader in which the type of the loader should be passed to **ios**. The code is as shown below.

```dart
import 'package:getwidget/getwidget.dart';
 GFLoader(
   type:GFLoaderType.ios
 ),
```

### Circular Loader

![Circular Loader](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Circular_3x_qSfMlOtBk.png)

A simple **circular** **shape loader** in which the type of the loader should be passed to **circle**. The code is as shown below.

```dart
import 'package:getwidget/getwidget.dart';

 GFLoader(
   type:GFLoaderType.circle
 ),
```

### Square Loader

![Square Loader](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Square_loader_3x_QsRsYryOlL.png)

A simple **square** **shape loade**r in which the type of the loader should be passed to **square**. The code is as shown below.

```dart
import 'package:getwidget/getwidget.dart';

 GFLoader(
   type:GFLoaderType.square
 ),
```

### Custom Loader

Apart from the four types described above, there is a **custom loader** in which we can pass text, icons, images, etc as the parameters to show a variety of customized loaders. The below code shows the custom loader with a gif in it.

```dart
import 'package:getwidget/getwidget.dart';

 GFLoader(
   type: GFLoaderType.custom,
   child: Image(image: AssetImage(your gif here...),
),
```

### Custom Loader with Icon

The below code shows custom loaders with icons in them.

```dart
import 'package:getwidget/getwidget.dart';

GFLoader(
  type: GFLoaderType.custom,
  loaderIconOne   : Icon(Icons.insert_emoticon),
  loaderIconTwo   : Icon(Icons.insert_emoticon),
  loaderIconThree : Icon(Icons.insert_emoticon),
),
```

### Custom Loader with text

We can also pass **text** as a parameter to the custom loader. The below code shows a simple usage.

```dart
import 'package:getwidget/getwidget.dart';

GFLoader(
  type: GFLoaderType.custom,
  loaderIconOne   : Text('Please'),
  loaderIconTwo   : Text('Wait'),
  loaderIconThree : Text('a moment'),
),
```

### GFLoader Custom Properties:

The look and feel of **GFLoader** can be customized using the below properties.

|  |  |
| :--- | :--- |
| **child** | child of type \[Widget\] used only for **custom** type and is prominent over loaderIconOne, loaderIconTwo and loaderIconThree in **custom** type |
| **duration** | defines the animation duration of the loader only in **circle** and **square** type |
| **loaderColorOne** | defines the color of the first dot in only  **circle** or **square** type of loader |
| **loaderColorTwo** | defines the color of the second dot in only **circle** or **square** type of loader |
| **loaderColorThree** | defines the color of the third dot in only **circle** or **square** type of loader |
| **androidLoaderColor** | defines the color of the android type loader only |
| **loaderstrokeWidth** | defines the stroke width of the android type loader only |
| **size** | defines the size of the loader ie, `small`, `medium` and `large` and it is applicable to android ios, circle and square type loaders |

