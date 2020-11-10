import React, { useContext } from 'react';
import MuiContainer from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalContext } from '@provider';
import { ThemeProvider, styled } from '@theme';
import { default as SEO } from './SEO';
import { default as GlobalStyle } from './GlobalStyle';
import { default as Header } from './Header';

const Container = styled(MuiContainer)`
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => props.theme.spacing(12)}px;
    min-height: 100vh;
`;

const Layout: React.FC = ({ children }) => {
    const { state } = useContext(GlobalContext);
    const { themeMode } = state;
    return (
        <ThemeProvider themeMode={themeMode}>
            <SEO />
            <CssBaseline />
            <GlobalStyle />
            <Header />
            <Container>{children}</Container>
        </ThemeProvider>
    );
};

export default Layout;
