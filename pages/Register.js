import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
    VStack,
    Image,
    Center,
    HStack,
    Button,
    Text,
    Box,
    Heading,
    FormControl,
    Input,
    Link,
} from "native-base";
import login from "../image/Login Icon.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
    let [register, setRegister] = useState({
        firstName: "",
        email: "",
        password: "",
    });

    const handleChanges = (title, value) => {
        setRegister({
            ...register,
            [title]: value,
        });
    };
    console.log(register);

    const handleRegister = async () => {
        try {
            const config = {
                Headers: {
                    "Content-type": "application/json",
                },
            };

            const body = JSON.stringify(register);

            const res = await axios.post(
                "https://api.kontenbase.com/query/api/v1/c69a3570-67bf-4476-882f-3bf7c51ab1be/auth/register",
                body,
                config
            );
            if (res) {
                await AsyncStorage.setItem("token", res.data.token);
            }
            const value = await AsyncStorage.getItem("token");
            if (value != null) {
                console.log(value);
                navigation.navigate("login");
            }
        } catch (error) {
            console.log(error);
            alert(error.res.data.message);
        }
    };

    // useEffect(() => {
    //   handleRegister();
    // }, []);

    return (
        <Box w="100%" display="flex" flex={1} alignItems="center">
            <Center w="100%">
                <Box safeArea p="2" py="8" w="100%" maxW="300">
                    <Image source={login} alt="Alternate Text" size="200" width={"500"} />

                    <Heading
                        mt={10}
                        size="lg"
                        fontWeight="600"
                        color="coolGray.800"
                        bold
                        _dark={{
                            color: "warmGray.50",
                        }}
                    >
                        Register
                    </Heading>
                    <VStack space={4} mt="5">
                        <FormControl bg="#e5e5e5" borderColor="#737373">
                            <Input
                                type="email"
                                placeholder="Email"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                                onChangeText={(value) => handleChanges("email", value)}
                                value={register.email}
                            />
                        </FormControl>
                        <FormControl bg="#e5e5e5">
                            <Input
                                type="name"
                                placeholder="Name"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                                onChangeText={(value) => handleChanges("firstName", value)}
                                value={register.firstName}
                            />
                        </FormControl>
                        <FormControl bg="#e5e5e5">
                            <Input
                                type="password"
                                placeholder="Password"
                                size="lg"
                                borderColor="#737373"
                                borderWidth="1"
                                borderRadius="5px"
                                onChangeText={(value) => handleChanges("password", value)}
                                value={register.password}
                            />
                        </FormControl>
                        <Button
                            mt="8"
                            colorScheme="indigo"
                            bg="#ef4444"
                            onPress={handleRegister}
                        >
                            <Text bold color="white" fontSize="16px">
                                Register
                            </Text>
                        </Button>
                        <HStack justifyContent="center">
                            <Text
                                fontSize="sm"
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                            >
                                Joined us before ?{" "}
                            </Text>
                            <Link
                                _text={{
                                    color: "#ef4444",
                                    fontWeight: "medium",
                                    fontSize: "sm",
                                }}
                                href="#"
                                bold
                            >
                                <Text
                                    bold
                                    color="#ef4444"
                                    onPress={() => navigation.navigate("login")}
                                >
                                    Login
                                </Text>
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
};

export default Register;

const styles = StyleSheet.create({});