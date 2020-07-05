import React, { Component } from "react";
import { Card } from "react-native-elements";
import { Text, View,Image, StyleSheet } from "react-native";

class MovieCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <View style={styles.cardContainer}>
                <Card image={{
                        uri: `https://image.tmdb.org/t/p/w185/${item.poster_path}`
                    }}
                    containerStyle={styles.card}
                    dividerStyle={styles.divider}
                    imageStyle={styles.cardImage}>
                    <Text style={styles.cardTitle}>
                        {this.getTitle(item)}
                    </Text>
                </Card>
            </View >
        );
    }

    getTitle(item) {
        if(typeof item.title === 'undefined'){
            return item.name;
        } else {
            return item.title
        }
    }
}

const styles = StyleSheet.create({
    cardContainer: {
		flex: 1,
        backgroundColor: 'black',
	},
	card: {
        minHeight: 148,
        backgroundColor: 'black',
    },
    divider: {
        backgroundColor: 'black'
    },
	cardImage: {
		height: 140,
		width: 140,
		borderTopLeftRadius: 1,
		borderBottomLeftRadius: 1
	},
	cardTitle: {
		color: 'white',
		fontSize: 16,
        fontWeight: 'bold',
	},
})

export default MovieCard;