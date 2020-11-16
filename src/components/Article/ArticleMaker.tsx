import React from 'react';
import { styled } from '@theme';
import { default as ArticleList } from './ArticleList';

const ArticleMakerContainer = styled.div``;

type IProps = { data: Typing.MdxEdge[] };

const ArticleMaker: React.FC<IProps> = ({ data }) => {
    return (
        <ArticleMakerContainer>
            {data.map(({ node }) => (
                <ArticleList key={node.id} data={node} />
            ))}
        </ArticleMakerContainer>
    );
};

export default ArticleMaker;