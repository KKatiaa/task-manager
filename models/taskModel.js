import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    role: {
        type: String,
        default: 'user'
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;