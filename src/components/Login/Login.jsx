import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {createField, Input } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css';

const maxLength20 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField('E-mail', 'email', Input, [required, maxLength20])}
                {createField('Password', 'password', Input, [required, maxLength20], {type:'password'})}
                {createField(null, 'rememberMe', Input, null, {type:'checkbox'}, 'remember me')} 

                {captchaUrl && <img src={captchaUrl}/> }
                { captchaUrl &&  createField("Symbols from image", "captcha", Input, [required], {}) } 

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);    
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);