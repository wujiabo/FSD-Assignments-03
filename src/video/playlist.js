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
                            <li key={video.id} className="list-group-item" onClick={() => this.props.onClick(video.id,video.url)}>{video.title}</li>
                        )
                    })
                }
            </ul>

        );
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:8080/videos')
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