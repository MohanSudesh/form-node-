import SGmail from "@sendgrid/mail"
import * as EMAIL_TYPES from "../constants/emailTypes"
SGmail.setApiKey('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')

const sendEmail = (email, name, type,) => {
    let message = {}
    switch(type){
        case EMAIL_TYPES.NEW_USER:
            message = { 
                personalizations: [{
                    to: [{ email: email }]
                }],
                from : { email : 'outreach@shaastra.org' , name: 'Team Shaastra'},
                content: [{
                    type: "text/html",
                    value: `<h3>Hello ${name},</h3> <br/>
                            <p>
                                Greetings from Shaastra 2020, IIT Madras! <br/>
                                Thank you for signing up for the Shaastra Campus Ambassador Program. Please
                                complete the questionnaire on the portal by 28th July 2019, which is
                                mandatory for selection. Further instructions pertaining to the selection
                                process shall be intimated by mail. Meanwhile, please like and follow our
                                Facebook page: fb.com/Shaastra for updates. <br/><br/>
                                If you have any queries, drop a mail at outreach@shaastra.org.
                            </p>
                            <p>
                                <strong>
                                    Regards, <br/>
                                    Team Shaastra <br/>
                                    IIT Madras <br/>
                                </strong>
                            </p>
                            `,
                }],
                subject : "CA Program Sign Up Confirmation || Shaastra 2020, IIT Madras"
            }
        break
        case EMAIL_TYPES.SELECTED:
            message = { 
                personalizations: [{
                    to: [{ email: email }]
                }],
                from : { email : 'outreach@shaastra.org' , name: 'Team Shaastra'},
                content: [{
                    type: "text/html",
                    value: `<h3>Hello ${name},</h3>
                            <p>
                                Greetings from Shaastra 2020, IIT Madras! <br/>
                                Congratulations on being selected as a Campus Ambassador for your college!
                                We cordially welcome you to the team behind India’s largest completely
                                student-run technical extravaganza - Shaastra 2020. <br/>
                                With a strong team of 500 students of IIT Madras and hundreds of Campus
                                Ambassadors across India, Shaastra 2020 aims to give the best
                                technical experience to everyone in the country ranging from school
                                students to engineers of the future. With this in mind, we hope you
                                have an amazing journey working with us as you represent
                                your college. <br/><br/>
                                Further instructions and information would be communicated to you shortly. We
                                request you to keep checking the CA Portal as well as your email.
                                Looking forward to working with you.
                            </p>
                            <p>
                                <strong>
                                    Regards, <br/>
                                    Team Shaastra <br/>
                                    IIT Madras <br/>
                                </strong>
                            </p>            
                            `,
                }],
                subject : "Campus Ambassador Program || Shaastra 2020, IIT Madras"
            }
        break
        case EMAIL_TYPES.REJECTED:
            message = { 
                personalizations: [{
                    to: [{ email: email }]
                }],
                from : { email : 'outreach@shaastra.org' , name: 'Team Shaastra'},
                content: [{
                    type: "text/html",
                    value: `<h3>Hello ${name},</h3>
                            <p>
                                Greetings from Shaastra, IIT Madras! <br/>
                                We regret to inform you that your application for being a Shaastra Campus
                                Ambassador couldn’t be accommodated. However, lose hope not, for
                                you can try again next year which will undoubtedly see a bigger CA
                                Program. <br/><br/>
                                Get a feel of Shaastra - visit the IIT Madras campus in January and experience the
                                largest student-run technical extravaganza. With a host of
                                workshops, international competitions, lectures, exhibitions and
                                shows, Shaastra is bound to amaze you. <br/><br/>
                                We look forward to seeing you at Shaastra 2019, and as a Campus Ambassador
                                next year! <br/><br/>
                                <strong>
                                    Regards, <br/>
                                    Team Shaastra <br/>
                                    IIT Madras <br/>
                                </strong>
                            </p>                                   
                            `,
                }],
                subject : "Campus Ambassador Program || Shaastra 2020, IIT Madras"
            }
        break
    }
    SGmail.send(message).then((sent) => {
        return
    })
    .catch(error => new Error(error))
}

export default sendEmail