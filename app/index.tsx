import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import { ThemeText } from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            /** Resultados */
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant="h1">50 x 50</ThemeText>
                <ThemeText variant="h2">2500</ThemeText>
            </View>
            /** Filas de botones */
            <View style={globalStyles.row}>
                <CalculatorButton
                    label="C"
                    onPress={() => console.log("C")}
                    blackText={true}
                    color={Colors.lightGray}
                />
                <CalculatorButton
                    label="+/-"
                    onPress={() => console.log("+/-")}
                    blackText={true}
                    color={Colors.lightGray}
                />
                <CalculatorButton
                    label="del"
                    onPress={() => console.log("del")}
                    blackText={true}
                    color={Colors.lightGray}
                />
                <CalculatorButton
                    label="/"
                    onPress={() => console.log("/")}
                    color={Colors.orange}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="7" onPress={() => console.log("7")} />
                <CalculatorButton label="8" onPress={() => console.log("8")} />
                <CalculatorButton label="9" onPress={() => console.log("9")} />
                <CalculatorButton
                    label="x"
                    onPress={() => console.log("x")}
                    color={Colors.orange}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="4" onPress={() => console.log("4")} />
                <CalculatorButton label="5" onPress={() => console.log("5")} />
                <CalculatorButton label="6" onPress={() => console.log("6")} />
                <CalculatorButton
                    label="-"
                    onPress={() => console.log("-")}
                    color={Colors.orange}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="1" onPress={() => console.log("1")} />
                <CalculatorButton label="2" onPress={() => console.log("2")} />
                <CalculatorButton label="3" onPress={() => console.log("3")} />
                <CalculatorButton
                    label="+"
                    onPress={() => console.log("+")}
                    color={Colors.orange}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton label="0" doubleSize={true} onPress={() => console.log("0")} />
                <CalculatorButton label="." onPress={() => console.log(".")} />
                <CalculatorButton
                    label="="
                    onPress={() => console.log("=")}
                    color={Colors.orange}
                />
            </View>
        </View>
    );
};

export default CalculatorApp;
