import Todo from "../modals/todoModel.js";


export const saveTodo = async (req, res) => {
    try {
        const todo = await Todo.create({
            todo: req.body.todo,
            userId: req.user._id
        })
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error while saving todo' })
    }
}

export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.user._id }).sort({ 'createdAt': -1 })
        return res.status(200).json(todos)
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error while saving todo' })
    }
}

export const toggoleTodoDone = async (req, res) => {
    try {
        const todoRef = await Todo.findById(req.params.id)
        if (todoRef) {
            const todo = await Todo.findByIdAndUpdate(req.params.id, { done: !todoRef.done })
            return res.status(200).json(todo)
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error while toggle todo' })
    }
}

export const updateTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, { todo: req.body.todo })
        const todo = await Todo.findById(req.params.id)
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error while toggle todo' })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error while toggle todo' })
    }
}