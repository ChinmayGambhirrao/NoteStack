import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, default: 'Untitled'},
    content: {type: String, default: ''},
    parentNoteId: {type: mongoose.Schema.Types.ObjectId, ref: 'Note', default: null},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

noteSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
}) 

export const Note = mongoose.model('Note', noteSchema);