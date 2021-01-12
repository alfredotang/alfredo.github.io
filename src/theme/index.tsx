import React from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { default as palette, ThemeModeEnum, ThemeMode } from './palette';

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

export { ThemeMode, ThemeModeEnum, ThemeProvider, createThemeMode, DEFAULT_THEME };
