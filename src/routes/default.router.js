import express from 'express';
const router = express.Router ();
import DefaultController from '../controllers/default.controller.js';


router.get ('/', DefaultController.welcome);


router.get ('/', DefaultController.welcome);
router.get ('/users', DefaultController.fetchUser);
router.post ('/users', DefaultController.createUser);

const defaultRouter = router; 
export default defaultRouter;
