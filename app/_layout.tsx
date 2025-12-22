import { BricolageGrotesque_800ExtraBold } from "@expo-google-fonts/bricolage-grotesque";
import { Brygada1918_700Bold } from "@expo-google-fonts/brygada-1918";
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_800ExtraBold, Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    BricolageGrotesque_800ExtraBold,
    Brygada1918_700Bold,
    "Gilroy_400Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy_500Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy_700Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy_800ExtraBold": require("../assets/fonts/Gilroy-ExtraBold.ttf"),
    "Gilroy_900Black": require("../assets/fonts/Gilroy-Black.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
