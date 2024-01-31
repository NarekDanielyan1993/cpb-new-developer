import { Outlet } from 'react-router-dom';
import { StyledLayout, StyledMain } from './style';

function Layout() {
    return (
        <StyledLayout>
            <StyledMain>
                <Outlet />
            </StyledMain>
        </StyledLayout>
    );
}

export default Layout;
