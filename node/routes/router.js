import {Router} from "express";
import {getSlug} from "../controllers/qr.controller.js";

const router = Router();

router.get('/', function(req, res) {
  res.status(200).send({
    title: 'Home',
    message: 'home page'
  });
});

router.get('/:slug', getSlug);

export default router;
