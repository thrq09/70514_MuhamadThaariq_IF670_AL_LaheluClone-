import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { posts } from "./dataForYou";

const screenWidth = Dimensions.get("window").width;

const ForYou = () => {
  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <Image source={post.avatar} style={styles.avatar} />
            <View>
              <Text style={styles.username}>{post.username}</Text>
              <Text style={styles.time}>{post.time}</Text>
            </View>
          </View>

          {/* Caption */}
          <Text style={styles.caption}>{post.caption}</Text>

          {/* Hashtags */}
          <View style={styles.hashtags}>
            {post.hashtags.map((tag, i) => (
              <Text key={i} style={styles.hashtag}>
                {tag}
              </Text>
            ))}
          </View>

          {/* Image */}
          <Image source={post.image} style={styles.postImage} />

          {/* Action Bar */}
          <View style={styles.actionBar}>
            <TouchableOpacity>
              <Text style={styles.actionText}>🤍 Vote</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionText}>💬 0</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionText}>🪙 Sawer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionText}>🔗 Kirim</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ForYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: "#777",
  },
  caption: {
    fontSize: 14,
    marginVertical: 5,
  },
  hashtags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },
  hashtag: {
    marginRight: 10,
    color: "#339CFF",
    fontSize: 12,
  },
  postImage: {
    width: screenWidth - 40, // 10 padding kiri + kanan + 10 padding card
    height: (screenWidth - 40) * 0.75, // rasio aspek 4:3
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  actionText: {
    fontSize: 13,
    color: "#333",
  },
});
