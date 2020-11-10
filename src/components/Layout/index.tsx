import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalContext } from '@provider';
import { ThemeProvider } from '@theme';
import { default as SEO } from './SEO';
import { default as GlobalStyle } from './GlobalStyle';
import { default as Header } from './Header';

const Layout: React.FC = ({ children }) => {
    const { state } = useContext(GlobalContext);
    const { themeMode } = state;
    return (
        <ThemeProvider themeMode={themeMode}>
            <SEO />
            <CssBaseline />
            <GlobalStyle />
            <Header />
            <Container>
                <Box mt={8}>{children}</Box>
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
