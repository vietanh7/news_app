import { Platform } from "react-native";
import AppColors from "./AppColors";
import AppDimens from "./AppDimens";
import AppFonts from "./AppFonts";

const primaryTextStyle = {
  color: AppColors.primary,
  fontSize: AppDimens.size.normal,
  fontFamily: AppFonts.Regular,
};

const secondaryTextStyle = {
  color: AppColors.primary,
  fontSize: AppDimens.size.small,
  fontFamily: AppFonts.Regular,
};

const largeTextStyle = {
  color: AppColors.primary,
  fontSize: AppDimens.size.large,
};

const centerStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const rowCenterStyle = {
  flexDirection: "row",
  alignItems: "center",
};

const absoluteFill = {
  position: "absolute",
  bottom: 0,
  top: 0,
  right: 0,
  left: 0,
};

export default {
  primaryTextStyle,
  secondaryTextStyle,
  largeTextStyle,
  centerStyle,
  rowCenterStyle,
  absoluteFill,
  shadowObj: (opacity = 0.1, elevation = 3) =>
    Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: opacity,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
      },
      android: {
        elevation,
      },
    }),
};
