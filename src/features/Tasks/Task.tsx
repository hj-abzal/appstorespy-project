import React, {ChangeEvent, useCallback} from 'react'
import { TaskType } from './tasks-reducer';


type TaskPropsType = {
    task: TaskType
    todolistId: string
}
export const Task = React.memo((props: TaskPropsType) => {
    
    return <div key={props.task.id}>
        <input type='checkbox' checked={props.task.isDone} onChange={ () => {}} />
        {props.task.title}
    </div>
})
