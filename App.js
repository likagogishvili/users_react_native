import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import Card from "./Card/Card";

export default function App() {
  const [users, setUsers] = useState([]);
  const url = "https://dummyjson.com/users";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        let users = res.data.users;
        setUsers(users);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderCard = ({ item }) => {
    return <Card user={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  listContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
});
