import RootRouter from "./routers";
import "./App.scss";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
	return (
		<div>
			<Header />
			<Container>
				<RootRouter />
			</Container>
		</div>
	);
}

export default App;
