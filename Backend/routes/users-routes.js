import express from "express";
import { AddToFavorite, DeleteFavourite, GetFavourite } from "../controlers/users-controllers.js";

const router = express.Router();

router.post('/favourite/:pid', AddToFavorite);
router.get('/favourite', GetFavourite);
router.delete('/favourite/:pid', DeleteFavourite);


export default router;