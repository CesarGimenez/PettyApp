import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { ListItem, Icon, Text } from "react-native-elements";
import { map } from "lodash";
import { ChangeDisplayNameForm } from "./changeName";
import { Modal } from "../Modal";
import { ChangeEmailForm } from "./changeEmail";
import { ChangePasswordForm } from "./changePassword";
import { useNavigation } from "@react-navigation/native";

export function AccountOptions(props) {
  const { onReload } = props;

  const navigation = useNavigation();

  const Navigate = (name) => {
    navigation.navigate(name);
  };

  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

  const selectedComponent = (key) => {
    if (key === "displayName") {
      setRenderComponent(
        <ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />
      );
    }

    if (key === "email") {
      setRenderComponent(
        <ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />
      );
    }

    if (key === "password") {
      setRenderComponent(<ChangePasswordForm onClose={onCloseOpenModal} />);
    }

    onCloseOpenModal();
  };

  const menuOptions = getMenuOptions(selectedComponent, Navigate);

  return (
    <ScrollView>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            tyoe={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}

      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </ScrollView>
  );
}

function getMenuOptions(selectedComponent, Navigate) {
  return [
    {
      title: "Mis encuentros",
      iconType: "material-community",
      iconNameLeft: "paw",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => Navigate("Mis encuentros"),
    },
    {
      title: "Mis mascotas",
      iconType: "material-community",
      iconNameLeft: "cards-heart-outline",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => Navigate("MyPets"),
    },
    {
      title: "Servicio veterinario",
      iconType: "material-community",
      iconNameLeft: "medical-bag",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent(""),
    },
    {
      title: "Novedades",
      iconType: "material-community",
      iconNameLeft: "bullhorn-variant-outline",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => Navigate("News"),
    },
    {
      title: "Ayuda",
      iconType: "material-community",
      iconNameLeft: "help-circle-outline",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent(""),
    },
    {
      title: "Cambiar Nombre y Apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("email"),
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#9B8ACA",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("password"),
    },
  ];
}
