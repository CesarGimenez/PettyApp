import { View, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";

const Congrats = ({ navigation }) => {
  return (
    <View>
      <Text>Congrats</Text>
      <Text onPress={() => navigation.navigate("Search")}>
        <Icon
          type="material-community"
          name="chevron-left"
          size={40}
          color={"#9B8ACA"}
        />
      </Text>
    </View>
  );
};

export default Congrats;
