import { Stack } from 'expo-router';
import { Amplify, Hub, API } from 'aws-amplify';
import awsconfig from "../src/aws-exports";
import { Authenticator } from '@aws-amplify/ui-react-native';
import { useEffect } from 'react';

Amplify.configure(awsconfig);

const CreateUserMutation  = `
mutation createUser($input: CreateUserInput!) {
    createUser(input: $input){
      id
      name
      handle
      bio
      subscriptionPrice
    }
}
`;

export default function RootLayout() {
    // is to connect our Cognito user with our database user
    useEffect(() => {
        const removeListener = Hub.listen('auth', async (data) => {
            // console.log("data: ", JSON.stringify(data, null, 2));
            if(data.payload.event === 'signIn'){
                const userInfo = data.payload.data.attributes;
                console.log("user info: ", JSON.stringify(userInfo, null, 2));
            //  needs to be added
            // can't if user is already safe, so don't save again

                const newUser  = {
                    id: userInfo.sub,
                    name: userInfo.name,
                    handle: userInfo.nickname,
                    subscriptionPrice: 0,
                };
                await API.graphql({ 
                    query: CreateUserMutation, 
                    variables: {  input: newUser }
                });
                console.log("User saved in DATABASE");
            };
        });

        return () => {
            // cleanup function
            removeListener();
        }
    }, []);

    return (
        <Authenticator.Provider>
            <Authenticator>
            <   Stack screenOptions={{ headerShown: false }}/>
            </Authenticator>
        </Authenticator.Provider>
    )
}