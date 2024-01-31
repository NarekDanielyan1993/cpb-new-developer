/* eslint-disable no-underscore-dangle */
import { IProduct } from 'src/types';
import ProductCard from './boardCard';

function ProductList({ cards }: { cards: IProduct[] }) {
    return (
        Array.isArray(cards) &&
        cards.map((card) => {
            return <ProductCard url={card.url} id={card._id} key={card._id} text={card.bodyHtml} />;
        })
    );
}

export default ProductList;
