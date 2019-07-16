import React from 'react';
import axios from 'axios';

export default class AddNewVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" ref="titleNew" className="form-control" placeholder="Title" />
                        <input type="text" ref="urlNew" className="form-control" placeholder="Youtube URL" />

                        <button type="button" className="btn btn-primary" onClick={()=>this.saveVideo()} >Add
            Video</button>
                    </div>
                    <div className="col-md-6" >
                        <input type="text" className="form-control" />
                        <input type="text" className="form-control" />

                        <div className="btn-group">
                            <button type="button" className="btn btn-primary" >
                                Edit Video
                        </button>
                            <button type="button" className="btn btn-primary"  >
                                Cancel Edit Video
            </button></div>
                    </div>
                </div>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Title</th>
                                <th scope="col">URL</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.videos.map((video, i) => {
                                    return (
                                        <tr key={video.id}>
                                            <th scope="row">{i + 1}</th>
                                            <td>
                                                {video.title}
                                            </td>
                                            <td>
                                                {video.url}
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-primary" >Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-primary" onClick={()=>this.deleteVideo(video.id)} >Detele</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-primary" disabled={video.approve}>Approve</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table></div></div>
        );
    }


    componentDidMount() {
        this.initVideo();
    }

    initVideo(){
        const _this = this;
        axios.get('http://localhost:8080/videos')
            .then(function (response) {
                _this.setState({
                    videos: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    saveVideo(){
        let video = {title:this.refs.titleNew.value,url:this.refs.urlNew.value,approve:'no',likes:0,unlikes:0,percent:0};
        const _this = this;
        axios.post('http://localhost:8080/videos',video)
            .then(function (response) {
                _this.initVideo();
                _this.refs.titleNew.value = "";
                _this.refs.urlNew.value = "";
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteVideo(id){
        const _this = this;
        axios.delete('http://localhost:8080/videos/'+id)
            .then(function (response) {
                _this.initVideo();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}