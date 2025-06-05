import { View, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useRef } from 'react';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1];

  const tabs = [
    { name: 'home', icon: 'home-outline' },
    { name: 'explorer', icon: 'pricetag-outline' },
    { name: 'cart', icon: 'bag-handle-outline' },
    { name: 'favorite', icon: 'heart-outline' },
    { name: 'user', icon: 'person-outline' },
  ];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => {
        const isActive = currentRoute === tab.name;
        const scaleAnim = useRef(new Animated.Value(isActive ? 1.2 : 1)).current;

        useEffect(() => {
          Animated.spring(scaleAnim, {
            toValue: isActive ? 1.2 : 1,
            useNativeDriver: true,
            friction: 4,
          }).start();
        }, [isActive]);

        return (
          <TouchableWithoutFeedback
            key={tab.name}
            onPress={() => router.replace(`store/${tab.name}`)}
          >
            <Animated.View style={[styles.tabButton, { transform: [{ scale: scaleAnim }] }]}>
              <Icon
                name={tab.icon}
                size={24}
                color={isActive ? '#000' : '#888'}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 100,
    marginHorizontal: 22,
    position: 'absolute',
    bottom: 35,
    left: 0,
    right: 0,
    shadowColor: '#1c1c1c',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  tabButton: {
    padding: 10,
    borderRadius: 20,
  },
});
