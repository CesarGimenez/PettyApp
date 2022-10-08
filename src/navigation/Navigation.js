import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import React from "react";
import { Veterinary } from "../screens";
import { AccountStack } from "./AccountStack";
import { screen } from "../utils";
import { ShelterStack } from "./ShelterStack";
import Search from "../screens/Search";
import { SearchStack } from "./SearchStack";
import { useNavigation, useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Navigation = ({ route }) => {
  const navigation = useNavigation();
  console.log(route);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTransparent: true,
        headerShown: false,
        tabBarActiveTintColor: "#6852A5",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
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
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Veterinario" component={Veterinary} />
      <Tab.Screen name="Refugios" component={ShelterStack} />
      <Tab.Screen name="Cuenta" component={AccountStack} />
    </Tab.Navigator>
  );
};

const IconOptions = (route, color, size) => {
  let iconName = "";

  if (route?.name === "Cuenta") {
    iconName = "account";
  }

  if (route?.name === "Veterinario") {
    iconName = "medical-bag";
  }

  if (route?.name === "Refugios") {
    iconName = "home-heart";
  }

  if (route?.name === "Search") {
    iconName = "paw";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={30} />
  );
};

export { Navigation };
