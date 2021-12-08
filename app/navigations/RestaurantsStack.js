import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurants from "../screens/Restaurants/Restaurants";
import AddRestaurant from "../screens/Restaurants/AddRestaurant";
import Restaurant from "../screens/Restaurants/Restaurant";
import AddReviewRestaurant from "../screens/Restaurants/AddReviewRestaurant";

const Stack = createStackNavigator();

export default function ResaturantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name="add-restaurant"
        component={AddRestaurant}
        options={{ title: "Añadir nuevo restaurante" }}
      />
      <Stack.Screen name="restaurant" component={Restaurant} />
      <Stack.Screen
        name="add-review-restaurant"
        component={AddReviewRestaurant}
        options={{ title: "Nuevo comentario" }}
      />
    </Stack.Navigator>
  );
}
