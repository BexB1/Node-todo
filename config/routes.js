var router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('index', {Title: "My Awesome Website"});
})

module.exports = router;