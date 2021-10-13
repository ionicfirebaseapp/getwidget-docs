---
description: >-
  GF Flutter Animations make UI feel more interesting, it makes the look and
  feel of the app more polished and improves the user experience.
---

# GF Flutter Animation

![GF Flutter Animation](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Animation_docs_banner_A\_10aeESdCUL.gif)

**GFAnimation** is a **Flutter Animation** wherein it makes the UI smooth for the user and the user interaction with the app will be easier. **GFAnimation** makes it easy to implement a variety of animations.

## GF Flutter Animation Type :

### 1. GF Flutter Rotation Animation

**GFAnimation** property `type: GFAnimationType.rotateTransition` , creates a rotation transition for the child of type widget. This type of animation will animate the rotation of a widget.

The below example code shows the **Flutter rotation animation**.

![GF Flutter Rotation Animation](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Animation-Rotation_xN-DtCumD.gif)

```dart
  late AnimationController controller;
  late Animation<double> animation;

  @override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 5), vsync: this);
    animation = new CurvedAnimation(parent: controller, curve: Curves.linear);
    controller.repeat();
  }

GestureDetector(
  onTap: () {
    controller.repeat();
  },
  child: GFAnimation(
    turnsAnimation: animation,
    controller: controller,
    type: GFAnimationType.rotateTransition,
    alignment: Alignment.center,
    child: Image.asset(
      'assets image here',
      width: 80,
      height: 80,
    ),
  ),
),
```

### 2. GF Flutter Animation Scaling

**GFAnimation** property `type: GFAnimationType.scaleTransition` , creates a scale transition for the child of type widget. It animates the scale of a transformed widget. The below code shows the **flutter scale animation**.

![GF Flutter Scaling Animation](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Animation\_-scaling_xKsfUBwdY.gif)

```dart
  late AnimationController controller;
  late Animation<double> animation;

  @override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 5), vsync: this);
    animation = new CurvedAnimation(parent: controller, curve: Curves.linear);
    controller.repeat();
  }

GestureDetector(
  onTap: () {
    controller.repeat();
  },
  child: GFAnimation(
    scaleAnimation: animation,
    controller: controller,
    type: GFAnimationType.scaleTransition,
    child: Image.asset(
      'assets image here',
      width: 80,
      height: 80,
    ),
  ),
),
```

### 3. GF Flutter Animation Alignment

![GF Flutter Alignment Animation](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Animation-\_allignment\_1NU1fAmgT.gif)

**GFAnimation** property `type: GFAnimationType.align` , creates an alignment transition for the child of type widget. Animates the position alignment of a widget over a given duration whenever alignment changes. The below gives alignment type of animation

```dart
GFAnimation(
  duration: Duration(seconds: 2),
  alignment: Alignment.bottomLeft,
  type: GFAnimationType.align,
  child: Image.asset(
    'assets image here',
    width: 80,
    height: 80,
  ),
),
```

### 4.GF Flutter Page Slide Transition

![GF Flutter Page Slide Transition](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Animation-\_slide_pCBzSV31Bgt.gif)

**GFAnimation** property `type: GFAnimationType.slideTransition` , creates a fractional translation transitions for the child of type widget. Animates the position of a widget relative to its normal position. The below codes shows the example of **flutter page slide transition** animation.

```dart
 late Animation<Offset> offsetAnimation;
  @override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 5), vsync: this);
    animation = new CurvedAnimation(parent: controller, curve: Curves.linear);
    controller.repeat();
    offsetAnimation = Tween<Offset>(
      begin: Offset(-5, 0),
      end: const Offset(0, 0),
    ).animate(CurvedAnimation(
      parent: controller,
      curve: Curves.linear,
    ));
  }

Container(
  width: MediaQuery.of(context).size.width,
  child: GFAnimation(
    controller: controller,
    slidePosition: offsetAnimation,
    type: GFAnimationType.slideTransition,
    child: Image.asset(
      'assets image here',
      width: 80,
      height: 80,
    ),
  ),
),
```

### 5. GF Flutter Animation Size

![Flutter Size Animation](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Animation-size_Uo3LU0xmy.gif)

**GFAnimation** property `type: GFAnimationType.size` , creates a widget that animates its size. Animates the widget that automatically transitions its size in a given duration whenever the given child's size changes. The example below demonstrates the **Text** **size animation in flutter**.

```dart
bool selected = false;

late AnimationController controller;
late Animation<double> animation;

@override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 5), vsync: this);
    animation = new CurvedAnimation(parent: controller, curve: Curves.linear);
    controller.repeat();
  }

GFAnimation(
  onTap: () {
    if (mounted) {
      setState(() {
        selected = !selected;
      });
    }
  },
  width: selected ? 100 : 50,
  height: selected ? 100 : 50,
  type: GFAnimationType.size,
  controller: controller,
  child: Image.asset(
    'assets image here',
     width: 80,
    height: 80,
  ),
),
```

### 6. GF Flutter Animation Container

![GF Flutter Animation Container](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Animation-container_vGQhL26sk.gif)

**GFAnimation** property `type: GFAnimationType.container` , creates a widget gives the zooming effect. Animates the widget that automatically zooms in and out in a given duration whenever the given child's size changes. The below example shows the effect of animation.

```dart
late AnimationController controller;
late Animation<double> animation;
double _fontSize = 30;

@override
  void initState() {
    super.initState();
    controller =
        AnimationController(duration: const Duration(seconds: 5), vsync: this);
    animation = new CurvedAnimation(parent: controller, curve: Curves.linear);
    controller.repeat();
  }

GFAnimation(
  width: 50,
  changedWidth: 100,
  height: 50,
  changedHeight: 100,
  activeColor: Colors.transparent,
  color: Colors.transparent,
  fontSize: _fontSize,
  type: GFAnimationType.container,
  child: Image.asset(
    'assets image here',
     width: 80,
    height: 80,
  ),
),
```

### GF Flutter Animation Custom Properties

The look and feel of the **GFAnimation** can be customized using the GFAnimation properties.

| Name                | Description                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **duration**        | The duration for animation to perform                                                                                                                            |
| **reverseDuration** | The duration for reverse animation to perform                                                                                                                    |
| **alignment**       | Defines how the animated widget is aligned during Animation.                                                                                                     |
| **activeAlignment** | Defines how the animated widget is aligned(after the onTap) during Animation.                                                                                    |
| **child**           | The child of type \[Widget] to display animation effect.                                                                                                         |
| **curve**           | Determines the animation curve. Defaults to \[Curves.linear].                                                                                                    |
| **type**            | type of \[GFAnimation] which takes the type ie, align, size, container, rotateTransition, scaleTransition, slideTransition, and textStyle for the \[GFAnimation] |
| **width**           | defines \[AnimatedContainer] initial width                                                                                                                       |
| **changedWidth**    | defines the width of \[AnimatedContainer] upto which it can expand during animation                                                                              |
| **height**          | defines \[AnimatedContainer] initial height                                                                                                                      |
| **changedHeight**   | defines the height of \[AnimatedContainer] upto which it can expand during animation                                                                             |
| **activeColor**     | defines the color of \[AnimatedContainer] when onTap triggers                                                                                                    |
| **color**           | defines the color of \[AnimatedContainer]                                                                                                                        |
| **padding**         | defines \[child]'s or \[AnimatedContainer] padding                                                                                                               |
| **margin**          | defines \[child]'s or \[AnimatedContainer] margin                                                                                                                |
| **onTap**           | Called when the user taps the \[child]                                                                                                                           |
| **turnsAnimation**  | For GFAnimationType.rotateTransition, customized turns animation can be added to \[RotationTransition] widget                                                    |
| **scaleAnimation**  | For GFAnimationType.scaleTransition, customized scale animation can be added to \[ScaleTransition] widget                                                        |
| **controller**      | Type of \[AnimationController], its a controller of an animation.                                                                                                |
| **textDirection**   | Defines direction of the \[AnimatedDefaultTextStyle] TextDirection i.e \[ltr,rtl]                                                                                |
| **slidePosition**   | For GFAnimationType.slideTransition, which animates the position of a widget.                                                                                    |
| **style**           | Defines the \[TextStyle] of \[AnimatedDefaultTextStyle]                                                                                                          |
| **textAlign**       | Defines the \[TextAlign] of \[AnimatedDefaultTextStyle]                                                                                                          |
| **textOverflow**    | Defines the \[TextOverflow] of \[AnimatedDefaultTextStyle]                                                                                                       |
| **maxLines**        | Defines the \[maxLines] of \[AnimatedDefaultTextStyle]                                                                                                           |
| **textWidthBasis**  | Defines the \[TextWidthBasis] of \[AnimatedDefaultTextStyle]                                                                                                     |
| **fontSize**        | Defines the \[fontSize] of \[AnimatedDefaultTextStyle]                                                                                                           |
| **fontWeight**      | Defines the \[fontWeight] of \[AnimatedDefaultTextStyle]                                                                                                         |
