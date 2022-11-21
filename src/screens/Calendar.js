import { View, Text, ScrollView, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import petData from "../../pettyData.json";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Calendar = ({ route, navigation }) => {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  const id = route?.params?.id;
  const petFilter = petData.filter((pet) => pet.id == id);
  const pet = petFilter[0];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: 100,
        backgroundColor: "#F6F4F9",
      }}
    >
      <View
        style={{
          padding: 5,
          height: 180,
          backgroundColor: "white",
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#070821",
            padding: 20,
            marginTop: 20,
            marginBottom: 15,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Mis Encuentros
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "white",
            backgroundColor: "#9B8ACA",
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 8,
            paddingTop: 8,
            margin: 20,
            alignSelf: "flex-start",
            borderRadius: 50,
          }}
        >
          Próximos
        </Text>
      </View>
      {pet && hasLogged && (
        <View
          style={{
            padding: 5,
            backgroundColor: "white",
            borderRadius: 35,
            marginTop: 50,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                flex: 0,
                width: 130,
                height: 130,
                resizeMode: "contain",
                borderRadius: 25,
                alignSelf: "flex-start",
                padding: 10,
                margin: 15,
              }}
              source={{
                uri: pet?.photos[0],
              }}
            />

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#070821",
                  padding: 10,
                  marginTop: 10,
                  alignSelf: "flex-start",
                  fontWeight: "bold",
                }}
              >
                {pet?.name || "Sin nombre"}
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  color: "#070821",
                  padding: 10,
                  alignSelf: "flex-start",
                  fontWeight: "bold",
                }}
              >
                {pet?.gender === "M" ? "Macho" : "Hembra"},{" "}
                {pet?.breed || "Sin raza"}
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 5,
              backgroundColor: "#F2F0F5",
              borderRadius: 40,
              marginTop: 20,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#070821",
                padding: 15,
                alignSelf: "flex-start",
              }}
            >
              <Ionicons name="home" size={16} color={"black"} />
              {`  ${pet?.address}` || "Sin direccion"}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: "#070821",
                alignSelf: "flex-start",
                paddingLeft: 30,
              }}
            >
              Altamira Caracas, Ve
            </Text>

            <Text
              style={{
                fontSize: 15,
                color: "#070821",
                padding: 20,
                marginTop: 5,
                alignSelf: "flex-start",
              }}
            >
              <Ionicons name="calendar" size={16} color={"black"} />
              Jueves, 15 Sep - 10:30 am
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  backgroundColor: "#9B8ACA",
                  paddingLeft: 25,
                  paddingRight: 25,
                  paddingBottom: 8,
                  paddingTop: 8,
                  margin: 20,
                  alignSelf: "center",
                  borderRadius: 50,
                }}
              >
                Cancelar
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  backgroundColor: "#9B8ACA",
                  paddingLeft: 25,
                  paddingRight: 25,
                  paddingBottom: 8,
                  paddingTop: 8,
                  margin: 20,
                  alignSelf: "center",
                  borderRadius: 50,
                }}
                onPress={() => navigation.navigate("Confirm", { id })}
              >
                Aceptar
              </Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Calendar;
