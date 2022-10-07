import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initFirebase } from "./src/utils/firebase";
import { useEffect, useState } from "react";
// import { StepOne } from "./src/screens/onboarding";
import OnboardingScreen from './views/OnboardingScreen'

export default function App() {
  const [isAuth, setAuth] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setAuth(user ? true : false);
    });
  }, []);

  return isAuth ? (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  ) : // <StepOne></StepOne>
  null;
}
