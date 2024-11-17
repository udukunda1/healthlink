import express from "express";
import { AddToFavorite, DeleteFavourite, GetFavourite, Login, Rate, SignUp } from "../controlers/users-controllers.js";
import checkAuth from "../middleware/check-auth.js";
import fileUpload from "../middleware/file-upload.js";

const router = express.Router();

router.post('/signup', fileUpload.single('picture'), SignUp);
router.post('/login', Login);
router.use(checkAuth);

router.post('/favourite/:pid', AddToFavorite);
router.get('/favourite', GetFavourite);
router.delete('/favourite/:pid', DeleteFavourite);
router.post('/rate/:pid', Rate);


export default router;