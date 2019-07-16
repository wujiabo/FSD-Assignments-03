import React from 'react';
import axios from 'axios';

export default class AddNewVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            currentEditId: null,
            _warning:null,
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" ref="titleNew" className="form-control" placeholder="Title" />
                        <input type="text" ref="urlNew" className="form-control" placeholder="Youtube URL" />

                        <button type="button" className="btn btn-primary" onClick={() => this.saveVideo()} >Add
            Video</button>
                    </div>
                    <div className="col-md-6" hidden={this.state.currentEditId == null}>
                        <input type="text" ref="titleEdit" className="form-control" />
                        <input type="text" ref="urlEdit" className="form-control" />

                        <div className="btn-group">
                            <button type="button" className="btn btn-primary" onClick={() => this.saveEdit()}>
                                Edit Video
                        </button>
                            <button type="button" className="btn btn-primary" onClick={() => this.cancelEdit()} >
                                Cancel Edit Video
                        </button></div>
                    </div>

                </div>
                <div>
                    {this.state._warning != null ? <div class="alert alert-warning" role="alert">
                        {this.state._warning}
                    </div>:<div></div>}
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
                                                <button type="button" className="btn btn-primary" onClick={() => this.toEdit(video)}>Edit</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-primary" onClick={() => this.deleteVideo(video.id)} >Detele</button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-primary" disabled={video.approve === 'yes'} onClick={() => this.approveVideo(video.id)} >Approve</button>
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

    initVideo() {
        this.setState({_warning:null});
        const _this = this;
        axios.get('http://localhost:8080/videos')
            .then(function (response) {
                _this.setState({
                    videos: response.data
                });
                _this.props.chgList()
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    saveVideo() {

        let title = this.refs.titleNew.value.trim();
        let url = this.refs.urlNew.value.trim();
        if (!title) {
            this.setState({_warning:'Title is empty.'});
            return;
        }
        if (!url) {
            this.setState({_warning:'Url is empty.'});
            return;
        }
        if (!this.isURL(url)) {
            this.setState({_warning:'Url is not correct.'});
            return;
        }
        
        this.setState({_warning:null});

        let video = { title: title, url: url, approve: 'no', likes: 0, unlikes: 0, percent: 0 };
        const _this = this;
        axios.post('http://localhost:8080/videos', video)
            .then(function (response) {
                _this.initVideo();
                _this.refs.titleNew.value = "";
                _this.refs.urlNew.value = "";
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteVideo(id) {
        const _this = this;
        axios.delete('http://localhost:8080/videos/' + id)
            .then(function (response) {
                _this.initVideo();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    approveVideo(id) {
        const _this = this;
        axios.patch('http://localhost:8080/videos/' + id, { approve: 'yes' })
            .then(function (response) {
                _this.initVideo();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    toEdit(video) {
        this.setState({ currentEditId: video.id });
        this.refs.titleEdit.value = video.title;
        this.refs.urlEdit.value = video.url;
    }

    cancelEdit() {
        this.setState({ currentEditId: null });
        this.refs.titleEdit.value = null;
        this.refs.urlEdit.value = null;
    }

    saveEdit() {
        let title = this.refs.titleEdit.value.trim();
        let url = this.refs.urlEdit.value.trim();
        if (!title) {
            this.setState({_warning:'Title is empty.'});
            return;
        }
        if (!url) {
            this.setState({_warning:'Url is empty.'});
            return;
        }
        if (!this.isURL(url)) {
            this.setState({_warning:'Url is not correct.'});
            return;
        }
        
        this.setState({_warning:null});

        const _this = this;
        axios.patch('http://localhost:8080/videos/' + this.state.currentEditId, { title: title, url: url, approve: 'no' })
            .then(function (response) {
                _this.initVideo();
                _this.cancelEdit();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    isURL(url) {
        const strRegex = '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]';
        const re = new RegExp(strRegex);
        if (re.test(url)) {
            return (true);
        } else {
            return (false);
        }
    }
}