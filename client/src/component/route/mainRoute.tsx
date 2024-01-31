import { Route, Routes } from 'react-router-dom';
import { BASE_ROUTE } from 'src/constant';
import ProductsPage from 'src/pages/products';

function MainRoute() {
    return (
        <Routes>
            <Route element={<ProductsPage />} index path={BASE_ROUTE} />
        </Routes>
    );
}

export default MainRoute;
