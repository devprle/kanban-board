import {legacy_createStore as createStore} from 'redux';
import {rootReducer} from "@/redux/reducers";

export const store = createStore(rootReducer);