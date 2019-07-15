import React from 'react';

export default class Controls extends React.Component {

    render() {
        return (

            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className={this.props.url == null || this.props.isPlay ?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('play')}>play</button>
                <button type="button" className={this.props.url == null || !this.props.isPlay ?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('pause')}>pause</button>
                <button type="button" className={this.props.url == null?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('plus')}>plus</button>
                <button type="button" className={this.props.url == null?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('minus')}>minus</button>
                <button type="button" className={this.props.url == null?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('refresh')}>refresh</button>
                <button type="button" className={this.props.url == null?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('muted')}>muted</button>
                <button type="button" className={this.props.url == null?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('thumbsUp')}>thumbsUp</button>
                <button type="button" className={this.props.url == null?'btn btn-primary disabled':'btn btn-primary'} onClick={() => this.props.onClick('thumbsDown')}>thumbsDown</button>
            </div>
        );
    }
}