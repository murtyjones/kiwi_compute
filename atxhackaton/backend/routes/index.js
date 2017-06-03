var express = require('express');
var router = express.Router();
var Profile = require('../models/profile');
var TextSave = require('../models/text');

var bcryptaspromised = require('bcrypt-as-promised');

/* GET home page. */




function postPass(hashedpass, sendusername, res){

	console.log("POSTPASS");

	console.log('hashedpass ', hashedpass);
	console.log('sendusername ', sendusername);



	var newProfile = new Profile({
    	password: hashedpass,
    	username: sendusername,
	});


  newProfile.save(function(err, post){
    if(err){
      res.status(500).send('500error');
    }else{
      res.status(200).json('profileposted');
    }
  });


}



router.post('/signup', function(req,res,next){

	var foundmatch = false;
	var loopcounter = 0;
	var postslength = 0;


  console.log('inside signup on backend');

	var promise = new Promise(function(resolve, reject){
		Profile.find({}, function(err,posts){
      console.log('inside profile loop in login promise. posts: ', posts);
			postslength = posts.length;
			posts.forEach(function(post){
				loopcounter+=1;
				if (post.username === req.body.username){
					foundmatch = true;
          resolve(false);
					reject(true);
				}else if(loopcounter===postslength && foundmatch===false && loopcounter != 0){
					resolve(true);
				}
			});
      if (postslength === 0){
        resolve(true);
      }
		});


	});


	// promise.then(function(resolve, reject){
  //   console.log('inside promise login resolve first line. resolve: ', resolve);
	// 	if(resolve){
  //     console.log('inside the resolve true in the promise resolution in signup');
  //     const saltRounds = 10;
  //     // console.log('this is my password ', req.body.password);
	// 		bcryptaspromised.hash(req.body.password, 10)
	// 			.then(function(hash,err){
  //         console.log('right before postpass, hash ', hash, ' username ', req.body.username, ' res ', res);
	// 				postPass(hash, req.body.username, res);
	// 				res.send('statusok');
	// 			});
	// 	}else if (!resolve){
  //     console.log('inside promise login reject first line. reject: ', reject);
  // 			res.send('statusreject')
  //   }
	// })
  // .catch(function(){
  //   console.log('inside the catch in signup===something went wrong');
  //   res.send('statusreject');
  // });

  promise.then(function(resolve){
      console.log('inside promise login resolve first line. resolve: ', resolve);
  		if(resolve){
  			bcryptaspromised.hash(req.body.password, 10)
  				.then(function(hash,err){
            console.log('right before postpass, hash ', hash, ' username ', req.body.username, ' res ', res);
  					postPass(hash, req.body.username, res);
  					//res.json({'result': 'resolve'});
  				});
  		}else{
        	res.send('statusreject')
      }

  	}, function(reject){
      console.log('inside promise login reject first line. reject: ', reject);
  		if(reject){
  			res.send('statusreject')
  		}
  	});





});




router.post('/login', function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;
	var redirectistrue = false;
	var numbernomatches = 0;


  console.log('inside login on backend');


		Profile.find({}, function(err,posts){
      console.log('inside profileSchema search');
			postslength = posts.length;
			posts.forEach(function(post){

				console.log("post ", post);
				console.log("req.body.username ", req.body.username, " req.body.password ", req.body.password);

				if (post.username == req.body.username){
					bcryptaspromised.compare(req.body.password, post.password)
							.then(function(result){
									res.send('passwordsmatch');
							})
							.catch(bcryptaspromised.MISMATCH_ERROR, function(result){
								  res.send('passwordsdontmatch');
							});
				}else{
					numbernomatches += 1;
				}

			});

			if (numbernomatches == postslength){
				res.json('passwordsdontmatch');
			}
		});

});


router.post('/savetext', function(req,res,next){
  var username = req.body.username;
  var password = req.body.password;
  var redirectistrue = false;
  var numbernomatches = 0;


  console.log('inside login on backend');


    Profile.find({}, function(err,posts){
      console.log('inside profileSchema search');
      postslength = posts.length;
      posts.forEach(function(post){

        console.log("post ", post);
        console.log("req.body.username ", req.body.username, " req.body.password ", req.body.password);

        if (post.username == req.body.username){
          bcryptaspromised.compare(req.body.password, post.password)
              .then(function(result){

                var postid = post._id;

                var newText = new TextSave({
                    postid: postid,
                    text: req.body.text
                });


                newText.save(function(err, post){
                  if(err){
                    res.status(500).send('500error');
                  }else{
                    res.status(200).json('textposted');
                  }
                });




              })
              .catch(bcryptaspromised.MISMATCH_ERROR, function(result){
                  console.log('bcrypt catch MISMATCH_ERROR');
              });
        }else{
          numbernomatches += 1;
        }

      });


    });
})

router.post('/retrievetext', function(req,res,next){

  var username = req.body.username;
  var password = req.body.password;
  var redirectistrue = false;
  var numbernomatches = 0;
  var returnTexts = [];


  console.log('inside retrievetext');

  var promise = new Promise(function(resolve, reject){

    Profile.find({}, function(err,posts){
      console.log('inside profileSchema search (retrievetext)');
      var loopcounter = 0;
      posts.forEach(function(post){
        // console.log("post ", post);
        // console.log("req.body.username ", req.body.username, " req.body.password ", req.body.password);
        if (post.username == req.body.username){
          bcryptaspromised.compare(req.body.password, post.password)
              .then(function(result){
                console.log('inside the bcryptaspromised checker "OK" in retrievetext')
                var postid = post._id;
                TextSave.find({}, function(err,posts){
                  postslength = posts.length;
                  posts.forEach(function(post){
                    console.log('***********************************************************************************************************');
                    console.log('inside the TextSave')
                    console.log('the value of the post.postid is', post.postid, 'and the value of the postid is ', postid);
                    console.log('the value of the post is', post);
                    console.log('the value of the post length is ', postslength, ' and the value of the loopcounter is ', loopcounter);
                    console.log('***********************************************************************************************************');
                    if(post.postid==postid){
                      console.log('inside the postid=postid');
                      returnTexts.push(post.text);
                    }
                    if(loopcounter===(postslength-1)){
                      resolve(true);
                    }
                    loopcounter++;
                  })
                })
              })
              .catch(bcryptaspromised.MISMATCH_ERROR, function(result){
                  console.log('bcrypt catch MISMATCH_ERROR');
              });
        }else{
          numbernomatches += 1;
        }
      });
    });

  });

    promise.then(function(resolve){
      console.log('in promise.then of retrievetext and the value of the resolve is ', true);
      if (resolve){
        res.json({"returnTexts": returnTexts})
      }else{
        res.send({'returnTexts': "you have no texts"})
      }
    });

})




module.exports = router;
