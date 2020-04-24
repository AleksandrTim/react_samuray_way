import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    // if (props.profile == null || props.profile)
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/* <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzkzM3ky9p-g_fQWpKQXWIGdgLJfUQ29RJS83zQGbuhWEILMJ9' />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src ={props.profile.photos.large}/>
                <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;