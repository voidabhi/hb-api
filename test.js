var should = require('chai').should();
	
describe('Get Anime By Id', function () {

  beforeEach(function (done) {
	var hb = new require('./index')('YOUR_API_KEY');
	hb.animeById('hunter-x-hunter-2011',function(err,data){
		if(err) return done(err);
		anime = data.anime;
		done();
	});	
  });

  it('should return an id', function () {
	anime.id.should.equal(6448);
  });
  
  it('should return titles', function () {
	anime.titles.canonical.should.equal('Hunter x Hunter (2011)');
  });
  
  it('should return slug', function () {
    anime.slug.should.equal('hunter-x-hunter-2011');
  });
  
  it('should return youtube video id', function () {
    anime.youtube_video_id.should.equal('5Vy0Hzkxndc');
  });  


});


