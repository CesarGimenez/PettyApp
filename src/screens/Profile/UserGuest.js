import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils/screenName";
import { styles } from "./styles";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../assets/welcome1.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de Petty</Text>
      <Text style={styles.description}>
        ¿Estas en la busqueda de un nuevo amigo? Encuentralo de manera rapida y
        segura de una forma sencilla.
      </Text>

      <Button
        title="Iniciar sesion"
        onPress={() => goToLogin()}
        titleStyle={{ fontSize: 20 }}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}
