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
import ForYou from "./ForYou";
import Fresh from "./Fresh";
import Viral from "./Viral";

const Meet5_home = ({ navigation }) => {
  const nav = useNavigation();
  const [activeTab, setActiveTab] = useState("For You");

  const tabs = ["For You", "Fresh", "Viral"];

  const renderContent = () => {
    switch (activeTab) {
      case "For You":
        return <ForYou />;
      case "Fresh":
        return <Fresh />;
      case "Viral":
        return <Viral />;
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
            style={styles.tabItem}
            onPress={() => setActiveTab(tab)}
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

export default Meet5_home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  headerRow: {
    paddingHorizontal: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
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
    width: 25,
    height: 25,
  },

  // Tab Styles
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
  },
  tabItem: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
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
    width: 20,
    backgroundColor: "#339CFF",
    borderRadius: 2,
  },
});
