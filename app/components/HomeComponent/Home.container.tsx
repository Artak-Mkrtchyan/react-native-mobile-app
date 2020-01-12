import React from "react";

import { FirebaseContext } from "../../firebase";
import Home from "./Home.component";
import { IProps } from "../../screens/loginScreen/types";

const HomeContainer: React.FC<IProps> = props => {
	return (
		<FirebaseContext.Consumer>
			{(firebase: any) => <Home firebase={firebase} navigation={props.navigation} />}
		</FirebaseContext.Consumer>
	);
};

export default HomeContainer;
