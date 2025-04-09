import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import tab components
import Terbaru from "./Terbaru";
import Terlama from "./Terlama";
import Topik from "./Topik";

const profil = () => {
  const nav = useNavigation();
  const [activeTab, setActiveTab] = useState("Terbaru");

  const tabs = ["Terbaru", "Terlama", "Topik"];

  const renderContent = () => {
    switch (activeTab) {
      case "Terbaru":
        return <Terbaru />;
      case "Terlama":
        return <Terlama />;
      case "Topik":
        return <Topik />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => nav.openDrawer()} style={styles.drawerButton}>
          <Text style={styles.drawerIcon}>☰</Text>
        </TouchableOpacity>

        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={{ flex: 1 }} />

        <TouchableOpacity onPress={() => alert("Fitur pencarian belum aktif")}>
          <Image
            source={require("./assets/search.png")}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tabItem}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <View style={{ flex: 1 }}>{renderContent()}</View>
    </View>
  );
};

export default profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  drawerButton: {
    padding: 8,
    borderRadius: 5,
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
  searchIcon: {
    width: 24,
    height: 24,
  },

  // Tab Styles
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabItem: {
    alignItems: "center",
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#999",
  },
  tabTextActive: {
    color: "#000",
  },
  activeIndicator: {
    marginTop: 5,
    height: 3,
    width: 24,
    backgroundColor: "#339CFF",
    borderRadius: 2,
  },
});
