import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  updated: {
    type: Boolean,
    required: true,
    default: false,
  }, 
  role: {
    type: String,
    requried: true,
    default: "CA",
  },
  status: {
    type: String,
    requried: true,
    default: "PENDING"
  },
})

export default mongoose.model("User", UserSchema)