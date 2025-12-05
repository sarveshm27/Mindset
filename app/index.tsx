import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/intro");
        }, 4000); // 2.5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.text}>mindset.</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 75,
        fontFamily: "Inter_900Black",
    },
});
