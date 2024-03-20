import React from 'react';
import Drawer from 'expo-router/drawer';
import { Slot } from 'expo-router';

export default function TabLayout (): JSX.Element {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home'
        }}
      />
      <Slot />
    </Drawer>
  );
}
