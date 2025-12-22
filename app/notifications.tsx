import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTitleRow}>
                    <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 10 }}>
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Notifications (3)</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="checkmark-done-outline" size={28} color="#666" />
                </TouchableOpacity>
            </View>

            {/* Filter Tabs */}
            <View style={styles.filterContainer}>
                <TouchableOpacity style={[styles.filterTab, styles.activeFilterTab]}>
                    <Text style={styles.activeFilterText}>All</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterTab}>
                    <Text style={styles.filterText}>Archived</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* New Notifications */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="logo-playstation" size={24} color="#000" style={styles.brandIcon} />
                        {/* Using playstation as a generic placeholder if nike isn't available, or maybe just a shape */}
                        <Text style={styles.cardTitle}>Gym before afternoon</Text>
                        <View style={styles.newBadge}>
                            <Text style={styles.newBadgeText}>NEW!</Text>
                        </View>
                        <Text style={styles.timeText}>3hrs</Text>
                    </View>
                    <Text style={styles.cardBody}>Nike running app has a new notification about it</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="logo-playstation" size={24} color="#000" style={styles.brandIcon} />
                        <Text style={styles.cardTitle}>Gym before afternoon</Text>
                        <View style={styles.newBadge}>
                            <Text style={styles.newBadgeText}>NEW!</Text>
                        </View>
                        <Text style={styles.timeText}>3hrs</Text>
                    </View>
                    <Text style={styles.cardBody}>Nike running app has a new notification about it</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="logo-playstation" size={24} color="#000" style={styles.brandIcon} />
                        <Text style={styles.cardTitle}>Gym before afternoon</Text>
                        <View style={styles.newBadge}>
                            <Text style={styles.newBadgeText}>NEW!</Text>
                        </View>
                        <Text style={styles.timeText}>3hrs</Text>
                    </View>
                    <Text style={styles.cardBody}>Nike running app has a new notification about it</Text>
                </View>

                {/* Last Week Section */}
                <Text style={styles.sectionTitle}>Last Week</Text>

                <View style={styles.warningCard}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="logo-playstation" size={24} color="#000" style={styles.brandIcon} />
                        <Text style={styles.cardTitle}>Running was never done</Text>
                        <View style={{ flex: 1 }} />
                        <Text style={styles.seenText}>Seen</Text>
                    </View>
                    <Text style={styles.cardBody}>A workout was not done, please check here</Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.darkButton}>
                            <Text style={styles.darkButtonText}>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.outlineButton}>
                            <Text style={styles.outlineButtonText}>Download</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        marginBottom: 20,
    },
    headerTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "BricolageGrotesque_800ExtraBold",
    },
    filterContainer: {
        flexDirection: "row",
        marginBottom: 20,
        gap: 10,
    },
    filterTab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "#333", // Default grey
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    activeFilterTab: {
        backgroundColor: "#6c8caf", // Muted blue/grey from image
    },
    filterText: {
        color: "#ccc",
        fontSize: 14,
        fontFamily: "Inter_500Medium",
    },
    activeFilterText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Inter_700Bold",
    },
    badge: {
        backgroundColor: "#fff",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        color: "#000",
        fontSize: 12,
        fontFamily: "Inter_700Bold",
    },
    scrollContent: {
        paddingBottom: 40,
        gap: 15,
    },
    card: {
        backgroundColor: "#fff0f0", // Very light pinkish
        borderRadius: 12,
        padding: 16,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    brandIcon: {
        marginRight: 10,
    },
    cardTitle: {
        color: "#000",
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        marginRight: 8,
    },
    newBadge: {
        backgroundColor: "#feca57", // Yellow
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 12,
        marginRight: "auto",
    },
    newBadgeText: {
        color: "#000",
        fontSize: 10,
        fontFamily: "Inter_800ExtraBold",
    },
    timeText: {
        color: "#000",
        fontSize: 12,
        fontFamily: "Inter_500Medium",
    },
    cardBody: {
        color: "#333",
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        marginLeft: 34, // Indent to align with title
    },
    sectionTitle: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Inter_700Bold",
        marginTop: 10,
        marginBottom: 5,
    },
    warningCard: {
        backgroundColor: "#fffbf0", // Light yellow/cream
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: "#feca57",
    },
    seenText: {
        color: "#000",
        fontSize: 12,
        fontFamily: "Inter_700Bold",
    },
    buttonRow: {
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 34,
        gap: 10,
    },
    darkButton: {
        backgroundColor: "#1a2a3a", // Dark blue/black
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    darkButtonText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Inter_500Medium",
    },
    outlineButton: {
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    outlineButtonText: {
        color: "#000",
        fontSize: 14,
        fontFamily: "Inter_500Medium",
    },
});
