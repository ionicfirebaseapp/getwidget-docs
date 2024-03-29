---
description: >-
  Gf Flutter Image image is custom widget to handle image and their design in
  flutter. It comes with 25+ Custom properties to use according to requirement.
---

# GF Flutter Image

![GF Flutter Image Widget](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Images-Square_QR9kAzRqOXD.png)

**Flutter Images** are those that manage the asset images and show that upon run time. The images can be static images or dynamic images.

**GFImage** supports and manages the images to be displayed on run time. It has the following types of images which can be used in any application.

## GF Flutter Asset Image

**Asset image** is used to display the images stored locally in the assets folder. Below is a simple example code of an asset image.

```dart
import 'package:getwidget/getwidget.dart';

GFImageOverlay(
  height: 200,
  width: 300,
  image: AssetImage('your asset image')
)
```

## GF Flutter Network Image

**Network image** is used to display an image from the internet. Hence the passing parameter for the image will be as shown in the below code.

```dart
import 'package:getwidget/getwidget.dart';

GFImageOverlay(
  height: 200,
  width: 300,
  image: NetworkImage('your network image')
)
```

## GF Flutter Image Overlay

I**mage Overlay** is used to set the image in the **background** and text in the **foreground** with the `colorFilter` property that takes two colors, and outputs one color

![Flutter Image Overlay](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Images\_-\_basic\_3x_uHCFyLq7s.png)

**Flutter Image overlay example Code**

```dart
import 'package:getwidget/getwidget.dart';

GFImageOverlay(
  height: 200,
  width: 300,
  child: Center(
    child: Text('Light Overlay', style:TextStyle(color: GFColors.LIGHT)),
  ),
  image: AssetImage('your asset image'),
  colorFilter: new ColorFilter.mode(Colors.black.withOpacity(0.3),
   BlendMode.darken),
),
```

## GF Flutter Circle Image

A **Circular Image** is an image with a circle-shaped border. It is widely used in any profile screen to display the profile picture.

![Flutter Circular Image](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Images-circular\_3x_DOdazHv_R.png)

**Flutter Circle image example Code**

```dart
import 'package:getwidget/getwidget.dart';

 GFImageOverlay(
   height: 200,
   width: 200,
   shape: BoxShape.circle,
   image:AssetImage('your asset image'),
   boxFit: BoxFit.cover,
 )
```

## GF Flutter Image Custom Properties

The custom properties of **GFImage** are given below to customize the look and feel of the image.

| Name             | Description                                   |
| ---------------- | --------------------------------------------- |
| **height**       | defines the height of the image               |
| **width**        | defines the width of the image                |
| **color**        | defines the background color of the image     |
| **margin**       | image's outer container margin                |
| **padding**      | image's outer container padding               |
| **alignment**    | to align the child within the image           |
| **boxFit**       | how to image should be inscribed into the box |
| **borderRadius** | the corners of the image                      |
| **border**       | the border above the image                    |
