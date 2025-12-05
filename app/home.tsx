import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

// Scale factors to fit content inside the mockup
const PHONE_WIDTH = width * 0.85;
const PHONE_HEIGHT = height * 0.75;
const SCREEN_PADDING_TOP = 50; // To clear the dynamic island/notch area in the mockup

export default function Home() {
    const insets = useSafeAreaInsets();
    const router = useRouter(); // Initialize router

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />
            <View style={styles.mainContainer}>
                {/* Global Background Gradient */}
                <LinearGradient
                    colors={["#000000", "#4a2500", "#cc5500", "#4a2500", "#000000"]}
                    locations={[0, 0.2, 0.5, 0.8, 1]}
                    style={styles.backgroundGradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />

                {/* Phone Mockup Container */}
                <View style={styles.phoneContainer}>

                    {/* 
                      LAYER 1: Inner Screen Content 
                      (Clipped, behind the mockup frame's transparent screen area)
                      Z-Index: 90
                    */}
                    <View style={styles.innerScreenContent}>
                        {/* Background removed as per request */}

                        {/* Header Date & Time (Inside the screen) */}
                        <View style={styles.header}>
                            <Text style={styles.dateText}>Monday 15 August</Text>
                            <Text style={styles.timeText}>9:30</Text>
                        </View>

                        {/* Character Image (Inside the screen) */}
                        <View style={styles.characterContainer}>
                            <Image
                                source={require("../assets/images/character_full.png")}
                                style={styles.characterImage}
                                contentFit="contain"
                            />
                        </View>
                    </View>

                    {/* 
                      LAYER 2: Mockup Frame 
                      Z-Index: 100
                    */}
                    <Image
                        source={require("../assets/images/iphone_mockup.png")}
                        style={styles.mockupImage}
                        contentFit="fill"
                    />

                    {/* 
                      LAYER 3: Floating Elements 
                      (Notifications & Bottom Card - On TOP of everything, overlapping bezels)
                      Z-Index: 110
                    */}
                    <View style={styles.floatingLayer} pointerEvents="box-none">
                        {/* Notification Cards */}
                        <View style={styles.cardsContainer} pointerEvents="box-none">
                            <NotificationCard
                                avatar={require("../assets/images/avatar_agent.png")}
                                name="Agent"
                                time="5min"
                                message="You havent finished your task yet"
                            />
                            <NotificationCard
                                avatar={require("../assets/images/avatar_agent.png")}
                                name="Agent"
                                time="5min"
                                message="You are missing out something"
                            />
                        </View>

                        {/* Bottom Card */}
                        <View style={styles.bottomCardContainer} pointerEvents="box-none">
                            <View style={styles.bottomCard}>
                                <Text style={styles.bottomCardText}>
                                    Inspired by the community
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>

                {/* Footer Buttons (Outside Phone) */}
                <View style={[styles.footer, { paddingBottom: insets.bottom + 20 }]}>
                    <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
                        <Image
                            source={require("../assets/images/Google_Favicon_2025 1.png")}
                            style={{ width: 24, height: 24, marginRight: 10 }}
                            contentFit="contain"
                        />
                        <Text style={styles.googleButtonText}>Continue with Google</Text>
                        {/* Corner borders for visual effect */}
                        <View style={styles.cornerTL} />
                        <View style={styles.cornerTR} />
                        <View style={styles.cornerBL} />
                        <View style={styles.cornerBR} />
                    </TouchableOpacity>

                    <View style={styles.authRow}>
                        <TouchableOpacity
                            style={styles.authButton}
                            activeOpacity={0.8}
                            onPress={() => router.push("/register")}
                        >
                            <Text style={styles.authButtonText}>Register</Text>
                            {/* Corner borders */}
                            <View style={styles.cornerTL} />
                            <View style={styles.cornerBL} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.authButton}
                            activeOpacity={0.8}
                            onPress={() => router.push("/login")}
                        >
                            <Text style={styles.authButtonText}>Log In</Text>
                            {/* Corner borders */}
                            <View style={styles.cornerTR} />
                            <View style={styles.cornerBR} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}

function NotificationCard({ avatar, name, time, message }: { avatar: any; name: string; time: string; message: string }) {
    return (
        <View style={styles.card}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardName}>{name}</Text>
                    <Text style={styles.cardTime}>{time}</Text>
                </View>
                <Text style={styles.cardMessage}>{message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundGradient: {
        ...StyleSheet.absoluteFillObject,
    },
    phoneContainer: {
        width: PHONE_WIDTH * 0.95,
        height: PHONE_HEIGHT * 0.89,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 145,
    },
    mockupImage: {
        width: "100%",
        height: "100%",
        zIndex: 100,
        position: "absolute",
    },
    innerScreenContent: {
        width: "88%",
        height: "94%",
        borderRadius: 38,
        overflow: "hidden", // Clips the character and white bg
        alignItems: "center",
        paddingTop: SCREEN_PADDING_TOP,
        zIndex: 90,
        position: 'absolute', // Ensure it sits behind the frame
    },
    // whiteBackground: {
    //     ...StyleSheet.absoluteFillObject,
    //     backgroundColor: "#d88c1aff",
    // },
    header: {
        marginTop: -13,
        alignItems: "center",
        zIndex: 10,
    },
    dateText: {
        fontFamily: "Inter_900Black",
        fontSize: 18,
        color: "#fff",
        // Outline Hack
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        letterSpacing: 0.5,
    },
    timeText: {
        fontFamily: "Inter_900Black",
        fontSize: 60,
        color: "#fff",
        // Outline Hack
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        lineHeight: 70,
    },
    // Layer for things that pop out of the screen (Notifications, etc)
    floatingLayer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 110, // Above Mockup
        alignItems: "center",
    },
    cardsContainer: {
        width: "119%", // Wider than phone to overhang
        height: "200%",
        marginTop: 145, // Position down from top
        paddingHorizontal: 0,
        gap: 15,
        alignItems: 'center',
    },
    card: {
        width: '90%', // Relative to the wider container
        flexDirection: "row",
        backgroundColor: "#fff", // White BG
        borderRadius: 24, // Rounder as per image
        padding: 8,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: "#000", // Black bg for avatar
    },
    cardContent: {
        flex: 1,
        marginLeft: 12,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
    },
    cardName: {
        fontFamily: "Inter_700Bold",
        fontSize: 17,
        color: "#000",
    },
    cardTime: {
        fontFamily: "Inter_400Regular",
        fontSize: 11,
        color: "#666",
    },
    cardMessage: {
        fontFamily: "Inter_500Medium",
        fontSize: 13,
        color: "#666",
    },
    characterContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "55%",
        zIndex: 5,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    characterImage: {
        width: "75%",
        height: "100%",
    },
    bottomCardContainer: {
        position: "absolute",
        bottom: 2, // Adjust vertical pos
        width: "140%", // Allow rotation to extend far
        alignItems: "center",
        zIndex: 30,
    },
    bottomCard: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        transform: [{ rotate: "-4deg" }], // More tilt
    },
    bottomCardText: {
        fontFamily: "Inter_800ExtraBold",
        fontSize: 16,
        color: "#000",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 10,
    },
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 15,
        width: "100%",
        position: "relative",
    },
    googleButtonText: {
        color: "#fff",
        fontFamily: "Inter_700Bold",
        fontSize: 23,
    },
    authRow: {
        flexDirection: "row",
        width: "100%",
        gap: 15,
    },
    authButton: {
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 11,
        position: "relative",
    },
    authButtonText: {
        color: "#fff",
        fontFamily: "Inter_700Bold",
        fontSize: 23,
    },
    // Corner styles
    cornerTL: {
        position: "absolute",
        top: -1,
        left: -1,
        width: 10,
        height: 10,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderColor: "#fff",
    },
    cornerTR: {
        position: "absolute",
        top: -1,
        right: -1,
        width: 10,
        height: 10,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderColor: "#fff",
    },
    cornerBL: {
        position: "absolute",
        bottom: -1,
        left: -1,
        width: 10,
        height: 10,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: "#fff",
    },
    cornerBR: {
        position: "absolute",
        bottom: -1,
        right: -1,
        width: 10,
        height: 10,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderColor: "#fff",
    },
});
