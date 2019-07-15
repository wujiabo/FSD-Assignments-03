import React from 'react';

import Player from './player';
import Controls from './controls';
import PlayerList from './playlist';


export default class VideoPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ctrl: null,
            mov: null,
            list: null
        };
    }

    render() {
        return (
            <div>
                <Player ctrl={this.state.ctrl} mov={this.state.mov} />
                <Controls onClick={(control) => this.chgCtrl(control)} />
                <PlayerList list={this.list} onClick={(mov) => this.chgMov(mov)} />
                {this.props.list}
            </div>
        );
    }

    chgMov(mov) {
        this.setState({ mov: mov });
    }


    chgCtrl(ctrl) {
        this.setState({ ctrl: ctrl });
    }

}