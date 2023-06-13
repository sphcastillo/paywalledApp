import { StyleSheet, Text, View, Image} from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Image 
          src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png"
          style={styles.userImage}
        />
        <View>
          <Text>Elon Musk</Text>
          <Text>@elonmusk</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
  userCard: {
    backgroundColor: "gray",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  userImage: {
    width: 100,
    height: 100
  },
});
