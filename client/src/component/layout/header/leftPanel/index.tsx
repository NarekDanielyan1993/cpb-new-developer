import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function LeftPanel() {
    const { id } = useParams();
    return (
        <Flex flex={1} justify="left">
        </Flex>
    );
}

export default LeftPanel;
