import { Ionicons } from "@expo/vector-icons";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { Button, Text, View, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import * as Clipboard from 'expo-clipboard';

export default function Home() {
  const [show, setShow] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");

  const updateEmoji = (emojiData: EmojiClickData, event: MouseEvent): void => {
    setSelectedEmoji(selectedEmoji + emojiData.emoji);
    // setShow(false);
  }

  const copyToClipboard = async (emoji: string) => {
    const res = await Clipboard.setStringAsync(emoji);
    await Alert.alert("Text copied", selectedEmoji)
  };

  const styles = createStyles({ show })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShow(!show)} style={styles.button}>
        <Text style={styles.buttonText}>
          {show ? "Close" : "Open"} Emoji Picker
        </Text>
      </TouchableOpacity>

      {selectedEmoji && show && (
        <Text style={{ marginHorizontal: 40, textAlign: "center" }}>Selected Emoji: {selectedEmoji}
          {/* <Ionicons name="copy" /> */}
          <Ionicons
            onPress={() => copyToClipboard(selectedEmoji)}
            name="clipboard"
            color="#202d66"
            style={{ 
              paddingHorizontal: 5, 
              paddingVertical: 3, 
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#eee",
              borderRadius: 3,
              }} />
        </Text>
      )}

      {show && (
        <EmojiPicker
          onEmojiClick={updateEmoji}
          lazyLoadEmojis
          searchPlaceHolder="Search emoji❤️..."
          className=""
          width="100%"
          height="60%"
          style={{
          }}
        />
      )}
    </View>
  )
}

const createStyles = (props: any) => {
  const { show } = props;
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: show ? "flex-end" : "center",
      alignItems: "center",
      gap: show ? 30 : 0,
    },
    button: {
      backgroundColor: "#202D66",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 140,
      borderRadius: 3,
      cursor: "pointer",
    },
    buttonText: {
      color: "white",
      fontSize: 14,
    }
  })
}