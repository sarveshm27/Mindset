import { Stack, useRouter } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    const router = useRouter();

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                {/* Header: mindset + dot */}
                <View style={styles.header}>
                    <Text style={styles.logoText}>mindset</Text>
                    <View style={styles.logoDot} />
                </View>

                {/* Title */}
                <Text style={styles.title}>Log In</Text>

                {/* Inputs */}
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username/Email ID"
                        placeholderTextColor="#666"
                        selectionColor="#cc5500"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#666"
                        secureTextEntry
                        selectionColor="#cc5500"
                    />
                    <Text style={styles.footerText}>
                        Don't have account , Register <Text style={styles.linkText} onPress={() => router.push("/register")}>here!</Text>
                    </Text>
                </View>

                {/* Continue Button */}
                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d0d0d", // Dark background
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        flex: 0.25, // Push slightly up
    },
    logoText: {
        color: "#fff",
        fontSize: 60,
        fontFamily: "Gilroy_900Black",
    },
    logoDot: {
        width: 15,
        height: 15,
        backgroundColor: "#fff",
        borderRadius: 9,
        marginLeft: 4,
        marginTop: 35,
    },
    title: {
        color: "#fff",
        fontSize: 54, // Requested size
        fontFamily: "Gilroy_800ExtraBold",
        marginBottom: 50,
        textAlign: "center",
    },
    formContainer: {
        width: "100%",
        gap: 15,
        marginBottom: 40,
    },
    input: {
        backgroundColor: "#1a1a1a",
        borderWidth: 1,
        borderColor: "#6d6d6dff",
        borderRadius: 4,
        color: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 23, // Requested size
        fontFamily: "Gilroy_700Bold",
        opacity: 0.8,
        width: "99%", // Ensure border is visible 
        alignSelf: "center",
    },
    footerText: {
        color: "#888",
        textAlign: "center",
        fontSize: 18, // Requested size
        fontFamily: "Gilroy_500Medium",
        marginTop: 5,
    },
    linkText: {
        color: "#3b82f6", // Blue link color
    },
    button: {
        width: "100%",
        backgroundColor: "#d17228", // Slightly darker orange fill
        paddingVertical: 18,
        borderRadius: 50, // Pill shape
        alignItems: "center",
        marginTop: 20,
        borderWidth: 3, // Visible border
        borderColor: "#f5a356", // Lighter orange border
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Gilroy_700Bold",
    },
});
