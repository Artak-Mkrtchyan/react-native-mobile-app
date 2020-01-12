import React from "react";

import { FirebaseContext } from "../../firebase";
import Login from "./Login.component";
import { IProps } from "../../screens/loginScreen/types";

const LoginContainer: React.FC<IProps> = props => {
	return (
		<FirebaseContext.Consumer>
			{(firebase: any) => <Login firebase={firebase} navigation={props.navigation} />}
		</FirebaseContext.Consumer>
	);
};

export default LoginContainer;
