import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export default async (parent, { data: { email, password } }, { User }) => {
  const user = await User.findOne({ email }).exec()
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ _id: user._id, role: user.role, }, "secret")
      return { token, user }
    }
  }

  return new Error("User email not registered or password mismatch.")
}