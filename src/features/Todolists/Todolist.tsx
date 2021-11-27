import { Button, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { AddItemForm } from '../../components/AddItemForm/AddItemForm';
import { EditableSpan } from '../../components/EditableSpan/EditableSpan';
import { Task } from '../Tasks/Task';
import { addTaskAC, TaskType } from '../Tasks/tasks-reducer';
import { changeTodolistFilterAC, FilterValuesType, removeTodolistAC } from './todolist-reducer';


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const dispatch = useDispatch();

    const addTask = (title: string) => {
        dispatch(addTaskAC(title, props.id))
    }

    const removeTodolist = () => {
        dispatch(removeTodolistAC(props.id))
    }

    const onAllClickHandler = () => {
        dispatch(changeTodolistFilterAC(props.id, 'all'))
    }
    const onActiveClickHandler = () => {
        dispatch(changeTodolistFilterAC(props.id, "active"))
    }
    const onCompletedClickHandler = () => {
        dispatch(changeTodolistFilterAC(props.id, "completed"))
    }

    return <div>
        <h3><EditableSpan value={props.title} onChange={() => {}} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask} />
        <div>
            {
                props.tasks.map(t => <Task key={t.id} task={t} todolistId={props.id} />)
            }
        </div>
        <div style={{ paddingTop: '10px' }}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                onClick={onAllClickHandler}
                color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                onClick={onActiveClickHandler}
                color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                onClick={onCompletedClickHandler}
                color={'secondary'}>Completed
            </Button>
        </div>
    </div>
}


