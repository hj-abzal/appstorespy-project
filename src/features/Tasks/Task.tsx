import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { EditableSpan } from '../../components/EditableSpan/EditableSpan';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, TaskType } from './tasks-reducer';


type TaskPropsType = {
    task: TaskType
    todolistId: string
}
export const Task = (props: TaskPropsType) => {
    const dispatch = useDispatch();
    console.log(props.task);
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatusAC(props.task.id, e.currentTarget.checked, props.todolistId))
    }

    const onTitleChangeHandler = (title: string) => {
        dispatch(changeTaskTitleAC(props.task.id, title, props.todolistId))
    }

    const onClickHandler = () => {
        dispatch(removeTaskAC(props.task.id, props.todolistId))
    }

    return <div className={props.task.isDone ? 'is-done' : ''}>
        <Checkbox
            checked={props.task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} />
        <IconButton onClick={onClickHandler}>
            <Delete />
        </IconButton>
    </div>
}
