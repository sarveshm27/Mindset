import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
    const router = useRouter();
    const [agreed, setAgreed] = useState(false);

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                {/* Header: Back Arrow */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Title */}
                <Text style={styles.title}>Register</Text>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Inputs */}
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username/Email ID"
                            placeholderTextColor="#9ca3af"
                            selectionColor="#d17228"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry
                            selectionColor="#d17228"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Retype Password"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry
                            selectionColor="#d17228"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            placeholderTextColor="#9ca3af"
                            keyboardType="phone-pad"
                            selectionColor="#d17228"
                        />

                        {/* Date of Birth Field with Icon */}
                        <View style={styles.dobContainer}>
                            <TextInput
                                style={[styles.input, styles.dobInput]}
                                placeholder="Date of Birth"
                                placeholderTextColor="#9ca3af"
                                selectionColor="#d17228"
                            />
                            <Ionicons name="calendar-outline" size={24} color="#9ca3af" style={styles.calendarIcon} />
                        </View>
                    </View>

                    {/* Terms Checkbox */}
                    <View style={styles.termsContainer}>
                        <TouchableOpacity
                            style={[styles.checkbox, agreed && styles.checkboxChecked]}
                            onPress={() => setAgreed(!agreed)}
                            activeOpacity={0.8}
                        >
                            {agreed && <Ionicons name="checkmark" size={16} color="#000" />}
                        </TouchableOpacity>
                        <Text style={styles.termsText}>
                            You agree to the <Text style={styles.linkText}>terms</Text>
                        </Text>
                    </View>

                    {/* Continue Button */}
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={() => router.push("/verification")}
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>

                    {/* Bottom spacer for scroll */}
                    <View style={{ height: 40 }} />
                </ScrollView>
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
        fontSize: 54,
        fontFamily: "BricolageGrotesque_800ExtraBold",
        marginBottom: 30,
        textAlign: "center",
    },
    scrollContent: {
        paddingBottom: 20,
    },
    formContainer: {
        width: "100%",
        gap: 15,
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#fff", // White BG
        borderWidth: 1,
        borderColor: "#d1d5db", // Light Grey
        borderRadius: 0, // Sharp
        color: "#000", // Black text
        paddingVertical: 10,
        paddingHorizontal: 14,
        fontSize: 20,
        fontFamily: "Inter_700Bold",
        width: "99%",
        alignSelf: "center",
    },
    dobContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    dobInput: {
        paddingRight: 50, // Space for icon
    },
    calendarIcon: {
        position: 'absolute',
        right: 15,
        opacity: 0.8,
    },
    termsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "transparent", // Default unchecked
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxChecked: {
        backgroundColor: "#fff", // Checked bg
    },
    termsText: {
        color: "#888",
        fontSize: 16,
        fontFamily: "Inter_400Regular",
    },
    linkText: {
        color: "#304ffe", // Blueish link color from image
    },
    button: {
        width: "100%",
        backgroundColor: "#d17228", // Matched Login
        paddingVertical: 18,
        borderRadius: 50, // Pill shape
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#f5a356", // Matched Login
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Inter_700Bold",
    },
});
