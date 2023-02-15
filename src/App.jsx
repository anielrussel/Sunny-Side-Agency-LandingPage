import './App.css'
import Col2 from './components/col2/Col2'
import Col3 from './components/col3/Col3'
import Col4 from './components/col4/Col4'
import Col5 from './components/col5/Col5'
import Col6 from './components/col6/Col6'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Col2 />
      <Col3 />
      <Col4 />
      <Col5 />
      <Col6 />
      <Footer />
    </div>
  )
}

export default App
