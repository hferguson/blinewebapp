const express = require('express');
const router = express.Router();

router.get('/api/ping/heartbeat', async (req, res) => {
    const now = new Date();
    const payload = {"datestamp": now};
    res.status(200).send(payload);
});

module.exports = router;