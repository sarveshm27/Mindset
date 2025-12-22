import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NoteDetail() {
    const router = useRouter();
    const params = useLocalSearchParams();

    // Initialize state with passed params or empty strings for new note
    const [title, setTitle] = useState(params.title as string || "");
    const [content, setContent] = useState(params.content as string || "");

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()} style={styles.saveButton}>
                    <Ionicons name="checkmark" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Editor */}
            <View style={styles.editorContainer}>
                <TextInput
                    style={styles.titleInput}
                    placeholder="Title"
                    placeholderTextColor="#666"
                    value={title}
                    onChangeText={setTitle}
                    multiline
                />
                <TextInput
                    style={styles.contentInput}
                    placeholder="Start writing..."
                    placeholderTextColor="#666"
                    value={content}
                    onChangeText={setContent}
                    multiline
                    textAlignVertical="top"
                />
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
        marginBottom: 20,
    },
    backButton: {
        padding: 5,
        marginLeft: -5,
    },
    saveButton: {
        padding: 5,
        marginRight: -5,
    },
    editorContainer: {
        flex: 1,
        gap: 20,
    },
    titleInput: {
        fontSize: 36,
        fontFamily: "BricolageGrotesque_800ExtraBold",
        color: "#fff",
    },
    contentInput: {
        flex: 1,
        fontSize: 18,
        fontFamily: "Gilroy_500Medium",
        color: "#ccc",
        lineHeight: 28,
    },
});
