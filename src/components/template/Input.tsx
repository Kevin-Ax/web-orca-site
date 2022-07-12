import { HTMLInputTypeAttribute } from "react";

interface InputProps {
    type: HTMLInputTypeAttribute;
    className?: string;
    label?: string;
}

export function Input({ type, className, label }: InputProps) {
    return (
        <div>
            <label htmlFor={label}>{label}: </label>
            <input id={label} className={` ring-1 ring-blue-500 h-auto  ${className}`} type={type} />
        </div>
    );
}