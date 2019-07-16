import React from 'react';
import axios from 'axios';

export default class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            isLoaded: false,
        }
    }

    render() {
        return (
            <ul className="list-group">
                {

                    this.state.videos.map((video, i) => {
                        return (
                            
                            <li style={{cursor:'pointer'}} key={video.id} className="list-group-item" onClick={() => this.props.onClick(video.id, video.url)}>
                            {this.props.id === video.id?<i className="fa fa-hand-o-right" aria-hidden="true"></i>:<div></div>}
                            {video.title}
                            </li>
                        )
                    })
                }
            </ul>

        );
    }

    componentDidMount() {
        this.initVideo();
    }

    initVideo() {
        const _this = this;
        axios.get('http://localhost:8080/videos?approve=yes')
            .then(function (response) {
                _this.setState({
                    videos: response.data,
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
    }
}