import React, { Component } from "react";
import { fetchMoviesByGenre } from "../utils/Api";


class MovieDetails extends Component{

    constructor(propst){
        super(props);
    }

    state={
        loading: true
    }

    componentDidMount(){
        fetchMoviesByGenre(this.props.movie.id)
    }

    render(){
        return(
            <View>
                
            </View>
        );
    }

}

const mapStateToProps = (state) => ({ movie: state})

export default connect(
  mapStateToProps
)(MovieDetails)