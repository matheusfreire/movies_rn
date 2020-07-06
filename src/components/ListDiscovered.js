import React, { Component } from "react";
import {
    ActivityIndicator,
    SectionList,
    View,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import HeaderSection from "./HeaderSection";
import { connect } from "react-redux";
import { fetchGenres, fetchMoviesByGenre } from "../utils/Api";
import { actionGetGenres } from "../utils/Actions";
import MovieCard from "./MovieCard";

class ListDiscovered extends Component {

    state = {
        loadingGenres: true,
        genres: [],
        data: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getGenres();
    }

    getGenres() {
        fetchGenres()
            .then((result) => {
                result.genres.forEach((genre) => {
                    fetchMoviesByGenre(genre.id).then((resultMovies) => {
                        const value = resultMovies.results
                        const key = genre.name
                        const obj = { "title": key, "data": value }
                        const { data } = this.state
                        data.push(obj)
                        this.setState({ data: data })
                    });
                });
                this.props.dispatch(actionGetGenres(result))
            }).then(() => {
                this.setState({ loadingGenres: false })
            })
            .catch((error) => {

                this.setState({ loadingGenres: false })
            })
    }

    render() {
        const { loadingGenres, data } = this.state
        let componentGenres;
        if (loadingGenres) {
            componentGenres = <ActivityIndicator size="large" color="#2F95D6" />
        } else {
            componentGenres =
                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <TouchableOpacity key={item} onPress={() => this.props.navigation.navigate('DeckDetail', { deck: item })}>
                                <HeaderSection title={item.title} />
                                <FlatList
                                    data={item.data}
                                    renderItem={({ item }) => <MovieCard item={item} />}
                                    keyExtractor={item => item.id}
                                    horizontal={true}
                                    />
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                        horizontal={false}
                    />
                </View>
        }
        return (
            <View>
                {componentGenres}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({ genres: state })

export default connect(
    mapStateToProps
)(ListDiscovered)