import React from 'react';
import ReactDOM from 'react-dom';

import VideoPlay from './video/videoplay';
import AddNewVideo from './video/addnewvideo';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
        };
    }
    render() {
        return (
            <div>
                <VideoPlay list={this.state.list}/>
                <AddNewVideo onClick={() => this.chgList()}/>
            </div>
        );
    }

    chgList(){
        this.setState({list:'1111'});
    }
}

// ========================================

ReactDOM.render(
    <Video />,
    document.getElementById('root')
);
