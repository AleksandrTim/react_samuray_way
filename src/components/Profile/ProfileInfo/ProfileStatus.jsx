import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    // statusInputRef = React.createRef();

    state = {
        editMode: false
        , status: this.props.status
    }

    activateEditMode = () => {
        console.log('this:', this);
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value 
        }); 
    }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode }>
                            {this.props.status || "-------"}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input 
                            // ref={this.statusInput}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}

                        ></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;