import React from 'react';
import { Global, css } from '@emotion/core';
const GlobalStyle: React.FC = () => {
    return (
        <Global
            styles={css`
                body {
                    overflow-x: hidden;
                    -webkit-overflow-scrolling: touch;
                    a {
                        text-decoration: none;
                        &:visited,
                        :link,
                        :active {
                            color: inherit;
                        }
                    }
                }
            `}
        />
    );
};

export default GlobalStyle;
