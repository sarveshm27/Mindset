import { Audio as ExpoAudio, ResizeMode, Video } from "expo-av";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Intro3() {
    const videoRef = useRef<Video>(null);
    const router = useRouter();

    useEffect(() => {
        const setupAudio = async () => {
            try {
                await ExpoAudio.setAudioModeAsync({
                    playsInSilentModeIOS: true,
                    staysActiveInBackground: false,
                    shouldDuckAndroid: true,
                });
            } catch (error) {
                console.log("Audio mode error:", error);
            }
        };

        setupAudio();
    }, []);

    const handleSkip = () => {
        router.replace("/home"); // navigate to home screen
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                <StatusBar hidden />

                <Video
                    ref={videoRef}
                    source={require("../assets/videos/down3.mp4")}
                    style={styles.video}
                    resizeMode={ResizeMode.COVER}
                    shouldPlay
                    isLooping={false}
                    isMuted={false}
                    onLoad={async () => {
                        try {
                            await videoRef.current?.playAsync();
                        } catch (e) {
                            console.log("playAsync error:", e);
                        }
                    }}
                    onError={(error) => console.log("Video Error:", error)}
                    onPlaybackStatusUpdate={(status) => {
                        if (!status.isLoaded) return;
                        if (status.didJustFinish) {
                            handleSkip();
                        }
                    }}
                />

                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={handleSkip}
                    activeOpacity={0.8}
                >
                    <Text style={styles.skipText}>Skip »</Text>
                </TouchableOpacity>
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
    video: {
        width: "100%",
        height: "100%",
    },
    skipButton: {
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: "#fff",
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    skipText: {
        color: "#000",
        fontWeight: "600",
        fontSize: 16,
    },
});
