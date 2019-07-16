import React from 'react';

import Player from './player';
import Controls from './controls';
import PlayerList from './playlist';
import axios from 'axios';


export default class VideoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ctrl: null,
            id: null,
            url: null,
            likes: 0,
            unlikes: 0,
            process: 0,
            isPlay: false,
            isMuted: false,
        };
        this.setProcess = this.setProcess.bind(this);
        this.setIsPlay = this.setIsPlay.bind(this);
        this.setIsMuted = this.setIsMuted.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 text-center">
                    <div className="embed-responsive embed-responsive-16by9" style={{ backgroundColor: 'black' }}>
                        <Player onRef={this.onRef}
                            url={this.state.url}
                            updateProcess={this.setProcess}
                            updateIsMuted={this.setIsMuted}
                            updateIsPlay={this.setIsPlay} />
                    </div>
                    <div className="progress">
                        <div className="progress-bar"
                            role="progressbar"
                            style={{ width: this.state.process + '%' }}
                            aria-valuenow={this.state.process}
                            aria-valuemin="0"
                            aria-valuemax="100">{this.state.process}%</div>
                    </div>
                    <br></br>
                    <Controls url={this.state.url}
                        isPlay={this.state.isPlay}
                        id={this.state.id}
                        likes={this.state.likes}
                        unlikes={this.state.unlikes}
                        isMuted={this.state.isMuted}
                        onClick={(control) => this.chgCtrl(control)} />
                </div>
                <div className="col-md-4">
                    <PlayerList onClick={(id, url) => this.chgMov(id, url)} />
                </div>
            </div>

        );
    }

    chgMov(id, url) {
        const _this = this;
        axios.get('http://localhost:8080/videos/' + id)
            .then(function (response) {
                _this.setState({
                    likes: response.data.likes,
                    unlikes: response.data.unlikes,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
        this.setState({ id: id, url: url, isPlay: false });
    }


    chgCtrl(ctrl) {
        this.setState({ ctrl: ctrl });
        this.child.ctrlPlayer(ctrl);
    }

    setProcess(proc) {
        this.setState({ process: proc });
    }

    setIsPlay(isPlay) {
        this.setState({ isPlay: isPlay });
    }

    setIsMuted(isMuted) {
        this.setState({ isMuted: isMuted });
    }

    onRef = (ref) => {
        this.child = ref
    }

}