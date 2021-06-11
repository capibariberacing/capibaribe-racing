const keystone = require('keystone');

const backers = keystone.list('sobre-nós');

module.exports = {

  getaboutUsController (req, res) {
    aboutUs.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
     res.status(200).json(items)
    });
  }
}
