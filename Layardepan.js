import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

function Layardepan() {
  return (
    <Stack.Navigator alignItems="center">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
  
    </Stack.Navigator>
  );
}

export default Layardepan;