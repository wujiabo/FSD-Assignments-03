import React from 'react';

export default class Controls extends React.Component {
    
    render() {
        return (

            <div className="btn-group">
                <button type="button" disabled={this.props.url == null || this.props.isPlay} className="btn btn-primary fa fa-play" onClick={() => this.props.onClick('play')}></button>
                <button type="button" disabled={this.props.url == null || !this.props.isPlay} className="btn btn-primary fa fa-pause" onClick={() => this.props.onClick('pause')}></button>
                <button type="button" disabled={this.props.url == null} className="btn btn-primary fa fa-plus" onClick={() => this.props.onClick('plus')}></button>
                <button type="button" disabled={this.props.url == null} className="btn btn-primary fa fa-minus" onClick={() => this.props.onClick('minus')}></button>
                <button type="button" disabled={this.props.url == null} className="btn btn-primary fa fa-refresh" onClick={() => this.props.onClick('refresh')}></button>
                <button type="button" disabled={this.props.url == null} className={this.props.isMuted?'btn btn-primary fa fa-volume-off':'btn btn-primary fa fa-volume-up'}onClick={() => this.props.onClick('muted')}></button>
                <button type="button" disabled={this.props.url == null} className="btn btn-primary fa fa-thumbs-up" onClick={() => this.props.onClick('thumbsUp')}>{this.props.likes}</button>
                <button type="button" disabled={this.props.url == null} className="btn btn-primary fa fa-thumbs-down" onClick={() => this.props.onClick('thumbsDown')}>{this.props.unlikes}</button>
            </div>
        );
    }
}