---
description: GFCard has slightly rounded corners and a shodow
---

# GF Card

### Usage

Below code gives the basic GFCard

```dart
  GFCard(
   boxFit: BoxFit.cover,
   image: Image.asset('lib/assets/images/card.png',)
    title: GFListTile(
          title: Text('Card Title'),
          icon: GFIconButton(
           onPressed: null,
           icon: GestureDetector(
            onTap: () {
                                    setState(() {
                                      fav = !fav;
                                    });
                                  },
                                  child: fav
                                      ? Icon(
                                          Icons.favorite,
                                          color: getGFColor(GFColor.danger),
                                        )
                                      : Icon(Icons.favorite_border),
                                ),
                                type: GFType.transparent,
                              ),
                            ),
                            content: Text(
                              "Some quick example text to build on the card",
                            ),
                            buttonBar: GFButtonBar(
                              alignment: MainAxisAlignment.start,
                              children: <Widget>[
                                GFButton(
                                  onPressed: () {},
                                  text: 'Read More',
                                ),
                              ],
                            ),
                          ),
```



