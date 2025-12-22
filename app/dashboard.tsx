import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>Sarvesh!</Text>
                </View>
                <TouchableOpacity style={styles.bellButton} onPress={() => router.push("/notifications")}>
                    <Ionicons name="notifications-outline" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* 2x2 Grid Placeholders */}
                <View style={styles.gridContainer}>
                    <View style={styles.gridItem} />
                    <View style={styles.gridItem} />
                </View>

                {/* Music Player Card */}
                <View style={styles.musicCard}>
                    <View style={styles.musicContent}>
                        <Image
                            source={{ uri: "https://i.pinimg.com/736x/b6/4f/98/b64f98125433230491950a417431665a.jpg" }} // Placeholder for the statue image
                            style={styles.albumArt}
                        />
                        <View style={styles.trackInfo}>
                            <Text style={styles.trackTitle}>Motivational Speeches - I Didn't Come This Far to Only Win</Text>
                        </View>
                    </View>

                    {/* Controls */}
                    <View style={styles.controlsRow}>
                        <TouchableOpacity style={styles.playButton}>
                            <Ionicons name="play" size={24} color="#fff" />
                        </TouchableOpacity>

                        <View style={styles.rightControls}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Ionicons name="add-circle-outline" size={28} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Ionicons name="cloud-download-outline" size={28} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton}>
                                <Ionicons name="ellipsis-horizontal" size={28} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Bottom Placeholder */}
                <View style={styles.bottomPlaceholder} />
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomBar}>
                {/* Home Tab (Active) */}
                <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>
                    <Ionicons name="home" size={26} color="#000" style={styles.tabIcon} />
                    <Text style={styles.activeTabText}>Home</Text>
                </TouchableOpacity>

                {/* Create New Tab */}
                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/inventory")}>
                    <Ionicons name="add" size={33} color="#d17228" style={styles.tabIcon} />
                    <Text style={styles.tabText}>Create New</Text>
                </TouchableOpacity>

                {/* Journalling Tab */}
                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/journalling")}>
                    <Ionicons name="journal" size={26} color="#fff" style={styles.tabIcon} />
                    <Text style={styles.tabText}>Journalling</Text>
                </TouchableOpacity>

                {/* Profile Tab */}
                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/profile")}>
                    <Image
                        source={{ uri: "https://via.placeholder.com/40" }}
                        style={styles.profileIcon}
                    />
                    <Text style={styles.tabText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d0d0d",
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeText: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "BricolageGrotesque_800ExtraBold",
    },
    nameText: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "BricolageGrotesque_800ExtraBold",
    },
    bellButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContent: {
        paddingBottom: 110, // Increased to account for the new bottom bar height if needed
    },
    gridContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        gap: 15,
    },
    gridItem: {
        flex: 1,
        height: 150,
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#333",
    },
    musicCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 20,
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#333",
    },
    musicContent: {
        flexDirection: "row",
        marginBottom: 15,
    },
    albumArt: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#333",
    },
    trackInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: "center",
    },
    trackTitle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        lineHeight: 22,
    },
    controlsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    playButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#d17228",
        alignItems: "center",
        justifyContent: "center",
    },
    rightControls: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
    },
    iconButton: {
        padding: 5,
    },
    bottomPlaceholder: {
        width: "100%",
        height: 150,
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#333",
    },
    // Bottom Navigation Styles
    bottomBar: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8, // Slightly increased padding
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#1a1a1a",
        // Shadow for depth
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    tabItem: {
        flex: 1,
        height: 55, // Slightly increased height
        backgroundColor: "#000",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4,
    },
    activeTabItem: {
        backgroundColor: "#fff",
    },
    tabIcon: {
        marginBottom: 2, // Tight spacing
    },
    tabText: {
        color: "#fff",
        fontSize: 10, // Small, clean font size
        fontFamily: "Inter_700Bold",
    },
    activeTabText: {
        color: "#000",
        fontSize: 10,
        fontFamily: "Inter_700Bold",
    },
    profileIcon: {
        width: 28, // Slightly increased size
        height: 28,
        borderRadius: 14,
        marginBottom: 2,
        borderWidth: 1.5,
        borderColor: "#333",
    },
});
