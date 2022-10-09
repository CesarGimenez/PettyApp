import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./Profile/UserGuest";
import { UserLoggedScreen } from "./Profile/UserLogged";
// import { LoadingModal } from "../../components";

const Account = ({ navigation }) => {
  const [hasLogged, setHasLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  // if (hasLogged === null) {
  //   return <LoadingModal show text="Cargando" />;
  // }

  return <>{!hasLogged ? <UserGuestScreen /> : <UserLoggedScreen />}</>;
};

export default Account;
