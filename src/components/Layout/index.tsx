import React, { Fragment } from 'react';
import { default as SEO } from './SEO';
import { default as GlobalStyle } from './GlobalStyle';
import { default as Header } from './Header';

const Layout: React.FC = ({ children }) => {
    return (
        <Fragment>
            <SEO />
            <GlobalStyle />
            <Header />
            <main>{children}</main>
        </Fragment>
    );
};

export default Layout;
