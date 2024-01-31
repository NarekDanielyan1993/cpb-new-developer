import { createContext, useContext } from 'react';
import { IProductsContext } from 'src/types/context';

const ProductsContext = createContext<IProductsContext | undefined>(undefined);

function ProductsProvider({
    children,
    values,
}: {
    values: IProductsContext;
    children: React.ReactNode;
}) {
    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    );
}

const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error(
            'useProductsContext must be used within a ProductsContextProvider'
        );
    }
    return context;
};

export { ProductsProvider, useProductsContext };
export default ProductsContext;
