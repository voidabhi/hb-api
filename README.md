# HB-API
Wrapper for the [Hummingbird API](http://hummingbird.me/)

## Installation

`npm install hb-api`

## Getting Started

Get your hummingbird application key from [here](https://hummingbird.me/apps/mine)

```
var HB = require("hb-api");
var hb = new HB('YOUR_HUMMINGBIRD_APPLICATION_KEY');
```

## Get Anime By ID

```
// Fetching animes by id

hb.animeById('ANIME_ID',function(err,anime){
	if(err){
		console.error(err);
		return;
	}
	console.log(anime);
});
```

## Get Anime By Anime List ID

```
hb.animeByMalId('MY_ANIME_LIST_ID',function(err,anime){
	if(err){
		console.error(err);
		return;
	}
	console.log(anime);
});
```

## Contribution

Feel free to send a pull request!


