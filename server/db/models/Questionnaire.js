import mongoose from "mongoose"

const QuestionnaireSchema = mongoose.Schema({
    studentState: { 
        type: String,
        required: true,
    },
    name: { 
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
    },
    postalAddress: { 
        type: String,
        required: true,
    },
    pincode: { 
        type: String,
        required: true,
    },
    contactNumber:{ 
        type:  String,
        required: true,
    },
    whatsappNumber: { 
        type: String,
        required: true,
    },
    city: { 
        type: String,
        required: true,
    },
    collegeState: { 
        type: String,
        required: true,
    },
    collegeName: { 
        type: String,
        required: true,
    },
    collegeAddress: { 
        type: String,
        required: true,
    },
    degree: { 
        type: String,
        required: true,
    },
    branch: { 
        type: String,
        required: true,
    },
    year:{ 
        type: String,
        required: true,
    },
    collegeCity: { 
        type: String,
        required: true,
    },
    socialMediaSites: { 
        type: String,
        required: true,
    },
    fbLink: { 
        type: String,
        required: true,
    },
    whyDoYouWish: { 
        type: String,
        required: true,
    },
    areYouTheRightCandidate: { 
        type: String,
        required: true,
    },
    pastExperience: { 
        type: String,
        required: true,
    },
    previousCA: { 
        type: Boolean,
        required: true,
    },
    previousCAYear: { 
        type: String,
    },
    userId: {
        type: String,
        requried: true,
    },
    status: {
        type: String,
        requried: true,
        default: "PENDING"
    },
})

export default mongoose.model("Questionnaire", QuestionnaireSchema)