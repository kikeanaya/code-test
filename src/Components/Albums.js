import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Albums extends Component {

    constructor() {
        super();
        this.state = {
            albums: [],
            albumsResults: [],
            requestOngoing: true
        };
    }

    getAlbums = () => {
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => {
                this.setState({
                    albums: res.data,
                    albumsResults: res.data,
                    requestOngoing: false
                })
            })
    }

    changeHandler = (search) => {
        const filteredAlbums = this.state.albums.filter(album => album.title.toLowerCase().includes(search.toLowerCase()));
        this.setState({
            albumsResults: filteredAlbums
        })
    }

    componentDidMount() {
        this.getAlbums();
    }

    render() {
        if (!this.state.requestOngoing){ 
            return(
                <div className="albums-list">
                    <input 
                        type="search" 
                        placeholder="Search Album"
                        onChange={e => this.changeHandler(e.target.value)}
                        className="search-box"
                    />
                    <h1>Albums</h1>
                    
                    {this.state.albumsResults.length > 0 ? (
                        
                        this.state.albumsResults.map(album => {
                            return(
                                    <li key={album.id}>
                                        <Link to={`/photos/${album.id}`} >{album.title}</Link>
                                    </li>
                            )
                        })
                    ) : (
                        <div>
                            <h2>No results found :(</h2>
                        </div>
                    )
                    }
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

export default Albums;