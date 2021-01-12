/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled from '@emotion/styled';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Zoom from '@material-ui/core/Zoom';

const Container = styled.div`
    position: fixed;
    bottom: ${(props) => props.theme.spacing(10)}px;
    right: ${(props) => props.theme.spacing(2)}px;
    z-index: ${(props) => props.theme.zIndex.modal - 1};
`;

const ScrollToTop: React.FC = () => {
    const trigger =
        typeof window !== `undefined`
            ? useScrollTrigger({
                  target: window,
                  disableHysteresis: true,
                  threshold: 100,
              })
            : false;

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={trigger}>
            <Container onClick={handleClick} role="presentation">
                <Fab color="primary" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Container>
        </Zoom>
    );
};

export default ScrollToTop;
