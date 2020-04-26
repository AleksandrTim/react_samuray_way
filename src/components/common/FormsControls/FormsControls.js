import React from 'react';
import styles from './FormsControls.module.css'
import { Field } from 'redux-form';

const FormsControl = ({ input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}><input {...props.input} {...restProps} /></FormsControl>
}

export const createField = (placeholder, name, component, validate, props = [], text='') => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validate} 
            {...props}/> {text}
    </div>
)