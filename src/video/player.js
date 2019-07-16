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
        this.props.onRef(this);
        let video = this.refs.media;

        video.addEventListener("ended", () => {
            video.currentTime = 0;
            video.pause();
            this.props.updateIsPlay(false);
        });

        video.addEventListener("timeupdate", () => {
            var pValue = 0;
            if (isNaN(video.duration)) {
                pValue = 0;
            } else {
                pValue = parseInt((video.currentTime / video.duration) * 100);
            }
            this.props.updateProcess(pValue);
        });
    }

    ctrlPlayer(ctrl) {

        let video = this.refs.media;

        if (ctrl === 'play' && this.props.url) {
            video.play();
            this.props.updateIsPlay(true);
        }
        if (ctrl === 'pause' && this.props.url) {
            video.pause();
            this.props.updateIsPlay(false);
        }
        if (ctrl === 'plus' && this.props.url) {
            if (video.volume <= 0.9) {
                video.volume = video.volume + 0.1;
            }
        }
        if (ctrl === 'minus' && this.props.url) {
            if (video.volume >= 0.1) {
                video.volume = video.volume - 0.1;
            }
        }
        if (ctrl === 'refresh' && this.props.url) {
            video.load();
            video.play();
        }
        if (ctrl === 'muted' && this.props.url) {
            if (video.muted) {
                video.muted = false;
                this.props.updateIsMuted(false);
            } else {
                video.muted = true;
                this.props.updateIsMuted(true);
            }
        }
    }


}