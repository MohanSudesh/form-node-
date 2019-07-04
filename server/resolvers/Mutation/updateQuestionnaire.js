import { getUserID } from "../../utils"

export default async (
  parent,
  { data },
  { User, Questionnaire, request, },
) => {
  const authId = getUserID(request)
  const authUser = await User.findOne({ _id: authId }).exec()
  if (authUser && !authUser.updated ) {
    const questionnaire = await new Questionnaire({ ...data, userId: authId }).save()
    if (questionnaire) {
      const userUpdate = await User.updateOne({ _id: authId }, { updated: true, },)
      if( userUpdate.nModified ){
        return {
          message: "Questionnaire Added!",
          success: true,
        }
      } else {
        return {
          message: "Unable to add Details!",
          success: false
        }
      }
    } else {
      return {
        message: "Unable to add Details!",
        success: false
      }
    }
  } else {
    return {
      message: "Unauthorized Action!",
      success: false
    }
  }
}