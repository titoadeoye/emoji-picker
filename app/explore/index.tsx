import PageWrapper from "@/components/PageWrapper";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../../src/screens/Products";
import Community from "../../src/screens/Community";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import Cart from "@/src/screens/Cart";

const Tab = createBottomTabNavigator();

export default function Explore(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({
          focused,
          color,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === "products") {
            iconName = focused ? "storefront" : "storefront-outline";
          } else if (route.name === "cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else {
            iconName = focused ? "people" : "people-outline";
          }

          return <TabBarIcon name={iconName} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
      detachInactiveScreens
    >
      <Tab.Screen name="products" component={Products} />
      <Tab.Screen name="community" component={Community} />
      <Tab.Screen name="cart" component={Cart} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
