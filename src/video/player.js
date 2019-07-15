import React from 'react';

export default class Player extends React.Component {

    render() {
        return (
            <video className="embed-responsive-item" id='media' ref='media' src={this.props.url}>
                Your browser does not support the video tag.
            </video>
        );
    }
    componentDidMount() {
        let video = this.refs.media;
        
		video.addEventListener("ended",function(){
			video.currentTime = 0;
			video.pause();
		});
    }

    componentWillReceiveProps(newProps) {
        let video = this.refs.media;
        if (newProps.ctrl === 'play' && this.props.url) {
            video.play();
        }
        if (newProps.ctrl === 'pause' && this.props.url) {
            video.pause();
        }
        if (newProps.ctrl === 'plus' && this.props.url) {
            if (video.volume <= 0.9) {
                video.volume = video.volume + 0.1;
            }
        }
        if (newProps.ctrl === 'minus' && this.props.url) {
            if (video.volume >= 0.1) {
                video.volume = video.volume - 0.1;
            }
        }
        if (newProps.ctrl === 'refresh' && this.props.url) {
            video.load();
            video.play();
        }
        if (newProps.ctrl === 'muted' && this.props.url) {
            if (video.muted) {
                video.muted = false;
            } else {
                video.muted = true;
            }
        }
        if (newProps.ctrl === 'thumbsUp' && this.props.url) {

        }
        if (newProps.ctrl === 'thumbsDown' && this.props.url) {

        }
    }
}