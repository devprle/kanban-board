import {combineReducers} from "redux";
import {tasksReducer} from "@/redux/tasksReducer";
import {TaskState} from "@/redux/tasksReducer";
export interface RootState {
    taskReducer: TaskState;
}
export const rootReducer = combineReducers({
    taskReducer: tasksReducer
})