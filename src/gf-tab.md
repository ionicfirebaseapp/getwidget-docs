---
sidebarDepth: 2
description: >-
  GFTab is a combination of the Tabbar and TabBarView controlled by tab
  controller. Where as GFTabBar contains tab buttons which navigate to
  particular tabBarView page in GFTabBarView.
---

# GF Tab

![Tab](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Tabs-icon_1_2x_d161LbF9k.png)



## GFTabBar

![Tab Bar](./assets/tabs-2x.png)

The GFTabBar is a component that contains a set of tab buttons. A tab bar must be provided tabController to communicate with each tabBarView Component.

TabController should be initialized, to communicate between Tabbar and Tabbarview.

```dart
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
```

Below code gives, default GFTabBar with 3 children, children can be any type of widget.

```dart
import 'package:getwidget/getwidget.dart';

GFTabBar(
  initialIndex: 0,
  length: 3,
  controller: tabController,
  tabs: [
    Tab(
      icon: Icon(Icons.directions_bike),
      child: Text(
        "Tab1",
       ),
    ),
    Tab(
      icon: Icon(Icons.directions_bus),
      child: Text(
        "Tab2",
      ),
    ),
    Tab(
      icon: Icon(Icons.directions_railway),
      child: Text(
        "Tab3",
      ),
    ),
  ],
),
```

Look and feel of the GFTabBar can be customized using the GFTabBar properties.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **initialIndex** | initial index of the selected tab. Defaults to zero |
| **length** | total number of tabs. Typically greater than one. Must match \[TabBar.tabs\]'s and \[TabBarView.children\]'s length |
| **tabBarHeight** | sets \[GFTabBar\] height |
| **tabBarColor** | sets \[TabBar\] color using GFColor or material color \[Color\] |
| **tabs** | typically a list of two or more \[Tab\] widgets. The length of this list must match the \[controller\]'s \[TabController.length\] and the length of the \[TabBarView.children\] list |
| **controller** | controls widget's selection and animation state. Must provide \[TabController\] |
| **indicatorColor** | color of the line that appears below the selected tab. If this parameter is null, then the value of the Theme's indicatorColor property is used. |
| **indicatorWeight** | thickness of the line that appears below the selected tab. The value of this parameter must be greater than zero and its default value is 2.0. |
| **indicatorPadding** | horizontal padding for the line that appears below the selected tab. |
| **indicator** | defines the appearance of the selected tab indicator.  |
| **indicatorSize** | defines how the selected tab indicator's size is computed.  |
| **labelColor** | color of selected tab labels.  |
| **unselectedLabelColor** | color of unselected tab labels. |
| **labelStyle** | text style of the selected tab labels. |
| **unselectedLabelStyle** | text style of the unselected tab labels. |
| **labelPadding** | padding added to each of the tab labels. |
| **shape** | defines the shape of tabBar |
| **isScrollable** | If \[isScrollable\] is true, then each tab is as wide as needed for its label and the entire \[TabBar\] is scrollable. Otherwise each tab gets an equal share of the available space. |

## GFTabBarView

A page view that displays the widget which corresponds to the currently selected tab. This widget is typically used in conjunction with a GFTabBar and must provide TabBarController.

The tab controller's TabController.length must equal the length of the children list and the length of the TabBar.tabs list.

```dart
import 'package:getwidget/getwidget.dart';

GFTabBarView(
  controller: tabController,
  children: <Widget>[
    Container(color: Colors.red),
    Container(color: Colors.green),
    Container(color: Colors.blue)
  ]
),
```

Look and feel of the GFTabBarVIew can be customized using the GFTabBarView properties.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **controller** | controls widget's selection and animation state. Must provide \[TabController\] |
| **children** | one widget per tab. Its length must match the length of the \[GFTabBar.tabs\] list, as well as the \[controller\]'s \[TabController.length\]. |
| **height** | GFTabBarView height can be fixed |

## GFTabs

GFTabs component is the combination of GFTabBar with GFTabBarView with default controller to controls page view that displays the widget which corresponds to the currently selected tab. 

```dart
import 'package:getwidget/getwidget.dart';

GFTabs(
  initialIndex: 0,
  length: 3,
  tabs: <Widget>[
    Tab(
      icon: Icon(Icons.directions_bike),
      child: Text(
        "Tab1",
      ),
     ),
     Tab(
       icon: Icon(Icons.directions_bus),
       child: Text(
         "Tab2",
       ),
      ),
      Tab(
        icon: Icon(Icons.directions_railway),
        child: Text(
          "Tab3",
        ),
      ),
   ],
   tabBarView: GFTabBarView(
     children: <Widget>[
       Container(child: Icon(Icons.directions_bike), color: Colors.red,),
       Container(child: Icon(Icons.directions_bus), color: Colors.blue,),
       Container(child: Icon(Icons.directions_railway), color: Colors.orange,),
     ],
    ),
),
```

Look and feel of the GFTabs can be customized using the GFTabs properties.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **initialIndex** | initial index of the selected tab. Defaults to zero |
| **length** | total number of tabs. Typically greater than one. Must match \[TabBar.tabs\]'s and \[TabBarView.children\]'s length |
| **tabBarColor** | sets \[TabBar\] color using GFColor or material color \[Color\] |
| **tabs** | typically a list of two or more \[Tab\] widgets. The length of this list must match the \[controller\]'s \[TabController.length\] and the length of the \[TabBarView.children\] list |
| **controller** | controls widget's selection and animation state. Must provide \[TabController\] |
| **indicatorColor** | color of the line that appears below the selected tab. If this parameter is null, then the value of the Theme's indicatorColor property is used. |
| **indicatorWeight** | thickness of the line that appears below the selected tab. The value of this parameter must be greater than zero and its default value is 2.0. |
| **indicatorPadding** | horizontal padding for the line that appears below the selected tab. |
| **indicator** | defines the appearance of the selected tab indicator.  |
| **indicatorSize** | defines how the selected tab indicator's size is computed.  |
| **labelColor** | color of selected tab labels.  |
| **unselectedLabelColor** | color of unselected tab labels. |
| **labelStyle** | text style of the selected tab labels. |
| **unselectedLabelStyle** | text style of the unselected tab labels. |
| **labelPadding** | padding added to each of the tab labels. |
| **tabBarView** | one widget per tab. LIst of widgets given to TabBarView.  The length of this list must match the \[controller\]'s \[TabController.length\] and the length of the \[TabBarView.children\] list. |
| **tabBarHeight** | defines the tabBar height |
| **height** | defines the complete GFTabs height includes tabBar and tabBarView. |
| **shape** | defines the shape of tabBar |

## GFSegmentTabs

GFSegmentTabs are best used as an alternative for tabs. It looks like pills shaped button tab bar with all features of GFTabBar.

This component is typically used in conjunction with a GFTabBarView and must provide TabBarController to control  A page view that displays the widget which corresponds to the currently selected tab. 

```dart
import 'package:getwidget/getwidget.dart';

GFSegmentTabs(
  tabController: tabController,
  initialIndex: 0,
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
```

Look and feel of the GFSEgmentTabs can be customized using the GFSegmentTabs properties.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **initialIndex** | initial index of the selected tab. Defaults to zero |
| **length** | total number of tabs. Typically greater than one. Must match \[TabBar.tabs\]'s and \[TabBarView.children\]'s length |
| **height** | sets \[GFSegmentTabs\] height |
| **tabBarColor** | sets \[TabBar\] color using GFColor or material color \[Color\] |
| **tabs** | typically a list of two or more \[Tab\] widgets. The length of this list must match the \[controller\]'s \[TabController.length\] and the length of the \[TabBarView.children\] list |
| **controller** | controls widget's selection and animation state. Must provide \[TabController\] |
| **indicatorColor** | color of the line that appears below the selected tab. If this parameter is null, then the value of the Theme's indicatorColor property is used. |
| **indicatorWeight** | thickness of the line that appears below the selected tab. The value of this parameter must be greater than zero and its default value is 2.0. |
| **indicatorPadding** | horizontal padding for the line that appears below the selected tab. |
| **indicator** | defines the appearance of the selected tab indicator.  |
| **indicatorSize** | defines how the selected tab indicator's size is computed.  |
| **labelColor** | color of selected tab labels.  |
| **unselectedLabelColor** | color of unselected tab labels. |
| **labelStyle** | text style of the selected tab labels. |
| **unselectedLabelStyle** | text style of the unselected tab labels. |
| **labelPadding** | padding added to each of the tab labels. |
| **border** | defines outer border of the tabs |
| **borderRadius** | defines outer border, border radius |
| **width** | defines width of the tab row |

### GFTabBar as Bottom Navigation Bar

GFTabBar can be used as bottom navigation bar. The basic code is given below.

```text
import 'package:getwidget/getwidget.dart';

Scaffold(
      appBar: GFAppBar(
        title: const Text('UI Kit'),
      ),
      body: GFTabBarView(controller: tabController, children: <Widget>[
        Container(color: Colors.red),
        Container(color: Colors.green),
        Container(color: Colors.blue)
      ]),
      bottomNavigationBar: GFTabBar(
        initialIndex: 0,
        length: 3,
        controller: tabController,
        tabs: [
          Tab(
            icon: Icon(Icons.directions_bike),
            child: const Text(
              'Tab1',
            ),
          ),
          Tab(
            icon: Icon(Icons.directions_bus),
            child: const Text(
              'Tab2',
            ),
          ),
          Tab(
            icon: Icon(Icons.directions_railway),
            child: const Text(
              'Tab3',
            ),
          ),
        ],
      ),
    )
```

