import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Calendar } from "../screens";
import { AccountStack } from "./AccountStack";
import { SearchStack } from "./SearchStack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { AddPetScreen } from "../screens/AddPet/AddPet";

const Tab = createBottomTabNavigator();

const Navigation = ({ route }) => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTransparent: true,
        headerShown: false,
        tabBarActiveTintColor: "#6852A5",
        tabBarInactiveTintColor: "#BBC3CE",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          paddingBottom: 20,
        },
        tabBarIcon: ({ color, size }) => IconOptions(route, color, size),
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}
    >
      <Tab.Screen name="Buscar" component={SearchStack} />
      {/* <Tab.Screen name="Crear Mascota" component={AddPetScreen} /> */}
      <Tab.Screen name="Mis encuentros" component={Calendar} />
      <Tab.Screen name="Cuenta" component={AccountStack} />
    </Tab.Navigator>
  );
};

const IconOptions = (route, color, size) => {
  let iconName = "";

  if (route?.name === "Cuenta") {
    iconName = "user";
  }

  if (route?.name === "Mis encuentros") {
    iconName = "clock-o";
  }

  /*   if (route?.name === "Veterinario") {
    iconName = "medical-bag";
  }

  if (route?.name === "Refugios") {
    iconName = "home-heart";
  } */

  if (route?.name === "Buscar") {
    iconName = "paw";
  }

  return <FontAwesome name={iconName} size={24} color={color} />;
};

export { Navigation };
