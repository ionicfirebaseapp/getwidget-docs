---
description: >-
  Flutter Sticky Header is a widget that will stick on top which has scrollable
  content.
---

# GF Sticky Header

### GF Sticky Header Info

![](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Sticky_headers_docs_baner_compressed_-_a1zk2C7.gif)

#### Usage

The simple code of a basic GFSticky Header is as shown below. 

![](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Sticky_headers-basic_D4r9sejB1sy1.gif)

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

Always wrap GFSticky Header inside \[LIstView\], \[GridView\], \[CustomScrollView\], \[SingleChildScrollView\] or similar

### GF Sticky Header Types

#### GF Sticky Header - Vertical

GF Sticky Header property _`direction: Axis.vertical`  align the stickyContent and content in vertical  way._ 

#### GF Sticky Header - Horizontal

GF Sticky Header property _`direction: Axis.horizontal`  align the stickyContent and content in horizontal  way._ 

### GF Sticky Header Builder

![](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Sticky_headers-customized_-3xHGFDJw--.gif)

\[GFStickyHeaderBuilder\] component works same as GFStickyHeader, instead of widget for stickyHeader here we can use \[builder\]. This allows user to customize the stickyHeader with render values. 

The basic example GFSticky Header Builder is as shown below. 

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

### Custom Properties

Look and feel of the **GFStickyHeader** can be customized using the GFStickyHeader properties.

<table>
  <thead>
    <tr>
      <th style="text-align:left"></th>
      <th style="text-align:left"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>stickyContent</b>
      </td>
      <td style="text-align:left">widget can be used to define [stickyContent]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>content</b>
      </td>
      <td style="text-align:left">widget can be used to define [content].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>enableHeaderOverlap</b>
      </td>
      <td style="text-align:left">
        <p>On state true, the [stickyContent] will overlap the [content].</p>
        <p>Only works when direction is [Axis.vertical]. Default set to false.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>stickyContentPosition</b>
      </td>
      <td style="text-align:left">
        <p>[GFPosition] allows to [stickyContentPosition] to stick at top in [Axis.vertical]
          and stick at start in [Axis.horizontal]</p>
        <p>Defaults to [GFPosition.start]</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>callback</b>
      </td>
      <td style="text-align:left">Allows to add custom stickyHeader stuck offset value</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>direction</b>
      </td>
      <td style="text-align:left">
        <p>[direction] allows children to align in vertical / horizontal way</p>
        <p>Defaults to [Axis.vertical]</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>stickyContentBuilder</b>
      </td>
      <td style="text-align:left">builder widget can be used to define [stickyContentBuilder].</td>
    </tr>
  </tbody>
</table>

