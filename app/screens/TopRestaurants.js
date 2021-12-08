import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import Toast from "react-native-easy-toast";
import ListTopRestaurants from "../components/Ranking/ListTopRestaurants";

import { firebaseApp } from "../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function TopRestaurants(props) {
  const { navigation } = props;
  const [restaurants, setRestaurants] = useState([]);
  const toastRef = useRef();

  useEffect(() => {
    db.collection("restaurants")
      .orderBy("rating", "desc")
      .limit(5)
      .get()
      .then((response) => {
        const restaurantArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          restaurantArray.push(data);
        });
        setRestaurants(restaurantArray);
      });
  }, []);

  return (
    <View>
      <ListTopRestaurants restaurants={restaurants} navigation={navigation} />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}
