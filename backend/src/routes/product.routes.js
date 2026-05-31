import express from express;
import { authenticateSeller } from '../middlewares/auth.middlewares.js';
import multer from 'multer';


const upload = multer({{
 storage:multer.memoryStorage()
 limits:{
  fileSize: 5 * 1024 * 1024//5mb
 }
}})






const router = express.router();

router.post('/', authenticateSeller, createProduct)

export default router;