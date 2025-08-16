import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
  texto: string;
  onPress?: () => void;
  textColor?: number; // 0 = dark, 1 = light
  style?: ViewStyle | ViewStyle[];
}

export function Button({ texto, onPress, textColor = 0, style }: ButtonProps) {
  const textStyle: TextStyle = {
    color: textColor === 0 ? '#1c1c1c' : '#FFFFFF',
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
      <Text style={[styles.texto, textStyle]}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
