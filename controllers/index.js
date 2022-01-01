
const router = require('express').Router();
const apiRoutes = require('./api');

//for api routes/reqs
router.use('/api', apiRoutes);

//for any other requests/not defined
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;