import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import usersStories from "./stories";

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.profileContainer}
      onPress={() => navigation.navigate("Stories", { userIndex: item.index })}
    >
      <Image source={item.profilePicture} style={styles.profileImage} />

      <Text style={styles.username}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Instagram</Text>
      </View>

      <FlatList
        data={usersStories.map((user, index) => ({ ...user, index }))}
        renderItem={renderItem}
        keyExtractor={(item) => item.userId}
        numColumns={3}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  listContent: {
    padding: 10,
  },
  profileContainer: {
    alignItems: "center",
    margin: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  username: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default Home;
