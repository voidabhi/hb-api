var request = require('request'),
    ANIME_ID_URL = 'https://hummingbird.me/api/v2/anime/{id}',
    ANIME_MALID_URL = 'https://hummingbird.me/api/v2/anime/myanimelist:{malid}';

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
            return callback(null, data);
        }
        return callback(JSON.parse(body));
    }
}

function HB(key) {
    if (!key)
        throw new ReferenceError('API key is not defined');
    this.key = key;
};

HB.prototype.animeById = function getAnimeById(id, callback) {
    var options = {
        url: ANIME_ID_URL.replace('{id}', id),
        headers: {
            'X-Client-Id': this.key
        }
    };
    request(options, _res(callback));
};

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
