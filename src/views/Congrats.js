import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import agendarStyle from "./agendarStyles";
import petData from "../../pettyData.json";

const styles = StyleSheet.create({ ...agendarStyle });

const AgendarDone = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const id = route?.params?.id;
  const petFilter = petData.filter((pet) => pet.id == id);
  const pet = petFilter[0];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: 100,
        backgroundColor: "#6852A5",
      }}
    >
      <View
        style={{
          padding: 35,
          paddingTop: 50,
        }}
      >
        <Ionicons
          name={"checkmark-circle"}
          size={120}
          color={"white"}
          style={{
            alignSelf: "center",
            marginTop: 70,
          }}
        />
        <Text
          style={{
            color: "#FFF",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Felicidades!
        </Text>

        <Text
          style={{
            color: "#FFF",
            fontSize: 23,
            fontWeight: "bold",
            marginBottom: 50,
            textAlign: "center",
          }}
        >
          Tienes un nuevo integrante en la familia!
        </Text>

        <Text
          style={{
            color: "#FFF",
            textAlign: "center",
            marginBottom: 70,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {pet?.name || "Sin nombre"} es parte de tu vida,{" "}
          {pet?.gender === "M" ? "cuídalo" : "cuídala"}!
        </Text>

        <Button
          title="Novedades"
          buttonStyle={styles.btnContainer}
          titleStyle={{ fontSize: 20 }}
          onPress={() => navigation.navigate("News")}
        />
      </View>
    </ScrollView>
  );
};

export default AgendarDone;
