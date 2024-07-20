import express from 'express';
import { getPostsBySearch, getPost, getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
const router = express.Router();

import auth from '../middleware/auth.js';

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.post('/:user', createPost);
router.patch('/:id', updatePost);
router.delete('/:id/:user', deletePost);
router.patch('/:user/likePost/:id', likePost);
router.get('/:id', getPost);

export default router;