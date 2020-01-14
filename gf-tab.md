---
description: >-
  GFTab is a combination of the Tabbar and TabBarView controlled by tab
  controller. Where as GFTabBar contains tab buttons which navigate to
  particular tabBarView page in GFTabBarView.
---

# GF Tab

## GFTabBar

The GFTabBar is a component that contains a set of tab buttons. A tab bar must be provided tabController to communicate with each tabBarView Component.

TabController should be initialized, to communicate between Tabbar and Tabbarview.

```text
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

```text
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

### Properties

Look and feel of the GFTabBar can be customized using the GFTabBar properties.

### Custom Properties

<table>
  <thead>
    <tr>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>initialIndex</b>
      </td>
      <td style="text-align:left">initial index of the selected tab. Defaults to zero</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>length</b>
      </td>
      <td style="text-align:left">total number of tabs. Typically greater than one. Must match [TabBar.tabs]&apos;s
        and [TabBarView.children]&apos;s length</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tabBarHeight</b>
      </td>
      <td style="text-align:left">sets [GFTabBar] height</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tabBarColor</b>
      </td>
      <td style="text-align:left">sets [TabBar] color using material color [Color]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>tabs</b>
      </td>
      <td style="text-align:left">typically a list of two or more [Tab] widgets. The length of this list
        must match the [controller]&apos;s [TabController.length] and the length
        of the [TabBarView.children] list</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>controller</b>
      </td>
      <td style="text-align:left">widget&apos;s selection and animation state. If [TabController] is not
        provided, then the value of [DefaultTabController.of] will be used</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>indicatorColor</b>
      </td>
      <td style="text-align:left">color of the line that appears below the selected tab. If this parameter
        is null, then the value of the Theme&apos;s indicatorColor property is
        used. If [indicator] is specified, this property is ignored</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>indicatorWeight</b>
      </td>
      <td style="text-align:left">thickness of the line that appears below the selected tab. The value of
        this parameter must be greater than zero and its default value is 2.0.
        If [indicator] is specified, this property is ignored</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>indicatorPadding</b>
      </td>
      <td style="text-align:left">
        <p>The horizontal padding for the line that appears below the selected tab.
          For [isScrollable] tab bars, specifying [kTabLabelPadding] will align the
          indicator with the tab&apos;s text for [Tab] widgets and all but the shortest
          [Tab.text] values.</p>
        <p>The default value of [indicatorPadding] is [EdgeInsets.zero]. If [indicator]
          is specified, this property is ignored</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>indicator</b>
      </td>
      <td style="text-align:left">Defines the appearance of the selected tab indicator.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>indicatorSize</b>
      </td>
      <td style="text-align:left">
        <p>Defines how the selected tab indicator&apos;s size is computed.</p>
        <p>The size of the selected tab indicator is defined relative to the tab&apos;s
          overall bounds if [indicatorSize] is [TabBarIndicatorSize.tab] (the default)
          or relative to the bounds of the tab&apos;s widget if [indicatorSize] is
          [TabBarIndicatorSize.label]</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>labelColor</b>
      </td>
      <td style="text-align:left">The color of selected tab labels. Unselected tab labels are rendered with
        the same color rendered at 70% opacity unless [unselectedLabelColor] is
        non-null.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>unselectedLabelColor</b>
      </td>
      <td style="text-align:left">The color of unselected tab labels. If this property is null, unselected
        tab labels are rendered with the [labelColor] with 70% opacity</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>labelStyle</b>
      </td>
      <td style="text-align:left">The text style of the selected tab labels. If [unselectedLabelStyle] is
        null, then this text style will be used for both selected and unselected
        label styles.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>unselectedLabelStyle</b>
      </td>
      <td style="text-align:left">If this property is null, then the [labelStyle] value is used. If [labelStyle]
        is null, then the default text style is used.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>labelPadding</b>
      </td>
      <td style="text-align:left">The padding added to each of the tab labels.</td>
    </tr>
  </tbody>
</table>## GFTabBarView

## GFTabs

## GFSegmentTabs

