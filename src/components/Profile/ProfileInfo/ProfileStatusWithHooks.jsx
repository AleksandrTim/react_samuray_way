import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';
import { setStatus } from '../../../redux/profile-reducer';

// let arr = [0, () => {}];
// let [a, setA] = arr;

const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(true);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        debugger;
        setStatus(props.status);
    }, []);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivatseEditMode = () => {
        setEditMode(false); 
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span 
                    onDoubleClick={activateEditMode}
                    >
                        {props.status || "-------"} yo
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        // ref={this.statusInput}
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivatseEditMode}
                        value={status}

                    ></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;