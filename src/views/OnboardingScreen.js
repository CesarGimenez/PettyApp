import React from "react";
import { StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

let styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    resizeMode: "contain",
    width: 400,
    height: 400,
  },
});

const OnboardingScreen = ({ navigation }) => (
  <Onboarding
    onDone={() => navigation.navigate("Navigation")}
    pages={[
      {
        backgroundColor: "#E5E5E5",
        image: (
          <Image
            source={require("../../assets/welcome1.png")}
            style={styles.image}
          />
        ),
        title: "Petty uniendo corazones!",
        subtitle: "Estás a punto de conocer al nuevo integrante de la familia",
      },
      {
        backgroundColor: "#E5E5E5",
        image: (
          <Image
            source={require("../../assets/welcome1.png")}
            style={styles.image}
          />
        ),
        title: "Es muy facil!",
        subtitle: "Primero especifica la ubicacion de tu preferencia ",
      },
      {
        backgroundColor: "#E5E5E5",
        image: (
          <Image
            source={require("../../assets/welcome1.png")}
            style={styles.image}
          />
        ),
        title: "Solo un paso mas!",
        subtitle:
          "Selecciona con cual de nuestros buenos amigos quieres compartir!",
      },
    ]}
  />
);

export default OnboardingScreen;
