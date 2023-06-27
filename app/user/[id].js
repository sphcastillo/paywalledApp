import { useRouter, useSearchParams } from 'expo-router';
import users from "../../assets/data/users";
import { useState } from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';

const ProfilePage = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const router = useRouter();
    const { id } = useSearchParams();

    const user = users.find(u => u.id === id);

    if(!user) {
        return <Text>User not found!</Text>
    }

    return (
        <UserProfileHeader 
            user={user}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
        />
    )
}


export default ProfilePage;