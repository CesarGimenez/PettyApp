import { View, Text, ScrollView, Image, StyleSheet, Modal, Pressable } from "react-native";
import { Input, Button } from "react-native-elements";
import CalendarPicker from 'react-native-calendar-picker';


import React, { useState } from "react";


import agendarStyle from "./agendarStyles";

const styles = StyleSheet.create({ ...agendarStyle });

const Agendar = () => {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: 100,
        backgroundColor: "#6852A5",
      }}
    >

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CalendarPicker
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => 
                {
                    setModalVisible(!modalVisible)
                    //go to mis encuentros
                
                }
            }
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View
        style={{
          padding: 35,
          paddingTop: 50,
        }}
      >
 
        <Image style={styles.circleStyle} source={{ uri: ""}} />

        <Image style={styles.pic1Style} source={{ uri: "https://us.123rf.com/450wm/olyamax/olyamax2006/olyamax200600018/149899027-perrito-divertido-asoma-la-nariz-a-la-c%C3%A1mara-lindo-perro-perdiguero-de-seis-semanas-de-edad-mirando-.jpg?ver=6"}} />

        <Image style={styles.pic2Style} source={{ uri: "https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000"}} />

        <Text
          style={styles.textTitle}
        >
          {`FELICIDADES `}           
        </Text>

        <Text
          style={styles.textSubTitle}
        >
          {`estas a solo un paso de `}           
        </Text>

        <Text
          style={{
            fontSize: 25,
            color: "#FFF",
            marginTop: 10,
            alignSelf: 'center',
            alignContent: 'center',
            fontWeight: 'bold',
            marginBottom: 60,
          }}
        >
          {`conocer a tu mascota ideal `}           
        </Text>


        <Text
          style={{
            fontSize: 18,
            color: "#FFF",
            marginTop: 10,
            alignSelf: 'center',
            alignContent: 'center',
            marginBottom: 80,
          }}
        >
          {`Es tiempo de conocerla `}           
        </Text>
    

        <Button
                title="Agendar cita"
                buttonStyle={styles.btnContainer}
                titleStyle={{ fontSize: 20 }}
                onPress={() => setModalVisible(true)}
 
        />  
      </View>
    </ScrollView>
  );
};

export default Agendar;
