import { Router } from 'express';
import userAuthController from '../controllers/auth.controller';
import passport from 'passport';

const router = Router();

router.post('/auth/register', userAuthController.registerUser);
router.post('/auth/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
}), userAuthController.loginUser);
router.get('/logout', userAuthController.logoutUser);


export default router;