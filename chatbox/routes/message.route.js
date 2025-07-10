import { Router } from "express";
import {deleteMessage, message} from "../controllers/message.controller.js";

const router=Router();

router.route('/chatbox/:sender/:receiver').get(message);
router.route('/chatbox/delete').get(deleteMessage);

export default router;