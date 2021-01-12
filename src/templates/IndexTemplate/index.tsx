import React from 'react';
import { Layout } from '@src/components';
import styled from '@emotion/styled';
const Container = styled.div``;

const IndexTemplate: React.FC = () => {
    return (
        <Layout title="Home">
            <Container>home page</Container>
        </Layout>
    );
};

export default IndexTemplate;
