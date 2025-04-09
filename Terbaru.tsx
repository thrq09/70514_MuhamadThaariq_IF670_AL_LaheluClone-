import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from "react-native";

const TerbaruPage = () => {
  return (
    <View style={styles.container}>
      {/* User Profile */}
      <View style={styles.profileContainer}>
        <Image
          source={require("./assets/pp2.png")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>@mthaariq15097682</Text>
        <Text style={styles.metaInfo}>
          0 post   ·   0 upvote   ·   23 Jan 2024
        </Text>
        <TouchableOpacity style={styles.medalButton}>
          <Text style={styles.medalText}>🎖️ Lihat 1 medali</Text>
        </TouchableOpacity>
      </View>

      {/* Empty State */}
      <View style={styles.emptyState}>
        <Image
          source={require("./assets/Ghost.png")}
          style={styles.ghostIcon}
          resizeMode="contain"
        />
        <Text style={styles.emptyText}>Data tidak tersedia</Text>
      </View>
    </View>
  );
};

export default TerbaruPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "flex-start",
    marginLeft: 20
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
    marginBottom: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  metaInfo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  medalButton: {
    backgroundColor: "#6ca6d9",
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  medalText: {
    color: "#fff",
    fontWeight: "bold",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    marginTop: 25, // sedikit naik
  },
  ghostIcon: {
    width: 60, // diperkecil
    height: 60,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});
