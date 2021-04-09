const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.get('/logout', authController.logout);
router.post('/login', authController.login_post);
router.get('/forgot-password',authController.forgotpass_get );
router.post('/forgot-password',authController.forgotpass_post );
router.get('/change-password/:token',authController.changepass_get );
router.post('/change-password',authController.changepass_post );
module.exports = router;