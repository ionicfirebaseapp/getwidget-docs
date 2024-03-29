---
description: >-
  Flutter Sticky Header is a widget that sticks the header on top of the screen
  which has a scrollable container.
---

# GF Flutter Sticky Header

**GFStickyHeader** is a **Flutter Sticky Header** that will be fixed or sticks on the top of the screen like the header that has a scrollable container.

![Flutter Sticky Header ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Sticky_headers_docs_baner_compressed\_-\_a1zk2C7.gif)

### GF Flutter Sticky Header Example

Always wrap **GFSticky Header** inside \[LIstView], \[GridView], \[CustomScrollView], \[SingleChildScrollView] or similar type of widget.

The example code of a basic **GF Flutter Sticky Header** is as shown below.

```dart
List imageList = ['asset images here'];

ListView.builder(
    itemCount: imageList.length,
    itemBuilder: (context, index) => GFStickyHeader(
          stickyContent: Container(
            child: Container(
              alignment: AlignmentDirectional.center,
              height: 50,
              width: MediaQuery.of(context).size.width,
              color: Color(0xFF42335d),
              padding: EdgeInsets.symmetric(horizontal: 16.0),
              child: Row(
                children: [
                  Text(
                    'Contact Group $index',
                    style: const TextStyle(color: Colors.white),
                  ),
                ],
              ),
            ),
          ),
          content: Container(
            height: 300,
            child: ListView.builder(
                physics: ScrollPhysics(),
                shrinkWrap: true,
                scrollDirection: Axis.vertical,
                itemCount: 8,
                itemBuilder: (BuildContext context, int index) {
                  return SingleChildScrollView(
                    child: Column(
                      children: [
                        GFCheckboxListTile(
                          titleText: 'Eva Mendez',
                          subTitleText: 'Hello',
                          avatar: GFAvatar(
                            backgroundImage: AssetImage('asset image here'),
                          ),
                          size: 25,
                          activebgColor: Colors.green,
                          activeIcon: Icon(
                            Icons.check,
                            size: 15,
                            color: Colors.white,
                          ),
                          type: GFCheckboxType.circle,
                          onChanged: (val) {
                            setState(() {
                              check = val;
                            });
                          },
                          value: check,
                          inactiveIcon: null,
                        ),
                        Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 20.0),
                          child: Divider(),
                        ),
                      ],
                    ),
                  );
                }),
          ),
        )),
```

## GF Flutter Sticky Header Types

### GF Flutter Sticky Header - Vertical

GF Sticky Header property_`direction: Axis.vertical`aligns the _**stickyContent** \__and content in vertical position.

### GF Flutter Sticky Header - Horizontal

GF Sticky Header property\_`direction: Axis.horizontal`\_aligns the **stickyContent** and content in horizontal position.

## GF Flutter Sticky Header Builder

\[GFStickyHeaderBuilder] component works the same as **GFStickyHeade**r, instead of stickyHeader widget here we use \[builder]. This allows the user to customize the stickyHeader.

The basic example code **GFSticky Header Builder** is as shown below.

```dart
List imageList = ['asset images here'];

ListView.builder(
    itemCount: imageList.length,
    itemBuilder: (context, index) => GFStickyHeaderBuilder(
          direction: Axis.horizontal,
          stickyContentBuilder:
              (BuildContext context, double stuckValue) {
            stuckValue = 1.0 - stuckValue.clamp(0.0, 1.0);
            return Column(
              children: [
                Container(
                  height: 50,
                  width: MediaQuery.of(context).size.width * 0.5,
                  color: Color.lerp(Color(0xFF42335d).withOpacity(0.6),
                      Color(0xFF42335d), stuckValue),
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  alignment: Alignment.centerLeft,
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        child: Text(
                          'Product Name $index',
                          style: const TextStyle(color: Colors.white),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  // height: 200,
                  width: MediaQuery.of(context).size.width * 0.5,
                  child: ListView.builder(
                      physics: ScrollPhysics(),
                      shrinkWrap: true,
                      scrollDirection: Axis.vertical,
                      itemCount: 1,
                      itemBuilder: (BuildContext context, int index) {
                        return SingleChildScrollView(
                          child: Container(
                            padding:
                                EdgeInsets.symmetric(horizontal: 15),
                            child: Column(
                              crossAxisAlignment:
                                  CrossAxisAlignment.start,
                              children: [
                                SizedBox(height: 15),
                                Row(
                                  children: [
                                    GFRadio(
                                      type: GFRadioType.blunt,
                                      size: 23,
                                      value: 1,
                                      groupValue: groupValue,
                                      onChanged: (val) {
                                        setState(() {
                                          groupValue = 1;
                                        });
                                      },
                                      inactiveIcon: null,
                                      activeBorderColor:
                                          GFColors.SUCCESS,
                                      customBgColor: GFColors.SUCCESS,
                                    ),
                                    SizedBox(width: 5),
                                    Text('Large')
                                  ],
                                ),
                                SizedBox(height: 8),
                                Row(
                                  children: [
                                    GFRadio(
                                      type: GFRadioType.blunt,
                                      size: 23,
                                      value: 2,
                                      groupValue: groupValue,
                                      onChanged: (val) {
                                        setState(() {
                                          groupValue = 2;
                                        });
                                      },
                                      inactiveIcon: null,
                                      activeBorderColor:
                                          GFColors.SUCCESS,
                                      customBgColor: GFColors.SUCCESS,
                                    ),
                                    SizedBox(width: 5),
                                    Text('Medium')
                                  ],
                                ),
                                SizedBox(height: 8),
                                Row(
                                  children: [
                                    GFRadio(
                                      type: GFRadioType.blunt,
                                      size: 23,
                                      value: 3,
                                      groupValue: groupValue,
                                      onChanged: (val) {
                                        setState(() {
                                          groupValue = 3;
                                        });
                                      },
                                      inactiveIcon: null,
                                      activeBorderColor:
                                          GFColors.SUCCESS,
                                      customBgColor: GFColors.SUCCESS,
                                    ),
                                    SizedBox(width: 5),
                                    Text('Small')
                                  ],
                                ),
                                 SizedBox(height: 8),
                                Row(
                                  children: [
                                    GFRadio(
                                      type: GFRadioType.blunt,
                                      size: 23,
                                      value: 4,
                                      groupValue: groupValue,
                                      onChanged: (val) {
                                        setState(() {
                                          groupValue = 4;
                                        });
                                      },
                                      inactiveIcon: null,
                                      activeBorderColor:
                                          GFColors.SUCCESS,
                                      customBgColor: GFColors.SUCCESS,
                                    ),
                                    SizedBox(width: 5),
                                    Text('Extra Small')
                                  ],
                                ),
                              ],
                            ),
                          ),
                        );
                      }),
                ),
              ],
            );
          },
          content: Container(
            height: 200,
            width: MediaQuery.of(context).size.width * 0.5,
            color: Colors.teal,
            child: Image.asset(imageList[index],
                fit: BoxFit.fill, width: 100, height: 200),          ),
        )),
```

## **GF Flutter StickyHeader** Custom Properties

The look and feel of the **GFStickyHeader** can be customized using the **GFStickyHeader** properties.

| Name                      | Description                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **stickyContent**         | widget can be used to define \[stickyContent]                                                                                                                         |
| **content**               | widget can be used to define \[content].                                                                                                                              |
| **enableHeaderOverlap**   | <p>On state true, the [stickyContent] will overlap the [content].</p><p>Only works when direction is [Axis.vertical]. Default set to false.</p>                       |
| **stickyContentPosition** | <p>[GFPosition] allows to [stickyContentPosition] to stick at top in [Axis.vertical] and stick at start in [Axis.horizontal]</p><p>Defaults to [GFPosition.start]</p> |
| **callback**              | Allows to add custom stickyHeader stuck offset value                                                                                                                  |
| **direction**             | <p>[direction] allows children to align in vertical / horizontal way</p><p>Defaults to [Axis.vertical]</p>                                                            |
| **stickyContentBuilder**  | builder widget can be used to define \[stickyContentBuilder].                                                                                                         |
