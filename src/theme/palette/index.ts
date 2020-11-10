import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { ThemeMode } from '../index';
const light: PaletteOptions = {
    type: 'light',
    primary: {
        light: '#7ccaff',
        main: '#1a9fff',
        dark: '#004a82',
        contrastText: '#fff',
    },

    secondary: {
        light: '#9f80ff',
        main: '#531aff',
        dark: '#1f0082',
        contrastText: '#fff',
    },
    background: {
        paper: '#fff',
        default: '#f6f6f6',
    },
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
    },
};

const dark: PaletteOptions = {
    type: 'dark',
    primary: {
        light: '#7ae0ff',
        main: '#1ac6ff',
        dark: '#0086b4',
        contrastText: '#fff',
    },

    secondary: {
        light: '#f77fff',
        main: '#f01aff',
        dark: '#a800b4',
        contrastText: '#fff',
    },
    background: {
        paper: '#191919',
        default: '#060606',
    },
    text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
    },
};

const deep: PaletteOptions = {
    type: 'dark',
    primary: {
        light: '#efe4ff',
        main: '#bb99ff',
        dark: '#884efc',
        contrastText: '#fff',
    },

    secondary: {
        light: '#fee4ff',
        main: '#ee99ff',
        dark: '#e050fd',
        contrastText: '#fff',
    },
    background: {
        paper: '#191919',
        default: '#000000',
    },
    text: {
        primary: '#f0f5fa',
        secondary: 'rgba(240, 245, 250, 0.7)',
        disabled: 'rgba(240, 245, 250, 0.5)',
        hint: 'rgba(240, 245, 250, 0.5)',
    },
};

const palette: Typing.IDictionary<ThemeMode, PaletteOptions> = {
    light,
    dark,
    deep,
};

export default palette;
