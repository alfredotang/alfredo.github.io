import React, { FC, useState, Fragment } from 'react';
import { styled } from '@theme';
// import { default as MdxBackdrop } from './MdxBackdrop';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Img = styled.img`
    max-width: 700px;
    box-shadow: ${(props) => props.theme.shadows[1]} !important;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    cursor: pointer;
    :hover {
        box-shadow: ${(props) => props.theme.shadows[10]} !important;
    }
`;

const BackdropImg = styled.img`
    position: static !important;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    width: 100%;
    height: 100%;
`;

const MdxImg: FC = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Img {...props} onClick={handleClick} />
            <Dialog open={open} onClick={handleClose} maxWidth="lg" fullWidth>
                <BackdropImg {...props} onClick={handleClick} className="backdrop-img" />
            </Dialog>
        </Fragment>
    );
};

export default MdxImg;
