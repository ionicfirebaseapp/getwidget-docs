---
sidebarDepth: 2
description: >-
  GF Flutter appbar is a top action bar or a top action button that has a
  dedicated space with visual structure and interactive elements.
image: >-
  https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Appbar_qHw5dgqjR5Q5.png
canonicalUrl: 'https://docs.getwidget.dev/gf-appbar'
---

# GF Flutter Appbar

![GF Flutter Appbar Widget](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Appbar_qHw5dgqjR5Q5.png)

**Flutter Appbar** is an action button that is placed on the top of the screen and is a static one. It basically consists of a toolbar and other widgets that can also be used inside the **Flutter Appbar**.

**GFAppBar** is a **Flutter Appbar** that consists of a **leading button** and the **actions button** in the appbar which will be fixed on the top. **Flutter Appba**r provides flexible space for any widgets.

**Flutter SliverAppbar** is a **Flutter Appbar** that provides a certain height for the appbar which will be scrollable and after some extend of scrolling the appbar will be a fixed one at the top like a normal appbar.

## GF Flutter Appbar and its Usage:

A **GFAppBar** is a **Flutter AppBar** widget that consists of a toolbar and potentially other widgets, such as a GFTabBar and FlexibleSpaceBar. The **GFAppBar** displays the toolbar widgets, **leading**, **title**, and **actions.**

**GFAppbar** has a **menu icon button** or **flutter appbar icon** on the top left corner that can be changed according to the need. The **leading appbar button** parameter is used to change the default menu icon button.

The below example code shows a simple appbar **\*\*with a** flutter appbar back button **on the** leading parameter\*\* which is used to go back to the previous page.

![Flutter Appbar with back button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/BAsic_3x_cbGIPYmQJ.png)

```dart
import 'package:getwidget/getwidget.dart';

GFAppBar(
  leading:  GFIconButton(
    icon: Icon(
      Icons.message,
      color: Colors.white,
    ),
    onPressed: () {},
    type: GFButtonType.transparent,
  ),
  title: Text("GF Appbar"),
  actions: <Widget>[
    GFIconButton(
      icon: Icon(
        Icons.favorite,
        color: Colors.white,
      ),
      onPressed: () {},
      type: GFButtonType.transparent,
    ),
  ],
),
```

### GF Flutter Appbar with SearchBar

![GF Flutter Appbar with SearchBar](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/with_search_3x_1A4y5PZuu.png)

**GFAppbar** has a parameter called`searchBar`wherein it is a boolean variable. If the searchBar is given the value`true`then it displays a search bar textfield in the title space of the appbar with **leading**, **trailing** options.

The below example demo code shows the example of how to pass the parameter.

```dart
import 'package:getwidget/getwidget.dart';

GFAppBar(
  leading:  GFIconButton(
    icon: Icon(
      Icons.message,
      color: Colors.white,
    ),
    onPressed: () {},
    type: GFButtonType.transparent,
  ),
  searchBar: true,
  title: Text("GF Appbar"),
  actions: <Widget>[
    GFIconButton(
      icon: Icon(
        Icons.favorite,
        color: Colors.white,
      ),
      onPressed: () {},
      type: GFButtonType.transparent,
    ),
  ],
),
```

### GF Flutter custom Appbar with Segmented Tabs

![GF Flutter Appbar with Segmented Tabs](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Segmented_3x_yGAKyoSOD.png)

**Segmented** **tabs** can also be used inside the **GFAppbar**. In the **title** field of the Appbar just define the Segmented tab code and the work will be done.

The example below code shows a simple segmented tab inside Appbar.

```dart
import 'package:getwidget/getwidget.dart';

TabController tabController;
  @override
  void initState() {
    super.initState();
    tabController = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    tabController.dispose();
    super.dispose();
  }

  return Scaffold(
      appBar: GFAppBar(
        backgroundColor: GFColors.getGFColor(GFColor.dark),
        title:   GFSegmentTabs(
          tabController: tabController,
          tabBarColor: GFColors.getGFColor(GFColor.light),
          labelColor: GFColors.getGFColor(GFColor.white),
          unselectedLabelColor: GFColors.getGFColor(GFColor.dark),
          indicator: BoxDecoration(
            color: GFColors.getGFColor(GFColor.dark),
          ),
          indicatorPadding: EdgeInsets.all(8.0),
          indicatorWeight: 2.0,
          border: Border.all(color: Colors.white, width: 1.0),
             length: 3,
              tabs: <Widget>[
                Text(
                  "Tab1",
                ),
                Text(
                  "Tab2",
                ),
                Text(
                  "Tab3",
                ),
              ],
            ),
          ),
 body: GFTabBarView(controller: tabController, children: <Widget>[
   Center(
     child: Text('Tab 1'),
   ),
   Center(
     child: Text('Tab 2'),
   ),
   Center(
     child: Text('Tab 3'),
   ),
 ]),
);
```

### **GF Flutter Appbar Search Bar** Custom Properties

The look and feel of the **GFAppbar search bar** can be customized using the GFAppbar properties.

| Name | Description |
| :--- | :--- |
| **searchBar** | If true, displays search bar in the title space |
| **searchHintText** | It takes the text to displays the search bar hint text |
| **searchHintStyle** | It styles the \[searchHintText\] |
| **searchTextStyle** | It styles the search text |
| **searchBarColorTheme** | It defines the search bar icons color theme |
| **searchController** | Controls the text being edited. If null, this widget will create its own \[TextEditingController\] |
| **onChanged** | Called when the user initiates a change to the TextField's value: when they have inserted or deleted text |
| **onSubmitted** | Called when the user indicates that they are done editing the text in the field. |
| **onTap** | Called for each distinct tap except for every second tap of a double tap. If the text field is created with enabled false, taps will not be recognized. |

### **GF Flutter Appbar** Custom Properties

Look and feel of the **GFAppbar** can be customized using the GFAppbar properties.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>leading</b>
      </td>
      <td style="text-align:left">A widget to display before the [title]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>automaticallyImplyLeading</b>
      </td>
      <td style="text-align:left">Controls whether we should try to imply the leading widget if null. If
        true and [leading] is null, automatically try to deduce what the leading
        widget should be. If false and [leading] is null, leading space is given
        to [title]. If leading widget is not null, this parameter has no effect.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>title</b>
      </td>
      <td style="text-align:left">The primary widget displayed in the app bar. Typically a [Text] widget
        containing a description of the current contents of the app.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>actions</b>
      </td>
      <td style="text-align:left">Widgets to display after the [title] widget. Typically these widgets are
        [IconButton]s representing common operations. For less common operations,
        consider using a [PopupMenuButton] as the last action.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>flexibleSpace</b>
      </td>
      <td style="text-align:left">
        <p>This widget is stacked behind the toolbar and the tab bar. It&apos;s height
          will</p>
        <p>be the same as the app bar&apos;s overall height.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bottom</b>
      </td>
      <td style="text-align:left">This widget appears across the bottom of the app bar. Typically a [TabBar].
        Only widgets that implement [PreferredSizeWidget] can be used at the bottom
        of an app bar.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>elevation</b>
      </td>
      <td style="text-align:left">The z-coordinate at which to place this app bar relative to its parent.
        This controls the size of the shadow below the app bar. The value is non-negative.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>shape</b>
      </td>
      <td style="text-align:left">The material&apos;s shape as well its shadow. A shadow is only displayed
        if the [elevation] is greater than zero.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>backgroundColor</b>
      </td>
      <td style="text-align:left">The color to change background color of the app bar&apos;s material.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>brightness</b>
      </td>
      <td style="text-align:left">The brightness of the app bar&apos;s material. Typically this is set along
        with [backgroundColor], [iconTheme], [textTheme].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iconTheme</b>
      </td>
      <td style="text-align:left">The color, opacity, and size to use for app bar icons. Typically this
        is set along with [backgroundColor], [brightness], [textTheme].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>actionsIconTheme</b>
      </td>
      <td style="text-align:left">The color, opacity, and size to use for the icons that appear in the appbar&apos;s
        [actions]. This should only be used when the [actions] should be themed
        differently than the icon that appears in the app bar&apos;s [leading]
        widget.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>textTheme</b>
      </td>
      <td style="text-align:left">The typographic styles to use for text in the app bar. Typically this
        is set along with [brightness] [backgroundColor], [iconTheme].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>primary</b>
      </td>
      <td style="text-align:left">Whether this app bar is being displayed at the top of the screen. If true,
        the app bar&apos;s toolbar elements and [bottom] widget will be padded
        on top by the height of the system status bar. The layout of the [flexibleSpace]
        is not affected by the [primary] property.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>centerTitle</b>
      </td>
      <td style="text-align:left">Whether the title should be centered. Defaults to being adapted to the
        current [TargetPlatform].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>titleSpacing</b>
      </td>
      <td style="text-align:left">
        <p>The spacing around [title] content on the horizontal axis. This spacing
          is applied even if there is no [leading] content or [actions]. If you want</p>
        <p>[title] to take all the space available, set this value to 0.0.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>toolbarOpacity</b>
      </td>
      <td style="text-align:left">How opaque the toolbar part of the app bar is. A value of 1.0 is fully
        opaque, and a value of 0.0 is fully transparent.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>bottomOpacity</b>
      </td>
      <td style="text-align:left">How opaque the bottom part of the app bar is. A value of 1.0 is fully
        opaque, and a value of 0.0 is fully transparent.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>preferredSize</b>
      </td>
      <td style="text-align:left">A size whose height is the sum of [kToolbarHeight] and the [bottom] widget&apos;s
        preferred height. [Scaffold] uses this size to set its app bar&apos;s height.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>searchBar</b>
      </td>
      <td style="text-align:left">If true, displays search bar in the title space</td>
    </tr>
  </tbody>
</table>

