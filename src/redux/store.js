import profileReducer from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    
    _state: {
        profilePage: {
            
        },
        dialogsPage: {
         
        }
        , sidebar: {}
    }
    , getState() {
        return this._state;
    }

    , subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
    , rerenderEntireTree() { console.log('state changed') }

    , dispatch(action) { // { type: 'ADD-POST' }

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.newPostText, action);

    this._rerenderEntireTree(this._state);
    }
}

export default store;
window.store = store; 