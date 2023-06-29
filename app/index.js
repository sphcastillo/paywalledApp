import { StyleSheet, View, FlatList, Text } from "react-native";
// import  users from "../assets/data/users";
import UserCard from "../src/components/UserCard";
import { Link } from 'expo-router';
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import  { useState, useEffect } from 'react';
import { DataStore } from "aws-amplify";
import { User } from "../src/models";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, []);

  const { signOut } = useAuthenticator();
  return (
    <View style={styles.container}>
      <Link href={'/newPost'}>New post</Link>
      <Text onPress={() =>  signOut()}>Sign out</Text>
      <FlatList 
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
})