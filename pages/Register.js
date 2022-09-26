import React from "react";
import {
    Text,
    Link,
    HStack,
    Center,
    NativeBaseProvider,
    VStack,
    FormControl,
    Button,
    Input
} from "native-base";
import { TouchableOpacity } from "react-native";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";
import { API } from "../config/api";
// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};



export default function Register({ navigation }) {
    return (
        <NativeBaseProvider>
            <Center
                _dark={{ bg: "blueGray.900" }}
                _light={{ bg: "blueGray.50" }}
                px={4}
                flex={1}
            >
                <VStack space={2} alignItems="">
                    <LoginIcon />
                    <HStack alignItems="start" mt="5">
                        <Text fontSize="3xl" bold>Register</Text>
                    </HStack>
                    <FormControl my="3">
                        <Input type="email"
                            placeholder="Email"
                            value="email"
                            bold
                            bg="muted.200"
                        />
                    </FormControl>
                    <FormControl mb="3">
                        <Input type="name"
                            value="name"
                            placeholder="Name"
                            bold
                            bg="muted.200"
                            size="md"
                        />
                    </FormControl>
                    <FormControl >
                        <Input type="password"
                            placeholder="password"
                            value="password"
                            bold
                            bg="muted.200"
                            size="md"
                        />
                    </FormControl>
                    <Button variant="danger" bg="error.600" w="100%" mt="10" onPress={() => navigation.navigate('listtodo')}>
                        <Text bold color="white">Register</Text>
                    </Button>

                    <Center>
                        <Text mb="10">
                            Joined us before?
                            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                                <Text color="error.600" bold>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </Center>


                </VStack>
            </Center>
        </NativeBaseProvider>
    );
}
