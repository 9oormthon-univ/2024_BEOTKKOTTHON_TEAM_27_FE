import * as S from "./App.style";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

function App() {
	return (
		<S.Wrapper>
			<RouterProvider router={router} />
		</S.Wrapper>
	);
}

export default App;
