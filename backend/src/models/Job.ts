import mongoose from 'mongoose'

const Job = new mongoose.Schema({
    title: String,
    'daily-hours': String,
    deadline: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    value: Number,
    inProgress: Boolean,
})

export default mongoose.model('Job', Job)
