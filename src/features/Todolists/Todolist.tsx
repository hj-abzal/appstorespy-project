import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AddItemForm } from '../../components/AddItemForm';
import { Task } from '../Tasks/Task';
import { addTaskAC, TaskType } from '../Tasks/tasks-reducer';


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    
    const dispatch = useDispatch();

    const addTask = (title: string) => {
       dispatch(addTaskAC(title, props.id))
    }



    return <div>
        <h3>{props.title}</h3>
        <AddItemForm addItem={addTask} />
        <div>
            {
                props.tasks.map( t => {
                    return <Task key={t.id} task={t} todolistId={props.id}/>
                })
            }
        </div>
    </div>
}


