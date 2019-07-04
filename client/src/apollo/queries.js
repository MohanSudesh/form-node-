import gql from "graphql-tag"

const GET_USERS = gql`
  {
    users {
      _id
      name
    }
  }
`

const GET_QUESTIONNAIRE = gql`
  {
    questionnaire {
      studentState
      name
      email
      postalAddress
      pincode
      contactNumber
      whatsappNumber
      city
      collegeState
      collegeName
      collegeAddress
      degree
      branch
      year
      collegeCity
      socialMediaSites
      fbLink
      whyDoYouWish
      areYouTheRightCandidate
      pastExperience
      previousCA
      previousCAYear
      userId
      status
    }
  }
`
const GET_TASKS = gql `
  {
    task{
      title
      description
      deadline
      points
    }
  }
`

const ME = gql`{
    me {
      _id
      name
      email
      updated
      role
      status
    }
}`

export {
    GET_USERS, GET_QUESTIONNAIRE, ME, GET_TASKS
}