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
            this.state.videos.map((video, i) => {
                return (
                    <button key={video.id} onClick={() => this.props.onClick(video.url)}>{video.id}</button>
                )
            })
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