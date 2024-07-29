import PageWrapper from "@/components/PageWrapper";
import { NavigationContainer, TabNavigationState } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from "../../src/screens/Products";
import Community from "../../src/screens/Community";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Icon, IconProps } from "@expo/vector-icons/build/createIconSet";
import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
import Cart from "@/src/screens/Cart";

const Tab = createBottomTabNavigator();

export default function Explore(): JSX.Element {

    const tabs = [{ name: "products", icon: "edit", component: Products },
    { name: "community", icon: "users", component: Community }
    ]

    return (
        <PageWrapper>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }: {
                        focused: boolean;
                        color: string;
                        size: number;
                    }) => {
                        let iconName: keyof typeof Ionicons.glyphMap;
                        if (route.name === "products") {
                            iconName = focused ? "storefront" : "storefront-outline"
                        } else if(route.name === "cart") {
                            iconName = focused ? "cart" : "cart-outline"
                        } else {
                            iconName = focused ? "people" : "people-outline"
                        }

                        return (
                            <TabBarIcon name={iconName} color={color} />
                        )
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen name="products" component={Products} />
                <Tab.Screen name="community" component={Community} />
                <Tab.Screen name="cart" component={Cart} />
            </Tab.Navigator>
        </PageWrapper>
    )
}

const styles = StyleSheet.create({

})