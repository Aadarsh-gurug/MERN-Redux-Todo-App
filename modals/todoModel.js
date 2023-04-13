import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Todo = mongoose.model('Todo', todoSchema)

export default Todo;