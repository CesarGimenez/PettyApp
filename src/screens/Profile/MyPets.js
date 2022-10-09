import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { Avatar, Icon } from "react-native-elements";
import { styles } from "./styles";

const MyPets = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text onPress={() => goBack()}>
        <Icon
          type="material-community"
          name="chevron-left"
          size={40}
          color={"#9B8ACA"}
        />
      </Text>
      <View style={styles.contentInfo}>
        <Avatar
          size="xlarge"
          rounded
          containerStyle={styles.avatar}
          icon={{ type: "material", name: "person" }}
          source={{
            uri: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/quiero%20sacar%20una%20buena%20fotografia%20de%20mi%20perro%201.png?itok=1Hs4wBzm",
          }}
        ></Avatar>

        <View style={{ alignContent: "center", alignItems: "center" }}>
          <Text style={styles.displayName}>Spike</Text>
          <Text>Cruzado</Text>
          {getStatus("completed")}
        </View>
      </View>
    </View>
  );
};

const getStatus = (status) => {
  if (status === "pending") {
    return (
      <Text
        style={{
          marginTop: 5,
          backgroundColor: "#DDD6F7",
          borderRadius: 50,
          padding: 10,
          color: "#F4A325",
        }}
      >
        Pendiente
      </Text>
    );
  }
  if (status === "completed") {
    return (
      <Text
        style={{
          marginTop: 5,
          backgroundColor: "#DDD6F7",
          borderRadius: 50,
          padding: 10,
          color: "#9B8ACA",
        }}
      >
        Completado
      </Text>
    );
  }
};

export default MyPets;
