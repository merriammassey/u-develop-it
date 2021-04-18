const express = require('express');
const router = express.Router();
router.use(require('./voteRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./partyRoutes'));
//const apiRoutes = require('./routes/apiRoutes/');
router.use(require('./candidateRoutes'));

module.exports = router;