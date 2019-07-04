import React from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_TASK } from '../../apollo/mutations'
import CreateTask from './CreateTask'

export default props =>(
    <Mutation mutation={CREATE_TASK}>
        {(createTask, {data, loading, error})=>{
            if(loading){
                return <CreateTask loading={true} createTask={createTask} />
            }
            if(error){
                return <CreateTask error={error} createTask={createTask} />
            }
            return <CreateTask createTask={createTask} data={data} />
        }}
    </Mutation>
)