import React from 'react';

export default class Controls extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={() => this.props.onClick('play')}>play</button>
                <button onClick={() => this.props.onClick('pause')}>pause</button>
                <button onClick={() => this.props.onClick('plus')}>plus</button>
                <button onClick={() => this.props.onClick('minus')}>minus</button>
                <button onClick={() => this.props.onClick('refresh')}>refresh</button>
                <button onClick={() => this.props.onClick('muted')}>muted</button>
                <button onClick={() => this.props.onClick('thumbsUp')}>thumbsUp</button>
                <button onClick={() => this.props.onClick('thumbsDown')}>thumbsDown</button>
            </div>
        );
    }
}