import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    const router = useRouter();

    const menuItems = [
        "My Wallet",
        "My Address",
        "My Tickets",
        "App Language",
        "Help Center",
        "Notification Settings",
        "Privacy Preferences",
        "Payment Methods",
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            {/* Main Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Agent Details</Text>
                <Text style={styles.headerSubtitle}>Detailed dossier of intelligence personnel</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Profile Card */}
                <View style={styles.profileCard}>

                    {/* User Info Header */}
                    <View style={styles.userInfoRow}>
                        <View style={styles.avatarContainer}>
                            <View style={styles.avatarPlaceholder} />
                            {/* <Image source={{ uri: "..." }} style={styles.avatar} /> */}
                            <View style={styles.editBadge}>
                                <Ionicons name="pencil" size={12} color="#000" />
                            </View>
                        </View>
                        <View style={styles.userDetails}>
                            <Text style={styles.userName}>Sarvesh Malikakandy</Text>
                            <Text style={styles.userStatus}>Free Member</Text>
                        </View>
                    </View>

                    {/* Menu Items */}
                    <View style={styles.menuContainer}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.menuItem}>
                                <Text style={styles.menuItemText}>{item}</Text>
                                <Ionicons name="chevron-forward" size={20} color="#000" />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace("/")}>
                    <Text style={styles.logoutText}>Logout</Text>
                    <Ionicons name="arrow-forward" size={20} color="#d32f2f" style={{ marginLeft: 8 }} />
                </TouchableOpacity>

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

                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/journalling")}>
                    <Ionicons name="journal" size={26} color="#fff" style={styles.tabIcon} />
                    <Text style={styles.tabText}>Journalling</Text>
                </TouchableOpacity>

                {/* Active Tab */}
                <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>
                    <Image
                        source={{ uri: "https://via.placeholder.com/40" }}
                        style={styles.profileIcon}
                    />
                    <Text style={styles.activeTabText}>Profile</Text>
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
        marginTop: 20,
        marginBottom: 30,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 36,
        fontFamily: "BricolageGrotesque_800ExtraBold",
        marginBottom: 5,
    },
    headerSubtitle: {
        color: "#ccc",
        fontSize: 14,
        fontFamily: "Gilroy_500Medium",
    },
    scrollContent: {
        paddingBottom: 120, // Space for bottom bar
    },
    profileCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
    },
    userInfoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 15,
    },
    avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "#333", // Temporary placeholder color
    },
    editBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#feca57", // Yellowish badge
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#1a1a1a",
    },
    userDetails: {
        justifyContent: "center",
    },
    userName: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Gilroy_700Bold",
        marginBottom: 4,
    },
    userStatus: {
        color: "#aaa",
        fontSize: 14,
        fontFamily: "Gilroy_500Medium",
    },
    menuContainer: {
        gap: 12,
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
    },
    menuItemText: {
        color: "#000",
        fontSize: 16,
        fontFamily: "Gilroy_700Bold",
    },
    logoutButton: {
        backgroundColor: "#ffcccb", // Light red
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
        borderRadius: 16,
        marginBottom: 20,
    },
    logoutText: {
        color: "#d32f2f", // Red text
        fontSize: 18,
        fontFamily: "Gilroy_700Bold",
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
        flexDirection: 'row', // Profile tab might differ if it shows icon + text, but design shows just active state
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
        marginLeft: 4,
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
