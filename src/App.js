import Delivery from "./Components/Delivery";
import FeaturedItems from "./Components/FeaturedItem";
import TopNav from "./Components/TopNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <TopNav/>
       <FeaturedItems/>
       <Delivery/>
      </header>
    </div>
  );
}

export default App;
