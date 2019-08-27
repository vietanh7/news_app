import { Share, Linking } from "react-native";

export default {
  share: (content, options) => {
    return Share.share(content, options);
  },
  openInBrowser: url => {
    if (!url) return;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  },
};
