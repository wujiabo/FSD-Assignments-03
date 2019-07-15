import React from 'react';

import Player from './player';
import Controls from './controls';
import PlayerList from './playlist';


export default class VideoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ctrl: null,
            url: null,
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
                        updateIsPlay={this.setIsPlay}  />
                    </div>
                    <div className="progress">
                        <div className="progress-bar" 
                        role="progressbar" 
                        style={{ width: this.state.process+'%' }} 
                        aria-valuenow={this.state.process} 
                        aria-valuemin="0" 
                        aria-valuemax="100">{this.state.process}%</div>
                    </div>
                    <Controls url={this.state.url} 
                    isPlay={this.state.isPlay} 
                    isMuted={this.state.isMuted} 
                    onClick={(control) => this.chgCtrl(control)} />
                </div>
                <div className="col-md-4">
                    <PlayerList onClick={(url) => this.chgMov(url)} />
                </div>
            </div>

        );
    }

    chgMov(url) {
        this.setState({ url: url , isPlay:false, isMuted:false });
    }


    chgCtrl(ctrl) {
        this.setState({ ctrl: ctrl });
        this.child.ctrlPlayer(ctrl);
    }

    setProcess(proc){
        this.setState({process:proc});
    }
    
    setIsPlay(isPlay){
        this.setState({isPlay:isPlay});
    }
    
    setIsMuted(isMuted){
        this.setState({isMuted:isMuted});
    }
    
    onRef = (ref) => {
        this.child = ref
    }

}