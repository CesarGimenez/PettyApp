import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
// import { LoadingModal } from "../../../components";
import { AccountOptions } from "../../components/Account/accountOptions";
import { InfoUser } from "../../components/Account/infoUser";
import { styles } from "./styles";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);
  const auth = getAuth();

  const onReload = () => setReload((prevState) => !prevState);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <ScrollView style={{ marginBottom: 100 }}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions onReload={onReload} />

      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyle1}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />

      {/* <LoadingModal show={loading} text={loadingText} /> */}
    </ScrollView>
  );
}
