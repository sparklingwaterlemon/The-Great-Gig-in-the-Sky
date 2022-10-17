const express = require('express');
const router = express.Router();
const forumCtrl = require("../../controllers/api/forum");

const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post('/add',ensureLoggedIn, forumCtrl.addPostToList);



module.exports = router;
