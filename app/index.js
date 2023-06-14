import { StyleSheet, Text, View, Image, ImageBackground} from "react-native";
import users from "../assets/data/users";

function UserCard({ user }) {

  return (
    <ImageBackground 
    style={styles.userCard}
    source={{ uri: user.coverImage }}
  >
      <View style={styles.overlay}/>
      <Image 
        src={user.avatar}
        style={styles.userImage}
      />
      <View>
        <Text 
          style={{ 
            color: "white", 
            fontSize: 22, 
            fontWeight: '500',
            marginBottom: 5, 
          }}
          >{user.name}</Text>
        <Text style={{ color: "white" }}>@{user.handle}</Text>
      </View>
    </ImageBackground>
  )
}

export default function Page() {
  return (
    <View style={styles.container}>
      <UserCard user={users[0]}/>
      <UserCard user={users[1]} />
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
    borderRadius: 5,
    // overflow: hidden needed for borderRadius to work 
    overflow: "hidden",
    marginVertical: 5, 
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFill,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    marginRight: 20,
  },
});
