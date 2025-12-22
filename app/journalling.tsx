import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Journalling() {
    const router = useRouter();

    const folders = [
        { id: "01", title: "Personal Notes", count: "12 Notes" },
        { id: "02", title: "Educational", count: "12 Notes" },
        { id: "03", title: "Daily ToDo", count: "12 Notes" },
        { id: "04", title: "Grocery", count: "12 Notes" },
        { id: "05", title: "Work", count: "12 Notes" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>All Folders</Text>
                    <View style={styles.subHeaderRow}>
                        <Text style={styles.subHeader}>This Month</Text>
                        <Ionicons name="calendar-outline" size={16} color="#ccc" />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.bellButton}
                    onPress={() => router.push("/notifications")}
                >
                    <Ionicons name="notifications-outline" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {folders.map((folder) => (
                    <TouchableOpacity
                        key={folder.id}
                        style={styles.folderCard}
                        onPress={() => {
                            if (folder.id === "01") {
                                router.push("/personal-notes");
                            }
                        }}
                    >
                        <Text style={styles.folderId}>{folder.id}</Text>
                        <View style={styles.folderInfo}>
                            <Text style={styles.folderTitle}>{folder.title}</Text>
                            <Text style={styles.folderCount}>{folder.count}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/dashboard")}>
                    <Ionicons name="home" size={26} color="#fff" style={styles.tabIcon} />
                    <Text style={styles.tabText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/inventory")}>
                    <Ionicons name="add" size={33} color="#d17228" style={styles.tabIcon} />
                    <Text style={styles.tabText}>Create New</Text>
                </TouchableOpacity>

                {/* Active Tab */}
                <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>
                    <Ionicons name="journal" size={26} color="#000" style={styles.tabIcon} />
                    <Text style={styles.activeTabText}>Journalling</Text>
                </TouchableOpacity>

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
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 10,
        marginBottom: 30,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 40,
        fontFamily: "BricolageGrotesque_800ExtraBold",
        marginBottom: 5,
    },
    subHeaderRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    subHeader: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Gilroy_500Medium",
    },
    bellButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    scrollContent: {
        paddingBottom: 120, // Space for bottom bar
        gap: 15,
    },
    folderCard: {
        flexDirection: "row",
        alignItems: "flex-start", // Align top to match "01 Personal..." flow
        padding: 18,
        borderRadius: 20,
        borderWidth: 0.7,
        borderColor: "#ffffffff",
        backgroundColor: "transparent", // Detailed in image as dark/transparent with border
    },
    folderId: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Gilroy_400Regular", // Slightly thinner for the number usually
        marginRight: 15,
        opacity: 0.8,
        marginTop: 6, // Align visually with title
    },
    folderInfo: {
        flex: 1,
    },
    folderTitle: {
        color: "#fff",
        fontSize: 32, // Increased from 28
        fontFamily: "BricolageGrotesque_800ExtraBold",
        marginBottom: 5,
        lineHeight: 36, // Ensure consistent height
    },
    folderCount: {
        color: "#ccc",
        fontSize: 16,
        fontFamily: "Gilroy_500Medium",
    },

    // Bottom Navigation Styles (Consistent with other pages)
    bottomBar: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#1a1a1a",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    tabItem: {
        flex: 1,
        height: 55,
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
        marginBottom: 2,
    },
    tabText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Inter_700Bold",
    },
    activeTabText: {
        color: "#000",
        fontSize: 10,
        fontFamily: "Inter_700Bold",
    },
    profileIcon: {
        width: 28,
        height: 28,
        borderRadius: 14,
        marginBottom: 2,
        borderWidth: 1.5,
        borderColor: "#333",
    },
});
