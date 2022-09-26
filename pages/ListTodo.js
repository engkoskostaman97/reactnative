import React from "react";
import {
  VStack,
  HStack,
  Button,
  Text,
  Box,
  Avatar,
  Flex,
  Heading,
  FormControl,
  Input,
  Select,
  CheckCircleIcon,
  CircleIcon,
  ScrollView,
} from "native-base";
import { Fontisto } from '@expo/vector-icons';
import Profile from "../components/Profile";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function ListTodo({ navigation }) {
  return (
    <>
      <ScrollView >
        <Box m={5}>
          <HStack
            space={48}
            mb="8"
            w="90%"
            alignItems="center"
            justifyContent="center"
          >
            <VStack ml={5}>
              <Heading>Hi Engkos</Heading>
              <Text color="error.400">100k</Text>
            </VStack>
            <Flex Flex direction="row-reverse">
              <Avatar mr="1" source={{
                uri: "https://bit.ly/broken-link"
              }}>
                EK
              </Avatar>
            </Flex>
          </HStack>
          <FormControl bg="#e5e5e5" borderColor="#737373" mb="2">
            <Input
              placeholder="Search List ........."
              size="lg"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            />
          </FormControl>
          <HStack mb="8">
            <FormControl
              bg="#e5e5e5"
              w="38%"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            >
              <HStack mx="2">
                <Box mt="3">
                  <Fontisto name="date" color="#a3a3a3" size="12" />
                </Box>
                <Input placeholder="Choose Date" size="lg" />
              </HStack>
            </FormControl>
            <FormControl bg="#e5e5e5" w="30%" mx="2" borderRadius="5px">
              <Select
                placeholder="Category"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item
                  label="Web Development"
                  value="web"
                  borderColor="#737373"
                  borderWidth="1"
                />
              </Select>
            </FormControl>
            <FormControl bg="#e5e5e5" w="28%" borderRadius="5px">
              <Select
                placeholder="Status"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item
                  label="Web Development"
                  value="web"
                  borderColor="#737373"
                  borderWidth="1"
                />
              </Select>
            </FormControl>
          </HStack>
          <Box>
            <VStack bg="amber.100" py="2" px="4" mb="4">
              <HStack space={32}>
                <Text
                  bold
                  fontSize="12pt"
                  strikeThrough
                  onPress={() => navigation.navigate("detaillist")}
                >
                  Study-Golang-programing
                </Text>
                <Button bg="amber.400" px="2" py="0" h="22px">
                  Study
                </Button>
              </HStack>
              <HStack space={16}>
                <VStack color="e63946" pr="8">
                  <Text mb="6" color="#a3a3a3" strikeThrough>
                    Pelajatadkjakdg jkasdhdfgrdtdtd
                  </Text>
                  <HStack>
                    <Fontisto name="date" color="#a3a3a3" size="12" mt="3" />
                    <Text color="#a3a3a3" fontSize="8pt">
                      {" "}
                      19 July 2022
                    </Text>
                  </HStack>
                </VStack>

                <CheckCircleIcon
                  color="green.500"
                  size="30"
                //   pl="1"
                ></CheckCircleIcon>
              </HStack>
            </VStack>
            <VStack bg="amber.100" py="2" px="4" mb="4">
              <HStack space={32}>
                <Text
                  bold
                  fontSize="12pt"
                  strikeThrough
                  onPress={() => navigation.navigate("detaillist")}
                >
                  Study-Golang-programing
                </Text>
                <Button bg="amber.400" px="2" py="0" h="22px">
                  Study
                </Button>
              </HStack>
              <HStack space={16}>
                <VStack color="e63946" pr="8">
                  <Text mb="6" color="#a3a3a3" strikeThrough>
                    Pelajatadkjakdg jkasdhdfgrdtdtd
                  </Text>
                  <HStack>
                    <Fontisto name="date" color="#a3a3a3" size="12" mt="3" />
                    <Text color="#a3a3a3" fontSize="8pt">
                      {" "}
                      19 July 2022
                    </Text>
                  </HStack>
                </VStack>

                <CheckCircleIcon
                  color="green.500"
                  size="30"
                //   pl="1"
                ></CheckCircleIcon>
              </HStack>
            </VStack>

            <VStack bg="red.100" py="2" px="4" mb="10">
              <HStack space={32}>
                <Text bold fontSize="12pt" onPress={() => navigation.navigate("detaillist")}>
                  Study-Golang-programing
                </Text>
                <Button bg="blue.400" px="2" py="0" h="22px">
                  Study
                </Button>
              </HStack>
              <HStack space={16}>
                <VStack color="#a3a3a3" pr="8">
                  <Text mb="6" color="#a3a3a3">
                    Pelajatadkjakdg jkasdhdfgrdtdtd
                  </Text>
                  <HStack>
                    <Fontisto name="date" color="#a3a3a3" size="12" mt="3" />
                    <Text color="#a3a3a3" fontSize="8pt">
                      {" "}
                      19 July 2022
                    </Text>
                  </HStack>
                </VStack>
                <CircleIcon
                  color="#d4d4d4"
                  size="30"
                //   pl="1"
                ></CircleIcon>
              </HStack>
            </VStack>
          </Box>
          {/* <Menu /> */}
        </Box>
      </ScrollView>
    </>
  );
};


