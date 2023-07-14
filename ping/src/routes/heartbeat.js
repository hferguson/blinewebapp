const express = require('express');
const router = express.Router();

router.get('/api/ping/heartbeat', async (req, res) => {

    res.status(200).send("Heartbeat successful");
});

module.exports = router;