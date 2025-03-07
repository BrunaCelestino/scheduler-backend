const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  activity: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  solved: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pendente', 'concluído', 'recusado']
  }
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);