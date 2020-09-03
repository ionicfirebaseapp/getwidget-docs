---
sidebarDepth: 2
description: >-
  The GFDrawer component is a navigation drawer that slides in from the side of
  the current view. GFDrawer can be the perfect option to provide common
  navigation options.
---

# GF Drawer

![Drawer](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Drawer_2x_SN3DBznNN.png)



The GFAppBar automatically displays an appropriate IconButton to show the GFDrawer when a GFDrawer is available in the Scaffold.

### Usage

The simple code of a basic GFDrawer is as shown below.

```dart
import 'package:getwidget/getwidget.dart';

GFDrawer(
  child: ListView(
    padding: EdgeInsets.zero,
    children: <Widget>[
      ListTile(
        title: Text('Item 1'),
        onTap: null,
      ),
      ListTile(
         title: Text('Item 2'),
         onTap: null,
      ),
    ],
  ),
),
```

Look and feel of the GFDrawer can be customized using the GFDrawer properties.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **child** | displays the drawer items |
| **color** | defines the background color of the drawer |
| **gradient** | gradient can be used for transforming gradient shaders without applying the same transform to the entire canvas. |
| **backgroundImage** | background image can be added to the drawer |
| **colorFilter** | composited layer that applies a color filter to its children |
| **elevation** | controls the size of the shadow below the drawer. |

## GF Drawer Header

The GF Drawer Header component is a header that identifies the app's user. This can be placed inside GFDrawer child.

### Usage

The simple code of a basic GFDrawerHeader with GFDrawer is as shown below.

```dart
import 'package:getwidget/getwidget.dart';    
      
      GFDrawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            GFDrawerHeader(
              currentAccountPicture: GFAvatar(
                radius: 80.0,
                backgroundImage: NetworkImage("https://cdn.pixabay.com/photo/2017/12/03/18/04/christmas-balls-2995437_960_720.jpg"),
              ),
              otherAccountsPictures: <Widget>[
                Image(
                  image: NetworkImage("https://cdn.pixabay.com/photo/2019/12/20/00/03/road-4707345_960_720.jpg"),
                  fit: BoxFit.cover,
                ),
                GFAvatar(
                  child: Text("ab"),
                )
              ],
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text('user name'),
                  Text('user@userid.com'),
                ],
              ),
            ),
            ListTile(
              title: Text('Item 1'),
              onTap: null,
            ),
            ListTile(
              title: Text('Item 2'),
              onTap: null,
            ),
          ],
        ),
      ),
```

Look and feel of the GFDrawerHeader can be customized using the GFDrawerHeader properties.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **decoration** | defines the background color of the drawer header |
| **margin** | refers to margin around the drawer header |
| **child** | widget to be placed inside the drawer header, inset by the \[padding\] |
| **currentAccountPicture** | widget placed in the upper-left corner that represents the current user's account |
| **otherAccountsPictures** | list of widgets that represent the current user's other accounts |
| **duration** | the duration for animations of the \[decoration\] |
| **curve** | the curve for animations of the \[decoration\] |



