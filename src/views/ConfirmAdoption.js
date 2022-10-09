import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-elements";
import { getAuth } from "firebase/auth";
import petData from "../../pettyData.json";

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#9B8ACA",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "white",
    fontWeight: "bold",
  },
  circleStyle: {
    flex: 1,
    width: 190,
    height: 190,
    resizeMode: "contain",
    borderRadius: 100,
    position: "absolute",
    top: 70,
    left: 100,
    padding: 10,
    margin: 15,
    backgroundColor: "#9B8ACA",
    borderWidth: 1,
    borderColor: "#9B8ACA",
  },
  pic1Style: {
    flex: 1,
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius: 100,
    position: "absolute",
    top: 90,
    left: 50,
    padding: 10,
    margin: 15,
    zIndex: 10,
  },
  pic2Style: {
    flex: 1,
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius: 100,
    position: "absolute",
    top: 90,
    left: 210,
    padding: 10,
    margin: 15,
    zIndex: 10,
  },
  textTitle: {
    fontSize: 25,
    textAlign: "center",
    color: "black",
    marginTop: 280,
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
  textTitle2: {
    fontSize: 25,
    color: "#FFF",
    marginTop: 70,
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
  textTitle3: {
    fontSize: 25,
    color: "#FFF",
    marginBottom: 20,
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
  textSubTitle: {
    fontSize: 25,
    color: "black",
    marginTop: 10,
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
  textSubTitle2: {
    fontSize: 18,
    color: "#FFF",
    marginTop: 10,
    alignSelf: "center",
    alignContent: "center",
    marginBottom: 80,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#9B8ACA",
  },
  buttonClose: {
    backgroundColor: "#9B8ACA",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  bagde: {
    width: 100,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#9B8ACA",
    textAlign: "center",
    color: "#FFF",
  },
});

const ConfirmAdoption = ({ navigation, route }) => {
  const auth = getAuth();
  const { currentUser } = auth;
  const id = route?.params?.id;
  const petFilter = petData.filter((pet) => pet.id == id);
  const pet = petFilter[0];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: 100,
        backgroundColor: "#FFF",
      }}
    >
      <Text onPress={() => navigation.goBack()}>
        <Icon
          type="material-community"
          name="chevron-left"
          size={40}
          color={"#9B8ACA"}
        />
      </Text>
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

        <Text style={styles.textTitle}>Informacion de tu nueva mascota</Text>

        <Text>Nombre de la mascota</Text>
        <Text>{pet?.name}</Text>
        <Text>Edad</Text>
        <Text>{pet?.ade}</Text>
        <Text>Raza</Text>
        <Text>{pet?.breed}</Text>
        <Text>Genero</Text>
        {pet?.gender === "M" ? (
          <Text style={styles.bagde}>Macho</Text>
        ) : (
          <Text style={styles.bagde}>Hembra</Text>
        )}
        <Text
          style={{
            fontSize: 20,
            color: "black",
            marginTop: 10,
            alignSelf: "center",
            alignContent: "center",
            fontWeight: "bold",
            marginBottom: 60,
          }}
        >
          Encuesta del encuentro
        </Text>

        <Text
          style={{
            fontSize: 22,
            color: "black",
            marginTop: 10,
            alignSelf: "center",
            alignContent: "center",
            marginBottom: 10,
          }}
        >
          Recomendaciones
        </Text>
        <Text
          style={{
            marginBottom: 10,
          }}
        >
          Puedes dirigirte a estos centros de asistencia y completar su cuidado{" "}
        </Text>

        <Button
          title="Adoptar"
          buttonStyle={styles.btnContainer}
          titleStyle={{ fontSize: 20 }}
          onPress={() => navigation.navigate("Congrats")}
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmAdoption;
