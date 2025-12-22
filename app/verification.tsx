import { Stack, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Verification() {
    const router = useRouter();
    // Array to manage ref for each input to auto-focus next
    const inputs = useRef<Array<TextInput | null>>([]);
    const [code, setCode] = useState(["", "", "", "", "", ""]);

    const handleInput = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        // Auto focus next input
        if (text && index < 5) {
            inputs.current[index + 1]?.focus();
        }
        // Handle backspace (move to prev) handled in onKeyPress usually, 
        // but simple text change logic for empty moving back needs more complex handling.
        // Keeping it simple for UI structure first.
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                {/* Header: Spacer for top margin */}
                <View style={styles.header} />

                {/* Title */}
                <Text style={styles.title}>Verification</Text>

                {/* Subtitle */}
                <Text style={styles.subtitle}>
                    An authenticaiton code has been sent to your email
                </Text>

                {/* Label */}
                <Text style={styles.label}>Enter code</Text>

                {/* OTP Inputs */}
                <View style={styles.otpContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.otpBox}
                            maxLength={1}
                            keyboardType="number-pad"
                            onChangeText={(text) => handleInput(text, index)}
                            ref={(el) => (inputs.current[index] = el)}
                            selectionColor="#d17228"
                            secureTextEntry={false}
                            placeholderTextColor="#333"
                        />
                    ))}
                </View>

                {/* Spacer to push button directly to bottom */}
                <View style={{ flex: 1 }} />

                {/* Verify Button */}
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={() => router.push("/quote")}
                >
                    <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d0d0d", // Dark background
        paddingHorizontal: 25,
    },
    header: {
        marginTop: 60,
        marginBottom: 20,
        alignItems: "flex-start",
    },
    backButton: {
        padding: 5,
    },
    title: {
        color: "#fff",
        fontSize: 48,
        fontFamily: "Gilroy_800ExtraBold",
        marginBottom: 10,
    },
    subtitle: {
        color: "#ccc",
        fontSize: 16,
        fontFamily: "Gilroy_500Medium",
        marginBottom: 30,
        lineHeight: 22,
    },
    label: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Gilroy_700Bold",
        marginBottom: 15,
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20, // Reduced margin since spacer handles push
    },
    otpBox: {
        width: 50, // Square
        height: 50, // Square
        borderWidth: 1,
        borderColor: "#666",
        borderRadius: 4,
        color: "#fff",
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Gilroy_700Bold",
        backgroundColor: "transparent",
    },
    button: {
        width: "100%",
        backgroundColor: "#d17228", // Orange fill
        paddingVertical: 18,
        borderRadius: 50, // Pill shape
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#f5a356", // Lighter orange border
        marginBottom: 90, // Moved up as requested
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Gilroy_700Bold",
    },
});
