---
sidebarDepth: 2
description: >-
  Carousel component is a multi-section container. Each section can be swiped or
  dragged between. It contains any number of Slide components.
---

# GF Carousel

![Carousel](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Carousels-Images_2x_ib7ZUd6vJ.png)

## GF Carousel

List of Images given to the items in the GFCarousel, it allows to slide the each image container. Below code gives the default image slider component. 

```dart
import 'package:getwidget/getwidget.dart';

final List<String> imageList = [
  "https://cdn.pixabay.com/photo/2017/12/03/18/04/christmas-balls-2995437_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/12/13/00/23/christmas-3015776_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/12/19/10/55/christmas-market-4705877_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/12/20/00/03/road-4707345_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/12/22/04/18/x-mas-4711785__340.jpg",
  "https://cdn.pixabay.com/photo/2016/11/22/07/09/spruce-1848543__340.jpg"
];
 
 GFCarousel(
    items: imageList.map(
     (url) {
     return Container(
       margin: EdgeInsets.all(8.0),
       child: ClipRRect(
         borderRadius: BorderRadius.all(Radius.circular(5.0)),
          child: Image.network(
             url,
             fit: BoxFit.cover,
              width: 1000.0
           ),
        ),
      );
      },
     ).toList(),
    onPageChanged: (index) {
      setState(() {
        index;
      });
    },
 ),
```

### Properties

Look and feel of the carousel can be customized using the GFCarousel properties. Sliding items can be any type of list of widgets or list of images.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **items**   | widgets to be shown as slider |
| **height** | set slide widget height and overrides any existing \[aspectRatio\] |
| **aspectRatio** | aspect ratio is used if no height have been declared. Defaults to 16:9 aspect ratio |
| **viewportFraction** | fraction of the viewport that each page should occupy. Defaults to 0.8, which means each page fills 80% of the slide |
| **autoPlay** | enables auto play, sliding one page at a time. Use \[autoPlayInterval\] to determent the frequency of slides. Defaults to false, works only if `viewportFraction` set to 1.0, |
| **reverse** | reverse the order of items if set to true. Defaults to false |
| **autoPlayInterval** | sets Duration to determent the frequency of slides when \[autoPlay\] is set to true. Defaults to 4 seconds |
| **autoPlayAnimationDuration** | animation duration between two transitioning pages while in auto playback. Defaults to 800 ms |
| **autoPlayCurve** | determines the animation curve physics. Defaults to \[Curves.fastOutSlowIn\] |
| **enlargeMainPage** | determines if current page should be larger then the side images, creating a feeling of depth in the carousel. Defaults to false |
| **pauseAutoPlayOnTouch** | sets a timer on touch detected that pause the auto play with the given \[Duration\]. Touch Detection is only active if \[autoPlay\] is true |
| **pagination** | displays pagination on state true |
| **passiveIndicator** | slider pagination's passive color |
| **activeIndicator** | slider pagination's active color |
| **pagerSize** | pagination dots size can be defined using \[double\] |
| **initialPage** | initial page to show when first creating the \[GFCarousel\]. Defaults to 0 |
| **enableInfiniteScroll** | determines if slides should loop infinitely or be limited to item length. Defaults to true, i.e. infinite loop |
| **scrollDirection** | axis along which the page view scrolls. Defaults to \[Axis.horizontal\] |
| **onPageChanged** | called whenever the page in the center of the viewport changes |
| **pageController** | \[pageController\] is created using the properties passed to the constructor  and can be used to control the \[PageView\] it is passed to. |

## GF ItemsCarousel

ItemsCarousel component is a multi-section container with multiple items. Each section can be swiped or dragged betwen. It contains any number of items in each Slide components.

In the below code, List of Images given to the children in the GFItemsCarousel, it allows to slide the each slide container that contain multiple items. Below code gives the default multi image slider component. 

```dart
import 'package:getwidget/getwidget.dart';

final List<String> imageList = [
  "https://cdn.pixabay.com/photo/2017/12/03/18/04/christmas-balls-2995437_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/12/13/00/23/christmas-3015776_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/12/19/10/55/christmas-market-4705877_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/12/20/00/03/road-4707345_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/12/22/04/18/x-mas-4711785__340.jpg",
  "https://cdn.pixabay.com/photo/2016/11/22/07/09/spruce-1848543__340.jpg"
];
 
 GFItemsCarousel(
   rowCount: 3,
   children: imageList.map(
     (url) {
      return Container(
        margin: EdgeInsets.all(5.0),
        child: ClipRRect(
        borderRadius: BorderRadius.all(Radius.circular(5.0)),
        child:
          Image.network(url, fit: BoxFit.cover, width: 1000.0),
         ),
      );
     },
   ).toList(),
),
```

### Custom Properties

| Name | Description |
| :--- | :--- |
| **rowCount** | count of visible cells in each slide |
| **children** | widgets to be shown in slides |
| **itemHeight** | defines the height of an item |



