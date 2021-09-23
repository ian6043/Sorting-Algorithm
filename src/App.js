import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import Header from "./SortingVisualizer/components/Header";
import Footer from "./SortingVisualizer/components/Footer";

function App() {
  return (
    <>
    <Header/>
    <div className="container">
    <SortingVisualizer/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
