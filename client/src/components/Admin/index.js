import React from 'react'
import Admin from './Admin'
import PersonalDetailsModal from './PersonalDetailsModal'
import OtherDetailsModal from './OtherDetailsModal'
import { GET_QUESTIONNAIRE } from '../../apollo/queries'
import { CHANGE_STATUS } from '../../apollo/mutations'
import { Query, Mutation } from 'react-apollo'

export { PersonalDetailsModal, OtherDetailsModal, }

export default () => 
    <Query query={GET_QUESTIONNAIRE}>
        {({ error, loading, data }) => {
            if( data && Object.keys(data).length === 0 ){
                data = []
            }
            return  <Mutation mutation={CHANGE_STATUS}>
                        {(changeStatus, { error: mutationError, loading: mutationLoading, data: mutationData }) => (
                            <Admin data={data && data.questionnaire} changeStatus={changeStatus} error={error || mutationError} loading={loading} mutationLoading={mutationLoading} mutationData={mutationData} />
                        )}
                    </Mutation>
        }}
    </Query>