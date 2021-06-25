const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const aboutUsController = require('../controllers/aboutUsControllers')
const aboutFormulaSaeController = require('../controllers/aboutFomulaSaeController.js');
const socialFooterController = require('../controllers/socialFooterController.js');
const bannerController = require('../controllers/bannerController');
const aboutCarController = require('../controllers/aboutCarController.js');
const backersController = require('../controllers/backersController.js');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('aboutUs', aboutUsController.getaboutUsController);
  app.get('about-formula-sae', aboutFormulaSaeController.getAboutFormulaSae);
  app.get('banner', bannerController.getbannerController);
  app.get('social-networks', socialFooterController.getSocialNetworks);
  app.get('about-car', aboutCarController.getAboutCar);
  app.get('backers', backersController.getBackers);

  app.get('*', (req, res) => {
		res.redirect('/');
	});

};
