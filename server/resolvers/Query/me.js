import { getUserID } from "../../utils"

export default (parent, args, { User, request }) => {
  const _id = getUserID(request)
  return User.findOne({
    _id
  }).exec()
}