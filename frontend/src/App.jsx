import {Container} from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default App;
