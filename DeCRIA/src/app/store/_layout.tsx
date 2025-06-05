// app/_layout.js
import { Stack } from 'expo-router';
import Navbar from '@/components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function Navigation() {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#1c1c1c',
        },
        headerTintColor: '#F5F5F5',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28
        },
      }}>
      </Stack>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
