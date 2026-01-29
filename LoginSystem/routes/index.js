var express = require('express');
var router = express.Router();

var database = require('../database.js');

/* GET home page */
router.get('/', function(request, response) {
  response.render('index', { 
    title: 'Express',
    session: request.session 
  });
});

router.post('/login', function(request, response) {

  console.log(request.body); 

  const user_email_address = request.body.user_email_address;
  const user_password = request.body.user_password;

  if (user_email_address && user_password) {

    const query = `
      SELECT * FROM user_login
      WHERE user_email_address = ?
    `;

    database.query(query, [user_email_address], function(error, data) {

      if (error) {
        return response.send('Database error');
      }

      if (data.length > 0) {
        if (data[0].user_password === user_password) {
          request.session.user_id = data[0].user_id;
          response.redirect('/');
        } else {
          response.send('Password salah');
        }
      } else {
        response.send('Email salah');
      }

    });

  } else {
    response.send('Email dan password wajib diisi');
  }
});


router.get('/logout', function(request, response) {
  request.session.destroy();
  response.redirect('/');
});

module.exports = router;
