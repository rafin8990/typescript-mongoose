import express from 'express'
import { createUser, getUser } from './user.controller'

const router=express.Router()

router.get('/',getUser);
router.post('/createUser', createUser)

export default router;