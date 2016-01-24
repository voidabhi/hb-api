## HB-API

Unofficial node wrapper for the [Hummingbird](http://hummingbird.me/) API

### Installation

`npm install hb-api`

### Dependencies

`request`

### Getting Started

Get your HummingBird application key from [here](https://hummingbird.me/apps/mine)

```javascript

// Requiring the module
var HB = require("hb-api"),
    hb = new HB('YOUR_HUMMINGBIRD_APPLICATION_KEY');
```

### Get Anime By ID

```javascript

// Fetching animes by id
hb.animeById('ANIME_ID', function (err, anime) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(anime);
});
```

### Get Anime By Anime List ID

```javascript

// Fetching animes by list id
hb.animeByMalId('MY_ANIME_LIST_ID', function (err, anime) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(anime);
});
```

### Contribution

Open to issues and Feel free to send a pull request for new features or fixing existing issue!

### License

```
The MIT License (MIT)

Copyright (c) 2015 Abhijeet Mohan - https://github.com/voidabhi/hb-api

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


