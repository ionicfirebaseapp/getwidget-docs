---
sidebarDepth: 2
description: >-
  GFRating is a row of star icon, one can touch or drag the row of icons to set
  the rating.
---

# GF Rating

![GF Rating](https://ik.imagekit.io/ionicfirebaseapp/docs/tr:dpr-auto,tr:w-auto/Ratings_2x_u92JHlj0d.png)



### Usage

The simple code of a basic **GF Rating** is as shown below.

```dart
double _rating = 3;

GFRating(
  value: _rating,
  onChanged: (value) {
    setState(() {
      _rating = value;
    });
  },
),
```

![Flutter Rating](./assets/ratings-2x.png)

If `showTextForm` true, it displays the GF Rating bar with text field, that takes user input to show the rating. The simple code of rating bar with textform is shown below.

```dart
final _ratingController = TextEditingController();
double _userRating = 4.5;

@override
void initState() {
  super.initState();
  _ratingController.text = '4.5';
}

GFRating(
  value: _userRating,
  showTextForm: true,
  controller: _ratingController,
  suffixIcon: GFButton(
    type: GFButtonType.transparent,
    onPressed: () {
      setState(() {
        _userRating = double.parse(_ratingController.text ?? '0.0');
      });
    },
    child: const Text('Rate'),
  ),
),
```

Look and feel of the **GF Rating** can be customized using the GF Rating properties.

### Custom Properties

| Name | Description |
| :--- | :--- |
| **itemCount** | defines total number of rating items |
| **color** | defines the color of items |
| **borderColor** | defines the border color of \[halfFilledIcon\] |
| **size** | defines the size of items. GFSize can be used for size variations like small. medium. large |
| **allowHalfRating** | if true, allow half rating of items. Default it will be in true state |
| **filledIcon** | defines the items when filled |
| **halfFilledIcon** | defines the items when half-filled |
| **defaultIcon** | defines the default items, when having filledIcon and halfFilledIcon |
| **spacing** | defines the space between items |
| **value** | defines the rating value |
| **onChanged** | return current rating whenever rating is updated |
| **showTextForm** | if true, shows rating \[TextFormField\] with the rating bar, that allows the user input to show rating |
| **suffixIcon** | defines the design and funtion of rating \[TextFormField\]'s suffix icon |
| **controller** | controls the \[TextField\] Controller of rating \[TextFormField\] |
| **inputDecorations** | defines the \[InputDecoration\] of rating \[TextFormField\] |
| **margin** | defines the margin of rating \[TextFormField\] |
| **padding** | defines the padding of rating \[TextFormField\] |



