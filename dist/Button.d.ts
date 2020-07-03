/// <reference types="react" />
import "./button.scss";
export declare const Button: ({ onClick, text, className }: ButtonProps) => JSX.Element;
interface ButtonProps {
    onClick: () => any;
    text: string;
    className?: string;
}
export {};
