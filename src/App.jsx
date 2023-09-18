import "./App.css";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search.jsx";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Blog from "./components/Blog/Blog.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Search />
      </div>
      <Residencies/>
      <Value/>
      <Blog/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
