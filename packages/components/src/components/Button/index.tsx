import React, { FC, MouseEventHandler } from 'react';

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    label: string;
}

const Button: FC<ButtonProps> = ({onClick, label}: ButtonProps) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;