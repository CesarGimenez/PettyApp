import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import React from "react";
import { Account, Posts, Shelter, Veterinary } from "../screens";
import { AccountStack } from "./AccountStack";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

const Navigation = () => {
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
      <Tab.Screen name="Feed" component={Posts} />
      <Tab.Screen name="Veterinario" component={Veterinary} />
      <Tab.Screen name="Refugios" component={Shelter} />
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

  if (route?.name === "Feed") {
    iconName = "paw";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={30} />
  );
};

export { Navigation };
