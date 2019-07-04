import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      data: {
        name: $name
        email: $email
        password: $password
      }
    ) {
      user {
        email
      }
    }
  }
`
const CREATE_TASK = gql`
  mutation(
    $title: String!
    $description: String!
    $deadline: String!
    $points: String!
  ) {
    createTask(
      data: {
        title: $title
        description: $description
        deadline: $deadline
        points: $points
      }
    ) {
      success
      message
    }
  }
`

const LOGIN = gql`
  mutation(
    $email: String!
    $password: String!
  ) {
    login(
      data: {
        email: $email
        password: $password
      }
    ) {
      token
      user {
        _id
        name
        email
        updated
        role
        status
      }
    }
  }
`

const CHANGE_STATUS = gql`
  mutation(
    $type: String!
    $userId: ID!
  ) {
    changeStatus(
      data: {
        userId: $userId
        type: $type
      }
    ) {
      success
      message
    }
  }
`

const QUESTIONNAIRE = gql`
  mutation(
    $studentState: String!
    $name: String!
    $email: String!
    $postalAddress: String!
    $pincode: String!
    $contactNumber: String!
    $whatsappNumber: String!
    $city: String!
    $collegeState: String!
    $collegeName: String!
    $collegeAddress: String!
    $degree: String!
    $branch: String!
    $year:String!
    $collegeCity: String!
    $socialMediaSites: String!
    $fbLink: String!
    $whyDoYouWish: String!
    $areYouTheRightCandidate: String!
    $pastExperience: String!
    $previousCA: Boolean!
    $previousCAYear: String
  ) {
    updateQuestionnaire(
      data: {
        studentState: $studentState
        name: $name
        email: $email
        postalAddress: $postalAddress
        pincode: $pincode
        contactNumber: $contactNumber
        whatsappNumber: $whatsappNumber
        city: $city
        collegeState: $collegeState
        collegeName: $collegeName
        collegeAddress: $collegeAddress
        degree: $degree
        branch: $branch
        year: $year
        collegeCity: $collegeCity
        socialMediaSites: $socialMediaSites
        fbLink: $fbLink
        whyDoYouWish: $whyDoYouWish
        areYouTheRightCandidate: $areYouTheRightCandidate
        pastExperience: $pastExperience
        previousCA: $previousCA
        previousCAYear: $previousCAYear
      }
    ) {
      success
      message
    }
  }
`

export { CREATE_USER, LOGIN, QUESTIONNAIRE, CHANGE_STATUS, CREATE_TASK }