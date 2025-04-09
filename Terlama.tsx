import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notifikasi = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}

      {/* Centered Image and Text */}
      <View style={styles.centerContent}>
        <Image
          source={require("./assets/Ghost.png")} // Ganti jika file-nya berbeda
          style={styles.centerImage}
          resizeMode="contain"
        />
        <Text style={styles.centerText}>Data tidak tersedia</Text>
      </View>
    </View>
  );
};

export default Notifikasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginBottom: 10,
  },
  drawerButton: {
    padding: 8,
    marginRight: 10,
  },
  drawerIcon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  logo: {
    width: 80,
    height: 30,
  },

  centerContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15, // Lebih naik
  },
  centerImage: {
    width: 50, // Lebih kecil dari sebelumnya
    height: 50,
    marginBottom: 6,
  },
  centerText: {
    fontSize: 14, // Ukuran teks lebih kecil
    color: "#666",
  },
});
