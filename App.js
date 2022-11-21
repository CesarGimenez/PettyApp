import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { enableScreens } from "react-native-screens";
import OnboardingScreen from "./src/views/OnboardingScreen";
import Agendar from "./src/views/Agendar";
import Calendar from "./src/screens/Calendar";

import AgendarDone from "./src/views/AgendarDone";
import Login from "./src/screens/Login";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import PetProfile from "./src/components/PetProfile/index";
import ConfirmAdoption from "./src/views/ConfirmAdoption";
import Congrats from "./src/views/Congrats";

enableScreens();
const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Register"}
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PetProfile"
          component={PetProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"SignIn"}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Agendar"
          component={Agendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AgendarDone"
          component={AgendarDone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmAdoption}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Congrats"
          component={Congrats}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
