import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Navigation } from "../navigation/Navigation";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => {
        navigation.navigate("Navigation");
      }}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/welcome1.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fe6e58",
          image: <Image source={require("../../assets/welcome2.png")} />,
          title: "The Title",
          subtitle: "This is the subtitle that sumplements the title.",
        },
        {
          backgroundColor: "#999",
          image: <Image source={require("../../assets/welcome2.png")} />,
          title: "Triangle",
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
