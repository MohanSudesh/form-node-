import mongoose from "mongoose"

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deadline: {
      type: String,
      required: true
  },
  points: {
      type: String,
      required: true
  }
})

export default mongoose.model("Task", TaskSchema)