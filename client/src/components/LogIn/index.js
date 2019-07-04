import React from 'react'
import { Mutation } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import { LOGIN } from '../../apollo/mutations'
import { withAuthUser } from '../../contexts/Session'
import * as ROUTES from '../../constants/routes'
import LogIn from './LogIn'

export default withAuthUser(
    ({ refreshAuthUser }) => 
        <Mutation mutation={LOGIN}>
            {(login, { data, loading, error }) => {

                if (data && data.login.token && data.login.user) {
                    localStorage.setItem("authToken", data.login.token)
                    localStorage.setItem("authUser", JSON.stringify(data.login.user))
                    refreshAuthUser()
                    return <Redirect to={ROUTES.HOME} />
                }
        
                return <LogIn login={login} loading={loading} error={error} />;
            }}
        </Mutation>
)