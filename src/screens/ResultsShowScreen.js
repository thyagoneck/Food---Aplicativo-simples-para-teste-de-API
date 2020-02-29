import React, { useState, useEffect } from "react";
import { View, Image, Text, FlatList, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => {
          return photo;
        }}
        renderItem={({ item }) => {
          return (
            <Image style={styles.imageStyle} source={{ uri: item }}></Image>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 5
  }
});

export default ResultsShowScreen;
