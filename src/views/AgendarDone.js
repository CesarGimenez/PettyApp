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

const styles = StyleSheet.create({ ...agendarStyle });

const AgendarDone = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const id = route?.params?.id;
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
        <Text style={styles.textTitle2}>{`Tu encuentro ha sido`}</Text>
        <Text style={styles.textTitle3}>{`programado`}</Text>

        <Text style={styles.textSubTitle2}>
          {`Mario te espera para conocerte y lograr su adopción`}
        </Text>

        <Button
          title="Ir a mis encuentros"
          buttonStyle={styles.btnContainer}
          titleStyle={{ fontSize: 20 }}
          onPress={() => navigation.navigate("Mis encuentros", { id: id })}
        />
      </View>
    </ScrollView>
  );
};

export default AgendarDone;
