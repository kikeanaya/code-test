import React, { Component } from 'react';
import axios from 'axios';

class Photos extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            requestOngoing: true
        };
    }

    getPhotos = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    photos: res.data,
                    requestOngoing: false
                })
            })
    }

    componentDidMount() {
        this.getPhotos()
    }

    render() {
        if (!this.state.requestOngoing){ 
        return(
        <div>            
            <h1>Photos</h1>
            <div className="photos-list">
                {
                    this.state.photos.map(photo => {
                        return(
                            <div className="photo-container" key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title}/>
                                <h4><a href={photo.url} target="_blank" rel="noopener noreferrer">{photo.title}</a></h4>
                            </div>

                        )
                    })
                }
            </div>
        </div>
        )
        }
        else{
            return(
                <div className="spinner-container">
                    <div className="spinner">
                    </div>
                </div>
            )
        }
    }
}

export default Photos;