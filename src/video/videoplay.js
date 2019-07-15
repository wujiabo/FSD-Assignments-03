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
            <div>
                <Player ctrl={this.state.ctrl} url={this.state.url} />
                <Controls onClick={(control) => this.chgCtrl(control)} />
                <PlayerList onClick={(url) => this.chgMov(url)} />
                {this.props.op}
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