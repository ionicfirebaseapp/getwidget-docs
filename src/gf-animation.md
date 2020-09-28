---
description: >-
  GF Animations make a UI feel more interesting, it make look and feel of the
  app more polished and improve the user experience. GF Animation makes it easy
  to implement a variety of animation.
---

# GF Animation

### GF Animation Info

### Types of GF Animation :

### 1. Rotation

```text
  AnimationController controller;
  Animation<double> animation;
  
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

### 2. Scaling

```text
  AnimationController controller;
  Animation<double> animation;
  
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

### 3. Alignment

```text
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

### 4. Slide Transition

```text
 Animation<Offset> offsetAnimation;
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

### 5. Size

```text
bool selected = false;

AnimationController controller;
Animation<double> animation;
  
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

### Custom Properties

Look and feel of the **GFAnimation** can be customized using the GFAnimation properties.

<table>
  <thead>
    <tr>
      <th style="text-align:left"></th>
      <th style="text-align:left"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>duration</b>
      </td>
      <td style="text-align:left">The duration for animation to perform</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>reverseDuration</b>
      </td>
      <td style="text-align:left">The duration for animation to perform</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>alignment</b>
      </td>
      <td style="text-align:left">Defines how the animated widget is aligned within the Animation.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activeAlignment</b>
      </td>
      <td style="text-align:left">Defines how the animated widget is aligned(after the onTap) within the
        Animation.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>child</b>
      </td>
      <td style="text-align:left">The child of type [Widget] to display animation effect.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>curve</b>
      </td>
      <td style="text-align:left">Determines the animation curve. Defaults to [Curves.linear].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left">type of [GFAnimation] which takes the type ie, align, size, container,
        rotateTransition, scaleTransition, slideTransition, and textStyle for the
        [GFAnimation]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>width</b>
      </td>
      <td style="text-align:left">[AnimatedContainer] initial width</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>changedWidth</b>
      </td>
      <td style="text-align:left">defines the width of [AnimatedContainer] upto which it can extend during
        animation</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>height</b>
      </td>
      <td style="text-align:left">[AnimatedContainer] initial height</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>changedHeight</b>
      </td>
      <td style="text-align:left">defines the height of [AnimatedContainer] upto which it can extend during
        animation</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activeColor</b>
      </td>
      <td style="text-align:left">defines the color of [AnimatedContainer] when onTap triggers</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left">defines the color of [AnimatedContainer]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>padding</b>
      </td>
      <td style="text-align:left">defines [child]&apos;s or [AnimatedContainer] padding</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>margin</b>
      </td>
      <td style="text-align:left">defines [child]&apos;s or [AnimatedContainer] margin</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>onTap</b>
      </td>
      <td style="text-align:left">Called when the user taps the [child]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>turnsAnimation</b>
      </td>
      <td style="text-align:left">
        <p>Here&apos;s an illustration of the [RotationTransition] widget, with it&apos;s
          [turnsAnimation]</p>
        <p>animated by a [stuckValue] set to [animate]</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>scaleAnimation</b>
      </td>
      <td style="text-align:left">
        <p>Here&apos;s an illustration of the [ScaleTransition] widget, with it&apos;s
          [scaleAnimation]</p>
        <p>animated by a [CurvedAnimation] set to [Curves.linear]</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>controller</b>
      </td>
      <td style="text-align:left">controls animation</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>textDirection</b>
      </td>
      <td style="text-align:left">direction of the [AnimatedDefaultTextStyle] TextDirection for [ltr,rtl]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>slidePosition</b>
      </td>
      <td style="text-align:left">[ScaleTransition], which animates the scale of a widget.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>style</b>
      </td>
      <td style="text-align:left">defines the [TextStyle] of [AnimatedDefaultTextStyle]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>textAlign</b>
      </td>
      <td style="text-align:left">defines the [TextAlign] of [AnimatedDefaultTextStyle]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>textOverflow</b>
      </td>
      <td style="text-align:left">defines the [TextOverflow] of [AnimatedDefaultTextStyle]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>maxLines</b>
      </td>
      <td style="text-align:left">defines the [maxLines] of [AnimatedDefaultTextStyle]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>textWidthBasis</b>
      </td>
      <td style="text-align:left">defines the [TextWidthBasis] of [AnimatedDefaultTextStyle]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>fontSize</b>
      </td>
      <td style="text-align:left">defines the [fontSize] of [AnimatedDefaultTextStyle]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>fontWeight</b>
      </td>
      <td style="text-align:left">defines the [fontWeight] of [AnimatedDefaultTextStyle]</td>
    </tr>
  </tbody>
</table>



