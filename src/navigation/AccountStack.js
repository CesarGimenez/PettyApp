import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account } from "../screens";
import Login from "../screens/Login";
import { UserGuestScreen } from "../screens/Profile/UserGuest";
import { UserLoggedScreen } from "../screens/Profile/UserLogged";

import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator navigation={navigation}>
      <Stack.Screen
        name={screen.accountStack.account}
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen.accountStack.loginSocial}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"UserGuest"}
        component={UserGuestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"UserLogged"}
        component={UserLoggedScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
