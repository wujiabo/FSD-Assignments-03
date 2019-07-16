import React from 'react';
import ReactDOM from 'react-dom';

import VideoPlay from './video/videoplay';
import AddNewVideo from './video/addnewvideo';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chgList: null
        };
    }
    render() {
        return (
            <div>
                <VideoPlay chgList={this.state.chgList}/>
                <br></br>
                <AddNewVideo chgList={() => this.chgList()}/>
            </div>
        );
    }

    chgList(){
        this.setState({chgList:'chgList'});
    }
}

// ========================================

ReactDOM.render(
    <Video />,
    document.getElementById('root')
);
