import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import HeaderSection from "./HeaderSection";
import { connect } from "react-redux";
import { fetchTrendings } from "../utils/Api";
import { actionGetTrendings } from "../utils/Actions";
import MovieCard from "./MovieCard";
import ListDiscovered from "./ListDiscovered";


class Movies extends Component {

  state = {
    loadingTrendings: true,
    currentPage: 1,
    trendings: [],
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getTrendings();
  }

  getTrendings() {
    fetchTrendings()
      .then((result) => {
        this.props.dispatch(actionGetTrendings(result))
      })
      .then(() => {
        this.setState({ loadingTrendings: false })
      })
      .catch((error) => {
        this.setState(() => { loadingTrendings: false })
      })
  }

  render() {
    const { loadingTrendings } = this.state
    const { trendings } = this.props
    let componentTrendings;
    if (loadingTrendings) {
      componentTrendings = <ActivityIndicator size="large" color="#2F95D6" />
    } else {
      componentTrendings = <FlatList
        data={trendings.results}
        renderItem={({ item }) => <MovieCard item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    }

    return (
      <SafeAreaView style={styles.container}>
          <HeaderSection title={"Mais populares"} />
          <View style={styles.flatList}>
            {componentTrendings}
          </View>
          <View style={{ paddingTop: 30 }} />
          <ListDiscovered />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  flatList: {
    flexGrow: 0
  }
});

const mapStateToProps = (state) => ({ trendings: state})

export default connect(
  mapStateToProps
)(Movies)