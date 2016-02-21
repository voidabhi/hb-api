var request = require('request'),
    BASE_URL = 'https://hummingbird.me/api/v2',
    ANIME_ID_URL = BASE_URL+'/anime/{id}',
    ANIME_MALID_URL = BASE_URL+'/anime/myanimelist:{malid}';

function _res(callback) {
    return function(error, response, body) {
        if (error)
            return callback(error);
        if (response.statusCode == 200) {
            try {
                var data = JSON.parse(body);
            } catch (err) {
                callback(err);
            }
			if(callback.length==3 && data.anime && data.linked.episodes)
				return callback(null, data.anime,data.linked.episodes);
			else if(callback.length==4 && data.anime && data.linked.episodes && data.linked.gallery_images)
				return callback(null, data.anime,data.linked.episodes,data.linked.gallery_images);
			else	
				return callback(null,data);
        }else if(response.statusCode== 404){
			return callback(null,[]);
		}else {
            try {
                error = JSON.parse(body);
            } catch (err) {
                callback(err);
            }		
		}
        return callback(error);
    }
}

function HB(key) {
    if (!key)
        throw new ReferenceError('API key is not defined');
    this.key = key;
};

// Get anime by id
HB.prototype.animeById = function getAnimeById(id, callback) {
    var options = {
        url: ANIME_ID_URL.replace('{id}', id),
        headers: {
            'X-Client-Id': this.key
        }
    };
    request(options, _res(callback));
};

// Get anime by malid
HB.prototype.animeByMalId = function getAnimeByMalId(malid, callback) {
    var options = {
        url: ANIME_ID_URL.replace('{malid}', malid),
        headers: {
            'X-Client-Id': this.key
        }
    };
    request(options, _res(callback));
};

module.exports = HB;
