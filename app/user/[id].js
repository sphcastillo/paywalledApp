import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import users from "../../assets/data/users";
import { Ionicons } from '@expo/vector-icons';

const ProfilePage = () => {
    const router = useRouter();

    const { id } = useSearchParams();

    const user = users.find(u => u.id === id);

    if(!user) {
        return <Text>User not found!</Text>
    }

    return (
        <View>
            <ImageBackground 
                source={{uri: user.coverImage }}
                style={styles.cover}
            >
                <View style={styles.overlay}/>
                <SafeAreaView style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                    <Ionicons 
                        name="arrow-back" 
                        size={24} 
                        color="white" 
                        onPress={() => router.back()}
                        style={{ marginRight: 10 }}
                    />
                    <View>
                        <Text style={{ 
                            color: 'white', 
                            fontSize: 20, 
                            fontWeight: '500',
                            marginBottom: 5,
                            }}
                        >
                            {user.name}
                        </Text>
                        <Text style={{ color: 'white'}}>
                            1.4K Posts · 64.3K Likes · 15.3K Fans
                        </Text>
                    </View>
                </SafeAreaView>

            </ImageBackground>

            <View>
                <Image src={user.avatar} style={styles.userImage} />
            </View>

            <Text>Profile page: {user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cover: {
        height: 200,
        width: '100%'
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

export default ProfilePage;