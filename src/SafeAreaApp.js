import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-view';
import { View, Text, StyleSheet } from 'react-native';

export default function SafeAreaApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>
            Look, I'm safe! Not under a status bar or notch or home indicator or
            anything! Very cool
        </Text>
      </View>
    </SafeAreaView>
  );
}