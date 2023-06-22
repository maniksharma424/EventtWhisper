import express from 'express'
import { deleteEvent, getEventDetails, registerEvent, updateEvent } from '../controllers/eventController.js'
import { protect } from '../middleware/authMiddleWare.js'

const router = express.Router()

router.route('/events').get(getEventDetails).put(registerEvent)
router.route('/events').delete(deleteEvent)
router.route('/events/update').put(updateEvent)


export default router