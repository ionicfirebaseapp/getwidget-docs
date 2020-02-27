---
description: >-
  GF Shimmer gives shimmer effect for the child, that can be used to indicate a
  loading status. So instead of using ProgressBar or usual loader use GF Shimmer
  for a better design and user interface.
---

# GF Shimmer

GFShimmer can be used by giving Linear Gradient for more visual shimmer effect or just by adding Main Color and Secondary Color for basic shimmer effect.

### Usage

The below code gives a simple Shimmer effect for child with main color and secondary color.

```text
import 'package:getflutter/getflutter.dart';

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

The below code gives a Shimmer effect for child with Liner Gradient. It only takes Liner Gradient when `[showGradient`\] is **true .**

```text
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
      Colors.teal[100],
      Colors.teal[200],
      Colors.teal[300],
      Colors.teal[400],
      Colors.teal[500],
    ],
  ),
),
```

Look and feel of the **GF Shimmer** can be customized using the GF Shimmer properties.

### Custom Properties

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

