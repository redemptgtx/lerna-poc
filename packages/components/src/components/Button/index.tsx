import {FunctionComponent} from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const Button: FunctionComponent<ButtonProps> = ({onClick, label}) => <button onClick={onClick}>{label}</button>

export default Button;