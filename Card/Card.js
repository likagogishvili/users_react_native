import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {props.user.firstName + "  " + props.user.lastName}
          </Text>
          <Text style={styles.category}>{props.user.email}</Text>
          <Text style={styles.price}>Price: {props.user.id}$</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#224F1E",
    width: 180,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#B1D3C2",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#224F1E",
  },
  category: {
    fontSize: 14,
    color: "#555555",
    textAlign: "center",
    color: "#224F1E",
  },
  price: {
    fontSize: 14,
    textAlign: "center",
    color: "#224F1E",
  },
});

export default Card;
