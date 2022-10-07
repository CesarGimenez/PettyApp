import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import React from "react";
import { Account, Posts, Shelter, Veterinary } from "../screens";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTransparent: true,
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
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
      <Tab.Screen name="Mi cuenta" component={Account} />
    </Tab.Navigator>
  );
};

const IconOptions = (route, color, size) => {
  let iconName = "";

  if (route?.name === "Mi cuenta") {
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