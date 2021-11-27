import {combineReducers, createStore} from 'redux';
import { tasksReducer } from '../features/Tasks/tasks-reducer';
import { todolistsReducer } from '../features/Todolists/todolist-reducer';


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


