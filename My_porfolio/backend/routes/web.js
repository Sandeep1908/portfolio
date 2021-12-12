import portfolio from "../controller/controller.js";
import express from 'express';

const router=express.Router();
router.get('/',portfolio.home);
router.get('/detail/:id',portfolio.get_data_id);

export default router;