---
description: >-
  GF Flutter Card Widget is a customized widget that can use with Image , Avatar
  , Icon, Button, and ready-to-use custom widget in your app.
---

# GF Custom Flutter Card

![GF Flutter Card Widget ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Cards\_\_\_with\_avatar\_JFmx-k0gX.png)

## GF Flutter Card Example

**GFCard** is a **Flutter Card** that is used in any section of the application to display certain types of information about the application. It can be simply used with a **title** and **buttons.**

A **Flutter card** typically has a slight **border radius** and **box shadow** around it that gives a classic look to the card. It typically has two action buttons, some information and it can even contain images in it.

The simple code of a Flutter card is shown below.

```dart
import 'package:getwidget/getwidget.dart';

GFCard(
 boxFit: BoxFit.cover,
 image: Image.asset('your asset image'),
 title: GFListTile(
   avatar: GFAvatar(
     backgroundImage: AssetImage('your asset image'),
   ),
   title: Text('Card Title'),
   subTitle: Text('Card Sub Title'),
),
content: Text("Some quick example text to build on the card"),
buttonBar: GFButtonBar(
 children: <Widget>[
   GFButton(
    onPressed: () {},
    text: 'Buy',
   ),
   GFButton(
    onPressed: () {},
    text: 'Cancel',
   ),
 ],
 ),
),
```

## GF Flutter Cards with [Flutter Avatar](https://docs.getwidget.dev/gf-avatar/)

**GFCards** can be customized with different other types of **GFComponents**. **GFcards** give us data about the particular block. In addition, an **avatar** gives more precise information about the block. Hence **GFAvatar** can be used with **GFCard** to make a **GFCard Avatar.**

![GF Flutter Cards with Avatar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Cards\_with\_avatars\_3x\_wiStZFa9L.png)

Below is a simple example code of **GF Flutter Card with Avatar**:

```dart
import 'package:getwidget/getwidget.dart';

 GFCard(
            boxFit: BoxFit.cover,
            titlePosition: GFPosition.start,
            image: Image.asset(
              'lib/assets/cup.jpg',
              height: MediaQuery.of(context).size.height * 0.2,
              width: MediaQuery.of(context).size.width,
              fit: BoxFit.cover,
            ),
            showImage: true,
            title: GFListTile(
              avatar: GFAvatar(
                backgroundImage: AssetImage('your asset image'),
              ),
              titleText: 'Game Controllers',
              subTitleText: 'PlayStation 4',
            ),
            content: Text("Some quick example text to build on the card"),
            buttonBar: GFButtonBar(
              children: <Widget>[
                GFAvatar(
                  backgroundColor: GFColors.PRIMARY,
                  child: Icon(
                    Icons.share,
                    color: Colors.white,
                  ),
                ),
                GFAvatar(
                  backgroundColor: GFColors.SECONDARY,
                  child: Icon(
                    Icons.search,
                    color: Colors.white,
                  ),
                ),
                GFAvatar(
                  backgroundColor: GFColors.SUCCESS,
                  child: Icon(
                    Icons.phone,
                    color: Colors.white,
                  ),
                ),
              ],
            ),
          ),
```

## GF Flutter Cards with OverlayImage

**GFCards** has **OverlayImage** property wherein a **background image** can be placed and upon the image any widget like **Text**, **buttons** can be used as shown in the image below.

![GF Flutter Cards with OverlayImage](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/cards-with-image-overlays-2x\_XIMzf\_Bc7\_-j3RXaSa2.webp)

Below shows a simple example code for **GFCard with Card OverlayImage**:

```dart
import 'package:getwidget/getwidget.dart';

  GFCard(
            boxFit: BoxFit.cover,
            titlePosition: GFPosition.start,
            showOverlayImage: true,
            imageOverlay: AssetImage(
              'your asset image',
            ),
            title: GFListTile(
              avatar: GFAvatar(),
              titleText: 'Game Controllers',
              subTitleText: 'PlayStation 4',
            ),
            content: Text("Some quick example text to build on the card"),
            buttonBar: GFButtonBar(
              children: <Widget>[
                GFAvatar(
                  backgroundColor: GFColors.PRIMARY,
                  child: Icon(
                    Icons.share,
                    color: Colors.white,
                  ),
                ),

              ],
            ),
          ),
```

## GFCard Custom Properties for Flutter Card:

**GFCard** can be used like **GFCard with Avatar,** **GFCard with ImageOverlay,** and just a **GFCard**. To make the **GFcard** more flexible with your Flutter card. we have the below custom properties:

| Name                   | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| **titlePosition**      | helps to set the title at  top of the card                                       |
| **color**              | sets the background color of the card                                            |
| **elevation**          | controls the size of the shadow below the card                                   |
| **shape**              | the shape of the card                                                            |
| **borderOnForeground** | whether to paint the shape of the border in front of the child, defaults to true |
| **clipBehaviour**      | defines the clipping of the child                                                |
| **margin**             | defines the card's outer container margin                                        |
| **padding**            | defines the card's outer container padding                                       |
| **semanticContainer**  | represents a single semantic container, if false a collection of semantic nodes  |
| **border**             | to draw a border above the card                                                  |
| **borderRadius**       | represents the rounded corners of the card                                       |
| **colorFilter**        | applies to the image before painting it                                          |
| **boxFit**             | how the image should be inscribed into the box                                   |
| **imageOverlay**       | display images as background with shaded overlay                                 |
