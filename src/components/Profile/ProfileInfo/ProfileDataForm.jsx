import React from 'react';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css';
import styles from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {<div><button onClick={() => { }}>Save</button></div>}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name</b>: {createField('Full name', 'fullName', Input, null)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField(null, 'lookingForAJob', Input, null, { type: 'checkbox' })}
            </div>
            <div>
                <b>My proffessional skills</b>: {createField('My proffessional skills', 'lookingForAJobDescription', Textarea, null)}
            </div>
            <div>
                <b>About me</b>: {createField('About me', 'aboutMe', Textarea, null)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: {createField(key, 'contacts.' + key, Input, null)} </b></div>
                })} 
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;