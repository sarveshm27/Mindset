import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inventory() {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState("All Task");
    const [selectedDate, setSelectedDate] = useState("10");

    const dates = [
        { day: "7", weekday: "Sun" },
        { day: "8", weekday: "Sun" },
        { day: "9", weekday: "Sun" },
        { day: "10", weekday: "Sun" },
        { day: "11", weekday: "Sun" },
        { day: "12", weekday: "Sun" },
        { day: "13", weekday: "Sun" },
        { day: "14", weekday: "Sun" },
        { day: "15", weekday: "Sun" },
        { day: "16", weekday: "Sun" },
    ];

    const tasks = [
        {
            id: 1,
            time: "8:00 AM",
            title: "Gym before afternoon",
            subtitle: "Nike running app has a new notification about it",
            duration: "8:15am - 8:30am",
            color: "#ff6b6b", // Red/Pink
        },
        {
            id: 2,
            time: "",
            title: "Gym before afternoon",
            subtitle: "Nike running app has a new notification about it",
            duration: "8:20am - 8:40am",
            color: "#feca57", // Yellow
        },
        {
            id: 3,
            time: "9:00 AM",
            title: "Gym before afternoon",
            subtitle: "Nike running app has a new notification about it",
            duration: "8:15am - 8:30am",
            color: "#48dbfb", // Blue
        },
        {
            id: 4,
            time: "",
            title: "Gym before afternoon",
            subtitle: "Nike running app has a new notification about it",
            duration: "8:15am - 8:30am",
            color: "#1dd1a1", // Green
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Inventory</Text>
                    <Text style={styles.dateText}>January 10, 2025</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 18 }}>
                    <Ionicons name="share-social-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Calendar Strip */}
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.calendarScroll}
                >
                    {dates.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.dateItem, selectedDate === item.day && styles.activeDateItem]}
                            onPress={() => setSelectedDate(item.day)}
                        >
                            <Text style={[styles.dateNumber, selectedDate === item.day && styles.activeDateText]}>{item.day}</Text>
                            <Text style={[styles.dateWeekday, selectedDate === item.day && styles.activeDateText]}>{item.weekday}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Filter Tabs */}
            <View style={styles.filterContainer}>
                {["All Task", "On Going", "Completed", "Postponed"].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.filterTab, selectedTab === tab && styles.activeFilterTab]}
                        onPress={() => setSelectedTab(tab)}
                    >
                        <Text style={[styles.filterText, selectedTab === tab && styles.activeFilterText]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {tasks.map((task, index) => (
                    <View key={task.id} style={styles.timelineRow}>
                        <View style={styles.timeColumn}>
                            {task.time ? (
                                <View>
                                    <Text style={styles.timeText}>{task.time.split(' ')[0]}</Text>
                                    <Text style={styles.ampmText}>{task.time.split(' ')[1]}</Text>
                                </View>
                            ) : null}
                        </View>
                        <View style={styles.taskCardContainer}>
                            {task.time && <View style={styles.timelineLine} />}
                            <View style={styles.taskCard}>
                                <View style={[styles.statusIndicator, { backgroundColor: task.color }]} />
                                <View style={styles.taskContent}>
                                    <Text style={styles.taskTitle}>{task.title}</Text>
                                    <Text style={styles.taskSubtitle}>{task.subtitle}</Text>
                                    <View style={styles.durationRow}>
                                        <Ionicons name="time-outline" size={14} color="#888" />
                                        <Text style={styles.durationText}>{task.duration}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/dashboard")}>
                    <Ionicons name="home" size={26} color="#fff" style={styles.tabIcon} />
                    <Text style={styles.tabText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>
                    <Ionicons name="add" size={33} color="#d17228" style={styles.tabIcon} />
                    <Text style={styles.activeTabText}>Create New</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/journalling")}>
                    <Ionicons name="journal" size={26} color="#fff" style={styles.tabIcon} />
                    <Text style={styles.tabText}>Journalling</Text>
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
        marginBottom: 20,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 40,
        fontFamily: "BricolageGrotesque_800ExtraBold",
        marginBottom: 5,
    },
    dateText: {
        color: "#ccc",
        fontSize: 14,
        fontFamily: "Inter_500Medium",
    },
    calendarScroll: {
        flexDirection: "row",
        backgroundColor: "#fff", // White background for the strip
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 20,
        gap: 15, // Add gap between items
        alignItems: "center", // Center items vertically
    },
    dateItem: {
        alignItems: "center",
        paddingHorizontal: 8, // Add clickable target area padding
        paddingVertical: 4,
        borderRadius: 8,
    },
    activeDateItem: {
        backgroundColor: "#000", // Black background for selected item
    },
    dateNumber: {
        color: "#000",
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        marginBottom: 2,
    },
    dateWeekday: {
        color: "#000",
        fontSize: 12,
        fontFamily: "Inter_500Medium",
    },
    activeDateText: {
        color: "#fff", // White text for active black item
    },
    filterContainer: {
        flexDirection: "row",
        backgroundColor: "#1a1a1a",
        borderRadius: 25,
        padding: 4,
        marginBottom: 20,
        justifyContent: "space-between",
    },
    filterTab: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    activeFilterTab: {
        backgroundColor: "#333",
    },
    filterText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Inter_500Medium",
    },
    activeFilterText: {
        color: "#fff",
        fontFamily: "Inter_700Bold",
    },
    scrollContent: {
        paddingBottom: 110,
    },
    timelineRow: {
        flexDirection: "row",
        marginBottom: 15,
    },
    timeColumn: {
        width: 50,
        paddingTop: 10,
    },
    timeText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Inter_700Bold",
    },
    ampmText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Inter_400Regular",
    },
    taskCardContainer: {
        flex: 1,
    },
    timelineLine: {
        position: "absolute",
        left: -25, // Adjust based on time column width
        top: 22,
        width: "100%", // Ideally creates a line across
        height: 1,
        backgroundColor: "#333",
    },
    taskCard: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 15,
        flexDirection: "row",
        alignItems: "flex-start",
    },
    statusIndicator: {
        width: 12,
        height: 12,
        borderRadius: 2,
        marginRight: 10,
        marginTop: 4,
    },
    taskContent: {
        flex: 1,
    },
    taskTitle: {
        color: "#000",
        fontSize: 16,
        fontFamily: "Inter_700Bold",
        marginBottom: 4,
    },
    taskSubtitle: {
        color: "#444",
        fontSize: 12,
        fontFamily: "Inter_400Regular",
        marginBottom: 8,
    },
    durationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    durationText: {
        color: "#666",
        fontSize: 12,
        fontFamily: "Inter_400Regular",
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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
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
        marginBottom: 2,
    },
    tabText: {
        color: "#fff",
        fontSize: 10,
        fontFamily: "Inter_700Bold",
    },
    activeTabText: {
        color: "#000", // Black text for active white tab
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
