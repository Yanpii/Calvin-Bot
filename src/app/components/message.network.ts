import { Router, Request, Response } from "express";
import express from "express";
import { Message } from '../models/message.model';
import messageController from "./message.controller";
import responseModule from "../modules/response.module";

const router: Router = express.Router();

router.get('/search', async (req: Request, res: Response) => {
  const startDate = req.params['startDate'];
  const endDate = req.params['endDate'];
  
  try {
    const result: any[] = await messageController.searchMessages(startDate, endDate);
    responseModule.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    responseModule.error(req, res, 'Invalid information', 500);
  }
});


router.post('/', async (req: Request, res: Response) => {

  const Message:  Message = req.body;

  try {
    const result: Message = await messageController.addMessage(Message);
    responseModule.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    responseModule.error(req, res, 'Invalid information', 500);
  }
});

export default router;
