import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import deadliftImage from "../../assets/deadlift.jpeg";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dafb" barStyle={"default"} hidden={true} />
      <View style={styles.viewContainer}>
        <Text style={styles.text}>WORKOUT ROUTINE</Text>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 25,
              borderRadius: 7,
            }}
            source={deadliftImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#CD853F",
    padding: 10,
    height: 150,
    width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default HomeScreen;
