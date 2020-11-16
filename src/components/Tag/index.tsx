import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { styled } from '@theme';

const Button = styled(MuiButton)`
    text-transform: none;
`;

type IProps = {
    value: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Tag: React.FC<IProps> = ({ value, className, onClick }) => {
    return (
        <Button variant="text" color="secondary" className={className} onClick={onClick}>
            <span>#</span>
            <span>{value}</span>
        </Button>
    );
};

export default Tag;
