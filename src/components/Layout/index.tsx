import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '@provider';
import { createThemeMode, ThemeProvider, ThemeModeEnum, ThemeMode } from '@theme';
import { default as SEO } from './SEO';
import { default as GlobalStyle } from './GlobalStyle';
import { default as Header } from './Header';

const Layout: React.FC = ({ children }) => {
    const { state, dispatch } = useContext(GlobalContext);
    const { themeMode } = state;
    const handleChangeTheme = () => {
        const nextTheme: ThemeMode = ThemeModeEnum[ThemeModeEnum[themeMode] + 1] as ThemeMode;
        dispatch({ type: 'SET_THEME', payload: nextTheme });
    };
    return (
        <ThemeProvider theme={createThemeMode(themeMode)}>
            <SEO />
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <button onClick={handleChangeTheme}>current Theme: {themeMode}</button>
        </ThemeProvider>
    );
};

export default Layout;
