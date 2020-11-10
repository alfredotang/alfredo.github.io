import React from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import styled, { CreateStyled } from '@emotion/styled';
import { Theme } from '@material-ui/core/styles';
import { useTheme as useEmotionTheme, ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { default as palette } from './palette';
import { ThemeMode } from './theme';

enum ThemeModeEnum {
    light,
    dark,
    deep,
}
const DEFAULT_THEME: ThemeMode = 'light';
const useTheme = useEmotionTheme;
const createThemeMode = (themeMode: ThemeMode = DEFAULT_THEME): Theme => {
    const mode = ThemeModeEnum[ThemeModeEnum[themeMode]] || ThemeModeEnum[ThemeModeEnum[DEFAULT_THEME]];
    return createMuiTheme({ palette: palette[mode] });
};

type IThemeProviderPropsProps = {
    theme: Theme;
};
const ThemeProvider: React.FC<IThemeProviderPropsProps> = ({ children, theme }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
        </MuiThemeProvider>
    );
};

export { ThemeMode, ThemeModeEnum, ThemeProvider, createThemeMode, useTheme, DEFAULT_THEME };
export default styled as CreateStyled<Theme>;
