import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { topicsList } from "./dataTopic";

const TopicsTab = () => {
  const nav = useNavigation();
  const [activeTab, setActiveTab] = useState<"Topik" | "Sudah Gabung">("Topik");
  const [joinedTopics, setJoinedTopics] = useState<string[]>([]);

  const toggleJoin = (topicId: string) => {
    setJoinedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const filteredTopics =
    activeTab === "Topik"
      ? topicsList.filter((topic) => !joinedTopics.includes(topic.id)) // hanya yang belum gabung
      : topicsList.filter((topic) => joinedTopics.includes(topic.id)); // hanya yang sudah gabung

  const renderTopicItem = ({ item }: any) => {
    const isJoined = joinedTopics.includes(item.id);

    return (
      <View style={styles.topicItem}>
        <Image source={item.image} style={styles.topicImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.topicName}>{item.name}</Text>
          <Text style={styles.memberCount}>{item.members} member</Text>
        </View>
        <TouchableOpacity
          style={[styles.joinButton, isJoined && styles.joinedButton]}
          onPress={() => toggleJoin(item.id)}
        >
          <Text style={styles.joinText}>
            {isJoined ? "Sudah gabung" : "Gabung"}
          </Text>
        </TouchableOpacity>
      </View>
    );
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
      </View>

      {/* Tab Topik & Sudah Gabung */}
      <View style={styles.topicTabRow}>
        {["Topik", "Sudah Gabung"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as "Topik" | "Sudah Gabung")}
            style={styles.topicTabItem}
          >
            <Text
              style={[
                styles.topicTabText,
                activeTab === tab && styles.topicTabTextActive,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* List Topik */}
      <FlatList
        data={filteredTopics}
        keyExtractor={(item) => item.id}
        renderItem={renderTopicItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default TopicsTab;

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

  // Tab Topik / Sudah Gabung
  topicTabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
    marginBottom: 10,
  },
  topicTabItem: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  topicTabText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#999",
  },
  topicTabTextActive: {
    color: "#000",
  },
  activeIndicator: {
    marginTop: 5,
    height: 3,
    width: 20,
    backgroundColor: "#339CFF",
    borderRadius: 2,
  },

  topicItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  topicImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  topicName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  memberCount: {
    fontSize: 12,
    color: "#888",
  },
  joinButton: {
    backgroundColor: "#72B4DA",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  joinedButton: {
    backgroundColor: "#ccc",
  },
  joinText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});
