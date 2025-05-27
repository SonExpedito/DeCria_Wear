import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Initial } from '../screens'

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Initial" 
        component={Initial} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}