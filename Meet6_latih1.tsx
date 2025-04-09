import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notifikasi = () => {
  const nav = useNavigation();

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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.rulesText}>
          <Text style={styles.sectionTitle}>Introduksi{"\n"}</Text>
          Lahelu adalah sebuah tempat pemberi hiburan yang bersifat positif terhadap warga Indonesia. Lahelu memiliki komunitas pengawasan, serta admin yang bisa menghapus post yang melanggar aturan. Akun Lahelu yang terus menerus melanggar akan diblokir hingga di-ban secara permanen. Temukan peraturan di bawah yang harus dipatuhi saat menggunakan Lahelu.{"\n\n"}

          <Text style={styles.sectionTitle}>Pornografi / Pedofilia{"\n"}</Text>
          Dilarang menyebarkan konten yang berisi alat vital, ketelanjangan, pedofilia, dan hal-hal yang bersifat seksual.{"\n\n"}

          <Text style={styles.sectionTitle}>Kekerasan / Gore{"\n"}</Text>
          Dilarang menyebarkan konten orang terluka/mayat, tindakan kekerasan/penyiksaan terhadap makhluk hidup, penggunaan/pembuatan senjata semena-mena, dan konten grafis yang menjijikkan.{"\n\n"}

          <Text style={styles.sectionTitle}>Pengotoran Agama / Ras / Suku{"\n"}</Text>
          Dilarang melakukan pengejekan atau sindiran terhadap agama, ras, atau suku dalam bentuk apa pun.{"\n\n"}

          <Text style={styles.sectionTitle}>Memicu Drama{"\n"}</Text>
          Dilarang mencoba untuk membuat keributan, penyerangan suatu pihak, pengotoran nama baik, usaha membuat peperangan, dan penggunaan bahasa yang terlalu eksplisit.{"\n\n"}

          <Text style={styles.sectionTitle}>Penyalahgunaan Platform{"\n"}</Text>
          Dilarang:{"\n"}
          (1) Promosi produk/jasa di luar Lahelu, kecuali sudah berizin.{"\n"}
          (2) Eksploitasi sistem untuk kepentingan pribadi seperti mendapatkan upvote/saweran ilegal.{"\n"}
          (3) Tindakan mengemis.{"\n"}
          (4) Menyolong karya user lain.{"\n\n"}

          <Text style={styles.sectionTitle}>Konten Tidak Berkualitas{"\n"}</Text>
          Dilarang:{"\n"}
          (1) Menyebarkan konten yang tidak memiliki unsur menghibur sama sekali.{"\n"}
          (2) Menyalahgunakan fitur sensitivitas saat membuat post.{"\n"}
          (3) Bersifat spam.{"\n"}
          (4) Meme non-original yang terlalu sering disebarkan.
        </Text>
      </ScrollView>
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
  scrollContent: {
    paddingBottom: 30,
  },
  rulesText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 22,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 15,
  },
});
