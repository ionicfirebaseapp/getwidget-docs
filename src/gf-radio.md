---
description: >-
  GF Radio allows the user to choose only one of a predefined set of mutually
  exclusive options.
---

# GF Radio

## GF Radio Info

### Usage

Below code gives the basic GFRadio

```text
int groupValue = 0;

GFRadio(
  size: GFSize.SMALL,
  value: 2,
  groupValue: groupValue,
  onChanged: (val) {
    setState(() {
      groupValue = val;
    });
  },
  inactiveIcon: null,
  activeBorderColor: GFColors.SUCCESS,
  radioColor: GFColors.SUCCESS,
),
```

### Basic Radio Button

```text
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
              groupValue = val;
            });
          },
          inactiveIcon: null,
          radioColor: GFColors.SUCCESS,
        ),
        GFRadio(
          size: GFSize.MEDIUM,
          value: 1,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
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
          onChanged: (val) {
            setState(() {
              groupValue = val;
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
          onChanged: (val) {
            setState(() {
              groupValue = val;
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

```text
GFCard(
    content: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        GFRadio(
          type: GFRadioType.square,
          size: GFSize.LARGE,
          value: 4,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
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
          onChanged: (val) {
            setState(() {
              groupValue = val;
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
          onChanged: (val) {
            setState(() {
              groupValue = val;
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
          onChanged: (val) {
            setState(() {
              groupValue = val;
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

```text
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
            onChanged: (val) {
              setState(() {
                groupValue = val;
              });
            },
            inactiveIcon: null,
            custombgColor: GFColors.SUCCESS),
        GFRadio(
          type: GFRadioType.blunt,
          size: GFSize.MEDIUM,
          value: 9,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          custombgColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: GFSize.SMALL,
          value: 10,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          custombgColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: 25,
          value: 11,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          custombgColor: GFColors.SUCCESS,
        )
      ],
    )),
```

### Custom Radio Button Type 2

```text
GFCard(
    content: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        GFRadio(
          type: GFRadioType.custom,
          activeIcon: Icon(Icons.check),
          radioColor: Colors.red,
          size: GFSize.LARGE,
          activebgColor: GFColors.SUCCESS,
          inactiveBorderColor: GFColors.DARK,
          activeBorderColor: GFColors.SUCCESS,
          value: 12,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
            });
          },
        ),
        GFRadio(
          type: GFRadioType.custom,
          activeIcon: Icon(Icons.sentiment_satisfied),
          size: GFSize.MEDIUM,
          value: 13,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
            });
          },
          inactiveIcon: Icon(Icons.sentiment_dissatisfied),
          custombgColor: GFColors.WARNING,
          activebgColor: GFColors.SUCCESS,
          activeBorderColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: GFSize.SMALL,
          value: 14,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
            });
          },
          inactiveIcon: null,
          custombgColor: GFColors.SUCCESS,
          activeBorderColor: GFColors.SUCCESS,
        ),
        GFRadio(
          type: GFRadioType.blunt,
          size: 25,
          value: 15,
          groupValue: groupValue,
          onChanged: (val) {
            setState(() {
              groupValue = val;
            });
          },
          inactiveIcon: null,
          activeBorderColor: GFColors.SUCCESS,
          custombgColor: GFColors.SUCCESS,
        ),
      ],
    )),
```

### Custom Properties

|  |  |
| :--- | :--- |
| **type** | type of \[GFRadioType\] which is of four type is basic, sqaure, circular and custom |
| **size** | type of \[double\] which is GFSize ie, small, medium and large and can use any double value |
| **radioColor** | type pf \[Color\] used to change the checkcolor when the radio button is active |
| **activebgColor** | type of \[Color\] used to change the backgroundColor of the active radio button |
| **inactivebgColor** | type of \[Color\] used to change the backgroundColor of the inactive radio button |
| **activeBorderColor** | type of \[Color\] used to change the border color of the active radio button |
| **inactiveBorderColor** | type of \[Color\] used to change the border color of the inactive radio button |
| **onChanged** | Called when the user checks or unchecks the radio button |
| **activeIcon** | type of Widget used to change the  radio button's active icon |
| **inactiveIcon** | type of \[Widget\] used to change the  radio button's inactive icon |
| **custombgColor** | type of \[Color\] used to change the background color of the custom active  radio button only |
| **autofocus** | on true state this widget will be selected as the initial focus when no other node in its scope is currently focused |
| **focusNode** | an optional focus node to use as the focus node for this widget. |
| **value** | The value represented by this radio button. |
| **groupValue** | The currently selected value for a group of radio buttons. Radio button is considered selected if its \[value\] matches the \[groupValue\]. |
| **toggleable** | sets the radio value |



