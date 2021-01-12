import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GlobalContext } from '@provider';
import { targetPath } from '@util';

const AppBar = styled(MuiAppBar)`
    .title {
        flex-basis: 25%;
    }
    .nav {
        flex-basis: 65%;
        &__link {
            &:not(:last-child) {
                margin-right: ${(props) => props.theme.spacing(2)}px;
            }
        }
    }

    .setting {
        flex-basis: 10%;
    }
`;

const Header: React.FC = () => {
    const { site } = useStaticQuery<Typing.Query>(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    const { state, dispatch } = useContext(GlobalContext);
    const handleChangeTheme = () => {
        dispatch({ type: 'SET_NEXT_THEME' });
    };
    return (
        <AppBar position="fixed" color="default" variant="outlined">
            <Toolbar>
                <Link to="/" className="title">
                    <Typography variant="overline">{site.siteMetadata.title}</Typography>
                </Link>

                <nav className="nav">
                    <Link className="nav__link" to="/">
                        <Button variant="text" color="primary">
                            Home
                        </Button>
                    </Link>

                    <Link className="nav__link" to={targetPath('article')}>
                        <Button variant="text" color="primary">
                            Blog
                        </Button>
                    </Link>
                </nav>
                <div className="setting">
                    <Button color="secondary" variant="text" onClick={handleChangeTheme}>
                        {state.themeMode}
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
