---
description: >-
  GF Dropdown let user to select from the number of items and display selected
  item in the button. It displays list of items in the overlay dropdown fashion.
---

# GF Dropdown

### GF Dropdown Info

#### Usage

The simple code of a basic GFDropdown is as shown below. 



### Customized GF Dropdown

GFDropdown features allows user to create customized dropdown for the more flexible and interactive UI design.

### Custom Properties

Look and feel of the **GFDropdown** can be customized using the GFDropdown properties.

<table>
  <thead>
    <tr>
      <th style="text-align:left"></th>
      <th style="text-align:left"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>icon</b>
      </td>
      <td style="text-align:left">The widget to use for the drop-down button&apos;s icon. Defaults to an
        [Icon] with the [Icons.arrow_drop_down] glyph.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>elevation</b>
      </td>
      <td style="text-align:left">The z-coordinate at which to place the menu when open.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>value</b>
      </td>
      <td style="text-align:left">The value of the currently selected [DropdownMenuItem].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>border</b>
      </td>
      <td style="text-align:left">Defines the border of dropdown button</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>padding</b>
      </td>
      <td style="text-align:left">Defines the padding given inside the dropdown</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>hint</b>
      </td>
      <td style="text-align:left">A placeholder widget that is displayed by the dropdown button.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>disabledHint</b>
      </td>
      <td style="text-align:left">A message to show when the dropdown is disabled.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>onChanged</b>
      </td>
      <td style="text-align:left">
        <p>Called when the user selects an item.</p>
        <p>If the [onChanged] callback is null or the list of [DropdownButton.items]
          is null then the dropdown button will be disabled,</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>onTap</b>
      </td>
      <td style="text-align:left">Called when the dropdown button is tapped.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>style</b>
      </td>
      <td style="text-align:left">Defaults to the [TextTheme.subtitle1] value of the current [ThemeData.textTheme]
        of the current [Theme].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>underline</b>
      </td>
      <td style="text-align:left">The widget to use for drawing the drop-down button&apos;s underline.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iconDisabledColor</b>
      </td>
      <td style="text-align:left">The color of any [Icon] descendant of [icon] if this button is disabled,
        i.e. if [onChanged] is null.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iconEnabledColor</b>
      </td>
      <td style="text-align:left">The color of any [Icon] descendant of [icon] if this button is enabled,
        i.e. if [onChanged] is defined.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>iconSize</b>
      </td>
      <td style="text-align:left">The size to use for the drop-down button&apos;s down arrow icon button.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>isDense</b>
      </td>
      <td style="text-align:left">Reduce the button&apos;s height.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>isExpanded</b>
      </td>
      <td style="text-align:left">Set the dropdown&apos;s inner contents to horizontally fill its parent.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>itemHeight</b>
      </td>
      <td style="text-align:left">defines the height of the menu items</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>focusColor</b>
      </td>
      <td style="text-align:left">The color for the button&apos;s [Material] when it has the input focus.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownColor</b>
      </td>
      <td style="text-align:left">Defines the background color of the dropdown.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>borderRadius</b>
      </td>
      <td style="text-align:left">Defines the border radius of the dropdown.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>dropdownButtonColor</b>
      </td>
      <td style="text-align:left">Defines the background color of the dropdownButton.</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>autofocus</b>
      </td>
      <td style="text-align:left">
        <p>On true state it should focus itself if nothing else is already focused.</p>
        <p>Defaults to false</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>focusNode</b>
      </td>
      <td style="text-align:left">Defines the keyboard focus for this widget.</td>
    </tr>
  </tbody>
</table>

