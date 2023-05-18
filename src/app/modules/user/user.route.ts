import express from 'express'
import { createUser, getOneUser, getUser } from './user.controller'

const router=express.Router()

router.get('/',getUser);
router.get('/:id', getOneUser);
router.post('/createUser', createUser);

export default router;