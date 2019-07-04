import { getUserID, sendEmail } from "../../utils"
const Mongoose = require('mongoose')
const ObjectId = Mongoose.Types.ObjectId
import * as EMAIL_TYPES from "../../constants/emailTypes"

export default async (parent, { data: { userId, type, } }, { User, Questionnaire, request, }) => {
    const { role } = getUserID(request)
    if( role === "ADMIN" ){
        console.log(ObjectId(userId))
        const userUpdate = await User.updateOne({ _id: userId }, { status: type, },)
        const questionnaireUpdate = await Questionnaire.updateOne({ userId, }, { status: type })
        console.log(userUpdate, questionnaireUpdate)
        if( userUpdate.nModified && questionnaireUpdate.nModified ){
            const { email, name } = await User.findOne({ _id: userId })
            sendEmail(email, name, type)
            return {
              message: "Successfully Completed!",
              success: true,
            }
        } else {
            return {
                message: "Server Error!",
                success: false,
            }
        }
    } else {
        return {
            success: false,
            message: "Unauthorized Action!",
        }
    }
}