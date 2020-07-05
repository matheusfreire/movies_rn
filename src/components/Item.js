import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Item extends Component {
    render(){
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
      paddingTop:20 ,
      paddingLeft: 20,
      marginVertical: 8,
    },
    title: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold'
    }
  });

export default Item;