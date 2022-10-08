import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { enableScreens } from "react-native-screens";
import { initFirebase } from "./src/utils/firebase";
import { useEffect, useState } from "react";
import OnboardingScreen from "./src/views/OnboardingScreen";
import Login from "./src/screens/Login";
import SignIn from "./src/screens/signIn";
import SignUp from "./src/screens/SignUp";

enableScreens();

export default function App() {
  const [isAuth, setAuth] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setAuth(user ? true : false);
    });
  }, []);

  return (
    <NavigationContainer>
      {isAuth ? <Navigation /> : <SignUp />}
    </NavigationContainer>
  );
}
