import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout (): JSX.Element {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="items"
        options={{
          title: 'Items',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="list" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          )
        }}
      />
    </Tabs>
  );
}
