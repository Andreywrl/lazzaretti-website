import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Product from './views/Product';
import Catalog from './views/Catalog';
import ThanksPage from './views/ThanksPage';
import NotFound from './views/NotFound';


function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/catalog/:id' element={<Catalog />} />
                    <Route exact path='/product/:id' element={<Product />} />
                    <Route exact path='/thanks' element={<ThanksPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;