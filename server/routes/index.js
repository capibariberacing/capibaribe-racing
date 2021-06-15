const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const postController = require('../controllers/postController.js');
const bannerController = require('../controllers/bannerController')
const backersController = require('../controllers/backersController.js');




//const Post = keystone.list('Posts');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/banner', bannerController.getbannerController);
  app.get('/api/posts', postController.getPost);
  app.get('/api/backers', backersController.getBackers);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};
