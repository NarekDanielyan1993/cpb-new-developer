import Loader from 'src/component/loader';
import { useProductsContext } from 'src/pages/products/context';
import BoardList from './boardList';
import StyledProductsContainer from './style';

function Products() {
    const { cards, isProductsLoading } = useProductsContext();
    return (
        <>
            {isProductsLoading && <Loader />}
            <StyledProductsContainer>
                <BoardList cards={cards} />
            </StyledProductsContainer>
        </>
    );
}

export default Products;
