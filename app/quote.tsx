import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Quote() {
    const router = useRouter();
    const fullText = "Work hard in silence , let your success be the noise\n\nFrank Ocean";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setDisplayedText(fullText.slice(0, index));
            if (index >= fullText.length) {
                clearInterval(interval);
                // Delay before navigation
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1500);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <Text style={styles.quoteText}>{displayedText}</Text>
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
        paddingHorizontal: 30,
    },
    quoteText: {
        color: "#fff",
        fontSize: 32, // Adjust as needed
        fontFamily: "Brygada1918_700Bold",
        textAlign: "center",
        lineHeight: 45,
    },
});
