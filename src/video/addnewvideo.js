import React from 'react';

export default class AddNewVideo extends React.Component {
    render() {
        return (
            <div><button onClick={() => this.props.onClick()}>aaa</button>
            </div>
        );
    }
}