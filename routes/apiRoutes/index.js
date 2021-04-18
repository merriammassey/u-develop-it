const express = require('express');
router.use(require('./voterRoutes'));
const router = express.Router();
router.use(require('./partyRoutes'));
const apiRoutes = require('./routes/apiRoutes');


router.use(require('./candidateRoutes'));

module.exports = router;