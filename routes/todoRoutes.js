import express from 'express'
import { requireSignIn } from '../middleweres/authMiddlewere.js';
import { getAllTodo, toggoleTodoDone, saveTodo, updateTodo, deleteTodo } from '../controller/todoController.js'
const router = express.Router()

router.post('/save-todo', requireSignIn, saveTodo)
router.get('/get-todos', requireSignIn, getAllTodo)
router.get('/todo/:id', requireSignIn, toggoleTodoDone)
router.put('/update-todo/:id', requireSignIn, updateTodo)
router.delete('/delete-todo/:id', requireSignIn, deleteTodo)



export default router;