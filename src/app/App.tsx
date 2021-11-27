import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemForm } from '../components/AddItemForm';
import { TasksStateType } from '../features/Tasks/tasks-reducer';
import { Todolist } from '../features/Todolists/Todolist';
import { addTodolistAC, TodolistType } from '../features/Todolists/todolist-reducer';
import './App.css';
import { AppRootStateType } from './store';

function App() {
  const dispatch = useDispatch();
  const todolists = useSelector<AppRootStateType, TodolistType[]>( state => state.todolists);
  const tasks = useSelector<AppRootStateType, TasksStateType>( state => state.tasks);
  const addTodolist = useCallback((title: string) => {
    dispatch(addTodolistAC(title))
  }, [dispatch])

  return (
    <div className="App">
      Todolist
      <AddItemForm addItem={addTodolist} />
      {
        todolists.map( t => {
          return <Todolist
          key={t.id}
          id={t.id}
          title={t.title}
          tasks={tasks[t.id]} 
          />
        })
      }
    </div>
  );
}

export default App;
