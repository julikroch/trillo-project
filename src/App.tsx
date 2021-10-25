import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
