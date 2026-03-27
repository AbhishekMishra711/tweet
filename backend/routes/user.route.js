import express from 'express'
import { protectedRoute } from '../middlewares/auth.middleware.js'
import { getUserProfile,followUnfollowUser,getUserSuggestions,updateUserProfile } from '../controllers/user.controller.js'
const router = express.Router()

router.get('/profile/:username',protectedRoute,getUserProfile)
router.get('/suggestions',protectedRoute,getUserSuggestions)
router.post('/follow/:id',protectedRoute,followUnfollowUser)
router.post('/update',protectedRoute,updateUserProfile)


export default router