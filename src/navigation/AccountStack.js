import {
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account } from "../screens";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignUp";

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
        name={screen.accountStack.login}
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screen.accountStack.register}
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
