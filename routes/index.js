const homeRoutes = require('./home_routes');
const apiRoutes = require('./api_routes');

const router = require('express').Router();

router.use('/api', apiRoutes);
router.use(homeRoutes);

module.exports = router;