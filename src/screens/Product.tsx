import PageWrapper from "@/components/PageWrapper"
import { RouteProp, useRoute } from "@react-navigation/native";
import { Alert, Text } from "react-native"
import { ProductsStackParamList } from "./Products";

type ProductScreenRouteProp = RouteProp<ProductsStackParamList, 'product'>;

export default function Product() {
    const route = useRoute<ProductScreenRouteProp>();

    // Access the 'id' parameter
    const { id } = route.params;

    // Check if id is defined
    if (!id) {
        Alert.alert('Error', 'Product ID is missing!');
        return null;
    }

    return (
        <PageWrapper>
            <Text>This is the a single product description page for product {id}</Text>
        </PageWrapper>
    )
}