const express = require('express');
const router = express.Router();







// get entire database
router.get('/test', function(req, res) {
	res.send("got it!")
})


// Get all highlight from particular neighborhood for particular user


module.exports = router