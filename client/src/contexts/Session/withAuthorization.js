import React from 'react'
import { Redirect } from 'react-router-dom'
import { withAuthUser } from './'

const withAuthorization = ( condition, redirect ) =>  Component => {

    const withAuthorization = props => {

        let { authUser } = props

        if( !condition(authUser) ){
            return <Redirect to={redirect} /> 
        }

        return (
            <Component {...props}/>
        )
    }

    return withAuthUser(withAuthorization)
}

export default withAuthorization