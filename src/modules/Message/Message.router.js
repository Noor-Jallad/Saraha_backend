import {Router} from 'express';
const router= Router();
import * as messageController from './Controller/Message.controller.js';
import { auth } from './../../MiddleWare/auth.middleware.js';

router.get("/getMessage",messageController.getMessage);
router.post('/:receiverId',messageController.sendMessage);
router.get("/", auth ,messageController.getMessages);
router.delete('/:messageId',auth,messageController.deleteMessage);
export default router;