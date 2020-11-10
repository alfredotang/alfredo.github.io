import React from 'react';
import { Global, css } from '@emotion/core';
import { Theme } from '@theme';
const GlobalStyle: React.FC = () => {
    return (
        <Global
            styles={(theme: Theme) => css`
                body {
                    overflow-x: hidden;
                    -webkit-overflow-scrolling: touch;
                    width: 100vw;
                    a {
                        text-decoration: none;
                        &:visited,
                        :link,
                        :active {
                            color: inherit;
                        }
                    }
                }
                &::-webkit-scrollbar {
                    display: none;
                }

                /* &::-webkit-scrollbar-track {
                    background-color: ${theme.palette.background.default};
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    background-color: ${theme.palette.primary.main};
                    &:hover {
                        background-color: ${theme.palette.primary.light};
                    }
                } */
            `}
        />
    );
};

export default GlobalStyle;
