import React, { ChangeEvent } from 'react';
import { AddItemForm } from '../../components/AddItemForm';
import { TaskType } from '../Tasks/tasks-reducer';


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    
    const addTask = (title: string) => {
       
    }



    return <div>
        <h3>{props.title}</h3>
        <AddItemForm addItem={addTask} />
        <div>
            
        </div>
    </div>
}


