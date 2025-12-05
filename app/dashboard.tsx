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
                <TouchableOpacity style={styles.bellButton}>
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
                <TouchableOpacity style={styles.tabItem}>
                    <View style={styles.activeTabIcon}>
                        <Ionicons name="home" size={24} color="#000" />
                    </View>
                    <Text style={styles.activeTabText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
                    <View style={styles.createIcon}>
                        <Ionicons name="add" size={32} color="#d17228" />
                    </View>
                    <Text style={styles.tabText}>Create New</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
                    <Ionicons name="journal-outline" size={24} color="#fff" />
                    <Text style={styles.tabText}>Journalling</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
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
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 30,
    },
    welcomeText: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "Inter_700Bold",
    },
    nameText: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "Inter_900Black", // Heavier weight for name? Or check font... Image looks bold.
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
        paddingBottom: 100, // Space for bottom bar
    },
    gridContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    gridItem: {
        width: "48%",
        height: 150,
        backgroundColor: "#1a1a1a", // Dark grey
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
    },
    musicCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#333",
    },
    musicContent: {
        flexDirection: "row",
        marginBottom: 15,
    },
    albumArt: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: "#333",
    },
    trackInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: "center",
    },
    trackTitle: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Inter_700Bold",
        lineHeight: 24,
    },
    controlsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    playButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#d17228", // Orange
        alignItems: "center",
        justifyContent: "center",
    },
    rightControls: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
    },
    iconButton: {
        padding: 5,
    },
    bottomPlaceholder: {
        width: "100%",
        height: 150,
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#333",
        paddingBottom: 20,
    },
    tabItem: {
        alignItems: "center",
        justifyContent: "center",
    },
    activeTabIcon: {
        backgroundColor: "#fff",
        width: 40,
        height: 30,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
    },
    activeTabText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Inter_700Bold",
    },
    createIcon: {
        marginBottom: 4,
        borderWidth: 1, // Visual style tweak to match specific "plus" look if needed
        borderColor: "#333",
        borderRadius: 8,
        padding: 2,
    },
    tabText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Inter_500Medium",
    },
    profileIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginBottom: 4,
    },
});
