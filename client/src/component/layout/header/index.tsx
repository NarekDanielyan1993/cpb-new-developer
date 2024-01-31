import RightPanel from './rightPanel';
import { StyledMainHeader, StyledTitle } from './style';

function MainHeader({ title }: { title: string }) {
    return (
        <StyledMainHeader>
            <StyledTitle>{title}</StyledTitle>
            <RightPanel />
        </StyledMainHeader>
    );
}

export default MainHeader;
