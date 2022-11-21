import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { Button, Icon } from "react-native-elements";
import { getAuth, updatePhoneNumber } from "firebase/auth";
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
    color: "#070821",
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
    color: "#070821",
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
    color: "gray",
    marginTop: 10,
  },
  textStyle2: {
    color: "#070821",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  bagde: {
    width: 80,
    padding: 3,
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
        backgroundColor: "#F9F8FD",
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

        <Text style={styles.textTitle}>Información de tu nueva mascota</Text>

        <Text style={styles.textStyle}>Nombre de la mascota</Text>
        <Text style={styles.textStyle2}>{pet?.name}</Text>
        <Text style={styles.textStyle}>Edad</Text>
        <Text style={styles.textStyle2}>{pet?.age}</Text>
        <Text style={styles.textStyle}>Raza</Text>
        <Text style={styles.textStyle2}>{pet?.breed}</Text>
        <Text style={styles.textStyle}>Género</Text>
        {pet?.gender === "M" ? (
          <Text style={styles.bagde}>Macho</Text>
        ) : (
          <Text style={styles.bagde}>Hembra</Text>
        )}
        <Text
          style={{
            fontSize: 20,
            color: "#070821",
            marginTop: 10,
            alignSelf: "center",
            alignContent: "center",
            fontWeight: "bold",
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          Encuesta del encuentro
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.textStyle2}>Vacunado</Text>
          <Icon
            type="material-community"
            name={pet?.vacunado ? "check" : "close"}
            size={40}
            color={"#9B8ACA"}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.textStyle2}>Castrado</Text>
          <Icon
            type="material-community"
            name={pet?.castrado ? "check" : "close"}
            size={40}
            color={"#9B8ACA"}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.textStyle2}>Desparasitado</Text>
          <Icon
            type="material-community"
            name={pet?.desparacitado ? "check" : "close"}
            size={40}
            color={"#9B8ACA"}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.textStyle2}>Buena salud</Text>
          <Icon
            type="material-community"
            name={pet?.healthy ? "check" : "close"}
            size={40}
            color={"#9B8ACA"}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.textStyle2}>Fue de tu agrado</Text>
          <Icon
            type="material-community"
            name={pet?.favorite ? "check" : "close"}
            size={40}
            color={"#9B8ACA"}
          />
        </View>
        <Text
          style={{
            fontSize: 22,
            color: "#070821",
            marginTop: 20,
            alignSelf: "center",
            alignContent: "center",
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          Recomendaciones
        </Text>
        <Text
          style={{
            marginBottom: 20,
          }}
        >
          Puedes dirigirte a estos centros de asistencia y completar su cuidado{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 50,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              type="material-community"
              name="plus"
              size={40}
              color={"#9B8ACA"}
            />
            <Text>Agregar</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              type="material-community"
              name="needle"
              size={40}
              color={"#9B8ACA"}
            />
            <Text>Veterinarios</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              type="material-community"
              name="needle"
              size={40}
              color={"#9B8ACA"}
            />
            <Text>Plan vacunas</Text>
          </View>
        </View>
        <Button
          title="Adoptar"
          buttonStyle={styles.btnContainer}
          titleStyle={{ fontSize: 20 }}
          onPress={() => navigation.navigate("Congrats", { id: pet.id })}
        />
        <Text
          style={{
            color: "#6852A5",
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Search")}
        >
          Seguir buscando
        </Text>
      </View>
    </ScrollView>
  );
};

export default ConfirmAdoption;
