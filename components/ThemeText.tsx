import { globalStyles } from "@/styles/global-styles";
import { StyleSheet, Text, TextProps, View } from "react-native";

interface Props extends TextProps {
    variant?: "h1" | "h2";
}

export const ThemeText = ({ variant, children, ...rest }: Props) => {
    return (
        <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={[
                { color: "white", fontFamily: "SpaceMono" },
                variant === "h1" && globalStyles.mainResult,
                variant === "h2" && globalStyles.subResult,
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({});
