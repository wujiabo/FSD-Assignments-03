import React from 'react';

export default class Player extends React.Component {
    
    render() {
        return (
            <div>{this.props.ctrl}{this.props.mov}
            </div>
        );
    }
}