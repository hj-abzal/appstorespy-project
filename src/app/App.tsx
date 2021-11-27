import { AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemForm } from '../components/AddItemForm/AddItemForm';
import { TasksStateType } from '../features/Tasks/tasks-reducer';
import { Todolist } from '../features/Todolists/Todolist';
import { addTodolistAC, TodolistType } from '../features/Todolists/todolist-reducer';
import './App.css';
import { AppRootStateType } from './store';

function App() {
  const dispatch = useDispatch();
  const todolists = useSelector<AppRootStateType, TodolistType[]>(state => state.todolists);
  const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks);
  const addTodolist = useCallback((title: string) => {
    dispatch(addTodolistAC(title))
  }, [dispatch])

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            AppStoreSpy
          </Typography>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container style={{ padding: '20px' }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={3}>
          {
            todolists.map(t => {
              let allTodolistTasks = tasks[t.id];
              let tasksForTodolist = allTodolistTasks;

              if (t.filter === "active") {
                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
              }
              if (t.filter === "completed") {
                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
              }
              return <Grid item key={t.id}>
                <Paper style={{ padding: '15px' }}>
                  <Todolist
                    id={t.id}
                    title={t.title}
                    tasks={tasksForTodolist}
                    filter={t.filter}
                  />
                </Paper>
              </Grid>
            })
          }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
