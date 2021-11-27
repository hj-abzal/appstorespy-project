import {combineReducers, createStore} from 'redux';
import { tasksReducer } from '../features/Tasks/tasks-reducer';
import { todolistsReducer } from '../features/Todolists/todolist-reducer';
import { loadState, saveState } from '../utils/localStorage';


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

export const store = createStore(rootReducer, loadState());

export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState({
        tasks: store.getState().tasks,
        todolists: store.getState().todolists
    })
  })
