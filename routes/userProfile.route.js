import { Router } from 'express';

// userProfile controller
import userProfileController from '../controllers/userProfile.controller';
//middleware
import middleware from '../middlewares/index.middleware';

const router = Router();

router.get('/', userProfileController.fetchAllProfiles);
router.post('/', middleware.isLoggedIn, userProfileController.addProfile);
router.get('/:id', userProfileController.findProfile);
router.put('/:id', middleware.checkProfileOwnership, userProfileController.updateProfile);
router.delete('/:id', middleware.checkProfileOwnership, userProfileController.deleteProfile);

export default router;