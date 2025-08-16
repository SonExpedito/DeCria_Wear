import { View, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useRef,useMemo  } from 'react';

export default function Navbar() {
  const router = useRouter();
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1];


  const tabs = useMemo(() => [
    { name: 'home', icon: 'home-outline' },
    { name: 'explorer', icon: 'pricetag-outline' },
    { name: 'favorite', icon: 'heart-outline' },
    { name: 'user', icon: 'person-outline' },
  ], []);

  // Create refs for each tab's scale animation
  const scaleAnims = useRef(tabs.map((tab) =>
    new Animated.Value(currentRoute === tab.name ? 1.2 : 1)
  )).current;

  useEffect(() => {
    tabs.forEach((tab, idx) => {
      const isActive = currentRoute === tab.name;
      Animated.spring(scaleAnims[idx], {
        toValue: isActive ? 1.2 : 1,
        useNativeDriver: true,
        friction: 4,
      }).start();
    });
  }, [currentRoute, tabs, scaleAnims]);

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, idx) => {
        const isActive = currentRoute === tab.name;
        return (
          <TouchableWithoutFeedback
            key={tab.name}
            onPress={() => router.replace(`store/${tab.name}`)}
          >
            <Animated.View style={[styles.tabButton, { transform: [{ scale: scaleAnims[idx] }] }]}>
              <Icon
                name={tab.icon}
                size={24}
                color={isActive ? '#1c1c1c' : '#888'}
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
    backgroundColor: '#FFFFFF',
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
