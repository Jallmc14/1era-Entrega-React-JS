import NavBar from "./components/NavBar"
import Carousel from "./components/Carousel"
import ItemListContainer from "./components/ItemListContainer"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <ItemListContainer mensaje={"Cuidarnos nos hace Feliz"} />
      <Banner />
      <Footer />
    </>
  )
}

export default App
