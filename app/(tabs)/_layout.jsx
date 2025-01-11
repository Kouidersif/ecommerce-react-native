import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import "@/global.css";

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved-items"
        options={{
          title: "Saved Items",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;

