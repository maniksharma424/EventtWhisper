import express from 'express'
import { deleteEvent, getEventDetails, registerEvent, updateEvent } from '../controllers/eventController.js'
import { protect } from '../middleware/authMiddleWare.js'

const router = express.Router()

router.route('/events').get(protect,getEventDetails).put(protect,registerEvent)
router.route('/events').delete(protect,deleteEvent)
router.route('/events/update').put(protect,updateEvent)


export default router