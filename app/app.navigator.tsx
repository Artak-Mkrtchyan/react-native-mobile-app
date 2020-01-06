import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen/Login.screen";
import RegistrationScreen from "./screens/RegistrationScreen/Registration.screen";
import HomeScreen from "./screens/HomeScreen/Home.screen";

const MainNavigator = createStackNavigator(
	{
		Login: { screen: LoginScreen, navigationOptions: { title: "Login" } },
		Home: { screen: HomeScreen, navigationOptions: { title: "Home" } },
		Registration: {
			screen: RegistrationScreen,
			navigationOptions: { title: "Registration" }
		}
	},
	{
		initialRouteName: "Login"
	}
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
