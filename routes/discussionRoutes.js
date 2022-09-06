//import { discussionSchema } from './discussionModel'

//const Station = mongoose.model('Station', StationSchema, 'FEMA_stations')

const express = require('express');
const router = express.Router();

const {getAllDiscussions, postDiscussion, getDiscussionByID} = require("../controllers/discussionController");

router
.route('/')
.get(getAllDiscussions)

router.route('/post/')
.post(postDiscussion)

router.route('/:id')
.get(getDiscussionByID)

module.exports = router;