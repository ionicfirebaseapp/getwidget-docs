---
description: >-
  GF Flutter Multisecelect is a dropdown that allows users to select one or more
  items from the list with the help of the checkboxes provided for selection.
image: >-
  https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/GW_multiselect_2x_z65vAFaPW.png
canonicalUrl: https://docs.getwidget.dev/gf-multiselect/

---

# GF Flutter Multiselect

**GF Flutter Multiselect** lets users select multiple items from the number of **Checkbox ListTile items** and display selected items in the TitleTile box. It displays a list of items in the overlay dropdown fashion.

![GF Flutter Multi Select Checkbox ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/GW_multiselect_2x_z65vAFaPW.png)

### **GF Flutter Multiselect Dropdown** Usage

The simple example demo code of a basic **GFMultiselect** is as shown below. 

![GF Flutter Multi Select option ](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Multi_select-basic_Ddr_sgSiYqI.gif)

```dart
GFMultiSelect(
  items: dropList,
  onSelect: (value) {
    print('selected $value ');
  },
  dropdownTitleTileText: 'Messi, Griezmann, Coutinho ',
  dropdownTitleTileMargin: EdgeInsets.only(
      top: 22, left: 18, right: 18, bottom: 5),
  dropdownTitleTilePadding: EdgeInsets.all(10),
  dropdownUnderlineBorder:
  const BorderSide(color: Colors.transparent, width: 2),
  dropdownTitleTileBorder:
  Border.all(color: Colors.grey[200], width: 1),
  dropdownTitleTileBorderRadius: BorderRadius.circular(5),
  expandedIcon: const Icon(
    Icons.keyboard_arrow_down,
    color: Colors.black54,
  ),
  collapsedIcon: const Icon(
    Icons.keyboard_arrow_up,
    color: Colors.black54,
  ),
  submitButton: Text('OK'),
  cancelButton: Text('Cancel'),
  dropdownTitleTileTextStyle:
  const TextStyle(fontSize: 14, color: Colors.black54),
  padding: const EdgeInsets.all(6),
  margin: const EdgeInsets.all(6),
  type: GFCheckboxType.basic,
  activeBgColor: GFColors.SUCCESS,
  activeBorderColor: GFColors.SUCCESS,
  inactiveBorderColor: Colors.grey[200],
),
```

### GF Custom Flutter Multiselect option 

**GFMultiselect** features allow users to create a customized multi-select dropdown for the more flexible and interactive UI design.

 The below example code gives the basic **Flutter Multi Select option in flutter app**

![Custom Flutter Multi Select option](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Multi_select_-custom_18gtv6LENAJ.gif)

```dart
Container(
  child: GFMultiSelect(
    items: dropList,
    onSelect: (value) {
      print('selected $value ');
    },
    dropdownTitleTileText: 'Messi, Griezmann, Coutinho ',
    dropdownTitleTileColor: Colors.grey[200],
    dropdownTitleTileMargin: EdgeInsets.only(
        top: 22, left: 18, right: 18, bottom: 5),
    dropdownTitleTilePadding: EdgeInsets.all(10),
    dropdownUnderlineBorder: const BorderSide(
        color: Colors.transparent, width: 2),
    dropdownTitleTileBorder:
    Border.all(color: Colors.grey[300], width: 1),
    dropdownTitleTileBorderRadius: BorderRadius.circular(5),
    expandedIcon: const Icon(
      Icons.keyboard_arrow_down,
      color: Colors.black54,
    ),
    collapsedIcon: const Icon(
      Icons.keyboard_arrow_up,
      color: Colors.black54,
    ),
    submitButton: Text('OK'),
    dropdownTitleTileTextStyle: const TextStyle(
        fontSize: 14, color: Colors.black54),
    padding: const EdgeInsets.all(6),
    margin: const EdgeInsets.all(6),
    type: GFCheckboxType.basic,
    activeBgColor: Colors.green.withOpacity(0.5),
    inactiveBorderColor: Colors.grey[200],
  ),
),
```

### **GF Flutter Multiselect** Custom Properties

The look and feel of the **GFMultiselect** can be customized using the **GFMultiselect** properties.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>items</b>
      </td>
      <td style="text-align:left">defines the list of items the user can select</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>onSelect</b>
      </td>
      <td style="text-align:left">callback when user select item from the dropdown, in callback we get list
        of selected items index</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileText</b>
      </td>
      <td style="text-align:left">type of [String] to define the dropdownTitleTile title</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileTextStyle</b>
      </td>
      <td style="text-align:left">type of [TextStyle] to define the textStyle of [dropDownTitleTileText]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileHintText</b>
      </td>
      <td style="text-align:left">type of [String] to define the dropdownTitleTile hint text</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileHintTextStyle</b>
      </td>
      <td style="text-align:left">type of [TextStyle] to define the textStyle of [dropDownTitleTileHintTextStyle]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileBorderRadius</b>
      </td>
      <td style="text-align:left">defines the border radius of the dropdownTitleTile</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileBorder</b>
      </td>
      <td style="text-align:left">defines the border of the dropdownTitleTile.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileColor</b>
      </td>
      <td style="text-align:left">defines the background color of dropdownButton</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hideDropdownUnderline</b>
      </td>
      <td style="text-align:left">on true state, it hides the Dropdown Underline border defaults value is
        false</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownUnderlineBorder</b>
      </td>
      <td style="text-align:left">defines the border of the Dropdown Underline border</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTileMargin</b>
      </td>
      <td style="text-align:left">defines the dropdownTitleTile margin</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownTitleTilePadding</b>
      </td>
      <td style="text-align:left">defines the dropdownTitleTile padding</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>expandedIcon</b>
      </td>
      <td style="text-align:left">defines the dropdownTitleTile&apos;s trailing icon when dropdown is visible</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>collapsedIcon</b>
      </td>
      <td style="text-align:left">defines the dropdownTitleTile&apos;s trailing icon when dropdown is not
        visible</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>submitButton</b>
      </td>
      <td style="text-align:left">defines the button in the dropdown</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>color</b>
      </td>
      <td style="text-align:left">defines dropdown checkbox ListTile&apos;s background color. Can be given
        [Color] or [GFColors]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>avatar</b>
      </td>
      <td style="text-align:left">type of [Widget] or [GFAvatar] used to defines dropdown checkbox ListTile&apos;s
        leading</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>margin</b>
      </td>
      <td style="text-align:left">defines the margin of dropdown checkbox ListTile</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>padding</b>
      </td>
      <td style="text-align:left">defines the padding of dropdown checkbox ListTile</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>type</b>
      </td>
      <td style="text-align:left">defines dropdown ListTile&apos;s checkbox type type of [GFCheckboxType]
        which is of four type is basic, sqaure, circular and custom</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>size</b>
      </td>
      <td style="text-align:left">defines dropdown ListTile&apos;s checkbox size type of [double] which
        is GFSize ie, small, medium and large and can use any double value</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activeBgColor</b>
      </td>
      <td style="text-align:left">defines dropdown ListTile&apos;s checkbox background color when its active
        type of [Color] used to change the backgroundColor of the active checkbox</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inactiveBgColor</b>
      </td>
      <td style="text-align:left">defines dropdown ListTile&apos;s checkbox background color when its inactive
        type of [Color] used to change the backgroundColor of the inactive checkbox</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activeBorderColor</b>
      </td>
      <td style="text-align:left">
        <p>defines dropdown ListTile&apos;s checkbox border color when its active</p>
        <p>type of [Color] used to change the border color of the active checkbox</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inactiveBorderColor</b>
      </td>
      <td style="text-align:left">
        <p>defines dropdown ListTile&apos;s checkbox border color when its inactive</p>
        <p>type of [Color] used to change the border color of the inactive checkbox</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>activeIcon</b>
      </td>
      <td style="text-align:left">
        <p>defines dropdown ListTile&apos;s checkbox&apos;s active icon</p>
        <p>type of [Widget] used to change the checkbox&apos;s active icon</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>inactiveIcon</b>
      </td>
      <td style="text-align:left">
        <p>defines dropdown ListTile&apos;s checkbox&apos;s inactive icon</p>
        <p>type of [Widget] used to change the checkbox&apos;s inactive icon</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>customBgColor</b>
      </td>
      <td style="text-align:left">type of [Color] used to change the background color of the custom active
        checkbox only</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>selected</b>
      </td>
      <td style="text-align:left">To have the list tile appear selected when the checkbox is checked, pass
        the same value to both. Normally, this property is left to its default
        value, false.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownBgColor</b>
      </td>
      <td style="text-align:left">defines the background color of the dropdown. Can be given [Color] or
        [GFColors]</td>
    </tr>
  </tbody>
</table>

