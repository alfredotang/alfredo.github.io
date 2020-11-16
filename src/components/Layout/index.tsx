import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalContext } from '@provider';
import { ThemeProvider, styled } from '@theme';
import { default as SEO } from './SEO';
import { default as GlobalStyle } from './GlobalStyle';
import { default as Header } from './Header';
import { default as ScrollToTop } from './ScrollToTop';

const Main = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => props.theme.spacing(12)}px;
    min-height: 100vh;
`;

type IProps = {
    title?: string;
    slug?: string;
    children: React.ReactNode;
};

const Layout: React.FC<IProps> = ({ children, title }) => {
    const { state } = useContext(GlobalContext);
    const { themeMode } = state;
    return (
        <ThemeProvider themeMode={themeMode}>
            <SEO title={title} />
            <CssBaseline />
            <GlobalStyle />
            <ScrollToTop />
            <Header />
            <Main>{children}</Main>
        </ThemeProvider>
    );
};

export default Layout;
