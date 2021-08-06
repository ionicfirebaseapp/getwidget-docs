---
sidebarDepth: 2
description: >-
  GF Shimmer gives a shimmer effect for the child, that can be used to indicate
  a loading status. So instead of using ProgressBar or usual loader use GF
  Shimmer for a better design and user interface.
---

# GF Shimmer

![GW Shimmer Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/shimmer_kb-ZpQnB5.png)

## Shimmer Info

GFShimmer is a Flutter Shimmer Effect Widget that can be used by giving Linear Gradient for more visual shimmer effect or just by adding Main Color and Secondary Color for basic shimmer effect.

### How to Use Flutter Shimmer Effect using GetFlutter

![Shimmer](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Basic_3x_pRKTr4X6_r.png)

The below code gives a simple Flutter Shimmer effect for child with main color and secondary color.

```dart
import 'package:getwidget/getwidget.dart';

GFShimmer(
  child: emptyBlock,
),

final Widget emptyBlock = Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 54,
            height: 46,
            color: Colors.white,
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(
                  width: double.infinity,
                  height: 8,
                  color: Colors.white,
                ),
                const SizedBox(height: 6),
                Container(
                  width: MediaQuery.of(context).size.width * 0.5,
                  height: 8,
                  color: Colors.white,
                ),
                const SizedBox(height: 6),
                Container(
                  width: MediaQuery.of(context).size.width * 0.25,
                  height: 8,
                  color: Colors.white,
                ),
              ],
            ),
          )
        ],
      ),
    );
```

### GFShimmer with Gradient

![GFShimmer with Gradient](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/text_3x_fzYT22T5N.png)

The below code gives a Shimmer effect for child with Liner Gradient. It only takes Liner Gradient when `[showGradient`\] is **true .**

```dart
GFShimmer(
  child: const Text(
    'GF Shimmer',
    style: TextStyle(fontSize: 48, fontWeight: FontWeight.w700),
  ),
  showGradient: true,
  gradient: LinearGradient(
    begin: Alignment.bottomRight,
    end: Alignment.centerLeft,
    stops: const <double>[0, 0.3, 0.6, 0.9, 1],
    colors: [
     Colors.teal.withOpacity(0.1),
     Colors.teal.withOpacity(0.3),
     Colors.teal.withOpacity(0.5),
     Colors.teal.withOpacity(0.7),
     Colors.teal.withOpacity(0.9),
    ],
  ),
),
```

Look and feel of the **GF Shimmer \(Flutter Shimmer Widgets\)** could be customized using the GF Shimmer properties.

### Shimmer Custom Properties

| Name | Description |
| :--- | :--- |
| **child** | The child of type \[Widget\] to display shimmer effect. |
| **duration** | Controls the speed of the shimmer effect. The default value is 1500 milliseconds. |
| **direction** | Controls the direction of the shimmer effect. The default direction is GFShimmerDirection.leftToRight. |
| **gradient** | Controls the \[child\]'s shades of color using Linear gradient. Child \[Widget\] only takes gradient color, If \[showGradient\] is true. |
| **showShimmerEffect** | Controls animation effect, defaults true state that makes animation active. |
| **showGradient** | If true, takes gradient color \[gradient\] for the \[child\]'s shimmer effect. Default set to false. |
| **shimmerEffectCount** | Controls the animation shimmerEffectCount. The default value is '0', that displays child \[Widget\]'s shimmer effect forever. |
| **mainColor** | Defines the main color of the \[child\]'s shimmer effect. Child \[Widget\] takes main color, only if \[showGradient\] is false. Default \[showGradient\] will be false. |
| **secondaryColor** | Defines the secondary color of the \[child\]'s shimmer effect. Child \[Widget\] takes secondary color, only if \[showGradient\] is false. Default \[showGradient\] will be false. |

