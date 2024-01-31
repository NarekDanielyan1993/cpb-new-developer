import { ImageCanvas } from 'src/component/image';
import {
    StyledCardContent,
    StyledCardContentText,
    StyledCardHeader,
    StyledProductCard
} from './style';

function ProductCard({ text, id, url }: { url: string; text: string; id: string }) {
    return (
        <StyledProductCard>
            <StyledCardHeader>
                <ImageCanvas imageUrl={url}  />
            </StyledCardHeader>
            <StyledCardContent>
                <StyledCardContentText dangerouslySetInnerHTML={{__html: text?.substring(0, 13)}} />
            </StyledCardContent>
        </StyledProductCard>
    );
}

export default ProductCard;
