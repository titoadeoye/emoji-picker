import PageWrapper from "@/components/PageWrapper"
import { Button, Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from "./Product";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export type ProductsStackParamList = {
    products: undefined; // No params expected
    product: { id: string }; // 'product' screen expects an 'id' parameter
};

type ProductsScreenNavigationProp = NativeStackNavigationProp<
    ProductsStackParamList,
    'products'
>;
function ProductsScreen() {
    const navigation = useNavigation<ProductsScreenNavigationProp>();

    return (
        <PageWrapper>
            <Text>This is the a products page</Text>
            <Button
                title="Go to this product"
                onPress={() => navigation.navigate('product', { id: '123' })}
            />
        </PageWrapper>
    )
}

export default function Products() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="products"
                component={ProductsScreen}
                options={{
                    headerTitle: "Products"
                }}
            />
            <Stack.Screen
                name="product"
                component={Product}
                options={{
                    headerTitle: "Product"
                }}
            />
        </Stack.Navigator>
    )
}