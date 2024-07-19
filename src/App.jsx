import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Outlet />
      {/* <footer>Footer</footer> */}
    </>
  );
}

export default App;
 