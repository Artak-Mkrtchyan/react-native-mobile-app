/**
 * @format
 */

import "react-native";
import React from "react";
import { SafeAreaView, Button, TextInput, Text, Image } from "react-native";
import { shallow } from "enzyme";

import App from "../App";
import LoginScreen from "../app/screens/LoginScreen/Login.screen";
import HomeScreen from "../app/screens/HomeScreen/Home.screen";
import RegistrationScreen from "../app/screens/RegistrationScreen/Registration.screen";

import Login from "../app/components/LoginComponent/Login.component";
import Registration from "../app/components/RegistrationComponent/Registration.component";
import Home from "../app/components/HomeComponent/Home.component";

import renderer from "react-test-renderer";

it("renders correctly", () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});

it("LoginScreen", () => {
	const navigation = { navigate: jest.fn() };
	expect(renderer.create(<LoginScreen navigation={navigation} />)).toMatchSnapshot();
});

it("HomeScreen", () => {
	const navigation = { navigate: jest.fn() };
	expect(renderer.create(<HomeScreen navigation={navigation} />)).toMatchSnapshot();
});

it("RegistrationScreen", () => {
	const navigation = { navigate: jest.fn() };
	expect(renderer.create(<RegistrationScreen navigation={navigation} />)).toMatchSnapshot();
});

const navigation = { navigate: jest.fn() };

describe("LoginComponent", () => {
	describe("rendering", () => {
		let wrapper = shallow(<Login navigation={navigation} />);

		it("Login elements", () => {
			expect(wrapper.find(SafeAreaView)).toHaveLength(1);
			expect(wrapper.find(Button).length).toBe(2);
			expect(wrapper.find(TextInput).length).toBe(2);
		});
	});
});

describe("RegistrationComponent", () => {
	describe("rendering", () => {
		let wrapper = shallow(<Registration navigation={navigation} />);

		it("Registration elements", () => {
			expect(wrapper.find(SafeAreaView)).toHaveLength(1);
			expect(wrapper.find(Button).length).toBe(2);
			expect(wrapper.find(TextInput).length).toBe(2);
		});
	});
});

describe("HomeComponent", () => {
	describe("rendering", () => {
		let wrapper = shallow(<Home navigation={navigation} />);

		it("Home elements", () => {
			expect(wrapper.find(SafeAreaView)).toHaveLength(1);
			expect(wrapper.find(Button).length).toBe(1);
			expect(wrapper.find(Text).length).toBe(1);
		});
	});
});
