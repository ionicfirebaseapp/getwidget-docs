---
description: >-
  GF Multiselect let user to select multiple items from the number of Checkbox
  ListTile items and display selected items in the TitleTile box. It displays
  list of items in the overlay dropdown fashion.
---

# GF Multiselect

### GF Multiselect Info

#### Usage

The simple code of a basic GFMultiselect is as shown below. 



### Customized GF Multiselect

GFMultiselect features allows user to create customized multi select dropdown for the more flexible and interactive UI design.

### Custom Properties

Look and feel of the **GFMultiselect** can be customized using the GFMultiselect properties.

<table>
  <thead>
    <tr>
      <th style="text-align:left"></th>
      <th style="text-align:left"></th>
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
      <td style="text-align:left"><b>checkColor</b>
      </td>
      <td style="text-align:left">
        <p>defines dropdown ListTile&apos;s checkbox color when its active</p>
        <p>type of [Color] used to change the checkcolor when the checkbox is active</p>
      </td>
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

