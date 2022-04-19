import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Product from './views/Product';
import Catalog from './views/Catalog';
import ThanksPage from './views/ThanksPage';
import NotFound from './views/NotFound';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import AboutUs from './views/AboutUs';

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/aboutus' element={<AboutUs />} />
                    <Route exact path='/catalog/:id' element={<Catalog />} />
                    <Route exact path='/product/:id' element={<Product />} />
                    <Route exact path='/thanks' element={<ThanksPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router;