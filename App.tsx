import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <>
      <MenuProvider>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
      </MenuProvider>
    </>
  );
}

