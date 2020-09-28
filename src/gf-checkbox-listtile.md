---
description: >-
  GFCheckbox ListTile is checkbox with ListTile to display labels and avatar,
  which allows user to select one or more options.
---

# GF Checkbox ListTile

## GF Checkbox ListTile Info

![GF Checkbox ListTile](../.gitbook/assets/docs-banner-checkbox-list-tile-2x.png)

### Usage

The simple code of a basic GFCheckboxListTile is as shown below.

![GF CheckboxListTile](../.gitbook/assets/checkbox-list-tile-3x.png)

```text
bool isChecked = false;

GFCheckboxListTile(
  titleText: 'Arthur Shelby',
  subtitleText: 'By order of the peaky blinders',
  avatar: GFAvatar(
    backgroundImage: AssetImage('Assets image here'),
  ),
  size: 25,
  activebgColor: Colors.green,
  type: GFCheckboxType.circle,
  activeIcon: Icon(
    Icons.check,
    size: 15,
    color: Colors.white,
  ),
  onChanged: (value) {
    setState(() {
      isChecked = value;
    });
  },
  value: isChecked,
  inactiveIcon: null,
),
```

### Custom Properties

Look and feel of the **GFCheckboxListTile** can be customized using the GFCheckboxListTile properties.

|  |  |
| :--- | :--- |
| **titleText** | type of \[String\] used to pass text, alternative to title property and gets higher priority than title |
| **subtitleText** | type of \[String\] used to pass text, alternative to subtitle property and gets higher priority than subtitle |
| **color** | GFListTile's background color. Can be given \[Color\] or \[GFColors\] |
| **avatar** | type of \[Widget\] or \[GFAvatar\] used to create rounded user profile |
| **title** | title to display inside the \[GFListTile\]. see \[Text\] |
| **subTitle** | subTitle to display inside the \[GFListTile\]. see \[Text\] |
| **description** | description to display inside the \[GFListTile\]. see \[Text\] |
| **margin** | defines the margin of GFListTile |
| **padding** | defines the padding of GFListTile |
| **type** | type of \[GFCheckboxType\] which is of four type is basic, sqaure, circular and custom |
| **size** | type of \[double\] which is GFSize ie, small, medium and large and can use any double value |
| **checkColor** | type pf \[Color\] used to change the checkcolor when the checkbox is active |
| **activebgColor** | type of \[Color\] used to change the backgroundColor of the active checkbox |
| **inactivebgColor** | type of \[Color\] used to change the backgroundColor of the inactive checkbox |
| **activeBorderColor** | type of \[Color\] used to change the border color of the active checkbox |
| **inactiveBorderColor** | type of \[Color\] used to change the border color of the inactive checkbox |
| **onChanged** | Called when the user checks or unchecks the checkbox. |
| **value** | Used to set the current state of the checkbox |
| **activeIcon** | type of Widget used to change the  checkbox's active icon |
| **inactiveIcon** | type of \[Widget\] used to change the  checkbox's inactive icon |
| **custombgColor** | type of \[Color\] used to change the background color of the custom active  checkbox only |
| **selected** | To have the list tile appear selected when the checkbox is checked, pass the same value to both. Normally, this property is left to its default value, false. |
| **autofocus** | on true state this widget will be selected as the initial focus when no other node in its scope is currently focused |

