import React, { Fragment } from 'react'
import { withAuthorization } from '../../contexts/Session'
import { FillDetailsAlert, SuccessfullQuestionnaireAlert } from './'
import * as ROUTES from '../../constants/routes'

const HomePage = ({ authUser }) => (
    <Fragment>
        { authUser && (authUser.updated ? <SuccessfullQuestionnaireAlert /> : <FillDetailsAlert />) }
    </Fragment>
)

const condition = authUser => !!authUser

export default withAuthorization(condition, ROUTES.LOG_IN)(HomePage)