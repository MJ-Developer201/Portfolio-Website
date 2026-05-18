import "./App.css";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import Capstone from "./components/Capstone";

function App() {
  return (
    <>
      <Container disableGutters>
        <Navbar />
        <Intro />
        <Capstone />
        <Skills />
        <Footer />
      </Container>
    </>
  );
}

export default App;
