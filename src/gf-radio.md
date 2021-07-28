---
description: >-
  GF Radio allows the user to choose only one of a predefined set of mutually
  exclusive options.
---

# GF Radio

## GF Radio Info

![GW Radio Button Banner](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Docs_banner-Radio_button__2x_L9eu2FM1aw.png)

### Usage

The simple code of a basic GFRadio is as shown below.

```dart
int groupValue = 0;

GFRadio(
  size: GFSize.SMALL,
  value: 2,
  groupValue: groupValue,
  onChanged: (value) {
    setState(() {
      groupValue = value;
    });
  },
  inactiveIcon: null,
  activeBorderColor: GFColors.SUCCESS,
  radioColor: GFColors.SUCCESS,
),
```

### Basic Radio Button

![Basic Radio Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Basic_radio_button_x_CcqpvKba.png)

```dart
int groupValue = 0;

GFCard(
    content: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        GFRadio(
          size: GFSize.LARGE,
          activeBorderColor: GFColors.SUCCESS,
          value: 0,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          radioColor: GFColors.SUCCESS,
        ),
        GFRadio(
          size: GFSize.MEDIUM,
          value: 1,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          radioColor: GFColors.SUCCESS,
        ),
        GFRadio(
          size: GFSize.SMALL,
          value: 2,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          radioColor: GFColors.SUCCESS,
        ),
        GFRadio(
          size: 20,
          value: 3,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          radioColor: GFColors.SUCCESS,
        )
      ],
    )),
```

### Square Radio Button

![Square Radio Button](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Square_radio_buttons_UOSD9OSpo_.png)

```dart
int groupValue = 0;

GFCard(
    content: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        GFRadio(
          type: GFRadioType.square,
          size: GFSize.LARGE,
          value: 4,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          radioColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.square,
          size: GFSize.MEDIUM,
          value: 5,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          radioColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.square,
          size: GFSize.SMALL,
          value: 6,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          radioColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.square,
          size: 20,
          value: 7,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          radioColor: GFColors.SUCCESS,
          activeIcon: Icon(Icons.close),
        )
      ],
    )),
```

### Custom Radio Button Type 1

![Custom Radio Button Type 1](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Custom_radio_1_5pRZCct_LM.png)

```dart
int groupValue = 0;

GFCard(
    content: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        GFRadio(
            type: GFRadioType.blunt,
            size: GFSize.LARGE,
            activeBorderColor: GFColors.SUCCESS,
            value: 8,
            groupValue: groupValue,
            onChanged: (value) {
              setState(() {
                groupValue = value;
              });
            },
            inactiveIcon: null,
            customBgColor: GFColors.SUCCESS),
        GFRadio(
          type: GFRadioType.blunt,
          size: GFSize.MEDIUM,
          value: 9,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          customBgColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: GFSize.SMALL,
          value: 10,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          customBgColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: 25,
          value: 11,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          customBgColor: GFColors.SUCCESS,
        )
      ],
    )),
```

### Custom Radio Button Type 2

![Custom Radio Button Type 2](https://ik.imagekit.io/ionicfirebaseapp/getwidget/docs/tr:w-800,f-auto/Custom_radio_2_fSkHHSP4Wa.png)

```dart
int groupValue = 0;

GFCard(
    content: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        GFRadio(
          type: GFRadioType.custom,
          activeIcon: Icon(Icons.check),
          radioColor: Colors.red,
          size: GFSize.LARGE,
          activeBgColor: GFColors.SUCCESS,
          inactiveBorderColor: GFColors.DARK,
          activeBorderColor: GFColors.SUCCESS,
          value: 12,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
        ),
        GFRadio(
          type: GFRadioType.custom,
          activeIcon: Icon(Icons.sentiment_satisfied),
          size: GFSize.MEDIUM,
          value: 13,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: Icon(Icons.sentiment_dissatisfied),
          customBgColor: GFColors.WARNING,
          activeBgColor: GFColors.SUCCESS,
          activeBorderColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: GFSize.SMALL,
          value: 14,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          customBgColor: GFColors.SUCCESS,
          activeBorderColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: 25,
          value: 15,
          groupValue: groupValue,
          onChanged: (value) {
            setState(() {
              groupValue = value;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          customBgColor: GFColors.SUCCESS,
        ),
      ],
    )),
```

### Custom Properties

Look and feel of the **GFRadio** can be customized using the GFRadio properties.

|  |  |
| :--- | :--- |
| **type** | type of \[GFRadioType\] which is of four type is basic, sqaure, circular and custom |
| **size** | type of \[double\] which is GFSize ie, small, medium and large and can use any double value |
| **radioColor** | type pf \[Color\] used to change the checkcolor when the radio button is active |
| **activeBgColor** | type of \[Color\] used to change the backgroundColor of the active radio button |
| **inactiveBgColor** | type of \[Color\] used to change the backgroundColor of the inactive radio button |
| **activeBorderColor** | type of \[Color\] used to change the border color of the active radio button |
| **inactiveBorderColor** | type of \[Color\] used to change the border color of the inactive radio button |
| **onChanged** | Called when the user checks or unchecks the radio button |
| **activeIcon** | type of Widget used to change the  radio button's active icon |
| **inactiveIcon** | type of \[Widget\] used to change the  radio button's inactive icon |
| **customBgColor** | type of \[Color\] used to change the background color of the custom active  radio button only |
| **autofocus** | on true state this widget will be selected as the initial focus when no other node in its scope is currently focused |
| **focusNode** | an optional focus node to use as the focus node for this widget. |
| **value** | The value represented by this radio button. |
| **groupValue** | The currently selected value for a group of radio buttons. Radio button is considered selected if its \[value\] matches the \[groupValue\]. |
| **toggleable** | sets the radio value |



