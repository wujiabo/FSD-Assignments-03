import React from 'react';
import ReactDOM from 'react-dom';

import VideoPlay from './video/videoplay';
import AddNewVideo from './video/addnewvideo';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            op: null
        };
    }
    render() {
        return (
            <div>
                <VideoPlay op={this.state.op}/>
                <AddNewVideo onClick={() => this.chgList()}/>
            </div>
        );
    }

    chgList(){
        this.setState({op:'chgList'});
    }
}

// ========================================

ReactDOM.render(
    <Video />,
    document.getElementById('root')
);
