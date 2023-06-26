import { View, Text } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const ProfilePage = () => {
    const router = useRouter();

    return (
        <View style={{ marginTop: 100}}>
            <Text>ProfilePage</Text>
            <Text onPress={() => router.back()}>Go back</Text>
        </View>
    )
}

export default ProfilePage;