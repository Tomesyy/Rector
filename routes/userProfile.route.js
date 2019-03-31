import { Router } from 'express';

// userProfile controller
import userProfileController from '../controllers/userProfile.controller';

const router = Router();

router.get('/', userProfileController.fetchAllProfiles);
router.post('/', userProfileController.addProfile);
router.get('/:id', userProfileController.findProfile);
router.put('/:id', userProfileController.updateProfile);
router.delete('/:id', userProfileController.deleteProfile);

export default router;