import React from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core/styles';
import EmotionStyled, { CreateStyled } from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { useTheme, ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { default as palette } from './palette';

enum ThemeModeEnum {
    light = 0,
    dark = 1,
    deep = 2,
}

type ThemeMode = keyof typeof ThemeModeEnum;

type IThemeProviderPropsProps = {
    themeMode: ThemeMode;
};

const DEFAULT_THEME: ThemeMode = 'light';
const createThemeMode = (themeMode: ThemeMode = DEFAULT_THEME): Theme => {
    const mode = ThemeModeEnum[ThemeModeEnum[themeMode]] || ThemeModeEnum[ThemeModeEnum[DEFAULT_THEME]];
    const theme = palette[mode];
    return createMuiTheme({
        palette: theme,
        overrides: {
            MuiAppBar: {
                colorDefault: {
                    backgroundColor: theme.background.default,
                    color: theme.text.primary,
                },
            },
        },
    });
};

const ThemeProvider: React.FC<IThemeProviderPropsProps> = ({ children, themeMode }) => {
    const theme = createThemeMode(themeMode);
    return (
        <MuiThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
        </MuiThemeProvider>
    );
};
const styled: CreateStyled<Theme> = EmotionStyled;

export {
    ThemeMode,
    ThemeModeEnum,
    ThemeProvider,
    createThemeMode,
    useTheme,
    DEFAULT_THEME,
    Theme,
    styled,
    css,
    keyframes,
};
