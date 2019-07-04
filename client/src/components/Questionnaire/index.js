import React from 'react'
import Questionnaire from './Questionnaire'
import PersonalDetails from './PersonalDetails'
import CollegeDetails from './CollegeDetails'
import OtherQuestions from './OtherQuestions'
import Review from './Review'
import SkillDetails from './SkillDetails'
import { Mutation } from 'react-apollo'
import { QUESTIONNAIRE } from '../../apollo/mutations'

export default props => 
    <Mutation mutation={QUESTIONNAIRE}>
        {(questionnaire, { data, loading, error }) => {
            return <Questionnaire questionnaire={questionnaire} loading={loading} data={data} error={error} />;
        }}
    </Mutation>
export { PersonalDetails, OtherQuestions, Review, CollegeDetails, SkillDetails, }