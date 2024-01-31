import { ChakraProvider } from '@chakra-ui/react';
import MainRoute from 'src/component/route/mainRoute';
import theme from 'src/styles/chakra/theme';

function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <MainRoute />
            </ChakraProvider>
        </>
    );
}

export default App;
