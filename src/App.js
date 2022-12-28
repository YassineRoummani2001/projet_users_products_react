import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Users from "./components/Users";
import AddUsers from "./components/AddUsers";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import Index_index from "./components/Index_index";

function App() {
	return (
		<div className="App">
			<div>
				<Index_index />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="Users" element={<Users />} />
				<Route path="AddUsers" element={<AddUsers />} />
				<Route path="Products" element={<Products />} />
				<Route path="AddProducts" element={<AddProducts />} />
			</Routes>
		</div>
	);
}

export default App;
