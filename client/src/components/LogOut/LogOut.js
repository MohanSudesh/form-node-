import React from 'react'
import { Redirect } from 'react-router-dom'
import { withAuthUser } from '../../contexts/Session'
import * as ROUTES from '../../constants/routes'

const LogOut = ({ refreshAuthUser }) => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('authUser')
    refreshAuthUser()
    return (
        <Redirect to={ROUTES.LANDING} />
    )
}

export default withAuthUser(LogOut)