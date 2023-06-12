import {Router} from 'express';
import * as UserController from './Controller/User.controller.js';
import { auth } from '../../MiddleWare/auth.middleware.js';
import fileUpload, { HME } from '../../Services/multer.js';
const router= Router();
router.get('/',UserController.getUsers);
router.get('/profile',auth,UserController.profile);
router.patch('/profilePic',auth,fileUpload().single('image'),HME,UserController.profilePic);
export default router;