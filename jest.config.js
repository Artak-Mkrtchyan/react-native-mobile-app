module.exports = {
	preset: "react-native",
	transform: {
		"^.+\\.js$": require.resolve("react-native/jest/preprocessor.js")
	},
	globals: {
		"ts-jest": {
			babelConfig: true
		}
	},
	setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>setup-tests.js"],
	transformIgnorePatterns: ["node_modules/(?!(jest-)?react-native|@?react-navigation)"]
};
