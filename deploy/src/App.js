import CreateProduct from './Component/CreateProduct';
import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home';
import More from './Component/More';




function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/load-more" element={<More/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;