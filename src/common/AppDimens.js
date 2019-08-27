import { Dimensions, Platform, StatusBar } from "react-native";
import AppDevice from "./AppDevices";

const { width, height } = Dimensions.get("window");
const { isSmallScreen, isIphoneX } = AppDevice;

export default {
  width,
  height,
  extraBottom: isIphoneX ? 34 : 0,
  extraTop:
    Platform.OS === "ios" ? (isIphoneX ? 44 : 20) : StatusBar.currentHeight,
  padding: {
    tiny: isSmallScreen ? 6 : 8,
    small: isSmallScreen ? 8 : 12,
    regular: isSmallScreen ? 10 : 14,
    normal: isSmallScreen ? 12 : 16,
    medium: isSmallScreen ? 14 : 20,
    primary: isSmallScreen ? 18 : 24,
    large: isSmallScreen ? 24 : 32,
    super: isSmallScreen ? 32 : 64,
  },
  size: {
    little: 4,
    tiny: 8,
    small: 12,
    regular: 14,
    normal: 16,
    medium: 20,
    primary: 24,
    large: 32,
    super: 64,
  },
};
