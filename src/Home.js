import React, { Component } from 'react';
import axios from 'axios';
import config from './config';

import { 
    Link
  } from "react-router-dom";

class Home extends Component {

    constructor() {
        super();
        this.state= {
            moviesList : []
        }
    }
    
    componentDidMount(){
        const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${config.api_key}`;

        axios.get(topRatedMovies).then((response) => {
            const result = response.data.results;
            this.setState({
                moviesList : result
            })
            console.log('Inside Home');
            console.log(result);
        })
        
    }

    render(){
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const movieImage = this.state.moviesList.map((movie, index) => {
            return (
                <div className="col s3" key={index}>
                    <Link to={`/movie/${movie.id}`}>
                        <img src={`${imageUrl}${movie.poster_path}`} />
                    </Link>
                </div>
            )
        })
        return (
            <div className='row'>
                {movieImage}
            </div>
        );
    }
}

export default Home;