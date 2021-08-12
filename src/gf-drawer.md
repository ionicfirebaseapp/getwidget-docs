---
sidebarDepth: 2
description: >-
  GF Flutter Drawer Widget is a navigation drawer that slides in from the side
  of the current view. GFDrawer can be the perfect option to provide common
  navigation options.
---

# GF Flutter Drawer Widget

![GF Flutter Drawer](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Drawer_RdU7oyGaW.png)

### GF Flutter Navigation Drawer and its Usage:

**GFDrawer** is a **Flutter Drawer** **widget** that slides from the left side of the screen when clicked on the drawer button which will be seen on the left top side of the application. The drawer has mainly navigation options that navigate to the respective other pages depending upon the routes.

The simple example code of a basic **Flutter Side menu** is as shown below to build the **Flutter Navigation Drawer Widget**.

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

### GF Flutter Navigation Drawer Custom Properties

The look and feel of the **GFDrawer** can be customized using the GFDrawer properties.

| Name | Description |
| :--- | :--- |
| **child** | displays the drawer items |
| **color** | defines the background color of the drawer |
| **gradient** | the gradient can be used for transforming gradient shaders without applying the same transform to the entire canvas. |
| **backgroundImage** | the background image can be added to the drawer |
| **colorFilter** | composited layer that applies a color filter to its children |
| **elevation** | controls the size of the shadow below the drawer. |

## GF Flutter Drawer Header and its Usage:

The **GF Drawer Header** component is a header that gives information about the user whole is using the application. This can be placed inside the **GFDrawer** child.

The simple example code of a basic **GF DrawerHeader** with **GFDrawer** is as shown below that helps you build an awesome **Flutter Drawer Header Widget** in your application.

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

### GF Flutter Drawer Header Custom Properties

The look and feel of the **GFDrawerHeader** can be customized using the **GFDrawerHeader** properties.

| Name | Description |
| :--- | :--- |
| **decoration** | defines the background color of the drawer header |
| **margin** | refers to the margin around the drawer header |
| **child** | widget to be placed inside the drawer header, inset by the \[padding\] |
| **currentAccountPicture** | widget placed in the upper-left corner that represents the current user's account |
| **otherAccountsPictures** | list of widgets that represent the current user's other accounts |
| **duration** | the duration for animations of the \[decoration\] |
| **curve** | the curve for animations of the \[decoration\] |

