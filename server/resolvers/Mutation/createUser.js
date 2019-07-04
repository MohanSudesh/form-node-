import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../utils"
import * as EMAIL_TYPES from "../../constants/emailTypes"

export default async (parent, { data: { password, ...rest } }, { User }) => {
  const hashedPwd = await bcrypt.hash(password, 10)
  const user = await new User({ ...rest, password: hashedPwd }).save()
  const token = jwt.sign({ _id: user._id }, "secret")
  sendEmail(rest.email, rest.name, EMAIL_TYPES.NEW_USER)
  return { token, user }
}