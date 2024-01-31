import withReduxDataFetching from 'src/component/hoc/widthReduxDataFetch';
import Products from 'src/module/boards';
import { useAppSelector } from 'src/store/createStore';
import { getProducts } from 'src/store/products/action';
import { productsSelector, productsSelectorProducts } from 'src/store/products/selector';
import { ProductsProvider } from './context';

function ProductsPage() {
    const { data: products } = useAppSelector(productsSelectorProducts);
    const { isLoading } = useAppSelector(productsSelector);

    return (
        <ProductsProvider
            values={{
                isProductsLoading: isLoading,
                cards: products,
            }}
        >
            <Products />
        </ProductsProvider>
    );
}

export default () =>
    withReduxDataFetching([
        {
            action: () => getProducts(),
            selector: productsSelectorProducts,
        },
    ])(ProductsPage);
