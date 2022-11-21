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
import CalendarPicker from "react-native-calendar-picker";

import React, { useState } from "react";

import agendarStyle from "./agendarStyles";
import { getAuth } from "firebase/auth";
import petData from "../../pettyData.json";

const styles = StyleSheet.create({ ...agendarStyle });

const Agendar = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const auth = getAuth();
  const { currentUser } = auth;
  const id = route.params.id;
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CalendarPicker />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={styles.textStyle}
                onPress={() => navigation.navigate("AgendarDone", { id: id })}
              >
                Confirmar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View
        style={{
          padding: 35,
          paddingTop: 50,
        }}
      >
        <Image style={styles.circleStyle} />

        <Image
          style={styles.pic1Style}
          source={{
            uri: pet.photos[0],
          }}
        />

        <Image
          style={styles.pic2Style}
          source={{
            uri: currentUser.photoURL,
          }}
        />

        <Text style={styles.textTitle}>{`FELICIDADES `}</Text>

        <Text style={styles.textSubTitle}>{`estás a solo un paso de `}</Text>

        <Text
          style={{
            fontSize: 25,
            color: "#FFF",
            marginTop: 10,
            alignSelf: "center",
            alignContent: "center",
            fontWeight: "bold",
            marginBottom: 60,
          }}
        >
          {`conocer a tu mascota ideal `}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: "#FFF",
            marginTop: 10,
            alignSelf: "center",
            alignContent: "center",
            marginBottom: 80,
          }}
        >
          {`Es tiempo de visitarla `}
        </Text>

        <Button
          title="Agendar cita"
          buttonStyle={styles.btnContainer}
          titleStyle={{ fontSize: 20 }}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </ScrollView>
  );
};

export default Agendar;
