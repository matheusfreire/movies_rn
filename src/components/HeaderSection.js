import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";


class HeaderSection extends Component {
    render() {
        return (
            <Text style={styles.header}>{this.props.title}</Text>
        );
    }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 32,
      color: "white"
    },
  });
  

export default HeaderSection;