import React from 'react';

export default class PlayList extends React.Component {
    
    render() {
        return (
            <div>
            <button onClick={() => this.props.onClick('1')}>1</button>
            <button onClick={() => this.props.onClick('2')}>2</button>
            <button onClick={() => this.props.onClick('3')}>3</button>
            ###{this.props.list}
            </div>
        );
    }
}