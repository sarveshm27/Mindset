import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PersonalNotes() {
    const router = useRouter();

    const leftColumnNotes = [
        {
            id: "1",
            title: "Today’s Quote",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis erat interdum, euismod ipsum et, tempor est. In ac lobortis leo. Nam eu nisi velit. Integer mollis ornare dolor, at fringilla arcu efficitur eget. Duis sem lacus, tincidunt non gravida non, tristique quis nibh."
        },
        {
            id: "3",
            title: "Books",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis erat interdum, euismod ipsum et, tempor est. In ac lobortis leo. Nam eu nisi velit. Integer mollis ornare dolor, at fringilla arcu efficitur eget. Duis sem lacus, tincidunt non gravida non, tristique quis nibh. Nunc tortor magna, hendrerit vitae augue sit amet, facilisis vulputate felis."
        },
    ];

    const rightColumnNotes = [
        {
            id: "2",
            title: "UI Design",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis erat interdum, euismod ipsum et, tempor est. In ac lobortis leo. Nam eu nisi velit. Integer mollis ornare dolor, at fringilla arcu efficitur eget. Duis sem lacus, tincidunt non gravida non, tristique quis nibh. Nunc tortor magna, hendrerit vitae augue sit amet, facilisis."
        },
        {
            id: "4",
            title: "Things to Buy",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis erat interdum, euismod ipsum et, tempor est. In ac lobortis leo. Nam eu nisi velit. Integer mollis ornare dolor, at fringilla arcu efficitur eget. Duis sem lacus, tincidunt non gravida non, tristique quis nibh. Nunc tortor magna, hendrerit vitae augue sit amet, facilisis vulputate felis. Duis fringilla tellus quis nibh. Nunc tortor magna."
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Personal Notes</Text>
                    <TouchableOpacity
                        style={styles.bellButton}
                        onPress={() => router.push("/notifications")}
                    >
                        <Ionicons name="notifications-outline" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.subHeaderRow}>
                    <Text style={styles.subHeader}>This Month</Text>
                    <Ionicons name="calendar-outline" size={16} color="#ccc" />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.masonryContainer}>
                    {/* Left Column */}
                    <View style={styles.column}>
                        {leftColumnNotes.map((note) => (
                            <TouchableOpacity
                                key={note.id}
                                style={styles.noteCard}
                                onPress={() => router.push({ pathname: "/note-detail", params: { title: note.title, content: note.content } })}
                            >
                                <Text style={styles.noteTitle}>{note.title}</Text>
                                <Text style={styles.noteContent}>{note.content}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Right Column */}
                    <View style={styles.column}>
                        {rightColumnNotes.map((note) => (
                            <TouchableOpacity
                                key={note.id}
                                style={styles.noteCard}
                                onPress={() => router.push({ pathname: "/note-detail", params: { title: note.title, content: note.content } })}
                            >
                                <Text style={styles.noteTitle}>{note.title}</Text>
                                <Text style={styles.noteContent}>{note.content}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
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
        marginTop: 10,
        marginBottom: 20,
    },
    headerTop: {
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    backButton: {
        paddingRight: 10,
        marginLeft: -5,
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 36,
        fontFamily: "BricolageGrotesque_800ExtraBold",
        flex: 1, // Allow text to wrap if needed or push bell
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
    scrollContent: {
        paddingBottom: 120,
    },
    masonryContainer: {
        flexDirection: "row",
        gap: 15,
    },
    column: {
        flex: 1,
        gap: 15,
    },
    noteCard: {
        borderRadius: 20,
        borderWidth: 0.7,
        borderColor: "#ffffffff",
        backgroundColor: "transparent",
        padding: 15,
    },
    noteTitle: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "BricolageGrotesque_800ExtraBold", // Using Bricolage as visual match for bold titles
        marginBottom: 10,
        textAlign: 'center', // Image shows centered titles
    },
    noteContent: {
        color: "#ccc",
        fontSize: 14,
        fontFamily: "Gilroy_500Medium",
        lineHeight: 20,
        textAlign: 'justify', // Tries to mimic the block text look
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
