import sendEmail from "./sendEmail"
import jwt from "jsonwebtoken"

const getUserID = request => {
  const header = !!request.req
    ? request.req.headers.authorization
    : request.connection.context.Authorization
  if (!!header) {
    const token = header.split(" ")[1]
    return jwt.verify(token, "secret")
  } else {
    return null
  }
}

export { getUserID, sendEmail }