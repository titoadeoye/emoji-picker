import { container } from "@/constants/Styles";
import { ReactNode } from "react";
import { View } from "react-native";

export default function PageWrapper({ children }: { children: ReactNode }): JSX.Element {
    return (
        <View id="page-wrapper" style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            {children}
        </View>
    )
}