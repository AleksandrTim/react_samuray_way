import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';
import {reducer as formReducer} from 'redux-form';

import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer
    , dialogsPage: dialogsReducer
    , sidebar: sidebarReducer
    , usersPage: usersReducer
    , auth:authReducer
    , form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;