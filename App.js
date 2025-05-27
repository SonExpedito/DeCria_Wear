import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes'
import "./src/styles/global.css";

export default function App() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}

