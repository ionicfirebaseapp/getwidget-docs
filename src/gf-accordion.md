---
sidebarDepth: 2
description: >-
  Tapping a GF Accordion expands or collapses the view of its children.
  GFAccordion is used to collapse and expand the content to view the messages or
  the description of the given title
---

# GF Accordion

![GF Accordion Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Accordion_UXKLspZ4L.png)

## Usage

The simple code of a basic Accordion is as shown below

```dart
 import 'package:getwidget/getwidget.dart';

GFAccordion(
    title: 'GF Accordion',
    content: 'GetFlutter is an open source library that comes with pre-build 1000+ UI components.'
)
```

## Accordion with Icon

![Accordion with Icon](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/accordion-with-icon-2x_zWtnsZQmZ.png)

Icons are mostly used in Accordion to show whether the content is expanded or collapsed. The most commonly used icons are the up and down arrow icons. But we can use different icons to represent the hide and show event by using **collapsedIcon** and **expandedIcon**. The below code shows the usage:

```dart
import 'package:getwidget/getwidget.dart';

GFAccordion(
    title: 'GF Accordion',
    content: 'GetFlutter is an open source library that comes with pre-build 1000+ UI components.',
    collapsedIcon: Icon(Icons.add),
    expandedIcon: Icon(Icons.minimize)
),
```

## Accordion with trailing Text

![Accordion with trailing text](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/accordian-with-text-2x_zitIBS6DI_FMr8uWr38.png)

The trailing part takes any widget like text, icon etc. The below code shows the accordion with the text.

```dart
import 'package:getwidget/getwidget.dart';

 GFAccordion(
     title: 'GF Accordion',
     content: 'GetFlutter is an open source library that comes with pre-build 1000+ UI components.',
     collapsedIcon: Text('Show'),
     expandedIcon: Text('Hide')
),
```

## Custom Properties

|  |  |
| :--- | :--- |
| **showAccordion** | controls if the accordion should be collapsed or not making it possible to be controlled from outside |
| **titleChild** | child of  type \[Widget\]is alternative to title key. title will get priority over titleChild |
| **content** | content of type\[String\] which shows the messages after the \[GFAccordion\] is expanded |
| **contentChild** | contentChild of  type \[Widget\]is alternative to content key. content will get priority over contentChild |
| **collapsedTitleBackgroundColor** | type of \[Color\] or \[GFColors\] which is used to change the background color of the \[GFAccordion\] title when it is collapsed |
| **expandedTitleBackgroundColor** | type of \[Color\] or \[GFColors\] which is used to change the background color of the \[GFAccordion\] title when it is expanded |
| **collapsedIcon** | collapsedIcon of type \[Widget\] which is used to show when the \[GFAccordion\] is collapsed |
| **expandedIcon** | expandedIcon of type\[Widget\] which is used when the \[GFAccordion\] is expanded |
| **title** | text of type \[String\] is alternative to child. text will get priority over titleChild |
| **textStyle** | textStyle of type \[textStyle\] will be applicable to text only and not for the child |
| **titlePadding** | titlePadding of type \[EdgeInsets\] which is used to set the padding of the \[GFAccordion\] title |
| **contentPadding** | descriptionPadding of type \[EdgeInsets\] which is used to set the padding of the \[GFAccordion\] description |
| **contentBackgroundColor** | type of \[Color\] or \[GFColors\] which is used to change the background color of the \[GFAccordion\] description |
| **margin** | margin of type \[EdgeInsets\] which is used to set the margin of the \[GFAccordion\] |
| **titleBorder** | titleBorderColor of type  \[Color\] or \[GFColors\] which is used to change the border color of title |
| **contentBorder** | contentBorderColor of type  \[Color\] or \[GFColors\] which is used to change the border color of content |
| **titleBorderRadius** | titleBorderRadius of type  \[Radius\]  which is used to change the border radius of title |
| **contentBorderRadius** | contentBorderRadius of type  \[Radius\]  which is used to change the border radius of content |
| **onToggleCollapsed** | function called when the content body collapsed |

