import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: result.image_url }}
      ></Image>

      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.ratingStyle}>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: "bold"
  },
  nameStyle: {
    fontWeight: "bold"
  }
});

export default ResultDetail;
