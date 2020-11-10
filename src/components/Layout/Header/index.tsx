import React, { useContext } from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GlobalContext } from '@provider';
import { styled } from '@theme';

const AppBar = styled(MuiAppBar)`
    .title {
        flex-grow: 1;
    }
`;

const Header: React.FC = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const handleChangeTheme = () => {
        dispatch({ type: 'SET_NEXT_THEME' });
    };
    return (
        <AppBar position="static" color="transparent" variant="outlined">
            <Toolbar>
                <Typography variant="overline" className="title">
                    Header
                </Typography>
                <Button color="secondary" variant="text" onClick={handleChangeTheme}>
                    {state.themeMode}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
