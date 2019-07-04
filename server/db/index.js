import mongoose from "mongoose"

mongoose
.connect('mongodb://localhost:27017/ca-portal-2020', {
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(() => {
  console.log("Connected to DB");
})
.catch(() => {
  console.log("Error Connecting to DB");
})
