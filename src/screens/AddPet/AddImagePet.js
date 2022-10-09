import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import { StyleSheet, Dimensions } from "react-native";

const widthScreen = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  content: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: widthScreen,
  },
});

export function ImagePet(props) {
  const { formik } = props;

  const primaryImage = formik.values.images[0];

  return (
    <View style={styles.content}>
      <Image
        source={
          primaryImage
            ? { uri: primaryImage }
            : {
                uri: "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
              }
        }
        style={styles.image}
      />
    </View>
  );
}
