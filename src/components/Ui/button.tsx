import React from "react";
import clsx  from "clsx";


type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' ;
    className?: string;
    isloading?: boolean;
    disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    type = 'button',
    children,
    variant = 'primary',
    className= '',
    isloading = false,
    disabled = false,
    ...props
}: ButtonProps) {
    const baseStyles="px-4 py-2 rounded-md  font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";
    primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300 ";
    
};

