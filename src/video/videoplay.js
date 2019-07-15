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
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 text-center">
                    <div className="embed-responsive embed-responsive-16by9" style={{ backgroundColor: 'black' }}>
                        <Player ctrl={this.state.ctrl} url={this.state.url} />
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <Controls onClick={(control) => this.chgCtrl(control)} />
                </div>
                <div className="col-md-4">
                    <PlayerList onClick={(url) => this.chgMov(url)} />
                </div>
            </div>

        );
    }

    chgMov(url) {
        this.setState({ url: url });
    }


    chgCtrl(ctrl) {
        this.setState({ ctrl: ctrl });
    }

}