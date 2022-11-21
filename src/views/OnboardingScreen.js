import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import { Button } from "react-native-elements";

let styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    resizeMode: "contain",
    width: 400,
    height: 400,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: "center",

  },
  nextButton: {
    backgroundColor: "#9B8ACA",
    height: 45,
    width: 220,
    borderRadius: 25,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginRight: 80,
  },
});

const Square = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#F1A852" : "#E6E7F8";
  let radius = selected ? 50 : 25;
  let widthSquare = selected ? 25 : 9;
  return (
    <View
      style={{
        width: widthSquare,
        height: 9,
        marginHorizontal: 3,
        backgroundColor,
        top: -220,
        borderRadius: radius
      }}
    />
  );
};

const backgroundColor = (isLight) => (isLight ? "blue" : "lightblue");
const color = (isLight) => backgroundColor(!isLight);

const Next = ({ isLight, ...props }) => (
  <Button
    title={"Siguiente"}
    buttonStyle={styles.nextButton}
    containerViewStyle={{
      backgroundColor: "#9B8ACA",
    }}
    textStyle={{ color: color(isLight), fontWeight: 'bold' }}
    {...props}
  />
);

const Done = ({ isLight, ...props }) => (
  <Button
    title={"Siguiente"}
    buttonStyle={styles.nextButton}
    containerViewStyle={{
      backgroundColor: "#9B8ACA",
    }}
    textStyle={{ color: color(isLight), fontWeight: 'bold' }}
    {...props}
  />
);

const OnboardingScreen = ({ navigation }) => (
  <Onboarding
    onDone={() => navigation.navigate("Navigation")}
    showSkip={false}
    bottomBarHeight={80}
    transitionAnimationDuration={1}
    bottomBarColor={'#F4F2F9'}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Square}
    pages={[
      {
        backgroundColor: "#F4F2F9",
        image: (
          <Image
            source={require("../../assets/welcome1.png")}
            style={styles.image}
          />
        ),
        title: "Petty uniendo corazones",
        subtitle: "Estás a punto de conocer al nuevo integrante de la familia",
        titleStyles: { color: "#070821", fontWeight: "bold" },
      },
      {
        backgroundColor: "#F4F2F9",
        image: (
          <Image
            source={require("../../assets/welcome2.png")}
            style={styles.image}
          />
        ),
        title: "¡Es muy fácil!",
        subtitle: "Primero especifica la ubicación de tu preferencia ",
        titleStyles: { color: "#070821", fontWeight: "bold" },
      },
      {
        backgroundColor: "#F4F2F9",
        image: (
          <Image
            source={require("../../assets/welcome4.png")}
            style={styles.image}
          />
        ),
        title: "Estás más cerca",
        subtitle:
          "Selecciona con cual de nuestros buenos amigos quieres compartir",
        titleStyles: { color: "#070821", fontWeight: "bold" },
      },
      {
        backgroundColor: "#6852A5",
        image: (
          <Image
            source={require("../../assets/welcome3.png")}
            style={styles.image}
          />
        ),
        title: "¡Llegó el momento! ¿estás preparado?",
        subtitle:
          "Conoce a tu amigo soñado",
        titleStyles: { fontWeight: "bold" },
      },
    ]}
  />
  
);

export default OnboardingScreen;
