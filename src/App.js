import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {initializeApp} from './redux/app-reducer'
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
// import {withSuspense} from "./hoc/withSuspense";

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }        

        return (
            <div className='app-wrapper' >
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={() => {
                            return <React.Suspense fallback={<div>Loading...</div>} >
                                <DialogsContainer />
                            </React.Suspense>
                        }} />
                    <Route path='/profile/:userId?'
                        render={() => {
                            return <React.Suspense fallback={<div>Loading...</div>}>
                                <ProfileContainer />
                            </React.Suspense>
                        }} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />

                    <Route path='/login'
                        render={() => <Login />} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter
    , connect(mapStateToProps, {initializeApp}))
    (App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
