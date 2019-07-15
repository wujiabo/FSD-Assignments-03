import React from 'react';

export default class Player extends React.Component {

    render() {
        return (
            <div>{this.props.ctrl}
                <video src={this.props.url}>
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}