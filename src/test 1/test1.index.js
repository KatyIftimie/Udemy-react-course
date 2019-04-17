import React, { Component } from 'react';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class Text1 extends Component {
    state = {
        usernames: [
            {username: "flofy69"}
        ]
    }

    usernameChangedHandler = (event) => {
        this.setState({
            usernames: [
                {username: event.target.value}
            ]
        })
    }
    render() {
        const style = {
            backgroundColor: 'pink',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            cursor: 'pointer',
            fontSize: '20px', 
        };
        return(
            <div style={style}>
                <UserOutput 
                    username={this.state.usernames[0].username}
                />
                <UserInput 
                    changed={this.usernameChangedHandler}
                    username={this.state.usernames[0].username}
                />
            </div>
        )
    }
}

export default Text1;