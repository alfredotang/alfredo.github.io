import React from 'react';
import { Layout } from '@src/components';
import { styled } from '@theme';
const Container = styled.div``;

const IndexTemplate: React.FC = () => {
    return (
        <Layout>
            <Container>home page</Container>
        </Layout>
    );
};

export default IndexTemplate;
