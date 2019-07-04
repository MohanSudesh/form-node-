import React from 'react'
import AuthUserContext from './'

const withAuthUser = Component => props => (
    <AuthUserContext.Consumer>
        { ({ authUser, refreshAuthUser }) => (
            <Component {...props} authUser={authUser} refreshAuthUser={refreshAuthUser} />
        )}
    </AuthUserContext.Consumer>
)

export default withAuthUser