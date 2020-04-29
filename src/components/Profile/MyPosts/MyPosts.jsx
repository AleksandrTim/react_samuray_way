import React, { Component, PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators.js';
import { Textarea } from '../../../components/common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component={Textarea}
                    placeholder={'Post message'}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

// window.props = [];

const MyPosts = React.memo(props => {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({a: 12});
    //     }, 3000)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state; 
    // }

    // window.props.push(this.props);
    console.log("RENDER 1");
    // console.log(this.props);

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;
