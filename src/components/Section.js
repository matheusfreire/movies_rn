import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  SectionList
} from "react-native";
import Item from "./Item";
import HeaderSection from "./HeaderSection";
import { FlatList } from "react-native-gesture-handler";
import MovieCard from "./MovieCard";


const DATA = [
  {
    title: "Mais populares",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Gêneros",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  }
];

const listData = [
    {
      "id": 556574,
      "video": false,
      "vote_count": 17,
      "vote_average": 8.3,
      "title": "Hamilton",
      "release_date": "2020-07-03",
      "original_language": "en",
      "original_title": "Hamilton",
      "genre_ids": [
        18,
        36,
        10402
      ],
      "backdrop_path": "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
      "adult": false,
      "overview": "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
      "poster_path": "/zmxCLftLPw7NqjiA0Eu9c8ubP2v.jpg",
      "popularity": 102.224,
      "media_type": "movie"
    },
    {
      "original_name": "Warrior Nun",
      "id": 87689,
      "name": "Warrior Nun",
      "vote_count": 20,
      "vote_average": 8.4,
      "first_air_date": "2020-07-02",
      "poster_path": "/77OM9jMJ8nglaolHLwrAW7kvadV.jpg",
      "genre_ids": [
        18,
        10759,
        10765
      ],
      "original_language": "en",
      "backdrop_path": "/u2R4WKNvEQAfgiEl6kAOvj6AuFv.jpg",
      "overview": "After waking up in a morgue, an orphaned teen discovers she now possesses superpowers as the chosen Halo-Bearer for a secret sect of demon-hunting nuns.",
      "origin_country": [
        "US"
      ],
      "popularity": 70.368,
      "media_type": "tv"
    },
    {
      "original_name": "Hanna",
      "id": 54155,
      "name": "Hanna",
      "vote_count": 132,
      "vote_average": 7.1,
      "first_air_date": "2019-03-28",
      "poster_path": "/iYUtjx1EN4SVTgxd2TB4cZTGSQb.jpg",
      "genre_ids": [
        18,
        10759
      ],
      "original_language": "en",
      "backdrop_path": "/6Fzyuwn8KeMCSqRILfdrDmCvmod.jpg",
      "overview": "This thriller and coming-of-age drama follows the journey of an extraordinary young girl as she evades the relentless pursuit of an off-book CIA agent and tries to unearth the truth behind who she is. Based on the 2011 Joe Wright film.",
      "origin_country": [
        "US"
      ],
      "popularity": 96.652,
      "media_type": "tv"
    }
];


class Section extends Component {
  constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isRefreshing: false,
			currentPage: 1,
			list: {
				results: []
			}
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Item title={"Mais populares"} />  
        <FlatList
          data={listData}
          renderItem={({ item }) => <MovieCard item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default Section;