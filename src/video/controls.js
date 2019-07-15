import React from 'react';

export default class Controls extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={() => this.props.onClick('play')}>play</button>
                <button onClick={() => this.props.onClick('pause')}>pause</button>
            </div>
        );
    }
}