import { createMuiTheme } from '@material-ui/core/styles';
import styled, { CreateStyled } from '@emotion/styled';
import { Theme } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { useTheme as useEmotionTheme } from 'emotion-theming';
import themeConfig from '../../config/theme.yml';

export const useTheme = useEmotionTheme;
export const primaryTheme = createMuiTheme({});

// ;

export default styled as CreateStyled<Theme>;
