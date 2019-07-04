import { getUserID, sendEmail } from "../../utils"
const Mongoose = require('mongoose')

export default async (parent,{data: {...details}}, { Task,request }) => {
    const { role } = getUserID(request)
    if(role === "ADMIN") {
        const task = await new Task({...details}).save()
                    .then((task)=>{
                        return{
                            message: "Successfully Completed!",
                            success: true,
                        }
                    })
                    .catch(()=>{
                        return{
                            message: "Server Error",
                            success: false
                        }
                    });
    } else {
        return {
            success: false,
            message: "Unauthorized Action!"
        }
    }
}