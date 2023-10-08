import { Router } from "express";
import { ctrlCreatePost, ctrlDeletPost, ctrlGetPost, ctrlUpdatePost} from "../controllers/post.controllers.js";


const postRouter = Router();



postRouter.get('/api/post', ctrlGetPost)

postRouter.post('/api/post', ctrlCreatePost)

postRouter.put('/api/post/:id', ctrlUpdatePost)

postRouter.delete('/api/post/:id', ctrlDeletPost)

export {postRouter}