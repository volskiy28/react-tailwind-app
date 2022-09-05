import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Analytics from "./components/Analytics/Analytics";
import Cards from "./components/Cards/Cards";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
